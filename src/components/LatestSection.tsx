import Link from "next/link";
import type { ReactNode } from "react";

type LatestSectionProps = {
  title: string;
  href: string;
  children: ReactNode;
  linkLabel?: string;
};

const LatestSection = ({
  title,
  href,
  children,
  linkLabel = "すべて見る",
}: LatestSectionProps) => (
  <section className="space-y-6">
    <div className="flex items-center justify-between">
      <h2 className="text-xl font-semibold">{title}</h2>
      <Link href={href} className="text-sm">
        {linkLabel}
      </Link>
    </div>
    <div className="grid gap-4 md:grid-cols-3">{children}</div>
  </section>
);

export default LatestSection;
