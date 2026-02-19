import {
  forwardRef,
  useCallback,
  useEffect,
  useRef,
  useState,
  type HTMLAttributes,
  type KeyboardEvent,
  type ReactNode,
} from 'react';
import { cn } from '../../utils/cn';
import { Dropdown, type DropdownPlacement } from '.';

// ---------- Types ----------

export type DropdownMenuSize = 'sm' | 'md' | 'lg';

export interface DropdownMenuItem {
  /** Display label */
  label: string;
  /** Unique value identifier */
  value: string;
  /** Icon component */
  icon?: ReactNode;
  /** Navigation href — renders item as an anchor tag */
  href?: string;
  /** Click handler for this specific item */
  onClick?: () => void;
  /** Disabled state */
  disabled?: boolean;
  /** Danger / destructive style */
  danger?: boolean;
  /** Render a divider line above this item */
  dividerBefore?: boolean;
  /** Badge content */
  badge?: ReactNode;
}

export interface DropdownMenuProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onSelect'> {
  /** Card content */
  card?: ReactNode;
  /** Menu items */
  items: DropdownMenuItem[];
  /** Callback when any item is selected (fires in addition to item-level onClick) */
  onSelect?: (value: string) => void;
  /** Trigger element that opens the menu */
  trigger: ReactNode;
  /** Menu placement relative to trigger */
  placement?: DropdownPlacement;
  /** Distance in pixels between the trigger and the menu panel */
  offset?: number;
  /** Menu item size */
  size?: DropdownMenuSize;
  /** Disabled state (prevents opening) */
  disabled?: boolean;
}

// ---------- Style maps ----------

const sizeStyles: Record<DropdownMenuSize, string> = {
  sm: 'px-3 py-1.5 text-xs',
  md: 'px-4 py-2 text-sm',
  lg: 'px-4 py-2.5 text-base',
};

const iconSizeStyles: Record<DropdownMenuSize, string> = {
  sm: 'w-3.5 h-3.5',
  md: 'w-4 h-4',
  lg: 'w-5 h-5',
};

// ---------- Component ----------

