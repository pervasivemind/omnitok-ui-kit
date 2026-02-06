import { forwardRef, type HTMLAttributes, type ReactNode } from 'react';
import { ChevronRight, Home } from 'lucide-react';
import { cn } from '../../utils/cn';

export interface BreadcrumbItem {
  /** Display label */
  label: string;
  /** Navigation href */
  href?: string;
  /** Icon element */
  icon?: ReactNode;
}

export interface BreadcrumbProps extends HTMLAttributes<HTMLElement> {
  /** Breadcrumb items */
  items: BreadcrumbItem[];
  /** Show home icon on first item */
  showHomeIcon?: boolean;
  /** Separator element */
  separator?: ReactNode;
  /** Maximum items to show (collapses middle items) */
  maxItems?: number;
}

export const Breadcrumb = forwardRef<HTMLElement, BreadcrumbProps>(
  (
    {
      items,
      showHomeIcon = false,
      separator,
      maxItems,
      className,
      ...props
    },
    ref
  ) => {
    const renderSeparator = () =>
      separator || <ChevronRight className="w-4 h-4 text-neutral-400 mx-2" />;

    const renderItem = (item: BreadcrumbItem, index: number, isLast: boolean) => {
      const content = (
        <>
          {index === 0 && showHomeIcon && (
            <Home className="w-4 h-4 mr-1" />
          )}
          {item.icon && <span className="mr-1">{item.icon}</span>}
          {item.label}
        </>
      );

      const itemClasses = cn(
        'inline-flex items-center text-sm',
        isLast
          ? 'font-medium text-neutral-900'
          : 'text-neutral-500 hover:text-neutral-700 transition-colors'
      );

      if (item.href && !isLast) {
        return (
          <a href={item.href} className={itemClasses}>
            {content}
          </a>
        );
      }

      return <span className={itemClasses}>{content}</span>;
    };

    // Handle collapsed items
    let displayItems = items;
    const collapsed = maxItems && items.length > maxItems;

    if (collapsed && maxItems) {
      const firstItems = items.slice(0, 1);
      const lastItems = items.slice(-(maxItems - 2));
      displayItems = [
        ...firstItems,
        { label: '...' },
        ...lastItems,
      ];
    }

    return (
      <nav ref={ref} aria-label="Breadcrumb" className={className} {...props}>
        <ol className="flex items-center flex-wrap">
          {displayItems.map((item, index) => {
            const isLast = index === displayItems.length - 1;
            return (
              <li key={index} className="inline-flex items-center">
                {renderItem(item, index, isLast)}
                {!isLast && renderSeparator()}
              </li>
            );
          })}
        </ol>
      </nav>
    );
  }
);

Breadcrumb.displayName = 'Breadcrumb';
