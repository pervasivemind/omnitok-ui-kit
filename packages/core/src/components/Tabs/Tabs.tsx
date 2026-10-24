import { Check } from 'lucide-react';
import { forwardRef, type HTMLAttributes, type ReactNode, useState, createContext, useContext } from 'react';
import { cn } from '../../utils/cn';

export interface TabItem {
  /** Unique identifier */
  id: string;
  /** Tab label */
  label: string;
  /** Tab icon */
  icon?: ReactNode;
  /** Disabled state */
  disabled?: boolean;
  /** Badge content */
  badge?: string | number;
}

export interface TabsProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /** Tab items */
  items: TabItem[];
  /** Active tab ID */
  activeId?: string;
  /** Default active tab ID */
  defaultActiveId?: string;
  /** Change handler */
  onChange?: (id: string) => void;
  /** Tab variant */
  variant?: 'default' | 'pills' | 'underline';
  /** Full width tabs */
  fullWidth?: boolean;
  /** Tab size */
  size?: 'sm' | 'md' | 'lg';
}

export interface TabPanelProps extends HTMLAttributes<HTMLDivElement> {
  /** Panel ID (should match tab ID) */
  id: string;
  /** Panel content */
  children: ReactNode;
}

// Context for TabPanels
interface TabsContextValue {
  activeId: string;
}

const TabsContext = createContext<TabsContextValue | null>(null);

const variantStyles = {
  // v3: every option reads as a button before it is selected; the selected
  // one is filled with the module colour AND carries a check (shape + colour).
  // Border width never changes on selection, so neighbours never jump.
  default: {
    list: 'gap-1.5 p-1.5 rounded-[13px] border border-neutral-200 bg-[#F4F3F9]',
    tab: 'rounded-[9px] border min-h-[38px] shadow-[0_1px_2px_#1A124008]',
    active:
      'bg-[var(--omni-selected)] border-[var(--omni-selected)] text-white font-bold shadow-[0_2px_6px_#10A37F22]',
    inactive:
      'bg-white border-[#DCD8EA] text-[#4A4568] hover:bg-[#ECEAF7] hover:border-[#9C93C6] hover:shadow-[0_2px_6px_#1A124015]',
  },
  pills: {
    list: 'gap-2',
    tab: 'rounded-full',
    active: 'bg-[image:var(--omni-gradient-action)] text-white shadow-[var(--omni-shadow-action)]',
    inactive: 'text-neutral-600 hover:bg-primary-soft hover:text-primary-ink',
  },
  underline: {
    list: 'border-b border-primary/20',
    tab: 'border-b-2 -mb-px rounded-none',
    active: 'border-accent text-primary-ink font-semibold',
    inactive: 'border-transparent text-neutral-500 hover:text-primary-ink hover:border-primary/30',
  },
};

const sizeStyles = {
  sm: 'px-3 py-1.5 text-2xs',
  md: 'px-[15px] py-2 text-xs',
  lg: 'px-5 py-2.5 text-[13px]',
};

export const Tabs = forwardRef<HTMLDivElement, TabsProps>(
  (
    {
      items,
      activeId: controlledActiveId,
      defaultActiveId,
      onChange,
      variant = 'default',
      fullWidth = false,
      size = 'md',
      className,
      children,
      ...props
    },
    ref
  ) => {
    const [internalActiveId, setInternalActiveId] = useState(
      defaultActiveId || items[0]?.id || ''
    );

    const activeId = controlledActiveId ?? internalActiveId;
    const styles = variantStyles[variant];

    const handleTabClick = (id: string) => {
      if (controlledActiveId === undefined) {
        setInternalActiveId(id);
      }
      onChange?.(id);
    };

    return (
      <TabsContext.Provider value={{ activeId }}>
        <div ref={ref} className={className} {...props}>
          {/* Tab list. More tabs than fit wrap onto another line; a tab
              never shrinks to a single letter (3.1.1). Wrapping, not a
              horizontal scroller: a scroller clips vertically too, which
              would cut the active pill's shadow, the focus ring and the
              underline. With fullWidth the tabs share one row. */}
          <div
            role="tablist"
            className={cn(
              'flex',
              styles.list,
              fullWidth ? 'w-full' : 'flex-wrap'
            )}
          >
            {items.map((item) => (
              <button
                key={item.id}
                role="tab"
                type="button"
                aria-selected={activeId === item.id}
                aria-controls={`tabpanel-${item.id}`}
                disabled={item.disabled}
                onClick={() => handleTabClick(item.id)}
                className={cn(
                  'flex items-center justify-center gap-[7px] font-semibold transition-[background-color,border-color,box-shadow,color] duration-150 min-w-0',
                  styles.tab,
                  sizeStyles[size],
                  activeId === item.id ? styles.active : styles.inactive,
                  fullWidth && 'flex-1',
                  item.disabled && 'opacity-50 cursor-not-allowed'
                )}
              >
                {variant === 'default' && activeId === item.id && (
                  <Check aria-hidden="true" className="w-3.5 h-3.5 shrink-0" strokeWidth={3} />
                )}
                {item.icon}
                <span className="truncate">{item.label}</span>
                {item.badge !== undefined && (
                  <span
                    className={cn(
                      'px-1.5 py-0.5 text-2xs font-semibold rounded-full shrink-0 tabular-nums',
                      activeId === item.id
                        ? 'bg-white/20'
                        : 'bg-neutral-100 text-neutral-600'
                    )}
                  >
                    {item.badge}
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Tab panels */}
          {children}
        </div>
      </TabsContext.Provider>
    );
  }
);

Tabs.displayName = 'Tabs';

export const TabPanel = forwardRef<HTMLDivElement, TabPanelProps>(
  ({ id, children, className, ...props }, ref) => {
    const context = useContext(TabsContext);

    if (!context) {
      throw new Error('TabPanel must be used within Tabs');
    }

    if (context.activeId !== id) {
      return null;
    }

    return (
      <div
        ref={ref}
        role="tabpanel"
        id={`tabpanel-${id}`}
        aria-labelledby={id}
        className={cn('pt-4', className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

TabPanel.displayName = 'TabPanel';
