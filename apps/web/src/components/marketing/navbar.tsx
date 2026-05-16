import Link from "next/link";

import { LanguageSwitcher } from "@/components/api-meter/language-switcher";
import { Button } from "@/components/ui/button";
import { getCurrentLocale } from "@/lib/locale";

const copy = {
  en: {
    navItems: [
      { href: "/developers", label: "Developers" },
      { href: "/docs", label: "Docs" },
      { href: "/pricing", label: "Pricing" },
      { href: "/case-study", label: "Case Study" },
      { href: "/contact", label: "Contact" },
    ],
    demo: "Open demo",
  },
  fr: {
    navItems: [
      { href: "/developers", label: "Developpeurs" },
      { href: "/docs", label: "Docs" },
      { href: "/pricing", label: "Prix" },
      { href: "/case-study", label: "Etude" },
      { href: "/contact", label: "Contact" },
    ],
    demo: "Voir la demo",
  },
} as const;

export async function Navbar() {
  const locale = await getCurrentLocale();
  const t = copy[locale];

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2 text-base font-semibold">
          <span className="flex size-8 items-center justify-center bg-slate-950 text-sm font-bold text-teal-300">
            AM
          </span>
          API Meter
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {t.navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <LanguageSwitcher current={locale} />
          <Button asChild size="sm">
            <Link href="/dashboard">{t.demo}</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
