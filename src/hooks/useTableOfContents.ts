import { useEffect, useState } from "react";

import { slugify } from "@/utils/slug";

type HeadingItem = {
  id: string;
  text: string;
  level: number;
};

export const useTableOfContents = (contentSelector: string) => {
  const [headings, setHeadings] = useState<HeadingItem[]>([]);

  useEffect(() => {
    const content = document.querySelector(contentSelector);
    if (!content) {
      setHeadings([]);
      return;
    }

    const elements = Array.from(
      content.querySelectorAll<HTMLHeadingElement>("h2, h3"),
    );
    const slugCounts = new Map<string, number>();

    const nextHeadings = elements.map((element) => {
      const text = element.textContent?.trim() ?? "";
      const baseSlug = slugify(text);
      const count = slugCounts.get(baseSlug) ?? 0;
      slugCounts.set(baseSlug, count + 1);
      const slug = count ? `${baseSlug}-${count + 1}` : baseSlug;
      if (!element.id) {
        element.id = slug;
      }
      return {
        id: element.id,
        text,
        level: Number(element.tagName.replace("H", "")),
      };
    });

    setHeadings(nextHeadings);
  }, [contentSelector]);

  return { headings };
};

export type { HeadingItem };
