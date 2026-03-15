"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { startTransition, useState } from "react";

import { apiRequest } from "@/lib/api";
import { setToken } from "@/lib/auth";

export default function RegisterPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError("");
    try {
      const result = await apiRequest<{ token: string }>("/auth/register", { method: "POST", body: JSON.stringify({ email, password }) });
      setToken(result.token);
      startTransition(() => router.push("/profile"));
    } catch (submitError) {
      setError(submitError instanceof Error ? submitError.message : "Unable to register.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="mx-auto flex min-h-screen max-w-7xl items-center px-6 py-12">
      <div className="mx-auto w-full max-w-lg rounded-lg border border-gray-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
        <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Get started</p>
        <h1 className="mt-2 text-3xl font-bold text-gray-900 dark:text-white">Create your account</h1>
        <form className="mt-8 space-y-4" onSubmit={handleSubmit}>
          <input className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 outline-none focus:border-blue-500 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100" placeholder="Email" type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
          <input className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 outline-none focus:border-blue-500 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100" placeholder="Password" type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
          {error ? <p className="text-sm text-red-600">{error}</p> : null}
          <button disabled={loading} className="w-full rounded-lg bg-blue-600 px-6 py-3 text-sm font-medium text-white hover:bg-blue-700">{loading ? "Creating account..." : "Sign up"}</button>
        </form>
        <p className="mt-6 text-sm text-gray-600 dark:text-gray-400">Already registered? <Link href="/login" className="font-medium text-blue-600">Log in</Link></p>
      </div>
    </main>
  );
}
