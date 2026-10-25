import { TaxCalendarView, taxCalendarMetadata } from "@/views/TaxCalendarView";

export const metadata = taxCalendarMetadata("id");

export default function Page() {
  return <TaxCalendarView locale="id" />;
}
