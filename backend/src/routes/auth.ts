import bcrypt from "bcrypt";
import { Router } from "express";
import { z } from "zod";

import { prisma } from "../lib/prisma.js";
import { signToken } from "../lib/token.js";
import { authenticate, type AuthenticatedRequest } from "../middleware/auth.js";
import { validate } from "../middleware/validate.js";

const router = Router();

const registerSchema = z.object({
  body: z.object({
    email: z.string().email(),
    password: z.string().min(8)
  }),
  query: z.object({}).optional().default({}),
  params: z.object({}).optional().default({})
});

const loginSchema = registerSchema;

router.post("/register", validate(registerSchema), async (request, response, next) => {
  try {
    const existing = await prisma.user.findUnique({
      where: { email: request.body.email }
    });

    if (existing) {
      response.status(409).json({ message: "Email already registered." });
      return;
    }

    const passwordHash = await bcrypt.hash(request.body.password, 10);
    const user = await prisma.user.create({
      data: {
        email: request.body.email,
        passwordHash
      }
    });

    const token = signToken({
      userId: user.id,
      email: user.email
    });

    response.status(201).json({ token, user: { id: user.id, email: user.email } });
  } catch (error) {
    next(error);
  }
});

router.post("/login", validate(loginSchema), async (request, response, next) => {
  try {
    const user = await prisma.user.findUnique({
      where: { email: request.body.email },
      include: { studentProfile: true }
    });

    if (!user) {
      response.status(401).json({ message: "Invalid credentials." });
      return;
    }

    const matches = await bcrypt.compare(request.body.password, user.passwordHash);

    if (!matches) {
      response.status(401).json({ message: "Invalid credentials." });
      return;
    }

    const token = signToken({ userId: user.id, email: user.email });

    response.json({
      token,
      user: {
        id: user.id,
        email: user.email,
        studentProfile: user.studentProfile
      }
    });
  } catch (error) {
    next(error);
  }
});

router.get("/me", authenticate, async (request: AuthenticatedRequest, response, next) => {
  try {
    const user = await prisma.user.findUnique({
      where: { id: request.user!.id },
      include: { studentProfile: true }
    });

    response.json({ user });
  } catch (error) {
    next(error);
  }
});

export default router;