/**
 * Turns the client build in dist/ into one static HTML file per route, plus sitemap.xml,
 * llms.txt and 404.html. Runs after `vite build` and `vite build --ssr` (see package.json).
 *
 * Crawlers — especially AI assistants, which don't execute JavaScript — get the full page
 * content and the correct <head> for every URL; the browser then hydrates as usual.
 */
import { mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const dist = join(root, "dist");
const ssrDir = join(root, "dist-ssr");

const { render, ALL_PAGES, SITE_URL, buildLlmsTxt } = await import(
  pathToFileURL(join(ssrDir, "entry-server.js")).href
);

const template = await readFile(join(dist, "index.html"), "utf8");
if (!template.includes("<!--app-head-->") || !template.includes("<!--app-html-->")) {
  throw new Error("index.html is missing the <!--app-head--> / <!--app-html--> placeholders");
}

function toHtml(url) {
  const { html, head } = render(url);
  return template.replace("<!--app-head-->", head).replace("<!--app-html-->", html);
}

/** "/" -> index.html, "/services/x" -> services/x.html (served at /services/x via cleanUrls) */
function outFile(path) {
  return path === "/" ? join(dist, "index.html") : join(dist, `${path.slice(1)}.html`);
}

for (const page of ALL_PAGES) {
  const file = outFile(page.path);
  await mkdir(dirname(file), { recursive: true });
  await writeFile(file, toHtml(page.path));
}

await writeFile(join(dist, "404.html"), toHtml("/__not-found__"));

const lastmod = new Date().toISOString().slice(0, 10);
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${ALL_PAGES.map(
  (p) => `  <url>
    <loc>${SITE_URL}${p.path === "/" ? "/" : p.path}</loc>
    <lastmod>${lastmod}</lastmod>
    <priority>${(p.priority ?? 0.5).toFixed(1)}</priority>
  </url>`,
).join("\n")}
</urlset>
`;
await writeFile(join(dist, "sitemap.xml"), sitemap);
await writeFile(join(dist, "llms.txt"), buildLlmsTxt());

await rm(ssrDir, { recursive: true, force: true });
console.log(`Prerendered ${ALL_PAGES.length} pages + 404, sitemap.xml and llms.txt`);
