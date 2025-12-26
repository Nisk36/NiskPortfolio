import { notFound } from "next/navigation";
import { allPosts } from "contentlayer/generated";
import MDXRender from "../../../components/MDXRender";

export function generateStaticParams() {
  return allPosts.map((post) => ({ slug: post.slug }));
}

const BlogShow = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const post = allPosts.find((item) => item.slug === slug);
  if (!post) return notFound();

  return (
    <div className="container py-12">
      <article className="space-y-6">
        <header className="space-y-3">
          <div className="flex flex-wrap items-center gap-3 text-xs text-[var(--muted)]">
            <span>{new Date(post.date).toLocaleDateString()}</span>
            {post.tags?.length ? (
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span key={tag} className="tag-badge">
                    {tag}
                  </span>
                ))}
              </div>
            ) : null}
          </div>
          <h1 className="text-3xl font-semibold">{post.title}</h1>
          {post.summary ? (
            <p className="text-base text-[var(--muted)]">{post.summary}</p>
          ) : null}
        </header>
        <div className="content text-[var(--text)]">
          <MDXRender code={post.body.code} />
        </div>
      </article>
    </div>
  );
};

export default BlogShow;
