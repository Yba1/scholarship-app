import cron from "node-cron";

import { createApp } from "./app.js";
import { env } from "./config/env.js";
import { sendDeadlineReminders } from "./services/email.js";

const app = createApp();

app.listen(env.API_PORT, () => {
  console.log(`API running on http://localhost:${env.API_PORT}`);
});

cron.schedule("0 8 * * *", async () => {
  try {
    await sendDeadlineReminders();
  } catch (error) {
    console.error("Deadline reminder job failed", error);
  }
});