import type { Metadata } from "next";

import { CodePanel } from "@/components/api-meter/code-panel";
import { SectionHeading } from "@/components/api-meter/section-heading";
import { MarketingPageShell } from "@/components/marketing/page-shell";
import { endpoints } from "@/data/api-meter";

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

export default function DocsPage() {
  return (
    <MarketingPageShell>
      <main>
        <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
          <SectionHeading
            eyebrow="Documentation"
            title="A compact API reference for usage metering."
            description="The docs page is intentionally concise: it shows authentication, event ingestion, response shape, and the OpenAPI route available in the starter."
          />
          <div className="mt-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="grid gap-4">
              <article className="border border-border bg-card p-5 shadow-sm">
                <h2 className="text-lg font-semibold">Authentication</h2>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  API Meter accepts bearer tokens and can be adapted to
                  x-api-key headers. Keys should be stored hashed and displayed
                  only once when generated.
                </p>
                <pre className="mt-5 overflow-x-auto bg-slate-950 p-4 text-sm text-slate-100">
                  <code>{authExample}</code>
                </pre>
              </article>
              <article className="border border-border bg-card p-5 shadow-sm">
                <h2 className="text-lg font-semibold">Response shape</h2>
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
              eyebrow="Endpoints"
              title="Reference routes for the portfolio product."
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
              OpenAPI JSON is available at <code>/api/openapi</code>. The safe
              demo endpoint is available at <code>/api/v1/demo</code>.
            </p>
          </div>
        </section>
      </main>
    </MarketingPageShell>
  );
}
