import {
  CheckCircle2,
  ChevronDown,
  Clock,
  Loader2,
  Mail,
  MapPin,
  Phone,
  Send,
  Timer,
} from "lucide-react";
import type { FormEvent } from "react";
import { useState } from "react";
import { PageHeader } from "../components/PageHeader";
import { Seal } from "../components/Seal";
import { Container, Eyebrow } from "../components/ui";
import { submitEnquiry } from "../lib/contactApi";

const PROPERTY_TYPES = [
  "Residential",
  "Commercial",
  "Industrial",
  "Agricultural",
  "Land",
];

const FIELD =
  "w-full bg-white border border-steel rounded-sm px-4 py-3 text-[14px] text-ink placeholder:text-ink-soft/50 outline-none focus:border-gold transition-colors duration-200";
const LABEL =
  "block font-mono text-[10.5px] uppercase tracking-[0.16em] text-ink-soft mb-2";

const EMPTY_FORM = {
  name: "",
  org: "",
  phone: "",
  email: "",
  type: "",
  city: "",
  message: "",
};

export function Contact() {
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState(EMPTY_FORM);

  const update = (k: keyof typeof form) => (e: { target: { value: string } }) =>
    setForm((p) => ({ ...p, [k]: e.target.value }));

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);
    setSubmitting(true);

    try {
      await submitEnquiry(form);
      setSent(true);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Could not send your enquiry. Please try again.",
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <PageHeader
        eyebrow="Get a Valuation"
        title={<>Contact V.N.V Engineers</>}
        subtitle="Tell us about your property or empanelment requirement — we respond within 24 hours."
      />

      <section className="bg-paper">
        <Container className="py-20 md:py-24">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Form */}
            <div className="lg:col-span-7">
              <Eyebrow>Send an Enquiry</Eyebrow>
              <h2 className="mt-5 font-display font-semibold tracking-tightish text-[28px] md:text-[34px] text-navy leading-[1.12]">
                Request a valuation or empanelment
              </h2>

              {sent ? (
                <div className="mt-8 border border-gold/40 bg-white rounded-sm p-10 text-center">
                  <div className="mx-auto h-14 w-14 grid place-items-center border border-gold rounded-full">
                    <CheckCircle2
                      size={28}
                      strokeWidth={1.75}
                      className="text-gold-deep"
                    />
                  </div>
                  <h3 className="mt-5 font-display text-[24px] text-navy">
                    Enquiry received
                  </h3>
                  <p className="mt-3 text-[14.5px] leading-relaxed text-ink-soft max-w-sm mx-auto">
                    Thank you{form.name ? `, ${form.name.split(" ")[0]}` : ""}.
                    Your request has been logged — we'll respond within 24 hours
                    at the details you provided.
                  </p>
                  <button
                    onClick={() => {
                      setSent(false);
                      setError(null);
                      setForm(EMPTY_FORM);
                    }}
                    className="mt-7 font-mono text-[12px] uppercase tracking-[0.16em] text-gold-deep border border-gold/40 rounded-sm px-5 py-2.5 hover:border-gold transition-colors"
                  >
                    Submit another
                  </button>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="mt-8 space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className={LABEL}>Name</label>
                      <input
                        required
                        value={form.name}
                        onChange={update("name")}
                        className={FIELD}
                        placeholder="Full name"
                      />
                    </div>
                    <div>
                      <label className={LABEL}>Organization / Bank Name</label>
                      <input
                        value={form.org}
                        onChange={update("org")}
                        className={FIELD}
                        placeholder="e.g. Punjab National Bank"
                      />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className={LABEL}>Phone Number</label>
                      <input
                        type="tel"
                        required
                        value={form.phone}
                        onChange={update("phone")}
                        className={FIELD}
                        placeholder="+91 00000 00000"
                      />
                    </div>
                    <div>
                      <label className={LABEL}>Email</label>
                      <input
                        required
                        type="email"
                        value={form.email}
                        onChange={update("email")}
                        className={FIELD}
                        placeholder="name@bank.com"
                      />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className={LABEL}>Property Type</label>
                      <div className="relative">
                        <select
                          value={form.type}
                          onChange={update("type")}
                          className={`${FIELD} appearance-none pr-10 ${form.type ? "text-ink" : "text-ink-soft/50"}`}
                        >
                          <option value="" disabled>
                            Select type
                          </option>
                          {PROPERTY_TYPES.map((t) => (
                            <option key={t} value={t} className="text-ink">
                              {t}
                            </option>
                          ))}
                        </select>
                        <ChevronDown
                          size={16}
                          className="absolute right-3.5 top-1/2 -translate-y-1/2 text-ink-soft pointer-events-none"
                        />
                      </div>
                    </div>
                    <div>
                      <label className={LABEL}>City</label>
                      <input
                        value={form.city}
                        onChange={update("city")}
                        className={FIELD}
                        placeholder="e.g. Agra"
                      />
                    </div>
                  </div>
                  <div>
                    <label className={LABEL}>Message / Requirement</label>
                    <textarea
                      value={form.message}
                      onChange={update("message")}
                      rows={5}
                      className={`${FIELD} resize-none`}
                      placeholder="Describe the property and the purpose of valuation…"
                    />
                  </div>
                  {error && (
                    <p className="text-[13.5px] leading-relaxed text-red-700 border border-red-200 bg-red-50 rounded-sm px-4 py-3">
                      {error}
                    </p>
                  )}
                  <button
                    type="submit"
                    disabled={submitting}
                    className="inline-flex items-center justify-center gap-2 rounded-sm px-7 py-3.5 text-[14px] tracking-wide font-semibold bg-gold text-navy-deep border border-gold hover:bg-gold-soft transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {submitting ? (
                      <>
                        <Loader2
                          size={16}
                          strokeWidth={2}
                          className="animate-spin"
                        />
                        Sending…
                      </>
                    ) : (
                      <>
                        <Send size={16} strokeWidth={2} />
                        Submit Enquiry
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Info panel */}
            <div className="lg:col-span-5">
              <div className="relative overflow-hidden rounded-sm bg-navy-deep text-white p-8 md:p-10">
                <div className="absolute inset-0 blueprint-grid pointer-events-none" />
                <div className="absolute right-[-50px] bottom-[-50px] opacity-60 pointer-events-none">
                  <Seal size={200} variant="watermark" />
                </div>
                <div className="relative">
                  <Eyebrow tone="light">Office</Eyebrow>
                  <div className="mt-6 space-y-5 text-[14px]">
                    <div className="flex gap-3.5">
                      <MapPin
                        size={18}
                        strokeWidth={1.75}
                        className="text-gold shrink-0 mt-0.5"
                      />
                      <span className="leading-relaxed text-white/75">
                        Shop No. 10, Block-C25, IInd Floor, Cloth Market, Near
                        Corporate Park, Sanjay Palace, Agra – 282002
                      </span>
                    </div>
                    <div className="flex gap-3.5 items-center">
                      <Phone
                        size={18}
                        strokeWidth={1.75}
                        className="text-gold shrink-0"
                      />
                      <a
                        href="tel:+919458563975"
                        className="text-white/85 hover:text-gold transition-colors"
                      >
                        +91 94585 63975
                      </a>
                    </div>
                    <div className="flex gap-3.5 items-center">
                      <Mail
                        size={18}
                        strokeWidth={1.75}
                        className="text-gold shrink-0"
                      />
                      <a
                        href="mailto:info@vnvengineers.com"
                        className="text-white/85 hover:text-gold transition-colors break-all"
                      >
                        info@vnvengineers.com
                      </a>
                    </div>
                  </div>

                  <div className="gold-rule opacity-50 my-7" />

                  <div className="space-y-4">
                    <div className="flex gap-3.5 items-start">
                      <Clock
                        size={18}
                        strokeWidth={1.75}
                        className="text-gold shrink-0 mt-0.5"
                      />
                      <div>
                        <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-gold-soft">
                          Office Hours
                        </div>
                        <div className="mt-1 text-[13.5px] text-white/75">
                          Mon – Sat · 10:00 AM – 7:00 PM
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-3.5 items-start">
                      <Timer
                        size={18}
                        strokeWidth={1.75}
                        className="text-gold shrink-0 mt-0.5"
                      />
                      <div>
                        <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-gold-soft">
                          Response Time
                        </div>
                        <div className="mt-1 text-[13.5px] text-white/75">
                          We respond within 24 hours
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map placeholder */}
              <div className="mt-5 relative overflow-hidden rounded-sm border border-steel bg-white aspect-[16/10]">
                <div className="absolute inset-0 blueprint-grid-light" />
                {/* abstract street grid */}
                <svg
                  viewBox="0 0 400 250"
                  className="absolute inset-0 w-full h-full"
                  preserveAspectRatio="xMidYMid slice"
                >
                  <g
                    stroke="var(--steel-deep)"
                    strokeWidth="1.5"
                    fill="none"
                    opacity="0.7"
                  >
                    <path d="M-10 70 L410 50" />
                    <path d="M-10 150 L410 175" />
                    <path d="M70 -10 L50 260" />
                    <path d="M200 -10 L215 260" />
                    <path d="M320 -10 L310 260" />
                  </g>
                  <path
                    d="M70 60 L210 165"
                    stroke="var(--gold)"
                    strokeWidth="2.5"
                    fill="none"
                    opacity="0.5"
                    strokeDasharray="6 5"
                  />
                </svg>
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                  <div
                    className="h-10 w-10 grid place-items-center rounded-full bg-navy"
                    style={{ boxShadow: "0 8px 20px rgba(10,31,68,0.3)" }}
                  >
                    <MapPin size={20} strokeWidth={2} className="text-gold" />
                  </div>
                  <span className="mt-2 font-mono text-[10px] uppercase tracking-[0.16em] text-navy bg-white/90 px-2.5 py-1 rounded-sm border border-steel">
                    Sanjay Palace, Agra
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
