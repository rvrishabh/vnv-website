import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import type { ReactNode } from "react";
import { ease } from "../lib/motion";

const MotionLink = motion.create(Link);

/* ---------- Container ---------- */
export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-container px-6 md:px-10 ${className}`}>{children}</div>;
}

/* ---------- Button ---------- */
type ButtonVariant = "gold" | "navy" | "outline-navy" | "outline-light";

interface ButtonProps {
  children: ReactNode;
  to?: string;
  variant?: ButtonVariant;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
}

const buttonStyles: Record<ButtonVariant, string> = {
  gold: "bg-gold text-navy-deep border border-gold hover:bg-gold-soft hover:border-gold-soft font-semibold",
  navy: "bg-navy text-white border border-navy hover:bg-navy-soft font-medium",
  "outline-navy": "bg-transparent text-navy border border-navy/35 hover:border-navy hover:bg-navy/[0.03] font-medium",
  "outline-light": "bg-transparent text-white border border-white/40 hover:border-gold hover:text-gold font-medium",
};

export function Button({ children, to, variant = "gold", className = "", onClick, type = "button" }: ButtonProps) {
  const reduceMotion = useReducedMotion();
  const base =
    "inline-flex items-center justify-center gap-2 rounded-sm px-7 py-3.5 text-[14px] tracking-wide transition-colors duration-200 select-none";
  const cls = `${base} ${buttonStyles[variant]} ${className}`;
  const motionProps = reduceMotion
    ? {}
    : {
        whileHover: { y: -2 },
        whileTap: { scale: 0.98 },
        transition: { duration: 0.22, ease },
      };

  if (to) {
    return (
      <MotionLink to={to} className={cls} onClick={onClick} {...motionProps}>
        {children}
      </MotionLink>
    );
  }
  return (
    <motion.button type={type} onClick={onClick} className={cls} {...motionProps}>
      {children}
    </motion.button>
  );
}

/* ---------- Section eyebrow label ---------- */
export function Eyebrow({ children, tone = "navy", className = "" }: { children: ReactNode; tone?: "navy" | "light"; className?: string }) {
  const color = tone === "light" ? "text-gold-soft" : "text-gold-deep";
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <span className="h-px w-7" style={{ background: "var(--gold)" }} />
      <span className={`font-mono text-[11px] uppercase tracking-[0.28em] ${color}`}>{children}</span>
    </div>
  );
}

/* ---------- Gold divider ---------- */
export function GoldDivider({ className = "" }: { className?: string }) {
  return <div className={`gold-rule ${className}`} />;
}

/* ---------- Credential chip (stamp-style) ---------- */
export function CredChip({ label, value, tone = "light" }: { label: string; value: string; tone?: "light" | "dark" }) {
  const border = tone === "light" ? "border-white/15" : "border-navy/15";
  const labelColor = tone === "light" ? "text-gold-soft" : "text-gold-deep";
  const valueColor = tone === "light" ? "text-white" : "text-navy";
  return (
    <div className={`border ${border} rounded-sm px-4 py-3`}>
      <div className={`font-mono text-[9.5px] uppercase tracking-[0.2em] ${labelColor} mb-1`}>{label}</div>
      <div className={`font-mono text-[13px] font-medium tracking-wide ${valueColor}`}>{value}</div>
    </div>
  );
}
