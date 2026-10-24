import { BookConsultationView, bookMetadata } from "@/views/BookConsultationView";

export const metadata = bookMetadata("en");

export default function Page() {
  return <BookConsultationView locale="en" />;
}
