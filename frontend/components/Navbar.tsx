"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { clearToken, getToken } from "@/lib/auth";

const links = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/scholarships", label: "Browse" },
  { href: "/tracker", label: "Applications" },
  { href: "/essay-helper", label: "Essay Helper" }
];

export function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [hasToken, setHasToken] = useState(false);

  useEffect(() => {
    setHasToken(Boolean(getToken()));
  }, [pathname]);

  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-5">
        <Link href="/" className="block">
          <h1 className="text-2xl font-bold text-blue-600">ScholarMatch</h1>
          <p className="mt-1 text-sm text-gray-500">Find your perfect scholarship</p>
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className={`text-sm font-medium ${pathname === link.href ? "text-blue-600" : "text-gray-600 hover:text-gray-900"}`}>
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          {hasToken ? (
            <button
              onClick={() => {
                clearToken();
                router.push("/");
                router.refresh();
              }}
              className="rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              Logout
            </button>
          ) : (
            <>
              <Link href="/login" className="rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">Login</Link>
              <Link href="/register" className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">Sign Up</Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}