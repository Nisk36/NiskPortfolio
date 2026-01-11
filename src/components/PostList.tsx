"use client";

import type { Post } from "contentlayer/generated";
import PostCardIndex from "@/components/PostCardIndex";
import { formatDate } from "@/utils/date";

type PostListProps = {
  posts: Post[];
  isEmpty: boolean;
};

const PostList = ({ posts, isEmpty }: PostListProps) => {
  return (
    <div className="grid gap-4">
      {posts.map((post) => (
        <PostCardIndex
          key={post._id}
          post={post}
          formattedDate={formatDate(post.date)}
        />
      ))}
      {isEmpty ? (
        <div className="rounded-2xl border border-dashed border-[var(--line)] px-4 py-8 text-sm text-[var(--muted)]">
          該当する記事が見つかりませんでした。
        </div>
      ) : null}
    </div>
  );
};

export default PostList;
