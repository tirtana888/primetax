import { TeamView, teamMetadata } from "@/views/TeamView";

export const metadata = teamMetadata("id");

export default function Page() {
  return <TeamView locale="id" />;
}
