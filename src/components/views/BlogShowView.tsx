import type { Post } from "contentlayer/generated";
import MDXRender from "../MDXRender";
import TableOfContents from "../TableOfContents";

type BlogShowViewProps = {
  post: Post;
};

const BlogShowView = ({ post }: BlogShowViewProps) => (
  <div className="container py-12">
    <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_240px]">
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
        <div id="blog-content" className="content text-[var(--text)]">
          <MDXRender code={post.body.code} />
        </div>
      </article>
      <aside className="hidden lg:block">
        <div className="sticky top-24 space-y-4">
          <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
            目次
          </p>
          <TableOfContents contentSelector="#blog-content" />
        </div>
      </aside>
    </div>
  </div>
);

export default BlogShowView;
