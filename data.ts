export interface Bank {
  name: string;
  short: string;
  category: "Public Sector" | "Regional Rural Bank" | "Private Sector" | "Small Finance Bank" | "Housing Finance";
}

export const BANKS: Bank[] = [
  { name: "Punjab National Bank", short: "PNB", category: "Public Sector" },
  { name: "Indian Bank", short: "IB", category: "Public Sector" },
  { name: "Canara Bank", short: "CB", category: "Public Sector" },
  { name: "Uttar Pradesh Gramin Bank", short: "UPGB", category: "Regional Rural Bank" },
  { name: "City Union Bank Limited", short: "CUB", category: "Private Sector" },
  { name: "AU Small Finance Bank", short: "AU", category: "Small Finance Bank" },
  { name: "Cent Bank Home Finance Limited", short: "CBHF", category: "Housing Finance" },
  { name: "Grihum Housing Finance Limited", short: "GHF", category: "Housing Finance" },
  { name: "Vastu Housing Finance Limited", short: "VHF", category: "Housing Finance" },
  { name: "Wonder Home Finance Limited", short: "WHF", category: "Housing Finance" },
];

export const CATEGORY_ORDER = ["Public Sector", "Regional Rural Bank", "Private Sector", "Small Finance Bank", "Housing Finance"] as const;

export interface ServiceItem {
  slug: string; // URL segment under /services/
  icon: string; // lucide name resolved in component
  image: string; // filename under /public/images/services/
  imageAlt: string;
  title: string;
  /** Search-focused page title (without the site-name suffix) */
  seoTitle: string;
  seoDescription: string;
  blurb: string;
  detail: string;
  points: string[];
  /** Who typically commissions this valuation */
  usedFor: string[];
  /** Documents usually requested before the site visit */
  documents: string[];
  faqs: Faq[];
}

export interface Faq {
  q: string;
  a: string;
}

