import type { MetadataRoute } from "next";

import { env } from "@/lib/env";

const routes = [
  "",
  "/developers",
  "/docs",
  "/pricing",
  "/case-study",
  "/contact",
  "/dashboard",
  "/privacy",
  "/terms",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${env.NEXT_PUBLIC_APP_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.7,
  }));
}
