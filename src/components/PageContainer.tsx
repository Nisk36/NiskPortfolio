import type { ReactNode } from "react";

type PageContainerProps = {
  children: ReactNode;
  className?: string;
};

const PageContainer = ({ children, className }: PageContainerProps) => {
  const classNames = ["container pt-24 pb-16", className]
    .filter(Boolean)
    .join(" ");

  return <div className={classNames}>{children}</div>;
};

export default PageContainer;
