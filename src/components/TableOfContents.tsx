"use client";

import { useTableOfContents } from "@/hooks/useTableOfContents";

type TableOfContentsProps = {
  contentSelector: string;
};

const TableOfContents = ({ contentSelector }: TableOfContentsProps) => {
  const { headings } = useTableOfContents(contentSelector);

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
