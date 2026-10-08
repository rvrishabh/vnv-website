import { ArrowRight, Phone } from "lucide-react";
import { FIRM } from "../data";
import { Button, Container } from "./ui";

export function CtaBand({ title, text }: { title: string; text: string }) {
  return (
    <section className="bg-paper-warm">
      <Container className="py-20">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-display font-semibold tracking-tightish text-[30px] md:text-[40px] text-navy leading-[1.1]">
            {title}
          </h2>
          <p className="mt-5 text-[16px] leading-relaxed text-ink-soft">{text}</p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
            <Button to="/contact" variant="gold">
              Request a Valuation
              <ArrowRight size={17} strokeWidth={2} />
            </Button>
            <a
              href={`tel:${FIRM.phone.replace(/-/g, "")}`}
              className="inline-flex items-center justify-center gap-2 rounded-sm px-7 py-3.5 text-[14px] tracking-wide border border-navy/35 text-navy hover:border-navy transition-colors font-medium"
            >
              <Phone size={16} strokeWidth={2} />
              {FIRM.phoneDisplay}
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
