import {
  Building2,
  Smartphone,
  LayoutDashboard,
  Activity,
  MapPin,
  KeyRound,
  UserCheck,
  FileCheck2,
  ArrowRight,
  CircleDot,
} from "lucide-react";
import { Container, Button, Eyebrow } from "../components/ui";
import { Reveal } from "../components/Reveal";

const HIGHLIGHTS = [
  {
    icon: Building2,
    name: "Bank App",
    desc: "Branch managers submit cases, track live status, and upload documents — every request logged with a clear audit trail.",
  },
  {
    icon: Smartphone,
    name: "Field App",
    desc: "Engineers conduct GPS-tracked site visits and complete structured valuation forms on mobile, even with patchy connectivity.",
  },
  {
    icon: LayoutDashboard,
    name: "Admin Dashboard",
    desc: "Full case lifecycle management — checker review, query threads, and fee tracking from assignment to signed report.",
  },
];

const FEATURES = [
  { icon: Activity, title: "Real-time case tracking", desc: "Every case status visible to the bank from submission to delivery." },
  { icon: MapPin, title: "GPS-verified site visits", desc: "Location-stamped inspections confirm the valuer was on-site." },
  { icon: KeyRound, title: "OTP-confirmed fee payments", desc: "Transparent, verifiable fee handling with one-time-passcode confirmation." },
  { icon: UserCheck, title: "Checker review workflow", desc: "Maker-checker review before any report is released to the lender." },
  { icon: FileCheck2, title: "Tamper-resistant reports", desc: "Generated reports are locked and verifiable against the source record." },
];

