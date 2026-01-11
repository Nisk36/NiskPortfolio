type BlogIndexButtonClassOptions = {
  baseClass: string;
  activeClass: string;
  inactiveClass: string;
  isActive: boolean;
};

export const getBlogIndexButtonClassName = ({
  baseClass,
  activeClass,
  inactiveClass,
  isActive,
}: BlogIndexButtonClassOptions) =>
  [baseClass, isActive ? activeClass : inactiveClass].join(" ");
