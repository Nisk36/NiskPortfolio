import type { Post } from "contentlayer/generated";
import BaseCard from "@/components/BaseCard";
import { formatDate } from "@/utils/date";

type PostCardHomeProps = {
  post: Post;
};

const PostCardHome = ({ post }: PostCardHomeProps) => {
  const dateLabel = formatDate(post.date);

  return (
    <BaseCard href={`/blog/${post.slug}`} isHome>
      <div className="space-y-2">
        <p className="text-xs text-[var(--muted)]">{dateLabel}</p>
        <h3 className="text-base font-semibold text-[var(--text)]">
          {post.title}
        </h3>
      </div>
      <p className="text-sm text-[var(--muted)]">
        {post.summary ?? "続きを読む"}
      </p>
    </BaseCard>
  );
};

export default PostCardHome;
