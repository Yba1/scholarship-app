import type { Metadata } from "next";
import Script from "next/script";

import "./globals.css";

export const metadata: Metadata = {
  title: "ScholarMatch",
  description: "Match students to scholarships they are likely to win and stay ahead of deadlines."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900 antialiased dark:bg-gray-900 dark:text-gray-100">
        <Script id="theme-init" strategy="beforeInteractive">
          {`try { const theme = localStorage.getItem('theme'); if (theme === 'dark') { document.documentElement.classList.add('dark'); } else { document.documentElement.classList.remove('dark'); } } catch { document.documentElement.classList.remove('dark'); }`}
        </Script>
        {children}
      </body>
    </html>
  );
}
