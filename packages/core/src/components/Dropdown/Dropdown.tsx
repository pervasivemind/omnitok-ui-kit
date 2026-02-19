import {
  forwardRef,
  useCallback,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type HTMLAttributes,
  type ReactNode,
} from 'react';
import { cn } from '../../utils/cn';

// ---------- Types ----------

export type DropdownPlacement =
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

export interface DropdownProps extends HTMLAttributes<HTMLDivElement> {
  /** Trigger element that opens the dropdown */
  trigger: ReactNode;
  /** Content rendered inside the dropdown panel */
  children: ReactNode;
  /** Dropdown placement relative to trigger */
  placement?: DropdownPlacement;
  /** Distance in pixels between the trigger and the dropdown panel */
  offset?: number;
  /** Disabled state (prevents opening) */
  disabled?: boolean;
  /** Controlled open state */
  open?: boolean;
  /** Callback when open state changes */
  onOpenChange?: (open: boolean) => void;
  /** Additional classes for the trigger wrapper*/
  triggerClassName?: string;
  /** Additional classes for the dropdown panel */
  contentClassName?: string;
}

// ---------- Style maps ----------

const placementStyles: Record<DropdownPlacement, string> = {
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

function getOffsetStyle(placement: DropdownPlacement, offset: number): CSSProperties {
  if (placement.startsWith('bottom')) return { marginTop: offset };
  if (placement.startsWith('top')) return { marginBottom: offset };
  if (placement.startsWith('left')) return { marginRight: offset };
  if (placement.startsWith('right')) return { marginLeft: offset };
  return {};
}

// ---------- Component ----------

export const Dropdown = forwardRef<HTMLDivElement, DropdownProps>(
  (
    {
      trigger,
      children,
      placement = 'bottom-start',
      offset = 4,
      disabled = false,
      open: controlledOpen,
      onOpenChange,
      triggerClassName,
      contentClassName,
      className,
      ...props
    },
    ref
  ) => {
    const isControlled = controlledOpen !== undefined;
    const [internalOpen, setInternalOpen] = useState(false);
    const isOpen = isControlled ? controlledOpen : internalOpen;

    const containerRef = useRef<HTMLDivElement>(null);
    const panelRef = useRef<HTMLDivElement | null>(null);
    const triggerRef = useRef<HTMLDivElement>(null);

    const setOpen = useCallback(
      (value: boolean) => {
        if (!isControlled) setInternalOpen(value);
        onOpenChange?.(value);
      },
      [isControlled, onOpenChange]
    );

    const close = useCallback(() => setOpen(false), [setOpen]);

    const toggle = useCallback(() => {
      if (disabled) return;
      setOpen(!isOpen);
    }, [disabled, isOpen, setOpen]);

    // ---- Keyboard (Escape / Tab) ----

    const handleKeyDown = useCallback(
      (e: React.KeyboardEvent) => {
        if (e.key === 'Escape') {
          e.preventDefault();
          close();
          triggerRef.current?.focus();
        }
        if (e.key === 'Tab') {
          close();
        }
      },
      [close]
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

    // ---- Render ----

    const componentId = `dropdown-${useRef(Math.random().toString(36).slice(2, 9)).current}`;

    return (
      <div
        ref={containerRef}
        className={cn('relative inline-flex items-center', className)}
        {...props}
      >
        {/* Trigger */}
        <div
          ref={triggerRef}
          role="button"
          tabIndex={disabled ? -1 : 0}
          aria-haspopup="true"
          aria-expanded={isOpen}
          aria-controls={isOpen ? `${componentId}-panel` : undefined}
          aria-disabled={disabled}
          onClick={toggle}
          onKeyDown={handleKeyDown}
          className={cn(
            'inline-flex',
            triggerClassName,
            disabled && 'opacity-50 cursor-not-allowed pointer-events-none'
          )}
        >
          {trigger}
        </div>

        {/* Panel */}
        {isOpen && (
          <div
            ref={(node) => {
              panelRef.current = node;
              if (typeof ref === 'function') ref(node);
              else if (ref) ref.current = node;
            }}
            id={`${componentId}-panel`}
            onKeyDown={handleKeyDown}
            style={getOffsetStyle(placement, offset)}
            className={cn(
              'absolute z-50 w-max',
              'rounded-md border border-neutral-200 bg-white shadow-lg',
              'animate-fade-in',
              placementStyles[placement],
              contentClassName
            )}
          >
            {children}
          </div>
        )}
      </div>
    );
  }
);

Dropdown.displayName = 'Dropdown';
