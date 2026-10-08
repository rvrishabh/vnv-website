import { OG_IMAGE, SITE_NAME, absoluteUrl, type PageSeo } from "./seo";

/**
 * Per-page <head> tags. The same list is serialised into the prerendered HTML at build time
 * and applied to document.head on client-side navigation, so both always agree.
 */
export type HeadTag =
  | { tag: "title"; text: string }
  | { tag: "meta"; attrs: Record<string, string> }
  | { tag: "link"; attrs: Record<string, string> }
  | { tag: "script"; attrs: Record<string, string>; text: string };

export const HEAD_MARKER = "data-seo";

export function buildHeadTags(seo: PageSeo): HeadTag[] {
  const url = absoluteUrl(seo.path);
  const image = absoluteUrl(OG_IMAGE);
  const tags: HeadTag[] = [
    { tag: "title", text: seo.title },
    { tag: "meta", attrs: { name: "description", content: seo.description } },
    {
      tag: "meta",
      attrs: {
        name: "robots",
        content: seo.noindex ? "noindex, follow" : "index, follow, max-image-preview:large, max-snippet:-1",
      },
    },
    { tag: "meta", attrs: { property: "og:type", content: "website" } },
    { tag: "meta", attrs: { property: "og:site_name", content: SITE_NAME } },
    { tag: "meta", attrs: { property: "og:title", content: seo.title } },
    { tag: "meta", attrs: { property: "og:description", content: seo.description } },
    { tag: "meta", attrs: { property: "og:image", content: image } },
    { tag: "meta", attrs: { property: "og:image:width", content: "1200" } },
    { tag: "meta", attrs: { property: "og:image:height", content: "630" } },
    { tag: "meta", attrs: { property: "og:image:alt", content: `${SITE_NAME} — IBBI Registered Property Valuer` } },
    { tag: "meta", attrs: { property: "og:locale", content: "en_IN" } },
    { tag: "meta", attrs: { name: "twitter:card", content: "summary_large_image" } },
    { tag: "meta", attrs: { name: "twitter:title", content: seo.title } },
    { tag: "meta", attrs: { name: "twitter:description", content: seo.description } },
    { tag: "meta", attrs: { name: "twitter:image", content: image } },
  ];

  if (!seo.noindex) {
    tags.push(
      { tag: "link", attrs: { rel: "canonical", href: url } },
      { tag: "meta", attrs: { property: "og:url", content: url } },
    );
  }

  for (const data of seo.jsonLd) {
    tags.push({
      tag: "script",
      attrs: { type: "application/ld+json" },
      // Escape "<" so JSON content can never close the script element early
      text: JSON.stringify(data).replace(/</g, "\\u003c"),
    });
  }
  return tags;
}

function escapeAttr(value: string): string {
  return value.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function escapeText(value: string): string {
  return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

export function renderHeadTags(tags: HeadTag[]): string {
  return tags
    .map((t) => {
      if (t.tag === "title") return `<title ${HEAD_MARKER}>${escapeText(t.text)}</title>`;
      const attrs = Object.entries(t.attrs)
        .map(([k, v]) => `${k}="${escapeAttr(v)}"`)
        .join(" ");
      if (t.tag === "script") return `<script ${HEAD_MARKER} ${attrs}>${t.text}</script>`;
      return `<${t.tag} ${HEAD_MARKER} ${attrs} />`;
    })
    .join("\n    ");
}

export function applyHeadTags(tags: HeadTag[]): void {
  document.head.querySelectorAll(`[${HEAD_MARKER}]`).forEach((el) => el.remove());
  for (const t of tags) {
    const el = document.createElement(t.tag);
    el.setAttribute(HEAD_MARKER, "");
    if (t.tag === "title") {
      el.textContent = t.text;
    } else {
      for (const [k, v] of Object.entries(t.attrs)) el.setAttribute(k, v);
      if (t.tag === "script") el.textContent = t.text;
    }
    document.head.appendChild(el);
  }
}
