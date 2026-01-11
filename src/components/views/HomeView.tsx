import Link from "next/link";
import type { Post, Work } from "contentlayer/generated";
import PostCard from "@/components/PostCard";
import WorkCard from "@/components/WorkCard";

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
              <PostCard key={post._id} post={post} variant="home" />
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
              <WorkCard
                key={work._id}
                work={work}
                variant="home"
                summaryFallback="詳細を見る"
              />
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
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 6h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Z" />
                <path d="m22 8-10 6L2 8" />
              </svg>
            </a>
            <a
              href="https://github.com/Nisk36"
              aria-label="GitHub"
              className="inline-flex items-center justify-center text-[var(--text)] hover:text-[var(--muted)]"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="currentColor"
              >
                <path d="M12 2C6.477 2 2 6.484 2 12.02c0 4.432 2.865 8.19 6.839 9.52.5.093.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.108-1.466-1.108-1.466-.907-.62.069-.608.069-.608 1.003.07 1.531 1.033 1.531 1.033.892 1.53 2.341 1.088 2.91.832.091-.648.349-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.953 0-1.094.39-1.99 1.03-2.69-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.51 9.51 0 0 1 12 6.844c.851.004 1.705.115 2.504.337 1.909-1.296 2.748-1.026 2.748-1.026.546 1.378.203 2.397.1 2.65.64.7 1.028 1.596 1.028 2.69 0 3.85-2.338 4.697-4.566 4.946.359.31.679.92.679 1.855 0 1.338-.012 2.42-.012 2.75 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.02C22 6.484 17.523 2 12 2Z" />
              </svg>
            </a>
            <a
              href="https://nisk36.github.io/NiskPortfolio/feed.xml"
              aria-label="RSS"
              className="inline-flex items-center justify-center text-[var(--text)] hover:text-[var(--muted)]"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="currentColor"
              >
                <path d="M6.18 17.82a1.64 1.64 0 1 1 0-3.28 1.64 1.64 0 0 1 0 3.28Z" />
                <path d="M4 10.5a9.5 9.5 0 0 1 9.5 9.5h-2a7.5 7.5 0 0 0-7.5-7.5v-2Z" />
                <path d="M4 4a16 16 0 0 1 16 16h-2A14 14 0 0 0 4 6V4Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  </>
);

export default HomeView;
