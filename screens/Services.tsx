import {
  Landmark,
  Building2,
  Scale,
  Sprout,
  LineChart,
  ShieldCheck,
  Check,
  ArrowRight,
} from "lucide-react";
import { Container, Button, Eyebrow } from "../components/ui";
import { PageHeader } from "../components/PageHeader";
import { motion, useReducedMotion } from "framer-motion";
import { Reveal } from "../components/Reveal";
import { transition } from "../lib/motion";
import { ServiceImage } from "../components/ServiceImage";
import { SERVICES } from "../data";

const ICONS: Record<string, typeof Landmark> = {
  Landmark,
  Building2,
  Scale,
  Sprout,
  LineChart,
  ShieldCheck,
};

export function Services() {
  const reduceMotion = useReducedMotion();

  return (
    <>
      <PageHeader
        eyebrow="Our Practice"
        title={<>Valuation Services</>}
        subtitle="A complete valuation practice covering every asset class banks and financial institutions lend against — delivered to regulatory standard."
      />

      <section className="bg-paper">
        <Container className="py-20 md:py-28">
          <div className="space-y-20 md:space-y-28">
            {SERVICES.map((s, i) => {
              const Icon = ICONS[s.icon];
              const flip = i % 2 === 1;
              return (
                <Reveal key={s.title}>
                  <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                    {/* Visual panel */}
                    <div className={`${flip ? "lg:order-2" : ""}`}>
                      <motion.div
                        className="relative aspect-[4/3] rounded-sm overflow-hidden border border-navy/20"
                        initial={reduceMotion ? false : { opacity: 0, scale: 0.97 }}
                        whileInView={reduceMotion ? undefined : { opacity: 1, scale: 1 }}
                        viewport={{ once: true, amount: 0.25 }}
                        transition={transition}
                      >
                        <ServiceImage service={s} className="absolute inset-0 h-full w-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-tr from-navy-deep/80 via-navy-deep/35 to-navy-deep/10" />
                        <div className="absolute inset-0 blueprint-grid opacity-40 pointer-events-none" />
                        <span className="absolute top-6 left-6 font-display text-[80px] md:text-[110px] font-semibold leading-none text-white/[0.12]">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <div className="absolute bottom-5 left-5 flex items-center gap-3">
                          <div className="h-12 w-12 grid place-items-center border border-gold/50 rounded-sm bg-navy/50 backdrop-blur-sm">
                            <Icon size={22} strokeWidth={1.4} className="text-gold" />
                          </div>
                          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-gold-soft">
                            V.N.V Engineers
                          </span>
                        </div>
                      </motion.div>
                    </div>

                    {/* Text */}
                    <div className={`${flip ? "lg:order-1" : ""}`}>
                      <Eyebrow>Service {String(i + 1).padStart(2, "0")}</Eyebrow>
                      <h2 className="mt-5 font-display font-semibold tracking-tightish text-[28px] md:text-[36px] text-navy leading-[1.12]">
                        {s.title}
                      </h2>
                      <p className="mt-5 text-[16px] leading-relaxed text-ink-soft">{s.detail}</p>
                      <ul className="mt-7 space-y-3">
                        {s.points.map((p) => (
                          <li key={p} className="flex items-start gap-3">
                            <span className="mt-0.5 h-5 w-5 shrink-0 grid place-items-center border border-gold rounded-sm">
                              <Check size={13} strokeWidth={2.5} className="text-gold-deep" />
                            </span>
                            <span className="text-[14.5px] text-ink">{p}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Compliance strip */}
      <section className="bg-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 blueprint-grid pointer-events-none" />
        <Container className="relative py-14">
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 text-center md:text-left">
            <div className="h-14 w-14 shrink-0 grid place-items-center border border-gold/50 rounded-sm">
              <ShieldCheck size={26} strokeWidth={1.5} className="text-gold" />
            </div>
            <p className="font-display text-[20px] md:text-[26px] leading-snug">
              All reports comply with <span className="text-gold">RBI guidelines</span>,{" "}
              <span className="text-gold">IBBI regulations</span>, and{" "}
              <span className="text-gold">ICAI valuation standards</span>.
            </p>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-paper-warm">
        <Container className="py-20">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-display font-semibold tracking-tightish text-[30px] md:text-[40px] text-navy leading-[1.1]">
              Need a valuation for a specific asset?
            </h2>
            <p className="mt-5 text-[16px] leading-relaxed text-ink-soft">
              Tell us the property type and lending requirement — we'll confirm scope, format, and turnaround.
            </p>
            <div className="mt-8 flex justify-center">
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
