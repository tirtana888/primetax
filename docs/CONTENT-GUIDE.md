# PrimeTax Website — Content & Maintenance Guide

Next.js 15 site, exported as static HTML (`out/`) and hosted on Firebase Hosting.

```bash
npm install
npm run dev        # local preview at http://localhost:3000
npm run build      # static export to out/
firebase deploy    # publish out/ (after firebase login)
```

## Languages (English / Bahasa Indonesia)

- English lives at the root (`/services`), Indonesian under `/id` (`/id/services`). Slugs are identical, so the flag switcher in the header simply adds or removes `/id`.
- Every content file has an Indonesian twin: `content/services.id.ts`, `content/landing-pages.id.ts`, `content/insights.id.ts`, and `industriesId` inside `content/industries.ts`. **When you add or change an item in one language, update the other with the same `slug`.**
- Page copy lives in the `copy = { en, id }` object at the top of each file in `views/`. Shared UI words (menu, buttons, form, footer) are in `lib/i18n.ts`.
- Internal links are written without `/id`. The `Link` component in `components/ui/Link.tsx` adds the prefix automatically on Indonesian pages.
- Each page outputs `hreflang` alternates (en, id, x-default), and the sitemap lists both versions. `npm run build` also runs `scripts/set-html-lang.mjs`, which sets `<html lang="id">` on the Indonesian pages.
- Route files in `app/` and `app/id/` are thin wrappers around `views/`. To add a new page, create the view and add one route file in each folder.

## Where content lives

| What | File |
|---|---|
| Company facts, navigation, contact details, logo, form endpoint | `config/site.ts` |
| Four core service pages (`/services/[slug]`) | `content/services.ts` |
| SEO landing pages (`/solutions/[slug]`) | `content/landing-pages.ts` |
| Industries page | `content/industries.ts` |
| Insights / articles (`/insights/[slug]`) | `content/insights.ts` |
| Team profiles | `content/team.ts` |
| Events & briefings (`/events`) | `content/events.ts` |
| Credibility figures, company profile PDF | `config/site.ts` → `credibility`, `companyProfile` |
| Homepage copy | `app/page.tsx` |
| Privacy, Terms, Disclaimer | `app/privacy-policy`, `app/terms`, `app/disclaimer` |

After any edit: `npm run build`, check the result, then deploy.

## Logo

The logo source is `assets/brand/primetax-logo-source.png`. The web files in `public/brand/` were generated from it:

| File | Use |
|---|---|
| `logo.png` | Header, light backgrounds |
| `logo-inverse.png` | Footer and other charcoal backgrounds (dark parts turned white, gold kept) |
| `logo-mono.png` / `logo-mono-white.png` | Single-colour uses |
| `favicon-48.png`, `icon-192.png`, `apple-touch-icon.png`, `icon-512.png` | Browser tab, home-screen and structured-data icons |

The paths are set in `config/site.ts` → `logo`. If a vector (SVG) master becomes available, export the same variants as SVG, update the paths and `width`/`height`, and replace the icons.

## Publishing an insight

1. Copy an existing entry in `content/insights.ts` and give it a unique `slug` (lowercase, hyphens).
2. Write the body as blocks: `p`, `h2`, `h3`, `ul`, `quote`.
3. List only **official** references in `sources`. Never invent regulation numbers.
4. Keep `status: "draft"` until the article has been reviewed against current official regulations; then set `"published"`.
5. Set `reviewer` only to a real, verified reviewer's name. Update `updatedAt` whenever the article is re-reviewed.

Draft articles are not built or listed. Published ones appear automatically on `/insights`, the homepage, related service pages, and the sitemap.

### Insight types

Set `type` to one of:

- **Tax Bulletin**: a short, fast note (3–5 paragraphs) on a new regulation or DGT development. Publish within a day or two. `keyPoints` may be empty.
- **Regulatory Update**: a structured summary of a new regulation and who it affects.
- **Article**: longer analysis of a recurring issue.
- **Executive Briefing**: a decision-oriented note for CFOs and boards.

