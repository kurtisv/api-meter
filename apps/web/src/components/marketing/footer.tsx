import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border bg-slate-950 text-slate-200">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-12 text-sm sm:grid-cols-[1.4fr_0.8fr_0.8fr]">
        <div>
          <p className="font-semibold text-white">API Meter</p>
          <p className="mt-3 max-w-md leading-6 text-slate-400">
            A portfolio SaaS/API portal for usage metering, API keys, rate limits,
            and billing-ready developer workflows.
          </p>
        </div>
        <div className="grid gap-2 text-slate-400">
          <Link href="/developers">Developers</Link>
          <Link href="/docs">Docs</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/case-study">Case Study</Link>
        </div>
        <div className="grid gap-2 text-slate-400">
          <Link href="/dashboard">Demo dashboard</Link>
          <Link href="/api/health">API health</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/privacy">Privacy</Link>
        </div>
      </div>
    </footer>
  );
}
