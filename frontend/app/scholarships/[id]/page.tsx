"use client";

import { useEffect, useState } from "react";

import { AppShell } from "@/components/AppShell";
import { MatchScoreBadge } from "@/components/MatchScoreBadge";
import { apiRequest, formatCurrency, formatDate } from "@/lib/api";
import { getToken } from "@/lib/auth";
import type { Match, Scholarship } from "@/lib/types";

export default function ScholarshipDetailsPage({ params }: { params: { id: string } }) {
  const [scholarship, setScholarship] = useState<Scholarship | null>(null);
  const [match, setMatch] = useState<Match | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const token = getToken();

    apiRequest<{ scholarship: Scholarship }>(`/scholarships/${params.id}`)
      .then((response) => setScholarship(response.scholarship))
      .catch((loadError) => setError(loadError instanceof Error ? loadError.message : "Unable to load scholarship."));

    if (!token) return;

    apiRequest<{ matches: Match[] }>("/match/results", { token })
      .then((response) => setMatch(response.matches.find((item) => item.scholarshipId === params.id) || null))
      .catch(() => undefined);
  }, [params.id]);

  return (
    <AppShell title="Scholarship Details" subtitle="Review eligibility, deadline, and application details before you apply.">
      {!scholarship ? <div className="rounded-lg border border-gray-200 bg-white p-8 text-sm text-gray-600 shadow-sm">{error || "Loading scholarship details..."}</div> : null}
      {scholarship ? (
        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm md:p-8">
          <div className="flex flex-wrap items-start justify-between gap-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">{scholarship.title}</h2>
              <p className="mt-2 text-sm text-gray-500">{scholarship.organization}</p>
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold text-blue-600">{formatCurrency(scholarship.amount)}</p>
              <p className="mt-2 text-sm text-gray-600">Deadline {formatDate(scholarship.deadline)}</p>
            </div>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            {match ? <MatchScoreBadge score={match.matchScore} /> : null}
            {match ? <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700">{(match.winProbability * 100).toFixed(1)}% Win Rate</span> : null}
            {scholarship.essayRequired ? <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-medium text-amber-700">Essay required</span> : null}
          </div>
          <div className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Description</h3>
              <p className="mt-4 text-sm leading-7 text-gray-700">{scholarship.description}</p>
            </div>
            <div className="rounded-lg border border-gray-200 bg-gray-50 p-6">
              <h3 className="text-lg font-semibold text-gray-900">Eligibility</h3>
              <div className="mt-4 space-y-3 text-sm text-gray-700">
                <p>Minimum GPA: {scholarship.gpaMin ?? "Not specified"}</p>
                <p>Major: {scholarship.majorRequired || "Open"}</p>
                <p>State: {scholarship.stateRequired || "Open"}</p>
                <p>Country: {scholarship.countryRequired || "Open"}</p>
                <p>Gender: {scholarship.genderRequired || "Open"}</p>
                <p>Ethnicity: {scholarship.ethnicityRequired || "Open"}</p>
                <p>Financial need required: {scholarship.financialNeedRequired ? "Yes" : "No"}</p>
              </div>
              <a href={scholarship.applicationUrl} target="_blank" rel="noreferrer" className="mt-6 inline-block rounded-lg bg-blue-600 px-5 py-3 text-sm font-medium text-white hover:bg-blue-700">Open Application</a>
            </div>
          </div>
        </div>
      ) : null}
    </AppShell>
  );
}