export const SERVICES: ServiceItem[] = [
  {
    slug: "mortgage-loan-security-valuation",
    icon: "Landmark",
    image: "mortgage-loan-security.jpg",
    imageAlt: "Residential property being inspected for a bank mortgage valuation",
    title: "Mortgage & Loan Security Valuation",
    seoTitle: "Mortgage & Home Loan Property Valuation for Banks",
    seoDescription:
      "Bank-format property valuation reports for home loans, loans against property (LAP) and secured lending by an IBBI Registered Valuer empanelled with PNB, Canara Bank, Indian Bank and more.",
    blurb: "Bank-ready valuation reports for secured lending, home loans, and loans against property.",
    detail:
      "Defensible security valuations that satisfy the lender's risk and audit requirements — prepared to the format and turnaround time banks and NBFCs expect for sanction and disbursement.",
    points: ["Home loans & LAP security cover", "Realisable & distress value assessment", "Bank-format reporting & TAT compliance"],
    usedFor: [
      "Home loan sanction and disbursement",
      "Loan against property (LAP) and top-up loans",
      "Periodic revaluation of existing security by the bank",
      "Balance transfer of a loan to another bank or HFC",
    ],
    documents: [
      "Sale deed / title deed and the chain of previous title documents",
      "Approved building plan or map sanctioned by the development authority",
      "Allotment letter or builder-buyer agreement (for flats under construction)",
      "Latest property tax / house tax receipt",
      "Khasra–khatauni or other revenue records (for land and plots)",
    ],
    faqs: [
      {
        q: "What values does a bank mortgage valuation report contain?",
        a: "A bank valuation report normally states the fair market value, the realisable value and the distress (forced-sale) value of the property, along with the government guideline (circle) rate, so the lender can decide the eligible loan amount and margin.",
      },
      {
        q: "Who appoints the valuer for a home loan — the bank or the borrower?",
        a: "The bank or housing finance company assigns the valuation to a valuer on its approved panel. V.N.V Engineers is empanelled with Punjab National Bank, Indian Bank, Canara Bank, Uttar Pradesh Gramin Bank, City Union Bank, AU Small Finance Bank and several housing finance companies.",
      },
      {
        q: "Is a site visit required for a mortgage valuation?",
        a: "Yes. Every mortgage valuation includes a physical inspection of the property, measurement, photographs and verification of boundaries and construction against the approved plan and title documents.",
      },
    ],
  },
  {
    slug: "residential-commercial-industrial-valuation",
    icon: "Building2",
    image: "residential-commercial-industrial.jpg",
    imageAlt: "Mixed residential, commercial and industrial buildings assessed for property valuation",
    title: "Residential, Commercial & Industrial Valuation",
    seoTitle: "Residential, Commercial & Industrial Property Valuation",
    seoDescription:
      "Valuation of flats, independent houses, shops, offices, warehouses, factories and cold storages using cost, income and market comparison approaches — by an IBBI Registered Valuer in Agra and Noida.",
    blurb: "Apartments, independent houses, office space, warehouses, factories, and cold storage.",
    detail:
      "Full-spectrum built-property valuation across asset classes — from plotted developments and apartments to industrial sheds, factories, and cold-storage facilities, using the appropriate cost, income, or comparison approach.",
    points: ["Apartments & independent houses", "Office, retail & warehousing", "Factories, sheds & cold storage"],
    usedFor: [
      "Bank and NBFC lending against built property",
      "Purchase, sale and investment decisions",
      "Capital gains and other tax purposes",
      "Insurance, net-worth statements and visa applications",
    ],
    documents: [
      "Title deed and approved building plan",
      "Completion / occupancy certificate where available",
      "Lease or rent agreements (for income-producing property)",
      "Factory licence, machinery list or layout (for industrial units)",
    ],
    faqs: [
      {
        q: "Which valuation method is used for a commercial or industrial property?",
        a: "It depends on the asset. Rented shops and offices are usually valued with the income approach, factories and special-purpose buildings with the cost (land plus depreciated construction) approach, and flats and houses with market comparison. The report explains the method chosen and why.",
      },
      {
        q: "Do you value cold storages and factories?",
        a: "Yes. Er. Shivam Verma has inspected and valued factories, industrial sheds, warehouses and cold-storage facilities for government and private banks.",
      },
    ],
  },
  {
    slug: "legal-dispute-arbitration-valuation",
    icon: "Scale",
    image: "legal-arbitration.jpg",
    imageAlt: "Scales of justice representing property valuation for legal disputes and arbitration",
    title: "Legal Disputes & Arbitration Valuation",
    seoTitle: "Property Valuation for Court Cases, Partition & Arbitration",
    seoDescription:
      "Independent, court-ready property valuation reports for litigation, arbitration, partition and family settlements, prepared by an IBBI Registered Valuer (Land & Building).",
    blurb: "Court-ready valuation reports for litigation, arbitration, and property disputes.",
    detail:
      "Independent, well-documented valuations engineered to withstand scrutiny in litigation, arbitration, and family or partition disputes — backed by methodology and evidence that holds up in front of legal authorities.",
    points: ["Litigation & arbitration support", "Partition & family settlement", "Expert documentation & basis of value"],
    usedFor: [
      "Civil suits and property litigation",
      "Arbitration proceedings",
      "Partition of joint or ancestral property among family members",
      "Settlement, divorce and succession matters",
    ],
    documents: [
      "Title documents and revenue records of the property",
      "Court order or reference letter, if the valuation is court-directed",
      "Any earlier valuation reports relied on by the parties",
    ],
    faqs: [
      {
        q: "Can a registered valuer's report be used in court?",
        a: "Yes. A valuation by an IBBI Registered Valuer sets out the basis of value, method, assumptions and evidence, which allows it to be relied on and examined in litigation and arbitration. The valuer can also support the report through clarifications where required.",
      },
      {
        q: "How is property divided fairly in a partition valuation?",
        a: "The valuer values the whole property and, where needed, each proposed share separately — considering frontage, access, road width and usable area — so that the parties or the court can arrive at an equitable division.",
      },
    ],
  },
  {
    slug: "agricultural-land-valuation",
    icon: "Sprout",
    image: "agricultural-land.jpg",
    imageAlt: "Agricultural farmland being appraised for land valuation",
    title: "Agricultural & Land Appraisal",
    seoTitle: "Agricultural Land & Plot Valuation",
    seoDescription:
      "Valuation of agricultural land, farmland, vacant plots and land parcels based on circle rates, zoning and development potential, by an IBBI Registered Valuer in Agra and Noida.",
    blurb: "Vacant land, farmland, plotted layouts, and zoning-aware land appraisals.",
    detail:
      "Land and agricultural appraisals grounded in local circle rates, zoning, and development potential — covering vacant plots, farmland, and land parcels under acquisition or conversion.",
    points: ["Vacant land & farmland", "Zoning & development potential", "Circle-rate & market-rate analysis"],
    usedFor: [
      "Agricultural and Kisan loans secured on land",
      "Sale, purchase or conversion of land use",
      "Land acquisition and compensation assessment",
      "Plotted developments and project feasibility",
    ],
    documents: [
      "Khatauni / khasra and other revenue records",
      "Sale deed or inheritance documents",
      "Site map or survey sketch showing location and boundaries",
      "Land-use or conversion orders, if any",
    ],
    faqs: [
      {
        q: "What is the difference between circle rate and market value of land?",
        a: "The circle rate is the minimum value fixed by the district administration for stamp-duty purposes. Market value is the price the land would realistically fetch between a willing buyer and seller, and can be higher or lower than the circle rate depending on location, access, size and demand. A valuation report records both.",
      },
      {
        q: "Which factors affect agricultural land value?",
        a: "Road access and frontage, distance from the city or highway, irrigation, soil and land use, shape and size of the parcel, clear title, and any zoning or development-plan changes that allow non-agricultural use.",
      },
    ],
  },
  {
    slug: "market-research-feasibility-study",
    icon: "LineChart",
    image: "market-research-feasibility.jpg",
    imageAlt: "Charts and analysis used in real estate market research and feasibility studies",
    title: "Market Research & Feasibility Studies",
    seoTitle: "Real Estate Feasibility Studies & DCF Valuation",
    seoDescription:
      "Investment-grade real estate feasibility and highest-and-best-use studies using Income, Cost, Market Comparison and Discounted Cash Flow (DCF) methods for lenders and investors.",
    blurb: "Investment-grade reports using Income, Cost, and Discounted Cash Flow approaches.",
    detail:
      "Feasibility and highest-and-best-use studies for investment and lending decisions, applying Income, Cost, Market Comparison, and DCF methods with documented assumptions and sensitivity.",
    points: ["Income, Cost & DCF approaches", "Highest & best-use analysis", "Investment-grade documentation"],
    usedFor: [
      "Project finance and construction-loan appraisal",
      "Investment decisions on land or income-producing property",
      "Highest-and-best-use analysis before development",
    ],
    documents: [
      "Project layout, plans and approvals",
      "Cost estimates and construction schedule",
      "Expected sale prices or rental assumptions",
    ],
    faqs: [
      {
        q: "What is a DCF valuation in real estate?",
        a: "Discounted Cash Flow (DCF) valuation projects the future income and costs of a property or project and discounts them to a present value at a rate that reflects risk. It is used for income-producing assets and development projects where value depends on future cash flows.",
      },
    ],
  },
  {
    slug: "rbi-ibbi-compliance-valuation",
    icon: "ShieldCheck",
    image: "regulatory-compliance.jpg",
    imageAlt: "Regulatory compliance documents for RBI and IBBI standard valuation reports",
    title: "RBI / IBBI / Banking Norm Compliance",
    seoTitle: "RBI & IBBI Compliant Valuation Reports for Banks",
    seoDescription:
      "Valuation reports prepared in conformity with RBI guidelines, IBBI regulations and ICAI valuation standards — audit-ready for bank credit, NPA and recovery decisions.",
    blurb: "Reports aligned to RBI guidelines, IBBI regulations, and ICAI valuation standards.",
    detail:
      "Every report is prepared in conformity with RBI guidelines, IBBI regulations, and ICAI valuation standards — giving empanelling banks a defensible, audit-ready basis for every credit decision.",
    points: ["RBI & banking-norm conformity", "IBBI registered-valuer standards", "ICAI valuation standards"],
    usedFor: [
      "Valuation of security for NPA accounts and recovery (SARFAESI) proceedings",
      "Insolvency (IBC) related valuation of land and building",
      "Periodic revaluation required by the bank's credit policy",
    ],
    documents: [
      "Bank's assignment letter and account details",
      "Title documents held by the bank",
      "Previous valuation reports on record",
    ],
    faqs: [
      {
        q: "Why do banks require an IBBI Registered Valuer?",
        a: "Banks and insolvency processes require valuations by registered valuers so that the value of a security is assessed by a qualified professional who is regulated, follows prescribed standards and can be held accountable. Er. Shivam Verma is registered with IBBI in the Land & Building asset class (IBBI/RV/02/2023/15442).",
      },
    ],
  },
];

