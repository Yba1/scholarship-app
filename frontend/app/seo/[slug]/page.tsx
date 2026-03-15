import Link from "next/link";
import type { Metadata } from "next";

import { parseSeoSlug } from "@/lib/seo";
import type { Scholarship } from "@/lib/types";

function formatCurrency(value: number) {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(value);
}

function formatDate(value: string) {
  return new Intl.DateTimeFormat("en-US", { month: "short", day: "numeric", year: "numeric" }).format(new Date(value));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const parsed = parseSeoSlug(params.slug);
  return { title: parsed.title, description: `Browse ${parsed.title.toLowerCase()} and keep track of deadlines.` };
}

export default async function SeoScholarshipPage({ params }: { params: { slug: string } }) {
  const parsed = parseSeoSlug(params.slug);
  const query = new URLSearchParams();
  if (parsed.state) query.set("state", parsed.state);
  if (parsed.major) query.set("major", parsed.major);
  if (parsed.q) query.set("q", parsed.q);

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000"}/scholarships?${query.toString()}`, { cache: "no-store" });
  const data = (await response.json().catch(() => ({ scholarships: [] }))) as { scholarships: Scholarship[] };

  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <div className="rounded-lg border border-gray-200 bg-white p-8 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-wide text-gray-500">SEO page</p>
        <h1 className="mt-2 text-4xl font-bold text-gray-900">{parsed.title}</h1>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-gray-600">Curated scholarship results based on this topic or location page.</p>
        <div className="mt-8 space-y-4">
          {data.scholarships.length ? data.scholarships.map((scholarship) => (
            <article key={scholarship.id} className="rounded-lg border border-gray-200 bg-gray-50 p-6">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-semibold text-gray-900">{scholarship.title}</h2>
                  <p className="mt-2 text-sm text-gray-600">{scholarship.organization}</p>
                </div>
                <div className="text-right">
                  <p className="text-xl font-bold text-blue-600">{formatCurrency(scholarship.amount)}</p>
                  <p className="mt-2 text-sm text-gray-600">Deadline {formatDate(scholarship.deadline)}</p>
                </div>
              </div>
              <p className="mt-4 text-sm leading-7 text-gray-700">{scholarship.description}</p>
              <div className="mt-5 flex gap-3">
                <Link href={`/scholarships/${scholarship.id}`} className="rounded-lg bg-blue-600 px-5 py-3 text-sm font-medium text-white hover:bg-blue-700">Details</Link>
                <a href={scholarship.applicationUrl} target="_blank" rel="noreferrer" className="rounded-lg border border-gray-300 px-5 py-3 text-sm font-medium text-gray-700 hover:bg-gray-100">Apply</a>
              </div>
            </article>
          )) : <p className="rounded-lg border border-dashed border-gray-300 bg-gray-50 p-8 text-sm text-gray-500">No scholarships found for this topic yet.</p>}
        </div>
      </div>
    </main>
  );
}