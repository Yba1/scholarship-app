"use client";

import { useEffect, useMemo, useState } from "react";

import { AppShell } from "@/components/AppShell";
import { apiRequest } from "@/lib/api";
import { getToken } from "@/lib/auth";
import type { StudentProfile } from "@/lib/types";

const COMMON_COUNTRIES = [
  "United States",
  "Canada",
  "United Kingdom",
  "Australia",
  "India",
  "Mexico",
  "Germany",
  "France",
  "China",
  "Japan",
  "Brazil",
  "South Korea",
  "Nigeria",
  "Philippines",
  "Pakistan"
] as const;

const ALL_COUNTRIES = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Antigua and Barbuda",
  "Argentina",
  "Armenia",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bhutan",
  "Bolivia",
  "Bosnia and Herzegovina",
  "Botswana",
  "Brazil",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Cape Verde",
  "Central African Republic",
  "Chad",
  "Chile",
  "China",
  "Colombia",
  "Comoros",
  "Congo",
  "Costa Rica",
  "Croatia",
  "Cuba",
  "Cyprus",
  "Czech Republic",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Eswatini",
  "Ethiopia",
  "Fiji",
  "Finland",
  "France",
  "Gabon",
  "Gambia",
  "Georgia",
  "Germany",
  "Ghana",
  "Greece",
  "Grenada",
  "Guatemala",
  "Guinea",
  "Guinea-Bissau",
  "Guyana",
  "Haiti",
  "Honduras",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Kuwait",
  "Kyrgyzstan",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Micronesia",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Morocco",
  "Mozambique",
  "Myanmar",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "North Korea",
  "North Macedonia",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Qatar",
  "Romania",
  "Russia",
  "Rwanda",
  "Saint Kitts and Nevis",
  "Saint Lucia",
  "Saint Vincent and the Grenadines",
  "Samoa",
  "San Marino",
  "Sao Tome and Principe",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "South Korea",
  "South Sudan",
  "Spain",
  "Sri Lanka",
  "Sudan",
  "Suriname",
  "Sweden",
  "Switzerland",
  "Syria",
  "Taiwan",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Timor-Leste",
  "Togo",
  "Tonga",
  "Trinidad and Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Tuvalu",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "United States",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Vatican City",
  "Venezuela",
  "Vietnam",
  "Yemen",
  "Zambia",
  "Zimbabwe"
] as const;

const COMMON_COUNTRY_SET = new Set<string>(COMMON_COUNTRIES);
const OTHER_COUNTRIES = ALL_COUNTRIES.filter((country) => !COMMON_COUNTRY_SET.has(country));

const emptyProfile = {
  firstName: "",
  lastName: "",
  gpa: "",
  majorInterest: "",
  state: "",
  country: "",
  gender: "",
  ethnicity: "",
  financialNeed: false,
  firstGeneration: false,
  activities: ""
};

