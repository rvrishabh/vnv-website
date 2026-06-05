import { Link } from "react-router-dom";

type LogoVariant = "light" | "dark";

interface LogoProps {
  className?: string;
  /** Light = white/gold on dark backgrounds; dark = navy/gold on light backgrounds */
  variant?: LogoVariant;
  /** Icon mark only (no wordmark) */
  markOnly?: boolean;
}

const ASSETS: Record<
  LogoVariant,
  { full: string; mark: string; fullWidth: number; fullHeight: number }
> = {
  light: {
    full: "/logos/vnv/logo-full-light.png",
    mark: "/logos/vnv/logo-icon-light.png",
    fullWidth: 172,
    fullHeight: 81,
  },
  dark: {
    full: "/logos/vnv/logo-full.png",
    mark: "/logos/vnv/favicon.png",
    fullWidth: 172,
    fullHeight: 80,
  },
};

export function Logo({
  className = "",
  variant = "light",
  markOnly = false,
}: LogoProps) {
  const assets = ASSETS[variant];
  const src = markOnly ? assets.mark : assets.full;

  return (
    <Link
      to="/"
      className={`inline-flex items-center group shrink-0 ${className}`}
      aria-label="V.N.V Engineers — home"
    >
      <img
        src={src}
        alt="V.N.V Engineers"
        className={
          markOnly
            ? "h-10 w-10 object-contain transition-opacity duration-200 group-hover:opacity-90"
            : "h-11 md:h-14 w-auto object-contain object-left transition-opacity duration-200 group-hover:opacity-90"
        }
        width={markOnly ? 40 : assets.fullWidth}
        height={markOnly ? 40 : assets.fullHeight}
        decoding="async"
        fetchPriority="high"
      />
      <span className="sr-only">
        V.N.V Engineers — Chartered Engineers &amp; Valuers
      </span>
    </Link>
  );
}
