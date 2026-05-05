import type { Post } from "contentlayer/generated";
import LatestSection from "@/components/LatestSection";
import PostCard from "@/components/PostCard";

type HomeLatestBlogProps = {
  posts: Post[];
};

const HomeLatestBlog = ({ posts }: HomeLatestBlogProps) => {
  if (posts.length === 0) return null;

  return (
    <LatestSection title="Latest Blog" href="/blog">
      {posts.map((post) => (
        <PostCard key={post._id} post={post} variant="home" />
      ))}
    </LatestSection>
  );
};

export default HomeLatestBlog;
