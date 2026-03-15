import jwt, { type SignOptions } from "jsonwebtoken";

import { env } from "../config/env.js";

export type AuthTokenPayload = {
  userId: string;
  email: string;
};

export function signToken(payload: AuthTokenPayload) {
  const expiresIn = env.JWT_EXPIRES_IN as SignOptions["expiresIn"];

  return jwt.sign(payload, env.JWT_SECRET, {
    expiresIn
  });
}