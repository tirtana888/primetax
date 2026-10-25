import { industryDetailsId } from "@/content/industry-details.id";
import type { Locale } from "@/lib/i18n";

/**
 * Detail pages for /industries/[slug]. Keys must match the slugs in
 * content/industries.ts.
 *
 * `scenarios` are ILLUSTRATIVE situations built from common industry patterns.
 * They are not client case studies and must never name or imply a client.
 * Publish real case studies only with client consent and verified facts.
 */
export interface IndustryDetail {
  headline: string;
  intro: string;
  context: string[];
  issues: { title: string; text: string }[];
  scenarios: { title: string; situation: string; questions: string[]; approach: string }[];
  regulations: string[];
  insights: string[];
  faqs: { question: string; answer: string }[];
  ctaLabel: string;
  seo: { title: string; description: string };
}

const industryDetailsEn: Record<string, IndustryDetail> = {
  manufacturing: {
    headline: "Tax Advisory for Manufacturing Companies in Indonesia",
    intro:
      "Manufacturers combine imported inputs, local production, export sales, and technology licensed from affiliates. Each link in that chain carries its own tax questions.",
    context: [
      "For foreign-invested manufacturers, much of the tax exposure sits in related-party flows: raw materials bought from group suppliers, finished goods sold to group distributors, and royalties or technical fees paid for know-how.",
      "Export-oriented producers also tend to accumulate input VAT, which makes refund readiness and the examination that follows a refund claim an ongoing management concern.",
    ],
    issues: [
      {
        title: "Related-party pricing of goods",
        text: "Purchase prices for materials and sales prices for finished goods should be consistent with the manufacturer's actual functions and risks, whether it operates as a full-fledged or contract manufacturer.",
      },
      {
        title: "Royalties and technical assistance fees",
        text: "Payments for technology and know-how need evidence of benefit, an arm's length rate, correct withholding, and VAT on the use of foreign intangibles.",
      },
      {
        title: "VAT refund readiness",
        text: "Exporters with recurring overpaid VAT should keep invoices, export documents, and reconciliations in order before a refund claim triggers an examination.",
      },
      {
        title: "Customs and tax consistency",
        text: "Customs values, bonded-zone facilities, and tax positions on the same transactions should tell a consistent story.",
      },
    ],
    scenarios: [
      {
        title: "Recurring losses at a contract manufacturer",
        situation:
          "A foreign-invested manufacturer that produces mainly for its group reports losses for several consecutive years while paying a royalty to its parent.",
        questions: [
          "Does the entity's characterisation support a routine, stable return?",
          "Is the royalty consistent with the entity's limited risk profile?",
          "Are intercompany agreements aligned with how decisions are actually made?",
        ],
        approach:
          "Review the functional profile and pricing policy, test profitability against comparables, and set out options such as adjusting the pricing model or the royalty arrangement, with their risks.",
      },
      {
        title: "Preparing an exporter's VAT refund claim",
        situation:
          "An exporter has accumulated significant overpaid VAT and plans to file a refund claim for the year.",
        questions: [
          "Do input tax invoices and export documents reconcile with the VAT returns?",
          "Are there purchases whose input VAT may be challenged?",
          "Is the company ready for the examination that typically follows?",
        ],
        approach:
          "Carry out a pre-claim readiness review, resolve documentation gaps, and prepare an evidence index before the claim is filed.",
      },
    ],
    regulations: [
      "PMK-172/PMK.03/2023 on the arm's length principle in related-party transactions",
      "Law No. 8 of 1983 on VAT, as last amended by Law No. 7 of 2021 (UU HPP)",
      "Article 26 of the Income Tax Law and PER-25/PJ/2018 on the application of tax treaties",
    ],
    insights: ["transfer-pricing-documentation-indonesia", "cross-border-payments-pma-withholding-tax"],
    faqs: [
      {
        question: "Can you review our group's global transfer pricing policy for Indonesia?",
        answer:
          "Yes. We review whether the group policy produces results that fit the Indonesian entity's functions and the documentation requirements that apply locally.",
      },
      {
        question: "When should we start preparing for a VAT refund examination?",
        answer:
          "Before the claim is filed. Reconciliations and supporting documents are much easier to complete before an examination starts.",
      },
    ],
    ctaLabel: "Discuss Your Manufacturing Tax Matter",
    seo: {
      title: "Tax Advisory for Manufacturing Companies in Indonesia",
      description:
        "Tax advisory for manufacturers in Indonesia: related-party pricing, royalties and technical fees, VAT refund readiness, and customs–tax consistency.",
    },
  },
  "energy-resources-infrastructure": {
    headline: "Tax Advisory for Energy, Resources & Infrastructure",
    intro:
      "Large projects bring together foreign contractors, complex financing, and long-term agreements. Tax questions are best addressed while contracts and structures are still being designed.",
    context: [
      "Energy, resources, and infrastructure projects typically involve offshore engineering and construction contractors, personnel working in Indonesia for extended periods, and significant debt financing from related and third parties.",
      "These features create permanent establishment, withholding tax, and interest deductibility questions that can be costly to correct once a project is under way.",
    ],
    issues: [
      {
        title: "Permanent establishment risk",
        text: "Foreign contractors and personnel present in Indonesia may create a taxable presence depending on the applicable treaty and the duration and nature of activities.",
      },
      {
        title: "Cross-border service payments",
        text: "Engineering, procurement, and technical services from abroad require correct characterisation, withholding, and VAT treatment.",
      },
      {
        title: "Financing structure",
        text: "Shareholder loans and project financing are subject to debt-to-equity limits and arm's length requirements for related-party interest.",
      },
      {
        title: "Acquisitions and joint ventures",
        text: "Entering a project through an acquisition or joint venture calls for tax due diligence on historical exposure.",
      },
    ],
    scenarios: [
      {
        title: "Splitting an EPC contract between onshore and offshore scopes",
        situation:
          "A project company is negotiating an engineering, procurement, and construction contract with a foreign contractor that proposes separate onshore and offshore scopes.",
        questions: [
          "Does the split reflect where work is actually performed?",
          "Could the contractor's activities in Indonesia create a permanent establishment?",
          "What withholding and VAT obligations arise for the project company?",
        ],
        approach:
          "Review the draft contract and work plan, map activities by location and duration against the applicable treaty, and recommend contract and documentation changes before signing.",
      },
      {
        title: "Shareholder loan for a new project entity",
        situation: "A new project entity will be funded largely through a loan from its foreign shareholder.",
        questions: [
          "How do debt-to-equity limits affect interest deductibility?",
          "Is the interest rate supportable as arm's length?",
          "Is treaty documentation in place before interest is paid?",
        ],
        approach:
          "Model the capital structure against applicable limits, review loan terms and pricing support, and set out the documentation needed before the first interest payment.",
      },
    ],
    regulations: [
      "PMK-35/PMK.03/2019 on the determination of permanent establishments",
      "PMK-169/PMK.010/2015 on debt-to-equity ratios for income tax purposes",
      "PER-25/PJ/2018 on the application of tax treaties",
    ],
    insights: ["cross-border-payments-pma-withholding-tax", "tax-governance-framework-large-companies"],
    faqs: [
      {
        question: "Can you review contracts before they are signed?",
        answer:
          "Yes, and that is usually the most effective time. Contract terms and work plans largely determine the permanent establishment and withholding outcome.",
      },
      {
        question: "Do you advise on sector-specific fiscal regimes?",
        answer:
          "Some sectors are subject to special regimes or contract terms. We confirm during scoping whether the matter falls within our assistance or needs coordination with specialist advisors.",
      },
    ],
    ctaLabel: "Discuss Your Project Tax Matter",
    seo: {
      title: "Tax Advisory for Energy, Resources & Infrastructure in Indonesia",
      description:
        "Tax advisory for energy, resources, and infrastructure projects in Indonesia: permanent establishment, cross-border services, financing, and transaction due diligence.",
    },
  },
  "trading-distribution": {
    headline: "Tax Advisory for Trading & Distribution Businesses",
    intro:
      "High transaction volumes make reconciliation the core tax discipline for traders and distributors. Small, repeated differences quickly become visible to the tax office.",
    context: [
      "Distributors handle large numbers of sales and purchase transactions, rebates, and promotional arrangements. The tax office increasingly compares reported figures against third-party data such as counterparties' VAT invoices and withholding slips.",
      "Where a distributor buys from a related principal, its expected margin also becomes a transfer pricing question.",
    ],
    issues: [
      {
        title: "Revenue, VAT, and withholding reconciliation",
        text: "Revenue in the ledger, VAT returns, and withholding records should reconcile so that third-party data matches what was reported.",
      },
      {
        title: "Rebates, discounts, and promotions",
        text: "The tax treatment of volume rebates, discounts, and promotional costs depends on how they are structured and documented.",
      },
      {
        title: "Distributor characterisation",
        text: "Whether a distributor is limited-risk or full-fledged affects the margin it is expected to earn on related-party purchases.",
      },
      {
        title: "SP2DK based on third-party data",
        text: "Mismatches with counterparties' data are a common trigger for requests for explanation.",
      },
    ],
    scenarios: [
      {
        title: "An SP2DK on revenue differences",
        situation:
          "A distributor receives an SP2DK pointing to differences between its reported revenue and VAT invoices recorded by its customers.",
        questions: [
          "Do the differences come from timing, returns, or classification?",
          "Do any differences reflect actual reporting errors?",
          "How should the explanation be documented for possible follow-up?",
        ],
        approach:
          "Reconcile the data source to internal records, separate explanations from corrections, and prepare a structured, evidenced response.",
      },
      {
        title: "Margin of a related-party distributor",
        situation: "A distributor that buys mainly from a related principal reports a low operating margin.",
        questions: [
          "Is the distributor limited-risk or does it bear market and inventory risk?",
          "How does its margin compare with independent distributors?",
          "Do agreements reflect who bears marketing and inventory costs?",
        ],
        approach:
          "Analyse functions and risks, benchmark the margin, and recommend adjustments to pricing or agreements where needed.",
      },
    ],
    regulations: [
      "Law No. 8 of 1983 on VAT, as last amended by Law No. 7 of 2021 (UU HPP)",
      "PMK-172/PMK.03/2023 on the arm's length principle in related-party transactions",
      "Law No. 6 of 1983 on General Provisions and Tax Procedures (KUP), as last amended",
    ],
    insights: ["responding-to-an-sp2dk", "transfer-pricing-documentation-indonesia"],
    faqs: [
      {
        question: "Can you help set up a monthly reconciliation routine?",
        answer:
          "Yes. A periodic compliance review can establish a reconciliation routine that catches differences before they lead to enquiries.",
      },
      {
        question: "Are all rebates deductible?",
        answer:
          "Not necessarily. Treatment depends on the structure and documentation of each arrangement. We review the specific terms.",
      },
    ],
    ctaLabel: "Discuss Your Distribution Tax Matter",
    seo: {
      title: "Tax Advisory for Trading & Distribution Companies in Indonesia",
      description:
        "Tax advisory for traders and distributors in Indonesia: revenue and VAT reconciliation, rebates and promotions, distributor transfer pricing, and SP2DK support.",
    },
  },
  "technology-digital": {
    headline: "Tax Advisory for Technology & Digital Businesses",
    intro:
      "Software, cloud services, and digital platforms move value across borders without moving goods. Characterisation is the starting point for most tax questions in the sector.",
    context: [
      "Technology businesses in Indonesia often license software from abroad, pay for cloud and platform services, and receive or provide intragroup support. Each payment has to be characterised before its withholding and VAT treatment can be settled.",
      "Rapidly changing business models also mean that positions taken a few years ago may no longer fit how the business operates today.",
    ],
    issues: [
      {
        title: "Characterising digital payments",
        text: "Whether a payment is for a service, a licence, or the use of software affects withholding and treaty treatment.",
      },
      {
        title: "VAT on offshore services",
        text: "Services and intangibles from abroad used in Indonesia may give rise to VAT that the recipient must account for.",
      },
      {
        title: "Intragroup services and cost allocations",
        text: "Charges from regional or global entities need evidence of benefit and a supportable allocation method.",
      },
      {
        title: "Treaty access",
        text: "Reduced treaty rates depend on documentation and on the recipient meeting beneficial ownership conditions.",
      },
    ],
    scenarios: [
      {
        title: "Licence fee or service fee?",
        situation:
          "An Indonesian subsidiary pays its regional parent a monthly fee covering software access, hosting, and support.",
        questions: [
          "Which parts of the fee are services and which relate to software rights?",
          "What withholding and VAT treatment applies to each part?",
          "Does the agreement describe what is actually provided?",
        ],
        approach:
          "Analyse the agreement and the services actually delivered, recommend a characterisation for each component, and align contract wording and documentation.",
      },
      {
        title: "Regional cost allocation",
        situation: "A regional headquarters allocates shared costs such as IT, finance, and HR to the Indonesian entity.",
        questions: [
          "Does the Indonesian entity receive an identifiable benefit?",
          "Is the allocation key reasonable and consistently applied?",
          "Are duplicative or shareholder activities excluded?",
        ],
        approach:
          "Review the cost pool and allocation keys, test benefit evidence, and prepare documentation supporting deductibility.",
      },
    ],
    regulations: [
      "Article 26 of the Income Tax Law and PER-25/PJ/2018 on the application of tax treaties",
      "Law No. 8 of 1983 on VAT, as last amended by Law No. 7 of 2021 (UU HPP)",
      "PMK-172/PMK.03/2023 on the arm's length principle in related-party transactions",
    ],
    insights: ["cross-border-payments-pma-withholding-tax", "transfer-pricing-documentation-indonesia"],
    faqs: [
      {
        question: "We changed our business model recently. Should we review our tax positions?",
        answer:
          "Yes. Changes in what is sold, from where, and by whom often change the characterisation of payments and the transfer pricing profile.",
      },
      {
        question: "Can you coordinate with our regional tax team?",
        answer: "Yes. Deliverables can be prepared in English and aligned with the group's regional reporting.",
      },
    ],
    ctaLabel: "Discuss Your Digital Tax Matter",
    seo: {
      title: "Tax Advisory for Technology & Digital Companies in Indonesia",
      description:
        "Tax advisory for technology and digital businesses in Indonesia: software and digital payment characterisation, VAT on offshore services, and intragroup charges.",
    },
  },
  "financial-services": {
    headline: "Tax Advisory for Financial Services & Holding Companies",
    intro:
      "Holding structures and intragroup financing concentrate income flows that are closely examined: interest, dividends, and gains on share transfers.",
    context: [
      "Holding companies and financial groups manage capital across entities, lend within the group, and periodically reorganise ownership. Each of these steps has income tax and withholding consequences.",
      "Because individual transactions are often large, a single position can be material. Governance and documentation matter as much as the technical answer.",
    ],
    issues: [
      {
        title: "Interest deductibility",
        text: "Related-party financing is subject to debt-to-equity limits and arm's length requirements.",
      },
      {
        title: "Dividends and repatriation",
        text: "The treatment of dividends depends on the recipient and on conditions under current income tax rules and applicable treaties.",
      },
      {
        title: "Reorganisations and share transfers",
        text: "Restructurings and transfers of shares can trigger tax on gains and require careful sequencing.",
      },
      {
        title: "Governance across entities",
        text: "Multiple entities need consistent processes and a clear view of group-wide tax risk.",
      },
    ],
    scenarios: [
      {
        title: "Simplifying a group structure",
        situation:
          "A group plans to merge several Indonesian subsidiaries and move ownership under a single holding company.",
        questions: [
          "Which steps could trigger tax on gains or transfers?",
          "Are facilities for business mergers available and what conditions apply?",
          "What historical exposures carry over into the surviving entity?",
        ],
        approach:
          "Map the steps, assess the tax consequences of alternative sequences, and identify due diligence and documentation needed before implementation.",
      },
      {
        title: "Cash pooling and intragroup loans",
        situation: "A group centralises liquidity through intragroup loans to and from its Indonesian entities.",
        questions: [
          "Are interest rates supportable as arm's length in both directions?",
          "How do debt-to-equity limits apply to each borrower?",
          "Is withholding applied correctly on interest paid?",
        ],
        approach:
          "Review the financing policy and agreements, test pricing, and set out compliance steps for interest payments.",
      },
    ],
    regulations: [
      "PMK-169/PMK.010/2015 on debt-to-equity ratios for income tax purposes",
      "Law No. 7 of 1983 on Income Tax, as last amended by Law No. 7 of 2021 (UU HPP)",
      "PMK-172/PMK.03/2023 on the arm's length principle in related-party transactions",
    ],
    insights: ["tax-governance-framework-large-companies", "cross-border-payments-pma-withholding-tax"],
    faqs: [
      {
        question: "Can you review a restructuring plan before the board approves it?",
        answer:
          "Yes. We set out the tax consequences of each step and the alternatives, so the board can decide with the tax view in hand.",
      },
      {
        question: "Do you advise regulated financial institutions?",
        answer:
          "We advise on tax matters. Sector regulatory requirements are confirmed during scoping and coordinated with the client's regulatory advisors where needed.",
      },
    ],
    ctaLabel: "Discuss Your Group Tax Matter",
    seo: {
      title: "Tax Advisory for Financial Services & Holding Companies in Indonesia",
      description:
        "Tax advisory for holding companies and financial groups in Indonesia: intragroup financing, dividends, reorganisations, share transfers, and group tax governance.",
    },
  },
  "consumer-healthcare": {
    headline: "Tax Advisory for Consumer Goods & Healthcare",
    intro:
      "Brand-led businesses spend heavily on marketing and rely on group-owned brands and regional supply chains. That combination draws attention to royalties, promotion costs, and margins.",
    context: [
      "Consumer and healthcare companies often pay royalties for brands owned elsewhere in the group while also bearing significant local marketing costs. Who owns and develops the brand's value in Indonesia becomes a central transfer pricing question.",
      "Promotion and entertainment spending, distributor incentives, and high transaction volumes add deductibility and reconciliation questions that recur in audits.",
    ],
    issues: [
      {
        title: "Marketing intangibles and royalties",
        text: "When the local entity bears heavy marketing costs, the royalty it pays and the return it earns should reflect its contribution.",
      },
      {
        title: "Promotion and entertainment costs",
        text: "Deductibility depends on meeting documentation requirements, including nominative lists where required.",
      },
      {
        title: "Regional procurement and principal structures",
        text: "Centralised procurement or principal models shift functions and risks, which should be reflected in local margins.",
      },
      {
        title: "High-volume audit exposure",
        text: "Large numbers of transactions make reconciliation and documentation discipline essential.",
      },
    ],
    scenarios: [
      {
        title: "Royalty alongside heavy local marketing spend",
        situation:
          "A consumer goods subsidiary pays a brand royalty to its parent while funding most of the brand's advertising in Indonesia.",
        questions: [
          "Does the local entity's marketing go beyond what an independent licensee would bear?",
          "Is the royalty rate consistent with that contribution?",
          "Should marketing support or the royalty be revisited?",
        ],
        approach:
          "Analyse marketing functions and spend, benchmark the royalty and the entity's returns, and set out options with their documentation needs.",
      },
      {
        title: "Promotion costs under review",
        situation: "A company expects its promotion and entertainment expenses to be examined in an upcoming audit.",
        questions: [
          "Are nominative lists and supporting documents complete?",
          "Which expenses meet deductibility conditions?",
          "Are there corrections that should be made voluntarily?",
        ],
        approach:
          "Review a sample against deductibility requirements, close documentation gaps, and prepare positions for audit discussions.",
      },
    ],
    regulations: [
      "PMK-172/PMK.03/2023 on the arm's length principle in related-party transactions",
      "Articles 6 and 9 of the Income Tax Law on deductible and non-deductible expenses",
      "PMK-02/PMK.03/2010 on promotion costs deductible from gross income",
    ],
    insights: ["transfer-pricing-documentation-indonesia", "preparing-for-a-tax-audit-in-indonesia"],
    faqs: [
      {
        question: "How do we document marketing contributions for transfer pricing?",
        answer:
          "By recording who decides, funds, and controls marketing activities, and comparing the entity's spend and returns with independent benchmarks.",
      },
      {
        question: "Can you review promotion costs before year-end?",
        answer: "Yes. A pre-closing review gives time to complete documentation before the annual return is filed.",
      },
    ],
    ctaLabel: "Discuss Your Consumer Sector Tax Matter",
    seo: {
      title: "Tax Advisory for Consumer Goods & Healthcare Companies in Indonesia",
      description:
        "Tax advisory for consumer goods and healthcare companies in Indonesia: brand royalties and marketing intangibles, promotion costs, and regional supply chains.",
    },
  },
};

export function getIndustryDetail(slug: string, locale: Locale = "en") {
  return (locale === "id" ? industryDetailsId : industryDetailsEn)[slug];
}
