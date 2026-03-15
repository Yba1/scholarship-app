import nodemailer from "nodemailer";

import { env } from "../config/env.js";
import { prisma } from "../lib/prisma.js";

function getTransporter() {
  if (!env.SMTP_HOST || !env.SMTP_PORT || !env.SMTP_USER || !env.SMTP_PASS) {
    return null;
  }

  return nodemailer.createTransport({
    host: env.SMTP_HOST,
    port: env.SMTP_PORT,
    secure: env.SMTP_PORT === 465,
    auth: {
      user: env.SMTP_USER,
      pass: env.SMTP_PASS
    }
  });
}

export async function sendDeadlineReminders() {
  const transporter = getTransporter();

  if (!transporter || !env.SMTP_FROM) {
    console.warn("Deadline reminders skipped because SMTP is not configured.");
    return;
  }

  const now = new Date();
  const inSevenDays = new Date(now);
  inSevenDays.setDate(inSevenDays.getDate() + 7);

  const reminders = await prisma.match.findMany({
    where: {
      scholarship: {
        deadline: {
          gte: now,
          lte: inSevenDays
        }
      },
      OR: [
        { saved: true },
        { applied: true }
      ]
    },
    include: {
      scholarship: true,
      student: {
        include: {
          user: true
        }
      }
    }
  });

  const sentKeys = new Set<string>();

  for (const reminder of reminders) {
    const key = `${reminder.student.user.email}:${reminder.scholarship.id}`;

    if (sentKeys.has(key)) {
      continue;
    }

    sentKeys.add(key);

    await transporter.sendMail({
      from: env.SMTP_FROM,
      to: reminder.student.user.email,
      subject: `Deadline reminder: ${reminder.scholarship.title}`,
      text: [
        `Your scholarship deadline is approaching.`,
        ``,
        `Scholarship: ${reminder.scholarship.title}`,
        `Organization: ${reminder.scholarship.organization}`,
        `Deadline: ${reminder.scholarship.deadline.toISOString()}`,
        `Application URL: ${reminder.scholarship.applicationUrl}`
      ].join("\n")
    });
  }
}