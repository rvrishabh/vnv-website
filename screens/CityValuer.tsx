import { ArrowRight, Award, Check, Clock, MapPin, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { CtaBand } from "../components/CtaBand";
import { FaqList } from "../components/FaqList";
import { OfficeMap } from "../components/OfficeMap";
import { PageHeader } from "../components/PageHeader";
import { Reveal } from "../components/Reveal";
import { Container, CredChip, Eyebrow } from "../components/ui";
import { BANKS, FIRM, SERVICES, mapsUrl, type CityPage } from "../data";

export function CityValuer({ city }: { city: CityPage }) {
  const { office } = city;

  return (
    <>
      <PageHeader
        eyebrow={`${city.city} · Uttar Pradesh`}
        title={<>Property Valuer in {city.city}</>}
        subtitle={`IBBI Registered Valuer (Land & Building) empanelled with ${BANKS.length} banks and housing finance companies — with an office at ${office.mapLabel}.`}
      />
      <Breadcrumbs items={[{ name: `Property Valuer in ${city.city}` }]} />

      {/* Intro + credentials */}
      <section className="bg-paper">
        <Container className="py-20 md:py-24">
          <div className="grid lg:grid-cols-12 gap-12">
            <Reveal className="lg:col-span-7">
              <Eyebrow>Valuation in {city.city}</Eyebrow>
              <h2 className="mt-5 font-display font-semibold tracking-tightish text-[28px] md:text-[36px] text-navy leading-[1.12]">
                Bank-approved property valuation in {city.city}
              </h2>
              <p className="mt-5 text-[16px] leading-relaxed text-ink-soft">{city.intro}</p>
              <p className="mt-4 text-[16px] leading-relaxed text-ink-soft">
                With {FIRM.experienceYears}+ years of experience and {FIRM.valuationsDelivered} valuations delivered for
                banks, NBFCs, government agencies and private clients, every report states the fair market value,
                realisable value and distress value, together with the applicable circle rate.
              </p>
            </Reveal>
            <Reveal className="lg:col-span-5">
              <div className="grid grid-cols-2 gap-3">
                <div className="col-span-2">
                  <CredChip tone="dark" label="IBBI Reg. No." value={FIRM.ibbiRegNo} />
                </div>
                <CredChip tone="dark" label="Valuations" value={FIRM.valuationsDelivered} />
                <CredChip tone="dark" label="Experience" value={`${FIRM.experienceYears}+ years`} />
                <CredChip tone="dark" label="Empanelled" value={`${BANKS.length} banks & HFCs`} />
                <CredChip tone="dark" label="Offices" value="Agra · Noida" />
              </div>
              <div className="mt-6 border border-steel bg-white rounded-sm p-6">
                <div className="font-mono text-[10.5px] uppercase tracking-[0.16em] text-gold-deep">
                  {city.city} office
                </div>
                <address className="mt-3 not-italic space-y-3 text-[14.5px] text-ink">
                  <div className="flex gap-3">
                    <MapPin size={16} strokeWidth={1.75} className="mt-0.5 shrink-0 text-gold-deep" />
                    <span>
                      {FIRM.name}, {office.address}
                    </span>
                  </div>
                  <div className="flex gap-3 items-center">
                    <Phone size={16} strokeWidth={1.75} className="shrink-0 text-gold-deep" />
                    <a href={`tel:${FIRM.phone.replace(/-/g, "")}`} className="hover:text-gold-deep">
                      {FIRM.phoneDisplay}
                    </a>
                  </div>
                  <div className="flex gap-3 items-center">
                    <Mail size={16} strokeWidth={1.75} className="shrink-0 text-gold-deep" />
                    <a href={`mailto:${FIRM.email}`} className="hover:text-gold-deep">
                      {FIRM.email}
                    </a>
                  </div>
                </address>
                <div className="mt-3 flex gap-3 items-center text-[14.5px] text-ink">
                  <Clock size={16} strokeWidth={1.75} className="shrink-0 text-gold-deep" />
                  {FIRM.hoursDisplay}
                </div>
                {!office.google && (
                  <a
                    href={mapsUrl(office)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-2 font-mono text-[11.5px] uppercase tracking-[0.16em] text-gold-deep hover:text-navy"
                  >
                    Open in Google Maps
                    <ArrowRight size={14} strokeWidth={2} />
                  </a>
                )}
              </div>
              {office.google && (
                <div className="mt-6">
                  <OfficeMap office={office} />
                </div>
              )}
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Local context */}
      <section className="bg-paper-warm border-y border-steel">
        <Container className="py-20">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <Eyebrow>Local knowledge</Eyebrow>
              <h2 className="mt-5 font-display font-semibold tracking-tightish text-[26px] md:text-[32px] text-navy leading-[1.15]">
                What matters when valuing property in {city.city}
              </h2>
              <ul className="mt-6 space-y-4">
                {city.localContext.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-[15px] leading-relaxed text-ink">
                    <Award size={16} strokeWidth={1.75} className="mt-1 shrink-0 text-gold-deep" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <Eyebrow>Property types</Eyebrow>
              <h2 className="mt-5 font-display font-semibold tracking-tightish text-[26px] md:text-[32px] text-navy leading-[1.15]">
                Properties we value in {city.city}
              </h2>
              <ul className="mt-6 space-y-3">
                {city.propertyTypes.map((t) => (
                  <li key={t} className="flex items-start gap-3 text-[15px] text-ink">
                    <Check size={16} strokeWidth={2.25} className="mt-1 shrink-0 text-gold-deep" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* Services */}
      <section className="bg-paper">
        <Container className="py-20">
          <Eyebrow>Services</Eyebrow>
          <h2 className="mt-5 font-display font-semibold tracking-tightish text-[28px] md:text-[36px] text-navy leading-[1.12]">
            Valuation services in {city.city}
          </h2>
          <ul className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {SERVICES.map((s) => (
              <li key={s.slug}>
                <Link
                  to={`/services/${s.slug}`}
                  className="block h-full border border-steel bg-white rounded-sm p-5 hover:border-gold transition-colors"
                >
                  <span className="font-display text-[17px] text-navy leading-snug">{s.title}</span>
                  <span className="mt-2 block text-[13.5px] leading-relaxed text-ink-soft">{s.blurb}</span>
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-[14.5px] text-ink-soft">
            Empanelled with {BANKS.map((b) => b.name).join(", ")}.
          </p>
        </Container>
      </section>

      {/* FAQs */}
      <section className="bg-paper border-t border-steel">
        <Container className="py-20">
          <div className="max-w-3xl">
            <Eyebrow>Questions</Eyebrow>
            <h2 className="mt-5 mb-8 font-display font-semibold tracking-tightish text-[28px] md:text-[36px] text-navy leading-[1.12]">
              Property valuation in {city.city} — FAQs
            </h2>
            <FaqList faqs={city.faqs} defaultOpenFirst />
          </div>
        </Container>
      </section>

      <CtaBand
        title={`Need a property valued in ${city.city}?`}
        text="Share the property type, location and purpose of valuation — we respond within 24 hours."
      />
    </>
  );
}
