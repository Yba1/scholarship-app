"use client";

import { Search } from "lucide-react";
import { useDeferredValue, useEffect, useState } from "react";

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

  const deferredQuery = useDeferredValue(query);

  useEffect(() => {
    const storedToken = getToken();
    setToken(storedToken);
  }, []);

  useEffect(() => {
    const params = new URLSearchParams();
    if (state) params.set("state", state);
    if (major) params.set("major", major);
    if (deferredQuery) params.set("q", deferredQuery);

    Promise.all([
      apiRequest<{ scholarships: Scholarship[] }>(`/scholarships${params.toString() ? `?${params.toString()}` : ""}`),
      token ? apiRequest<{ matches: Match[] }>("/match/results", { token }).catch(() => ({ matches: [] })) : Promise.resolve({ matches: [] })
    ])
      .then(([scholarshipsResponse, matchesResponse]) => {
        setScholarships(scholarshipsResponse.scholarships);
        setMatches(matchesResponse.matches);
      })
      .catch((loadError) => setError(loadError instanceof Error ? loadError.message : "Unable to load scholarships."));
  }, [deferredQuery, major, state, token]);

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
    <AppShell title="Browse Scholarships" subtitle="Search scholarships by state, major, or keyword and prioritize the ones you are most likely to win.">
      <div className="mb-8 rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
        <div className="grid gap-4 md:grid-cols-[1fr_180px_180px]">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
            <input className="w-full rounded-xl border border-gray-300 py-3 pl-12 pr-4 outline-none focus:border-blue-500" placeholder="Search scholarships by title or keyword" value={query} onChange={(event) => setQuery(event.target.value)} />
          </div>
          <input className="rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500" placeholder="State" value={state} onChange={(event) => setState(event.target.value)} />
          <input className="rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500" placeholder="Major" value={major} onChange={(event) => setMajor(event.target.value)} />
        </div>
        {message ? <p className="mt-4 rounded-lg bg-green-50 px-4 py-3 text-sm text-green-600">{message}</p> : null}
        {error ? <p className="mt-4 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-600">{error}</p> : null}
      </div>
      <div className="space-y-4">
        {scholarships.length ? scholarships.map((scholarship) => <ScholarshipCard key={scholarship.id} scholarship={scholarship} match={matchMap.get(scholarship.id)} onSave={() => trackScholarship(scholarship.id, "Saved")} onApply={() => trackScholarship(scholarship.id, "Applying")} />) : <div className="rounded-lg border border-gray-200 bg-white p-8 text-sm text-gray-500 shadow-sm">No scholarships matched this filter set yet.</div>}
      </div>
    </AppShell>
  );
}