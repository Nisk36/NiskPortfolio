import type { Post } from "contentlayer/generated";
import BaseCard from "@/components/BaseCard";
import { formatDate } from "@/utils/date";

type PostCardProps = {
  post: Post;
  variant: "home" | "index";
};

const PostCard = ({ post, variant }: PostCardProps) => {
  const dateLabel = formatDate(post.date);
  const isHome = variant === "home";

  return (
    <BaseCard href={`/blog/${post.slug}`} isHome={isHome}>
      {isHome ? (
        <div className="space-y-2">
          <p className="text-xs text-[var(--muted)]">{dateLabel}</p>
          <h3 className="text-base font-semibold text-[var(--text)]">
            {post.title}
          </h3>
        </div>
      ) : (
        <>
          <div className="flex flex-wrap items-center gap-3 text-xs text-[var(--muted)]">
            <span>{dateLabel}</span>
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
    </BaseCard>
  );
};

export default PostCard;
