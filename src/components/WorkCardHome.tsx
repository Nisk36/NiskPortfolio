import type { Work } from "contentlayer/generated";
import BaseCard from "@/components/BaseCard";

type WorkCardHomeProps = {
  work: Work;
};

const WorkCardHome = ({ work }: WorkCardHomeProps) => {
  const summaryText = work.summary ?? "詳細を見る";

  return (
    <BaseCard href={`/works/${work.slug}`} isHome>
      <div className="flex flex-wrap items-center gap-3 text-xs text-[var(--muted)]">
        <span>{work.period}</span>
        {work.stack?.length ? <span>{work.stack.join(" / ")}</span> : null}
      </div>
      <h3 className="text-base font-semibold text-[var(--text)]">
        {work.title}
      </h3>
      <p className="text-sm text-[var(--muted)]">{summaryText}</p>
    </BaseCard>
  );
};

export default WorkCardHome;
