import Link from "next/link";
import type { Work } from "contentlayer/generated";

type WorkCardProps = {
  work: Work;
  variant?: "home" | "index";
  summaryFallback?: string;
};

const WorkCard = ({
  work,
  variant = "index",
  summaryFallback,
}: WorkCardProps) => {
  const isHome = variant === "home";
  const summaryText = work.summary ?? summaryFallback;

  return (
    <Link
      href={`/works/${work.slug}`}
      className={`surface pixel-frame flex flex-col no-underline ${
        isHome ? "h-full gap-3 p-4" : "gap-2 p-4"
      }`}
    >
      <div className="flex flex-wrap items-center gap-3 text-xs text-[var(--muted)]">
        <span>{work.period}</span>
        {work.stack?.length ? <span>{work.stack.join(" / ")}</span> : null}
      </div>
      {isHome ? (
        <h3 className="text-base font-semibold text-[var(--text)]">
          {work.title}
        </h3>
      ) : (
        <h2 className="text-lg font-semibold text-[var(--text)]">
          {work.title}
        </h2>
      )}
      <p className="text-sm text-[var(--muted)]">{summaryText}</p>
    </Link>
  );
};

export default WorkCard;
