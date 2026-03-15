"use client";

import { useEffect, useState } from "react";

import { AppShell } from "@/components/AppShell";
import { apiRequest } from "@/lib/api";
import { getToken } from "@/lib/auth";
import type { StudentProfile } from "@/lib/types";

const emptyProfile = {
  firstName: "",
  lastName: "",
  gpa: 3.5,
  majorInterest: "",
  state: "",
  country: "USA",
  gender: "",
  ethnicity: "",
  financialNeed: false,
  firstGeneration: false,
  activities: ""
};

export default function ProfilePage() {
  const [token, setToken] = useState<string | null>(null);
  const [form, setForm] = useState(emptyProfile);
  const [hasExistingProfile, setHasExistingProfile] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const storedToken = getToken();
    setToken(storedToken);
    if (!storedToken) {
      setLoading(false);
      return;
    }

    apiRequest<{ profile: StudentProfile | null }>("/profile", { token: storedToken })
      .then((response) => {
        if (!response.profile) return;
        setHasExistingProfile(true);
        setForm({
          firstName: response.profile.firstName,
          lastName: response.profile.lastName,
          gpa: response.profile.gpa,
          majorInterest: response.profile.majorInterest,
          state: response.profile.state,
          country: response.profile.country,
          gender: response.profile.gender || "",
          ethnicity: response.profile.ethnicity || "",
          financialNeed: response.profile.financialNeed,
          firstGeneration: response.profile.firstGeneration,
          activities: response.profile.activities.join(", ")
        });
      })
      .catch((loadError) => setError(loadError instanceof Error ? loadError.message : "Unable to load profile."))
      .finally(() => setLoading(false));
  }, []);

  return (
    <AppShell title="Profile Builder" subtitle="Complete your academic, personal, and extracurricular profile for better scholarship matching.">
      {!token ? <div className="rounded-lg border border-gray-200 bg-white p-8 text-sm text-gray-600 shadow-sm">Log in to build your student profile.</div> : null}
      {token ? (
        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm md:p-8">
          {loading ? <p className="text-sm text-gray-500">Loading profile...</p> : null}
          {error ? <p className="mb-4 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-600">{error}</p> : null}
          {message ? <p className="mb-4 rounded-lg bg-green-50 px-4 py-3 text-sm text-green-600">{message}</p> : null}
          <form className="grid gap-4 md:grid-cols-2" onSubmit={async (event) => {
            event.preventDefault();
            if (!token) return;
            setSaving(true);
            setError("");
            setMessage("");
            try {
              await apiRequest("/profile", {
                method: hasExistingProfile ? "PUT" : "POST",
                token,
                body: JSON.stringify({
                  firstName: form.firstName,
                  lastName: form.lastName,
                  gpa: Number(form.gpa),
                  majorInterest: form.majorInterest,
                  state: form.state,
                  country: form.country,
                  gender: form.gender || null,
                  ethnicity: form.ethnicity || null,
                  financialNeed: form.financialNeed,
                  firstGeneration: form.firstGeneration,
                  activities: form.activities.split(",").map((item) => item.trim()).filter(Boolean)
                })
              });
              setHasExistingProfile(true);
              setMessage("Profile saved successfully.");
            } catch (saveError) {
              setError(saveError instanceof Error ? saveError.message : "Unable to save profile.");
            } finally {
              setSaving(false);
            }
          }}>
            <input className="rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500" placeholder="First name" value={form.firstName} onChange={(event) => setForm({ ...form, firstName: event.target.value })} />
            <input className="rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500" placeholder="Last name" value={form.lastName} onChange={(event) => setForm({ ...form, lastName: event.target.value })} />
            <input className="rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500" placeholder="GPA" type="number" step="0.1" min="0" max="4.5" value={form.gpa} onChange={(event) => setForm({ ...form, gpa: Number(event.target.value) })} />
            <input className="rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500" placeholder="Major interest" value={form.majorInterest} onChange={(event) => setForm({ ...form, majorInterest: event.target.value })} />
            <input className="rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500" placeholder="State" value={form.state} onChange={(event) => setForm({ ...form, state: event.target.value })} />
            <input className="rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500" placeholder="Country" value={form.country} onChange={(event) => setForm({ ...form, country: event.target.value })} />
            <input className="rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500" placeholder="Gender" value={form.gender} onChange={(event) => setForm({ ...form, gender: event.target.value })} />
            <input className="rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500" placeholder="Ethnicity" value={form.ethnicity} onChange={(event) => setForm({ ...form, ethnicity: event.target.value })} />
            <textarea className="min-h-28 rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500 md:col-span-2" placeholder="Extracurriculars, comma separated" value={form.activities} onChange={(event) => setForm({ ...form, activities: event.target.value })} />
            <label className="flex items-center gap-3 rounded-lg border border-gray-200 px-4 py-3 text-sm text-gray-700"><input type="checkbox" checked={form.financialNeed} onChange={(event) => setForm({ ...form, financialNeed: event.target.checked })} />Financial need</label>
            <label className="flex items-center gap-3 rounded-lg border border-gray-200 px-4 py-3 text-sm text-gray-700"><input type="checkbox" checked={form.firstGeneration} onChange={(event) => setForm({ ...form, firstGeneration: event.target.checked })} />First generation student</label>
            <button disabled={saving} className="rounded-lg bg-blue-600 px-6 py-3 text-sm font-medium text-white hover:bg-blue-700 md:col-span-2">{saving ? "Saving..." : hasExistingProfile ? "Update Profile" : "Create Profile"}</button>
          </form>
        </div>
      ) : null}
    </AppShell>
  );
}