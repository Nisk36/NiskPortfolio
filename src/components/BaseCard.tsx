import Link from "next/link";
import type { ReactNode } from "react";

type BaseCardProps = {
  href: string;
  isHome: boolean;
  children: ReactNode;
  className?: string;
};

const BaseCard = ({ href, isHome, children, className }: BaseCardProps) => {
  const layoutClass = isHome ? "h-full gap-3 p-4" : "gap-2 p-4";
  const classNames = [
    "card-base",
    layoutClass,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Link href={href} className={classNames}>
      {children}
    </Link>
  );
};

export default BaseCard;
