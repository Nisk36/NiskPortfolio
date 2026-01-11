import type { ReactNode } from "react";

type CardMetaRowProps = {
  children: ReactNode;
  className?: string;
};

const CardMetaRow = ({ children, className }: CardMetaRowProps) => {
  const baseClassName =
    "flex flex-wrap items-center gap-3 text-xs text-[var(--muted)]";

  return (
    <div className={className ? `${baseClassName} ${className}` : baseClassName}>
      {children}
    </div>
  );
};

export default CardMetaRow;
