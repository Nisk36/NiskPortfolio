import Link from 'next/link';
import { allPosts } from 'contentlayer/generated';

export default function BlogIndex() {
  const posts = [...allPosts]
    .filter((p) => !p.draft)
    .sort((a, b) => +new Date(b.date) - +new Date(a.date));

  return (
    <main style={{ padding: 24 }}>
      <h1>Blog</h1>
      <ul>
        {posts.map((p) => (
          <li key={p._id}>
            <Link href={`/blog/${p.slug}`}>{p.title}</Link>{' '}
            <small style={{ opacity: 0.7 }}>{new Date(p.date).toLocaleDateString()}</small>
          </li>
        ))}
      </ul>
    </main>
  );
}