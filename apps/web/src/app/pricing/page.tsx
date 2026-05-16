import type { Metadata } from "next";

import { PricingCard } from "@/components/api-meter/pricing-card";
import { SectionHeading } from "@/components/api-meter/section-heading";
import { MarketingPageShell } from "@/components/marketing/page-shell";
import { faqs, pricingPlans } from "@/data/api-meter";
import { getCurrentLocale } from "@/lib/locale";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "API Meter pricing concept for API usage metering, developer portal workflows, and billing-ready events.",
};

const copy = {
  en: {
    eyebrow: "Pricing",
    title: "Plans shaped around usage volume, not dashboard noise.",
    description:
      "This public portfolio build presents pricing as a product design exercise. Checkout foundations exist in the starter, but the visible flow stays demo-safe.",
    faqEyebrow: "FAQ",
    faqTitle: "Clear answers for a recruiter or product reviewer.",
  },
  fr: {
    eyebrow: "Prix",
    title: "Des plans bases sur le volume d'usage, pas sur le bruit du dashboard.",
    description:
      "Cette version portfolio presente les prix comme un exercice de design produit. Les bases de checkout existent dans le starter, mais le parcours visible reste securise pour une demo.",
    faqEyebrow: "FAQ",
    faqTitle: "Des reponses claires pour un recruteur ou un reviewer produit.",
  },
} as const;

export default async function PricingPage() {
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
          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {pricingPlans.map((plan) => (
              <PricingCard key={plan.name} plan={plan} locale={locale} />
            ))}
          </div>
        </section>

        <section className="border-t border-border bg-white">
          <div className="mx-auto max-w-6xl px-6 py-16">
            <SectionHeading
              eyebrow={t.faqEyebrow}
              title={t.faqTitle}
            />
            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {faqs.map((faq) => (
                <article key={faq.question} className="border border-border bg-background p-5">
                  <h2 className="font-semibold">{faq.question}</h2>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    {faq.answer}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </MarketingPageShell>
  );
}
