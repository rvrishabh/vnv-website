/**
 * Notifies Bing (and through it ChatGPT search, Copilot, Yandex, Seznam…) of every URL in the
 * live sitemap. Runs automatically after each Vercel production deploy via
 * .github/workflows/indexnow.yml; can also be run by hand:  npm run indexnow
 */
const SITE = "https://vnvengineers.com";
const KEY = "2202d59eeaed278a2a584126bd4a267f"; // must match public/2202d59eeaed278a2a584126bd4a267f.txt

const sitemapRes = await fetch(`${SITE}/sitemap.xml`);
if (!sitemapRes.ok) throw new Error(`Could not fetch sitemap: HTTP ${sitemapRes.status}`);
const urlList = [...(await sitemapRes.text()).matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1]);

const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({ host: new URL(SITE).host, key: KEY, keyLocation: `${SITE}/${KEY}.txt`, urlList }),
});
console.log(`IndexNow: submitted ${urlList.length} URLs — HTTP ${res.status}`);
// 200 = accepted, 202 = accepted (key validation pending); anything else is a failure
if (res.status !== 200 && res.status !== 202) {
  console.error(await res.text());
  process.exit(1);
}
