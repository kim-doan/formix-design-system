import { HTMLAttributes } from "react";
import { Icon } from "../Icon";
import * as styles from "./Pagenation.css";

export interface PagenationProps extends HTMLAttributes<HTMLDivElement> {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  disabled?: boolean;
}

export default function Pagenation({
  currentPage,
  totalPages,
  onPageChange,
  disabled = false,
  className,
  style,
  ...props
}: PagenationProps) {
  const getVisiblePages = () => {
    const maxVisiblePages = 10;
    const pages: number[] = [];

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      const halfVisible = Math.floor(maxVisiblePages / 2);
      let start = Math.max(1, currentPage - halfVisible);
      let end = Math.min(totalPages, start + maxVisiblePages - 1);

      if (end - start + 1 < maxVisiblePages) {
        start = Math.max(1, end - maxVisiblePages + 1);
      }

      for (let i = start; i <= end; i++) {
        pages.push(i);
      }
    }

    return pages;
  };

  const handlePageClick = (page: number) => {
    if (!disabled && page !== currentPage && page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  const handlePrevious = () => {
    if (!disabled && currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (!disabled && currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const visiblePages = getVisiblePages();
  const isPrevDisabled = disabled || currentPage <= 1;
  const isNextDisabled = disabled || currentPage >= totalPages;

  const containerClass = [styles.container, className]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={containerClass} style={style} {...props}>
      <button
        className={`${styles.navButton} ${
          isPrevDisabled ? styles.disabled : ""
        }`}
        onClick={handlePrevious}
        disabled={isPrevDisabled}
        aria-label="Previous page"
      >
        <Icon name="chevronLeftTightSmall" />
      </button>

      <div className={styles.pageNumbers}>
        {visiblePages.map((page) => (
          <button
            key={page}
            className={`${styles.pageButton} ${
              page === currentPage ? styles.active : ""
            } ${disabled ? styles.disabled : ""}`}
            onClick={() => handlePageClick(page)}
            disabled={disabled}
            aria-label={`Page ${page}`}
            aria-current={page === currentPage ? "page" : undefined}
          >
            {page}
          </button>
        ))}
      </div>

      <button
        className={`${styles.navButton} ${
          isNextDisabled ? styles.disabled : ""
        }`}
        onClick={handleNext}
        disabled={isNextDisabled}
        aria-label="Next page"
      >
        <Icon name="chevronRightTightSmall" />
      </button>
    </div>
  );
}
