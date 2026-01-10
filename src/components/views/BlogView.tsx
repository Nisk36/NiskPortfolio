import type { Post } from "contentlayer/generated";
import BlogIndexClient from "../BlogIndexClient";

type BlogViewProps = {
  posts: Post[];
};

const BlogView = ({ posts }: BlogViewProps) => (
  <div className="container pt-24 pb-16">
    <main className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-2xl font-semibold">Blog</h1>
        <p className="text-sm text-[var(--muted)]">
          体験設計やプロダクトづくりのメモをまとめています。
        </p>
      </div>
      <BlogIndexClient posts={posts} />
    </main>
  </div>
);

export default BlogView;
