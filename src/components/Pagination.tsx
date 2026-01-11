"use client";

type PaginationItem = number | "ellipsis";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  items: PaginationItem[];
  onPageChange: (page: number) => void;
};

const Pagination = ({ currentPage, totalPages, items, onPageChange }: PaginationProps) => {
  if (totalPages <= 1) {
    return null;
  }

  return (
    <div className="flex flex-wrap items-center justify-center gap-2">
      {items.map((item, index) => {
        if (item === "ellipsis") {
          return (
            <span
              key={`ellipsis-${index}`}
              className="flex h-9 w-9 items-center justify-center text-xs text-[var(--muted)]"
            >
              …
            </span>
          );
        }
        const pageNumber = item;
        const isActive = item === currentPage;
        return (
          <button
            key={pageNumber}
            type="button"
            onClick={() => onPageChange(pageNumber)}
            className={`flex h-9 w-9 items-center justify-center rounded-full border text-xs transition ${
              isActive
                ? "border-[var(--accent)] bg-[var(--accent)] text-[var(--background)]"
                : "border-[var(--line)] text-[var(--muted)] hover:border-[var(--accent)] hover:text-[var(--text)]"
            }`}
          >
            {pageNumber}
          </button>
        );
      })}
    </div>
  );
};

export default Pagination;