export const DropdownMenu = forwardRef<HTMLDivElement, DropdownMenuProps>(
  (
    {
      card,
      items,
      onSelect,
      trigger,
      placement = 'bottom-start',
      offset = 4,
      size = 'md',
      disabled = false,
      className,
      ...props
    },
    ref
  ) => {
    const [isOpen, setIsOpen] = useState(false);
    const [highlightedIndex, setHighlightedIndex] = useState(-1);

    const menuRef = useRef<HTMLDivElement>(null);

    // ---- Helpers ----

    const enabledItems = items.filter((item) => !item.disabled);

    const findNextEnabledIndex = useCallback(
      (start: number, direction: 1 | -1): number => {
        const len = items.length;
        if (len === 0) return -1;

        for (let i = 0; i < len; i++) {
          const idx = (start + direction * (i + 1) + len) % len;
          if (!items[idx].disabled) return idx;
        }
        return -1;
      },
      [items]
    );

    const findFirstEnabledIndex = useCallback((): number => {
      return items.findIndex((item) => !item.disabled);
    }, [items]);

    const findLastEnabledIndex = useCallback((): number => {
      for (let i = items.length - 1; i >= 0; i--) {
        if (!items[i].disabled) return i;
      }
      return -1;
    }, [items]);

    // ---- Actions ----

    const open = useCallback(() => {
      if (disabled || enabledItems.length === 0) return;
      setIsOpen(true);
      setHighlightedIndex(-1);
    }, [disabled, enabledItems.length]);

    const close = useCallback(() => {
      setIsOpen(false);
      setHighlightedIndex(-1);
    }, []);

    const selectItem = useCallback(
      (item: DropdownMenuItem) => {
        if (item.disabled) return;
        item.onClick?.();
        onSelect?.(item.value);
        close();
      },
      [onSelect, close]
    );

    // ---- Open-state sync from Dropdown ----

    const handleOpenChange = useCallback(
      (nextOpen: boolean) => {
        if (nextOpen) {
          open();
        } else {
          close();
        }
      },
      [open, close]
    );

    // ---- Keyboard ----

    const handleKeyDown = useCallback(
      (e: KeyboardEvent) => {
        if (disabled) return;

        switch (e.key) {
          case 'ArrowDown': {
            e.preventDefault();
            if (!isOpen) {
              open();
            } else {
              setHighlightedIndex((prev) =>
                prev === -1 ? findFirstEnabledIndex() : findNextEnabledIndex(prev, 1)
              );
            }
            break;
          }
          case 'ArrowUp': {
            e.preventDefault();
            if (!isOpen) {
              open();
            } else {
              setHighlightedIndex((prev) =>
                prev === -1 ? findLastEnabledIndex() : findNextEnabledIndex(prev, -1)
              );
            }
            break;
          }
          case 'Enter':
          case ' ': {
            e.preventDefault();
            if (isOpen && highlightedIndex >= 0 && highlightedIndex < items.length) {
              const item = items[highlightedIndex];
              if (item.href && !item.disabled) {
                window.location.href = item.href;
              }
              selectItem(item);
            } else if (!isOpen) {
              open();
            }
            break;
          }
        }
      },
      [
        disabled,
        isOpen,
        highlightedIndex,
        items,
        open,
        selectItem,
        findNextEnabledIndex,
        findFirstEnabledIndex,
        findLastEnabledIndex,
      ]
    );

    // ---- Scroll highlighted into view ----

    useEffect(() => {
      if (highlightedIndex >= 0 && menuRef.current) {
        const menuItems = menuRef.current.querySelectorAll('[role="menuitem"]');
        menuItems[highlightedIndex]?.scrollIntoView({ block: 'nearest' });
      }
    }, [highlightedIndex]);

    // ---- Render item ----

    const renderItem = (item: DropdownMenuItem, index: number) => {
      const isHighlighted = index === highlightedIndex;

      const content = (
        <>
          {item.icon && (
            <span
              className={cn(
                'flex-shrink-0',
                iconSizeStyles[size],
                item.danger && !item.disabled ? 'text-error' : 'text-neutral-400',
                isHighlighted && !item.danger && 'text-primary'
              )}
            >
              {item.icon}
            </span>
          )}
          <span className="flex-1 truncate">{item.label}</span>
          {item.badge && <span className="text-xs text-neutral-500">{item.badge}</span>}
        </>
      );

      const itemClasses = cn(
        'flex items-center gap-2 w-full rounded-md',
        'transition-colors duration-100',
        sizeStyles[size],
        item.disabled
          ? 'text-neutral-300 cursor-not-allowed opacity-50'
          : cn(
              'cursor-pointer',
              item.danger
                ? cn('text-error', isHighlighted ? 'bg-error/10' : 'hover:bg-error/10')
                : cn(
                    'text-neutral-700',
                    isHighlighted ? 'bg-primary/10 text-primary' : 'hover:bg-neutral-50'
                  )
            )
      );

      const handleItemClick = () => {
        if (item.disabled) return;
        item.onClick?.();
        onSelect?.(item.value);
        close();
      };

      return (
        <div key={item.value}>
          {item.dividerBefore && (
            <div className="my-1 border-t border-neutral-200" role="separator" />
          )}
          {item.href && !item.disabled ? (
            <a
              href={item.href}
              role="menuitem"
              tabIndex={-1}
              className={itemClasses}
              onClick={(e) => {
                item.onClick?.();
                onSelect?.(item.value);
                close();
                if (item.onClick) {
                  e.preventDefault();
                }
              }}
              onMouseEnter={() => setHighlightedIndex(index)}
              onMouseLeave={() => setHighlightedIndex(-1)}
              aria-disabled={item.disabled}
            >
              {content}
            </a>
          ) : (
            <button
              type="button"
              role="menuitem"
              tabIndex={-1}
              className={cn(itemClasses, 'text-left')}
              onClick={handleItemClick}
              onMouseEnter={() => setHighlightedIndex(index)}
              onMouseLeave={() => setHighlightedIndex(-1)}
              disabled={item.disabled}
              aria-disabled={item.disabled}
            >
              {content}
            </button>
          )}
        </div>
      );
    };

    // ---- Render ----

    return (
      <Dropdown
        ref={ref}
        trigger={trigger}
        placement={placement}
        offset={offset}
        disabled={disabled}
        open={isOpen}
        onOpenChange={handleOpenChange}
        onKeyDown={handleKeyDown}
        contentClassName="min-w-[180px] py-1 px-1 max-h-80 overflow-auto"
        className={className}
        {...props}
      >
        <div ref={menuRef} role="menu" aria-orientation="vertical">
          {card && (
            <div>
              {card}
              <div className="my-1 border-t border-neutral-200" role="separator" />
            </div>
          )}
          {items.map((item, index) => renderItem(item, index))}
        </div>
      </Dropdown>
    );
  }
);

DropdownMenu.displayName = 'DropdownMenu';
