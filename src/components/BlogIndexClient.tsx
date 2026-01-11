"use client";

import type { Post } from "contentlayer/generated";
import PostCard from "@/components/PostCard";
import useBlogIndex from "@/hooks/useBlogIndex";
import { formatDate } from "@/utils/date";

type BlogIndexClientProps = {
  posts: Post[];
};

const BlogIndexClient = ({ posts }: BlogIndexClientProps) => {
  const {
    activeTag,
    setActiveTag,
    currentPage,
    setCurrentPage,
    tags,
    filteredPosts,
    visiblePosts,
    totalPages,
    paginationItems,
  } = useBlogIndex(posts);

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
          タグで絞り込む
        </p>
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setActiveTag(null)}
            className={`rounded-full border px-3 py-1 text-xs transition ${
              activeTag === null
                ? "border-[var(--accent)] text-[var(--accent)]"
                : "border-[var(--line)] text-[var(--muted)] hover:border-[var(--accent)] hover:text-[var(--text)]"
            }`}
          >
            すべて
          </button>
          {tags.map((tag) => (
            <button
              key={tag}
              type="button"
              onClick={() => setActiveTag(tag)}
              className={`rounded-full border px-3 py-1 text-xs transition ${
                activeTag === tag
                  ? "border-[var(--accent)] text-[var(--accent)]"
                  : "border-[var(--line)] text-[var(--muted)] hover:border-[var(--accent)] hover:text-[var(--text)]"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
      <div className="grid gap-4">
        {visiblePosts.map((post) => (
          <PostCard
            key={post._id}
            post={post}
            variant="index"
            formattedDate={formatDate(post.date)}
          />
        ))}
        {filteredPosts.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-[var(--line)] px-4 py-8 text-sm text-[var(--muted)]">
            該当する記事が見つかりませんでした。
          </div>
        ) : null}
      </div>
      {totalPages > 1 ? (
        <div className="flex flex-wrap items-center justify-center gap-2">
          {paginationItems.map((item, index) => {
            if (item === "ellipsis") {
              return (
                <span
                  key={`ellipsis-${index}`}
                  className="flex h-9 w-9 items-center justify-center text-xs text-[var(--muted)]"
                >
                  …
                </span>
              );
            }
            const pageNumber = item;
            const isActive = item === currentPage;
            return (
              <button
                key={pageNumber}
                type="button"
                onClick={() => setCurrentPage(pageNumber)}
                className={`flex h-9 w-9 items-center justify-center rounded-full border text-xs transition ${
                  isActive
                    ? "border-[var(--accent)] bg-[var(--accent)] text-[var(--background)]"
                    : "border-[var(--line)] text-[var(--muted)] hover:border-[var(--accent)] hover:text-[var(--text)]"
                }`}
              >
                {pageNumber}
              </button>
            );
          })}
        </div>
      ) : null}
    </div>
  );
};

export default BlogIndexClient;
