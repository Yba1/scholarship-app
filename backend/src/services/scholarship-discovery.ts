import { z } from "zod";

import { env } from "../config/env.js";
import { prisma } from "../lib/prisma.js";

const placeholderHosts = ["example.org", "example.com", "localhost", "127.0.0.1"];

const tavilySearchResultSchema = z.object({
  title: z.string(),
  url: z.string().url(),
  content: z.string().optional().default("")
});

const tavilySearchResponseSchema = z.object({
  results: z.array(tavilySearchResultSchema).default([])
});

const discoveredScholarshipSchema = z.object({
  title: z.string().min(3),
  organization: z.string().min(2),
  amount: z.number().int().nonnegative(),
  description: z.string().min(20),
  deadline: z.string().datetime(),
  gpaMin: z.number().min(0).max(4.5).nullable().optional(),
  majorRequired: z.string().nullable().optional(),
  stateRequired: z.string().nullable().optional(),
  countryRequired: z.string().nullable().optional(),
  genderRequired: z.string().nullable().optional(),
  ethnicityRequired: z.string().nullable().optional(),
  financialNeedRequired: z.boolean().optional().default(false),
  essayRequired: z.boolean().optional().default(false),
  estimatedApplicants: z.number().int().positive(),
  numberOfWinners: z.number().int().positive(),
  applicationUrl: z.string().url()
});

function coerceString(value: unknown, fallback = "") {
  return typeof value === "string" ? value.trim() : fallback;
}

function normalizeDeadlineFromText(text: string) {
  const isoMatch = text.match(/\b(20\d{2}-\d{2}-\d{2})\b/);
  if (isoMatch) {
    const parsed = new Date(`${isoMatch[1]}T00:00:00.000Z`);
    if (!Number.isNaN(parsed.getTime())) {
      return parsed.toISOString();
    }
  }

  const monthMatch = text.match(/\b(january|february|march|april|may|june|july|august|september|october|november|december)\s+\d{1,2}(?:,\s*20\d{2})?/i);
  if (monthMatch) {
    const parsed = new Date(monthMatch[0]);
    if (!Number.isNaN(parsed.getTime())) {
      return parsed.toISOString();
    }
  }

  return new Date(Date.now() + 1000 * 60 * 60 * 24 * 120).toISOString();
}

function extractAmount(text: string) {
  const matches = [...text.matchAll(/\$(\d{1,3}(?:,\d{3})+|\d+)(?:\s*(?:scholarship|award|grant))?/g)];
  if (!matches.length) {
    return 1000;
  }

  const values = matches
    .map((match) => Number(match[1].replace(/,/g, "")))
    .filter((value) => Number.isFinite(value) && value >= 0);

  return values.length ? Math.max(...values) : 1000;
}

function buildSearchUrl(title: string, organization: string) {
  const query = encodeURIComponent(`${title} ${organization} scholarship`);
  return `https://www.google.com/search?q=${query}`;
}

function isPlaceholderUrl(url: string) {
  const normalized = url.trim().toLowerCase();
  return placeholderHosts.some((host) => normalized.includes(host));
}

function normalizeHostToOrganization(url: string) {
  try {
    const hostname = new URL(url).hostname.replace(/^www\./, "");
    const [primary] = hostname.split(".");
    return primary
      .split(/[-_]/g)
      .filter(Boolean)
      .map((segment) => segment.charAt(0).toUpperCase() + segment.slice(1))
      .join(" ");
  } catch {
    return "Scholarship Sponsor";
  }
}

function extractTitleAndOrganization(title: string, url: string) {
  const separators = [" | ", " - ", " — ", ": "];

  for (const separator of separators) {
    if (title.includes(separator)) {
      const [left, right] = title.split(separator).map((part) => part.trim()).filter(Boolean);
      if (left && right) {
        return {
          title: left,
          organization: right
        };
      }
    }
  }

  return {
    title,
    organization: normalizeHostToOrganization(url)
  };
}

function sanitizeApplicationUrl(rawUrl: string, title: string, organization: string) {
  return rawUrl.startsWith("http") && !isPlaceholderUrl(rawUrl)
    ? rawUrl
    : buildSearchUrl(title, organization);
}

function buildSearchQueries(student: {
  majorInterest: string;
  state: string;
  country: string;
  firstGeneration: boolean;
  financialNeed: boolean;
  activities: string[];
}, options?: {
  query?: string;
  major?: string;
  state?: string;
}) {
  const major = coerceString(options?.major || student.majorInterest);
  const state = coerceString(options?.state || student.state);
  const country = coerceString(student.country || "USA");
  const freeText = coerceString(options?.query);
  const activity = student.activities.find((value) => value.trim().length > 0);

  return Array.from(
    new Set(
      [
        [freeText, major, "scholarship", state, country].filter(Boolean).join(" "),
        [major, "scholarship", country].filter(Boolean).join(" "),
        [student.firstGeneration ? "first generation" : "", student.financialNeed ? "financial need" : "", major, "scholarship"].filter(Boolean).join(" "),
        [activity || "", major, "grant", state].filter(Boolean).join(" ")
      ].filter((query) => query.length > 0)
    )
  ).slice(0, 4);
}

