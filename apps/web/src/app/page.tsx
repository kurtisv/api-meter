import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import { CodePanel } from "@/components/api-meter/code-panel";
import { MetricCard } from "@/components/api-meter/metric-card";
import { SectionHeading } from "@/components/api-meter/section-heading";
import { UsageChart } from "@/components/api-meter/usage-chart";
import { MarketingPageShell } from "@/components/marketing/page-shell";
import { Button } from "@/components/ui/button";
import {
  apiKeys,
  ecosystemLogs,
  moduleUsage,
  platformFeatures,
  productStats,
  technicalHighlights,
} from "@/data/api-meter";
import { getCurrentLocale } from "@/lib/locale";

const copy = {
  en: {
    eyebrow: "API usage metering",
    title: "Make every API call measurable, billable, and safe.",
    intro:
      "API Meter is a polished SaaS/API portal concept for teams that need API keys, usage tracking, rate-limit visibility, and billing-ready records without turning the product into a heavy dashboard.",
    primary: "Explore the API",
    secondary: "Open demo dashboard",
    checks: ["No credit card demo", "OpenAPI-ready", "Prisma-backed model"],
    features: [
      {
        title: "Meter every request",
        description:
          "Capture API key, route, latency, status code, tenant, and billable unit without forcing teams into a heavy analytics stack.",
      },
      {
        title: "Ship plans with confidence",
        description:
          "Model plan limits, overage rules, and billing-ready usage records before the first paid customer asks for an invoice.",
      },
      {
        title: "Protect your API surface",
        description:
          "Use scopes, hashed credentials, rate limits, and structured logs to keep developer access controlled and auditable.",
      },
    ],
    platformEyebrow: "Platform",
    platformTitle: "Everything an API business needs before usage becomes messy.",
    platformDescription:
      "The product story is intentionally focused: capture usage, understand customers, enforce limits, and prepare billing exports.",
    dashboardEyebrow: "Dashboard",
    dashboardTitle: "A calmer view of key activity, usage pressure, and billing signals.",
    dashboardDescription:
      "The dashboard keeps the details visible without burying the operator in unnecessary widgets.",
    chartBadge: "Live demo data",
    workflowEyebrow: "Workflow",
    workflowTitle: "From first API key to billing export, the experience stays direct.",
    steps: [
      {
        number: "01",
        title: "Connect",
        description:
          "Drop the middleware into your API routes and start attaching customer, key, and endpoint context to each call.",
      },
      {
        number: "02",
        title: "Observe",
        description:
          "Read clean usage charts, failed request patterns, key activity, and limit pressure before it becomes support work.",
      },
      {
        number: "03",
        title: "Control",
        description:
          "Tune scopes, rotate keys, raise limits, and keep noisy integrations from affecting the rest of the platform.",
      },
      {
        number: "04",
        title: "Monetize",
        description:
          "Export billing-ready records and align product packaging with the usage customers actually create.",
      },
    ],
    proofEyebrow: "Technical proof",
    proofTitle: "Built to show the API portal side of the starter.",
    proofText:
      "API Meter keeps the portfolio story practical: it uses the starter foundations for API routes, auth-ready dashboards, billing structure, tests, and documentation.",
    logsEyebrow: "Ecosystem telemetry",
    logsTitle: "Every module leaves a measurable technical trail.",
    logsText:
      "The demo logs connect the recruiter journey to concrete API routes: contact forms, quotes, bookings, checkout, support tickets, keys, latency, and status codes.",
  },
  fr: {
    eyebrow: "Mesure d'usage API",
    title: "Rendre chaque appel API mesurable, facturable et securise.",
    intro:
      "API Meter est un concept de portail SaaS/API pour les equipes qui ont besoin de cles API, de suivi d'usage, de visibilite sur les limites et de donnees pretes pour la facturation sans transformer le produit en dashboard lourd.",
    primary: "Explorer l'API",
    secondary: "Voir le dashboard demo",
    checks: ["Demo sans carte", "OpenAPI pret", "Modele Prisma pret"],
    features: [
      {
        title: "Mesurer chaque requete",
        description:
          "Capturer la cle API, la route, la latence, le statut, le client et l'unite facturable sans imposer une grosse stack analytics.",
      },
      {
        title: "Lancer des plans avec confiance",
        description:
          "Modeliser les limites, les depassements et les donnees pretes pour la facturation avant le premier vrai client payant.",
      },
      {
        title: "Proteger la surface API",
        description:
          "Utiliser des scopes, des cles hashees, des limites et des logs structures pour garder les acces controlables et auditables.",
      },
    ],
    platformEyebrow: "Plateforme",
    platformTitle: "Tout ce qu'une API commerciale doit maitriser avant que l'usage devienne flou.",
    platformDescription:
      "Le produit reste volontairement cible: capturer l'usage, comprendre les clients, appliquer les limites et preparer les exports de facturation.",
    dashboardEyebrow: "Dashboard",
    dashboardTitle: "Une vue plus calme de l'activite des cles, de la pression d'usage et des signaux de facturation.",
    dashboardDescription:
      "Le dashboard garde les details visibles sans noyer l'operateur dans des widgets inutiles.",
    chartBadge: "Donnees demo",
    workflowEyebrow: "Flux",
    workflowTitle: "De la premiere cle API a l'export de facturation, l'experience reste directe.",
    steps: [
      {
        number: "01",
        title: "Connecter",
        description:
          "Brancher le middleware aux routes API et attacher le contexte client, cle et endpoint a chaque appel.",
      },
      {
        number: "02",
        title: "Observer",
        description:
          "Lire les tendances d'usage, les erreurs, l'activite des cles et la pression sur les limites avant que ca devienne du support.",
      },
      {
        number: "03",
        title: "Controler",
        description:
          "Ajuster les scopes, tourner les cles, relever les limites et isoler les integrations trop bruyantes.",
      },
      {
        number: "04",
        title: "Monetiser",
        description:
          "Exporter des donnees pretes pour la facturation et aligner les plans avec l'usage reel des clients.",
      },
    ],
    proofEyebrow: "Preuve technique",
    proofTitle: "Construit pour montrer le cote portail API du starter.",
    proofText:
      "API Meter garde une histoire de portfolio pratique: routes API, dashboard pret pour l'auth, structure de facturation, tests et documentation.",
    logsEyebrow: "Telemetrie ecosysteme",
    logsTitle: "Chaque module laisse une trace technique mesurable.",
    logsText:
      "Les logs demo relient le parcours recruteur a des routes API concretes: formulaires, soumissions, reservations, checkout, tickets, cles, latence et statuts.",
  },
} as const;

