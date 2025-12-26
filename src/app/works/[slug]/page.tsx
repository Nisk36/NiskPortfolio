import { notFound } from "next/navigation";
import { allWorks } from "contentlayer/generated";
import MDXRender from "../../../components/MDXRender";

export function generateStaticParams() {
  return allWorks.map((work) => ({ slug: work.slug }));
}

const WorkShow = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const work = allWorks.find((item) => item.slug === slug);
  if (!work) return notFound();

  return (
    <div className="container py-12">
      <article className="space-y-6">
        <header className="space-y-2">
          <p className="text-xs text-[var(--muted)]">
            {work.period} ・ {work.role?.join(", ")} ・ {work.stack?.join(" / ")}
          </p>
          <h1 className="text-3xl font-semibold">{work.title}</h1>
          <p className="text-base text-[var(--muted)]">{work.summary}</p>
        </header>
        <div className="content text-[var(--text)]">
          <MDXRender code={work.body.code} />
        </div>
      </article>
    </div>
  );
};

export default WorkShow;
