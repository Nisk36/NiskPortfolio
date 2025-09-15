import { notFound } from 'next/navigation';
import { allPosts } from 'contentlayer/generated';
import { useMDXComponent } from 'next-contentlayer/hooks';

export function generateStaticParams() {
  return allPosts.map((p) => ({ slug: p.slug }));
}

export default function BlogShow({ params }: { params: { slug: string } }) {
  const post = allPosts.find((p) => p.slug === params.slug);
  if (!post) return notFound();

  const MDX = useMDXComponent(post.body.code);

  return (
    <article style={{ padding: 24 }}>
      <h1>{post.title}</h1>
      <p style={{ opacity: 0.7, marginTop: -8 }}>
        {new Date(post.date).toLocaleDateString()} {post.tags?.length ? `・${post.tags.join(', ')}` : ''}
      </p>
      <MDX />
    </article>
  );
}