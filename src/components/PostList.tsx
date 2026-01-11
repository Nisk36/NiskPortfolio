"use client";

import type { Post } from "contentlayer/generated";
import PostCard from "@/components/PostCard";

type PostListProps = {
  posts: Post[];
  isEmpty: boolean;
};

const PostList = ({ posts, isEmpty }: PostListProps) => {
  return (
    <div className="grid gap-4">
      {posts.map((post) => (
        <PostCard key={post._id} post={post} variant="index" />
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
