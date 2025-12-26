import Link from 'next/link';
import { allWorks } from 'contentlayer/generated';

const WorksIndex = () => {
  const works = [...allWorks]
    .filter((w) => !w.draft)
    .sort((a, b) => +new Date(b.publishedAt) - +new Date(a.publishedAt));

  return (
    <main style={{ padding: 24 }}>
      <h1>Works</h1>
      <p style={{ opacity: 0.8, marginTop: 8 }}>
        準備中。今後追加予定です。
      </p>
      <ul>
        {works.map((w) => (
          <li key={w._id}>
            <Link href={`/works/${w.slug}`}>{w.title}</Link>{' '}
            <small style={{ opacity: 0.7 }}>{w.stack?.join(', ')}</small>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default WorksIndex;
