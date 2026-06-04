import type { Bank } from "../data";

const LOGO_FILES: Record<Bank["short"], string> = {
  PNB: "pnb.svg",
  IB: "ib.jpg",
  CB: "cb.svg",
  AU: "au.png",
  CBHF: "cbhf.jpg",
  GHF: "ghf.svg",
  VHF: "vhf.svg",
  WHF: "whf.png",
};

type BankLogoProps = {
  bank: Bank;
  className?: string;
};

export function BankLogo({ bank, className = "" }: BankLogoProps) {
  const file = LOGO_FILES[bank.short];
  if (!file) return null;

  return (
    <img
      src={`/logos/banks/${file}`}
      alt={`${bank.name} logo`}
      className={`object-contain object-center ${className}`}
      loading="lazy"
      decoding="async"
    />
  );
}
