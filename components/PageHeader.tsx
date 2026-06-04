import type { ReactNode } from "react";
import { Container, Eyebrow } from "./ui";
import { Seal } from "./Seal";

interface PageHeaderProps {
  eyebrow: string;
  title: ReactNode;
  subtitle?: string;
}

export function PageHeader({ eyebrow, title, subtitle }: PageHeaderProps) {
  return (
    <section className="relative bg-navy-deep text-white overflow-hidden">
      <div className="absolute inset-0 blueprint-grid pointer-events-none" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(120% 90% at 85% 0%, rgba(21,48,95,0.7), transparent 60%)" }}
      />
      <div className="absolute right-[-50px] top-1/2 -translate-y-1/2 hidden lg:block opacity-70 pointer-events-none">
        <Seal size={300} variant="watermark" />
      </div>
      <Container className="relative">
        <div className="max-w-3xl py-16 md:py-24">
          <Eyebrow tone="light">{eyebrow}</Eyebrow>
          <h1 className="mt-6 font-display font-semibold tracking-tightish leading-[1.08] text-[36px] md:text-[52px]">
            {title}
          </h1>
          {subtitle && <p className="mt-6 text-[16px] md:text-[18px] leading-relaxed text-white/70 max-w-2xl">{subtitle}</p>}
        </div>
      </Container>
      <div className="h-[3px] w-full" style={{ background: "linear-gradient(90deg, transparent, var(--gold) 30%, var(--gold) 70%, transparent)" }} />
    </section>
  );
}
