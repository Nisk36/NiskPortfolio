// Generate static RSS feed into public/feed.xml for GitHub Pages
// Runs after `next build` so Contentlayer has generated `.contentlayer/generated/index.mjs`
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function run() {
  const postsIndexPath = resolve(__dirname, '..', '.contentlayer', 'generated', 'Post', '_index.json');
  const allPosts = JSON.parse(readFileSync(postsIndexPath, 'utf8'));

  const items = allPosts
    .filter((p) => !p.draft)
    .sort((a, b) => +new Date(b.date) - +new Date(a.date))
    .map((p) => {
      const slug = p.slug;
      // Base URL for absolute links in RSS
      // Prefer environment BASE_URL, otherwise fallback to basePath only links
      const baseUrl = process.env.BASE_URL?.replace(/\/$/, '') || '';
      const link = baseUrl ? `${baseUrl}/blog/${slug}` : `/blog/${slug}`;
      const title = escapeXml(p.title);
      const pubDate = new Date(p.date).toUTCString();
      return `<item><title>${title}</title><link>${link}</link><pubDate>${pubDate}</pubDate></item>`;
    })
    .join('');

  const siteTitle = 'Blog';
  const siteLink = process.env.BASE_URL || '/';

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<rss version="2.0"><channel>\n<title>${escapeXml(
    siteTitle
  )}</title>\n<link>${escapeXml(siteLink)}</link>\n${items}\n</channel></rss>`;

  const outPath = resolve(__dirname, '..', 'public', 'feed.xml');
  writeFileSync(outPath, xml, { encoding: 'utf8' });
  // eslint-disable-next-line no-console
  console.log(`Generated RSS at ${outPath}`);
}

function escapeXml(str) {
  return String(str)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;');
}

run().catch((err) => {
  // eslint-disable-next-line no-console
  console.error(err);
  process.exit(1);
});
