import Link from "next/link";
import { getCurrentLocale } from "@/lib/locale";

const copy = {
  en: {
    description:
      "A portfolio SaaS/API portal for usage metering, API keys, rate limits, and billing-ready developer workflows.",
    links: ["Developers", "Docs", "Pricing", "Case Study"],
    demo: "Demo dashboard",
    health: "API health",
    privacy: "Privacy",
  },
  fr: {
    description:
      "Un portail SaaS/API de portfolio pour mesurer l'usage, gerer les cles API, les limites et les flux prets pour la facturation.",
    links: ["Developpeurs", "Docs", "Prix", "Etude"],
    demo: "Dashboard demo",
    health: "Sante API",
    privacy: "Confidentialite",
  },
} as const;

export async function Footer() {
  const locale = await getCurrentLocale();
  const t = copy[locale];

  return (
    <footer className="border-t border-border bg-slate-950 text-slate-200">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-12 text-sm sm:grid-cols-[1.4fr_0.8fr_0.8fr]">
        <div>
          <p className="font-semibold text-white">API Meter</p>
          <p className="mt-3 max-w-md leading-6 text-slate-400">
            {t.description}
          </p>
        </div>
        <div className="grid gap-2 text-slate-400">
          <Link href="/developers">{t.links[0]}</Link>
          <Link href="/docs">{t.links[1]}</Link>
          <Link href="/pricing">{t.links[2]}</Link>
          <Link href="/case-study">{t.links[3]}</Link>
        </div>
        <div className="grid gap-2 text-slate-400">
          <Link href="/dashboard">{t.demo}</Link>
          <Link href="/api/health">{t.health}</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/privacy">{t.privacy}</Link>
        </div>
      </div>
    </footer>
  );
}
