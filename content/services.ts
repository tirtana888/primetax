/**
 * Core service categories (Brief §6) rendered by the service page template
 * (Brief §8) at /services/[slug].
 *
 * Only publish services PrimeTax can deliver directly or through clearly
 * defined, appropriately qualified partners. Items flagged `confirm: true`
 * are hidden until the capability has been confirmed.
 */

import { servicesId, supportingServicesId } from "@/content/services.id";
import type { Locale } from "@/lib/i18n";

export type ServiceIcon = "advisory" | "international" | "transfer-pricing" | "controversy";

export interface ServiceCategory {
  slug: string;
  number: string;
  icon: ServiceIcon;
  title: string;
  cardSummary: string;
  headline: string;
  valueProposition: string;
  ctaLabel: string;
  situations: { title: string; description: string }[];
  scope: { title: string; description: string; confirm?: boolean }[];
  deliverables: string[];
  process: { title: string; description: string }[];
  considerations: { title: string; description: string }[];
  faqs: { question: string; answer: string }[];
  relatedServices: string[];
  relatedInsights: string[];
  seo: { title: string; description: string };
}

export const services: ServiceCategory[] = [
  {
    slug: "tax-advisory",
    number: "01",
    icon: "advisory",
    title: "Tax Advisory",
    cardSummary:
      "Structured review, planning, and written opinions that help management understand tax positions before material decisions are made.",
    headline: "Corporate Tax Advisory for Decisions That Matter",
    valueProposition:
      "Understand the tax implications of business decisions, evaluate available options, and document the reasoning behind material tax positions.",
    ctaLabel: "Request a Tax Risk Diagnostic",
    situations: [
      {
        title: "A material transaction is being negotiated",
        description:
          "Contract terms, payment flows, and entity choices can change the tax outcome. Management needs the implications before signing, not after.",
      },
      {
        title: "Tax positions rely on interpretation",
        description:
          "Some positions depend on how regulations are read. Finance teams need a documented basis that can be explained to auditors, boards, and the tax office.",
      },
      {
        title: "Uncertainty about historical exposure",
        description:
          "Differences between commercial reporting and tax filings, or changes in business model, can create exposure that has not yet been quantified.",
      },
      {
        title: "Governance expectations are rising",
        description:
          "Boards and regional headquarters increasingly expect a clear framework for how tax risk is identified, escalated, and decided.",
      },
    ],
    scope: [
      {
        title: "Tax Health Check",
        description:
          "A focused diagnostic of key tax areas to identify potential exposure, documentation gaps, and priorities for attention.",
      },
      {
        title: "Corporate Tax Review",
        description:
          "Review of corporate income tax, VAT, and withholding tax positions against supporting records and applicable regulations.",
      },
      {
        title: "Tax Planning",
        description:
          "Evaluation of lawful options for structuring transactions and operations, with the risks and assumptions of each option set out clearly.",
      },
      {
        title: "Tax Opinion and Second Opinion",
        description:
          "Written analysis of a specific tax question, including facts relied on, regulatory basis, interpretation, and limitations.",
      },
      {
        title: "Tax Risk Assessment",
        description:
          "Identification and prioritisation of tax risks by likelihood and potential impact, presented in a format management can act on.",
      },
      {
        title: "Tax Governance",
        description:
          "Design or review of tax policies, roles, controls, and escalation procedures appropriate to the size and complexity of the group.",
      },
    ],
    deliverables: [
      "Executive summary of key findings and decisions required",
      "Tax risk register with priority ratings",
      "Written advisory memorandum or tax opinion",
      "Options analysis with assumptions and limitations",
      "Recommended action plan and responsibilities",
    ],
    process: [
      {
        title: "Understand",
        description: "Clarify the business question, the decision timeline, and the agreed scope of review.",
      },
      {
        title: "Assess",
        description: "Review facts, contracts, filings, and records against applicable regulations.",
      },
      {
        title: "Advise",
        description: "Present findings, options, and risks in writing, with a clear recommendation where appropriate.",
      },
      {
        title: "Support",
        description: "Assist with agreed implementation steps or follow-up questions from management and auditors.",
      },
    ],
    considerations: [
      {
        title: "Regulatory change",
        description:
          "Indonesian tax rules have changed significantly since the Harmonisation of Tax Regulations Law (UU HPP, Law No. 7 of 2021) and the move to the Coretax administration system. Positions taken under earlier rules may need to be revisited.",
      },
      {
        title: "Documentation matters as much as the position",
        description:
          "A defensible position depends on contemporaneous documentation of facts and reasoning, not only on the conclusion reached.",
      },
      {
        title: "Planning must have commercial substance",
        description:
          "Tax planning is evaluated against the commercial purpose of an arrangement. Options that lack substance carry heightened risk and are not recommended.",
      },
    ],
    faqs: [
      {
        question: "What is the difference between a Tax Health Check and a Corporate Tax Review?",
        answer:
          "A Tax Health Check is a focused diagnostic designed to identify priority areas quickly. A Corporate Tax Review goes deeper into selected taxes and periods, testing positions against records and regulations. Many clients start with a Health Check and then scope a review of the areas it highlights.",
      },
      {
        question: "Can PrimeTax provide a second opinion on advice from another advisor?",
        answer:
          "Yes. A second opinion reviews the facts, assumptions, and regulatory basis of an existing position and states whether we agree, disagree, or see additional risks. We will ask to see the original analysis and the underlying facts.",
      },
      {
        question: "Do you guarantee tax savings?",
        answer:
          "No. We evaluate lawful options and explain their risks and assumptions so management can make an informed decision. Outcomes depend on facts, implementation, and the position taken by the tax authority.",
      },
    ],
    relatedServices: ["international-tax-pma", "tax-controversy"],
    relatedInsights: ["tax-governance-framework-large-companies", "preparing-for-a-tax-audit-in-indonesia"],
    seo: {
      title: "Corporate Tax Advisory Indonesia — Tax Review, Planning & Opinion",
      description:
        "Corporate tax advisory in Indonesia: tax health checks, corporate tax review, tax planning, written opinions, tax risk assessment, and tax governance.",
    },
  },
  {
    slug: "international-tax-pma",
    number: "02",
    icon: "international",
    title: "International Tax & PMA",
    cardSummary:
      "Indonesian tax advisory for foreign-invested companies and cross-border transactions, including treaties and withholding tax.",
    headline: "Indonesian Tax Advisory for PMA Companies",
    valueProposition:
      "Understand Indonesian tax obligations, cross-border implications, and potential tax exposure with structured advisory tailored to your business context.",
    ctaLabel: "Discuss Your PMA Tax Matter",
    situations: [
      {
        title: "Payments to foreign affiliates",
        description:
          "Service fees, royalties, interest, and dividends paid offshore raise withholding tax, VAT, and deductibility questions that need consistent treatment.",
      },
      {
        title: "Applying a tax treaty",
        description:
          "Reduced treaty rates depend on procedural requirements and on the recipient meeting substance and beneficial ownership conditions.",
      },
      {
        title: "Entering or restructuring in Indonesia",
        description:
          "Investment structure, financing, and operating model choices have tax consequences for the Indonesian entity and the wider group.",
      },
      {
        title: "Reporting to regional or global teams",
        description:
          "Headquarters need Indonesian tax matters explained clearly in English, with exposure and options presented in a consistent format.",
      },
    ],
    scope: [
      {
        title: "PMA Tax Advisory",
        description:
          "Ongoing or project-based advisory on corporate income tax, VAT, and withholding obligations for foreign-invested companies.",
      },
      {
        title: "Cross-Border Tax Review",
        description:
          "Review of cross-border payment flows and contracts to identify withholding tax, VAT, and deductibility exposure.",
      },
      {
        title: "Tax Treaty Analysis",
        description:
          "Assessment of treaty eligibility and procedural requirements, including the certificate of domicile and anti-abuse provisions.",
      },
      {
        title: "Withholding Tax Advisory",
        description:
          "Characterisation of payments and the applicable Article 26 and domestic withholding treatment.",
      },
      {
        title: "International Tax Structuring",
        description:
          "Evaluation of investment, financing, and operating structures, including permanent establishment considerations.",
      },
      {
        title: "Expatriate Tax Advisory",
        description: "Individual tax residency and employment tax matters for expatriate staff.",
        confirm: true,
      },
    ],
    deliverables: [
      "Cross-border transaction map with tax treatment by payment type",
      "Treaty eligibility and documentation checklist",
      "Withholding tax and VAT exposure summary",
      "Advisory memorandum in English for regional or global stakeholders",
      "Recommended actions and documentation to maintain",
    ],
    process: [
      {
        title: "Understand",
        description: "Map the group structure, Indonesian operations, and cross-border flows in scope.",
      },
      {
        title: "Assess",
        description: "Review contracts, payment records, treaty documentation, and filings against applicable rules.",
      },
      {
        title: "Advise",
        description: "Explain treatment, exposure, and options in writing for local and regional decision-makers.",
      },
      {
        title: "Support",
        description: "Assist with documentation, agreed changes, and ongoing questions as transactions evolve.",
      },
    ],
    considerations: [
      {
        title: "Treaty procedures",
        description:
          "Treaty benefits in Indonesia are subject to procedural requirements set by the Directorate General of Taxes (including PER-25/PJ/2018) and to anti-abuse tests. Missing documentation can result in domestic rates being applied.",
      },
      {
        title: "Permanent establishment",
        description:
          "Activities of foreign personnel or agents in Indonesia may create a permanent establishment. The applicable treaty and domestic rules (including PMK-35/PMK.03/2019) should be considered before activities begin.",
      },
      {
        title: "Financing and interest",
        description:
          "Shareholder loans are subject to debt-to-equity limits (PMK-169/PMK.010/2015) and to arm's length requirements for related-party interest.",
      },
    ],
    faqs: [
      {
        question: "Can you communicate directly with our regional headquarters?",
        answer:
          "Yes. Deliverables can be prepared in English and we can join calls with regional finance or tax teams, as agreed in the engagement scope.",
      },
      {
        question: "When should a PMA company review its cross-border payments?",
        answer:
          "Ideally before new intercompany agreements are signed or new payment types begin, and periodically as part of year-end preparation. Earlier review allows documentation to be put in place before payments are made.",
      },
      {
        question: "Do you also cover transfer pricing for PMA companies?",
        answer:
          "Yes. Transfer pricing is closely linked to cross-border advisory and is covered under our Transfer Pricing practice. We coordinate the two where both are in scope.",
      },
    ],
    relatedServices: ["transfer-pricing", "tax-advisory"],
    relatedInsights: ["cross-border-payments-pma-withholding-tax", "transfer-pricing-documentation-indonesia"],
    seo: {
      title: "International Tax & PMA Tax Advisory Indonesia",
      description:
        "Tax advisory for PMA and foreign-invested companies in Indonesia: cross-border reviews, tax treaty analysis, withholding tax, and international structuring.",
    },
  },
  {
    slug: "transfer-pricing",
    number: "03",
    icon: "transfer-pricing",
    title: "Transfer Pricing",
    cardSummary:
      "Risk assessment, documentation, and benchmarking for related-party transactions under Indonesian transfer pricing rules.",
    headline: "Transfer Pricing Advisory and Documentation",
    valueProposition:
      "Assess related-party transactions, prepare documentation that reflects how your business actually operates, and understand where transfer pricing risk sits.",
    ctaLabel: "Review Your Transfer Pricing Risk",
    situations: [
      {
        title: "Documentation obligations",
        description:
          "Companies with related-party transactions may be required to prepare a Master File and Local File, depending on applicable thresholds.",
      },
      {
        title: "Intragroup services and royalties",
        description:
          "Management fees and royalties are frequently examined for evidence of benefit and arm's length pricing.",
      },
      {
        title: "Business model changes",
        description:
          "Changes in functions, assets, or risks — such as converting a distributor or centralising procurement — affect expected profitability.",
      },
      {
        title: "Profitability under scrutiny",
        description:
          "Sustained losses or low margins in an entity with related-party transactions may draw questions during audits.",
      },
    ],
    scope: [
      {
        title: "Transfer Pricing Risk Assessment",
        description:
          "Review of related-party transactions to identify where pricing, documentation, or characterisation creates risk.",
      },
      {
        title: "Master File and Local File",
        description:
          "Preparation or review of transfer pricing documentation consistent with the group's actual functions, assets, and risks.",
      },
      {
        title: "Benchmarking Analysis",
        description:
          "Search and analysis of comparable companies or transactions to support the arm's length range.",
      },
      {
        title: "Related-Party Transaction Review",
        description: "Review of agreements, invoices, and evidence supporting specific related-party transactions.",
      },
      {
        title: "Intercompany Pricing Review",
        description:
          "Evaluation of pricing policies and year-end adjustments against the selected transfer pricing method.",
      },
      {
        title: "APA / MAP Advisory",
        description: "Advisory on Advance Pricing Agreements and Mutual Agreement Procedures.",
        confirm: true,
      },
    ],
    deliverables: [
      "Related-party transaction inventory and risk heat map",
      "Master File and/or Local File",
      "Benchmarking report with search strategy and comparables",
      "Functional analysis and characterisation memorandum",
      "Recommendations on pricing policy and supporting evidence",
    ],
    process: [
      {
        title: "Understand",
        description: "Interview management to understand the value chain, group structure, and transactions.",
      },
      {
        title: "Assess",
        description: "Analyse functions, assets, and risks; test pricing and documentation against requirements.",
      },
      {
        title: "Advise",
        description: "Prepare documentation and explain risks, assumptions, and recommended changes.",
      },
      {
        title: "Support",
        description: "Assist with updates, information requests, and alignment with the group's global policy.",
      },
    ],
    considerations: [
      {
        title: "Current framework",
        description:
          "Indonesian transfer pricing documentation and the arm's length principle are governed by PMK-172/PMK.03/2023, which consolidated earlier rules. Thresholds and timelines should be confirmed against the regulation for each year.",
      },
      {
        title: "Substance over form",
        description:
          "Documentation must reflect actual conduct. Agreements that differ from how the business operates provide limited protection.",
      },
      {
        title: "Consistency with the group",
        description:
          "Local documentation should be consistent with the group's global transfer pricing policy and with information reported in other jurisdictions.",
      },
    ],
    faqs: [
      {
        question: "Is every company with related-party transactions required to prepare a Local File?",
        answer:
          "Not necessarily. Requirements depend on thresholds and on the nature of the transactions. We review your facts against the current regulation to confirm what applies.",
      },
      {
        question: "Can you review documentation prepared by our group's global advisor?",
        answer:
          "Yes. We can review global documentation for consistency with Indonesian requirements and with how the local entity operates, and recommend local supplements where needed.",
      },
      {
        question: "Do you assist with Advance Pricing Agreements?",
        answer:
          "Please discuss APA or MAP matters with us directly. We will confirm the scope of assistance we can provide for your specific situation.",
      },
    ],
    relatedServices: ["international-tax-pma", "tax-controversy"],
    relatedInsights: ["transfer-pricing-documentation-indonesia", "cross-border-payments-pma-withholding-tax"],
    seo: {
      title: "Transfer Pricing Advisory Indonesia — Documentation & Benchmarking",
      description:
        "Transfer pricing advisory in Indonesia: risk assessment, Master File and Local File, benchmarking, and related-party transaction review.",
    },
  },
  {
    slug: "tax-controversy",
    number: "04",
    icon: "controversy",
    title: "Tax Controversy",
    cardSummary:
      "Support with SP2DK letters, tax audits, objections, appeals, and refunds — from first response to dispute strategy.",
    headline: "Tax Controversy and Dispute Support",
    valueProposition:
      "Respond to tax office enquiries and audits in a structured way, understand your position, and make informed decisions about objection and appeal.",
    ctaLabel: "Discuss Your SP2DK or Tax Audit",
    situations: [
      {
        title: "An SP2DK has been received",
        description:
          "A request for explanation of data requires a timely, accurate response. The way it is answered can affect whether an audit follows.",
      },
      {
        title: "A tax audit has started",
        description:
          "Audits involve document requests, discussions, and deadlines. Preparation and consistent communication help manage the process.",
      },
      {
        title: "An assessment has been issued",
        description:
          "Management must decide whether to accept, object, or pursue other remedies within statutory time limits.",
      },
      {
        title: "A refund claim is pending",
        description:
          "Refund requests typically trigger an examination. Records should be ready before the claim is filed.",
      },
    ],
    scope: [
      {
        title: "SP2DK Assistance",
        description:
          "Analysis of the data in question, preparation of the explanation, and supporting documentation.",
      },
      {
        title: "Tax Audit Preparation and Assistance",
        description:
          "Readiness review, document preparation, and support during audit discussions and closing conferences.",
      },
      {
        title: "Tax Objection",
        description: "Analysis of the assessment and preparation of the objection within statutory timelines.",
      },
      {
        title: "Tax Appeal",
        description:
          "Support with the appeal process at the Tax Court, subject to applicable representation requirements.",
      },
      {
        title: "Tax Refund Assistance",
        description: "Preparation of refund claims and support during the related examination.",
      },
      {
        title: "Tax Dispute Strategy",
        description:
          "Assessment of the merits, costs, and timelines of available remedies to support management's decision.",
      },
    ],
    deliverables: [
      "Issue analysis and position assessment",
      "Draft responses, explanations, and submissions",
      "Document index and evidence plan",
      "Timeline of statutory deadlines and next steps",
      "Dispute strategy memorandum for management",
    ],
    process: [
      {
        title: "Understand",
        description: "Review the letter or assessment, deadlines, and the facts behind the issues raised.",
      },
      {
        title: "Assess",
        description: "Analyse the regulatory basis, available evidence, and the strength of each position.",
      },
      {
        title: "Advise",
        description: "Recommend a response strategy and prepare submissions for management approval.",
      },
      {
        title: "Support",
        description: "Assist through discussions, follow-up requests, and subsequent stages as agreed.",
      },
    ],
    considerations: [
      {
        title: "Statutory deadlines",
        description:
          "Objections and appeals are subject to strict time limits under the General Provisions and Tax Procedures Law (KUP) and the Tax Court Law. Missing a deadline can remove a remedy entirely.",
      },
      {
        title: "Consistency across stages",
        description:
          "Positions and evidence presented at the SP2DK or audit stage may affect later stages. A consistent strategy from the start is important.",
      },
      {
        title: "Representation",
        description:
          "Representation before the tax office and the Tax Court is subject to specific requirements. The scope of PrimeTax's role is confirmed in each engagement.",
      },
    ],
    faqs: [
      {
        question: "How quickly should we respond to an SP2DK?",
        answer:
          "Responses are expected within the period stated in the letter. Contact us as soon as it is received so there is time to analyse the data and prepare a considered response.",
      },
      {
        question: "Can you guarantee the outcome of an objection or appeal?",
        answer:
          "No. Outcomes depend on facts, evidence, and the decision of the tax authority or court. We provide an assessment of the merits and risks so management can decide how to proceed.",
      },
      {
        question: "Should we prepare for an audit before one is announced?",
        answer:
          "Yes, particularly before filing a refund claim or after significant transactions. Audit readiness reviews help identify gaps while there is still time to address them.",
      },
    ],
    relatedServices: ["tax-advisory", "transfer-pricing"],
    relatedInsights: ["responding-to-an-sp2dk", "preparing-for-a-tax-audit-in-indonesia"],
    seo: {
      title: "Tax Controversy Indonesia — SP2DK, Tax Audit, Objection & Appeal",
      description:
        "Tax controversy support in Indonesia: SP2DK assistance, tax audit preparation, objections, appeals, refund assistance, and dispute strategy.",
    },
  },
];

export const supportingServices = [
  {
    title: "Corporate Tax Compliance Review",
    description: "Periodic review of filings and reconciliations to identify errors before they become audit issues.",
  },
  {
    title: "Tax Due Diligence",
    description: "Identification of historical tax exposure in acquisitions, investments, and restructurings.",
  },
  {
    title: "Transaction Tax Advisory",
    description: "Tax implications of acquisitions, disposals, and group reorganisations.",
  },
  {
    title: "Executive Tax Advisory",
    description: "Ongoing advisory access for CFOs and finance leadership on emerging tax questions.",
  },
  {
    title: "Tax Intelligence and Training",
    description: "Regulatory briefings and focused training for finance and tax teams.",
  },
];

export function getServices(locale: Locale = "en") {
  return locale === "id" ? servicesId : services;
}

export function getSupportingServices(locale: Locale = "en") {
  return locale === "id" ? supportingServicesId : supportingServices;
}

export function getService(slug: string, locale: Locale = "en") {
  return getServices(locale).find((s) => s.slug === slug);
}
