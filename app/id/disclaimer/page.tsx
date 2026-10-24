import { DisclaimerView, disclaimerMetadata } from "@/views/LegalViews";

export const metadata = disclaimerMetadata("id");

export default function Page() {
  return <DisclaimerView locale="id" />;
}