export function getServiceBySlug(slug: string): ServiceItem | undefined {
  return SERVICES.find((s) => s.slug === slug);
}

export interface Office {
  city: string;
  address: string;
  /** Street-level part of the address, for structured data */
  streetAddress: string;
  postalCode?: string;
  region: string;
  mapLabel: string;
  /** Google Business Profile listing, when the office has one */
  google?: {
    placeId: string;
    /** Maps customer id (decimal) — gives a stable maps.google.com/?cid= link */
    cid: string;
    lat: number;
    lng: number;
    /** Search text that resolves to the listing in a Maps embed (shows the labelled marker) */
    embedQuery: string;
  };
}

export const OFFICES: Office[] = [
  {
    city: "Agra",
    address:
      "Shop No. 10, Block-C25, IInd Floor, Cloth Market, Near Corporate Park, Sanjay Palace, Agra – 282002",
    streetAddress: "Shop No. 10, Block-C25, IInd Floor, Cloth Market, Near Corporate Park, Sanjay Palace",
    postalCode: "282002",
    region: "Uttar Pradesh",
    mapLabel: "Sanjay Palace, Agra",
    google: {
      placeId: "ChIJJz6TKtp3dDkReh4bMNTSrUo",
      cid: "5381188938559594106",
      lat: 27.199298,
      lng: 78.004606,
      embedQuery: "VNV Engineers, Sanjay Place, Agra",
    },
  },
  {
    city: "Noida",
    address: "Sunworld Vanalika, Sector 107, Noida, UP",
    streetAddress: "Sunworld Vanalika, Sector 107",
    region: "Uttar Pradesh",
    mapLabel: "Sector 107, Noida",
  },
];

