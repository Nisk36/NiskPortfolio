import type { Work } from "contentlayer/generated";
import BaseCard from "@/components/BaseCard";

type WorkCardIndexProps = {
  work: Work;
};

const WorkCardIndex = ({ work }: WorkCardIndexProps) => {
  const summaryText = work.summary ?? "詳細を見る";

  return (
    <BaseCard href={`/works/${work.slug}`} isHome={false}>
      <div className="flex flex-wrap items-center gap-3 text-xs text-[var(--muted)]">
        <span>{work.period}</span>
        {work.stack?.length ? <span>{work.stack.join(" / ")}</span> : null}
      </div>
      <h2 className="text-lg font-semibold text-[var(--text)]">
        {work.title}
      </h2>
      <p className="text-sm text-[var(--muted)]">{summaryText}</p>
    </BaseCard>
  );
};

export default WorkCardIndex;
