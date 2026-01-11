import Link from "next/link";
import type { Post } from "contentlayer/generated";
import PostCardHome from "@/components/PostCardHome";

type HomeLatestBlogProps = {
  posts: Post[];
};

const HomeLatestBlog = ({ posts }: HomeLatestBlogProps) => (
  <section className="space-y-6">
    <div className="flex items-center justify-between">
      <h2 className="text-xl font-semibold">Latest Blog</h2>
      <Link href="/blog" className="text-sm">
        すべて見る
      </Link>
    </div>
    <div className="grid gap-4 md:grid-cols-3">
      {posts.map((post) => (
        <PostCardHome key={post._id} post={post} />
      ))}
    </div>
  </section>
);

export default HomeLatestBlog;