/** The office's Google Maps listing (falls back to an address search for offices without one) */
export function mapsUrl(office: Office): string {
  if (office.google) return `https://maps.google.com/?cid=${office.google.cid}`;
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`V.N.V Engineers, ${office.address}`)}`;
}

export function directionsUrl(office: Office): string {
  if (office.google) {
    const { lat, lng, placeId } = office.google;
    return `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}&destination_place_id=${placeId}`;
  }
  return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(office.address)}`;
}

/** Keyless Google Maps embed for an <iframe> */
export function mapEmbedUrl(office: Office): string {
  const q = encodeURIComponent(office.google?.embedQuery ?? office.address);
  const ll = office.google ? `&ll=${office.google.lat},${office.google.lng}` : "";
  return `https://maps.google.com/maps?q=${q}${ll}&z=17&output=embed`;
}

export function googleReviewUrl(office: Office): string | undefined {
  return office.google && `https://search.google.com/local/writereview?placeid=${office.google.placeId}`;
}

/** Single source of truth for firm facts used in copy, structured data and llms.txt */
export const FIRM = {
  name: "V.N.V Engineers",
  legalDescription: "Chartered Engineers & Registered Valuers",
  phone: "+91-9458563975",
  phoneDisplay: "+91 94585 63975",
  email: "info@vnvengineers.com",
  valuer: "Er. Shivam Verma",
  valuerTitle: "Chartered Engineer & IBBI Registered Valuer (Land & Building)",
  education: "B.Tech (Civil Engineering), IIMT Meerut, 2012–2016",
  ibbiRegNo: "IBBI/RV/02/2023/15442",
  ibbiQualified: "2022-08-25",
  iovMembership: "A-31744",
  iovRvfNo: "IOVRVF/M/L&B/10726",
  ieiMembership: "AM1864656",
  experienceYears: 7,
  valuationsDelivered: "3,000+",
  /** Matches the Google Business Profile hours */
  openingHours: { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], opens: "10:00", closes: "19:00" },
  hoursDisplay: "Mon – Sat · 10:00 AM – 7:00 PM (Sunday closed)",
  /** Profiles that represent the firm itself (Google Business Profile, LinkedIn, Justdial…) */
  sameAs: ["https://maps.google.com/?cid=5381188938559594106"] as string[],
} as const;

