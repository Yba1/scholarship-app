import { Router } from "express";

import { authenticate, type AuthenticatedRequest } from "../middleware/auth.js";
import { getMatchResults, runMatchForUser } from "../services/matching.js";

const router = Router();

router.use(authenticate);

router.post("/run", async (request: AuthenticatedRequest, response, next) => {
  try {
    const matches = await runMatchForUser(request.user!.id);
    response.json({ matches });
  } catch (error) {
    next(error);
  }
});

router.get("/results", async (request: AuthenticatedRequest, response, next) => {
  try {
    const matches = await getMatchResults(request.user!.id);
    response.json({ matches });
  } catch (error) {
    next(error);
  }
});

export default router;