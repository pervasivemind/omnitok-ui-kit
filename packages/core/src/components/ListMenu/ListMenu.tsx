import {
  forwardRef,
  useCallback,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type HTMLAttributes,
  type KeyboardEvent,
  type ReactNode,
} from 'react';
import { cn } from '../../utils/cn';

// ---------- Types ----------

export type ListMenuPlacement =
  | 'bottom-start'
  | 'bottom-end'
  | 'bottom'
  | 'top-start'
  | 'top-end'
  | 'top'
  | 'left-start'
  | 'left-end'
  | 'left'
  | 'right-start'
  | 'right-end'
  | 'right';

export type ListMenuSize = 'sm' | 'md' | 'lg';

export interface ListMenuItem {
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
}

export interface ListMenuProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onSelect'> {
  /** Card content */
  card?: ReactNode;
  /** Menu items */
  items: ListMenuItem[];
  /** Callback when any item is selected (fires in addition to item-level onClick) */
  onSelect?: (value: string) => void;
  /** Trigger element that opens the menu */
  trigger: ReactNode;
  /** Menu placement relative to trigger */
  placement?: ListMenuPlacement;
  /** Distance in pixels between the trigger and the menu panel */
  offset?: number;
  /** Menu item size */
  size?: ListMenuSize;
  /** Disabled state (prevents opening) */
  disabled?: boolean;
}

// ---------- Style maps ----------

const placementStyles: Record<ListMenuPlacement, string> = {
  'bottom-start': 'top-full left-0',
  bottom: 'top-full left-1/2 -translate-x-1/2',
  'bottom-end': 'top-full right-0',
  'top-start': 'bottom-full left-0',
  top: 'bottom-full left-1/2 -translate-x-1/2',
  'top-end': 'bottom-full right-0',
  'left-start': 'right-full top-0',
  left: 'right-full top-1/2 -translate-y-1/2',
  'left-end': 'right-full bottom-0',
  'right-start': 'left-full top-0',
  right: 'left-full top-1/2 -translate-y-1/2',
  'right-end': 'left-full bottom-0',
};

function getOffsetStyle(placement: ListMenuPlacement, offset: number): CSSProperties {
  if (placement.startsWith('bottom')) return { marginTop: offset };
  if (placement.startsWith('top')) return { marginBottom: offset };
  if (placement.startsWith('left')) return { marginRight: offset };
  if (placement.startsWith('right')) return { marginLeft: offset };
  return {};
}

const sizeStyles: Record<ListMenuSize, string> = {
  sm: 'px-3 py-1.5 text-xs',
  md: 'px-4 py-2 text-sm',
  lg: 'px-4 py-2.5 text-base',
};

const iconSizeStyles: Record<ListMenuSize, string> = {
  sm: 'w-3.5 h-3.5',
  md: 'w-4 h-4',
  lg: 'w-5 h-5',
};

// ---------- Component ----------

export const ListMenu = forwardRef<HTMLDivElement, ListMenuProps>(
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

    const containerRef = useRef<HTMLDivElement>(null);
    const menuRef = useRef<HTMLDivElement | null>(null);
    const triggerRef = useRef<HTMLDivElement>(null);

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

    // ---- Actions ----

    const open = useCallback(() => {
      if (disabled || enabledItems.length === 0) return;
      setIsOpen(true);
      setHighlightedIndex(findFirstEnabledIndex());
    }, [disabled, enabledItems.length, findFirstEnabledIndex]);

    const close = useCallback(() => {
      setIsOpen(false);
      setHighlightedIndex(-1);
    }, []);

    const toggle = useCallback(() => {
      if (isOpen) {
        close();
      } else {
        open();
      }
    }, [isOpen, close, open]);

    const selectItem = useCallback(
      (item: ListMenuItem) => {
        if (item.disabled) return;
        item.onClick?.();
        onSelect?.(item.value);
        close();
      },
      [onSelect, close]
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
              setHighlightedIndex((prev) => findNextEnabledIndex(prev, 1));
            }
            break;
          }
          case 'ArrowUp': {
            e.preventDefault();
            if (!isOpen) {
              open();
            } else {
              setHighlightedIndex((prev) => findNextEnabledIndex(prev, -1));
            }
            break;
          }
          case 'Enter':
          case ' ': {
            e.preventDefault();
            if (isOpen && highlightedIndex >= 0 && highlightedIndex < items.length) {
              const item = items[highlightedIndex];
              if (item.href && !item.disabled) {
                // Navigate for link items
                window.location.href = item.href;
              }
              selectItem(item);
            } else if (!isOpen) {
              open();
            }
            break;
          }
          case 'Escape': {
            e.preventDefault();
            close();
            triggerRef.current?.focus();
            break;
          }
          case 'Tab': {
            close();
            break;
          }
        }
      },
      [disabled, isOpen, highlightedIndex, items, open, close, selectItem, findNextEnabledIndex]
    );

    // ---- Outside click ----

    useEffect(() => {
      const handleClickOutside = (e: Event) => {
        if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
          close();
        }
      };

      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [close]);

    // ---- Scroll highlighted into view ----

    useEffect(() => {
      if (highlightedIndex >= 0 && menuRef.current) {
        const menuItems = menuRef.current.querySelectorAll('[role="menuitem"]');
        menuItems[highlightedIndex]?.scrollIntoView({ block: 'nearest' });
      }
    }, [highlightedIndex]);

    // ---- Render item ----

    const renderItem = (item: ListMenuItem, index: number) => {
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
        </>
      );

      const itemClasses = cn(
        'flex items-center gap-2 w-full rounded-md',
        'transition-colors duration-100',
        sizeStyles[size],
        // Disabled
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
                // Allow default navigation for href
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

    const componentId = `listmenu-${useRef(Math.random().toString(36).slice(2, 9)).current}`;

    return (
      <div ref={containerRef} className={cn('relative inline-block', className)} {...props}>
        {/* Trigger */}
        <div
          ref={triggerRef}
          role="button"
          tabIndex={disabled ? -1 : 0}
          aria-haspopup="menu"
          aria-expanded={isOpen}
          aria-controls={isOpen ? `${componentId}-menu` : undefined}
          aria-disabled={disabled}
          onClick={toggle}
          onKeyDown={handleKeyDown}
          className={cn(
            'inline-flex',
            disabled && 'opacity-50 cursor-not-allowed pointer-events-none'
          )}
        >
          {trigger}
        </div>

        {/* Menu */}
        {isOpen && (
          <div
            ref={(node) => {
              menuRef.current = node;
              if (typeof ref === 'function') ref(node);
              else if (ref) ref.current = node;
            }}
            id={`${componentId}-menu`}
            role="menu"
            aria-orientation="vertical"
            onKeyDown={handleKeyDown}
            style={getOffsetStyle(placement, offset)}
            className={cn(
              'absolute z-50 min-w-[180px] w-max',
              'rounded-md border border-neutral-200 bg-white shadow-lg',
              'py-1 px-1',
              'animate-fade-in',
              'max-h-80 overflow-auto',
              placementStyles[placement]
            )}
          >
            {card && (
              <div>
                {card}
                <div className="my-1 border-t border-neutral-200" role="separator" />
              </div>
            )}
            {items.map((item, index) => renderItem(item, index))}
          </div>
        )}
      </div>
    );
  }
);

ListMenu.displayName = 'ListMenu';
