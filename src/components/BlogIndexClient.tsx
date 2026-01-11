"use client";

import type { Post } from "contentlayer/generated";
import Pagination from "@/components/Pagination";
import PostList from "@/components/PostList";
import TagFilter from "@/components/TagFilter";
import useBlogIndex from "@/hooks/useBlogIndex";

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
      <TagFilter activeTag={activeTag} tags={tags} onSelectTag={setActiveTag} />
      <PostList posts={visiblePosts} isEmpty={filteredPosts.length === 0} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        items={paginationItems}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default BlogIndexClient;
