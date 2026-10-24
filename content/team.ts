/**
 * Team profiles. Publish only verified people with their consent, verified
 * credentials, and an approved, licensed photograph. Never add placeholders.
 * While this list is empty the Team page shows a neutral holding message.
 */
export interface TeamMember {
  name: string;
  role: string;
  focus: string[];
  bio: string;
  credentials: string[];
  photo?: string;
  linkedin?: string;
}

export const team: TeamMember[] = [];
