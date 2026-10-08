/**
 * Notifies Bing (and through it ChatGPT search, Yandex, Seznam…) of every URL in the live sitemap.
 * Run after a production deploy:  npm run indexnow
 */
const SITE = "https://vnvengineers.com";
const KEY = "2202d59eeaed278a2a584126bd4a267f"; // must match public/2202d59eeaed278a2a584126bd4a267f.txt

const sitemap = await (await fetch(`${SITE}/sitemap.xml`)).text();
const urlList = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1]);

const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({ host: new URL(SITE).host, key: KEY, keyLocation: `${SITE}/${KEY}.txt`, urlList }),
});
console.log(`IndexNow: submitted ${urlList.length} URLs — HTTP ${res.status}`);
