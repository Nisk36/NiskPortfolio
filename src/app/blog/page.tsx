import { allPosts } from "contentlayer/generated";
import BlogIndexClient from "../../components/BlogIndexClient";

const BlogIndex = () => {
  const posts = [...allPosts]
    .filter((post) => !post.draft)
    .sort((a, b) => +new Date(b.date) - +new Date(a.date));

  return (
    <div className="container py-12">
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
};

export default BlogIndex;
