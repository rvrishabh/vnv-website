import { ArrowRight } from "lucide-react";
import { Button, Container } from "../components/ui";

export function NotFound() {
  return (
    <section className="bg-paper">
      <Container className="py-28 md:py-36 text-center">
        <div className="font-mono text-[12px] uppercase tracking-[0.28em] text-gold-deep">Error 404</div>
        <h1 className="mt-5 font-display font-semibold tracking-tightish text-[36px] md:text-[48px] text-navy leading-[1.1]">
          Page not found
        </h1>
        <p className="mt-5 text-[16px] text-ink-soft max-w-md mx-auto">
          The page you were looking for doesn't exist or has moved.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
          <Button to="/" variant="gold">
            Back to Home
            <ArrowRight size={17} strokeWidth={2} />
          </Button>
          <Button to="/services" variant="outline-navy">
            Valuation Services
          </Button>
        </div>
      </Container>
    </section>
  );
}
