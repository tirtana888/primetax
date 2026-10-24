import { TermsView, termsMetadata } from "@/views/LegalViews";

export const metadata = termsMetadata("id");

export default function Page() {
  return <TermsView locale="id" />;
}
