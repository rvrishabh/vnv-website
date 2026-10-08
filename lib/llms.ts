import { BANKS, CITY_PAGES, FAQS, FIRM, OFFICES, SERVICES, mapsUrl } from "../data";
import { absoluteUrl } from "./seo";

/**
 * /llms.txt — a plain-language brief for AI assistants (https://llmstxt.org).
 * Generated from data.ts at build time so it never drifts from the site.
 */
export function buildLlmsTxt(): string {
  const lines: string[] = [
    `# ${FIRM.name}`,
    "",
    `> ${FIRM.name} is a firm of Chartered Engineers and IBBI Registered Valuers (Land & Building) with offices in Agra and Noida, Uttar Pradesh, India. It prepares property valuation reports for banks, NBFCs, housing finance companies, government agencies, courts and private clients. The firm is led by ${FIRM.valuer} (IBBI registration no. ${FIRM.ibbiRegNo}) and has delivered ${FIRM.valuationsDelivered} valuations over ${FIRM.experienceYears}+ years.`,
    "",
    "## Key facts",
    "",
    `- Lead valuer: ${FIRM.valuer} — ${FIRM.valuerTitle}`,
    `- IBBI Registered Valuer, asset class Land & Building: ${FIRM.ibbiRegNo}`,
    `- Institution of Valuers (IOV) member no. ${FIRM.iovMembership}; IOV RVF no. ${FIRM.iovRvfNo}`,
    `- Institution of Engineers (India) member no. ${FIRM.ieiMembership}; Chartered Engineer`,
    `- Education: ${FIRM.education}`,
    `- Experience: ${FIRM.experienceYears}+ years; ${FIRM.valuationsDelivered} valuations delivered`,
    `- Empanelled with: ${BANKS.map((b) => b.name).join(", ")}`,
    "- Reports conform to RBI guidelines, IBBI regulations and ICAI valuation standards",
    "- Methods: market comparison, cost approach, income approach and discounted cash flow (DCF)",
    "",
    "## Contact",
    "",
    `- Phone / WhatsApp: ${FIRM.phoneDisplay}`,
    `- Email: ${FIRM.email}`,
    ...OFFICES.map((o) => `- ${o.city} office: ${o.address}${o.google ? ` — Google Maps: ${mapsUrl(o)}` : ""}`),
    `- Office hours: ${FIRM.hoursDisplay}`,
    `- Enquiry form: ${absoluteUrl("/contact")}`,
    "",
    "## Services",
    "",
    ...SERVICES.map((s) => `- [${s.title}](${absoluteUrl(`/services/${s.slug}`)}): ${s.seoDescription}`),
    "",
    "## Locations",
    "",
    ...CITY_PAGES.map((c) => `- [Property valuer in ${c.city}](${absoluteUrl(`/${c.slug}`)}): ${c.intro}`),
    "",
    "## Pages",
    "",
    `- [About ${FIRM.valuer}](${absoluteUrl("/about")}): credentials and qualifications`,
    `- [Empanelled banks](${absoluteUrl("/empanelled-banks")}): banks and housing finance companies the firm is approved with`,
    `- [Property valuation FAQs](${absoluteUrl("/faq")}): answers on registered valuers, documents, methods and costs`,
    `- [VNV ValuPro](${absoluteUrl("/valupro")}): the firm's digital valuation workflow with GPS-verified site visits`,
    "",
    "## Frequently asked questions",
    "",
    ...FAQS.flatMap((f) => [`### ${f.q}`, "", f.a, ""]),
  ];
  return `${lines.join("\n").trimEnd()}\n`;
}
