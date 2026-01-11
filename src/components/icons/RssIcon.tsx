import type { SVGProps } from "react";

const RssIcon = ({ className, ...props }: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} {...props}>
    <path d="M6.18 17.82a1.64 1.64 0 1 1 0-3.28 1.64 1.64 0 0 1 0 3.28Z" />
    <path d="M4 10.5a9.5 9.5 0 0 1 9.5 9.5h-2a7.5 7.5 0 0 0-7.5-7.5v-2Z" />
    <path d="M4 4a16 16 0 0 1 16 16h-2A14 14 0 0 0 4 6V4Z" />
  </svg>
);

export default RssIcon;
