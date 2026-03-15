import { Router } from "express";
import { z } from "zod";

import { prisma } from "../lib/prisma.js";
import { authenticate, type AuthenticatedRequest } from "../middleware/auth.js";
import { validate } from "../middleware/validate.js";

const router = Router();

const profileBody = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  gpa: z.number().min(0).max(4.5),
  majorInterest: z.string().min(1),
  state: z.string().min(1),
  country: z.string().min(1),
  gender: z.string().nullable().optional(),
  ethnicity: z.string().nullable().optional(),
  financialNeed: z.boolean().default(false),
  firstGeneration: z.boolean().default(false),
  activities: z.array(z.string()).default([])
});

const profileSchema = z.object({
  body: profileBody,
  query: z.object({}).optional().default({}),
  params: z.object({}).optional().default({})
});

router.use(authenticate);

router.get("/", async (request: AuthenticatedRequest, response, next) => {
  try {
    const profile = await prisma.studentProfile.findUnique({
      where: {
        userId: request.user!.id
      }
    });

    response.json({ profile });
  } catch (error) {
    next(error);
  }
});

router.post("/", validate(profileSchema), async (request: AuthenticatedRequest, response, next) => {
  try {
    const profile = await prisma.studentProfile.create({
      data: {
        userId: request.user!.id,
        ...request.body
      }
    });

    response.status(201).json({ profile });
  } catch (error) {
    next(error);
  }
});

router.put("/", validate(profileSchema), async (request: AuthenticatedRequest, response, next) => {
  try {
    const profile = await prisma.studentProfile.upsert({
      where: {
        userId: request.user!.id
      },
      update: request.body,
      create: {
        userId: request.user!.id,
        ...request.body
      }
    });

    response.json({ profile });
  } catch (error) {
    next(error);
  }
});

export default router;