export interface CityPage {
  slug: string; // full path segment, e.g. "property-valuer-in-agra"
  city: string;
  district: string;
  office: Office;
  intro: string;
  localContext: string[];
  propertyTypes: string[];
  faqs: Faq[];
}

export const CITY_PAGES: CityPage[] = [
  {
    slug: "property-valuer-in-agra",
    city: "Agra",
    district: "Agra",
    office: OFFICES[0],
    intro:
      "V.N.V Engineers is an Agra-based firm of Chartered Engineers and IBBI Registered Valuers, with its office at Sanjay Palace. Er. Shivam Verma (IBBI/RV/02/2023/15442) prepares bank-format and independent valuation reports for residential, commercial, industrial and agricultural property in Agra.",
    localContext: [
      "Agra circle rates are notified by the district administration and differ sharply between localities — every report records the applicable circle rate alongside the assessed market value.",
      "Building plans in the city are sanctioned by the Agra Development Authority (ADA); deviations from the sanctioned map are checked during the site visit and reported to the lender.",
      "Agra lies within the Taj Trapezium Zone (TTZ), where restrictions on polluting industries affect the use — and therefore the value — of many industrial properties.",
      "Cold storages, footwear and handicraft units, and agricultural land on the city's outskirts are common securities in Agra, alongside flats, houses and shops.",
    ],
    propertyTypes: [
      "Flats, builder floors and independent houses",
      "Shops, showrooms and offices in commercial markets",
      "Cold storages, factories and industrial sheds",
      "Agricultural land and residential plots",
    ],
    faqs: [
      {
        q: "Who is a good bank-approved property valuer in Agra?",
        a: "V.N.V Engineers in Sanjay Palace, Agra is led by Er. Shivam Verma, a Chartered Engineer and IBBI Registered Valuer (Land & Building) who is empanelled with Punjab National Bank, Indian Bank, Canara Bank, Uttar Pradesh Gramin Bank, City Union Bank, AU Small Finance Bank and several housing finance companies.",
      },
      {
        q: "How do I get my property valued in Agra?",
        a: "Call +91 94585 63975, email info@vnvengineers.com or send an enquiry through the contact page with the property type and location. For a bank loan, the valuation is normally assigned by your bank to one of its empanelled valuers.",
      },
      {
        q: "Where is the V.N.V Engineers office in Agra?",
        a: "Shop No. 10, Block-C25, IInd Floor, Cloth Market, Near Corporate Park, Sanjay Palace, Agra – 282002.",
      },
    ],
  },
  {
    slug: "property-valuer-in-noida",
    city: "Noida",
    district: "Gautam Buddh Nagar",
    office: OFFICES[1],
    intro:
      "V.N.V Engineers has an office at Sector 107, Noida, serving banks, housing finance companies and private clients in Noida. Er. Shivam Verma (IBBI/RV/02/2023/15442) values apartments in group housing societies, commercial spaces, industrial plots and land for secured lending and independent purposes.",
    localContext: [
      "Most land in Noida is allotted on lease by the Noida Authority, so a valuation has to consider leasehold terms, transfer charges and dues alongside the market rate.",
      "Group housing apartments form the bulk of home-loan securities in Noida; project registration with UP RERA and the stage of construction are verified for under-construction units.",
      "Circle rates are notified by the Gautam Buddh Nagar district administration and are recorded in each report alongside the assessed market value.",
      "Industrial and institutional plots in the Noida Authority's sectors are valued with their permitted use, ground coverage and FAR in mind.",
    ],
    propertyTypes: [
      "Apartments in group housing societies",
      "Independent houses and residential plots",
      "Office space, retail shops and commercial units",
      "Industrial plots, factories and warehouses",
    ],
    faqs: [
      {
        q: "Who is a bank-approved property valuer in Noida?",
        a: "V.N.V Engineers, Sector 107 Noida, led by Er. Shivam Verma — a Chartered Engineer and IBBI Registered Valuer (Land & Building) empanelled with public sector banks, private and small finance banks, and housing finance companies.",
      },
      {
        q: "Does the valuation of a Noida flat consider leasehold status?",
        a: "Yes. Because Noida Authority allots land on lease, the report notes the leasehold nature of the property and any transfer conditions, which can affect marketability and the value accepted by the lender.",
      },
    ],
  },
];

