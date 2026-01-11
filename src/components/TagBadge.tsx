import type { ReactNode } from "react";

type TagBadgeProps = {
  children: ReactNode;
  className?: string;
};

const TagBadge = ({ children, className }: TagBadgeProps) => (
  <span className={className ? `tag-badge ${className}` : "tag-badge"}>
    {children}
  </span>
);

export default TagBadge;