async function searchTavily(query: string, maxResults: number) {
  if (!env.TAVILY_API_KEY) {
    return [] as z.infer<typeof tavilySearchResultSchema>[];
  }

  const response = await fetch("https://api.tavily.com/search", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${env.TAVILY_API_KEY}`
    },
    body: JSON.stringify({
      query,
      topic: "general",
      search_depth: "basic",
      max_results: Math.min(Math.max(maxResults, 1), 20),
      include_answer: false,
      include_raw_content: false
    })
  });

  if (!response.ok) {
    throw new Error(`Tavily search failed with status ${response.status}.`);
  }

  const payload = tavilySearchResponseSchema.parse(await response.json());
  return payload.results;
}

function normalizeSearchResult(
  result: z.infer<typeof tavilySearchResultSchema>,
  student: {
    majorInterest: string;
    state: string;
    country: string;
    financialNeed: boolean;
  },
  options?: {
    query?: string;
    major?: string;
    state?: string;
  }
) {
  const combinedText = [result.title, result.content].join(" ");
  const parsed = extractTitleAndOrganization(result.title, result.url);
  const lowerText = combinedText.toLowerCase();

  return discoveredScholarshipSchema.parse({
    title: parsed.title,
    organization: parsed.organization,
    amount: extractAmount(combinedText),
    description:
      combinedText.length >= 20
        ? combinedText
        : `${parsed.title} scholarship opportunity from ${parsed.organization}.`,
    deadline: normalizeDeadlineFromText(combinedText),
    gpaMin: null,
    majorRequired: coerceString(options?.major || student.majorInterest) || null,
    stateRequired: coerceString(options?.state || student.state) || null,
    countryRequired: coerceString(student.country) || null,
    genderRequired: null,
    ethnicityRequired: null,
    financialNeedRequired: lowerText.includes("financial need") || student.financialNeed,
    essayRequired: lowerText.includes("essay") || lowerText.includes("personal statement"),
    estimatedApplicants: 500,
    numberOfWinners: 10,
    applicationUrl: sanitizeApplicationUrl(result.url, parsed.title, parsed.organization)
  });
}

async function cleanupDemoScholarships() {
  const demoScholarships = await prisma.scholarship.findMany({
    where: {
      OR: placeholderHosts.map((host) => ({
        applicationUrl: { contains: host, mode: "insensitive" }
      }))
    },
    select: { id: true }
  });

  if (!demoScholarships.length) {
    return;
  }

  const scholarshipIds = demoScholarships.map((scholarship) => scholarship.id);

  await prisma.$transaction([
    prisma.match.deleteMany({ where: { scholarshipId: { in: scholarshipIds } } }),
    prisma.application.deleteMany({ where: { scholarshipId: { in: scholarshipIds } } }),
    prisma.scholarship.deleteMany({ where: { id: { in: scholarshipIds } } })
  ]);
}

async function loadFallbackScholarships(
  userId: string,
  options?: {
    query?: string;
    major?: string;
    state?: string;
    limit?: number;
  }
) {
  const student = await prisma.studentProfile.findUnique({
    where: { userId }
  });

  if (!student) {
    throw new Error("Student profile not found.");
  }

  const query = coerceString(options?.query).trim();
  const major = coerceString(options?.major || student.majorInterest).trim();
  const state = coerceString(options?.state || student.state).trim();

  return prisma.scholarship.findMany({
    where: {
      AND: [
        {
          NOT: placeholderHosts.map((host) => ({
            applicationUrl: { contains: host, mode: "insensitive" }
          }))
        },
        state ? { OR: [{ stateRequired: state }, { stateRequired: null }] } : {},
        major
          ? {
              OR: [
                { majorRequired: { contains: major, mode: "insensitive" } },
                { majorRequired: null }
              ]
            }
          : {},
        query
          ? {
              OR: [
                { title: { contains: query, mode: "insensitive" } },
                { organization: { contains: query, mode: "insensitive" } },
                { description: { contains: query, mode: "insensitive" } }
              ]
            }
          : {}
      ]
    },
    orderBy: [{ deadline: "asc" }, { amount: "desc" }],
    take: Math.min(Math.max(options?.limit ?? 12, 1), 20)
  });
}

export async function discoverScholarshipsForUser(
  userId: string,
  options?: {
    query?: string;
    major?: string;
    state?: string;
    limit?: number;
  }
) {
  await cleanupDemoScholarships();

  const student = await prisma.studentProfile.findUnique({
    where: { userId }
  });

  if (!student) {
    throw new Error("Student profile not found.");
  }

  if (!env.TAVILY_API_KEY) {
    return loadFallbackScholarships(userId, options);
  }

  const limit = Math.min(Math.max(options?.limit ?? 12, 5), 20);
  const queries = buildSearchQueries(student, options);
  const perQueryCount = Math.min(8, Math.max(4, Math.ceil(limit / Math.max(1, queries.length)) + 1));

  let searchResults: z.infer<typeof tavilySearchResultSchema>[] = [];

  try {
    const batches = await Promise.all(queries.map((query) => searchTavily(query, perQueryCount)));
    const seenUrls = new Set<string>();

    searchResults = batches
      .flat()
      .filter((result) => {
        const scholarshipLike = /(scholarship|grant|fellowship|tuition|financial aid|award)/i.test(
          `${result.title} ${result.content}`
        );

        if (!scholarshipLike || isPlaceholderUrl(result.url) || seenUrls.has(result.url)) {
          return false;
        }

        seenUrls.add(result.url);
        return true;
      })
      .slice(0, limit);
  } catch (error) {
    console.error("Tavily scholarship discovery failed:", error);
    return loadFallbackScholarships(userId, options);
  }

  if (!searchResults.length) {
    return loadFallbackScholarships(userId, options);
  }

  const upserted = [] as Awaited<ReturnType<typeof prisma.scholarship.upsert>>[];

  for (const result of searchResults) {
    const scholarship = normalizeSearchResult(result, student, options);

    const record = await prisma.scholarship.upsert({
      where: {
        title_organization: {
          title: scholarship.title,
          organization: scholarship.organization
        }
      },
      update: {
        ...scholarship,
        deadline: new Date(scholarship.deadline)
      },
      create: {
        ...scholarship,
        deadline: new Date(scholarship.deadline)
      }
    });

    upserted.push(record);
  }

  return upserted;
}
