import Link from "next/link";
import type { Work } from "contentlayer/generated";

type WorksViewProps = {
  works: Work[];
};

const WorksView = ({ works }: WorksViewProps) => (
  <div className="container pt-24 pb-16">
    <main className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-2xl font-semibold">Works</h1>
        <p className="text-sm text-[var(--muted)]">
          実績は準備中です。順次追加していきます。
        </p>
      </div>
      <div className="grid gap-4">
        {works.map((work) => (
          <Link
            key={work._id}
            href={`/works/${work.slug}`}
            className="surface pixel-frame flex flex-col gap-2 p-4 no-underline"
          >
            <div className="flex flex-wrap items-center gap-3 text-xs text-[var(--muted)]">
              <span>{work.period}</span>
              {work.stack?.length ? (
                <span>{work.stack.join(" / ")}</span>
              ) : null}
            </div>
            <h2 className="text-lg font-semibold text-[var(--text)]">
              {work.title}
            </h2>
            <p className="text-sm text-[var(--muted)]">{work.summary}</p>
          </Link>
        ))}
      </div>
    </main>
  </div>
);

export default WorksView;
