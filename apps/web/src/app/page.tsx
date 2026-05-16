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
  platformFeatures,
  productStats,
  technicalHighlights,
  workflowSteps,
} from "@/data/api-meter";

export default function Home() {
  return (
    <MarketingPageShell>
      <main>
        <section className="border-b border-border bg-[linear-gradient(180deg,#f7fafc_0%,#eef7f7_100%)]">
          <div className="mx-auto grid w-full max-w-6xl gap-12 px-6 py-16 sm:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-700">
                API usage metering
              </p>
              <h1 className="mt-5 max-w-4xl text-5xl font-semibold tracking-normal text-balance sm:text-7xl">
                Make every API call measurable, billable, and safe.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
                API Meter is a polished SaaS/API portal concept for teams that
                need API keys, usage tracking, rate-limit visibility, and
                billing-ready records without turning the product into a heavy
                dashboard.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild size="lg">
                  <Link href="/developers">
                    Explore the API <ArrowRight className="size-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="secondary">
                  <Link href="/dashboard">Open demo dashboard</Link>
                </Button>
              </div>
              <div className="mt-10 grid gap-3 text-sm text-muted-foreground sm:grid-cols-3">
                {["No credit card demo", "OpenAPI-ready", "Prisma-backed model"].map(
                  (item) => (
                    <div key={item} className="flex items-center gap-2">
                      <CheckCircle2 className="size-4 text-teal-700" />
                      {item}
                    </div>
                  ),
                )}
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
            eyebrow="Platform"
            title="Everything an API business needs before usage becomes messy."
            description="The product story is intentionally focused: capture usage, understand customers, enforce limits, and prepare billing exports."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {platformFeatures.map((feature) => (
              <article key={feature.title} className="border border-border bg-card p-6 shadow-sm">
                <feature.icon className="size-6 text-teal-700" />
                <h3 className="mt-5 text-xl font-semibold">{feature.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {feature.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="border-y border-border bg-white">
          <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <SectionHeading
                eyebrow="Dashboard"
                title="A calmer view of key activity, usage pressure, and billing signals."
                description="The dashboard keeps the details visible without burying the operator in unnecessary widgets."
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
                      {key.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <UsageChart />
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-16">
          <SectionHeading
            eyebrow="Workflow"
            title="From first API key to billing export, the experience stays direct."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-4">
            {workflowSteps.map((step) => (
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
                  Technical proof
                </p>
                <h2 className="mt-4 text-3xl font-semibold tracking-normal text-balance sm:text-4xl">
                  Built to show the API portal side of the starter.
                </h2>
                <p className="mt-4 text-base leading-7 text-slate-300">
                  API Meter keeps the portfolio story practical: it uses the
                  starter foundations for API routes, auth-ready dashboards,
                  billing structure, tests, and documentation.
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
