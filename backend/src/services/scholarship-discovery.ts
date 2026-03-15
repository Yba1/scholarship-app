import { OpenAI } from "openai";
import { z } from "zod";

import { env } from "../config/env.js";
import { prisma } from "../lib/prisma.js";

const client = env.FEATHERLESS_API_KEY
  ? new OpenAI({
      apiKey: env.FEATHERLESS_API_KEY,
      baseURL: "https://api.featherless.ai/v1"
    })
  : null;

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

const discoveryResponseSchema = z.array(discoveredScholarshipSchema);

const normalizedScholarshipSchema = z.object({
  title: z.string().min(3),
  organization: z.string().min(2),
  amount: z.number().int().nonnegative(),
  description: z.string().min(20),
  deadline: z.string(),
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

function coerceNumber(value: unknown, fallback: number) {
  if (typeof value === "number" && Number.isFinite(value)) {
    return value;
  }

  if (typeof value === "string") {
    const cleaned = value.replace(/[^0-9.]/g, "");
    const parsed = Number(cleaned);

    if (Number.isFinite(parsed)) {
      return parsed;
    }
  }

  return fallback;
}

function coerceBoolean(value: unknown) {
  if (typeof value === "boolean") {
    return value;
  }

  if (typeof value === "string") {
    return ["true", "yes", "1"].includes(value.trim().toLowerCase());
  }

  return false;
}

function coerceString(value: unknown, fallback = "") {
  return typeof value === "string" ? value.trim() : fallback;
}

function normalizeDeadline(value: unknown) {
  const raw = coerceString(value);

  if (!raw) {
    return new Date(Date.now() + 1000 * 60 * 60 * 24 * 90).toISOString();
  }

  const parsed = new Date(raw);

  if (!Number.isNaN(parsed.getTime())) {
    return parsed.toISOString();
  }

  return new Date(Date.now() + 1000 * 60 * 60 * 24 * 90).toISOString();
}

function extractJsonArray(raw: string) {
  const start = raw.indexOf("[");
  const end = raw.lastIndexOf("]");

  if (start === -1 || end === -1 || end <= start) {
    throw new Error("Discovery model did not return JSON array content.");
  }

  return raw.slice(start, end + 1);
}

function buildSearchUrl(title: string, organization: string) {
  const query = encodeURIComponent(`${title} ${organization} scholarship`);
  return `https://www.google.com/search?q=${query}`;
}

function normalizeScholarship(raw: unknown) {
  const source = typeof raw === "object" && raw ? (raw as Record<string, unknown>) : {};
  const title = coerceString(source.title, "Untitled Scholarship");
  const organization = coerceString(source.organization, "Independent Sponsor");
  const description = coerceString(
    source.description,
    `${title} is a scholarship opportunity for students pursuing their education goals.`
  );

  return normalizedScholarshipSchema.parse({
    title,
    organization,
    amount: Math.max(0, Math.round(coerceNumber(source.amount, 1000))),
    description:
      description.length >= 20
        ? description
        : `${description} Apply directly with the sponsor for full details.`,
    deadline: normalizeDeadline(source.deadline),
    gpaMin:
      source.gpaMin === null || source.gpaMin === undefined || source.gpaMin === ""
        ? null
        : Math.max(0, Math.min(4.5, coerceNumber(source.gpaMin, 0))),
    majorRequired: coerceString(source.majorRequired) || null,
    stateRequired: coerceString(source.stateRequired) || null,
    countryRequired: coerceString(source.countryRequired) || null,
    genderRequired: coerceString(source.genderRequired) || null,
    ethnicityRequired: coerceString(source.ethnicityRequired) || null,
    financialNeedRequired: coerceBoolean(source.financialNeedRequired),
    essayRequired: coerceBoolean(source.essayRequired),
    estimatedApplicants: Math.max(1, Math.round(coerceNumber(source.estimatedApplicants, 250))),
    numberOfWinners: Math.max(1, Math.round(coerceNumber(source.numberOfWinners, 1))),
    applicationUrl: (() => {
      const rawUrl = coerceString(source.applicationUrl);
      return rawUrl.startsWith("http") ? rawUrl : buildSearchUrl(title, organization);
    })()
  });
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
  if (!client) {
    return loadFallbackScholarships(userId, options);
  }

  const student = await prisma.studentProfile.findUnique({
    where: { userId }
  });

  if (!student) {
    throw new Error("Student profile not found.");
  }

  const existing = await prisma.scholarship.findMany({
    select: { title: true, organization: true },
    take: 100
  });

  const existingNames = existing.map((item) => `${item.title} - ${item.organization}`);
  const limit = Math.min(Math.max(options?.limit ?? 12, 5), 20);

  let parsed: z.infer<typeof discoveryResponseSchema>;

  try {
    const response = await client.chat.completions.create({
      model: env.FEATHERLESS_MODEL,
      temperature: 0.2,
      messages: [
        {
          role: "system",
          content:
            "You are a scholarship research assistant. Return only valid JSON as an array. Recommend real or plausibly recurring scholarships that align with the student profile. Prefer known national, state, university, foundation, or employer-sponsored opportunities. Do not include markdown or commentary. If an exact application URL is uncertain, return a Google search URL for the scholarship title and organization."
        },
        {
          role: "user",
          content: JSON.stringify({
            task: "Generate scholarship recommendations tailored to this student.",
            student: {
              firstName: student.firstName,
              lastName: student.lastName,
              gpa: student.gpa,
              majorInterest: student.majorInterest,
              state: student.state,
              country: student.country,
              gender: student.gender,
              ethnicity: student.ethnicity,
              financialNeed: student.financialNeed,
              firstGeneration: student.firstGeneration,
              activities: student.activities
            },
            filters: {
              query: options?.query ?? null,
              major: options?.major ?? null,
              state: options?.state ?? null
            },
            constraints: {
              limit,
              avoidExistingScholarships: existingNames,
              deadlineAfter: new Date().toISOString(),
              outputFields: [
                "title",
                "organization",
                "amount",
                "description",
                "deadline",
                "gpaMin",
                "majorRequired",
                "stateRequired",
                "countryRequired",
                "genderRequired",
                "ethnicityRequired",
                "financialNeedRequired",
                "essayRequired",
                "estimatedApplicants",
                "numberOfWinners",
                "applicationUrl"
              ]
            }
          })
        }
      ]
    });

    const content = response.choices[0]?.message?.content;

    if (!content) {
      throw new Error("Discovery model returned no scholarship content.");
    }

    const rawItems = JSON.parse(extractJsonArray(content)) as unknown[];
    parsed = discoveryResponseSchema.parse(rawItems.map((item) => normalizeScholarship(item)));
  } catch (error) {
    console.error("Scholarship discovery fallback:", error);
    return loadFallbackScholarships(userId, options);
  }

  const upserted = [] as Awaited<ReturnType<typeof prisma.scholarship.upsert>>[];

  for (const scholarship of parsed) {
    const safeApplicationUrl = scholarship.applicationUrl.includes("http")
      ? scholarship.applicationUrl
      : buildSearchUrl(scholarship.title, scholarship.organization);

    const record = await prisma.scholarship.upsert({
      where: {
        title_organization: {
          title: scholarship.title,
          organization: scholarship.organization
        }
      },
      update: {
        ...scholarship,
        applicationUrl: safeApplicationUrl,
        deadline: new Date(scholarship.deadline)
      },
      create: {
        ...scholarship,
        applicationUrl: safeApplicationUrl,
        deadline: new Date(scholarship.deadline)
      }
    });

    upserted.push(record);
  }

  return upserted;
}
