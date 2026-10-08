import {
  BANKS,
  CITY_PAGES,
  FAQS,
  FIRM,
  OFFICES,
  SERVICES,
  mapsUrl,
  type Faq,
  type Office,
} from "../data";

export const SITE_URL =
  import.meta.env.VITE_SITE_URL?.replace(/\/$/, "") ?? "https://vnvengineers.com";

export const SITE_NAME = FIRM.name;
export const SITE_TAGLINE = "Property Valuation & Chartered Engineering";
export const OG_IMAGE = "/og-image.png";

type JsonLd = Record<string, unknown>;

export type PageSeo = {
  path: string;
  title: string;
  description: string;
  jsonLd: JsonLd[];
  noindex?: boolean;
  /** Sitemap priority */
  priority?: number;
};

export function absoluteUrl(path: string): string {
  if (path.startsWith("http")) return path;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

/* ---------- Stable entity ids, so every page points at the same graph nodes ---------- */

const ORG_ID = `${SITE_URL}/#organization`;
const PERSON_ID = `${SITE_URL}/about#shivam-verma`;
const WEBSITE_ID = `${SITE_URL}/#website`;
const officeId = (city: string) => `${SITE_URL}/#office-${city.toLowerCase()}`;

const IBBI = { "@type": "GovernmentOrganization", name: "Insolvency and Bankruptcy Board of India", url: "https://ibbi.gov.in" };
const IOV = { "@type": "Organization", name: "Institution of Valuers", url: "https://www.institutionofvaluers.org" };
const IEI = { "@type": "Organization", name: "The Institution of Engineers (India)", url: "https://www.ieindia.org" };

const AREA_SERVED = [
  { "@type": "City", name: "Agra" },
  { "@type": "City", name: "Noida" },
  { "@type": "State", name: "Uttar Pradesh" },
];

function postalAddress(office: Office): JsonLd {
  return {
    "@type": "PostalAddress",
    streetAddress: office.streetAddress,
    addressLocality: office.city,
    addressRegion: office.region,
    ...(office.postalCode ? { postalCode: office.postalCode } : {}),
    addressCountry: "IN",
  };
}

const OPENING_HOURS = {
  "@type": "OpeningHoursSpecification",
  dayOfWeek: FIRM.openingHours.days,
  opens: FIRM.openingHours.opens,
  closes: FIRM.openingHours.closes,
};

function officeNode(office: Office): JsonLd {
  return {
    "@type": "ProfessionalService",
    "@id": officeId(office.city),
    name: `${FIRM.name} — ${office.city}`,
    parentOrganization: { "@id": ORG_ID },
    url: SITE_URL,
    image: absoluteUrl(OG_IMAGE),
    logo: absoluteUrl("/logos/vnv/logo-full.png"),
    telephone: FIRM.phone,
    email: FIRM.email,
    priceRange: "₹₹",
    address: postalAddress(office),
    hasMap: mapsUrl(office),
    ...(office.google
      ? {
          geo: { "@type": "GeoCoordinates", latitude: office.google.lat, longitude: office.google.lng },
          sameAs: [mapsUrl(office)],
        }
      : {}),
    openingHoursSpecification: OPENING_HOURS,
    areaServed: { "@type": "City", name: office.city },
    founder: { "@id": PERSON_ID },
  };
}

const ORGANIZATION: JsonLd = {
  "@type": "ProfessionalService",
  "@id": ORG_ID,
  name: FIRM.name,
  alternateName: ["VNV Engineers", "V N V Engineers"],
  description:
    "V.N.V Engineers is a firm of Chartered Engineers and IBBI Registered Valuers (Land & Building) in Agra and Noida, Uttar Pradesh, providing property valuation for banks, NBFCs, housing finance companies, courts and private clients.",
  slogan: "Accurate · Unbiased · Defensible",
  url: SITE_URL,
  logo: absoluteUrl("/logos/vnv/logo-full.png"),
  image: absoluteUrl(OG_IMAGE),
  email: FIRM.email,
  telephone: FIRM.phone,
  priceRange: "₹₹",
  address: postalAddress(OFFICES[0]),
  ...(OFFICES[0].google
    ? { geo: { "@type": "GeoCoordinates", latitude: OFFICES[0].google.lat, longitude: OFFICES[0].google.lng } }
    : {}),
  hasMap: mapsUrl(OFFICES[0]),
  openingHoursSpecification: OPENING_HOURS,
  areaServed: AREA_SERVED,
  founder: { "@id": PERSON_ID },
  employee: { "@id": PERSON_ID },
  subOrganization: OFFICES.map((o) => ({ "@id": officeId(o.city) })),
  knowsAbout: [
    "Property valuation",
    "Mortgage valuation",
    "Land and building valuation",
    "Agricultural land valuation",
    "Valuation for litigation and arbitration",
    "Discounted cash flow valuation",
    "RBI and IBBI valuation compliance",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Valuation services",
    itemListElement: SERVICES.map((s) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: s.title, url: absoluteUrl(`/services/${s.slug}`) },
    })),
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: FIRM.phone,
    email: FIRM.email,
    contactType: "customer service",
    areaServed: "IN",
    availableLanguage: ["English", "Hindi"],
  },
  ...(FIRM.sameAs.length ? { sameAs: FIRM.sameAs } : {}),
};

