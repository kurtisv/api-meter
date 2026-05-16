import type { Metadata } from "next";

import { SectionHeading } from "@/components/api-meter/section-heading";
import { MarketingPageShell } from "@/components/marketing/page-shell";
import { getCurrentLocale } from "@/lib/locale";

export const metadata: Metadata = {
  title: "Case Study",
  description:
    "Portfolio case study for API Meter, a SaaS/API metering project built from kv-web-starter.",
};

const sections = [
  {
    title: "Project overview",
    body: "API Meter is the fourth portfolio project in the kv-web-starter series. It demonstrates the starter's SaaS/API portal path after two dashboard products and one premium marketing site.",
  },
  {
    title: "Design goals",
    body: "The interface needed to feel technical, calm, and credible without becoming another dark dashboard. The palette uses light surfaces, deep slate, and restrained teal accents for trust and clarity.",
  },
  {
    title: "Technical stack",
    body: "Next.js App Router, TypeScript, Tailwind CSS v4, local UI primitives, Prisma-ready schema, Auth.js-ready dashboard structure, API key modules, usage modules, and Vitest foundations.",
  },
  {
    title: "What it demonstrates",
    body: "Public product storytelling, developer documentation, pricing structure, API route documentation, dashboard composition, usage visualization, accessibility, and deployment readiness.",
  },
];

const frSections = [
  {
    title: "Vue d'ensemble",
    body: "API Meter est le quatrieme projet portfolio de la serie kv-web-starter. Il demontre le chemin SaaS/API du starter apres deux produits dashboard et un site marketing premium.",
  },
  {
    title: "Objectifs design",
    body: "L'interface devait etre technique, calme et credible sans devenir un autre dashboard sombre. La palette utilise des surfaces claires, du slate profond et des accents teal controles.",
  },
  {
    title: "Stack technique",
    body: "Next.js App Router, TypeScript, Tailwind CSS v4, primitives UI locales, schema Prisma pret, structure dashboard prete pour Auth.js, modules API key, modules usage et fondations Vitest.",
  },
  {
    title: "Ce que ca demontre",
    body: "Storytelling produit public, documentation developpeur, structure de prix, documentation de routes API, composition dashboard, visualisation d'usage, accessibilite et preparation au deploiement.",
  },
];

const copy = {
  en: {
    eyebrow: "Portfolio case study",
    title: "Showing the API/SaaS side of the starter.",
    description:
      "This page explains the project for recruiters and reviewers who want to understand the product decisions, technical scope, and design choices.",
    sections,
  },
  fr: {
    eyebrow: "Etude portfolio",
    title: "Montrer le cote API/SaaS du starter.",
    description:
      "Cette page explique le projet pour les recruteurs et reviewers qui veulent comprendre les decisions produit, la portee technique et les choix design.",
    sections: frSections,
  },
} as const;

export default async function CaseStudyPage() {
  const locale = await getCurrentLocale();
  const t = copy[locale];

  return (
    <MarketingPageShell>
      <main>
        <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
          <SectionHeading
            eyebrow={t.eyebrow}
            title={t.title}
            description={t.description}
          />
          <div className="mt-12 grid gap-4">
            {t.sections.map((section) => (
              <article
                key={section.title}
                className="grid gap-4 border border-border bg-card p-6 shadow-sm md:grid-cols-[240px_1fr]"
              >
                <h2 className="text-lg font-semibold">{section.title}</h2>
                <p className="leading-7 text-muted-foreground">{section.body}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
    </MarketingPageShell>
  );
}
