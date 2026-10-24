import { LegalPage } from "@/components/blocks/LegalPage";
import { site } from "@/config/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Privacy Policy",
  description: "How PrimeTax collects, uses, and protects personal data submitted through this website.",
  path: "/privacy-policy",
});

// DRAFT — to be reviewed by legal counsel against Law No. 27 of 2022 on Personal Data Protection before launch.
export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      path="/privacy-policy"
      updated="2026-10-24"
      intro="How we handle personal data submitted through this website."
    >
      <h2>1. Who we are</h2>
      <p>
        This website is operated by {site.legalName} (&ldquo;PrimeTax&rdquo;, &ldquo;we&rdquo;). We are responsible
        for personal data collected through this website.
      </p>

      <h2>2. Data we collect</h2>
      <ul>
        <li>
          Enquiry details you submit: name, business email, company, job title, area of interest, preferred contact
          method, optional phone number, and a description of your matter.
        </li>
        <li>
          Technical and usage data, such as pages visited and device type, collected through analytics cookies only if
          you consent.
        </li>
      </ul>
      <p>
        Please do not submit tax returns, taxpayer identification numbers, financial statements, or other confidential
        documents through website forms.
      </p>

      <h2>3. How we use it</h2>
      <ul>
        <li>To respond to your enquiry and arrange a discussion.</li>
        <li>To evaluate whether and how we can assist, including conflict checks before an engagement.</li>
        <li>To understand and improve how the website is used, where you have consented to analytics.</li>
      </ul>

      <h2>4. Legal basis</h2>
      <p>
        We process enquiry data on the basis of your consent and to take steps at your request before entering into an
        engagement, in accordance with applicable Indonesian personal data protection law.
      </p>

      <h2>5. Sharing</h2>
      <p>
        We do not sell personal data. We may use service providers (for example, form handling, email, and analytics
        providers) who process data on our behalf under appropriate safeguards.
      </p>

      <h2>6. Retention</h2>
      <p>
        We keep enquiry data only for as long as needed for the purposes above, or as required by law, and then delete
        or anonymise it.
      </p>

      <h2>7. Your rights</h2>
      <p>
        You may request access to, correction of, or deletion of your personal data, or withdraw consent, by contacting{" "}
        <a href={`mailto:${site.contact.privacyEmail}`}>{site.contact.privacyEmail}</a>. You can change your cookie
        choice at any time using &ldquo;Cookie Settings&rdquo; in the website footer.
      </p>

      <h2>8. Cookies</h2>
      <p>
        We use essential browser storage to remember your cookie choice. Analytics cookies are set only after you
        accept them.
      </p>

      <h2>9. Changes</h2>
      <p>We may update this policy. The date at the top of this page shows when it was last revised.</p>
    </LegalPage>
  );
}
