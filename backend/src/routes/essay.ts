import { Router } from "express";
import { z } from "zod";

import { prisma } from "../lib/prisma.js";
import { authenticate, type AuthenticatedRequest } from "../middleware/auth.js";
import { validate } from "../middleware/validate.js";
import { getEssayFeedback } from "../services/essay-feedback.js";

const router = Router();

const essaySchema = z.object({
  body: z.object({
    prompt: z.string().min(10),
    essayText: z.string().min(50)
  }),
  query: z.object({}).optional().default({}),
  params: z.object({}).optional().default({})
});

router.use(authenticate);

router.post("/", validate(essaySchema), async (request: AuthenticatedRequest, response, next) => {
  try {
    const profile = await prisma.studentProfile.findUnique({
      where: { userId: request.user!.id }
    });

    if (!profile) {
      response.status(404).json({ message: "Student profile not found." });
      return;
    }

    const aiFeedback = await getEssayFeedback(request.body.prompt, request.body.essayText);

    const essayRequest = await prisma.essayRequest.create({
      data: {
        studentId: profile.id,
        prompt: request.body.prompt,
        essayText: request.body.essayText,
        aiFeedback
      }
    });

    response.status(201).json({ essayRequest });
  } catch (error) {
    next(error);
  }
});

export default router;