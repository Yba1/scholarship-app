import type { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

import { env } from "../config/env.js";

export type AuthenticatedRequest = Request & {
  user?: {
    id: string;
    email: string;
  };
};

export function authenticate(request: AuthenticatedRequest, response: Response, next: NextFunction) {
  const header = request.headers.authorization;

  if (!header?.startsWith("Bearer ")) {
    response.status(401).json({ message: "Authentication required." });
    return;
  }

  const token = header.replace("Bearer ", "");

  try {
    const decoded = jwt.verify(token, env.JWT_SECRET) as {
      userId: string;
      email: string;
    };

    request.user = {
      id: decoded.userId,
      email: decoded.email
    };

    next();
  } catch {
    response.status(401).json({ message: "Invalid token." });
  }
}