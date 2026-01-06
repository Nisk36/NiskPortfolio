"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import type { Post } from "contentlayer/generated";

type BlogIndexClientProps = {
  posts: Post[];
};

const BlogIndexClient = ({ posts }: BlogIndexClientProps) => {
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;

  const tags = useMemo(() => {
    const uniqueTags = new Set<string>();
    posts.forEach((post) => {
      post.tags?.forEach((tag) => uniqueTags.add(tag));
    });
    return Array.from(uniqueTags).sort((a, b) => a.localeCompare(b, "ja"));
  }, [posts]);

  const filteredPosts = useMemo(() => {
    if (!activeTag) return posts;
    return posts.filter((post) => post.tags?.includes(activeTag));
  }, [activeTag, posts]);

  const totalPages = useMemo(() => {
    return Math.max(1, Math.ceil(filteredPosts.length / pageSize));
  }, [filteredPosts.length, pageSize]);

  const paginationItems = useMemo(() => {
    if (totalPages <= 7) {
      return Array.from({ length: totalPages }, (_, index) => index + 1);
    }
    if (currentPage <= 3) {
      return [1, 2, 3, "ellipsis", totalPages];
    }
    if (currentPage >= totalPages - 2) {
      return [1, "ellipsis", totalPages - 2, totalPages - 1, totalPages];
    }
    return [
      1,
      "ellipsis",
      currentPage - 1,
      currentPage,
      currentPage + 1,
      "ellipsis",
      totalPages,
    ];
  }, [currentPage, totalPages]);

  const visiblePosts = useMemo(() => {
    const startIndex = (currentPage - 1) * pageSize;
    return filteredPosts.slice(startIndex, startIndex + pageSize);
  }, [currentPage, filteredPosts, pageSize]);

  useEffect(() => {
    setCurrentPage(1);
  }, [activeTag]);

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [currentPage, totalPages]);

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
          <Link
            key={post._id}
            href={`/blog/${post.slug}`}
            className="surface pixel-frame flex flex-col gap-2 p-4 no-underline"
          >
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
            <p className="text-sm text-[var(--muted)]">
              {post.summary ?? "続きを読む"}
            </p>
          </Link>
        ))}
        {visiblePosts.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-[var(--line)] px-4 py-8 text-sm text-[var(--muted)]">
            該当する記事が見つかりませんでした。
          </div>
        ) : null}
      </div>
      {totalPages > 1 ? (
        <div className="flex flex-wrap items-center gap-2">
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
