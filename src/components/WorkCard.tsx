import type { Work } from "contentlayer/generated";
import BaseCard from "@/components/BaseCard";

type WorkCardProps = {
  work: Work;
  variant: "home" | "index";
};

const WorkCard = ({ work, variant }: WorkCardProps) => {
  const summaryText = work.summary ?? "詳細を見る";
  const isHome = variant === "home";
  const HeadingTag = isHome ? "h3" : "h2";
  const headingClassName = isHome
    ? "text-base font-semibold text-[var(--text)]"
    : "text-lg font-semibold text-[var(--text)]";

  return (
    <BaseCard href={`/works/${work.slug}`} isHome={isHome}>
      <div className="flex flex-wrap items-center gap-3 text-xs text-[var(--muted)]">
        <span>{work.period}</span>
        {work.stack?.length ? <span>{work.stack.join(" / ")}</span> : null}
      </div>
      <HeadingTag className={headingClassName}>{work.title}</HeadingTag>
      <p className="text-sm text-[var(--muted)]">{summaryText}</p>
    </BaseCard>
  );
};

export default WorkCard;
