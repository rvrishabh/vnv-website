import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Logo } from "./Logo";
import { Button } from "./ui";

const NAV = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Empanelled Banks", to: "/empanelled-banks" },
  { label: "VNV ValuPro", to: "/valupro" },
  { label: "Contact", to: "/contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="sticky top-0 z-50 bg-navy-deep border-b transition-colors duration-300"
      style={{
        borderColor: scrolled ? "rgba(201,168,76,0.35)" : "rgba(255,255,255,0.08)",
        boxShadow: scrolled ? "0 6px 28px rgba(6,21,51,0.45)" : "none",
      }}
    >
      {/* gold top hairline */}
      <div className="h-[2px] w-full" style={{ background: "linear-gradient(90deg, var(--gold-deep), var(--gold), var(--gold-deep))" }} />
      <div className="mx-auto w-full max-w-container px-6 md:px-10">
        <div className="flex h-[74px] items-center justify-between gap-4">
          <Logo variant="light" />

          <nav className="hidden lg:flex items-center gap-7">
            {NAV.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) =>
                  `relative font-sans text-[13.5px] tracking-wide transition-colors duration-200 py-1 ${
                    isActive ? "text-gold" : "text-white/80 hover:text-white"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {item.label}
                    <span
                      className="absolute -bottom-0.5 left-0 h-px bg-gold transition-all duration-300"
                      style={{ width: isActive ? "100%" : "0%" }}
                    />
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Button to="/contact" variant="gold" className="!px-5 !py-2.5 !text-[13px]">
              <Phone size={15} strokeWidth={2} />
              Get a Valuation
            </Button>
          </div>

          <button
            className="lg:hidden text-white p-2 -mr-2"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X size={24} strokeWidth={1.75} /> : <Menu size={24} strokeWidth={1.75} />}
          </button>
        </div>
      </div>

      {/* mobile drawer */}
      {open && (
        <div className="lg:hidden border-t border-white/10 bg-navy-deep">
          <nav className="flex flex-col px-6 py-4">
            {NAV.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `py-3 border-b border-white/10 font-sans text-[15px] ${isActive ? "text-gold" : "text-white/85"}`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <div className="pt-4">
              <Button to="/contact" variant="gold" className="w-full" onClick={() => setOpen(false)}>
                <Phone size={16} strokeWidth={2} />
                Get a Valuation
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
