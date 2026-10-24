import { BookConsultationView, bookMetadata } from "@/views/BookConsultationView";

export const metadata = bookMetadata("id");

export default function Page() {
  return <BookConsultationView locale="id" />;
}
