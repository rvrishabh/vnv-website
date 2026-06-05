export const SITE_URL =
  import.meta.env.VITE_SITE_URL?.replace(/\/$/, "") ?? "https://vnvengineers.com";

export const SITE_NAME = "V.N.V Engineers";
export const SITE_TAGLINE = "Property Valuation & Chartered Engineering";

export type PageSeo = {
  path: string;
  title: string;
  description: string;
};

export const DEFAULT_SEO: PageSeo = {
  path: "/",
  title: `${SITE_NAME} | IBBI Registered Property Valuers`,
  description:
    "V.N.V Engineers — IBBI registered property valuers empanelled with leading banks. Mortgage, commercial, agricultural and legal valuation services in Agra, Noida and across India.",
};

export const PAGE_SEO: Record<string, PageSeo> = {
  "/": {
    path: "/",
    title: `${SITE_NAME} | Property Valuation for Banks & Financial Institutions`,
    description:
      "India's trusted IBBI registered property valuer for banks and financial institutions. Accurate, unbiased valuation reports in Agra, Noida and across India.",
  },
  "/about": {
    path: "/about",
    title: `About Er. Shivam Verma | ${SITE_NAME}`,
    description:
      "Meet Er. Shivam Verma — Chartered Engineer and IBBI Registered Valuer (Land & Building) with 7+ years of institutional and independent valuation practice.",
  },
  "/services": {
    path: "/services",
    title: `Valuation Services | ${SITE_NAME}`,
    description:
      "Mortgage security, residential, commercial, industrial, agricultural, legal dispute and RBI/IBBI compliance valuation services for banks and lenders.",
  },
  "/empanelled-banks": {
    path: "/empanelled-banks",
    title: `Empanelled Banks | ${SITE_NAME}`,
    description:
      "V.N.V Engineers is empanelled with leading public sector banks, small finance banks, and housing finance companies across India.",
  },
  "/valupro": {
    path: "/valupro",
    title: `VNV ValuPro Platform | ${SITE_NAME}`,
    description:
      "VNV ValuPro — digital valuation workflow with GPS-verified site visits, checker review, and tamper-resistant reports for bank credit teams.",
  },
  "/contact": {
    path: "/contact",
    title: `Contact ${SITE_NAME} | Request a Valuation`,
    description:
      "Contact V.N.V Engineers for property valuation enquiries. Offices in Agra and Noida. Response within 24 hours.",
  },
};

export function getPageSeo(pathname: string): PageSeo {
  return PAGE_SEO[pathname] ?? DEFAULT_SEO;
}

export function absoluteUrl(path: string): string {
  if (path.startsWith("http")) return path;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

export const ORGANIZATION_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: SITE_NAME,
  url: SITE_URL,
  logo: absoluteUrl("/logos/vnv/logo-full.png"),
  image: absoluteUrl("/logos/vnv/logo-full.png"),
  description: DEFAULT_SEO.description,
  email: "info@vnvengineers.com",
  telephone: "+91-9458563975",
  areaServed: ["Agra", "Noida", "Uttar Pradesh", "India"],
  serviceType: [
    "Property Valuation",
    "Mortgage Valuation",
    "IBBI Registered Valuer",
    "Chartered Engineering",
  ],
  address: [
    {
      "@type": "PostalAddress",
      addressLocality: "Agra",
      addressRegion: "Uttar Pradesh",
      addressCountry: "IN",
    },
    {
      "@type": "PostalAddress",
      addressLocality: "Noida",
      addressRegion: "Uttar Pradesh",
      addressCountry: "IN",
    },
  ],
  sameAs: [
    "https://www.ibbi.gov.in",
    "https://www.institutionofvaluers.org",
    "https://www.ieindia.org",
  ],
};
