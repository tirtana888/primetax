export interface Industry {
  slug: string;
  name: string;
  summary: string;
  issues: string[];
  services: string[];
}

export const industries: Industry[] = [
  {
    slug: "manufacturing",
    name: "Manufacturing",
    summary:
      "Foreign-invested manufacturers with imported inputs, export sales, and technology licensed from affiliates.",
    issues: [
      "Pricing of raw materials and finished goods with related parties",
      "Royalties and technical assistance fees paid to affiliates",
      "VAT refund readiness for exporters",
      "Customs and bonded-zone interactions with tax positions",
    ],
    services: ["transfer-pricing", "international-tax-pma", "tax-controversy"],
  },
  {
    slug: "energy-resources-infrastructure",
    name: "Energy, Resources & Infrastructure",
    summary:
      "Capital-intensive projects involving cross-border contractors, project financing, and long-term agreements.",
    issues: [
      "Permanent establishment risk for foreign contractors",
      "Withholding tax on cross-border services and interest",
      "Debt-to-equity and financing structure",
      "Tax due diligence for acquisitions and joint ventures",
    ],
    services: ["international-tax-pma", "tax-advisory", "tax-controversy"],
  },
  {
    slug: "trading-distribution",
    name: "Trading & Distribution",
    summary: "High-volume businesses where reconciliation between ledgers, VAT, and withholding tax is critical.",
    issues: [
      "Reconciliation of revenue, VAT invoices, and withholding slips",
      "Treatment of rebates, discounts, and promotional costs",
      "Characterisation of distributors for transfer pricing",
      "SP2DK enquiries based on third-party data",
    ],
    services: ["tax-advisory", "transfer-pricing", "tax-controversy"],
  },
  {
    slug: "technology-digital",
    name: "Technology & Digital Services",
    summary: "Businesses with software licensing, cloud services, and cross-border digital transactions.",
    issues: [
      "Characterisation of software and digital service payments",
      "VAT on offshore services utilised in Indonesia",
      "Intragroup service charges and cost allocations",
      "Treaty application for technology-related payments",
    ],
    services: ["international-tax-pma", "transfer-pricing", "tax-advisory"],
  },
  {
    slug: "financial-services",
    name: "Financial Services & Holding Companies",
    summary: "Holding structures, intragroup financing, and investment vehicles with complex income flows.",
    issues: [
      "Interest deductibility and related-party financing",
      "Dividend repatriation and withholding tax",
      "Group restructurings and share transfers",
      "Tax governance across multiple entities",
    ],
    services: ["tax-advisory", "international-tax-pma", "transfer-pricing"],
  },
  {
    slug: "consumer-healthcare",
    name: "Consumer Goods & Healthcare",
    summary: "Brand-driven businesses with marketing intangibles, regional supply chains, and promotional spend.",
    issues: [
      "Marketing intangibles and royalty arrangements",
      "Deductibility of promotion and entertainment expenses",
      "Regional procurement and principal structures",
      "Audit exposure on high-volume transactions",
    ],
    services: ["transfer-pricing", "tax-advisory", "tax-controversy"],
  },
];
