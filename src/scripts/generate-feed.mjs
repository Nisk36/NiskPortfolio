// Generate static RSS feed into public/feed.xml for GitHub Pages
// Runs after `next build` so Contentlayer has generated `.contentlayer/generated/index.mjs`
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function run() {
  const postsIndexPath = resolve(
    __dirname,
    "..",
    "..",
    ".contentlayer",
    "generated",
    "Post",
    "_index.json"
  );
  const allPosts = JSON.parse(readFileSync(postsIndexPath, "utf8"));

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
  if (!baseUrl) {
    throw new Error("NEXT_PUBLIC_SITE_URL is required to generate RSS feed.");
  }

  const items = allPosts
    .filter((p) => !p.draft)
    .sort((a, b) => +new Date(b.date) - +new Date(a.date))
    .map((p) => {
      const link = `${baseUrl}/blog/${p.slug}/`;
      const title = escapeXml(p.title);
      const pubDate = new Date(p.date).toUTCString();
      return `<item><title>${title}</title><link>${link}</link><pubDate>${pubDate}</pubDate></item>`;
    })
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<rss version="2.0"><channel>\n<title>Blog</title>\n<link>${escapeXml(
    `${baseUrl}/`
  )}</link>\n${items}\n</channel></rss>`;

  const publicDir = resolve(__dirname, "..", "..", "public");
  mkdirSync(publicDir, { recursive: true });
  writeFileSync(resolve(publicDir, "feed.xml"), xml, { encoding: "utf8" });
}

function escapeXml(str) {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});

