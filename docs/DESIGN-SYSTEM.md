# PrimeTax Design System — "Quiet Authority"

Source of truth: `styles/globals.css` (`@theme`). Token export: `tokens/tokens.json`.

## Colour

| Token | Hex | Tailwind | Use |
|---|---|---|---|
| Prime White | `#FFFFFF` | `bg-white` | Dominant canvas, cards |
| Charcoal | `#252525` | `text-charcoal`, `bg-charcoal` | Headings, body text, primary buttons, footer, final CTA |
| Graphite | `#646464` | `text-graphite` | Secondary text, metadata |
| Warm Gray | `#F4F2EE` | `bg-warm` | Alternate sections, panels |
| Champagne Gold | `#B79A62` | `bg-gold`, `border-gold` | Thin accent lines, active nav marker, focus ring. Never body text on white |
| Border Gray | `#E6E2DA` | `border-border` | Dividers, card borders |

Tailwind's default palette is disabled, so only these colours (plus `error`/`success` for form feedback) exist.

## Typography

- **Inter** for everything. **Source Serif 4** (`font-serif`) only for pull quotes and the brand-promise line.
- Scale: `text-display` (hero, 64px desktop), `text-h1`, `text-h2` (40px), `text-h3` (24px), `text-lead` (18px), `text-body` (16px), `text-small`, `text-label` (12px uppercase).
- `.eyebrow` — small uppercase label with a gold rule.

## Layout & shape

- Max width 1240px (`.container-content`), 16px mobile gutter.
- Sections: `py-16 md:py-24`, alternating white / warm.
- Radius: cards 8px (`rounded-card`), buttons 4px (`rounded-button`).
- Borders instead of shadows. Hairline grids (`gap-px bg-border`) for grouped items.
- Motion (all disabled under `prefers-reduced-motion`):
  - Page transition: 0.5s fade-and-rise on each navigation (`app/template.tsx`, `.page-enter`).
  - Section entrance: content below the fold fades and rises 18px into view on scroll. Card grids marked `data-stagger` reveal item by item, 90ms apart (`components/layout/ScrollReveal.tsx`).
  - Hover: colour and arrow transitions, about 200ms.
- Homepage hero: full-bleed muted video under a charcoal gradient overlay, white text, `inverse` and `outlineInverse` buttons.

## Components

| Component | File |
|---|---|
| Header / mobile nav | `components/layout/Header.tsx` |
| Footer | `components/layout/Footer.tsx` |
| Breadcrumbs (+ schema) | `components/layout/Breadcrumbs.tsx` |
| Cookie consent + GA4 loader | `components/layout/ConsentBanner.tsx` |
| Buttons (`primary`, `secondary`, `inverse`, `text`) | `components/ui/Button.tsx` |
| Section + SectionHeader | `components/ui/Section.tsx` |
| FAQ accordion | `components/ui/Accordion.tsx`, `components/blocks/FaqSection.tsx` |
| Page hero | `components/blocks/PageHero.tsx` |
| Service / Industry / Insight cards | `components/blocks/Cards.tsx` |
| Process steps | `components/blocks/ProcessSteps.tsx` |
| Risk matrix (illustrative) | `components/blocks/RiskMatrix.tsx` |
| CTA panel | `components/blocks/CtaPanel.tsx` |
| Consultation form | `components/blocks/ConsultationForm.tsx` |
| Legal page layout | `components/blocks/LegalPage.tsx` |

Icons: one outline family (lucide) at stroke 1.25–1.5.
