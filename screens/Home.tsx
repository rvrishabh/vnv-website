import {
  Landmark,
  Building2,
  Scale,
  Sprout,
  LineChart,
  ShieldCheck,
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
} from "lucide-react";
import { Container, Button, Eyebrow, CredChip } from "../components/ui";
import { Seal } from "../components/Seal";
import { Reveal } from "../components/Reveal";
import { BankLogo } from "../components/BankLogo";
import { ServiceImage } from "../components/ServiceImage";
import { BANKS, SERVICES, STATS } from "../data";

const ICONS: Record<string, typeof Landmark> = {
  Landmark,
  Building2,
  Scale,
  Sprout,
  LineChart,
  ShieldCheck,
};

function Skyline({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className={className} aria-hidden="true">
      <path
        d="M0 120 V70 h60 v-14 h40 v34 h50 V52 h36 v-22 h30 v40 h44 V64 h54 v-30 h26 v46 h60 V40 h40 v-20 h28 v56 h70 V58 h48 v34 h40 V46 h34 v-26 h30 v52 h66 V72 h52 v-24 h30 v40 h60 V36 h38 v-18 h26 v62 h72 V66 h50 v26 h44 V50 h32 v-24 h28 v54 h64 V70 h60 v50 Z"
        fill="rgba(201,168,76,0.10)"
        stroke="rgba(201,168,76,0.28)"
        strokeWidth="1"
      />
    </svg>
  );
}

