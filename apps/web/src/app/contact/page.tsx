import type { Metadata } from "next";

import { sendContactMessage } from "@/app/actions/contact";
import { SectionHeading } from "@/components/api-meter/section-heading";
import { MarketingPageShell } from "@/components/marketing/page-shell";
import { Button } from "@/components/ui/button";
import { Form, FormField } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { getCurrentLocale } from "@/lib/locale";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact page for API Meter, the portfolio SaaS/API metering project.",
};

const copy = {
  en: {
    eyebrow: "Contact",
    title: "Discuss a SaaS/API portfolio build.",
    description:
      "This form is wired through the starter's email-ready action with validation. In a real product, the same pattern can route leads to CRM, Slack, or support tooling.",
    noteOne: "Typical response target: one business day.",
    noteTwo:
      "Best fit: API portals, product dashboards, developer docs, and SaaS marketing sites.",
    formTitle: "Project inquiry",
    formText:
      "Keep it short. The goal is to capture useful context, not create friction.",
    name: "Name",
    company: "Company",
    message: "Message",
    placeholder: "Tell me about the API, dashboard, or product workflow.",
    submit: "Send inquiry",
  },
  fr: {
    eyebrow: "Contact",
    title: "Discuter d'un projet SaaS/API de portfolio.",
    description:
      "Ce formulaire utilise l'action email-ready du starter avec validation. Dans un vrai produit, le meme pattern peut envoyer les leads vers un CRM, Slack ou un outil support.",
    noteOne: "Objectif de reponse: un jour ouvrable.",
    noteTwo:
      "Meilleur fit: portails API, dashboards produit, docs developpeur et sites marketing SaaS.",
    formTitle: "Demande de projet",
    formText:
      "Rester simple. Le but est de capturer le contexte utile sans ajouter de friction.",
    name: "Nom",
    company: "Entreprise",
    message: "Message",
    placeholder: "Parle-moi de l'API, du dashboard ou du workflow produit.",
    submit: "Envoyer",
  },
} as const;

export default async function ContactPage() {
  const locale = await getCurrentLocale();
  const t = copy[locale];

  return (
    <MarketingPageShell>
      <main>
        <section className="mx-auto grid max-w-6xl gap-10 px-6 py-16 sm:py-20 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <SectionHeading
              eyebrow={t.eyebrow}
              title={t.title}
              description={t.description}
            />
            <div className="mt-8 grid gap-4 text-sm text-muted-foreground">
              <p className="border-l border-border pl-4">
                {t.noteOne}
              </p>
              <p className="border-l border-border pl-4">
                {t.noteTwo}
              </p>
            </div>
          </div>
          <div className="border border-border bg-card p-6 shadow-sm">
            <h2 className="text-xl font-semibold">{t.formTitle}</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              {t.formText}
            </p>
            <Form action={sendContactMessage} className="mt-6">
              <FormField>
                <Label htmlFor="name">{t.name}</Label>
                <Input id="name" name="name" required />
              </FormField>
              <FormField>
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" required type="email" />
              </FormField>
              <FormField>
                <Label htmlFor="company">{t.company}</Label>
                <Input id="company" name="company" />
              </FormField>
              <FormField>
                <Label htmlFor="message">{t.message}</Label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  placeholder={t.placeholder}
                />
              </FormField>
              <Button type="submit">{t.submit}</Button>
            </Form>
          </div>
        </section>
      </main>
    </MarketingPageShell>
  );
}
