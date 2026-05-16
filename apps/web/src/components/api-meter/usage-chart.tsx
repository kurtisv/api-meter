import { usageBars } from "@/data/api-meter";

export function UsageChart({ badge = "Live demo data" }: { badge?: string }) {
  return (
    <div className="border border-border bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-medium text-muted-foreground">Usage trend</p>
          <p className="mt-1 text-2xl font-semibold">1.28M requests</p>
        </div>
        <span className="border border-teal-200 bg-teal-50 px-2.5 py-1 text-xs font-medium text-teal-700">
          {badge}
        </span>
      </div>
      <div className="mt-8 flex h-48 items-end gap-2">
        {usageBars.map((height, index) => (
          <div
            key={index}
            className="flex flex-1 items-end bg-slate-100"
            aria-label={`Month ${index + 1}: ${height}%`}
          >
            <div
              className="w-full bg-teal-600"
              style={{ height: `${height}%` }}
            />
          </div>
        ))}
      </div>
      <div className="mt-4 flex justify-between text-xs text-muted-foreground">
        <span>Jan</span>
        <span>Jun</span>
        <span>Dec</span>
      </div>
    </div>
  );
}
