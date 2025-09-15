import { allPosts } from 'contentlayer/generated';
export const revalidate = 3600;

export async function GET() {
  const items = allPosts
    .filter((p) => !p.draft)
    .map(
      (p) =>
        `<item><title>${p.title}</title><link>/blog/${p.slug}</link><pubDate>${new Date(
          p.date
        ).toUTCString()}</pubDate></item>`
    )
    .join('');
  const xml = `<?xml version="1.0" encoding="UTF-8"?><rss version="2.0"><channel><title>Blog</title><link>/</link>${items}</channel></rss>`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
}