import Link from "next/link";
import { Award, Calendar, Search, TrendingUp } from "lucide-react";

export default function HomePage() {
  return (
    <main className="min-h-[calc(100vh-81px)] bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-blue-700">Scholarship matching MVP</p>
            <h1 className="mt-8 text-5xl font-bold leading-tight text-gray-900 md:text-6xl">Find scholarships you are likely to win and never miss a deadline.</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600">Build a student profile, run weighted scholarship matching, track applications, and get essay feedback in one student-friendly workflow.</p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/register" className="rounded-lg bg-blue-600 px-6 py-3 text-sm font-medium text-white hover:bg-blue-700">Create account</Link>
              <Link href="/scholarships" className="rounded-lg border border-gray-300 px-6 py-3 text-sm font-medium text-gray-700 hover:bg-white">Browse scholarships</Link>
            </div>
          </div>
          <div className="rounded-2xl border border-white bg-white/80 p-8 shadow-xl">
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl bg-blue-50 p-5"><Award className="h-8 w-8 text-blue-600" /><p className="mt-4 text-3xl font-bold text-gray-900">87</p><p className="text-sm text-gray-500">Potential matches</p></div>
              <div className="rounded-xl bg-purple-50 p-5"><TrendingUp className="h-8 w-8 text-purple-600" /><p className="mt-4 text-3xl font-bold text-gray-900">92%</p><p className="text-sm text-gray-500">Average quality</p></div>
              <div className="rounded-xl bg-emerald-50 p-5"><Search className="h-8 w-8 text-emerald-600" /><p className="mt-4 text-3xl font-bold text-gray-900">12</p><p className="text-sm text-gray-500">Saved scholarships</p></div>
              <div className="rounded-xl bg-amber-50 p-5"><Calendar className="h-8 w-8 text-amber-600" /><p className="mt-4 text-3xl font-bold text-gray-900">3</p><p className="text-sm text-gray-500">Deadlines this week</p></div>
            </div>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            ["Build your profile", "Add GPA, major, location, and extracurriculars to improve scholarship fit scoring."],
            ["Run smart matching", "Use the weighted algorithm to surface scholarships with the highest fit and estimated win rates."],
            ["Track every application", "Move scholarships from saved to applying to submitted and use the essay helper when you need feedback."]
          ].map(([title, body]) => (
            <div key={title} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
              <p className="mt-3 text-sm leading-7 text-gray-600">{body}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}