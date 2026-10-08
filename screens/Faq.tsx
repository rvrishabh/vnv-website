import { Link } from "react-router-dom";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { CtaBand } from "../components/CtaBand";
import { FaqList } from "../components/FaqList";
import { PageHeader } from "../components/PageHeader";
import { Container, Eyebrow } from "../components/ui";
import { CITY_PAGES, FAQS, SERVICES } from "../data";

export function Faq() {
  return (
    <>
      <PageHeader
        eyebrow="Frequently Asked Questions"
        title={<>Property Valuation FAQs</>}
        subtitle="Straight answers on registered valuers, bank loan valuations, documents, methods and costs."
      />
      <Breadcrumbs items={[{ name: "FAQs" }]} />

      <section className="bg-paper">
        <Container className="py-20">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8">
              <FaqList faqs={FAQS} defaultOpenFirst />
            </div>
            <aside className="lg:col-span-4 space-y-8">
              <div>
                <Eyebrow>By service</Eyebrow>
                <ul className="mt-4 space-y-2.5">
                  {SERVICES.map((s) => (
                    <li key={s.slug}>
                      <Link to={`/services/${s.slug}`} className="text-[14.5px] text-navy hover:text-gold-deep">
                        {s.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <Eyebrow>By city</Eyebrow>
                <ul className="mt-4 space-y-2.5">
                  {CITY_PAGES.map((c) => (
                    <li key={c.slug}>
                      <Link to={`/${c.slug}`} className="text-[14.5px] text-navy hover:text-gold-deep">
                        Property valuer in {c.city}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      <CtaBand
        title="Have a question that isn't listed?"
        text="Call or send an enquiry with your property details — we respond within 24 hours."
      />
    </>
  );
}
