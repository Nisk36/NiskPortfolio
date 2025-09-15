import { notFound } from 'next/navigation';
import { allPosts } from 'contentlayer/generated';
import MDXClientOnly from '../../../components/MDXClientOnly';

export function generateStaticParams() {
  return allPosts.map((p) => ({ slug: p.slug }));
}

export default async function BlogShow({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = allPosts.find((p) => p.slug === slug);
  if (!post) return notFound();

  return (
    <article style={{ padding: 24 }}>
      <h1>{post.title}</h1>
      <p style={{ opacity: 0.7, marginTop: -8 }}>
        {new Date(post.date).toLocaleDateString()}{' '}
        {post.tags?.length ? `・${post.tags.join(', ')}` : ''}
      </p>
      <MDXClientOnly code={post.body.code} />
    </article>
  );
}