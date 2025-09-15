import { notFound } from 'next/navigation';
import { allWorks } from 'contentlayer/generated';
import MDXRender from '../../../components/MDXRender';

export function generateStaticParams() {
  return allWorks.map((w) => ({ slug: w.slug }));
}

export default async function WorkShow({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
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

      {work.images?.length ? (
        <section style={{ marginTop: 16 }}>
          <h2>Images</h2>
          <ul>
            {work.images.map((url) => (
              <li key={url}>
                <a href={url}>{url}</a>
              </li>
            ))}
          </ul>
        </section>
      ) : null}
    </article>
  );
}