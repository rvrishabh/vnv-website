import { Check, Award, ArrowRight } from "lucide-react";
import { Container, Button, Eyebrow, GoldDivider } from "../components/ui";
import { PageHeader } from "../components/PageHeader";
import { Reveal } from "../components/Reveal";
import { Seal } from "../components/Seal";
import { TOOLS } from "../data";

const BADGES = [
  { code: "IBBI", label: "Registered Valuer" },
  { code: "IOV", label: "Member A-31744" },
  { code: "IEI", label: "AM1864656" },
  { code: "C.Eng", label: "Chartered Engineer" },
];

const EXPERTISE = [
  "Mortgage & Loan Security Valuation",
  "Residential, Commercial & Industrial Property Valuation",
  "Land & Agricultural Property Appraisal",
  "Valuation for Legal Disputes & Arbitration",
  "Market Research & Feasibility Studies",
  "Compliance with RBI, IBBI, and Banking Norms",
];

export function About() {
  return (
    <>
      <PageHeader
        eyebrow="The Valuer Behind the Reports"
        title={<>About Er. Shivam Verma</>}
        subtitle="Chartered Engineer and IBBI Registered Valuer with 7+ years across institutional employment and independent practice."
      />

      {/* Bio + photo */}
      <section className="bg-paper">
        <Container className="py-20 md:py-28">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Photo */}
            <Reveal className="lg:col-span-5">
              <div className="lg:sticky lg:top-28">
                {/* Replace this frame's inner block with <img src=... /> when the portrait is supplied */}
                <div className="relative aspect-[4/5] bg-navy-deep rounded-sm overflow-hidden border border-navy/20">
                  <div className="absolute inset-0 blueprint-grid" />
                  {/* corner ticks */}
                  <span className="absolute top-4 left-4 h-5 w-5 border-t border-l border-gold/60" />
                  <span className="absolute top-4 right-4 h-5 w-5 border-t border-r border-gold/60" />
                  <span className="absolute bottom-4 left-4 h-5 w-5 border-b border-l border-gold/60" />
                  <span className="absolute bottom-4 right-4 h-5 w-5 border-b border-r border-gold/60" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
                    <div className="h-28 w-28 rounded-full border-2 border-gold grid place-items-center">
                      <span className="font-display text-[40px] font-semibold text-gold">SV</span>
                    </div>
                    <div className="mt-6 font-display text-[22px] text-white">Er. Shivam Verma</div>
                    <div className="mt-1 font-mono text-[11px] uppercase tracking-[0.22em] text-gold-soft">
                      Chartered Engineer · RV
                    </div>
                    <div className="mt-6 font-mono text-[10px] uppercase tracking-[0.2em] text-white/40">
                      Portrait
                    </div>
                  </div>
                </div>
                <div className="mt-4 flex items-center gap-3 text-ink-soft">
                  <Award size={16} strokeWidth={1.75} className="text-gold-deep" />
                  <span className="font-mono text-[11px] uppercase tracking-[0.16em]">IBBI/RV/02/2023/15442</span>
                </div>
              </div>
            </Reveal>

            {/* Bio */}
            <div className="lg:col-span-7">
              <Reveal>
                <Eyebrow>Professional Summary</Eyebrow>
                <h2 className="mt-5 font-display font-semibold tracking-tightish text-[30px] md:text-[38px] text-navy leading-[1.12]">
                  Accurate, unbiased, and defensible valuation — by training and by record
                </h2>
                <div className="mt-6 flex flex-wrap gap-2.5">
                  {BADGES.map((b) => (
                    <div key={b.code} className="flex items-center gap-2 border border-navy/15 rounded-sm pl-3 pr-3.5 py-1.5">
                      <span className="font-display text-[14px] font-semibold text-navy">{b.code}</span>
                      <span className="h-3 w-px bg-steel-deep" />
                      <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-ink-soft">{b.label}</span>
                    </div>
                  ))}
                </div>
                <p className="mt-7 text-[16px] leading-relaxed text-ink-soft">
                  A highly experienced property valuer with 7+ years across institutional employment and
                  independent practice, delivering accurate, unbiased, and defensible valuation reports for banks,
                  financial institutions, and legal authorities.
                </p>
                <p className="mt-4 text-[16px] leading-relaxed text-ink-soft">
                  Well-versed in valuation methodologies, statutory requirements, and financial modeling across
                  residential, commercial, industrial, and agricultural property — with more than 3,000 valuations
                  conducted for banks, NBFCs, government agencies, and private clients.
                </p>
              </Reveal>

              {/* Expertise checklist */}
              <Reveal delay={80}>
                <div className="mt-10">
                  <GoldDivider />
                  <h3 className="mt-8 font-display text-[22px] text-navy">Core Expertise</h3>
                  <ul className="mt-5 grid sm:grid-cols-2 gap-x-8 gap-y-3.5">
                    {EXPERTISE.map((e) => (
                      <li key={e} className="flex items-start gap-3">
                        <span className="mt-0.5 h-5 w-5 shrink-0 grid place-items-center border border-gold rounded-sm">
                          <Check size={13} strokeWidth={2.5} className="text-gold-deep" />
                        </span>
                        <span className="text-[14.5px] leading-snug text-ink">{e}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>

              {/* Tools */}
              <Reveal delay={120}>
                <div className="mt-10">
                  <h3 className="font-mono text-[11px] uppercase tracking-[0.22em] text-gold-deep">Tools & Platforms</h3>
                  <div className="mt-4 flex flex-wrap gap-2.5">
                    {TOOLS.map((t) => (
                      <span key={t} className="font-mono text-[12px] tracking-wide text-navy bg-white border border-steel rounded-sm px-3.5 py-2">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* Closing CTA */}
      <section className="bg-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 blueprint-grid pointer-events-none" />
        <div className="absolute right-6 top-1/2 -translate-y-1/2 hidden lg:block opacity-80">
          <Seal size={200} variant="watermark" />
        </div>
        <Container className="relative py-16 md:py-20">
          <div className="max-w-2xl">
            <h2 className="font-display font-semibold tracking-tightish text-[28px] md:text-[36px] leading-[1.12]">
              Bring a verified valuer onto your panel
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-white/65">
              Credentials you can verify on record, and reports your credit and audit teams can defend.
            </p>
            <div className="mt-8">
              <Button to="/contact" variant="gold">
                Request a Valuation
                <ArrowRight size={17} strokeWidth={2} />
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
