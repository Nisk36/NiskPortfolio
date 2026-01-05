"use client";

import { useEffect, useState } from "react";

type HeadingItem = {
  id: string;
  text: string;
  level: number;
};

type TableOfContentsProps = {
  contentSelector: string;
};

const slugify = (value: string) => {
  const slug = value
    .toLowerCase()
    .trim()
    .replace(/[^\p{L}\p{N}]+/gu, "-")
    .replace(/(^-|-$)+/g, "");
  return slug || "section";
};

const TableOfContents = ({ contentSelector }: TableOfContentsProps) => {
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

  if (headings.length === 0) {
    return (
      <p className="text-sm text-[var(--muted)]">目次はありません。</p>
    );
  }

  return (
    <nav aria-label="目次">
      <ul className="space-y-2 text-sm">
        {headings.map((heading) => (
          <li key={heading.id}>
            <a
              href={`#${heading.id}`}
              className={`block text-[var(--muted)] transition hover:text-[var(--text)] ${
                heading.level === 3 ? "pl-4" : ""
              }`}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default TableOfContents;
