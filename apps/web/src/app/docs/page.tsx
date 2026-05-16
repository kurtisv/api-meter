import type { Metadata } from "next";

import { CodePanel } from "@/components/api-meter/code-panel";
import { SectionHeading } from "@/components/api-meter/section-heading";
import { MarketingPageShell } from "@/components/marketing/page-shell";
import { endpoints } from "@/data/api-meter";
import { getCurrentLocale } from "@/lib/locale";

export const metadata: Metadata = {
  title: "API Docs",
  description:
    "API Meter documentation for authentication, metered events, rate limits, and demo API routes.",
};

const authExample = `Authorization: Bearer ak_live_your_key
Content-Type: application/json`;

const responseExample = `{
  "ok": true,
  "requestId": "req_8fc2",
  "usage": {
    "metric": "search.requests",
    "quantity": 42,
    "billable": true
  }
}`;

const copy = {
  en: {
    eyebrow: "Documentation",
    title: "A compact API reference for usage metering.",
    description:
      "The docs page is intentionally concise: it shows authentication, event ingestion, response shape, and the OpenAPI route available in the starter.",
    authTitle: "Authentication",
    authText:
      "API Meter accepts bearer tokens and can be adapted to x-api-key headers. Keys should be stored hashed and displayed only once when generated.",
    responseTitle: "Response shape",
    endpointsEyebrow: "Endpoints",
    endpointsTitle: "Reference routes for the portfolio product.",
    footer: "OpenAPI JSON is available at",
    footerTwo: "The safe demo endpoint is available at",
  },
  fr: {
    eyebrow: "Documentation",
    title: "Une reference API compacte pour mesurer l'usage.",
    description:
      "La page docs reste volontairement concise: authentification, ingestion d'evenements, forme des reponses et route OpenAPI disponible dans le starter.",
    authTitle: "Authentification",
    authText:
      "API Meter accepte les tokens bearer et peut etre adapte aux headers x-api-key. Les cles doivent etre stockees hashees et affichees une seule fois a la creation.",
    responseTitle: "Format de reponse",
    endpointsEyebrow: "Endpoints",
    endpointsTitle: "Routes de reference pour le produit portfolio.",
    footer: "Le JSON OpenAPI est disponible a",
    footerTwo: "L'endpoint demo securise est disponible a",
  },
} as const;

export default async function DocsPage() {
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
          <div className="mt-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="grid gap-4">
              <article className="border border-border bg-card p-5 shadow-sm">
                <h2 className="text-lg font-semibold">{t.authTitle}</h2>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {t.authText}
                </p>
                <pre className="mt-5 overflow-x-auto bg-slate-950 p-4 text-sm text-slate-100">
                  <code>{authExample}</code>
                </pre>
              </article>
              <article className="border border-border bg-card p-5 shadow-sm">
                <h2 className="text-lg font-semibold">{t.responseTitle}</h2>
                <pre className="mt-5 overflow-x-auto bg-slate-950 p-4 text-sm text-slate-100">
                  <code>{responseExample}</code>
                </pre>
              </article>
            </div>
            <CodePanel />
          </div>
        </section>

        <section className="border-t border-border bg-white">
          <div className="mx-auto max-w-6xl px-6 py-16">
            <SectionHeading
              eyebrow={t.endpointsEyebrow}
              title={t.endpointsTitle}
            />
            <div className="mt-10 grid gap-4">
              {endpoints.map((endpoint) => (
                <article
                  key={endpoint.path}
                  className="grid gap-3 border border-border bg-background p-5 md:grid-cols-[160px_1fr]"
                >
                  <p className="font-mono text-sm">
                    <span className="text-teal-700">{endpoint.method}</span>{" "}
                    {endpoint.path}
                  </p>
                  <p className="text-sm leading-6 text-muted-foreground">
                    {endpoint.description}
                  </p>
                </article>
              ))}
            </div>
            <p className="mt-8 text-sm text-muted-foreground">
              {t.footer} <code>/api/openapi</code>. {t.footerTwo}{" "}
              <code>/api/v1/demo</code>.
            </p>
          </div>
        </section>
      </main>
    </MarketingPageShell>
  );
}
