"use client";

import { Award, BookmarkCheck, ClipboardList, TrendingUp } from "lucide-react";
import { useEffect, useState } from "react";

import { AppShell } from "@/components/AppShell";
import { DashboardStats } from "@/components/DashboardStats";
import { DeadlineWidget } from "@/components/DeadlineWidget";
import { ImageWithFallback } from "@/components/ImageWithFallback";
import { ScholarshipCard } from "@/components/ScholarshipCard";
import { apiRequest } from "@/lib/api";
import { getToken } from "@/lib/auth";
import type { Application, Match } from "@/lib/types";

export default function DashboardPage() {
  const [token, setToken] = useState<string | null>(null);
  const [matches, setMatches] = useState<Match[]>([]);
  const [applications, setApplications] = useState<Application[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [running, setRunning] = useState(false);

  async function loadDashboard(activeToken: string) {
    const [matchesResponse, applicationsResponse] = await Promise.all([
      apiRequest<{ matches: Match[] }>("/match/results", { token: activeToken }),
      apiRequest<{ applications: Application[] }>("/applications", { token: activeToken })
    ]);
    setMatches(matchesResponse.matches);
    setApplications(applicationsResponse.applications);
  }

  useEffect(() => {
    const storedToken = getToken();
    setToken(storedToken);
    if (!storedToken) {
      setLoading(false);
      return;
    }

    loadDashboard(storedToken)
      .catch((loadError) => setError(loadError instanceof Error ? loadError.message : "Unable to load dashboard."))
      .finally(() => setLoading(false));
  }, []);

  const upcoming = Array.from(new Map([...matches.map((item) => item.scholarship), ...applications.map((item) => item.scholarship)].map((scholarship) => [scholarship.id, scholarship])).values()).slice(0, 3);
  const savedCount = matches.filter((match) => match.saved).length + applications.filter((application) => application.status === "Saved").length;
  const averageScore = matches.length ? `${Math.round(matches.reduce((sum, match) => sum + match.matchScore, 0) / matches.length)}%` : "0%";

  return (
    <AppShell
      title="Welcome back"
      subtitle={token ? "Track deadlines, run new matches, and manage your applications in one place." : "Log in to see your personalized scholarship workspace."}
      action={
        token ? (
          <button
            onClick={async () => {
              if (!token) return;
              setRunning(true);
              setError("");
              try {
                await apiRequest("/scholarships/discover", {
                  method: "POST",
                  token,
                  body: JSON.stringify({ limit: 12 })
                });
                const response = await apiRequest<{ matches: Match[] }>("/match/run", { method: "POST", token });
                setMatches(response.matches);
              } catch (runError) {
                setError(runError instanceof Error ? runError.message : "Unable to run matching.");
              } finally {
                setRunning(false);
              }
            }}
            className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
          >
            {running ? "Refreshing..." : "Run matching"}
          </button>
        ) : null
      }
    >
      {!token ? <div className="rounded-lg border border-gray-200 bg-white p-8 text-sm text-gray-600 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400">Log in to see your dashboard, saved scholarships, and deadline alerts.</div> : null}
      {token ? (
        <>
          <DashboardStats
            stats={[
              { label: "Total Matches", value: String(matches.length), icon: <Award className="h-5 w-5 text-blue-600 md:h-6 md:w-6" />, accent: "bg-blue-100", hint: "+12%" },
              { label: "Saved", value: String(savedCount), icon: <BookmarkCheck className="h-5 w-5 text-purple-600 md:h-6 md:w-6" />, accent: "bg-purple-100", hint: `${savedCount} saved` },
              { label: "Applications", value: String(applications.length), icon: <ClipboardList className="h-5 w-5 text-emerald-600 md:h-6 md:w-6" />, accent: "bg-emerald-100", hint: "Active" },
              { label: "Average Score", value: averageScore, icon: <TrendingUp className="h-5 w-5 text-amber-600 md:h-6 md:w-6" />, accent: "bg-amber-100", hint: "Strong" }
            ]}
          />
          {error ? <p className="mb-6 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-600 dark:bg-red-900/30 dark:text-red-300">{error}</p> : null}
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            <div className="space-y-6 lg:col-span-2">
              <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800">
                <div className="border-b border-gray-200 p-4 dark:border-gray-700 md:p-6">
                  <h3 className="text-base font-semibold text-gray-900 dark:text-white md:text-lg">Top Matches for You</h3>
                  <p className="mt-1 text-xs text-gray-500 dark:text-gray-400 md:text-sm">Based on your profile and preferences</p>
                </div>
                <div className="space-y-4 p-4 md:p-6">
                  {loading ? <p className="text-sm text-gray-500 dark:text-gray-400">Loading matches...</p> : null}
                  {matches.length ? matches.slice(0, 3).map((match) => <ScholarshipCard key={match.id} scholarship={match.scholarship} match={match} />) : null}
                  {!loading && !matches.length ? <p className="text-sm text-gray-500 dark:text-gray-400">No matches yet. Complete your profile and run matching.</p> : null}
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <DeadlineWidget scholarships={upcoming} />
              <div className="rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 p-4 text-white shadow-sm md:p-6">
                <ImageWithFallback src="https://images.unsplash.com/photo-1629196753813-8b4827ddc7c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" alt="Essay helper" className="mb-4 h-24 w-full rounded-lg object-cover opacity-80 md:h-32" />
                <h3 className="text-sm font-semibold md:text-base">Essay Helper</h3>
                <p className="mb-4 mt-2 text-xs opacity-90 md:text-sm">Get AI-powered feedback on grammar, clarity, and structure.</p>
                <a href="/essay-helper" className="block rounded-lg bg-white px-4 py-2 text-center text-sm font-medium text-blue-600 hover:bg-gray-100 dark:bg-gray-200 dark:text-blue-700 dark:hover:bg-gray-300">Try Now</a>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </AppShell>
  );
}
