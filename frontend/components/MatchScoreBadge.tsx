export function MatchScoreBadge({ score }: { score: number }) {
  const classes = score >= 90 ? "bg-green-100 text-green-700" : score >= 75 ? "bg-blue-100 text-blue-700" : "bg-amber-100 text-amber-700";
  return <span className={`rounded-full px-3 py-1 text-xs font-medium ${classes}`}>{score}% Match</span>;
}