/* ---- Stylized product mockups (decorative) ---- */
function DashboardMock() {
  const rows = [
    { id: "VP-2041", type: "Commercial", status: "Checker Review", tone: "amber" },
    { id: "VP-2038", type: "Residential", status: "Report Signed", tone: "green" },
    { id: "VP-2035", type: "Industrial", status: "Site Visit", tone: "blue" },
    { id: "VP-2031", type: "Agricultural", status: "Query Raised", tone: "red" },
  ];
  const toneMap: Record<string, string> = {
    amber: "text-gold-soft border-gold/40",
    green: "text-emerald-300 border-emerald-400/30",
    blue: "text-sky-300 border-sky-400/30",
    red: "text-rose-300 border-rose-400/30",
  };
  return (
    <div className="rounded-sm overflow-hidden border border-white/12 bg-navy" style={{ boxShadow: "0 30px 60px rgba(6,21,51,0.5)" }}>
      <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-navy-deep">
        <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
        <span className="h-2.5 w-2.5 rounded-full bg-gold/60" />
        <span className="ml-3 font-mono text-[10px] tracking-wide text-white/40">valupro.app/admin/cases</span>
      </div>
      <div className="grid grid-cols-12">
        <div className="col-span-3 border-r border-white/8 p-4 hidden sm:block">
          {["Dashboard", "Cases", "Checker", "Fees", "Reports"].map((n, i) => (
            <div key={n} className={`flex items-center gap-2 px-2.5 py-2 rounded-sm mb-1 ${i === 1 ? "bg-gold/10 text-gold" : "text-white/50"}`}>
              <CircleDot size={12} strokeWidth={2} />
              <span className="text-[11px]">{n}</span>
            </div>
          ))}
        </div>
        <div className="col-span-12 sm:col-span-9 p-5">
          <div className="flex items-center justify-between mb-4">
            <span className="font-display text-[15px] text-white">Active Cases</span>
            <span className="font-mono text-[10px] text-white/40">42 open</span>
          </div>
          <div className="space-y-2">
            {rows.map((r) => (
              <div key={r.id} className="flex items-center justify-between border border-white/8 rounded-sm px-3.5 py-3 bg-white/[0.02]">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-[11px] text-gold-soft">{r.id}</span>
                  <span className="text-[12px] text-white/70">{r.type}</span>
                </div>
                <span className={`font-mono text-[9.5px] uppercase tracking-[0.1em] border rounded-sm px-2 py-0.5 ${toneMap[r.tone]}`}>
                  {r.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function PhoneMock() {
  return (
    <div className="mx-auto w-[210px] rounded-[26px] border border-white/15 bg-navy-deep p-2.5" style={{ boxShadow: "0 30px 60px rgba(6,21,51,0.55)" }}>
      <div className="rounded-[18px] overflow-hidden border border-white/8 bg-navy">
        <div className="px-4 py-3 border-b border-white/8 flex items-center justify-between">
          <span className="font-mono text-[10px] text-gold-soft">FIELD · VP-2035</span>
          <Smartphone size={13} className="text-white/40" />
        </div>
        <div className="p-4 space-y-3">
          <div className="rounded-sm border border-gold/30 bg-gold/5 p-3">
            <div className="flex items-center gap-2 text-gold">
              <MapPin size={13} strokeWidth={2} />
              <span className="font-mono text-[10px]">GPS Locked · 27.18°N</span>
            </div>
            <div className="mt-1 text-[10px] text-white/45">Sanjay Palace, Agra</div>
          </div>
          {["Property type", "Built-up area", "Construction stage"].map((f) => (
            <div key={f}>
              <div className="text-[9px] uppercase tracking-wide text-white/35 mb-1 font-mono">{f}</div>
              <div className="h-7 rounded-sm border border-white/10 bg-white/[0.03]" />
            </div>
          ))}
          <div className="h-9 rounded-sm bg-gold grid place-items-center">
            <span className="font-mono text-[10px] font-semibold text-navy-deep tracking-wide">SUBMIT VISIT</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ValuPro() {
  return (
    <div className="bg-navy-deep text-white">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 blueprint-grid pointer-events-none" />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(110% 70% at 50% -10%, rgba(21,48,95,0.85), transparent 60%)" }}
        />
        <Container className="relative pt-20 md:pt-28 pb-16">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 border border-gold/40 rounded-sm px-4 py-1.5 mb-8">
              <span className="h-2 w-2 rounded-full bg-gold animate-pulse" />
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-gold-soft">Coming Soon · Currently in Beta</span>
            </div>
            <h1 className="font-display font-semibold tracking-tightish leading-[1.07] text-[38px] md:text-[56px]">
              Introducing <span className="text-gold italic">VNV ValuPro</span> — Digital Valuation Infrastructure for Banks
            </h1>
            <p className="mt-7 text-[16px] md:text-[18px] leading-relaxed text-white/70 max-w-2xl mx-auto">
              A purpose-built platform that brings transparency, speed, and accountability to every property
              valuation case — from branch request to signed, tamper-resistant report.
            </p>
            <div className="mt-9 flex justify-center">
              <Button to="/contact" variant="gold">
                Request Early Access
                <ArrowRight size={17} strokeWidth={2} />
              </Button>
            </div>
          </div>

          {/* Dashboard showcase */}
          <Reveal delay={120} className="mt-16 max-w-4xl mx-auto">
            <DashboardMock />
          </Reveal>
        </Container>
      </section>

      {/* Three apps */}
      <section className="relative border-t border-white/8">
        <Container className="py-20 md:py-24">
          <Reveal className="text-center max-w-2xl mx-auto">
            <Eyebrow tone="light" className="justify-center">One platform · Three surfaces</Eyebrow>
            <h2 className="mt-5 font-display font-semibold tracking-tightish text-[30px] md:text-[40px] leading-[1.1]">
              Built for every role in the valuation chain
            </h2>
          </Reveal>

          <div className="mt-14 grid lg:grid-cols-3 gap-6">
            {HIGHLIGHTS.map((h, i) => {
              const Icon = h.icon;
              return (
                <Reveal key={h.name} delay={i * 90}>
                  <div className="h-full border border-white/10 rounded-sm p-8 bg-white/[0.02] hover:border-gold/50 transition-colors duration-300">
                    <div className="h-12 w-12 grid place-items-center border border-gold/40 rounded-sm">
                      <Icon size={22} strokeWidth={1.6} className="text-gold" />
                    </div>
                    <h3 className="mt-6 font-display text-[22px]">{h.name}</h3>
                    <div className="mt-3 h-px w-8 bg-gold" />
                    <p className="mt-4 text-[14px] leading-relaxed text-white/60">{h.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Field app + features */}
      <section className="relative border-t border-white/8 bg-navy">
        <div className="absolute inset-0 blueprint-grid pointer-events-none" />
        <Container className="relative py-20 md:py-24">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <Reveal>
              <PhoneMock />
            </Reveal>
            <div>
              <Reveal>
                <Eyebrow tone="light">Accountability, by design</Eyebrow>
                <h2 className="mt-5 font-display font-semibold tracking-tightish text-[28px] md:text-[38px] leading-[1.12]">
                  Every safeguard a lender asks for
                </h2>
              </Reveal>
              <div className="mt-9 space-y-5">
                {FEATURES.map((f, i) => {
                  const Icon = f.icon;
                  return (
                    <Reveal key={f.title} delay={i * 60}>
                      <div className="flex gap-4">
                        <div className="h-10 w-10 shrink-0 grid place-items-center border border-gold/30 rounded-sm">
                          <Icon size={18} strokeWidth={1.6} className="text-gold" />
                        </div>
                        <div>
                          <h3 className="font-display text-[18px] text-white">{f.title}</h3>
                          <p className="mt-1 text-[13.5px] leading-relaxed text-white/55">{f.desc}</p>
                        </div>
                      </div>
                    </Reveal>
                  );
                })}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="relative border-t border-white/8">
        <Container className="py-20 text-center">
          <h2 className="font-display font-semibold tracking-tightish text-[30px] md:text-[42px] leading-[1.1] max-w-2xl mx-auto">
            Be among the first banks on VNV ValuPro
          </h2>
          <p className="mt-5 text-[16px] leading-relaxed text-white/65 max-w-xl mx-auto">
            We're onboarding a small group of lending partners during beta. Request early access and we'll be in touch.
          </p>
          <div className="mt-9 flex justify-center">
            <Button to="/contact" variant="gold">
              Request Early Access
              <ArrowRight size={17} strokeWidth={2} />
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
}
