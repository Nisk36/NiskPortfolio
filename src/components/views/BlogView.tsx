import type { Post } from "contentlayer/generated";
import BlogIndexClient from "../BlogIndexClient";
import PageContainer from "../PageContainer";

type BlogViewProps = {
  posts: Post[];
};

const BlogView = ({ posts }: BlogViewProps) => (
  <PageContainer>
    <main className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-2xl font-semibold">Blog</h1>
        <p className="text-sm text-[var(--muted)]">
          仕事や個人開発での備忘録やメモを書いていきます。
        </p>
      </div>
      <BlogIndexClient posts={posts} />
    </main>
  </PageContainer>
);

export default BlogView;
