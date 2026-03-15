"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Award, BookMarked, ClipboardList, Home, Search, Settings, User } from "lucide-react";

const items = [
  { href: "/dashboard", label: "Dashboard", icon: Home },
  { href: "/scholarships", label: "Browse Scholarships", icon: Search },
  { href: "/tracker", label: "Applications", icon: ClipboardList },
  { href: "/profile", label: "Profile", icon: User },
  { href: "/essay-helper", label: "Essay Helper", icon: BookMarked },
  { href: "/scholarships", label: "Settings", icon: Settings }
];

export function Sidebar({ open, onClose }: { open?: boolean; onClose?: () => void }) {
  const pathname = usePathname();

  return (
    <aside className={`${open ? "translate-x-0" : "-translate-x-full"} fixed top-0 z-50 flex h-screen w-64 flex-col border-r border-gray-200 bg-white transition-transform duration-300 lg:sticky lg:translate-x-0`}>
      <div className="border-b border-gray-200 p-6">
        <Link href="/" className="block" onClick={onClose}>
          <h1 className="text-2xl font-bold text-blue-600">ScholarMatch</h1>
          <p className="mt-1 text-sm text-gray-500">Find your perfect scholarship</p>
        </Link>
      </div>

      <nav className="flex-1 overflow-y-auto p-4">
        <ul className="space-y-2">
          {items.map((item) => {
            const Icon = item.icon;
            const active = pathname === item.href;
            return (
              <li key={`${item.href}-${item.label}`}>
                <Link
                  href={item.href}
                  onClick={onClose}
                  className={`flex items-center gap-3 rounded-lg px-4 py-3 transition-colors ${active ? "bg-blue-600 text-white" : "text-gray-700 hover:bg-gray-100"}`}
                >
                  <Icon className="h-5 w-5" />
                  <span>{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="border-t border-gray-200 p-4">
        <div className="rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 p-4 text-white">
          <Award className="mb-2 h-8 w-8" />
          <p className="text-sm font-semibold">Complete your profile</p>
          <p className="mt-1 text-xs opacity-90">Unlock better matches</p>
          <Link href="/profile" onClick={onClose} className="mt-3 block w-full rounded-md bg-white px-3 py-2 text-center text-sm font-medium text-blue-600 hover:bg-gray-100">
            Complete Now
          </Link>
        </div>
      </div>
    </aside>
  );
}