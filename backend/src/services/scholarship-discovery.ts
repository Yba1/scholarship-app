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
    return [];
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

  const existingNames = existing.map((item) => `${item.title} — ${item.organization}`);
  const limit = Math.min(Math.max(options?.limit ?? 12, 5), 20);

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

  const parsed = discoveryResponseSchema.parse(JSON.parse(extractJsonArray(content)));

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