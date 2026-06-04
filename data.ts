export interface Bank {
  name: string;
  short: string;
  category: "Public Sector" | "Small Finance Bank" | "Housing Finance";
}

export const BANKS: Bank[] = [
  { name: "Punjab National Bank", short: "PNB", category: "Public Sector" },
  { name: "Indian Bank", short: "IB", category: "Public Sector" },
  { name: "Canara Bank", short: "CB", category: "Public Sector" },
  { name: "AU Small Finance Bank", short: "AU", category: "Small Finance Bank" },
  { name: "Cent Bank Home Finance Limited", short: "CBHF", category: "Housing Finance" },
  { name: "Grihum Housing Finance Limited", short: "GHF", category: "Housing Finance" },
  { name: "Vastu Housing Finance Limited", short: "VHF", category: "Housing Finance" },
  { name: "Wonder Home Finance Limited", short: "WHF", category: "Housing Finance" },
];

export const CATEGORY_ORDER = ["Public Sector", "Small Finance Bank", "Housing Finance"] as const;

export interface ServiceItem {
  icon: string; // lucide name resolved in component
  image: string; // filename under /public/images/services/
  title: string;
  blurb: string;
  detail: string;
  points: string[];
}

export const SERVICES: ServiceItem[] = [
  {
    icon: "Landmark",
    image: "mortgage-loan-security.jpg",
    title: "Mortgage & Loan Security Valuation",
    blurb: "Bank-ready valuation reports for secured lending, home loans, and loans against property.",
    detail:
      "Defensible security valuations that satisfy the lender's risk and audit requirements — prepared to the format and turnaround time banks and NBFCs expect for sanction and disbursement.",
    points: ["Home loans & LAP security cover", "Realisable & distress value assessment", "Bank-format reporting & TAT compliance"],
  },
  {
    icon: "Building2",
    image: "residential-commercial-industrial.jpg",
    title: "Residential, Commercial & Industrial Valuation",
    blurb: "Apartments, independent houses, office space, warehouses, factories, and cold storage.",
    detail:
      "Full-spectrum built-property valuation across asset classes — from plotted developments and apartments to industrial sheds, factories, and cold-storage facilities, using the appropriate cost, income, or comparison approach.",
    points: ["Apartments & independent houses", "Office, retail & warehousing", "Factories, sheds & cold storage"],
  },
  {
    icon: "Scale",
    image: "legal-arbitration.jpg",
    title: "Legal Disputes & Arbitration Valuation",
    blurb: "Court-ready valuation reports for litigation, arbitration, and property disputes.",
    detail:
      "Independent, well-documented valuations engineered to withstand scrutiny in litigation, arbitration, and family or partition disputes — backed by methodology and evidence that holds up in front of legal authorities.",
    points: ["Litigation & arbitration support", "Partition & family settlement", "Expert documentation & basis of value"],
  },
  {
    icon: "Sprout",
    image: "agricultural-land.jpg",
    title: "Agricultural & Land Appraisal",
    blurb: "Vacant land, farmland, plotted layouts, and zoning-aware land appraisals.",
    detail:
      "Land and agricultural appraisals grounded in local circle rates, zoning, and development potential — covering vacant plots, farmland, and land parcels under acquisition or conversion.",
    points: ["Vacant land & farmland", "Zoning & development potential", "Circle-rate & market-rate analysis"],
  },
  {
    icon: "LineChart",
    image: "market-research-feasibility.jpg",
    title: "Market Research & Feasibility Studies",
    blurb: "Investment-grade reports using Income, Cost, and Discounted Cash Flow approaches.",
    detail:
      "Feasibility and highest-and-best-use studies for investment and lending decisions, applying Income, Cost, Market Comparison, and DCF methods with documented assumptions and sensitivity.",
    points: ["Income, Cost & DCF approaches", "Highest & best-use analysis", "Investment-grade documentation"],
  },
  {
    icon: "ShieldCheck",
    image: "regulatory-compliance.jpg",
    title: "RBI / IBBI / Banking Norm Compliance",
    blurb: "Reports aligned to RBI guidelines, IBBI regulations, and ICAI valuation standards.",
    detail:
      "Every report is prepared in conformity with RBI guidelines, IBBI regulations, and ICAI valuation standards — giving empanelling banks a defensible, audit-ready basis for every credit decision.",
    points: ["RBI & banking-norm conformity", "IBBI registered-valuer standards", "ICAI valuation standards"],
  },
];

export interface Office {
  city: string;
  address: string;
  mapLabel: string;
}

export const OFFICES: Office[] = [
  {
    city: "Agra",
    address:
      "Shop No. 10, Block-C25, IInd Floor, Cloth Market, Near Corporate Park, Sanjay Palace, Agra – 282002",
    mapLabel: "Sanjay Palace, Agra",
  },
  {
    city: "Noida",
    address: "Sunworld Vanalika, Sector 107, Noida, UP",
    mapLabel: "Sector 107, Noida",
  },
];

export const STATS = [
  { value: "3,000+", label: "Valuations Delivered" },
  { value: "7+", label: "Years of Experience" },
  { value: "8", label: "Banks Empanelled" },
  { value: "Agra · Noida", label: "Office Locations" },
];

export const TOOLS = ["AutoCAD", "GIS Mapping", "PropTiger", "99acres", "RERA Databases", "Excel Valuation Models"];
