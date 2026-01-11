import { useEffect, useMemo, useState } from "react";
import type { Post } from "contentlayer/generated";

const PAGE_SIZE = 10;

type UseBlogIndexResult = {
  activeTag: string | null;
  setActiveTag: (tag: string | null) => void;
  currentPage: number;
  setCurrentPage: (page: number) => void;
  tags: string[];
  filteredPosts: Post[];
  visiblePosts: Post[];
  totalPages: number;
  paginationItems: Array<number | "ellipsis">;
};

const useBlogIndex = (posts: Post[]): UseBlogIndexResult => {
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

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
    return Math.max(1, Math.ceil(filteredPosts.length / PAGE_SIZE));
  }, [filteredPosts.length]);

  const paginationItems = useMemo<Array<number | "ellipsis">>(() => {
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
    const startIndex = (currentPage - 1) * PAGE_SIZE;
    return filteredPosts.slice(startIndex, startIndex + PAGE_SIZE);
  }, [currentPage, filteredPosts]);

  useEffect(() => {
    setCurrentPage(1);
  }, [activeTag]);

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [currentPage, totalPages]);

  return {
    activeTag,
    setActiveTag,
    currentPage,
    setCurrentPage,
    tags,
    filteredPosts,
    visiblePosts,
    totalPages,
    paginationItems,
  };
};

export default useBlogIndex;
