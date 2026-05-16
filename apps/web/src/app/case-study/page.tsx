import type { Metadata } from "next";

import { SectionHeading } from "@/components/api-meter/section-heading";
import { MarketingPageShell } from "@/components/marketing/page-shell";

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

export default function CaseStudyPage() {
  return (
    <MarketingPageShell>
      <main>
        <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
          <SectionHeading
            eyebrow="Portfolio case study"
            title="Showing the API/SaaS side of the starter."
            description="This page explains the project for recruiters and reviewers who want to understand the product decisions, technical scope, and design choices."
          />
          <div className="mt-12 grid gap-4">
            {sections.map((section) => (
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
