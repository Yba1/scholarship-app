"use client";

import { useEffect, useState } from "react";

import { AppShell } from "@/components/AppShell";
import { apiRequest } from "@/lib/api";
import { getToken } from "@/lib/auth";
import type { EssayRequest } from "@/lib/types";

export default function EssayHelperPage() {
  const [token, setToken] = useState<string | null>(null);
  const [prompt, setPrompt] = useState("");
  const [essayText, setEssayText] = useState("");
  const [feedback, setFeedback] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setToken(getToken());
  }, []);

  return (
    <AppShell title="Essay Helper" subtitle="Get grammar, clarity, and structure feedback without generating a full essay for you.">
      {!token ? <div className="rounded-lg border border-gray-200 bg-white p-8 text-sm text-gray-600 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400">Log in to use the essay feedback tool.</div> : null}
      {token ? (
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <form className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800" onSubmit={async (event) => {
            event.preventDefault();
            if (!token) return;
            setLoading(true);
            setError("");
            try {
              const response = await apiRequest<{ essayRequest: EssayRequest }>("/essay-feedback", { method: "POST", token, body: JSON.stringify({ prompt, essayText }) });
              setFeedback(response.essayRequest.aiFeedback);
            } catch (submitError) {
              setError(submitError instanceof Error ? submitError.message : "Unable to generate feedback.");
            } finally {
              setLoading(false);
            }
          }}>
            <div className="space-y-4">
              <textarea className="min-h-32 w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 outline-none focus:border-blue-500 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100" placeholder="Essay prompt" value={prompt} onChange={(event) => setPrompt(event.target.value)} />
              <textarea className="min-h-72 w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 outline-none focus:border-blue-500 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100" placeholder="Paste your essay draft" value={essayText} onChange={(event) => setEssayText(event.target.value)} />
              {error ? <p className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-600 dark:bg-red-900/30 dark:text-red-300">{error}</p> : null}
              <button disabled={loading} className="rounded-lg bg-blue-600 px-6 py-3 text-sm font-medium text-white hover:bg-blue-700">{loading ? "Reviewing..." : "Get Feedback"}</button>
            </div>
          </form>
          <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <p className="text-sm font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">Feedback</p>
            <pre className="mt-4 whitespace-pre-wrap text-sm leading-7 text-gray-700 dark:text-gray-300">{feedback || "Your feedback will appear here once you submit a draft."}</pre>
          </div>
        </div>
      ) : null}
    </AppShell>
  );
}
