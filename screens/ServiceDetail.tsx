import { ArrowRight, Check, FileText } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { CtaBand } from "../components/CtaBand";
import { FaqList } from "../components/FaqList";
import { PageHeader } from "../components/PageHeader";
import { Reveal } from "../components/Reveal";
import { ServiceImage } from "../components/ServiceImage";
import { SERVICE_ICONS } from "../components/serviceIcons";
import { ParallaxImage, Tilt } from "../components/ScrollMotion";
import { Container, Eyebrow } from "../components/ui";
import { BANKS, CITY_PAGES, FIRM, SERVICES, getServiceBySlug } from "../data";
import { NotFound } from "./NotFound";

const PROCESS_STEPS = [
  { title: "Share details & documents", text: "Send the property type, location, purpose of valuation and the available title and plan documents." },
  { title: "Site inspection", text: "The property is inspected in person — measured, photographed and GPS-tagged, with boundaries and construction checked against the documents." },
  { title: "Market & circle-rate research", text: "Comparable sale and rental evidence, the applicable circle rate and local factors are analysed." },
  { title: "Report & review", text: "The report is prepared in the required bank or independent format, then checked before signing." },
  { title: "Delivery", text: "The signed report with fair market, realisable and distress values (as applicable) is delivered to the bank or client." },
];

