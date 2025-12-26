import Link from "next/link";
import { allPosts } from "contentlayer/generated";

const BlogIndex = () => {
  const posts = [...allPosts]
    .filter((post) => !post.draft)
    .sort((a, b) => +new Date(b.date) - +new Date(a.date));

  return (
    <div className="container py-12">
      <main className="space-y-8">
        <div className="space-y-2">
          <h1 className="text-2xl font-semibold">Blog</h1>
          <p className="text-sm text-[var(--muted)]">
            体験設計やプロダクトづくりのメモをまとめています。
          </p>
        </div>
        <div className="grid gap-4">
          {posts.map((post) => (
            <Link
              key={post._id}
              href={`/blog/${post.slug}`}
              className="surface pixel-frame flex flex-col gap-2 p-4 no-underline"
            >
              <div className="flex flex-wrap items-center gap-3 text-xs text-[var(--muted)]">
                <span>{new Date(post.date).toLocaleDateString()}</span>
                {post.tags?.length ? (
                  <span>{post.tags.join(" / ")}</span>
                ) : null}
              </div>
              <h2 className="text-lg font-semibold text-[var(--text)]">
                {post.title}
              </h2>
              <p className="text-sm text-[var(--muted)]">
                {post.summary ?? "続きを読む"}
              </p>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
};

export default BlogIndex;
