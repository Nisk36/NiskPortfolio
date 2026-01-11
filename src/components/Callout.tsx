import type { ReactNode } from "react";

type CalloutProps = {
  children: ReactNode;
};

const Callout = ({ children }: CalloutProps) => {
  return <div className="callout">{children}</div>;
};

export default Callout;
