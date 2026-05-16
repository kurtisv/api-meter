# API Meter Design System

## Brand direction

API Meter is a calm technical SaaS product for API usage metering. The brand
should feel precise, trustworthy, and operational without looking like a dark
developer console.

## Visual principles

- Clear hierarchy before decoration.
- Light product surfaces with deep slate contrast.
- Teal accents for key actions, status, and product signals.
- Compact dashboards, generous marketing pages.
- No generic AI gradients or decorative blur blobs.

## Colors

- Background: `#F7FAFC`
- Foreground: `#14213D`
- Primary: `#0F766E`
- Muted surface: `#EAF1F4`
- Border: `#D8E3E7`
- Dark section: `#020617`
- Success/status tint: emerald and teal tints only where meaningful.

## Typography

- H1: large, direct, short lines, `font-semibold`.
- H2: section-level, 3xl to 4xl, clear supporting copy.
- H3: card-level, concise labels.
- Body: 16-18px equivalent with comfortable line height.
- Labels: small uppercase with restrained tracking.
- Code: Geist Mono, high contrast on slate.

## Spacing

- Section padding mobile: 64px vertical.
- Section padding desktop: 80-96px vertical for hero, 64px for standard bands.
- Card padding: 20-24px.
- Grid gaps: 16px for cards, 40-48px for major layouts.
- Max width: 6xl marketing container.

## Components

- Navbar: sticky, restrained, product-first brand mark.
- Hero: strong headline plus a real code panel, not a decorative card.
- MetricCard: stable dashboard/stat card with optional status change.
- UsageChart: CSS-only chart for demo data.
- PricingCard: simple plan comparison, no live checkout in portfolio mode.
- Footer: dark product close with useful routes.

## Responsive rules

- Mobile-first layout.
- Collapse navigation links on small screens while keeping the demo CTA.
- Convert two-column product sections to single column below `lg`.
- Keep code panels horizontally scrollable.
- Avoid fixed heights for text-heavy cards.

## Accessibility rules

- Maintain visible focus states through native controls and buttons.
- Use semantic headings in order.
- Keep code examples selectable and readable.
- Avoid color-only status communication where possible.
- Labels are required for form inputs.

## Anti-patterns to avoid

- Purple AI gradients.
- Nested cards.
- Low contrast gray text.
- Too many badges.
- Generic template sections.
- Excessive shadows.
- Decorative UI without purpose.
