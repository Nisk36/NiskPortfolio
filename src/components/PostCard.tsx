import Link from "next/link";
import type { Post } from "contentlayer/generated";

type PostCardProps = {
  post: Post;
  variant?: "home" | "index";
};

const PostCard = ({ post, variant = "home" }: PostCardProps) => {
  const isHome = variant === "home";

  return (
    <Link
      href={`/blog/${post.slug}`}
      className={`surface pixel-frame flex flex-col no-underline ${
        isHome ? "h-full gap-3 p-4" : "gap-2 p-4"
      }`}
    >
      {isHome ? (
        <div className="space-y-2">
          <p className="text-xs text-[var(--muted)]">
            {new Date(post.date).toLocaleDateString()}
          </p>
          <h3 className="text-base font-semibold text-[var(--text)]">
            {post.title}
          </h3>
        </div>
      ) : (
        <>
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
          <h2 className="text-lg font-semibold text-[var(--text)]">
            {post.title}
          </h2>
        </>
      )}
      <p className="text-sm text-[var(--muted)]">
        {post.summary ?? "続きを読む"}
      </p>
    </Link>
  );
};

export default PostCard;
