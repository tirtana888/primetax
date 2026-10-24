import {
  BriefcaseBusiness,
  Globe2,
  Network,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import type { ServiceIcon } from "@/content/services";
import { cn } from "@/lib/utils";

// One outline family (lucide) at a single stroke weight across the site (Brief §4.6).
const serviceIcons: Record<ServiceIcon, LucideIcon> = {
  advisory: BriefcaseBusiness,
  international: Globe2,
  "transfer-pricing": Network,
  controversy: ShieldCheck,
};

export function ServiceGlyph({ icon, className }: { icon: ServiceIcon; className?: string }) {
  const Glyph = serviceIcons[icon];
  return <Glyph className={cn("h-6 w-6", className)} strokeWidth={1.25} aria-hidden="true" />;
}
