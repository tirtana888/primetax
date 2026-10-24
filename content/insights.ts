/**
 * Insights — the publishing workflow for articles, regulatory updates and
 * executive briefings. See docs/CONTENT-GUIDE.md for how to add an article.
 *
 * Editorial rules (Brief §11):
 * - Every technical article is reviewed against current official regulations
 *   before `status` is set to "published".
 * - `sources` lists official references only. Never invent references.
 * - `reviewer` stays empty until a named, verified reviewer has signed off.
 */

import { insightsId } from "@/content/insights.id";
import type { Locale } from "@/lib/i18n";

/**
 * - Tax Bulletin: short, fast note on a new regulation or DGT development (3–5 paragraphs).
 * - Regulatory Update: structured summary of a new regulation and who it affects.
 * - Article: longer analysis of a recurring issue.
 * - Executive Briefing: decision-oriented note for CFOs and boards.
 */
export const insightTypes = ["Tax Bulletin", "Regulatory Update", "Article", "Executive Briefing"] as const;
export type InsightType = (typeof insightTypes)[number];

export type InsightBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "quote"; text: string };

export interface Insight {
  slug: string;
  title: string;
  excerpt: string;
  type: InsightType;
  topic: string;
  author: string;
  reviewer: string;
  publishedAt: string;
  updatedAt: string;
  readingMinutes: number;
  status: "draft" | "published";
  keyPoints: string[];
  body: InsightBlock[];
  sources: string[];
  relatedServices: string[];
}

