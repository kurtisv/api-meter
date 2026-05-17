import {
  Activity,
  BarChart3,
  Braces,
  CreditCard,
  Gauge,
  KeyRound,
  LockKeyhole,
  ShieldCheck,
  Webhook,
} from "lucide-react";

export const productStats = [
  { label: "ecosystem events", value: "42.8k" },
  { label: "median ingest latency", value: "41ms" },
  { label: "modules measured", value: "8" },
  { label: "API uptime target", value: "99.95%" },
];

export const platformFeatures = [
  {
    title: "Meter every request",
    description:
      "Capture API key, route, latency, status code, tenant, and billable unit without forcing teams into a heavy analytics stack.",
    icon: Activity,
  },
  {
    title: "Ship plans with confidence",
    description:
      "Model plan limits, overage rules, and billing-ready usage records before the first paid customer asks for an invoice.",
    icon: CreditCard,
  },
  {
    title: "Protect your API surface",
    description:
      "Use scopes, hashed credentials, rate limits, and structured logs to keep developer access controlled and auditable.",
    icon: ShieldCheck,
  },
];

export const workflowSteps = [
  {
    number: "01",
    title: "Connect",
    description:
      "Drop the middleware into your API routes and start attaching customer, key, and endpoint context to each call.",
  },
  {
    number: "02",
    title: "Observe",
    description:
      "Read clean usage charts, failed request patterns, key activity, and limit pressure before it becomes support work.",
  },
  {
    number: "03",
    title: "Control",
    description:
      "Tune scopes, rotate keys, raise limits, and keep noisy integrations from affecting the rest of the platform.",
  },
  {
    number: "04",
    title: "Monetize",
    description:
      "Export billing-ready records and align product packaging with the usage customers actually create.",
  },
];

export const pricingPlans = [
  {
    name: "Launch",
    price: "$29",
    description: "For a new API product that needs keys, usage logs, and simple limits.",
    features: ["50k metered events", "3 team seats", "API key dashboard", "Email support"],
  },
  {
    name: "Scale",
    price: "$99",
    description: "For SaaS teams adding customer-facing plans and overage visibility.",
    features: ["1M metered events", "Usage exports", "Scoped keys", "Priority support"],
    featured: true,
  },
  {
    name: "Business",
    price: "$249",
    description: "For higher-volume APIs that need stronger control and audit trails.",
    features: ["10M metered events", "Custom retention", "Advanced rate limits", "SLA review"],
  },
];

export const endpoints = [
  {
    method: "GET",
    path: "/api/v1/usage",
    description: "Return daily metered usage grouped by key, route, customer, or plan.",
  },
  {
    method: "POST",
    path: "/api/v1/events",
    description: "Record custom billable events from workers, queues, or edge functions.",
  },
  {
    method: "GET",
    path: "/api/v1/keys",
    description: "List active credentials, scopes, last use, and current limit pressure.",
  },
  {
    method: "POST",
    path: "/api/v1/webhooks",
    description: "Register delivery targets for limit warnings, key rotation, and billing syncs.",
  },
];

export const dashboardMetrics = [
  { label: "Requests this month", value: "42.8k", change: "+14.8%" },
  { label: "Billable events", value: "8.4k", change: "+9.2%" },
  { label: "Blocked by rate limit", value: "184", change: "-6.1%" },
  { label: "Active API keys", value: "16", change: "+3" },
];

export const usageBars = [
  48, 64, 52, 74, 68, 82, 76, 88, 71, 93, 84, 96,
];

export const apiKeys = [
  {
    name: "Northline ClientHub production",
    prefix: "ak_live_NL8",
    scopes: ["usage:write", "usage:read"],
    requests: "18.2k",
    status: "Healthy",
  },
  {
    name: "Atelier EventPass scanner",
    prefix: "ak_evt_A29",
    scopes: ["usage:write"],
    requests: "6.7k",
    status: "Near limit",
  },
  {
    name: "CommerceKit order worker",
    prefix: "ak_srv_CK7",
    scopes: ["usage:read", "billing:export"],
    requests: "4.1k",
    status: "Healthy",
  },
];

export const ecosystemLogs = [
  { time: "09:04:12", module: "Luma Studio", route: "POST /contact", client: "Lead Luma entrant", status: "201", latency: "38ms" },
  { time: "09:07:44", module: "QuotePilot", route: "POST /api/quotes", client: "Northline Studio", status: "200", latency: "51ms" },
  { time: "10:12:09", module: "ReserveFlow", route: "POST /booking", client: "Elliot Moore", status: "201", latency: "46ms" },
  { time: "11:35:28", module: "CommerceKit", route: "POST /checkout", client: "Atelier Boutique", status: "200", latency: "64ms" },
  { time: "14:18:03", module: "SupportDesk Lite", route: "POST /support", client: "Nadia Fortin", status: "201", latency: "42ms" },
];

export const moduleUsage = [
  { module: "Luma", value: 34 },
  { module: "QuotePilot", value: 52 },
  { module: "ReserveFlow", value: 45 },
  { module: "ClientHub", value: 78 },
  { module: "CommerceKit", value: 61 },
  { module: "EventPass", value: 69 },
  { module: "SupportDesk", value: 48 },
  { module: "API Meter", value: 83 },
];

export const technicalHighlights = [
  { title: "Hashed API keys", icon: KeyRound },
  { title: "Scoped access", icon: LockKeyhole },
  { title: "Rate-limit ready", icon: Gauge },
  { title: "Usage analytics", icon: BarChart3 },
  { title: "OpenAPI docs", icon: Braces },
  { title: "Webhook structure", icon: Webhook },
];

export const faqs = [
  {
    question: "Is API Meter connected to a real billing provider?",
    answer:
      "The starter includes Stripe-ready foundations. This portfolio build keeps payment activation controlled while showing the product flow, data model, API docs, and dashboard structure.",
  },
  {
    question: "Can the demo endpoint be called publicly?",
    answer:
      "Yes. The demo endpoint returns a safe sample response and documents the expected API key pattern without exposing private credentials.",
  },
  {
    question: "What does this project demonstrate?",
    answer:
      "It shows a SaaS/API portal built from the boilerplate: marketing pages, pricing, docs, API routes, dashboard UI, usage visualization, and production deployment.",
  },
];
