import { Link } from "react-router-dom";

interface LogoProps {
  variant?: "light" | "dark";
  className?: string;
}

/** Recreated from the V.N.V Engineers letterhead — stepped skyline mark + serif wordmark. */
export function Logo({ variant = "dark", className = "" }: LogoProps) {
  const wordColor = variant === "light" ? "#FFFFFF" : "var(--navy)";
  const subColor = variant === "light" ? "var(--gold-soft)" : "var(--gold-deep)";
  const markBody = variant === "light" ? "#1E3A6B" : "var(--navy)";

  return (
    <Link to="/" className={`flex items-center gap-3 group ${className}`} aria-label="V.N.V Engineers — home">
      <svg width="38" height="40" viewBox="0 0 38 40" fill="none" className="shrink-0">
        {/* stepped towers */}
        <rect x="1" y="20" width="7" height="19" fill={markBody} />
        <rect x="9.5" y="13" width="7" height="26" fill={markBody} />
        <rect x="18" y="6" width="7" height="33" fill={markBody} />
        {/* tall gold accent tower */}
        <rect x="26.5" y="0" width="7" height="39" fill="var(--gold)" />
        {/* windows */}
        <g fill={variant === "light" ? "#0A1F44" : "#F7F7F5"} opacity="0.55">
          <rect x="3" y="24" width="3" height="2" />
          <rect x="3" y="29" width="3" height="2" />
          <rect x="11.5" y="17" width="3" height="2" />
          <rect x="11.5" y="22" width="3" height="2" />
          <rect x="11.5" y="27" width="3" height="2" />
          <rect x="20" y="10" width="3" height="2" />
          <rect x="20" y="15" width="3" height="2" />
          <rect x="20" y="20" width="3" height="2" />
        </g>
        <g fill="#0A1F44" opacity="0.6">
          <rect x="28.5" y="4" width="3" height="2" />
          <rect x="28.5" y="9" width="3" height="2" />
          <rect x="28.5" y="14" width="3" height="2" />
        </g>
      </svg>
      <div className="leading-none">
        <div
          className="font-display font-semibold tracking-tightish"
          style={{ color: wordColor, fontSize: "20px" }}
        >
          V.N.V <span className="font-normal italic">Engineers</span>
        </div>
        <div
          className="font-mono uppercase mt-1"
          style={{ color: subColor, fontSize: "8.5px", letterSpacing: "0.22em" }}
        >
          Chartered Engineers &amp; Valuers
        </div>
      </div>
    </Link>
  );
}