export default async function Home() {
  const locale = await getCurrentLocale();
  const t = copy[locale];

  return (
    <MarketingPageShell>
      <main>
        <section className="border-b border-border bg-[radial-gradient(circle_at_top_right,#c7fff3_0%,transparent_28%),linear-gradient(180deg,#f7fafc_0%,#eef7f7_100%)]">
          <div className="mx-auto grid w-full max-w-6xl gap-12 px-6 py-16 sm:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-700">
                {t.eyebrow}
              </p>
              <h1 className="mt-5 max-w-4xl text-5xl font-semibold tracking-normal text-balance sm:text-7xl">
                {t.title}
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
                {t.intro}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild size="lg">
                  <Link href="/developers">
                    {t.primary} <ArrowRight className="size-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="secondary">
                  <Link href="/dashboard">{t.secondary}</Link>
                </Button>
              </div>
              <div className="mt-10 grid gap-3 text-sm text-muted-foreground sm:grid-cols-3">
                {t.checks.map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <CheckCircle2 className="size-4 text-teal-700" />
                      {item}
                    </div>
                ))}
              </div>
            </div>
            <CodePanel />
          </div>
        </section>

        <section className="mx-auto grid max-w-6xl gap-4 px-6 py-10 sm:grid-cols-2 lg:grid-cols-4">
          {productStats.map((stat) => (
            <MetricCard key={stat.label} label={stat.label} value={stat.value} />
          ))}
        </section>

        <section className="mx-auto max-w-6xl px-6 py-16">
          <SectionHeading
            eyebrow={t.platformEyebrow}
            title={t.platformTitle}
            description={t.platformDescription}
          />
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {t.features.map((feature, index) => {
              const Icon = platformFeatures[index].icon;
              return (
              <article key={feature.title} className="border border-border bg-card p-6 shadow-sm">
                <Icon className="size-6 text-teal-700" />
                <h3 className="mt-5 text-xl font-semibold">{feature.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {feature.description}
                </p>
              </article>
              );
            })}
          </div>
        </section>

        <section className="border-y border-border bg-white">
          <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <SectionHeading
                eyebrow={t.dashboardEyebrow}
                title={t.dashboardTitle}
                description={t.dashboardDescription}
              />
              <div className="mt-8 grid gap-3">
                {apiKeys.map((key) => (
                  <div
                    key={key.prefix}
                    className="flex flex-col gap-3 border border-border bg-background p-4 sm:flex-row sm:items-center sm:justify-between"
                  >
                    <div>
                      <p className="font-medium">{key.name}</p>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {key.prefix} - {key.requests} requests
                      </p>
                    </div>
                    <span className="w-fit border border-border bg-card px-2.5 py-1 text-xs font-medium">
                      {locale === "fr" && key.status === "Near limit" ? "Pres de la limite" : key.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <UsageChart badge={t.chartBadge} />
          </div>
        </section>

        <section className="border-y border-border bg-slate-950 text-white">
          <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 lg:grid-cols-[0.82fr_1.18fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-300">
                {t.logsEyebrow}
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-normal text-balance sm:text-5xl">
                {t.logsTitle}
              </h2>
              <p className="mt-5 leading-7 text-slate-300">{t.logsText}</p>
              <div className="mt-8 grid gap-3">
                {moduleUsage.map((item) => (
                  <div key={item.module}>
                    <div className="mb-2 flex items-center justify-between text-xs text-slate-400">
                      <span>{item.module}</span>
                      <span>{item.value}%</span>
                    </div>
                    <div className="h-2 bg-slate-800">
                      <div className="h-2 bg-teal-300" style={{ width: `${item.value}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="overflow-x-auto border border-slate-800 bg-slate-900">
              <div className="grid min-w-[760px] grid-cols-[5rem_0.8fr_1.2fr_0.9fr_4rem_4rem] gap-3 border-b border-slate-800 px-4 py-3 font-mono text-[11px] uppercase tracking-[0.12em] text-slate-500">
                <span>Time</span>
                <span>Module</span>
                <span>Route</span>
                <span>Client</span>
                <span>Status</span>
                <span>Latency</span>
              </div>
              {ecosystemLogs.map((log) => (
                <div key={`${log.time}-${log.route}`} className="grid min-w-[760px] grid-cols-[5rem_0.8fr_1.2fr_0.9fr_4rem_4rem] gap-3 border-b border-slate-800 px-4 py-3 font-mono text-xs text-slate-300 last:border-b-0">
                  <span className="text-slate-500">{log.time}</span>
                  <span>{log.module}</span>
                  <span className="text-teal-200">{log.route}</span>
                  <span>{log.client}</span>
                  <span className="text-emerald-300">{log.status}</span>
                  <span>{log.latency}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-16">
          <SectionHeading
            eyebrow={t.workflowEyebrow}
            title={t.workflowTitle}
          />
          <div className="mt-10 grid gap-4 md:grid-cols-4">
            {t.steps.map((step) => (
              <article key={step.number} className="border-l border-border pl-5">
                <p className="font-mono text-sm text-teal-700">{step.number}</p>
                <h3 className="mt-4 text-lg font-semibold">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-slate-950 text-white">
          <div className="mx-auto max-w-6xl px-6 py-16">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-300">
                  {t.proofEyebrow}
                </p>
                <h2 className="mt-4 text-3xl font-semibold tracking-normal text-balance sm:text-4xl">
                  {t.proofTitle}
                </h2>
                <p className="mt-4 text-base leading-7 text-slate-300">
                  {t.proofText}
                </p>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {technicalHighlights.map((item) => (
                  <div key={item.title} className="border border-slate-800 bg-slate-900 p-4">
                    <item.icon className="size-5 text-teal-300" />
                    <p className="mt-4 font-medium">{item.title}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </MarketingPageShell>
  );
}
