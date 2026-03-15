import { Router } from "express";
import { z } from "zod";

import { prisma } from "../lib/prisma.js";
import { authenticate, type AuthenticatedRequest } from "../middleware/auth.js";
import { validate } from "../middleware/validate.js";

const router = Router();

const applicationBody = z.object({
  scholarshipId: z.string().uuid(),
  status: z.enum(["Saved", "Applying", "Submitted"]),
  submittedAt: z.string().datetime().nullable().optional(),
  notes: z.string().nullable().optional()
});

const createSchema = z.object({
  body: applicationBody,
  query: z.object({}).optional().default({}),
  params: z.object({}).optional().default({})
});

const updateSchema = z.object({
  body: applicationBody.partial(),
  query: z.object({}).optional().default({}),
  params: z.object({
    id: z.string().uuid()
  })
});

router.use(authenticate);

router.post("/", validate(createSchema), async (request: AuthenticatedRequest, response, next) => {
  try {
    const profile = await prisma.studentProfile.findUnique({
      where: { userId: request.user!.id }
    });

    if (!profile) {
      response.status(404).json({ message: "Student profile not found." });
      return;
    }

    const application = await prisma.application.upsert({
      where: {
        studentId_scholarshipId: {
          studentId: profile.id,
          scholarshipId: request.body.scholarshipId
        }
      },
      update: {
        status: request.body.status,
        submittedAt: request.body.submittedAt ? new Date(request.body.submittedAt) : null,
        notes: request.body.notes ?? null
      },
      create: {
        studentId: profile.id,
        scholarshipId: request.body.scholarshipId,
        status: request.body.status,
        submittedAt: request.body.submittedAt ? new Date(request.body.submittedAt) : null,
        notes: request.body.notes ?? null
      },
      include: {
        scholarship: true
      }
    });

    await prisma.match.updateMany({
      where: {
        studentId: profile.id,
        scholarshipId: request.body.scholarshipId
      },
      data: {
        saved: request.body.status === "Saved",
        applied: request.body.status === "Submitted"
      }
    });

    response.status(201).json({ application });
  } catch (error) {
    next(error);
  }
});

router.get("/", async (request: AuthenticatedRequest, response, next) => {
  try {
    const profile = await prisma.studentProfile.findUnique({ where: { userId: request.user!.id } });

    if (!profile) {
      response.json({ applications: [] });
      return;
    }

    const applications = await prisma.application.findMany({
      where: {
        studentId: profile.id
      },
      include: {
        scholarship: true
      },
      orderBy: {
        scholarship: {
          deadline: "asc"
        }
      }
    });

    response.json({ applications });
  } catch (error) {
    next(error);
  }
});

router.put("/:id", validate(updateSchema), async (request: AuthenticatedRequest, response, next) => {
  try {
    const profile = await prisma.studentProfile.findUnique({ where: { userId: request.user!.id } });

    if (!profile) {
      response.status(404).json({ message: "Student profile not found." });
      return;
    }

    const applicationId = Array.isArray(request.params.id) ? request.params.id[0] : request.params.id;
    const existing = await prisma.application.findUnique({ where: { id: applicationId } });

    if (!existing || existing.studentId !== profile.id) {
      response.status(404).json({ message: "Application not found." });
      return;
    }

    const application = await prisma.application.update({
      where: { id: applicationId },
      data: {
        status: request.body.status,
        submittedAt: request.body.submittedAt ? new Date(request.body.submittedAt) : undefined,
        notes: request.body.notes ?? undefined
      },
      include: {
        scholarship: true
      }
    });

    await prisma.match.updateMany({
      where: {
        studentId: profile.id,
        scholarshipId: application.scholarshipId
      },
      data: {
        saved: application.status === "Saved",
        applied: application.status === "Submitted"
      }
    });

    response.json({ application });
  } catch (error) {
    next(error);
  }
});

export default router;