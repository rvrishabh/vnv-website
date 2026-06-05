import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";
import { Logo } from "./Logo";
import { OFFICES } from "../data";

const SERVICES = [
  "Mortgage & Loan Security Valuation",
  "Residential & Commercial Valuation",
  "Agricultural & Land Appraisal",
  "Legal Disputes & Arbitration",
  "Market Research & Feasibility",
];

const QUICK = [
  { label: "About Er. Shivam Verma", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Empanelled Banks", to: "/empanelled-banks" },
  { label: "VNV ValuPro", to: "/valupro" },
  { label: "Contact", to: "/contact" },
];

const CREDENTIALS = ["IBBI/RV/02/2023/15442", "IOV A-31744", "IEI AM1864656", "IOVRVF/M/L&B/10726"];

export function Footer() {
  return (
    <footer className="bg-navy-deep text-white relative overflow-hidden">
      <div className="absolute inset-0 blueprint-grid opacity-60 pointer-events-none" />
      <div className="relative mx-auto w-full max-w-container px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pt-16 pb-12">
          {/* Company */}
          <div className="md:col-span-4">
            <Logo variant="light" />
            <p className="mt-5 text-[14px] leading-relaxed text-white/65 max-w-xs">
              IBBI Registered Valuer delivering accurate, unbiased, and defensible property valuations
              for banks, financial institutions, and legal authorities across India.
            </p>
            <div className="mt-5 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-gold-soft">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" />
              Accurate · Unbiased · Defensible
            </div>
          </div>

          {/* Services */}
          <div className="md:col-span-3">
            <h4 className="font-mono text-[11px] uppercase tracking-[0.22em] text-gold-soft mb-4">Services</h4>
            <ul className="space-y-2.5">
              {SERVICES.map((s) => (
                <li key={s}>
                  <Link to="/services" className="text-[13.5px] text-white/65 hover:text-white transition-colors">
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick links */}
          <div className="md:col-span-2">
            <h4 className="font-mono text-[11px] uppercase tracking-[0.22em] text-gold-soft mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {QUICK.map((q) => (
                <li key={q.to}>
                  <Link to={q.to} className="text-[13.5px] text-white/65 hover:text-white transition-colors">
                    {q.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-3">
            <h4 className="font-mono text-[11px] uppercase tracking-[0.22em] text-gold-soft mb-4">Contact</h4>
            <ul className="space-y-3.5 text-[13.5px] text-white/70">
              {OFFICES.map((office) => (
                <li key={office.city} className="flex gap-3">
                  <MapPin size={16} strokeWidth={1.75} className="text-gold shrink-0 mt-0.5" />
                  <span className="leading-relaxed">
                    <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-gold-soft block mb-1">
                      {office.city}
                    </span>
                    {office.address}
                  </span>
                </li>
              ))}
              <li className="flex gap-3 items-center">
                <Phone size={16} strokeWidth={1.75} className="text-gold shrink-0" />
                <a href="tel:+919458563975" className="hover:text-white transition-colors">+91 94585 63975</a>
              </li>
              <li className="flex gap-3 items-center">
                <Mail size={16} strokeWidth={1.75} className="text-gold shrink-0" />
                <a href="mailto:info@vnvengineers.com" className="hover:text-white transition-colors break-all">
                  info@vnvengineers.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Credential strip */}
        <div className="gold-rule opacity-50" />
        <div className="flex flex-col gap-4 py-6">
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {CREDENTIALS.map((c) => (
              <span key={c} className="font-mono text-[11px] tracking-wide text-white/55">
                {c}
              </span>
            ))}
          </div>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex flex-wrap gap-x-5 gap-y-2 font-sans text-[12px] text-white/50">
              <a
                href="https://www.ibbi.gov.in"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                IBBI
              </a>
              <a
                href="https://www.institutionofvaluers.org"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                Institution of Valuers
              </a>
              <a
                href="https://www.ieindia.org"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                Institution of Engineers (India)
              </a>
            </div>
            <p className="font-mono text-[11px] tracking-wide text-white/45">
              © 2025 V.N.V Engineers. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
