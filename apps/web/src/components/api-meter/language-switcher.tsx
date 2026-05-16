"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import type { Locale } from "@/i18n/config";
import { localeCookieName } from "@/lib/locale-cookie";
import { cn } from "@/lib/utils";

export function LanguageSwitcher({ current }: { current: Locale }) {
  const router = useRouter();
  const pathname = usePathname();
  const [nextLocale, setNextLocale] = useState<Locale | null>(null);

  useEffect(() => {
    if (!nextLocale) return;
    document.cookie = `${localeCookieName}=${nextLocale}; path=/; max-age=31536000; samesite=lax`;
    router.replace(pathname);
    router.refresh();
  }, [nextLocale, pathname, router]);

  return (
    <div className="flex border border-border bg-card p-0.5 text-xs font-semibold" aria-label="Language">
      {(["en", "fr"] as const).map((locale) => (
        <button
          key={locale}
          type="button"
          onClick={() => setNextLocale(locale)}
          className={cn(
            "px-2.5 py-1 uppercase transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700",
            current === locale
              ? "bg-primary text-primary-foreground"
              : "text-muted-foreground hover:text-foreground",
          )}
          aria-pressed={current === locale}
        >
          {locale}
        </button>
      ))}
    </div>
  );
}
