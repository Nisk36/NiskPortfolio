import type { Work } from "contentlayer/generated";
import MDXRender from "../MDXRender";

type WorkShowViewProps = {
  work: Work;
};

const WorkShowView = ({ work }: WorkShowViewProps) => (
  <div className="container py-12">
    <article className="space-y-6">
      <header className="space-y-2">
        <p className="text-xs text-[var(--muted)]">
          {work.period} ・ {work.role?.join(", ")} ・ {work.stack?.join(" / ")}
        </p>
        <h1 className="text-3xl font-semibold">{work.title}</h1>
        <p className="text-base text-[var(--muted)]">{work.summary}</p>
      </header>
      <div className="content text-[var(--text)]">
        <MDXRender code={work.body.code} />
      </div>
    </article>
  </div>
);

export default WorkShowView;
