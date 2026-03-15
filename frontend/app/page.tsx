import Link from "next/link";
import { CheckCircle2, GraduationCap, Sparkles, UserRound, WandSparkles } from "lucide-react";

export default function HomePage() {
  const steps = [
    {
      number: "01",
      title: "Create Your Profile",
      description: "Add your GPA, interests, state, and background",
      icon: UserRound
    },
    {
      number: "02",
      title: "Get Matched",
      description: "We find scholarships that fit you best",
      icon: WandSparkles
    },
    {
      number: "03",
      title: "Apply & Win",
      description: "Track applications and submit with confidence",
      icon: CheckCircle2
    }
  ];
  const stats = [
    { title: "500+ Scholarships", subtitle: "and growing" },
    { title: "Free Forever", subtitle: "no hidden fees" },
    { title: "Built for High Schoolers", subtitle: "grades 9-12", icon: GraduationCap }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white text-gray-900 dark:from-gray-950 dark:to-gray-900 dark:text-gray-100">
      <header className="border-b border-gray-200/80 bg-white/90 backdrop-blur dark:border-gray-800 dark:bg-gray-950/90">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-blue-600" />
            <span className="text-lg font-bold text-blue-600">ScholarMatch</span>
          </Link>
          <div className="flex items-center gap-3">
            <Link href="/login" className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800">
              Login
            </Link>
            <Link href="/register" className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">
              Sign Up
            </Link>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-6 py-10 md:py-12">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold leading-tight text-gray-900 dark:text-white md:text-6xl">Find Scholarships Made for You</h1>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-gray-600 dark:text-gray-300 md:text-lg">
            ScholarMatch helps high school students discover and apply for scholarships that actually match their profile - for free.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/register" className="w-full rounded-lg bg-blue-600 px-7 py-3 text-center text-sm font-semibold text-white hover:bg-blue-700 sm:w-auto">
              Get Started
            </Link>
            <Link href="/scholarships" className="w-full rounded-lg border border-gray-300 bg-white px-7 py-3 text-center text-sm font-semibold text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200 dark:hover:bg-gray-800 sm:w-auto">
              Browse Scholarships
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8 md:py-10">
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white md:text-3xl">How It Works</h2>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <article key={step.number} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold tracking-wide text-blue-600">{step.number}</span>
                  <Icon className="h-5 w-5 text-blue-600" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">{step.title}</h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{step.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8 md:py-10">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <article key={stat.title} className="rounded-xl border border-gray-200 bg-white p-8 text-center shadow-sm dark:border-gray-800 dark:bg-gray-900">
                <div className="flex items-center justify-center gap-2">
                  {Icon ? <Icon className="h-5 w-5 text-blue-600" /> : null}
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">{stat.title}</p>
                </div>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{stat.subtitle}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-10 pt-6 md:pb-12">
        <div className="rounded-2xl bg-blue-600 px-8 py-10 text-center text-white md:px-12 md:py-12">
          <h2 className="text-2xl font-bold md:text-3xl">Ready to find your scholarship?</h2>
          <div className="mt-6">
            <Link href="/register" className="inline-flex rounded-lg bg-white px-6 py-3 text-sm font-semibold text-blue-600 hover:bg-blue-50">
              Create Free Account
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
