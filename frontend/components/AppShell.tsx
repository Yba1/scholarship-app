"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Bell, Menu, X } from "lucide-react";
import { useState } from "react";

import { clearToken } from "@/lib/auth";

import { Sidebar } from "./Sidebar";

type AppShellProps = {
  title: string;
  subtitle: string;
  action?: React.ReactNode;
  children: React.ReactNode;
};

export function AppShell({ title, subtitle, action, children }: AppShellProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {sidebarOpen ? <div className="fixed inset-0 z-40 bg-black/50 lg:hidden" onClick={() => setSidebarOpen(false)} /> : null}
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <div className="flex min-w-0 flex-1 flex-col">
        <header className="sticky top-0 z-30 border-b border-gray-200 bg-white px-4 py-4 md:px-6">
          <div className="flex items-center justify-between gap-4">
            <div className="flex min-w-0 items-center gap-3">
              <button onClick={() => setSidebarOpen((value) => !value)} className="rounded-lg p-2 hover:bg-gray-100 lg:hidden">
                {sidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
              <div className="min-w-0">
                <p className="text-sm font-medium text-gray-500">Student workspace</p>
                <h1 className="truncate text-lg font-semibold text-gray-900 md:text-xl">{title}</h1>
                <p className="hidden text-sm text-gray-500 sm:block">{subtitle}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              {action}
              <button className="relative rounded-lg p-2 hover:bg-gray-100">
                <Bell className="h-5 w-5 text-gray-600" />
                <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500" />
              </button>
              <div className="hidden h-10 w-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 sm:block" />
              {pathname !== "/login" && pathname !== "/register" ? (
                <button
                  onClick={() => {
                    clearToken();
                    router.push("/");
                    router.refresh();
                  }}
                  className="hidden rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 md:block"
                >
                  Logout
                </button>
              ) : null}
            </div>
          </div>
        </header>
        <main className="flex-1 overflow-auto p-4 md:p-6">{children}</main>
      </div>
    </div>
  );
}