const PERSON: JsonLd = {
  "@type": "Person",
  "@id": PERSON_ID,
  name: FIRM.valuer,
  honorificPrefix: "Er.",
  jobTitle: FIRM.valuerTitle,
  url: absoluteUrl("/about"),
  worksFor: { "@id": ORG_ID },
  alumniOf: { "@type": "CollegeOrUniversity", name: "IIMT, Meerut" },
  memberOf: [
    { ...IOV, description: `Member No. ${FIRM.iovMembership}` },
    { ...IEI, description: `Associate Member No. ${FIRM.ieiMembership}` },
  ],
  hasCredential: [
    {
      "@type": "EducationalOccupationalCredential",
      name: "IBBI Registered Valuer — Land & Building",
      credentialCategory: "Registration",
      identifier: FIRM.ibbiRegNo,
      recognizedBy: IBBI,
    },
    {
      "@type": "EducationalOccupationalCredential",
      name: "IOV Registered Valuers Foundation Membership — Land & Building",
      credentialCategory: "Membership",
      identifier: FIRM.iovRvfNo,
      recognizedBy: IOV,
    },
    {
      "@type": "EducationalOccupationalCredential",
      name: "Chartered Engineer",
      credentialCategory: "Professional certification",
      recognizedBy: IEI,
    },
    {
      "@type": "EducationalOccupationalCredential",
      name: "Bachelor of Technology (Civil Engineering)",
      credentialCategory: "Degree",
      recognizedBy: { "@type": "CollegeOrUniversity", name: "IIMT, Meerut" },
    },
  ],
  knowsAbout: ["Real estate valuation", "Land and building valuation", "Civil engineering", "Mortgage valuation"],
};

const WEBSITE: JsonLd = {
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  url: SITE_URL,
  name: FIRM.name,
  inLanguage: "en-IN",
  publisher: { "@id": ORG_ID },
};

function graph(...nodes: JsonLd[]): JsonLd {
  return { "@context": "https://schema.org", "@graph": nodes };
}

