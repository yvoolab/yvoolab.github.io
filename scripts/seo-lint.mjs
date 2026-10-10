// Post-build SEO check (warn only, never fails the deploy).
// Every sitemap URL must exist in out/ and carry a title, a meta description,
// a canonical equal to itself, and no noindex. Built pages missing from the
// sitemap are listed once as a notice (some are left out on purpose).
// Run: node scripts/seo-lint.mjs [outDir]
import { readFileSync, readdirSync, statSync, existsSync } from "fs";
import { join, relative, sep } from "path";

const OUT = process.argv[2] || "out";
const BASE = "https://yvoolab.github.io";
const gha = !!process.env.GITHUB_ACTIONS;
const warn = (m) => console.log(gha ? `::warning title=seo-lint::${m}` : `WARN ${m}`);

const pick = (html, re) => (html.match(re) || [])[1];

function pages(dir) {
  return readdirSync(dir).flatMap((f) => {
    const p = join(dir, f);
    if (statSync(p).isDirectory()) return pages(p);
    return f === "index.html" ? [p] : [];
  });
}

const sitemap = readFileSync(join(OUT, "sitemap.xml"), "utf8");
const listed = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
let n = 0;

for (const url of listed) {
  const file = join(OUT, url.slice(BASE.length), "index.html");
  if (!existsSync(file)) { warn(`${url} in sitemap but not built`); n++; continue; }
  const h = readFileSync(file, "utf8");
  const title = pick(h, /<title[^>]*>([^<]*)<\/title>/);
  const desc = pick(h, /<meta[^>]+name="description"[^>]+content="([^"]*)"/);
  const canon = pick(h, /<link[^>]+rel="canonical"[^>]+href="([^"]*)"/);
  const robots = pick(h, /<meta[^>]+name="robots"[^>]+content="([^"]*)"/) || "";
  const bad = [
    !title && "no <title>",
    !desc && "no meta description",
    desc && (desc.length < 20 || desc.length > 160) && `description ${desc.length} chars (aim 20-160; CJK runs short)`,
    !canon && "no canonical",
    canon && canon !== url && `canonical ${canon} != ${url}`,
    /noindex/i.test(robots) && "noindex",
  ].filter(Boolean);
  if (bad.length) { warn(`${url}: ${bad.join("; ")}`); n++; }
}

const urls = new Set(listed);
const unlisted = pages(OUT)
  .map((p) => "/" + relative(OUT, p).split(sep).slice(0, -1).join("/"))
  .map((p) => BASE + (p === "/" ? "/" : p + "/"))
  .filter((u) => !urls.has(u) && !/\/404\/$/.test(u));
if (unlisted.length) console.log(`notice: built but not in sitemap (${unlisted.length}): ${unlisted.join(" ")}`);
console.log(`seo-lint: ${listed.length} sitemap URLs checked, ${n} with warnings`);
