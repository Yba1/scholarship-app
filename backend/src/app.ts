import cors from "cors";
import express from "express";
import rateLimit from "express-rate-limit";

import { env } from "./config/env.js";
import { errorHandler } from "./middleware/error-handler.js";
import applicationsRouter from "./routes/applications.js";
import authRouter from "./routes/auth.js";
import essayRouter from "./routes/essay.js";
import matchRouter from "./routes/match.js";
import profileRouter from "./routes/profile.js";
import scholarshipsRouter from "./routes/scholarships.js";

export function createApp() {
  const app = express();

  app.use(
    cors({
      origin: env.FRONTEND_URL,
      credentials: true
    })
  );

  app.use(
    rateLimit({
      windowMs: 15 * 60 * 1000,
      max: 200,
      standardHeaders: true,
      legacyHeaders: false
    })
  );

  app.use(express.json({ limit: "1mb" }));

  app.get("/health", (_request, response) => {
    response.json({ status: "ok" });
  });

  app.use("/auth", authRouter);
  app.use("/profile", profileRouter);
  app.use("/scholarships", scholarshipsRouter);
  app.use("/match", matchRouter);
  app.use("/applications", applicationsRouter);
  app.use("/essay-feedback", essayRouter);

  app.use(errorHandler);

  return app;
}