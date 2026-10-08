import { useEffect } from "react";
import { applyHeadTags, buildHeadTags } from "../lib/head";
import type { PageSeo } from "../lib/seo";

/**
 * Keeps <head> in sync on client-side navigation. The first page load already has these tags
 * in its prerendered HTML (see scripts/prerender.mjs), so crawlers never depend on this effect.
 */
export function Seo({ seo }: { seo: PageSeo }) {
  useEffect(() => {
    applyHeadTags(buildHeadTags(seo));
  }, [seo]);

  return null;
}
