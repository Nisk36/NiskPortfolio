import Link from "next/link";
import type { Post } from "contentlayer/generated";

type HomeViewProps = {
  posts: Post[];
};

const HomeView = ({ posts }: HomeViewProps) => (
  <>
    <div className="container pt-24 pb-16">
      <main className="flex flex-col gap-12">
        <section className="flex flex-col gap-6">
          <div className="space-y-4">
            <h1 className="text-3xl font-semibold leading-tight sm:text-4xl">
              伝わる体験を設計し、プロダクトとブランドの関係性を磨きます。
            </h1>
            <p className="max-w-2xl text-base text-[var(--muted)]">
              UX設計・コンテンツ設計・情報設計を軸に、読みやすく、行動につながる体験づくりを支援しています。
            </p>
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
                className="surface pixel-frame flex h-full flex-col gap-3 p-4 no-underline"
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
                  {post.summary ?? "続きを読む"}
                </p>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </div>
    <footer id="contact" className="mt-12">
      <div className="container py-10">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm text-[var(--muted)]">Contact</p>
          </div>
          <div className="flex flex-wrap gap-4 text-sm sm:mt-0 mt-2">
            <a href="mailto:nisknishimura@gmail.com">
              nisknishimura@gmail.com
            </a>
            <a href="https://github.com/Nisk36">GitHub</a>
            <a href="https://x.com/">X (Twitter)</a>
            <a href="https://nisk36.github.io/NiskPortfolio/feed.xml">
              RSS
            </a>
          </div>
        </div>
      </div>
    </footer>
  </>
);

export default HomeView;
