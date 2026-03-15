import { Calendar } from "lucide-react";

import { formatDate } from "@/lib/api";
import type { Scholarship } from "@/lib/types";

export function DeadlineWidget({ scholarships }: { scholarships: Scholarship[] }) {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-6">
      <h3 className="mb-4 text-sm font-semibold text-gray-900 dark:text-white md:text-base">Upcoming Deadlines</h3>
      <div className="space-y-4">
        {scholarships.length ? (
          scholarships.map((scholarship, index) => (
            <div key={scholarship.id} className="flex items-center gap-3">
              <div className={`h-2 w-2 flex-shrink-0 rounded-full ${index === 0 ? "bg-red-500" : index === 1 ? "bg-amber-500" : "bg-blue-500"}`} />
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium text-gray-900 dark:text-white">{scholarship.title}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">{formatDate(scholarship.deadline)}</p>
              </div>
              <Calendar className="h-4 w-4 text-gray-400" />
            </div>
          ))
        ) : (
          <p className="text-sm text-gray-500 dark:text-gray-400">No deadlines within the next week yet.</p>
        )}
      </div>
    </div>
  );
}
