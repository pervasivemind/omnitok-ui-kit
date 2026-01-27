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
  default: {
    list: 'bg-primary/10 p-1 rounded-lg',
    tab: 'rounded-md',
    active: 'bg-white shadow-sm text-primary font-semibold',
    inactive: 'text-primary/70 hover:text-primary hover:bg-white/50',
  },
  pills: {
    list: 'gap-2',
    tab: 'rounded-full',
    active: 'bg-gradient-to-r from-accent to-primary text-white shadow-md',
    inactive: 'text-neutral-600 hover:bg-primary/10 hover:text-primary',
  },
  underline: {
    list: 'border-b border-primary/20',
    tab: 'border-b-2 -mb-px rounded-none',
    active: 'border-accent text-primary font-semibold',
    inactive: 'border-transparent text-neutral-500 hover:text-primary hover:border-primary/30',
  },
};

const sizeStyles = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-6 py-3 text-lg',
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
          {/* Tab list */}
          <div
            role="tablist"
            className={cn(
              'flex',
              styles.list,
              fullWidth && 'w-full'
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
                  'flex items-center justify-center gap-2 font-medium transition-all min-w-0',
                  styles.tab,
                  sizeStyles[size],
                  activeId === item.id ? styles.active : styles.inactive,
                  fullWidth && 'flex-1',
                  item.disabled && 'opacity-50 cursor-not-allowed'
                )}
              >
                {item.icon}
                <span className="truncate">{item.label}</span>
                {item.badge !== undefined && (
                  <span
                    className={cn(
                      'px-1.5 py-0.5 text-xs font-medium rounded-full shrink-0',
                      activeId === item.id
                        ? 'bg-white/20'
                        : 'bg-neutral-200 text-neutral-600'
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
