import { cn } from "@/lib/utils";

type Tone = "white" | "warm" | "charcoal";

const tones: Record<Tone, string> = {
  white: "bg-white",
  warm: "bg-warm",
  charcoal: "bg-charcoal text-white",
};

export function Section({
  tone = "white",
  className,
  id,
  children,
  bordered,
}: {
  tone?: Tone;
  className?: string;
  id?: string;
  children: React.ReactNode;
  bordered?: boolean;
}) {
  return (
    <section
      id={id}
      className={cn("py-16 md:py-24", tones[tone], bordered && "border-t border-border", className)}
    >
      <div className="container-content">{children}</div>
    </section>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  intro,
  inverse,
  className,
  as: Heading = "h2",
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  inverse?: boolean;
  className?: string;
  as?: "h1" | "h2";
}) {
  return (
    <div className={cn("max-w-3xl", className)}>
      {eyebrow && <p className={cn("eyebrow", inverse && "text-white/70")}>{eyebrow}</p>}
      <Heading
        className={cn(
          Heading === "h1" ? "text-h1" : "text-h2",
          eyebrow && "mt-4",
          inverse && "text-white"
        )}
      >
        {title}
      </Heading>
      {intro && (
        <p className={cn("mt-5 text-lead", inverse ? "text-white/75" : "text-graphite")}>{intro}</p>
      )}
    </div>
  );
}
