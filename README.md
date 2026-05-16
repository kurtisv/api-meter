# API Meter

API Meter is the fourth portfolio project built from `kv-web-starter`.
It demonstrates the SaaS/API portal side of the boilerplate: usage metering,
API keys, developer docs, pricing, a demo dashboard, and production-ready
Next.js foundations.

## Routes

- `/` - product landing page
- `/developers` - developer portal overview
- `/docs` - API documentation
- `/pricing` - pricing concept
- `/case-study` - portfolio case study
- `/contact` - validated contact form
- `/dashboard` - demo API operations dashboard
- `/api/health` - health check
- `/api/openapi` - OpenAPI JSON
- `/api/v1/demo` - safe demo API endpoint

## Stack

- Next.js App Router
- React and TypeScript
- Tailwind CSS v4
- Prisma-ready data model
- Auth.js-ready dashboard shell
- Stripe-ready billing foundations
- Resend-ready contact action
- API key and usage modules
- Vitest test foundation

## Local setup

```bash
pnpm install
cp .env.example .env
pnpm db:generate
pnpm dev
```

## Verification

```bash
pnpm lint
pnpm typecheck
pnpm test
pnpm build
```
