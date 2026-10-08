import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { drawer, ease, transitionFast } from "../lib/motion";
import { Logo } from "./Logo";
import { Button } from "./ui";

const NAV = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Empanelled Banks", to: "/empanelled-banks" },
  { label: "VNV ValuPro", to: "/valupro" },
  { label: "FAQs", to: "/faq" },
  { label: "Contact", to: "/contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <motion.header
      className="sticky top-0 z-50 bg-navy-deep border-b"
      initial={false}
      animate={{
        borderColor: scrolled
          ? "rgba(201,168,76,0.35)"
          : "rgba(255,255,255,0.08)",
        boxShadow: scrolled
          ? "0 6px 28px rgba(6,21,51,0.45)"
          : "0 0 0 rgba(0,0,0,0)",
      }}
      transition={transitionFast}
    >
      <div
        className="h-[2px] w-full"
        style={{
          background:
            "linear-gradient(90deg, var(--gold-deep), var(--gold), var(--gold-deep))",
        }}
      />
      <div className="mx-auto w-full max-w-container px-6 md:px-10">
        <div className="flex h-[74px] items-center justify-between gap-4">
          <Logo variant="light" className="hidden sm:inline-flex" />
          <Logo variant="light" markOnly className="sm:hidden" />

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
                    <motion.span
                      className="absolute -bottom-0.5 left-0 h-px bg-gold"
                      initial={false}
                      animate={{ width: isActive ? "100%" : "0%" }}
                      transition={{ duration: 0.28, ease }}
                    />
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Button
              to="/contact"
              variant="gold"
              className="!px-5 !py-2.5 !text-[13px]"
            >
              <Phone size={15} strokeWidth={2} />
              Get a Valuation
            </Button>
          </div>

          <button
            className="lg:hidden text-white p-2 -mr-2"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label="Toggle menu"
          >
            {open ? (
              <X size={24} strokeWidth={1.75} />
            ) : (
              <Menu size={24} strokeWidth={1.75} />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="lg:hidden border-t border-white/10 bg-navy-deep overflow-hidden"
            variants={reduceMotion ? undefined : drawer}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <nav className="flex flex-col px-6 py-4">
              {NAV.map((item, i) => (
                <motion.div
                  key={item.to}
                  initial={reduceMotion ? false : { opacity: 0, x: -12 }}
                  animate={reduceMotion ? undefined : { opacity: 1, x: 0 }}
                  transition={{ delay: 0.04 * i, duration: 0.3, ease }}
                >
                  <NavLink
                    to={item.to}
                    end={item.to === "/"}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `block py-3 border-b border-white/10 font-sans text-[15px] ${
                        isActive ? "text-gold" : "text-white/85"
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                </motion.div>
              ))}
              <motion.div
                className="pt-4"
                initial={reduceMotion ? false : { opacity: 0, y: 8 }}
                animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                transition={{ delay: 0.28, duration: 0.35, ease }}
              >
                <Button
                  to="/contact"
                  variant="gold"
                  className="w-full"
                  onClick={() => setOpen(false)}
                >
                  <Phone size={16} strokeWidth={2} />
                  Get a Valuation
                </Button>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
