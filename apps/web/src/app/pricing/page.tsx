import type { Metadata } from "next";

import { PricingCard } from "@/components/api-meter/pricing-card";
import { SectionHeading } from "@/components/api-meter/section-heading";
import { MarketingPageShell } from "@/components/marketing/page-shell";
import { faqs, pricingPlans } from "@/data/api-meter";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "API Meter pricing concept for API usage metering, developer portal workflows, and billing-ready events.",
};

export default function PricingPage() {
  return (
    <MarketingPageShell>
      <main>
        <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
          <SectionHeading
            eyebrow="Pricing"
            title="Plans shaped around usage volume, not dashboard noise."
            description="This public portfolio build presents pricing as a product design exercise. Checkout foundations exist in the starter, but the visible flow stays demo-safe."
          />
          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {pricingPlans.map((plan) => (
              <PricingCard key={plan.name} plan={plan} />
            ))}
          </div>
        </section>

        <section className="border-t border-border bg-white">
          <div className="mx-auto max-w-6xl px-6 py-16">
            <SectionHeading
              eyebrow="FAQ"
              title="Clear answers for a recruiter or product reviewer."
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