export function Home() {
  return (
    <>
      {/* ============ HERO ============ */}
      <section className="relative bg-navy-deep text-white overflow-hidden">
        <div className="absolute inset-0 blueprint-grid pointer-events-none" />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(115% 80% at 78% 8%, rgba(21,48,95,0.85), transparent 60%)" }}
        />
        {/* seal watermark */}
        <div className="absolute right-[-60px] top-1/2 -translate-y-1/2 hidden xl:block opacity-90 pointer-events-none">
          <Seal size={420} variant="watermark" />
        </div>

        <Container className="relative">
          <div className="max-w-3xl py-24 md:py-32">
            <div className="hero-up" style={{ animationDelay: "60ms" }}>
              <Eyebrow tone="light">IBBI Registered Valuer · Agra & Noida</Eyebrow>
            </div>

            <h1
              className="hero-up font-display font-semibold tracking-tightish leading-[1.06] mt-7 text-[40px] md:text-[58px]"
              style={{ animationDelay: "160ms" }}
            >
              India's Trusted Property Valuation Partner for{" "}
              <span className="text-gold italic">Banks & Financial Institutions</span>
            </h1>

            <p
              className="hero-up mt-7 text-[16px] md:text-[18px] leading-relaxed text-white/70 max-w-2xl"
              style={{ animationDelay: "260ms" }}
            >
              Accurate, unbiased, and defensible valuation reports for secured lending — prepared by an
              IBBI Registered Valuer with over seven years of institutional and independent practice.
            </p>

            {/* credential strip */}
            <div
              className="hero-up mt-8 flex flex-wrap items-center gap-x-7 gap-y-3"
              style={{ animationDelay: "340ms" }}
            >
              {["IBBI Registered Valuer", "7+ Years of Experience", "3,000+ Valuations Delivered"].map((t, i) => (
                <div key={t} className="flex items-center gap-2.5">
                  {i > 0 && <span className="h-3.5 w-px bg-white/20 -ml-4 mr-1 hidden sm:block" />}
                  <BadgeCheck size={17} strokeWidth={1.75} className="text-gold" />
                  <span className="font-mono text-[12px] tracking-wide text-white/80">{t}</span>
                </div>
              ))}
            </div>

            <div className="hero-up mt-10 flex flex-col sm:flex-row gap-4" style={{ animationDelay: "440ms" }}>
              <Button to="/contact" variant="gold">
                Request a Valuation
                <ArrowRight size={17} strokeWidth={2} />
              </Button>
              <Button to="/empanelled-banks" variant="outline-light">
                View Empanelments
              </Button>
            </div>
          </div>
        </Container>

        <Skyline className="relative w-full h-[90px] md:h-[120px]" />
      </section>

      {/* ============ TRUST BAR ============ */}
      <section className="bg-paper border-b border-steel">
        <Container className="py-10">
          <div className="flex flex-col lg:flex-row lg:items-center gap-7">
            <div className="shrink-0 lg:w-44">
              <div className="font-mono text-[11px] uppercase tracking-[0.24em] text-gold-deep">Empanelled With</div>
              <div className="mt-1 font-display text-[19px] text-navy">8 Institutions</div>
            </div>
            <div className="hidden lg:block w-px self-stretch bg-steel" />
            <div className="flex-1 flex flex-wrap items-center gap-x-8 gap-y-5">
              {BANKS.map((b) => (
                <div key={b.short} className="flex items-center gap-3">
                  <div className="h-10 w-14 shrink-0 grid place-items-center border border-navy/15 rounded-sm bg-white px-1.5">
                    <BankLogo bank={b} className="h-7 w-full max-w-[52px]" />
                  </div>
                  <span className="font-sans text-[13px] text-ink-soft max-w-[120px] leading-tight">{b.name}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ============ SERVICES ============ */}
      <section className="bg-paper-warm relative">
        <div className="absolute inset-0 blueprint-grid-light pointer-events-none" />
        <Container className="relative py-20 md:py-28">
          <Reveal>
            <div className="max-w-2xl">
              <Eyebrow>What We Do</Eyebrow>
              <h2 className="mt-5 font-display font-semibold tracking-tightish text-[32px] md:text-[42px] text-navy leading-[1.1]">
                Valuation services built for institutional trust
              </h2>
              <p className="mt-5 text-[16px] leading-relaxed text-ink-soft">
                A complete valuation practice covering every asset class banks lend against — each engagement
                delivered to regulatory standard and bank-ready format.
              </p>
            </div>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES.map((s, i) => {
              const Icon = ICONS[s.icon];
              return (
                <Reveal key={s.title} delay={(i % 3) * 90}>
                  <article className="group h-full bg-white border border-steel rounded-sm overflow-hidden transition-colors duration-300 hover:border-gold">
                    <div className="relative aspect-[16/10] overflow-hidden border-b border-steel">
                      <ServiceImage
                        service={s}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/55 via-transparent to-transparent" />
                      <div className="absolute bottom-3 left-3 h-10 w-10 grid place-items-center border border-white/30 rounded-sm bg-navy/70 backdrop-blur-sm">
                        <Icon size={18} strokeWidth={1.6} className="text-gold" />
                      </div>
                    </div>
                    <div className="p-7">
                    <h3 className="font-display text-[20px] font-medium text-navy leading-snug">{s.title}</h3>
                    <div className="mt-3 h-px w-8 bg-gold transition-all duration-300 group-hover:w-14" />
                    <p className="mt-4 text-[14px] leading-relaxed text-ink-soft">{s.blurb}</p>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={120}>
            <div className="mt-12 flex justify-center">
              <Button to="/services" variant="outline-navy">
                Explore All Services
                <ArrowUpRight size={17} strokeWidth={2} />
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ============ CREDENTIALS BANNER ============ */}
      <section className="relative bg-navy text-white overflow-hidden">
        <div className="absolute inset-0 blueprint-grid pointer-events-none" />
        <Container className="relative py-16 md:py-20">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <Eyebrow tone="light">Regulated · Certified · Accountable</Eyebrow>
              <h2 className="mt-5 font-display font-semibold tracking-tightish text-[30px] md:text-[38px] leading-[1.12]">
                Registered, certified, and accountable for every report
              </h2>
              <p className="mt-5 text-[15px] leading-relaxed text-white/65 max-w-xl">
                Er. Shivam Verma is an IBBI Registered Valuer (Land &amp; Building) and a member of IOV, IOV RVF,
                and the Institution of Engineers (India) — credentials a bank can verify on record.
              </p>
              <div className="mt-9 grid grid-cols-2 sm:grid-cols-3 gap-3 max-w-2xl">
                <CredChip label="IBBI Reg. No." value="02/2023/15442" />
                <CredChip label="IOV No." value="A-31744" />
                <CredChip label="IEI No." value="AM1864656" />
                <CredChip label="IOV RVF" value="M/L&B/10726" />
                <CredChip label="Category" value="Land & Building" />
                <CredChip label="Member" value="IOV · IEI · RVF" />
              </div>
            </div>
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute inset-0 rounded-full" style={{ boxShadow: "0 0 80px rgba(201,168,76,0.18)" }} />
                <Seal size={240} variant="badge" className="relative" />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ============ STATS ============ */}
      <section className="bg-paper border-b border-steel">
        <Container className="py-14">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-steel">
            {STATS.map((s, i) => (
              <Reveal key={s.label} delay={i * 80}>
                <div className="px-6 py-6 lg:py-2 text-center">
                  <div className="font-display font-semibold text-gold-deep text-[38px] md:text-[46px] leading-none tracking-tightish">
                    {s.value}
                  </div>
                  <div className="mt-3 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-soft">{s.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ============ CTA ============ */}
      <section className="bg-paper-warm">
        <Container className="py-20 md:py-24">
          <div className="relative overflow-hidden rounded-sm bg-navy-deep text-white px-8 md:px-16 py-16 md:py-20">
            <div className="absolute inset-0 blueprint-grid pointer-events-none" />
            <div className="absolute right-[-40px] bottom-[-40px] opacity-80 pointer-events-none hidden md:block">
              <Seal size={220} variant="watermark" />
            </div>
            <div className="relative max-w-2xl">
              <Eyebrow tone="light">Empanelment Enquiry</Eyebrow>
              <h2 className="mt-5 font-display font-semibold tracking-tightish text-[32px] md:text-[44px] leading-[1.08]">
                Looking to empanel a valuation firm? Let's talk.
              </h2>
              <p className="mt-5 text-[16px] leading-relaxed text-white/70">
                Add a registered, audit-ready valuer to your bank's panel — with the documentation rigor and
                turnaround your credit teams depend on.
              </p>
              <div className="mt-9">
                <Button to="/contact" variant="gold">
                  Get in Touch
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
