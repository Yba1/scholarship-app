import { OpenAI } from "openai";

import { env } from "../config/env.js";

const client = env.FEATHERLESS_API_KEY
  ? new OpenAI({
      apiKey: env.FEATHERLESS_API_KEY,
      baseURL: "https://api.featherless.ai/v1"
    })
  : null;

export async function getEssayFeedback(prompt: string, essayText: string) {
  if (!client) {
    return [
      "Grammar suggestions: tighten sentence boundaries, verify punctuation, and replace vague wording with concrete examples.",
      "Clarity improvements: make the main thesis explicit in the opening paragraph and keep each paragraph focused on one idea.",
      "Structural feedback: add a stronger conclusion that reconnects your personal story to the scholarship prompt.",
      "Featherless API key is not configured, so this is fallback guidance rather than model-generated feedback."
    ].join("\n\n");
  }

  const response = await client.chat.completions.create({
    model: env.FEATHERLESS_MODEL,
    messages: [
      {
        role: "system",
        content:
          "You are an essay coach for scholarship applicants. Provide concise feedback only. Do not write or continue the essay. Return three sections: Grammar suggestions, Clarity improvements, Structural feedback."
      },
      {
        role: "user",
        content: `Prompt:\n${prompt}\n\nDraft:\n${essayText}`
      }
    ]
  });

  return response.choices[0]?.message?.content || "No feedback returned.";
}
