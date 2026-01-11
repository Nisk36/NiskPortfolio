import Link from "next/link";
import type { Post, Work } from "contentlayer/generated";
import EmailIcon from "../icons/EmailIcon";
import GitHubIcon from "../icons/GitHubIcon";
import RssIcon from "../icons/RssIcon";

type HomeViewProps = {
  posts: Post[];
  works: Work[];
};

const HomeView = ({ posts, works }: HomeViewProps) => (
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

        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">Latest Work</h2>
            <Link href="/works" className="text-sm">
              すべて見る
            </Link>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {works.map((work) => (
              <Link
                key={work._id}
                href={`/works/${work.slug}`}
                className="surface pixel-frame flex h-full flex-col gap-3 p-4 no-underline"
              >
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-3 text-xs text-[var(--muted)]">
                    <span>{work.period}</span>
                    {work.stack?.length ? (
                      <span>{work.stack.join(" / ")}</span>
                    ) : null}
                  </div>
                  <h3 className="text-base font-semibold text-[var(--text)]">
                    {work.title}
                  </h3>
                </div>
                <p className="text-sm text-[var(--muted)]">
                  {work.summary ?? "詳細を見る"}
                </p>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </div>
    <footer id="contact" className="mt-12">
      <div className="container py-10">
        <div className="flex flex-col items-center gap-4 text-center">
          <p className="text-sm text-[var(--muted)]">Contact</p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
            <a
              href="mailto:nisknishimura@gmail.com"
              aria-label="Email"
              className="inline-flex items-center justify-center text-[var(--text)] hover:text-[var(--muted)]"
            >
              <EmailIcon aria-hidden="true" className="h-5 w-5" />
            </a>
            <a
              href="https://github.com/Nisk36"
              aria-label="GitHub"
              className="inline-flex items-center justify-center text-[var(--text)] hover:text-[var(--muted)]"
            >
              <GitHubIcon aria-hidden="true" className="h-5 w-5" />
            </a>
            <a
              href="https://nisk36.github.io/NiskPortfolio/feed.xml"
              aria-label="RSS"
              className="inline-flex items-center justify-center text-[var(--text)] hover:text-[var(--muted)]"
            >
              <RssIcon aria-hidden="true" className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  </>
);

export default HomeView;