function breadcrumbs(items: { name: string; path: string }[]): JsonLd {
  return {
    "@type": "BreadcrumbList",
    itemListElement: [{ name: "Home", path: "/" }, ...items].map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

function faqPage(faqs: Faq[], path: string): JsonLd {
  return {
    "@type": "FAQPage",
    "@id": `${absoluteUrl(path)}#faq`,
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

function webPage(path: string, title: string, description: string, type = "WebPage"): JsonLd {
  return {
    "@type": type,
    "@id": `${absoluteUrl(path)}#webpage`,
    url: absoluteUrl(path),
    name: title,
    description,
    inLanguage: "en-IN",
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": ORG_ID },
  };
}

/* ---------- Page registry ---------- */

interface PageOptions {
  path: string;
  title: string;
  description: string;
  priority: number;
  /** Breadcrumb trail after "Home"; omitted for the home page */
  crumbs?: { name: string; path: string }[];
  type?: string;
  nodes?: JsonLd[];
}

function page({ path, title, description, priority, crumbs, type, nodes = [] }: PageOptions): PageSeo {
  return {
    path,
    title,
    description,
    priority,
    jsonLd: [graph(webPage(path, title, description, type), ...(crumbs ? [breadcrumbs(crumbs)] : []), ...nodes)],
  };
}

const STATIC_PAGES: PageSeo[] = [
  page({
    path: "/",
    title: `${SITE_NAME} | IBBI Registered Property Valuer in Agra & Noida`,
    description: `IBBI Registered Valuer (Land & Building) for banks, NBFCs and individuals. ${FIRM.valuationsDelivered} property valuations, empanelled with ${BANKS.length} banks & HFCs. Offices in Agra and Noida.`,
    priority: 1.0,
    nodes: [WEBSITE, ORGANIZATION, ...OFFICES.map(officeNode), PERSON],
  }),
  page({
    path: "/about",
    title: `Er. Shivam Verma — IBBI Registered Valuer & Chartered Engineer | ${SITE_NAME}`,
    description: `Er. Shivam Verma (${FIRM.ibbiRegNo}) — Chartered Engineer and IBBI Registered Valuer (Land & Building) with ${FIRM.experienceYears}+ years of valuation experience and ${FIRM.valuationsDelivered} valuations for banks and NBFCs.`,
    priority: 0.8,
    crumbs: [{ name: "About", path: "/about" }],
    type: "ProfilePage",
    nodes: [PERSON, ORGANIZATION],
  }),
  page({
    path: "/services",
    title: `Property Valuation Services for Banks & Individuals | ${SITE_NAME}`,
    description:
      "Mortgage and home-loan valuation, residential, commercial and industrial property valuation, agricultural land appraisal, court and arbitration valuation, and RBI/IBBI-compliant reports.",
    priority: 0.9,
    crumbs: [{ name: "Services", path: "/services" }],
    type: "CollectionPage",
    nodes: [
      {
        "@type": "ItemList",
        itemListElement: SERVICES.map((s, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: s.title,
          url: absoluteUrl(`/services/${s.slug}`),
        })),
      },
    ],
  }),
  page({
    path: "/empanelled-banks",
    title: `Bank-Empanelled Property Valuer — PNB, Canara, Indian Bank & More | ${SITE_NAME}`,
    description: `V.N.V Engineers is an approved valuer empanelled with ${BANKS.slice(0, 4)
      .map((b) => b.name)
      .join(", ")} and ${BANKS.length - 4} more banks and housing finance companies.`,
    priority: 0.8,
    crumbs: [{ name: "Empanelled Banks", path: "/empanelled-banks" }],
  }),
  page({
    path: "/valupro",
    title: `VNV ValuPro — Digital Valuation Platform | ${SITE_NAME}`,
    description:
      "VNV ValuPro — digital valuation workflow with GPS-verified site visits, checker review, and tamper-resistant reports for bank credit teams.",
    priority: 0.6,
    crumbs: [{ name: "VNV ValuPro", path: "/valupro" }],
    nodes: [
      {
        "@type": "SoftwareApplication",
        name: "VNV ValuPro",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web, Android, iOS",
        publisher: { "@id": ORG_ID },
      },
    ],
  }),
  page({
    path: "/faq",
    title: `Property Valuation FAQs — Cost, Documents & Process | ${SITE_NAME}`,
    description:
      "Answers to common questions on property valuation in India: IBBI registered valuers, circle rate vs market value, documents required, valuation methods and bank loan valuations.",
    priority: 0.8,
    crumbs: [{ name: "FAQs", path: "/faq" }],
    nodes: [faqPage(FAQS, "/faq")],
  }),
  page({
    path: "/contact",
    title: `Contact ${SITE_NAME} — Request a Property Valuation`,
    description: `Request a property valuation in Agra or Noida. Call ${FIRM.phoneDisplay} or email ${FIRM.email}. We respond within 24 hours.`,
    priority: 0.8,
    crumbs: [{ name: "Contact", path: "/contact" }],
    type: "ContactPage",
    nodes: [ORGANIZATION, ...OFFICES.map(officeNode)],
  }),
];

const SERVICE_PAGES: PageSeo[] = SERVICES.map((s) => {
  const path = `/services/${s.slug}`;
  return page({
    path,
    title: `${s.seoTitle} | ${SITE_NAME}`,
    description: s.seoDescription,
    priority: 0.8,
    crumbs: [
      { name: "Services", path: "/services" },
      { name: s.title, path },
    ],
    nodes: [
      {
        "@type": "Service",
        "@id": `${absoluteUrl(path)}#service`,
        name: s.title,
        serviceType: s.title,
        description: s.detail,
        image: absoluteUrl(`/images/services/${s.image}`),
        provider: { "@id": ORG_ID },
        areaServed: AREA_SERVED,
      },
      faqPage(s.faqs, path),
    ],
  });
});

const CITY_SEO_PAGES: PageSeo[] = CITY_PAGES.map((c) => {
  const path = `/${c.slug}`;
  return page({
    path,
    title: `Property Valuer in ${c.city} — IBBI Registered, Bank Empanelled | ${SITE_NAME}`,
    description: `Bank-approved IBBI Registered Valuer in ${c.city}. Home loan, LAP, commercial, industrial and land valuation by ${FIRM.valuer}. Office: ${c.office.mapLabel}. Call ${FIRM.phoneDisplay}.`,
    priority: 0.9,
    crumbs: [{ name: `Property Valuer in ${c.city}`, path }],
    nodes: [officeNode(c.office), faqPage(c.faqs, path)],
  });
});

export const NOT_FOUND_SEO: PageSeo = {
  path: "/404",
  title: `Page Not Found | ${SITE_NAME}`,
  description: "The page you were looking for could not be found.",
  jsonLd: [],
  noindex: true,
};

/** Every indexable page — drives prerendering, the sitemap and llms.txt */
export const ALL_PAGES: PageSeo[] = [...STATIC_PAGES, ...SERVICE_PAGES, ...CITY_SEO_PAGES];

const BY_PATH = new Map(ALL_PAGES.map((p) => [p.path, p]));

export function getPageSeo(pathname: string): PageSeo {
  const clean = pathname.length > 1 ? pathname.replace(/\/+$/, "") : pathname;
  return BY_PATH.get(clean) ?? NOT_FOUND_SEO;
}
