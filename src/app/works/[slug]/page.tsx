import { notFound } from 'next/navigation';
import { allWorks } from 'contentlayer/generated';
import MDXRender from '../../../components/MDXRender';

export function generateStaticParams() {
  return allWorks.map((w) => ({ slug: w.slug }));
}

const WorkShow = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const work = allWorks.find((w) => w.slug === slug);
  if (!work) return notFound();

  return (
    <article style={{ padding: 24 }}>
      <h1>{work.title}</h1>
      <p style={{ opacity: 0.75, marginTop: -8 }}>
        {work.period} ・ {work.role?.join(', ')} ・ {work.stack?.join(', ')}
      </p>
      <p style={{ marginTop: 8 }}>{work.summary}</p>

      <MDXRender code={work.body.code} />
    </article>
  );
};

export default WorkShow;
