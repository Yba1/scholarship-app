"use client";

import { Search, Sparkles } from "lucide-react";
import { useDeferredValue, useEffect, useRef, useState } from "react";

import { AppShell } from "@/components/AppShell";
import { ScholarshipCard } from "@/components/ScholarshipCard";
import { apiRequest } from "@/lib/api";
import { getToken } from "@/lib/auth";
import type { Match, Scholarship } from "@/lib/types";

export default function ScholarshipsPage() {
  const [token, setToken] = useState<string | null>(null);
  const [query, setQuery] = useState("");
  const [state, setState] = useState("");
  const [major, setMajor] = useState("");
  const [scholarships, setScholarships] = useState<Scholarship[]>([]);
  const [matches, setMatches] = useState<Match[]>([]);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [refreshing, setRefreshing] = useState(false);
  const autoDiscoveryStarted = useRef(false);

  const deferredQuery = useDeferredValue(query);

  async function loadScholarships(activeToken: string | null, search: { query: string; state: string; major: string }) {
    const params = new URLSearchParams();
    if (search.state) params.set("state", search.state);
    if (search.major) params.set("major", search.major);
    if (search.query) params.set("q", search.query);

    const [scholarshipsResponse, matchesResponse] = await Promise.all([
      apiRequest<{ scholarships: Scholarship[] }>(`/scholarships${params.toString() ? `?${params.toString()}` : ""}`),
      activeToken ? apiRequest<{ matches: Match[] }>("/match/results", { token: activeToken }).catch(() => ({ matches: [] })) : Promise.resolve({ matches: [] })
    ]);

    setScholarships(scholarshipsResponse.scholarships);
    setMatches(matchesResponse.matches);
  }

  async function discoverScholarships(activeToken: string, search: { query: string; state: string; major: string }, silent = false) {
    setRefreshing(true);
    if (!silent) {
      setMessage("");
      setError("");
    }

    try {
      await apiRequest<{ scholarships: Scholarship[] }>("/scholarships/discover", {
        method: "POST",
        token: activeToken,
        body: JSON.stringify({
          query: search.query || undefined,
          state: search.state || undefined,
          major: search.major || undefined,
          limit: 12
        })
      });
      await loadScholarships(activeToken, search);
      if (!silent) {
        setMessage("Fresh scholarship recommendations generated from your profile.");
      }
    } catch (loadError) {
      setError(loadError instanceof Error ? loadError.message : "Unable to generate scholarships.");
    } finally {
      setRefreshing(false);
    }
  }

  useEffect(() => {
    const storedToken = getToken();
    setToken(storedToken);
  }, []);

  useEffect(() => {
    loadScholarships(token, { query: deferredQuery, state, major })
      .catch((loadError) => setError(loadError instanceof Error ? loadError.message : "Unable to load scholarships."));
  }, [deferredQuery, major, state, token]);

  useEffect(() => {
    if (!token || autoDiscoveryStarted.current) {
      return;
    }

    autoDiscoveryStarted.current = true;
    discoverScholarships(token, { query: "", state: "", major: "" }, true).catch(() => undefined);
  }, [token]);

  const matchMap = new Map(matches.map((match) => [match.scholarshipId, match]));

  async function trackScholarship(scholarshipId: string, status: "Saved" | "Applying") {
    if (!token) {
      setMessage("Log in first to save or apply to scholarships.");
      return;
    }

    await apiRequest("/applications", { method: "POST", token, body: JSON.stringify({ scholarshipId, status }) });
    setMessage(status === "Saved" ? "Scholarship saved to your tracker." : "Scholarship added to your applying list.");
  }

  return (
    <AppShell
      title="Browse Scholarships"
      subtitle="Search scholarships by state, major, or keyword and prioritize the ones you are most likely to win."
      action={token ? (
        <button
          onClick={() => discoverScholarships(token, { query: deferredQuery, state, major })}
          className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
        >
          <Sparkles className="h-4 w-4" />
          {refreshing ? "Refreshing..." : "Find fresh scholarships"}
        </button>
      ) : null}
    >
      <div className="mb-8 rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
        <div className="grid gap-4 md:grid-cols-[1fr_180px_180px]">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
            <input className="w-full rounded-xl border border-gray-300 py-3 pl-12 pr-4 text-gray-900 outline-none placeholder:text-gray-500 focus:border-blue-500 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 dark:placeholder:text-gray-400" placeholder="Search scholarships by title or keyword" value={query} onChange={(event) => setQuery(event.target.value)} />
          </div>
          <input className="rounded-xl border border-gray-300 px-4 py-3 text-gray-900 outline-none placeholder:text-gray-500 focus:border-blue-500 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 dark:placeholder:text-gray-400" placeholder="State" value={state} onChange={(event) => setState(event.target.value)} />
          <input className="rounded-xl border border-gray-300 px-4 py-3 text-gray-900 outline-none placeholder:text-gray-500 focus:border-blue-500 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 dark:placeholder:text-gray-400" placeholder="Major" value={major} onChange={(event) => setMajor(event.target.value)} />
        </div>
        {message ? <p className="mt-4 rounded-lg bg-green-50 px-4 py-3 text-sm text-green-600 dark:bg-green-900/30 dark:text-green-300">{message}</p> : null}
        {error ? <p className="mt-4 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-600 dark:bg-red-900/30 dark:text-red-300">{error}</p> : null}
      </div>
      <div className="space-y-4">
        {scholarships.length ? scholarships.map((scholarship) => <ScholarshipCard key={scholarship.id} scholarship={scholarship} match={matchMap.get(scholarship.id)} onSave={() => trackScholarship(scholarship.id, "Saved")} onApply={() => trackScholarship(scholarship.id, "Applying")} />) : <div className="rounded-lg border border-gray-200 bg-white p-8 text-sm text-gray-500 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400">No scholarships matched this filter set yet.</div>}
      </div>
    </AppShell>
  );
}
