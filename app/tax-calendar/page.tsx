import { TaxCalendarView, taxCalendarMetadata } from "@/views/TaxCalendarView";

export const metadata = taxCalendarMetadata("en");

export default function Page() {
  return <TaxCalendarView locale="en" />;
}
