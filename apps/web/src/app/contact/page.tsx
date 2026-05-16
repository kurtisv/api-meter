import type { Metadata } from "next";

import { sendContactMessage } from "@/app/actions/contact";
import { SectionHeading } from "@/components/api-meter/section-heading";
import { MarketingPageShell } from "@/components/marketing/page-shell";
import { Button } from "@/components/ui/button";
import { Form, FormField } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact page for API Meter, the portfolio SaaS/API metering project.",
};

export default function ContactPage() {
  return (
    <MarketingPageShell>
      <main>
        <section className="mx-auto grid max-w-6xl gap-10 px-6 py-16 sm:py-20 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <SectionHeading
              eyebrow="Contact"
              title="Discuss a SaaS/API portfolio build."
              description="This form is wired through the starter's email-ready action with validation. In a real product, the same pattern can route leads to CRM, Slack, or support tooling."
            />
            <div className="mt-8 grid gap-4 text-sm text-muted-foreground">
              <p className="border-l border-border pl-4">
                Typical response target: one business day.
              </p>
              <p className="border-l border-border pl-4">
                Best fit: API portals, product dashboards, developer docs, and
                SaaS marketing sites.
              </p>
            </div>
          </div>
          <div className="border border-border bg-card p-6 shadow-sm">
            <h2 className="text-xl font-semibold">Project inquiry</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Keep it short. The goal is to capture useful context, not create
              friction.
            </p>
            <Form action={sendContactMessage} className="mt-6">
              <FormField>
                <Label htmlFor="name">Name</Label>
                <Input id="name" name="name" required />
              </FormField>
              <FormField>
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" required type="email" />
              </FormField>
              <FormField>
                <Label htmlFor="company">Company</Label>
                <Input id="company" name="company" />
              </FormField>
              <FormField>
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  placeholder="Tell me about the API, dashboard, or product workflow."
                />
              </FormField>
              <Button type="submit">Send inquiry</Button>
            </Form>
          </div>
        </section>
      </main>
    </MarketingPageShell>
  );
}
