import { notFound } from 'next/navigation';
import { allWorks } from 'contentlayer/generated';
import { useMDXComponent } from 'next-contentlayer/hooks';

export function generateStaticParams() {
  return allWorks.map((w) => ({ slug: w.slug }));
}

export default function WorkShow({ params }: { params: { slug: string } }) {
  const work = allWorks.find((w) => w.slug === params.slug);
  if (!work) return notFound();

  const MDX = useMDXComponent(work.body.code);

  return (
    <article style={{ padding: 24 }}>
      <h1>{work.title}</h1>
      <p style={{ opacity: 0.75, marginTop: -8 }}>
        {work.period} ・ {work.role?.join(', ')} ・ {work.stack?.join(', ')}
      </p>
      <p style={{ marginTop: 8 }}>{work.summary}</p>

      <MDX />

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