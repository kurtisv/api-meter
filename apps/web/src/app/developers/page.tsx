import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { CodePanel } from "@/components/api-meter/code-panel";
import { SectionHeading } from "@/components/api-meter/section-heading";
import { MarketingPageShell } from "@/components/marketing/page-shell";
import { Button } from "@/components/ui/button";
import { endpoints, technicalHighlights } from "@/data/api-meter";

export const metadata: Metadata = {
  title: "Developers",
  description:
    "Explore API Meter developer workflows for API keys, usage events, scopes, rate limits, and OpenAPI documentation.",
};

export default function DevelopersPage() {
  return (
    <MarketingPageShell>
      <main>
        <section className="mx-auto grid max-w-6xl gap-12 px-6 py-16 sm:py-20 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-700">
              Developer portal
            </p>
            <h1 className="mt-5 text-4xl font-semibold tracking-normal text-balance sm:text-6xl">
              A clean API experience for teams that sell usage.
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              The portal documents credential patterns, metered events,
              endpoint structure, and rate-limit expectations in a way a real
              integration team could understand quickly.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild>
                <Link href="/docs">
                  Read docs <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button asChild variant="secondary">
                <Link href="/api/v1/demo">Try demo endpoint</Link>
              </Button>
            </div>
          </div>
          <CodePanel />
        </section>

        <section className="border-y border-border bg-white">
          <div className="mx-auto max-w-6xl px-6 py-16">
            <SectionHeading
              eyebrow="Capabilities"
              title="Focused primitives for API products."
              description="Each capability maps to a concrete product need: access, control, observation, and billing readiness."
            />
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {technicalHighlights.map((item) => (
                <article key={item.title} className="border border-border bg-background p-5">
                  <item.icon className="size-5 text-teal-700" />
                  <h2 className="mt-4 font-semibold">{item.title}</h2>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-16">
          <SectionHeading
            eyebrow="API reference"
            title="Endpoint examples that explain the product quickly."
          />
          <div className="mt-10 grid gap-4">
            {endpoints.map((endpoint) => (
              <article
                key={endpoint.path}
                className="grid gap-3 border border-border bg-card p-5 shadow-sm md:grid-cols-[160px_1fr]"
              >
                <div className="font-mono text-sm">
                  <span className="mr-3 text-teal-700">{endpoint.method}</span>
                  <span>{endpoint.path}</span>
                </div>
                <p className="text-sm leading-6 text-muted-foreground">
                  {endpoint.description}
                </p>
              </article>
            ))}
          </div>
        </section>
      </main>
    </MarketingPageShell>
  );
}
