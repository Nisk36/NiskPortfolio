"use client";

import React from "react";
import { getBlogIndexButtonClassName } from "@/components/blogIndexButtonStyles";

type TagFilterProps = {
  activeTag: string | null;
  tags: string[];
  onSelectTag: (tag: string | null) => void;
};

const TagFilter = ({ activeTag, tags, onSelectTag }: TagFilterProps) => {
  const baseClass = "rounded-full border px-3 py-1 text-xs transition";
  const activeClass = "border-[var(--accent)] text-[var(--accent)]";
  const inactiveClass =
    "border-[var(--line)] text-[var(--muted)] hover:border-[var(--accent)] hover:text-[var(--text)]";
  return (
    <div className="space-y-2">
      <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
        タグで絞り込む
      </p>
      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => onSelectTag(null)}
          className={getBlogIndexButtonClassName({
            baseClass,
            activeClass,
            inactiveClass,
            isActive: activeTag === null,
          })}
        >
          すべて
        </button>
        {tags.map((tag) => (
          <button
            key={tag}
            type="button"
            onClick={() => onSelectTag(tag)}
            className={getBlogIndexButtonClassName({
              baseClass,
              activeClass,
              inactiveClass,
              isActive: activeTag === tag,
            })}
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TagFilter;
