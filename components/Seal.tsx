interface SealProps {
  size?: number;
  className?: string;
  /** watermark = faint outline for backgrounds; badge = full gold seal */
  variant?: "badge" | "watermark";
}

/** Official-style circular credential seal — the recurring trust motif, modeled on the firm's stamp. */
export function Seal({ size = 160, className = "", variant = "badge" }: SealProps) {
  const stroke = variant === "watermark" ? "rgba(201,168,76,0.5)" : "var(--gold)";
  const text = variant === "watermark" ? "rgba(201,168,76,0.55)" : "var(--gold)";
  const inkText = variant === "watermark" ? "rgba(201,168,76,0.55)" : "var(--gold-soft)";

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      className={className}
      role="img"
      aria-label="V.N.V Engineers official credential seal"
    >
      <defs>
        <path id="seal-top" d="M 100,100 m -78,0 a 78,78 0 1,1 156,0 a 78,78 0 1,1 -156,0" />
        <path id="seal-bottom" d="M 100,100 m -70,0 a 70,70 0 1,0 140,0 a 70,70 0 1,0 -140,0" />
      </defs>

      {/* rings */}
      <circle cx="100" cy="100" r="92" stroke={stroke} strokeWidth="1.5" />
      <circle cx="100" cy="100" r="84" stroke={stroke} strokeWidth="3" />
      <circle cx="100" cy="100" r="56" stroke={stroke} strokeWidth="1" opacity="0.7" />

      {/* curved text */}
      <text fill={text} fontFamily="'IBM Plex Mono', monospace" fontSize="11" fontWeight="500" letterSpacing="3.2">
        <textPath href="#seal-top" startOffset="25%" textAnchor="middle">
          V.N.V ENGINEERS
        </textPath>
      </text>
      <text fill={text} fontFamily="'IBM Plex Mono', monospace" fontSize="8.5" fontWeight="500" letterSpacing="2.5">
        <textPath href="#seal-bottom" startOffset="25%" textAnchor="middle">
          ER. SHIVAM VERMA · CHARTERED VALUER
        </textPath>
      </text>

      {/* side stars */}
      <text x="13" y="104" fill={text} fontSize="13" textAnchor="middle">★</text>
      <text x="187" y="104" fill={text} fontSize="13" textAnchor="middle">★</text>

      {/* center skyline mark */}
      <g transform="translate(100,72)" fill={text}>
        <rect x="-13" y="2" width="5" height="13" />
        <rect x="-6" y="-3" width="5" height="18" />
        <rect x="1" y="-8" width="5" height="23" />
        <rect x="8" y="-1" width="5" height="16" />
      </g>

      {/* center credentials */}
      <text x="100" y="100" fill={inkText} fontFamily="'IBM Plex Mono', monospace" fontSize="9" fontWeight="600" textAnchor="middle">
        IBBI / RV
      </text>
      <text x="100" y="113" fill={text} fontFamily="'IBM Plex Mono', monospace" fontSize="7.5" textAnchor="middle">
        02/2023/15442
      </text>
      <text x="100" y="126" fill={inkText} fontFamily="'IBM Plex Mono', monospace" fontSize="7" textAnchor="middle">
        IOV · IEI · IOVRVF
      </text>
    </svg>
  );
}
