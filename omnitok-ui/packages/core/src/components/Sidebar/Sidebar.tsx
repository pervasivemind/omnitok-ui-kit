import { forwardRef, type HTMLAttributes, type ReactNode, useState } from 'react';
import { ChevronDown, PanelLeftClose } from 'lucide-react';
import { cn } from '../../utils/cn';

export interface SidebarItem {
  /** Unique identifier */
  id: string;
  /** Display label */
  label: string;
  /** Icon component */
  icon?: ReactNode;
  /** Navigation href */
  href?: string;
  /** Click handler */
  onClick?: () => void;
  /** Nested items */
  children?: SidebarItem[];
  /** Badge content */
  badge?: string | number;
  /** Is this item active */
  active?: boolean;
}

export interface SidebarProps extends HTMLAttributes<HTMLElement> {
  /** Navigation items */
  items: SidebarItem[];
  /** Logo element */
  logo?: ReactNode;
  /** Logo element for collapsed state */
  logoCollapsed?: ReactNode;
  /** System name displayed below logo */
  systemName?: string;
  /** Footer content */
  footer?: ReactNode;
  /** Collapsed state */
  collapsed?: boolean;
  /** Callback when collapse state changes */
  onCollapsedChange?: (collapsed: boolean) => void;
  /** Show collapse toggle button */
  collapsible?: boolean;
  /** Custom active item ID */
  activeId?: string;
  /** Callback when item is clicked */
  onItemClick?: (item: SidebarItem) => void;
}

export interface SidebarItemProps {
  item: SidebarItem;
  collapsed: boolean;
  level?: number;
  activeId?: string;
  onItemClick?: (item: SidebarItem) => void;
}

const SidebarItemComponent = ({
  item,
  collapsed,
  level = 0,
  activeId,
  onItemClick,
}: SidebarItemProps) => {
  const [expanded, setExpanded] = useState(false);
  const hasChildren = item.children && item.children.length > 0;
  const isActive = item.active || item.id === activeId;

  const handleClick = () => {
    if (hasChildren) {
      setExpanded(!expanded);
    } else {
      onItemClick?.(item);
      item.onClick?.();
    }
  };

  const content = (
    <>
      <span className="flex-shrink-0 w-4 h-4 flex items-center justify-center text-[16px]">
        {item.icon || <span className="w-1" />}
      </span>
      {!collapsed && (
        <>
          <span className="flex-1 truncate text-[13px]">{item.label}</span>
          {item.badge && (
            <span className="px-1.5 py-0.5 text-[10px] font-medium rounded-full bg-accent text-white">
              {item.badge}
            </span>
          )}
          {hasChildren && (
            <ChevronDown
              className={cn(
                'w-3.5 h-3.5 transition-transform',
                expanded && 'rotate-180'
              )}
            />
          )}
        </>
      )}
    </>
  );

  const itemClasses = cn(
    'flex items-center gap-2.5 px-3 py-2 text-[13px] font-medium rounded-lg',
    'transition-all duration-200 cursor-pointer',
    'text-white/80 hover:text-white hover:bg-white/10',
    isActive && [
      'gradient-active',
      '!text-white',
      'mx-2',
      'font-medium',
    ],
    level > 0 && 'ml-4',
    collapsed && 'justify-center px-2'
  );

  return (
    <div>
      {item.href ? (
        <a href={item.href} className={itemClasses} onClick={handleClick}>
          {content}
        </a>
      ) : (
        <button type="button" className={cn(itemClasses, 'w-full text-left')} onClick={handleClick}>
          {content}
        </button>
      )}
      {hasChildren && expanded && !collapsed && (
        <div className="mt-1 space-y-1">
          {item.children!.map((child) => (
            <SidebarItemComponent
              key={child.id}
              item={child}
              collapsed={collapsed}
              level={level + 1}
              activeId={activeId}
              onItemClick={onItemClick}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export const Sidebar = forwardRef<HTMLElement, SidebarProps>(
  (
    {
      items,
      logo,
      logoCollapsed,
      systemName,
      footer,
      collapsed = false,
      onCollapsedChange,
      collapsible = true,
      activeId,
      onItemClick,
      className,
      ...props
    },
    ref
  ) => {
    const expandedLogo = logo;
    const collapsedLogo = logoCollapsed ?? logo;

    return (
      <aside
        ref={ref}
        className={cn(
          'flex flex-col h-screen bg-sidebar text-white overflow-hidden flex-shrink-0',
          'transition-all duration-300',
          collapsed ? 'w-16' : 'w-64',
          className
        )}
        {...props}
      >
        {/* Header */}
        <div
          className={cn(
            'flex items-center h-14 border-b border-white/10 px-3',
            collapsed && 'justify-center px-2'
          )}
        >
          {collapsed ? (
            <button
              type="button"
              onClick={() => onCollapsedChange?.(false)}
              className="w-9 h-9 flex items-center justify-center rounded-lg hover:bg-white/10 transition-colors"
              aria-label="Expand sidebar"
            >
              {collapsedLogo || <span className="text-xs text-white">Logo</span>}
            </button>
          ) : (
            <>
              <div className="flex flex-col flex-1 min-w-0">
                <div className="flex items-center justify-center">
                  {expandedLogo || (
                    <span className="text-lg font-bold text-white">Omnitok</span>
                  )}
                </div>
                {systemName && (
                  <span className="text-[10px] text-white/50 uppercase tracking-wider mt-0.5 text-center leading-tight">
                    {systemName}
                  </span>
                )}
              </div>
              {collapsible && (
                <button
                  type="button"
                  onClick={() => onCollapsedChange?.(true)}
                  className="p-1.5 rounded-lg hover:bg-white/10 transition-colors flex-shrink-0 ml-2"
                  aria-label="Collapse sidebar"
                >
                  <PanelLeftClose className="w-4 h-4" />
                </button>
              )}
            </>
          )}
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto overflow-x-hidden py-3 space-y-0.5 scrollbar-thin">
          {items.map((item) => (
            <SidebarItemComponent
              key={item.id}
              item={item}
              collapsed={collapsed}
              activeId={activeId}
              onItemClick={onItemClick}
            />
          ))}
        </nav>

        {/* Footer */}
        {footer && (
          <div className="p-3 border-t border-white/10">
            {footer}
          </div>
        )}
      </aside>
    );
  }
);

Sidebar.displayName = 'Sidebar';
