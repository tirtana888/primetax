import { Plus } from "lucide-react";

/** FAQ accordion built on <details>, so it works without JavaScript. */
export function Accordion({ items }: { items: { question: string; answer: string }[] }) {
  return (
    <div className="border-t border-border">
      {items.map((item) => (
        <details key={item.question} className="group border-b border-border">
          <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-6 text-[1.0625rem] font-medium [&::-webkit-details-marker]:hidden">
            {item.question}
            <Plus
              className="mt-1 h-4 w-4 shrink-0 text-graphite transition-transform duration-200 group-open:rotate-45"
              strokeWidth={1.5}
              aria-hidden="true"
            />
          </summary>
          <p className="max-w-3xl pb-6 text-graphite">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