export function ServiceDetail() {
  const { slug = "" } = useParams();
  const service = getServiceBySlug(slug);
  if (!service) return <NotFound />;

  const Icon = SERVICE_ICONS[service.icon];
  const others = SERVICES.filter((s) => s.slug !== service.slug);

  return (
    <>
      <PageHeader eyebrow="Valuation Service" title={<>{service.title}</>} subtitle={service.blurb} />
      <Breadcrumbs items={[{ name: "Services", to: "/services" }, { name: service.title }]} />

      {/* Overview */}
      <section className="bg-paper">
        <Container className="py-20 md:py-24">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            <Reveal>
              <Tilt className="rounded-sm" max={5}>
              <div className="relative aspect-[4/3] rounded-sm overflow-hidden border border-navy/20">
                <ParallaxImage>
                  <ServiceImage service={service} eager className="h-full w-full object-cover" />
                </ParallaxImage>
                <div className="absolute inset-0 bg-gradient-to-tr from-navy-deep/70 via-navy-deep/20 to-transparent" />
                <div className="absolute bottom-5 left-5 h-12 w-12 grid place-items-center border border-gold/50 rounded-sm bg-navy/50 backdrop-blur-sm">
                  <Icon size={22} strokeWidth={1.4} className="text-gold" />
                </div>
              </div>
              </Tilt>
            </Reveal>
            <Reveal>
              <Eyebrow>Overview</Eyebrow>
              <h2 className="mt-5 font-display font-semibold tracking-tightish text-[28px] md:text-[36px] text-navy leading-[1.12]">
                What this valuation covers
              </h2>
              <p className="mt-5 text-[16px] leading-relaxed text-ink-soft">{service.detail}</p>
              <p className="mt-4 text-[16px] leading-relaxed text-ink-soft">
                Every report is prepared and signed by {FIRM.valuer}, Chartered Engineer and IBBI Registered Valuer
                (Land &amp; Building), registration no. {FIRM.ibbiRegNo}, from offices in{" "}
                {CITY_PAGES.map((c, i) => (
                  <span key={c.slug}>
                    {i > 0 && " and "}
                    <Link to={`/${c.slug}`} className="text-gold-deep underline underline-offset-2 hover:text-navy">
                      {c.city}
                    </Link>
                  </span>
                ))}
                .
              </p>
              <ul className="mt-7 space-y-3">
                {service.points.map((p) => (
                  <li key={p} className="flex items-start gap-3">
                    <span className="mt-0.5 h-5 w-5 shrink-0 grid place-items-center border border-gold rounded-sm">
                      <Check size={13} strokeWidth={2.5} className="text-gold-deep" />
                    </span>
                    <span className="text-[14.5px] text-ink">{p}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Used for + documents */}
      <section className="bg-paper-warm border-y border-steel">
        <Container className="py-20">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <Eyebrow>When it's needed</Eyebrow>
              <h2 className="mt-5 font-display font-semibold tracking-tightish text-[26px] md:text-[32px] text-navy leading-[1.15]">
                Common reasons for this valuation
              </h2>
              <ul className="mt-6 space-y-3">
                {service.usedFor.map((u) => (
                  <li key={u} className="flex items-start gap-3 text-[15px] text-ink">
                    <Check size={16} strokeWidth={2.25} className="mt-1 shrink-0 text-gold-deep" />
                    {u}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <Eyebrow>Before the site visit</Eyebrow>
              <h2 className="mt-5 font-display font-semibold tracking-tightish text-[26px] md:text-[32px] text-navy leading-[1.15]">
                Documents usually required
              </h2>
              <ul className="mt-6 space-y-3">
                {service.documents.map((d) => (
                  <li key={d} className="flex items-start gap-3 text-[15px] text-ink">
                    <FileText size={16} strokeWidth={1.75} className="mt-1 shrink-0 text-gold-deep" />
                    {d}
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-[13.5px] text-ink-soft">
                The exact list depends on the property and the lender. We confirm it when the assignment is received.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Process */}
      <section className="bg-paper">
        <Container className="py-20">
          <Eyebrow>How it works</Eyebrow>
          <h2 className="mt-5 font-display font-semibold tracking-tightish text-[28px] md:text-[36px] text-navy leading-[1.12]">
            Our valuation process
          </h2>
          <ol className="mt-10 grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {PROCESS_STEPS.map((step, i) => (
              <li key={step.title}>
                <Tilt className="h-full border border-steel bg-white rounded-sm p-6 hover:border-gold transition-colors" max={6}>
                <span className="font-mono text-[12px] tracking-[0.2em] text-gold-deep">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-display text-[18px] text-navy leading-snug">{step.title}</h3>
                <p className="mt-2 text-[13.5px] leading-relaxed text-ink-soft">{step.text}</p>
                </Tilt>
              </li>
            ))}
          </ol>
          <p className="mt-8 text-[14.5px] text-ink-soft">
            Empanelled with {BANKS.map((b) => b.name).join(", ")}.{" "}
            <Link to="/empanelled-banks" className="text-gold-deep underline underline-offset-2 hover:text-navy">
              View all empanelments
            </Link>
          </p>
        </Container>
      </section>

      {/* FAQs */}
      <section className="bg-paper border-t border-steel">
        <Container className="py-20">
          <div className="max-w-3xl">
            <Eyebrow>Questions</Eyebrow>
            <h2 className="mt-5 mb-8 font-display font-semibold tracking-tightish text-[28px] md:text-[36px] text-navy leading-[1.12]">
              {service.title} — FAQs
            </h2>
            <FaqList faqs={service.faqs} defaultOpenFirst />
            <Link
              to="/faq"
              className="mt-6 inline-flex items-center gap-2 font-mono text-[12px] uppercase tracking-[0.16em] text-gold-deep hover:text-navy"
            >
              More property valuation FAQs
              <ArrowRight size={15} strokeWidth={2} />
            </Link>
          </div>
        </Container>
      </section>

      {/* Related services */}
      <section className="bg-navy-deep text-white">
        <Container className="py-16">
          <div className="font-mono text-[11px] uppercase tracking-[0.24em] text-gold-soft">Other services</div>
          <ul className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {others.map((s) => (
              <li key={s.slug}>
                <Link
                  to={`/services/${s.slug}`}
                  className="flex items-center justify-between gap-3 border border-white/15 rounded-sm px-5 py-4 text-[14.5px] text-white/85 hover:border-gold hover:text-white transition-colors"
                >
                  {s.title}
                  <ArrowRight size={15} strokeWidth={2} className="shrink-0 text-gold" />
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <CtaBand
        title={`Need a ${service.title.toLowerCase()}?`}
        text="Tell us the property type, location and purpose — we'll confirm the scope, documents and turnaround."
      />
    </>
  );
}
