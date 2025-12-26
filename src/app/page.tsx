import Link from "next/link";
import { allPosts } from "contentlayer/generated";

const Home = () => {
  const posts = [...allPosts]
    .filter((post) => !post.draft)
    .sort((a, b) => +new Date(b.date) - +new Date(a.date))
    .slice(0, 3);

  return (
    <div className="container py-16">
      <main className="flex flex-col gap-12">
        <section className="flex flex-col gap-6">
          <p className="text-sm uppercase tracking-[0.3em] text-[var(--muted)]">
            Portfolio
          </p>
          <div className="space-y-4">
            <h1 className="text-3xl font-semibold leading-tight sm:text-4xl">
              伝わる体験を設計し、プロダクトとブランドの関係性を磨きます。
            </h1>
            <p className="max-w-2xl text-base text-[var(--muted)]">
              UX設計・コンテンツ設計・情報設計を軸に、読みやすく、行動につながる体験づくりを支援しています。
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              className="surface hover-pixel px-4 py-2 text-sm font-medium no-underline"
              href="/blog"
            >
              Blogを読む
            </Link>
            <a className="px-4 py-2 text-sm font-medium" href="#contact">
              Contact
            </a>
          </div>
        </section>

        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">Latest Blog</h2>
            <Link href="/blog" className="text-sm">
              すべて見る
            </Link>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {posts.map((post) => (
              <Link
                key={post._id}
                href={`/blog/${post.slug}`}
                className="surface hover-pixel flex h-full flex-col gap-3 p-4 no-underline"
              >
                <div className="space-y-2">
                  <p className="text-xs text-[var(--muted)]">
                    {new Date(post.date).toLocaleDateString()}
                  </p>
                  <h3 className="text-base font-semibold text-[var(--text)]">
                    {post.title}
                  </h3>
                </div>
                <p className="text-sm text-[var(--muted)]">
                  {post.description ?? post.summary ?? "続きを読む"}
                </p>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
