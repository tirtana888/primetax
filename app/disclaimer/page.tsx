import { LegalPage } from "@/components/blocks/LegalPage";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Professional Disclaimer",
  description: "Professional disclaimer for information published on the PrimeTax website.",
  path: "/disclaimer",
});

export default function DisclaimerPage() {
  return (
    <LegalPage title="Professional Disclaimer" path="/disclaimer" updated="2026-10-24">
      <p>
        Articles, insights, and other content on this website are published for general information only. They reflect
        our understanding of regulations in force at the date of last review and may not reflect later changes.
      </p>
      <p>
        Content is not tax, legal, accounting, or investment advice and must not be relied on for any specific matter.
        Tax outcomes depend on specific facts, documentation, implementation, and the position taken by the tax
        authority or court.
      </p>
      <p>
        PrimeTax does not guarantee tax savings, the absence of tax risk, or the outcome of any audit, objection,
        appeal, or other dispute. Professional advice is provided only under a signed engagement letter that sets out
        the agreed scope, assumptions, and limitations.
      </p>
      <p>
        References to regulations are summaries. Please refer to the official texts published by the relevant Indonesian
        authorities.
      </p>
      <p>
        PrimeTax is an independent advisory firm and is not affiliated with, or endorsed by, the Directorate General of
        Taxes or any other government authority.
      </p>
    </LegalPage>
  );
}
