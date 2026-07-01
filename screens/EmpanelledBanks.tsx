import { Building2, ShieldCheck, ArrowRight, CheckCircle2 } from "lucide-react";
import { Container, Button, Eyebrow } from "../components/ui";
import { PageHeader } from "../components/PageHeader";
import { Reveal } from "../components/Reveal";
import { Stagger, StaggerItem } from "../components/Stagger";
import { MotionCard } from "../components/MotionCard";
import { Seal } from "../components/Seal";
import { BankLogo } from "../components/BankLogo";
import { BANKS, CATEGORY_ORDER } from "../data";

const CATEGORY_META: Record<string, { tag: string; note: string }> = {
  "Public Sector": { tag: "Public Sector Bank", note: "Government-owned scheduled commercial banks" },
  "Regional Rural Bank": { tag: "Regional Rural Bank", note: "RBI-regulated regional rural banks serving rural India" },
  "Private Sector": { tag: "Private Sector Bank", note: "Privately owned scheduled commercial banks" },
  "Small Finance Bank": { tag: "Small Finance Bank", note: "RBI-licensed small finance institutions" },
  "Housing Finance": { tag: "Housing Finance Co.", note: "Specialised housing finance lenders" },
};

export function EmpanelledBanks() {
  return (
    <>
      <PageHeader
        eyebrow="Empanelment · The Credibility That Matters"
        title={<>Banks &amp; Financial Institutions We Serve</>}
        subtitle="V.N.V Engineers is empanelled with leading public sector banks, private sector banks, small finance banks, and housing finance companies across India."
      />

      {/* Trust ribbon */}
      <section className="bg-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 blueprint-grid pointer-events-none" />
        <Container className="relative py-7">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-x-10 gap-y-3 text-center">
            <div className="flex items-center gap-3">
              <ShieldCheck size={18} strokeWidth={1.75} className="text-gold" />
              <span className="font-mono text-[12px] tracking-wide text-white/85">{BANKS.length} Institutions Empanelled</span>
            </div>
            <span className="hidden sm:block h-4 w-px bg-white/20" />
            <div className="flex items-center gap-3">
              <CheckCircle2 size={18} strokeWidth={1.75} className="text-gold" />
              <span className="font-mono text-[12px] tracking-wide text-white/85">IBBI Registered Valuer</span>
            </div>
            <span className="hidden sm:block h-4 w-px bg-white/20" />
            <div className="flex items-center gap-3">
              <Building2 size={18} strokeWidth={1.75} className="text-gold" />
              <span className="font-mono text-[12px] tracking-wide text-white/85">3,000+ Valuations Delivered</span>
            </div>
          </div>
        </Container>
      </section>

      {/* Bank grid grouped by category */}
      <section className="relative bg-paper">
        <Container className="py-20 md:py-24">
          {CATEGORY_ORDER.map((cat, gi) => {
            const banks = BANKS.filter((b) => b.category === cat);
            if (!banks.length) return null;
            const meta = CATEGORY_META[cat];
            return (
              <div key={cat} className={gi > 0 ? "mt-16" : ""}>
                <Reveal>
                  <div className="flex items-end justify-between gap-4 border-b border-steel pb-4">
                    <div>
                      <Eyebrow>{meta.tag}</Eyebrow>
                      <p className="mt-2 text-[13.5px] text-ink-soft">{meta.note}</p>
                    </div>
                    <span className="font-display text-[15px] text-navy/40 shrink-0">
                      {String(banks.length).padStart(2, "0")}
                    </span>
                  </div>
                </Reveal>

                <Stagger className="mt-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {banks.map((b) => (
                    <StaggerItem key={b.short}>
                      <MotionCard className="h-full">
                      <article className="group h-full bg-white border border-steel rounded-sm p-7 transition-colors duration-300 hover:border-gold">
                        <div className="flex items-center justify-between">
                          <div className="h-16 w-[88px] grid place-items-center border border-navy/15 rounded-sm bg-white px-2 group-hover:border-gold transition-colors duration-300">
                            <BankLogo bank={b} className="h-10 w-full max-w-[76px]" />
                          </div>
                          <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-gold-deep border border-gold/40 rounded-sm px-2.5 py-1">
                            {meta.tag}
                          </span>
                        </div>
                        <h3 className="mt-6 font-display text-[21px] text-navy leading-snug">{b.name}</h3>
                        <div className="mt-4 flex items-center gap-2 text-ink-soft">
                          <CheckCircle2 size={15} strokeWidth={1.75} className="text-gold-deep" />
                          <span className="font-mono text-[11px] uppercase tracking-[0.14em]">Empanelled · Active</span>
                        </div>
                      </article>
                      </MotionCard>
                    </StaggerItem>
                  ))}
                </Stagger>
              </div>
            );
          })}
        </Container>
      </section>

      {/* Bottom CTA */}
      <section className="bg-paper-warm">
        <Container className="pb-24">
          <div className="relative overflow-hidden rounded-sm bg-navy-deep text-white px-8 md:px-14 py-14 md:py-16">
            <div className="absolute inset-0 blueprint-grid pointer-events-none" />
            <div className="absolute right-[-30px] bottom-[-30px] opacity-80 hidden md:block pointer-events-none">
              <Seal size={200} variant="watermark" />
            </div>
            <div className="relative grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8">
                <Eyebrow tone="light">For Lending Institutions</Eyebrow>
                <h2 className="mt-5 font-display font-semibold tracking-tightish text-[28px] md:text-[38px] leading-[1.1]">
                  Want to empanel V.N.V Engineers with your bank?
                </h2>
                <p className="mt-4 text-[15px] leading-relaxed text-white/65 max-w-xl">
                  We'll share our registration documents, sample reports, and turnaround commitments for your panel
                  committee's review.
                </p>
              </div>
              <div className="lg:col-span-4 lg:flex lg:justify-end">
                <Button to="/contact" variant="gold">
                  Contact Us
                  <ArrowRight size={17} strokeWidth={2} />
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