export function getCityBySlug(slug: string): CityPage | undefined {
  return CITY_PAGES.find((c) => c.slug === slug);
}

export const FAQS: Faq[] = [
  {
    q: "What is an IBBI Registered Valuer?",
    a: "An IBBI Registered Valuer is a professional registered with the Insolvency and Bankruptcy Board of India under the Companies (Registered Valuers and Valuation) Rules, 2017, after passing the IBBI valuation examination in a specific asset class. Er. Shivam Verma of V.N.V Engineers is registered in the Land & Building class with registration number IBBI/RV/02/2023/15442.",
  },
  {
    q: "Why does a bank need a property valuation before giving a loan?",
    a: "The property is the bank's security for the loan. An independent valuation tells the bank what the property is worth and what it could realise if sold, which decides the loan amount, the margin and the risk the bank is taking.",
  },
  {
    q: "What is the difference between fair market value, realisable value and distress value?",
    a: "Fair market value is the price a property would fetch between a willing buyer and willing seller. Realisable value is what the bank expects to recover on sale, usually a little below market value. Distress (forced-sale) value is the lower amount expected in a quick sale, such as a recovery auction.",
  },
  {
    q: "What is the difference between circle rate and market value?",
    a: "The circle rate (guideline value) is the minimum rate fixed by the district administration for stamp duty and registration. Market value is the realistic price of the property in the open market. Valuation reports for banks record both figures.",
  },
  {
    q: "Which documents are required for property valuation?",
    a: "Usually the sale deed or title deed with the previous chain of documents, the approved building plan, the allotment letter or builder-buyer agreement for flats, the latest property tax receipt, and revenue records such as khatauni for land. Additional documents may be needed depending on the property and the purpose.",
  },
  {
    q: "How is a property valuation carried out?",
    a: "The valuer studies the documents, inspects the property in person, measures it, records photographs and GPS location, checks construction against the approved plan, researches comparable sale prices and circle rates, and then prepares a report stating the method, assumptions and values.",
  },
  {
    q: "How long does a property valuation take?",
    a: "It depends on the property type, its location and how complete the documents are. Bank valuations are prepared within the turnaround time set by the lender. Contact V.N.V Engineers with the property details for a timeline on your specific case.",
  },
  {
    q: "How much does a property valuation cost?",
    a: "For bank loans the valuation fee is set by the bank's schedule. For private, legal or tax valuations the fee depends on the property type, size, location and purpose of the report. Send the property details through the contact page or call +91 94585 63975 for a quote.",
  },
  {
    q: "Which banks is V.N.V Engineers empanelled with?",
    a: "Punjab National Bank, Indian Bank, Canara Bank, Uttar Pradesh Gramin Bank, City Union Bank, AU Small Finance Bank, Cent Bank Home Finance, Grihum Housing Finance, Vastu Housing Finance and Wonder Home Finance.",
  },
  {
    q: "Where does V.N.V Engineers provide valuation services?",
    a: "The firm has offices in Agra (Sanjay Palace) and Noida (Sector 107), Uttar Pradesh, and takes up valuation assignments in and around these cities for banks, NBFCs, government agencies and private clients.",
  },
  {
    q: "Can individuals get a property valued, or only banks?",
    a: "Both. Besides bank assignments, V.N.V Engineers prepares valuation reports for individuals and businesses for sale or purchase, family partition, legal disputes, capital-gains tax, visa and net-worth purposes.",
  },
  {
    q: "Which valuation methods are used?",
    a: "The market comparison (sales comparison) approach, the cost approach (land value plus depreciated cost of construction), the income approach for rented property, and Discounted Cash Flow (DCF) for projects and income-producing assets. The method is chosen to suit the property and the purpose of valuation.",
  },
];

export const STATS = [
  { value: FIRM.valuationsDelivered, label: "Valuations Delivered" },
  { value: `${FIRM.experienceYears}+`, label: "Years of Experience" },
  { value: String(BANKS.length), label: "Banks Empanelled" },
  { value: "Agra · Noida", label: "Office Locations" },
];

export const TOOLS = ["AutoCAD", "GIS Mapping", "PropTiger", "99acres", "RERA Databases", "Excel Valuation Models"];
