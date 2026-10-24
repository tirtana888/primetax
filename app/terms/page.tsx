import Link from "next/link";
import { LegalPage } from "@/components/blocks/LegalPage";
import { site } from "@/config/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Website Terms",
  description: "Terms governing the use of the PrimeTax website.",
  path: "/terms",
});

// DRAFT — to be reviewed by legal counsel before launch.
export default function TermsPage() {
  return (
    <LegalPage title="Website Terms" path="/terms" updated="2026-10-24">
      <h2>1. Use of this website</h2>
      <p>
        This website is provided by {site.legalName} for general information about our firm and services. By using
        it, you agree to these terms.
      </p>

      <h2>2. No advisory relationship</h2>
      <p>
        Content on this website is general information and is not tax, legal, or other professional advice. Using the
        website or submitting an enquiry does not create an advisory relationship. Advice is provided only under a
        signed engagement letter. See our <Link href="/disclaimer">professional disclaimer</Link>.
      </p>

      <h2>3. Accuracy</h2>
      <p>
        We aim to keep content accurate as at the date shown, but tax regulations change frequently. We do not warrant
        that content is complete or current at the time you read it.
      </p>

      <h2>4. Intellectual property</h2>
      <p>
        Content, design, and brand assets on this website belong to PrimeTax or its licensors. You may share links to
        our content and quote brief extracts with attribution, but may not reproduce substantial parts without
        permission.
      </p>

      <h2>5. External links</h2>
      <p>We are not responsible for the content of external websites linked from this site.</p>

      <h2>6. Liability</h2>
      <p>
        To the extent permitted by law, PrimeTax is not liable for any loss arising from reliance on website content.
      </p>

      <h2>7. Governing law</h2>
      <p>These terms are governed by the laws of the Republic of Indonesia.</p>
    </LegalPage>
  );
}
