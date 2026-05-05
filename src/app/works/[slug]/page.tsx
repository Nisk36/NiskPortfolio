import { notFound } from "next/navigation";
import type { Metadata } from "next";
import WorkShowView from "../../../components/views/WorkShowView";
import { getWorkBySlug, getWorkSlugs } from "../../../models/works";

export function generateStaticParams() {
  return getWorkSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const work = getWorkBySlug(slug);
  if (!work) return {};

  return {
    title: work.title,
    description: work.summary,
    alternates: {
      canonical: `works/${work.slug}`,
    },
    openGraph: {
      title: work.title,
      description: work.summary,
      type: "article",
      url: `works/${work.slug}`,
    },
  };
}

const WorkShow = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const work = getWorkBySlug(slug);
  if (!work) return notFound();

  return <WorkShowView work={work} />;
};

export default WorkShow;
