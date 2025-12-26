import Link from 'next/link';
import { allPosts } from 'contentlayer/generated';

const Home = () => {
  const posts = [...allPosts]
    .filter((post) => !post.draft)
    .sort((a, b) => +new Date(b.date) - +new Date(a.date))
    .slice(0, 3);

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-5xl flex-col gap-16 px-6 py-16 sm:px-10">
      <section className="flex flex-col gap-6">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500">Example</p>
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-semibold leading-tight text-neutral-900 sm:text-5xl">
            Example Example Example
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-neutral-600 sm:text-lg">
            Example Example Example Example Example.
          </p>
        </div>
      </section>

      <section className="flex flex-col gap-6">
        <div className="flex items-center justify-between gap-4">
          <h2 className="text-xl font-semibold text-neutral-900 sm:text-2xl">Example</h2>
          <Link className="text-sm font-medium text-neutral-600 hover:text-neutral-900" href="/blog">
            Example
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {posts.map((post) => (
            <article
              key={post._id}
              className="flex flex-col gap-3 rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm"
            >
              <div className="text-xs font-medium uppercase tracking-[0.15em] text-neutral-400">
                {new Date(post.date).toLocaleDateString('ja-JP')}
              </div>
              <h3 className="text-lg font-semibold text-neutral-900">
                <Link className="hover:text-neutral-700" href={`/blog/${post.slug}`}>
                  {post.title}
                </Link>
              </h3>
              <p className="text-sm leading-relaxed text-neutral-600">{post.summary}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-4 rounded-3xl border border-neutral-200 bg-neutral-50 p-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-xl font-semibold text-neutral-900">Example Example</h2>
          <p className="mt-2 text-sm text-neutral-600">Example Example Example Example.</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link
            className="inline-flex items-center justify-center rounded-full bg-neutral-900 px-5 py-2 text-sm font-semibold text-white transition hover:bg-neutral-700"
            href="/blog"
          >
            Example Blog
          </Link>
          <Link
            className="inline-flex items-center justify-center rounded-full border border-neutral-300 px-5 py-2 text-sm font-semibold text-neutral-700 transition hover:border-neutral-400 hover:text-neutral-900"
            href="/contact"
          >
            Example Contact
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Home;
