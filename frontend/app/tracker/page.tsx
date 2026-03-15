"use client";

import { useEffect, useState } from "react";

import { AppShell } from "@/components/AppShell";
import { formatDate } from "@/lib/api";
import { apiRequest } from "@/lib/api";
import { getToken } from "@/lib/auth";
import type { Application } from "@/lib/types";

export default function TrackerPage() {
  const [token, setToken] = useState<string | null>(null);
  const [applications, setApplications] = useState<Application[]>([]);
  const [error, setError] = useState("");

  async function loadApplications(activeToken: string) {
    const response = await apiRequest<{ applications: Application[] }>("/applications", { token: activeToken });
    setApplications(response.applications);
  }

  useEffect(() => {
    const storedToken = getToken();
    setToken(storedToken);
    if (!storedToken) return;
    loadApplications(storedToken).catch((loadError) => setError(loadError instanceof Error ? loadError.message : "Unable to load applications."));
  }, []);

  return (
    <AppShell title="Application Tracker" subtitle="Move scholarships from saved to applying to submitted and stay ahead of each deadline.">
      {!token ? <div className="rounded-lg border border-gray-200 bg-white p-8 text-sm text-gray-600 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400">Log in to manage your application tracker.</div> : null}
      {token ? (
        <div className="space-y-4">
          {error ? <p className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-600 dark:bg-red-900/30 dark:text-red-300">{error}</p> : null}
          {applications.length ? applications.map((application) => (
            <div key={application.id} className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{application.scholarship.title}</h3>
                  <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{application.scholarship.organization}</p>
                  <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">Deadline {formatDate(application.scholarship.deadline)}</p>
                </div>
                <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">{application.status}</span>
              </div>
              <div className="mt-5 flex flex-wrap gap-3">
                {(["Saved", "Applying", "Submitted"] as const).map((status) => (
                  <button key={status} onClick={async () => {
                    if (!token) return;
                    await apiRequest(`/applications/${application.id}`, { method: "PUT", token, body: JSON.stringify({ status }) });
                    await loadApplications(token);
                  }} className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-700">
                    Mark {status}
                  </button>
                ))}
                <a href={application.scholarship.applicationUrl} target="_blank" rel="noreferrer" className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">Open Application</a>
              </div>
            </div>
          )) : <div className="rounded-lg border border-gray-200 bg-white p-8 text-sm text-gray-500 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400">No applications yet. Save or apply to scholarships from the browse page.</div>}
        </div>
      ) : null}
    </AppShell>
  );
}
