import { forwardRef, type HTMLAttributes } from 'react';
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-react';
import { cn } from '../../utils/cn';

export interface PaginationProps extends Omit<HTMLAttributes<HTMLElement>, 'onChange'> {
  /** Current page (1-indexed) */
  currentPage: number;
  /** Total number of pages */
  totalPages: number;
  /** Change handler */
  onChange: (page: number) => void;
  /** Number of page buttons to show */
  siblingCount?: number;
  /** Show first/last buttons */
  showFirstLast?: boolean;
  /** Show page info text */
  showInfo?: boolean;
  /** Total items count */
  totalItems?: number;
  /** Items per page */
  itemsPerPage?: number;
  /** Disabled state */
  disabled?: boolean;
  /** Size variant */
  size?: 'sm' | 'md' | 'lg';
}

const sizeStyles = {
  sm: 'h-8 min-w-8 text-sm',
  md: 'h-10 min-w-10 text-base',
  lg: 'h-12 min-w-12 text-lg',
};

const iconSizes = {
  sm: 14,
  md: 16,
  lg: 20,
};

export const Pagination = forwardRef<HTMLElement, PaginationProps>(
  (
    {
      currentPage,
      totalPages,
      onChange,
      siblingCount = 1,
      showFirstLast = true,
      showInfo = false,
      totalItems,
      itemsPerPage,
      disabled = false,
      size = 'md',
      className,
      ...props
    },
    ref
  ) => {
    const generatePageNumbers = (): (number | 'ellipsis')[] => {
      const pages: (number | 'ellipsis')[] = [];
      const totalNumbers = siblingCount * 2 + 3; // siblings + current + first + last
      const totalBlocks = totalNumbers + 2; // + 2 ellipsis

      if (totalPages <= totalBlocks) {
        return Array.from({ length: totalPages }, (_, i) => i + 1);
      }

      const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
      const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPages);

      const showLeftEllipsis = leftSiblingIndex > 2;
      const showRightEllipsis = rightSiblingIndex < totalPages - 1;

      if (!showLeftEllipsis && showRightEllipsis) {
        const leftRange = 1 + 2 * siblingCount + 1;
        for (let i = 1; i <= leftRange; i++) pages.push(i);
        pages.push('ellipsis');
        pages.push(totalPages);
      } else if (showLeftEllipsis && !showRightEllipsis) {
        pages.push(1);
        pages.push('ellipsis');
        const rightRange = totalPages - (2 * siblingCount + 1);
        for (let i = rightRange; i <= totalPages; i++) pages.push(i);
      } else {
        pages.push(1);
        pages.push('ellipsis');
        for (let i = leftSiblingIndex; i <= rightSiblingIndex; i++) pages.push(i);
        pages.push('ellipsis');
        pages.push(totalPages);
      }

      return pages;
    };

    const pageNumbers = generatePageNumbers();
    const iconSize = iconSizes[size];

    const buttonClasses = cn(
      'flex items-center justify-center rounded-md transition-colors',
      'focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2',
      sizeStyles[size],
      disabled && 'opacity-50 cursor-not-allowed'
    );

    const PageButton = ({
      page,
      isActive,
    }: {
      page: number;
      isActive: boolean;
    }) => (
      <button
        type="button"
        onClick={() => !disabled && onChange(page)}
        disabled={disabled}
        aria-current={isActive ? 'page' : undefined}
        className={cn(
          buttonClasses,
          'px-3',
          isActive
            ? 'bg-primary text-white'
            : 'text-neutral-600 hover:bg-neutral-100'
        )}
      >
        {page}
      </button>
    );

    const NavButton = ({
      direction,
      double,
    }: {
      direction: 'prev' | 'next';
      double?: boolean;
    }) => {
      const isPrev = direction === 'prev';
      const targetPage = double
        ? isPrev ? 1 : totalPages
        : isPrev ? currentPage - 1 : currentPage + 1;
      const isDisabled = disabled || (isPrev ? currentPage === 1 : currentPage === totalPages);

      const Icon = double
        ? isPrev ? ChevronsLeft : ChevronsRight
        : isPrev ? ChevronLeft : ChevronRight;

      return (
        <button
          type="button"
          onClick={() => !isDisabled && onChange(targetPage)}
          disabled={isDisabled}
          aria-label={double ? (isPrev ? 'First page' : 'Last page') : (isPrev ? 'Previous page' : 'Next page')}
          className={cn(
            buttonClasses,
            isDisabled
              ? 'text-neutral-300 cursor-not-allowed'
              : 'text-neutral-600 hover:bg-neutral-100'
          )}
        >
          <Icon size={iconSize} />
        </button>
      );
    };

    // Calculate info text
    const startItem = totalItems && itemsPerPage
      ? (currentPage - 1) * itemsPerPage + 1
      : undefined;
    const endItem = totalItems && itemsPerPage
      ? Math.min(currentPage * itemsPerPage, totalItems)
      : undefined;

    return (
      <nav
        ref={ref}
        role="navigation"
        aria-label="Pagination"
        className={cn('flex items-center gap-2', className)}
        {...props}
      >
        {showInfo && totalItems !== undefined && (
          <span className="text-sm text-neutral-500 mr-4">
            {startItem}-{endItem} of {totalItems}
          </span>
        )}

        {showFirstLast && <NavButton direction="prev" double />}
        <NavButton direction="prev" />

        <div className="flex items-center gap-1">
          {pageNumbers.map((page, index) =>
            page === 'ellipsis' ? (
              <span
                key={`ellipsis-${index}`}
                className={cn('px-2 text-neutral-400', sizeStyles[size])}
              >
                ...
              </span>
            ) : (
              <PageButton
                key={page}
                page={page}
                isActive={page === currentPage}
              />
            )
          )}
        </div>

        <NavButton direction="next" />
        {showFirstLast && <NavButton direction="next" double />}
      </nav>
    );
  }
);

Pagination.displayName = 'Pagination';
