import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { getCurrentLocale } from "@/lib/locale";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "API Meter - Usage metering for SaaS APIs",
    template: "%s | API Meter",
  },
  description:
    "API Meter is a portfolio SaaS/API portal for tracking API usage, keys, limits, and billing-ready events.",
  openGraph: {
    title: "API Meter",
    description:
      "A polished API usage metering and developer portal built with Next.js, TypeScript, Prisma-ready foundations, and Tailwind CSS.",
    type: "website",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getCurrentLocale();

  return (
    <html
      lang={locale}
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
