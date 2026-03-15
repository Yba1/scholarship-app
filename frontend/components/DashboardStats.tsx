export function DashboardStats({ stats }: { stats: Array<{ label: string; value: string; icon: React.ReactNode; accent: string; hint: string }> }) {
  return (
    <div className="mb-8 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-6">
      {stats.map((stat) => (
        <div key={stat.label} className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm md:p-6">
          <div className="mb-3 flex items-center justify-between md:mb-4">
            <div className={`flex h-10 w-10 items-center justify-center rounded-lg md:h-12 md:w-12 ${stat.accent}`}>{stat.icon}</div>
            <span className="text-xs font-medium text-gray-500 md:text-sm">{stat.hint}</span>
          </div>
          <p className="text-xl font-bold text-gray-900 md:text-2xl">{stat.value}</p>
          <p className="mt-1 text-xs text-gray-500 md:text-sm">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}