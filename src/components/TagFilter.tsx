"use client";

import React from "react";

type TagFilterProps = {
  activeTag: string | null;
  tags: string[];
  onSelectTag: (tag: string | null) => void;
};

const TagFilter = ({ activeTag, tags, onSelectTag }: TagFilterProps) => {
  return (
    <div className="space-y-2">
      <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
        タグで絞り込む
      </p>
      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => onSelectTag(null)}
          className={`rounded-full border px-3 py-1 text-xs transition ${
            activeTag === null
              ? "border-[var(--accent)] text-[var(--accent)]"
              : "border-[var(--line)] text-[var(--muted)] hover:border-[var(--accent)] hover:text-[var(--text)]"
          }`}
        >
          すべて
        </button>
        {tags.map((tag) => (
          <button
            key={tag}
            type="button"
            onClick={() => onSelectTag(tag)}
            className={`rounded-full border px-3 py-1 text-xs transition ${
              activeTag === tag
                ? "border-[var(--accent)] text-[var(--accent)]"
                : "border-[var(--line)] text-[var(--muted)] hover:border-[var(--accent)] hover:text-[var(--text)]"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TagFilter;
