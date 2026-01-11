import type { Work } from "contentlayer/generated";
import WorkCardIndex from "@/components/WorkCardIndex";

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
          <WorkCardIndex key={work._id} work={work} />
        ))}
      </div>
    </main>
  </div>
);

export default WorksView;
