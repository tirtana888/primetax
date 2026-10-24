/**
 * SEO landing pages for priority search topics (Brief §11), served at
 * /solutions/[slug]. Validate each topic with keyword research before launch.
 */

import { landingPagesId } from "@/content/landing-pages.id";
import type { Locale } from "@/lib/i18n";

export interface LandingPage {
  slug: string;
  eyebrow: string;
  headline: string;
  intro: string;
  ctaLabel: string;
  audience: { title: string; description: string }[];
  issues: { title: string; description: string }[];
  scope: string[];
  checklist: string[];
  serviceSlug: string;
  insightSlugs: string[];
  faqs: { question: string; answer: string }[];
  seo: { title: string; description: string };
}

export const landingPages: LandingPage[] = [
  {
    slug: "tax-consultant-pma-indonesia",
    eyebrow: "PMA Tax Advisory",
    headline: "Tax Consultant for PMA Companies in Indonesia",
    intro:
      "Structured Indonesian tax advisory for foreign-invested companies — covering corporate tax obligations, cross-border payments, treaty application, and transfer pricing, explained clearly for local management and regional headquarters.",
    ctaLabel: "Discuss Your PMA Tax Matter",
    audience: [
      {
        title: "Directors and CFOs of PT PMA",
        description: "Leaders accountable for Indonesian tax compliance and exposure.",
      },
      {
        title: "Regional finance and tax teams",
        description: "Teams that need Indonesian matters explained in English, in a consistent format.",
      },
      {
        title: "Foreign investors entering Indonesia",
        description: "Investors evaluating structure, financing, and operating models.",
      },
    ],
    issues: [
      {
        title: "Payments to foreign affiliates",
        description:
          "Withholding tax, VAT on offshore services, and deductibility of service fees, royalties, and interest.",
      },
      {
        title: "Treaty application",
        description: "Procedural requirements and substance conditions for reduced treaty rates.",
      },
      {
        title: "Related-party transactions",
        description: "Transfer pricing documentation and arm's length pricing for intragroup flows.",
      },
      {
        title: "Audits and enquiries",
        description: "SP2DK letters and audits that focus on cross-border and related-party items.",
      },
    ],
    scope: [
      "Corporate income tax, VAT, and withholding tax advisory",
      "Cross-border payment and contract review",
      "Tax treaty eligibility and documentation",
      "Shareholder loan and financing structure review",
      "Transfer pricing risk assessment and documentation",
      "Support with SP2DK letters and tax audits",
    ],
    checklist: [
      "Are payments to foreign affiliates characterised consistently with the underlying agreements?",
      "Is treaty documentation in place before withholding is applied?",
      "Can the company evidence the benefit of intragroup services it pays for?",
      "Have related-party transactions been checked against current documentation requirements?",
      "Are commercial financial statements reconciled to the corporate income tax return?",
    ],
    serviceSlug: "international-tax-pma",
    insightSlugs: ["cross-border-payments-pma-withholding-tax", "transfer-pricing-documentation-indonesia"],
    faqs: [
      {
        question: "Do you work in English?",
        answer:
          "Yes. Meetings and deliverables can be in English or Indonesian, depending on what works best for local and regional stakeholders.",
      },
      {
        question: "Can you support a PMA that is still being established?",
        answer:
          "Yes. Early advice on structure, financing, and intercompany arrangements is often more efficient than correcting positions later.",
      },
    ],
    seo: {
      title: "Tax Consultant PMA Indonesia — Advisory for Foreign-Invested Companies",
      description:
        "Tax consultant for PMA companies in Indonesia: cross-border payments, tax treaties, withholding tax, transfer pricing, and audit support for foreign-invested companies.",
    },
  },
  {
    slug: "large-taxpayer-tax-advisory",
    eyebrow: "Large Taxpayer Advisory",
    headline: "Tax Advisory for Large Taxpayers and Corporate Groups",
    intro:
      "Executive-level tax advisory for large companies and multi-entity groups — focused on governance, risk visibility, and well-documented positions on material matters.",
    ctaLabel: "Request a Tax Risk Diagnostic",
    audience: [
      {
        title: "CFOs and Finance Directors",
        description: "Leaders who need tax risk presented clearly for board-level decisions.",
      },
      {
        title: "Tax Directors and tax managers",
        description: "Teams seeking a second opinion or additional capacity on complex matters.",
      },
      {
        title: "Corporate groups",
        description: "Groups with several Indonesian entities and inconsistent processes between them.",
      },
    ],
    issues: [
      {
        title: "Visibility of tax risk",
        description: "Management needs a consolidated view of exposure across entities and tax types.",
      },
      {
        title: "Material transactions",
        description: "Restructurings, acquisitions, and new business lines need tax analysis before execution.",
      },
      {
        title: "Audit intensity",
        description: "Larger companies are subject to closer supervision and more frequent enquiries.",
      },
      {
        title: "Interpretive positions",
        description: "Positions that rely on interpretation need documentation that can be relied on later.",
      },
    ],
    scope: [
      "Tax risk assessment and risk register",
      "Tax governance framework design or review",
      "Corporate tax review and second opinions",
      "Written tax opinions on material matters",
      "Transaction and restructuring tax advisory",
      "Audit readiness and dispute strategy",
    ],
    checklist: [
      "Does management receive a regular, consolidated view of tax risk?",
      "Are escalation thresholds for tax matters defined?",
      "Are significant tax positions documented with their basis and assumptions?",
      "Are processes consistent across group entities?",
      "Is the group ready for an audit of its most significant positions?",
    ],
    serviceSlug: "tax-advisory",
    insightSlugs: ["tax-governance-framework-large-companies", "preparing-for-a-tax-audit-in-indonesia"],
    faqs: [
      {
        question: "Is this service only for companies registered at a Large Taxpayer Office?",
        answer:
          "No. 'Large taxpayers' here describes companies of significant size and complexity. Formal registration at a Large Taxpayer Office (KPP Wajib Pajak Besar) is an administrative classification by the Directorate General of Taxes and is not a requirement for this service.",
      },
      {
        question: "Can you work alongside our in-house tax team?",
        answer:
          "Yes. Engagements are typically scoped to complement the in-house team — for example, second opinions, specific reviews, or additional capacity during audits.",
      },
    ],
    seo: {
      title: "Large Taxpayer Tax Advisory Indonesia — Governance & Tax Risk",
      description:
        "Tax advisory for large taxpayers and corporate groups in Indonesia: tax risk assessment, governance, second opinions, and audit readiness.",
    },
  },
  {
    slug: "international-tax-consultant-indonesia",
    eyebrow: "International Tax",
    headline: "International Tax Consultant in Indonesia",
    intro:
      "Advisory on cross-border transactions, tax treaties, withholding tax, and permanent establishment risk for multinational groups operating in Indonesia.",
    ctaLabel: "Discuss Your Cross-Border Matter",
    audience: [
      { title: "Multinational subsidiaries", description: "Indonesian entities of international groups." },
      { title: "Foreign companies", description: "Non-residents providing services or earning income in Indonesia." },
      { title: "Regional headquarters", description: "Teams overseeing Indonesian operations from abroad." },
    ],
    issues: [
      { title: "Withholding tax", description: "Article 26 withholding and treaty relief on outbound payments." },
      { title: "Permanent establishment", description: "Activities that may create a taxable presence in Indonesia." },
      { title: "Offshore services", description: "VAT on services and intangibles utilised in Indonesia." },
      { title: "Structuring", description: "Investment, financing, and repatriation structures." },
    ],
    scope: [
      "Cross-border transaction review",
      "Tax treaty analysis",
      "Withholding tax advisory",
      "Permanent establishment risk review",
      "International tax structuring",
    ],
    checklist: [
      "Do contracts with foreign parties describe services and locations accurately?",
      "Is treaty documentation obtained before payments are made?",
      "Are foreign personnel activities in Indonesia monitored for PE risk?",
      "Is VAT on offshore services being self-assessed where required?",
    ],
    serviceSlug: "international-tax-pma",
    insightSlugs: ["cross-border-payments-pma-withholding-tax"],
    faqs: [
      {
        question: "Can you advise the foreign party as well as the Indonesian entity?",
        answer:
          "We advise on Indonesian tax implications. Where foreign tax advice is needed, we can coordinate with the group's advisors in other jurisdictions.",
      },
    ],
    seo: {
      title: "International Tax Consultant Indonesia — Treaties & Cross-Border Tax",
      description:
        "International tax consultant in Indonesia: tax treaty analysis, withholding tax, permanent establishment risk, and cross-border structuring.",
    },
  },
  {
    slug: "transfer-pricing-consultant-indonesia",
    eyebrow: "Transfer Pricing",
    headline: "Transfer Pricing Consultant in Indonesia",
    intro:
      "Transfer pricing risk assessment, documentation, and benchmarking that reflects how your business actually operates.",
    ctaLabel: "Review Your Transfer Pricing Risk",
    audience: [
      { title: "Companies with related-party transactions", description: "Local entities of domestic or foreign groups." },
      { title: "Group tax teams", description: "Teams aligning Indonesian documentation with global policy." },
      { title: "Finance leaders", description: "Executives responsible for intercompany pricing outcomes." },
    ],
    issues: [
      { title: "Documentation", description: "Master File and Local File obligations and their content." },
      { title: "Intragroup services", description: "Evidence of benefit and pricing for service charges." },
      { title: "Profitability", description: "Margins that differ from what the entity's role would suggest." },
      { title: "Consistency", description: "Alignment between local files, global policy, and filed returns." },
    ],
    scope: [
      "Transfer pricing risk assessment",
      "Master File and Local File",
      "Benchmarking analysis",
      "Related-party transaction review",
      "Intercompany pricing review",
    ],
    checklist: [
      "Have documentation thresholds been checked for the current year?",
      "Does the functional analysis reflect actual conduct?",
      "Are intercompany agreements up to date?",
      "Is there evidence of benefit for intragroup services?",
    ],
    serviceSlug: "transfer-pricing",
    insightSlugs: ["transfer-pricing-documentation-indonesia"],
    faqs: [
      {
        question: "How long does a Local File take to prepare?",
        answer:
          "It depends on the number and complexity of transactions and the availability of information. We agree a timetable during scoping.",
      },
    ],
    seo: {
      title: "Transfer Pricing Consultant Indonesia — Documentation & Benchmarking",
      description:
        "Transfer pricing consultant in Indonesia: risk assessment, Master File and Local File, benchmarking, and related-party transaction review.",
    },
  },
  {
    slug: "tax-audit-consultant-indonesia",
    eyebrow: "Tax Audit",
    headline: "Tax Audit Consultant in Indonesia",
    intro:
      "Audit readiness reviews and structured support during tax audits, with a consistent strategy from the first request to closing.",
    ctaLabel: "Prepare for Your Tax Audit",
    audience: [
      { title: "Companies under audit", description: "Businesses that have received an audit notice." },
      { title: "Refund claimants", description: "Companies planning or pursuing a tax refund." },
      { title: "Finance teams", description: "Teams preparing for heightened scrutiny." },
    ],
    issues: [
      { title: "Document requests", description: "Volume and timing of information requests." },
      { title: "Reconciliations", description: "Differences between financial statements and returns." },
      { title: "Findings", description: "Disputed corrections and the record needed for later stages." },
      { title: "Deadlines", description: "Statutory timelines throughout the process." },
    ],
    scope: [
      "Audit readiness review",
      "Document preparation and indexing",
      "Support during audit discussions",
      "Analysis of audit findings",
      "Objection strategy where relevant",
    ],
    checklist: [
      "Are key reconciliations complete?",
      "Is there a single point of contact for the audit?",
      "Are significant positions documented?",
      "Is a request and response log maintained?",
    ],
    serviceSlug: "tax-controversy",
    insightSlugs: ["preparing-for-a-tax-audit-in-indonesia", "responding-to-an-sp2dk"],
    faqs: [
      {
        question: "Can you join an audit that is already in progress?",
        answer: "Yes. We will first review the status, deadlines, and correspondence to date.",
      },
    ],
    seo: {
      title: "Tax Audit Consultant Indonesia — Audit Readiness & Support",
      description:
        "Tax audit consultant in Indonesia: audit readiness reviews, document preparation, support during audit discussions, and analysis of findings.",
    },
  },
  {
    slug: "sp2dk-assistance-indonesia",
    eyebrow: "SP2DK Assistance",
    headline: "SP2DK Assistance in Indonesia",
    intro:
      "Structured analysis and response preparation for SP2DK letters — accurate, supported, and consistent with the positions your company may need later.",
    ctaLabel: "Discuss Your SP2DK",
    audience: [
      { title: "Companies that received an SP2DK", description: "Businesses asked to explain data held by the tax office." },
      { title: "Finance managers", description: "Teams responsible for the response and its supporting records." },
      { title: "Group CFOs", description: "Leaders needing a view of exposure and next steps." },
    ],
    issues: [
      { title: "Data differences", description: "Third-party data that does not match reported figures." },
      { title: "Timelines", description: "Response periods stated in the letter." },
      { title: "Consistency", description: "Explanations that hold at later stages." },
      { title: "Escalation risk", description: "The possibility of an audit if the response is not accepted." },
    ],
    scope: [
      "Analysis of the data in question",
      "Reconciliation support",
      "Drafting of the written explanation",
      "Document indexing",
      "Strategy for possible follow-up",
    ],
    checklist: [
      "Has the data source been identified?",
      "Have differences been reconciled to internal records?",
      "Have explanations been separated from corrections?",
      "Is the response consistent with filed returns?",
    ],
    serviceSlug: "tax-controversy",
    insightSlugs: ["responding-to-an-sp2dk"],
    faqs: [
      {
        question: "Does an SP2DK mean we owe additional tax?",
        answer:
          "Not necessarily. It is a request for explanation. Whether additional tax is due depends on the facts and on whether the explanation is accepted.",
      },
    ],
    seo: {
      title: "SP2DK Assistance Indonesia — Structured Response Support",
      description:
        "SP2DK assistance in Indonesia: analysis of the data in question, reconciliation, written explanations, and strategy for possible follow-up.",
    },
  },
  {
    slug: "corporate-tax-planning-indonesia",
    eyebrow: "Corporate Tax Planning",
    headline: "Corporate Tax Planning in Indonesia",
    intro:
      "Evaluation of lawful options for transactions and operations, with the risks, assumptions, and substance requirements of each option set out clearly.",
    ctaLabel: "Book a Consultation",
    audience: [
      { title: "CFOs planning material decisions", description: "Leaders evaluating transactions, financing, or restructuring." },
      { title: "Growing companies", description: "Businesses preparing for expansion or foreign investment." },
      { title: "Corporate groups", description: "Groups reviewing structure and intragroup arrangements." },
    ],
    issues: [
      { title: "Transaction structure", description: "Tax outcomes of alternative structures." },
      { title: "Financing", description: "Debt, equity, and related-party financing." },
      { title: "Substance", description: "Commercial purpose behind arrangements." },
      { title: "Regulatory change", description: "Impact of new rules on existing structures." },
    ],
    scope: [
      "Options analysis for material decisions",
      "Restructuring and reorganisation advisory",
      "Financing structure review",
      "Written opinions on selected positions",
    ],
    checklist: [
      "Is the commercial purpose of the arrangement documented?",
      "Have alternative options been compared?",
      "Are the risks and assumptions of the chosen option clear?",
      "Has the impact of recent regulatory changes been considered?",
    ],
    serviceSlug: "tax-advisory",
    insightSlugs: ["tax-governance-framework-large-companies"],
    faqs: [
      {
        question: "Is tax planning the same as tax avoidance?",
        answer:
          "No. We evaluate lawful options that have genuine commercial substance and explain their risks. We do not recommend arrangements whose main purpose is to obtain a tax benefit.",
      },
    ],
    seo: {
      title: "Corporate Tax Planning Indonesia — Options, Risks & Substance",
      description:
        "Corporate tax planning in Indonesia: options analysis, restructuring advisory, financing review, and written opinions with clear risks and assumptions.",
    },
  },
];

export function getLandingPages(locale: Locale = "en") {
  return locale === "id" ? landingPagesId : landingPages;
}

export function getLandingPage(slug: string, locale: Locale = "en") {
  return getLandingPages(locale).find((p) => p.slug === slug);
}
