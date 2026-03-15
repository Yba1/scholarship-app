"use client";

import { useEffect, useState } from "react";

import { AppShell } from "@/components/AppShell";

const THEME_KEY = "theme";

type Theme = "light" | "dark";

function applyTheme(theme: Theme) {
  document.documentElement.classList.toggle("dark", theme === "dark");
}

export default function SettingsPage() {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const savedTheme = window.localStorage.getItem(THEME_KEY);
    setTheme(savedTheme === "dark" ? "dark" : "light");
  }, []);

  return (
    <AppShell title="Settings" subtitle="Manage your preferences.">
      <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
        <div className="flex items-center justify-between gap-4 rounded-lg border border-gray-200 px-4 py-3">
          <div>
            <p className="text-sm font-semibold text-gray-900">Appearance</p>
            <p className="text-xs text-gray-500">Choose light or dark mode.</p>
          </div>
          <button
            onClick={() => {
              const nextTheme: Theme = theme === "light" ? "dark" : "light";
              setTheme(nextTheme);
              window.localStorage.setItem(THEME_KEY, nextTheme);
              applyTheme(nextTheme);
            }}
            className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
          >
            {theme === "light" ? "Switch to Dark" : "Switch to Light"}
          </button>
        </div>
        <p className="mt-4 text-sm text-gray-500">More settings coming soon - still under construction</p>
      </div>
    </AppShell>
  );
}
