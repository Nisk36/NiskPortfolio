import { notFound } from "next/navigation";
import type { Metadata } from "next";
import BlogShowView from "../../../components/views/BlogShowView";
import { getPostBySlug, getPostSlugs } from "../../../models/posts";

export function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.summary,
    alternates: {
      canonical: `blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.summary,
      type: "article",
      url: `blog/${post.slug}`,
    },
  };
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
