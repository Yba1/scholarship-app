import { config } from "dotenv";
import { z } from "zod";

config({ path: "../.env" });
config();

const envSchema = z.object({
  DATABASE_URL: z.string().min(1),
  JWT_SECRET: z.string().min(16),
  JWT_EXPIRES_IN: z.string().default("7d"),
  API_PORT: z.coerce.number().default(4000),
  FRONTEND_URL: z.string().url(),
  SMTP_HOST: z.string().optional(),
  SMTP_PORT: z.coerce.number().optional(),
  SMTP_USER: z.string().optional(),
  SMTP_PASS: z.string().optional(),
  SMTP_FROM: z.string().optional(),
  FEATHERLESS_API_KEY: z.string().optional(),
  FEATHERLESS_MODEL: z.string().default("Qwen/Qwen2.5-7B-Instruct"),
  TAVILY_API_KEY: z.string().optional()
});

export const env = envSchema.parse(process.env);
