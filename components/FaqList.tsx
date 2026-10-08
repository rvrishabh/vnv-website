import { ChevronDown } from "lucide-react";
import type { Faq } from "../data";

/**
 * Native <details> keeps every answer in the HTML (crawlers and AI assistants read it)
 * while still collapsing visually.
 */
export function FaqList({ faqs, defaultOpenFirst = false }: { faqs: Faq[]; defaultOpenFirst?: boolean }) {
  return (
    <div className="border-t border-steel">
      {faqs.map((f, i) => (
        <details key={f.q} className="group border-b border-steel" open={defaultOpenFirst && i === 0}>
          <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-5 [&::-webkit-details-marker]:hidden">
            <h3 className="font-display text-[18px] md:text-[20px] font-medium text-navy leading-snug">{f.q}</h3>
            <ChevronDown
              size={20}
              strokeWidth={1.75}
              className="mt-1 shrink-0 text-gold-deep transition-transform duration-200 group-open:rotate-180"
            />
          </summary>
          <p className="pb-6 pr-10 text-[15px] leading-relaxed text-ink-soft">{f.a}</p>
        </details>
      ))}
    </div>
  );
}
