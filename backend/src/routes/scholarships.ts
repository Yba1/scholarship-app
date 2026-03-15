import { Router } from "express";
import { z } from "zod";

import { prisma } from "../lib/prisma.js";
import { validate } from "../middleware/validate.js";

const router = Router();

const scholarshipSchema = z.object({
  body: z.object({
    title: z.string().min(1),
    organization: z.string().min(1),
    amount: z.number().int().nonnegative(),
    description: z.string().min(1),
    deadline: z.string().datetime(),
    gpaMin: z.number().min(0).max(4.5).nullable().optional(),
    majorRequired: z.string().nullable().optional(),
    stateRequired: z.string().nullable().optional(),
    countryRequired: z.string().nullable().optional(),
    genderRequired: z.string().nullable().optional(),
    ethnicityRequired: z.string().nullable().optional(),
    financialNeedRequired: z.boolean().default(false),
    essayRequired: z.boolean().default(false),
    estimatedApplicants: z.number().int().positive(),
    numberOfWinners: z.number().int().positive(),
    applicationUrl: z.string().url()
  }),
  query: z.object({}).optional().default({}),
  params: z.object({}).optional().default({})
});

router.get("/", async (request, response, next) => {
  try {
    const state = typeof request.query.state === "string" ? request.query.state : undefined;
    const major = typeof request.query.major === "string" ? request.query.major : undefined;
    const country = typeof request.query.country === "string" ? request.query.country : undefined;
    const query = typeof request.query.q === "string" ? request.query.q : undefined;

    const scholarships = await prisma.scholarship.findMany({
      where: {
        AND: [
          state ? { OR: [{ stateRequired: state }, { stateRequired: null }] } : {},
          country ? { OR: [{ countryRequired: country }, { countryRequired: null }] } : {},
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
      orderBy: [
        { deadline: "asc" },
        { amount: "desc" }
      ]
    });

    response.json({ scholarships });
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (request, response, next) => {
  try {
    const scholarship = await prisma.scholarship.findUnique({
      where: { id: request.params.id }
    });

    if (!scholarship) {
      response.status(404).json({ message: "Scholarship not found." });
      return;
    }

    response.json({ scholarship });
  } catch (error) {
    next(error);
  }
});

router.post("/", validate(scholarshipSchema), async (request, response, next) => {
  try {
    const scholarship = await prisma.scholarship.create({
      data: {
        ...request.body,
        deadline: new Date(request.body.deadline)
      }
    });

    response.status(201).json({ scholarship });
  } catch (error) {
    next(error);
  }
});

export default router;