export const insights: Insight[] = [
  {
    slug: "responding-to-an-sp2dk",
    title: "Received an SP2DK? A Structured Approach to the First Response",
    excerpt:
      "An SP2DK is a request for explanation, not an assessment. How the first response is prepared can shape what follows.",
    type: "Executive Briefing",
    topic: "Tax Controversy",
    author: "PrimeTax Editorial Team",
    reviewer: "",
    publishedAt: "2026-10-12",
    updatedAt: "2026-10-12",
    readingMinutes: 5,
    status: "published",
    keyPoints: [
      "An SP2DK asks for an explanation of data; it is not a tax assessment.",
      "Understand the data source before drafting a response.",
      "Responses should be accurate, consistent, and supported by documents.",
    ],
    body: [
      {
        type: "p",
        text: "A Surat Permintaan Penjelasan atas Data dan/atau Keterangan (SP2DK) is a letter from the tax office asking a taxpayer to explain data or information that the office holds. For management, the key point is that an SP2DK is a request for explanation. It is not an assessment, and it does not by itself mean that additional tax is due.",
      },
      {
        type: "p",
        text: "That said, the response matters. A clear, well-supported explanation can resolve the matter. An incomplete or inconsistent response may lead to further requests or to an audit.",
      },
      { type: "h2", text: "1. Identify what the data actually is" },
      {
        type: "p",
        text: "SP2DK letters often refer to differences between what the company has reported and data held by the tax office — for example, third-party withholding slips, VAT invoices issued by counterparties, or customs data. Before drafting anything, the finance team should identify the data source and reconcile it to internal records.",
      },
      { type: "h2", text: "2. Separate explanations from corrections" },
      {
        type: "p",
        text: "Some differences have a legitimate explanation, such as timing or classification. Others may reveal an actual reporting error. Distinguishing the two early allows management to decide whether a correction is appropriate and to present the explanation consistently.",
      },
      { type: "h2", text: "3. Prepare a response that can be relied on later" },
      {
        type: "ul",
        items: [
          "Respond within the period stated in the letter.",
          "Address each item raised, in the order raised.",
          "Attach or index supporting documents rather than making unsupported statements.",
          "Keep the response consistent with filed returns and with positions the company may need to take later.",
        ],
      },
      { type: "h2", text: "4. Plan for what may follow" },
      {
        type: "p",
        text: "If the explanation is not accepted, the matter may move to an audit. Positions taken at the SP2DK stage can affect later stages, so it is sensible to treat the response as part of a broader strategy rather than a one-off administrative task.",
      },
    ],
    sources: [
      "Law No. 6 of 1983 on General Provisions and Tax Procedures (KUP), as last amended",
      "Directorate General of Taxes guidance on compliance supervision, including SE-05/PJ/2022",
    ],
    relatedServices: ["tax-controversy"],
  },
  {
    slug: "cross-border-payments-pma-withholding-tax",
    title: "Cross-Border Payments by PMA Companies: Withholding Tax Questions to Settle Early",
    excerpt:
      "Service fees, royalties, and interest paid to foreign affiliates raise withholding, VAT, and deductibility questions that are easier to resolve before payments begin.",
    type: "Article",
    topic: "International Tax & PMA",
    author: "PrimeTax Editorial Team",
    reviewer: "",
    publishedAt: "2026-10-05",
    updatedAt: "2026-10-05",
    readingMinutes: 6,
    status: "published",
    keyPoints: [
      "Characterise each payment type before agreeing contract terms.",
      "Treaty benefits depend on procedure and on the recipient's substance.",
      "Withholding tax, VAT, and deductibility should be considered together.",
    ],
    body: [
      {
        type: "p",
        text: "Foreign-invested companies (PMA) in Indonesia commonly make payments to affiliates abroad: management and technical service fees, royalties for brands or technology, interest on shareholder loans, and dividends. Each type of payment raises its own tax questions, and the answers are often easier to settle before the first payment is made.",
      },
      { type: "h2", text: "Characterisation comes first" },
      {
        type: "p",
        text: "Whether a payment is treated as a service fee, a royalty, or something else affects the applicable withholding rate and the treaty article that may apply. The characterisation should follow the substance of what is provided, and the agreement should describe it accurately.",
      },
      { type: "h2", text: "Treaty benefits are conditional" },
      {
        type: "p",
        text: "Indonesia's tax treaties can reduce withholding tax on payments to residents of treaty partner countries. Access to those rates depends on procedural requirements — including the certificate of domicile in the form prescribed by the Directorate General of Taxes — and on the recipient meeting beneficial ownership and anti-abuse conditions.",
      },
      { type: "h2", text: "Three questions to answer together" },
      {
        type: "ul",
        items: [
          "Withholding: what rate applies, and is treaty documentation in place before payment?",
          "VAT: is VAT due on the utilisation of offshore services or intangibles in Indonesia?",
          "Deductibility: can the company evidence the benefit received and the arm's length price?",
        ],
      },
      {
        type: "p",
        text: "These questions are connected. A payment that is properly withheld but cannot be evidenced as a genuine benefit may still be challenged for deductibility. Considering them together reduces the risk of inconsistent positions.",
      },
    ],
    sources: [
      "Law No. 7 of 1983 on Income Tax, as last amended by Law No. 7 of 2021 (UU HPP) — Article 26",
      "PER-25/PJ/2018 on Procedures for Applying Tax Treaties",
      "PMK-172/PMK.03/2023 on the Arm's Length Principle",
    ],
    relatedServices: ["international-tax-pma", "transfer-pricing"],
  },
  {
    slug: "transfer-pricing-documentation-indonesia",
    title: "Transfer Pricing Documentation in Indonesia: What Management Should Ask",
    excerpt:
      "Documentation is more than a compliance file. It should explain how the business creates value and why related-party prices are reasonable.",
    type: "Article",
    topic: "Transfer Pricing",
    author: "PrimeTax Editorial Team",
    reviewer: "",
    publishedAt: "2026-09-28",
    updatedAt: "2026-09-28",
    readingMinutes: 6,
    status: "published",
    keyPoints: [
      "Confirm which documentation obligations apply for the year.",
      "Documentation must reflect how the business actually operates.",
      "Local files should be consistent with the group's global policy.",
    ],
    body: [
      {
        type: "p",
        text: "Indonesia's transfer pricing rules were consolidated in PMK-172/PMK.03/2023. For companies with related-party transactions, the regulation sets out the arm's length principle, documentation requirements, and related procedures. For management, the practical questions are what must be prepared, by when, and whether the documentation would hold up if examined.",
      },
      { type: "h2", text: "Questions for the finance team" },
      {
        type: "ul",
        items: [
          "Which documentation obligations apply to us this year, based on the current thresholds?",
          "Does our functional analysis describe what our people actually do?",
          "Are intercompany agreements consistent with how transactions are carried out?",
          "Can we evidence the benefit of services and the use of intangibles we pay for?",
          "Is our local documentation consistent with the group's master file and global policy?",
        ],
      },
      { type: "h2", text: "Why consistency matters" },
      {
        type: "p",
        text: "Tax authorities increasingly compare information across documents and jurisdictions. Differences between the local file, the master file, financial statements, and filed returns are often the starting point for questions during an audit.",
      },
      { type: "quote", text: "Good documentation explains the business first, and the numbers second." },
    ],
    sources: ["PMK-172/PMK.03/2023 on the Arm's Length Principle in Related-Party Transactions"],
    relatedServices: ["transfer-pricing"],
  },
  {
    slug: "preparing-for-a-tax-audit-in-indonesia",
    title: "Preparing for a Tax Audit: A Readiness Checklist for Finance Leaders",
    excerpt:
      "Audit readiness is not about anticipating every question. It is about knowing where your records, reconciliations, and positions stand.",
    type: "Article",
    topic: "Tax Controversy",
    author: "PrimeTax Editorial Team",
    reviewer: "",
    publishedAt: "2026-09-18",
    updatedAt: "2026-09-18",
    readingMinutes: 5,
    status: "published",
    keyPoints: [
      "Refund claims and significant transactions often lead to audits.",
      "Reconciliations between financial statements and returns are central.",
      "Assign a single point of contact and keep a request log.",
    ],
    body: [
      {
        type: "p",
        text: "Tax audits in Indonesia may be triggered by refund claims, by risk analysis, or by specific data. Whatever the trigger, the experience is smoother for companies that know where their records and positions stand before the first request arrives.",
      },
      { type: "h2", text: "A readiness checklist" },
      {
        type: "ul",
        items: [
          "Reconcile commercial financial statements to the corporate income tax return.",
          "Reconcile revenue to VAT returns and withholding tax records.",
          "Index key contracts, especially with related parties and foreign counterparties.",
          "Confirm that positions relying on interpretation are documented.",
          "Appoint a single point of contact and keep a log of every request and response.",
        ],
      },
      { type: "h2", text: "During the audit" },
      {
        type: "p",
        text: "Respond within the deadlines given, provide what is requested, and keep explanations consistent with filed positions. Where a finding is disputed, record the basis for disagreement in writing so that it can be relied on at the objection stage if needed.",
      },
    ],
    sources: [
      "Law No. 6 of 1983 on General Provisions and Tax Procedures (KUP), as last amended",
      "Minister of Finance regulations on tax audit procedures, as currently in force",
    ],
    relatedServices: ["tax-controversy", "tax-advisory"],
  },
  {
    slug: "tax-governance-framework-large-companies",
    title: "Tax Governance for Large Companies: Making Tax Risk Visible to the Board",
    excerpt:
      "A tax governance framework clarifies who identifies tax risk, who decides, and how decisions are documented.",
    type: "Executive Briefing",
    topic: "Tax Governance",
    author: "PrimeTax Editorial Team",
    reviewer: "",
    publishedAt: "2026-09-08",
    updatedAt: "2026-09-08",
    readingMinutes: 4,
    status: "published",
    keyPoints: [
      "Define roles, risk appetite, and escalation thresholds.",
      "Use a risk register that management can actually read.",
      "Document significant decisions and their basis.",
    ],
    body: [
      {
        type: "p",
        text: "For large taxpayers and corporate groups, tax risk is rarely the result of a single error. It more often arises from unclear ownership, inconsistent processes across entities, or significant decisions taken without a documented tax view. A governance framework addresses these root causes.",
      },
      { type: "h2", text: "Four elements of a practical framework" },
      {
        type: "ul",
        items: [
          "Policy: a short statement of the company's approach to tax and its risk appetite.",
          "Roles: clear responsibility for tax compliance, advice, and decisions.",
          "Controls: key checks over filings, payments, and reconciliations.",
          "Escalation: thresholds that determine when matters go to the CFO or the board.",
        ],
      },
      {
        type: "p",
        text: "The output should be practical. A risk register that rates issues by likelihood and impact, reviewed periodically by management, often does more for governance than a lengthy policy manual.",
      },
    ],
    sources: [],
    relatedServices: ["tax-advisory"],
  },
];

export function getPublishedInsights(locale: Locale = "en") {
  return (locale === "id" ? insightsId : insights)
    .filter((i) => i.status === "published")
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
}

export function getInsight(slug: string, locale: Locale = "en") {
  return getPublishedInsights(locale).find((i) => i.slug === slug);
}
