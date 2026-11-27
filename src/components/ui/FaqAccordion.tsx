import { ChevronDown } from "lucide-react";
import type { FaqItem } from "@/content/faq";

export default function FaqAccordion({ items }: { items: FaqItem[] }) {
  return (
    <div className="divide-y divide-border rounded-2xl border border-border bg-surface">
      {items.map((item) => (
        <details key={item.question} className="group">
          <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-left font-semibold hover:text-accent-text [&::-webkit-details-marker]:hidden">
            <span>{item.question}</span>
            <ChevronDown
              className="h-4 w-4 shrink-0 text-muted transition-transform group-open:rotate-180"
              aria-hidden
            />
          </summary>
          <div className="px-5 pb-5 text-sm text-muted">
            <p>{item.answer}</p>
          </div>
        </details>
      ))}
    </div>
  );
}
