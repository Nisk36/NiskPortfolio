import type { Work } from "contentlayer/generated";
import BaseCard from "@/components/BaseCard";
import CardMetaRow from "@/components/CardMetaRow";

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
      <CardMetaRow>
        <span>{work.period}</span>
        {work.stack?.length ? <span>{work.stack.join(" / ")}</span> : null}
      </CardMetaRow>
      <HeadingTag className={headingClassName}>{work.title}</HeadingTag>
      <p className="text-sm text-[var(--muted)]">{summaryText}</p>
    </BaseCard>
  );
};

export default WorkCard;
