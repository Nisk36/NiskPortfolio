import BlogView from "../../components/views/BlogView";
import { getPublishedPosts } from "../../models/posts";

const BlogIndex = () => {
  const posts = getPublishedPosts();

  return <BlogView posts={posts} />;
};

export default BlogIndex;
