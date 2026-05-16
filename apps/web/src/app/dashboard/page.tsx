import { MetricCard } from "@/components/api-meter/metric-card";
import { UsageChart } from "@/components/api-meter/usage-chart";
import { apiKeys, dashboardMetrics } from "@/data/api-meter";

export default function DashboardPage() {
  return (
    <main className="px-6 py-10 text-foreground">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-700">
              API operations
            </p>
            <h1 className="mt-3 text-3xl font-semibold tracking-normal">
              Usage overview
            </h1>
          </div>
          <p className="max-w-xl text-sm leading-6 text-muted-foreground">
            Demo data for a SaaS team monitoring API keys, request volume, and
            limit pressure before usage turns into billing or support issues.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {dashboardMetrics.map((metric) => (
            <MetricCard
              key={metric.label}
              label={metric.label}
              value={metric.value}
              change={metric.change}
            />
          ))}
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <UsageChart />
          <section className="border border-border bg-card p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">Key health</h2>
              <span className="border border-border bg-background px-2.5 py-1 text-xs font-medium">
                126 active
              </span>
            </div>
            <div className="mt-6 grid gap-3">
              {apiKeys.map((key) => (
                <article key={key.prefix} className="border border-border bg-background p-4">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-medium">{key.name}</h3>
                      <p className="mt-1 font-mono text-xs text-muted-foreground">
                        {key.prefix}
                      </p>
                    </div>
                    <span className="text-xs font-medium text-teal-700">{key.status}</span>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {key.scopes.map((scope) => (
                      <span
                        key={scope}
                        className="border border-border bg-card px-2 py-1 font-mono text-xs"
                      >
                        {scope}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