export default function ProfilePage() {
  const [token, setToken] = useState<string | null>(null);
  const [authChecked, setAuthChecked] = useState(false);
  const [form, setForm] = useState(emptyProfile);
  const [countryQuery, setCountryQuery] = useState("");
  const [countryOpen, setCountryOpen] = useState(false);
  const [hasExistingProfile, setHasExistingProfile] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const normalizedQuery = countryQuery.trim().toLowerCase();

  const filteredCommonCountries = useMemo(() => {
    if (!normalizedQuery) return [...COMMON_COUNTRIES];
    return COMMON_COUNTRIES.filter((country) => country.toLowerCase().includes(normalizedQuery));
  }, [normalizedQuery]);

  const filteredOtherCountries = useMemo(() => {
    if (!normalizedQuery) return OTHER_COUNTRIES;
    return OTHER_COUNTRIES.filter((country) => country.toLowerCase().includes(normalizedQuery));
  }, [normalizedQuery]);

  useEffect(() => {
    const storedToken = getToken();
    setToken(storedToken);
    setAuthChecked(true);
    if (!storedToken) {
      setLoading(false);
      return;
    }

    apiRequest<{ profile: StudentProfile | null }>("/profile", { token: storedToken })
      .then((response) => {
        if (!response.profile) return;
        setHasExistingProfile(true);
        const profileCountry = response.profile.country || "";
        setForm({
          firstName: response.profile.firstName,
          lastName: response.profile.lastName,
          gpa: String(response.profile.gpa),
          majorInterest: response.profile.majorInterest,
          state: response.profile.state,
          country: profileCountry,
          gender: response.profile.gender || "",
          ethnicity: response.profile.ethnicity || "",
          financialNeed: response.profile.financialNeed,
          firstGeneration: response.profile.firstGeneration,
          activities: response.profile.activities.join(", ")
        });
        setCountryQuery(profileCountry);
      })
      .catch((loadError) => setError(loadError instanceof Error ? loadError.message : "Unable to load profile."))
      .finally(() => setLoading(false));
  }, []);

  return (
    <AppShell title="Profile Builder" subtitle="Complete your academic, personal, and extracurricular profile for better scholarship matching.">
      {authChecked && !token ? <div className="rounded-lg border border-gray-200 bg-white p-8 text-sm text-gray-600 shadow-sm">Log in to build your student profile.</div> : null}
      {token ? (
        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm md:p-8">
          {loading ? <p className="text-sm text-gray-500">Loading profile...</p> : null}
          {error ? <p className="mb-4 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-600">{error}</p> : null}
          {message ? <p className="mb-4 rounded-lg bg-green-50 px-4 py-3 text-sm text-green-600">{message}</p> : null}
          <form
            className="grid gap-4 md:grid-cols-2"
            onSubmit={async (event) => {
              event.preventDefault();
              if (!token) return;
              const parsedGpa = Number(form.gpa);
              if (Number.isNaN(parsedGpa)) {
                setError("Please enter a valid GPA.");
                return;
              }

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
                    gpa: parsedGpa,
                    majorInterest: form.majorInterest,
                    state: form.state,
                    country: form.country,
                    gender: form.gender || null,
                    ethnicity: form.ethnicity || null,
                    financialNeed: form.financialNeed,
                    firstGeneration: form.firstGeneration,
                    activities: form.activities
                      .split(",")
                      .map((item) => item.trim())
                      .filter(Boolean)
                  })
                });
                setHasExistingProfile(true);
                setMessage("Profile saved successfully.");
              } catch (saveError) {
                setError(saveError instanceof Error ? saveError.message : "Unable to save profile.");
              } finally {
                setSaving(false);
              }
            }}
          >
            <input className="rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500" placeholder="First name" value={form.firstName} onChange={(event) => setForm({ ...form, firstName: event.target.value })} />
            <input className="rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500" placeholder="Last name" value={form.lastName} onChange={(event) => setForm({ ...form, lastName: event.target.value })} />
            <input
              className="rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
              placeholder="GPA (e.g. 3.5)"
              type="number"
              step="0.1"
              min="0"
              max="4.5"
              value={form.gpa}
              onChange={(event) => setForm({ ...form, gpa: event.target.value })}
            />
            <input className="rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500" placeholder="Major interest" value={form.majorInterest} onChange={(event) => setForm({ ...form, majorInterest: event.target.value })} />
            <input className="rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500" placeholder="State" value={form.state} onChange={(event) => setForm({ ...form, state: event.target.value })} />
            <div className="relative">
              <input
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
                placeholder="Country"
                value={countryQuery}
                onFocus={() => setCountryOpen(true)}
                onBlur={() => window.setTimeout(() => setCountryOpen(false), 120)}
                onChange={(event) => {
                  const nextCountry = event.target.value;
                  setCountryQuery(nextCountry);
                  setForm({ ...form, country: nextCountry });
                  setCountryOpen(true);
                }}
              />
              {countryOpen ? (
                <div className="absolute z-20 mt-2 max-h-64 w-full overflow-y-auto rounded-lg border border-gray-200 bg-white p-2 shadow-lg">
                  {filteredCommonCountries.length ? <p className="px-2 py-1 text-xs font-semibold uppercase tracking-wide text-gray-500">Common</p> : null}
                  {filteredCommonCountries.map((country) => (
                    <button
                      key={`common-${country}`}
                      type="button"
                      onMouseDown={(event) => {
                        event.preventDefault();
                        setCountryQuery(country);
                        setForm({ ...form, country });
                        setCountryOpen(false);
                      }}
                      className="block w-full rounded-md px-2 py-2 text-left text-sm text-gray-700 hover:bg-blue-50"
                    >
                      {country}
                    </button>
                  ))}

                  {filteredOtherCountries.length ? <p className="px-2 py-1 text-xs font-semibold uppercase tracking-wide text-gray-500">All countries</p> : null}
                  {filteredOtherCountries.map((country) => (
                    <button
                      key={`all-${country}`}
                      type="button"
                      onMouseDown={(event) => {
                        event.preventDefault();
                        setCountryQuery(country);
                        setForm({ ...form, country });
                        setCountryOpen(false);
                      }}
                      className="block w-full rounded-md px-2 py-2 text-left text-sm text-gray-700 hover:bg-blue-50"
                    >
                      {country}
                    </button>
                  ))}

                  {!filteredCommonCountries.length && !filteredOtherCountries.length ? (
                    <p className="px-2 py-2 text-sm text-gray-500">No countries match your search.</p>
                  ) : null}
                </div>
              ) : null}
            </div>
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
