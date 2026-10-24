import { DisclaimerView, disclaimerMetadata } from "@/views/LegalViews";

export const metadata = disclaimerMetadata("en");

export default function Page() {
  return <DisclaimerView locale="en" />;
}
