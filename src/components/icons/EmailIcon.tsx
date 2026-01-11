import type { SVGProps } from "react";

const EmailIcon = ({
  className = "h-5 w-5",
  "aria-hidden": ariaHidden = true,
  ...props
}: SVGProps<SVGSVGElement>) => (
  <svg
    aria-hidden={ariaHidden}
    viewBox="0 0 24 24"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M4 6h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Z" />
    <path d="m22 8-10 6L2 8" />
  </svg>
);

export default EmailIcon;
