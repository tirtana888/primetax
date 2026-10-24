import { ServicesView, servicesMetadata } from "@/views/ServicesView";

export const metadata = servicesMetadata("id");

export default function Page() {
  return <ServicesView locale="id" />;
}
