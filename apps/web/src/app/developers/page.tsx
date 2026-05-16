import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { CodePanel } from "@/components/api-meter/code-panel";
import { SectionHeading } from "@/components/api-meter/section-heading";
import { MarketingPageShell } from "@/components/marketing/page-shell";
import { Button } from "@/components/ui/button";
import { endpoints, technicalHighlights } from "@/data/api-meter";
import { getCurrentLocale } from "@/lib/locale";

export const metadata: Metadata = {
  title: "Developers",
  description:
    "Explore API Meter developer workflows for API keys, usage events, scopes, rate limits, and OpenAPI documentation.",
};

const copy = {
  en: {
    eyebrow: "Developer portal",
    title: "A clean API experience for teams that sell usage.",
    intro:
      "The portal documents credential patterns, metered events, endpoint structure, and rate-limit expectations in a way a real integration team could understand quickly.",
    docs: "Read docs",
    demo: "Try demo endpoint",
    capEyebrow: "Capabilities",
    capTitle: "Focused primitives for API products.",
    capDescription:
      "Each capability maps to a concrete product need: access, control, observation, and billing readiness.",
    refEyebrow: "API reference",
    refTitle: "Endpoint examples that explain the product quickly.",
  },
  fr: {
    eyebrow: "Portail developpeur",
    title: "Une experience API claire pour les equipes qui vendent de l'usage.",
    intro:
      "Le portail documente les cles, les evenements mesures, les endpoints et les limites d'une facon qu'une vraie equipe d'integration peut comprendre rapidement.",
    docs: "Lire les docs",
    demo: "Tester l'endpoint demo",
    capEyebrow: "Capacites",
    capTitle: "Des primitives ciblees pour les produits API.",
    capDescription:
      "Chaque capacite repond a un besoin concret: acces, controle, observation et preparation a la facturation.",
    refEyebrow: "Reference API",
    refTitle: "Des exemples d'endpoints qui expliquent vite le produit.",
  },
} as const;

export default async function DevelopersPage() {
  const locale = await getCurrentLocale();
  const t = copy[locale];

  return (
    <MarketingPageShell>
      <main>
        <section className="mx-auto grid max-w-6xl gap-12 px-6 py-16 sm:py-20 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-700">
              {t.eyebrow}
            </p>
            <h1 className="mt-5 text-4xl font-semibold tracking-normal text-balance sm:text-6xl">
              {t.title}
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              {t.intro}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild>
                <Link href="/docs">
                  {t.docs} <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button asChild variant="secondary">
                <Link href="/api/v1/demo">{t.demo}</Link>
              </Button>
            </div>
          </div>
          <CodePanel />
        </section>

        <section className="border-y border-border bg-white">
          <div className="mx-auto max-w-6xl px-6 py-16">
            <SectionHeading
              eyebrow={t.capEyebrow}
              title={t.capTitle}
              description={t.capDescription}
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
            eyebrow={t.refEyebrow}
            title={t.refTitle}
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
