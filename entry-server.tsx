import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import App from "./App";
import { buildHeadTags, renderHeadTags } from "./lib/head";
import { getPageSeo } from "./lib/seo";

export { ALL_PAGES, SITE_URL } from "./lib/seo";
export { buildLlmsTxt } from "./lib/llms";

/** Used by scripts/prerender.mjs to turn each route into static HTML at build time. */
export function render(url: string): { html: string; head: string } {
  const html = renderToString(
    <StrictMode>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </StrictMode>,
  );
  return { html, head: renderHeadTags(buildHeadTags(getPageSeo(url))) };
}
