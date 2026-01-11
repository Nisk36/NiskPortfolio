import { notFound } from "next/navigation";
import BlogShowView from "../../../components/views/BlogShowView";
import { getPostBySlug, getPostSlugs } from "../../../models/posts";

export function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

const BlogShow = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return notFound();

  return <BlogShowView post={post} />;
};

export default BlogShow;