`/insights` shows a filter tab for each type that has published items. Filtered views can be shared, e.g. `/insights?type=tax-bulletin`.

## Credibility figures

In `config/site.ts` → `credibility`, add verified figures only, e.g.
`{ value: "15+", label: "Years of partner experience", asOf: "October 2026" }`.
Keep an internal source for each. The strip appears under the homepage hero and on About once at least one figure or the `background` sentence is filled in. Figures are static text with no count-up animation.

## Company profile

Put the PDF in `public/downloads/` and set `companyProfile.href` (e.g. `/downloads/primetax-company-profile.pdf`). A download button then appears on About and a link appears in the footer. Downloads are tracked as `cta_click` with `cta: company_profile_about`.

## Events & briefings

Add entries to `content/events.ts` (date `YYYY-MM-DD`, format, location, summary, optional `registrationUrl` / `recordingUrl`). Once the list has entries:

- `/events` lists upcoming and past sessions.
- The footer link appears.
- The homepage shows up to two upcoming sessions.
- The page is added to the sitemap and becomes indexable.

Upcoming/past is decided at build time, so rebuild after an event date passes. Name a partner organisation only with its written consent.

## Homepage hero video

Set in `config/site.ts` → `heroMedia`. The clip is served from Cloudinary and trimmed, muted and compressed by URL transformation (`so_13,eo_33` = seconds 13–33, `q_auto:eco`, `w_1600`/`w_720`, `ac_none`), which comes to about 0.95 MB on desktop and 0.24 MB on mobile. To use a different segment, change the `so_`/`eo_` values in all three URLs (video, mobile video, poster). The video does not play for visitors with "reduce motion" or Save-Data enabled; they see the poster instead, and a pause button is always available.

**Licence:** confirm that PrimeTax holds a licence for this footage before launch.

## Contact form

The site is static, so form submissions go to an external endpoint:

- Set `NEXT_PUBLIC_LEAD_ENDPOINT` (see `.env.example`) to a Formspree form URL, a Firebase Function, or a CRM webhook that accepts a JSON `POST`.
- If it is not set, the form opens the visitor's email app with a pre-filled message to `contact.email`.

Fields sent: name, email, company, jobTitle, areaOfInterest, preferredContact, phone (optional), message, source, page, submittedAt.

The form deliberately asks visitors **not** to send tax returns, NPWP, financial statements, or other confidential documents.

## Analytics

Set `NEXT_PUBLIC_GA4_ID`. GA4 loads only after a visitor clicks "Accept analytics" in the cookie banner. Tracked events: `cta_click`, `form_start`, `form_submit`, `form_error`.

## Pre-launch verification (Brief §12–13)

- [ ] Final logo artwork installed; favicon replaced.
- [ ] Legal name, email, phone, and office address verified in `config/site.ts` (phone/address are hidden while empty).
- [ ] LinkedIn URL added (hidden while empty).
- [ ] Credibility figures (if any) verified with an internal source and "as of" date.
- [ ] Company profile PDF uploaded and linked.
- [ ] Services flagged `confirm: true` (Expatriate Tax, APA/MAP) confirmed or left hidden.
- [ ] Every published insight reviewed against current official regulations; reviewer named.
- [ ] Team profiles added only with verified credentials, consent, and licensed photos.
- [ ] Privacy Policy and Terms reviewed by legal counsel (UU PDP No. 27/2022).
- [ ] Form endpoint connected and a test submission received.
- [ ] GA4 and Google Search Console set up; sitemap submitted (`/sitemap.xml`).
- [ ] Keyword research validated for the `/solutions/*` landing pages.
- [ ] Hero video footage licence confirmed.
- [ ] Indonesian translations reviewed by a native-speaking tax professional (terminology, tone).
- [ ] No placeholder content remaining.
