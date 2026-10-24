import { PrivacyView, privacyMetadata } from "@/views/LegalViews";

export const metadata = privacyMetadata("id");

export default function Page() {
  return <PrivacyView locale="id" />;
}
