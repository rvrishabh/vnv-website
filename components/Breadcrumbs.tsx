import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Container } from "./ui";

export function Breadcrumbs({ items }: { items: { name: string; to?: string }[] }) {
  const trail = [{ name: "Home", to: "/" }, ...items];
  return (
    <nav aria-label="Breadcrumb" className="bg-paper border-b border-steel">
      <Container>
        <ol className="flex flex-wrap items-center gap-1.5 py-3 font-mono text-[11px] uppercase tracking-[0.14em] text-ink-soft">
          {trail.map((item, i) => (
            <li key={item.name} className="flex items-center gap-1.5">
              {i > 0 && <ChevronRight size={12} strokeWidth={2} className="text-gold-deep" />}
              {item.to && i < trail.length - 1 ? (
                <Link to={item.to} className="hover:text-gold-deep transition-colors">
                  {item.name}
                </Link>
              ) : (
                <span aria-current="page" className="text-navy">
                  {item.name}
                </span>
              )}
            </li>
          ))}
        </ol>
      </Container>
    </nav>
  );
}
