import { Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import type { Locale } from "@/i18n/config";

export function PricingCard({
  plan,
  locale = "en",
}: {
  plan: {
    name: string;
    price: string;
    description: string;
    features: string[];
    featured?: boolean;
  };
  locale?: Locale;
}) {
  const buttonLabel = locale === "fr" ? "Voir le plan demo" : "View demo plan";
  const recommendedLabel = locale === "fr" ? "Recommande" : "Recommended";

  return (
    <article
      className={`border bg-card p-6 shadow-sm ${
        plan.featured ? "border-teal-500 ring-2 ring-teal-100" : "border-border"
      }`}
    >
      <div className="flex items-center justify-between gap-4">
        <h2 className="text-xl font-semibold">{plan.name}</h2>
        {plan.featured ? (
          <span className="bg-teal-600 px-2.5 py-1 text-xs font-semibold text-white">
            {recommendedLabel}
          </span>
        ) : null}
      </div>
      <p className="mt-5 text-4xl font-semibold">{plan.price}</p>
      <p className="mt-3 min-h-20 text-sm leading-6 text-muted-foreground">
        {plan.description}
      </p>
      <ul className="mt-6 grid gap-3 text-sm">
        {plan.features.map((feature) => (
          <li key={feature} className="flex gap-3">
            <Check className="mt-0.5 size-4 text-teal-700" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <Button className="mt-8 w-full" variant={plan.featured ? "default" : "secondary"}>
        {buttonLabel}
      </Button>
    </article>
  );
}
