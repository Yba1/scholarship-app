import Link from "next/link";
import { BookmarkCheck, Calendar, TrendingUp } from "lucide-react";

import { formatCurrency, formatDate } from "@/lib/api";
import type { Match, Scholarship } from "@/lib/types";

import { MatchScoreBadge } from "./MatchScoreBadge";

type ScholarshipCardProps = {
  scholarship: Scholarship;
  match?: Match;
  onSave?: (scholarshipId: string) => void;
  onApply?: (scholarshipId: string) => void;
};

export function ScholarshipCard({ scholarship, match, onSave, onApply }: ScholarshipCardProps) {
  return (
    <div className="rounded-lg border border-gray-200 bg-white shadow-sm overflow-hidden">
      <div className="p-4 md:p-6 hover:bg-gray-50 transition-colors">
        <div className="mb-3 flex items-start justify-between">
          <div className="min-w-0 flex-1">
            <h4 className="text-sm font-semibold text-gray-900 md:text-base">{scholarship.title}</h4>
            <p className="mt-1 text-xs text-gray-600 md:text-sm">{scholarship.organization}</p>
          </div>
          <div className="ml-3 flex-shrink-0 text-right">
            <p className="text-sm font-bold text-blue-600 md:text-base">{formatCurrency(scholarship.amount)}</p>
          </div>
        </div>

        <div className="mb-3 flex flex-wrap items-center gap-2 md:gap-4">
          <div className="flex items-center gap-2 text-xs text-gray-600 md:text-sm">
            <Calendar className="h-4 w-4 text-gray-400" />
            <span>{formatDate(scholarship.deadline)}</span>
          </div>
          {match ? <MatchScoreBadge score={match.matchScore} /> : null}
          {match ? <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700">{(match.winProbability * 100).toFixed(1)}% Win Rate</span> : null}
        </div>

        <p className="text-sm text-gray-600">{scholarship.description}</p>

        <div className="mt-4 flex flex-col gap-3 sm:flex-row">
          <Link href={`/scholarships/${scholarship.id}`} className="rounded-lg bg-blue-600 px-4 py-2 text-center text-sm font-medium text-white hover:bg-blue-700">
            View Details
          </Link>
          {onSave ? <button onClick={() => onSave(scholarship.id)} className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">Save for Later</button> : null}
          {onApply ? <button onClick={() => onApply(scholarship.id)} className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"><BookmarkCheck className="h-4 w-4" /> Apply</button> : null}
        </div>
      </div>
    </div>
  );
}