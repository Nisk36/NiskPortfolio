import { notFound } from "next/navigation";
import WorkShowView from "../../../components/views/WorkShowView";
import { getWorkBySlug, getWorkSlugs } from "../../../models/works";

export function generateStaticParams() {
  return getWorkSlugs().map((slug) => ({ slug }));
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
