import { MetricCard } from "@/components/api-meter/metric-card";
import { EcosystemNotificationPanel } from "@/components/ecosystem/notification-panel";
import { UsageChart } from "@/components/api-meter/usage-chart";
import { apiKeys, dashboardMetrics } from "@/data/api-meter";
import { getRecentEcosystemEvents } from "@/lib/ecosystem";

const timeline = [
  "Luma Studio",
  "QuotePilot",
  "ReserveFlow",
  "ClientHub",
  "CommerceKit",
  "EventPass",
  "SupportDesk Lite",
  "API Meter",
];

const endpoints = [
  ["POST", "/api/ecosystem/events", "events", "99.9%", "184 ms"],
  ["GET", "/api/ecosystem/activity", "activity", "99.4%", "96 ms"],
  ["POST", "/api/usage/ingest", "usage", "98.8%", "211 ms"],
  ["GET", "/api/keys/health", "keys", "100%", "72 ms"],
];

const moduleUsage = [
  ["Luma", "lead.created", "18%"],
  ["QuotePilot", "quote.*", "26%"],
  ["ReserveFlow", "booking.created", "14%"],
  ["ClientHub", "project.created", "16%"],
  ["CommerceKit", "order.created", "12%"],
  ["EventPass", "event.*", "9%"],
  ["SupportDesk", "ticket.*", "5%"],
];

function payloadSummary(payload: unknown) {
  if (typeof payload !== "object" || payload === null) return "No payload";
  const entries = Object.entries(payload as Record<string, unknown>).slice(0, 3);
  if (entries.length === 0) return "Empty payload";
  return entries.map(([key, value]) => `${key}: ${String(value).slice(0, 28)}`).join(" / ");
}

export default async function DashboardPage() {
  const events = await getRecentEcosystemEvents(14);

  return (
    <main className="bg-[radial-gradient(circle_at_top_left,#dff7f1,transparent_32%),linear-gradient(180deg,#f7fafc_0%,#edf6f5_100%)] px-6 py-10 text-foreground">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 grid gap-6 lg:grid-cols-[1fr_0.9fr] lg:items-end">
          <div>
            <p className="inline-flex rounded-md border border-teal-200 bg-white/80 px-2.5 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-teal-700">
              KV Portfolio Ecosystem - Demo Mode
            </p>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-700">
              API operations / devtool
            </p>
            <h1 className="mt-3 text-3xl font-semibold tracking-normal">
              Ecosystem activity console
            </h1>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground">
              API Meter montre la couche technique du boilerplate: logs, endpoints, latence,
              payloads resumes et activite generee par chaque module.
            </p>
          </div>
          <section className="grid gap-3 rounded-lg border border-teal-200 bg-white/85 p-4 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
              Ce que tu peux tester ici
            </p>
            <div className="grid gap-2 text-sm">
              <p><span className="font-semibold">Recoit:</span> tous les events publies par les modules.</p>
              <p><span className="font-semibold">Affiche:</span> action, source, cible, statut, flowId et payload.</p>
              <p><span className="font-semibold">Demontre:</span> observabilite API, journalisation et dashboard SaaS.</p>
            </div>
          </section>
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

        <div className="mt-8">
          <EcosystemNotificationPanel appKey="api-meter" />
        </div>

        <section className="mt-8 rounded-lg border border-border bg-[#0b1220] p-5 text-white shadow-sm">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-teal-200">Ecosystem activity</p>
              <h2 className="mt-2 text-xl font-semibold">Logs du parcours en temps reel</h2>
              <p className="mt-1 text-sm text-white/60">
                Les lignes recentes proviennent des vraies actions Luma, QuotePilot, ReserveFlow et des autres apps.
              </p>
            </div>
            <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold">
              {events.length} events
            </span>
          </div>
          <div className="mt-5 overflow-hidden rounded-md border border-white/10">
            <table className="w-full min-w-[780px] text-left text-sm">
              <thead className="bg-white/5 text-xs uppercase tracking-[0.12em] text-white/50">
                <tr>
                  <th className="px-4 py-3 font-medium">Source</th>
                  <th className="px-4 py-3 font-medium">Cible</th>
                  <th className="px-4 py-3 font-medium">Event</th>
                  <th className="px-4 py-3 font-medium">Client</th>
                  <th className="px-4 py-3 font-medium">Payload</th>
                  <th className="px-4 py-3 font-medium">Flow</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                {events.map((event) => (
                  <tr key={event.id} className="bg-[#0f172a]/80">
                    <td className="px-4 py-3 font-medium">{event.sourceApp}</td>
                    <td className="px-4 py-3 text-white/70">{event.targetApp ?? "broadcast"}</td>
                    <td className="px-4 py-3 font-mono text-xs text-teal-200">{event.eventType}</td>
                    <td className="px-4 py-3 text-white/70">{event.customerName ?? "Donnee formulaire"}</td>
                    <td className="px-4 py-3 text-xs text-white/55">{payloadSummary(event.payload)}</td>
                    <td className="px-4 py-3 font-mono text-[11px] text-white/45">{event.flowId}</td>
                  </tr>
                ))}
                {events.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="px-4 py-8 text-center text-sm text-white/55">
                      Aucun event pour l&apos;instant. Demarre le parcours dans Luma Studio pour remplir ce journal.
                    </td>
                  </tr>
                ) : null}
              </tbody>
            </table>
          </div>
        </section>

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

        <div className="mt-8 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <section className="rounded-lg border bg-card p-5 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
              Timeline du parcours
            </p>
            <div className="mt-4 flex flex-wrap gap-2 text-xs font-semibold">
              {timeline.map((item, index) => (
                <span key={item} className={index === 7 ? "rounded-md bg-primary px-3 py-2 text-primary-foreground" : "rounded-md border bg-background px-3 py-2"}>
                  {String(index + 1).padStart(2, "0")} {item}
                </span>
              ))}
            </div>
          </section>
          <section className="rounded-lg border bg-card p-5 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
              Endpoints simules
            </p>
            <div className="mt-4 grid gap-3">
              {endpoints.map(([method, path, scope, success, latency]) => (
                <div key={path} className="grid gap-3 rounded-md border bg-background p-3 text-sm sm:grid-cols-[4rem_1fr_4rem_4rem]">
                  <span className="font-mono text-xs font-semibold text-teal-700">{method}</span>
                  <span className="font-mono text-xs">{path}</span>
                  <span>{success}</span>
                  <span>{latency}</span>
                  <span className="text-xs text-muted-foreground sm:col-span-4">scope: {scope}</span>
                </div>
              ))}
            </div>
          </section>
        </div>

        <section className="mt-8 rounded-lg border bg-card p-5 shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                Usage par module
              </p>
              <h2 className="mt-2 text-lg font-semibold">Ce que chaque app envoie au devtool</h2>
            </div>
            <a href="https://supportdesk-lite-jet.vercel.app" className="rounded-md bg-primary px-3 py-2 text-xs font-semibold text-primary-foreground">
              Module precedent: SupportDesk Lite
            </a>
          </div>
          <div className="mt-5 grid gap-3 md:grid-cols-2">
            {moduleUsage.map(([module, signal, width]) => (
              <div key={module} className="rounded-md border bg-background p-4">
                <div className="flex items-center justify-between gap-3 text-sm">
                  <span className="font-semibold">{module}</span>
                  <span className="font-mono text-xs text-muted-foreground">{signal}</span>
                </div>
                <div className="mt-3 h-2 rounded-full bg-muted">
                  <div className="h-2 rounded-full bg-primary" style={{ width }} />
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
