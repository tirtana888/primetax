# PrimeTax Website — Content & Maintenance Guide

Next.js 15 site, exported as static HTML (`out/`) and hosted on Firebase Hosting.

```bash
npm install
npm run dev        # local preview at http://localhost:3000
npm run build      # static export to out/
firebase deploy    # publish out/ (after firebase login)
```

## Where content lives

| What | File |
|---|---|
| Company facts, navigation, contact details, logo, form endpoint | `config/site.ts` |
| Four core service pages (`/services/[slug]`) | `content/services.ts` |
| SEO landing pages (`/solutions/[slug]`) | `content/landing-pages.ts` |
| Industries page | `content/industries.ts` |
| Insights / articles (`/insights/[slug]`) | `content/insights.ts` |
| Team profiles | `content/team.ts` |
| Homepage copy | `app/page.tsx` |
| Privacy, Terms, Disclaimer | `app/privacy-policy`, `app/terms`, `app/disclaimer` |

After any edit: `npm run build`, check the result, then deploy.

## Replacing the logo

The current logo is a **temporary typographic wordmark** (`components/brand/Logo.tsx`).
When final artwork arrives:

1. Put the files in `public/brand/`, e.g. `logo.svg` (for white backgrounds) and `logo-inverse.svg` (white, for the charcoal footer).
2. In `config/site.ts` set `logo.src: "/brand/logo.svg"`, `logo.srcInverse: "/brand/logo-inverse.svg"`, and `width`/`height` to the artwork's proportions.
3. Replace `public/brand/icon.svg` with the final monogram for the favicon.

## Publishing an insight

1. Copy an existing entry in `content/insights.ts` and give it a unique `slug` (lowercase, hyphens).
2. Write the body as blocks: `p`, `h2`, `h3`, `ul`, `quote`.
3. List only **official** references in `sources`. Never invent regulation numbers.
4. Keep `status: "draft"` until the article has been reviewed against current official regulations; then set `"published"`.
5. Set `reviewer` only to a real, verified reviewer's name. Update `updatedAt` whenever the article is re-reviewed.

Draft articles are not built or listed. Published ones appear automatically on `/insights`, the homepage, related service pages, and the sitemap.

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
- [ ] Services flagged `confirm: true` (Expatriate Tax, APA/MAP) confirmed or left hidden.
- [ ] Every published insight reviewed against current official regulations; reviewer named.
- [ ] Team profiles added only with verified credentials, consent, and licensed photos.
- [ ] Privacy Policy and Terms reviewed by legal counsel (UU PDP No. 27/2022).
- [ ] Form endpoint connected and a test submission received.
- [ ] GA4 and Google Search Console set up; sitemap submitted (`/sitemap.xml`).
- [ ] Keyword research validated for the `/solutions/*` landing pages.
- [ ] No placeholder content remaining.
