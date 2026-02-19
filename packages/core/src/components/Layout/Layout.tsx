import { forwardRef, type HTMLAttributes, type ReactNode, useState } from 'react';
import { Menu } from 'lucide-react';
import { cn } from '../../utils/cn';
import { Sidebar, type SidebarItem } from '../Sidebar';
import { Header } from '../Header';
import { ListMenuItem } from '../ListMenu';

export interface LayoutProps extends HTMLAttributes<HTMLDivElement> {
  /** Main content */
  children: ReactNode;
  /** Custom sidebar node */
  sidebar?: ReactNode;
  /** Sidebar navigation items */
  sidebarItems?: SidebarItem[];
  /** Whether the default sidebar is collapsible */
  collapsibleSidebar?: boolean;
  /** Logo element for sidebar */
  logo?: ReactNode;
  /** Logo element for collapsed sidebar */
  logoCollapsed?: ReactNode;
  /** System name displayed below logo */
  systemName?: string;
  /** Sidebar footer content */
  sidebarFooter?: ReactNode;
  /** Active sidebar item ID */
  activeSidebarId?: string;
  /** Sidebar item click handler */
  onSidebarItemClick?: (item: SidebarItem) => void;
  /** Header title */
  headerTitle?: string;
  /** User info for header */
  user?: {
    name: string;
    avatar?: string;
    role?: string;
  };
  /** User menu items */
  userMenuItems?: ListMenuItem[];
  /** User click handler */
  onUserClick?: () => void;
  /** Notification count */
  notificationCount?: number;
  /** Notification click handler */
  onNotificationClick?: () => void;
  /** Show header search */
  showSearch?: boolean;
  /** Search value */
  searchValue?: string;
  /** Search change handler */
  onSearchChange?: (value: string) => void;
  /** Header actions */
  headerActions?: ReactNode;
  /** Custom header node */
  header?: ReactNode;
  /** Hide sidebar */
  hideSidebar?: boolean;
  /** Hide header */
  hideHeader?: boolean;
  /** Right panel content (e.g., AI chat) */
  rightPanel?: ReactNode;
  /** Right panel width */
  rightPanelWidth?: string;
}

export const Layout = forwardRef<HTMLDivElement, LayoutProps>(
  (
    {
      children,
      sidebar,
      sidebarItems = [],
      collapsibleSidebar = true,
      logo,
      logoCollapsed,
      systemName,
      sidebarFooter,
      activeSidebarId,
      onSidebarItemClick,
      headerTitle,
      user,
      userMenuItems,
      onUserClick,
      notificationCount,
      onNotificationClick,
      showSearch = true,
      searchValue,
      onSearchChange,
      headerActions,
      header,
      hideSidebar = false,
      hideHeader = false,
      rightPanel,
      rightPanelWidth = '360px',
      className,
      ...props
    },
    ref
  ) => {
    const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const hasCustomSidebar = !!sidebar;
    const hasCustomHeader = !!header;

    return (
      <div ref={ref} className={cn('flex h-screen bg-neutral-50', className)} {...props}>
        {/* Sidebar */}
        {!hideSidebar && (
          <>
            {/* Mobile overlay (built-in sidebar only) */}
            {!hasCustomSidebar && mobileMenuOpen && (
              <div
                className="fixed inset-0 bg-black/50 z-40 lg:hidden"
                onClick={() => setMobileMenuOpen(false)}
              />
            )}
            {/* Sidebar */}
            <div
              className={cn(
                'fixed lg:static inset-y-0 left-0 z-50 lg:z-auto',
                'transform lg:transform-none transition-transform duration-300',
                !hasCustomSidebar && mobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0',
                hasCustomSidebar && 'translate-x-0'
              )}
            >
              {hasCustomSidebar ? (
                sidebar
              ) : (
                <Sidebar
                  items={sidebarItems}
                  logo={logo}
                  logoCollapsed={logoCollapsed}
                  systemName={systemName}
                  footer={sidebarFooter}
                  collapsible={collapsibleSidebar}
                  collapsed={sidebarCollapsed}
                  onCollapsedChange={setSidebarCollapsed}
                  activeId={activeSidebarId}
                  onItemClick={(item) => {
                    onSidebarItemClick?.(item);
                    setMobileMenuOpen(false);
                  }}
                />
              )}
            </div>
          </>
        )}

        {/* Mobile sidebar toggle when header is hidden */}
        {!hideSidebar && hideHeader && !hasCustomHeader && (
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="fixed top-4 left-4 z-50 p-2 rounded-lg bg-white shadow-md border border-neutral-200 lg:hidden"
            aria-label="Toggle menu"
          >
            <Menu className="w-5 h-5 text-neutral-600" />
          </button>
        )}

        {/* Main content area */}
        <div className="flex-1 flex flex-col min-w-0">
          {/* Header */}
          {!hideHeader && (
            hasCustomHeader ? (
              header
            ) : (
              <Header
                title={headerTitle}
                showSearch={showSearch}
                searchValue={searchValue}
                onSearchChange={onSearchChange}
                showNotifications
                notificationCount={notificationCount}
                onNotificationClick={onNotificationClick}
                user={user}
                userMenuItems={userMenuItems}
                onUserClick={onUserClick}
                showMenuToggle={!hideSidebar}
                onMenuToggle={() => setMobileMenuOpen(!mobileMenuOpen)}
                actions={headerActions}
              />
            )
          )}

          {/* Content */}
          <div className="flex-1 flex overflow-hidden">
            <main
              className={cn(
                'flex-1 overflow-y-auto p-6',
                rightPanel && 'hidden md:block'
              )}
            >
              {children}
            </main>

            {/* Right panel: full width on mobile, configured width on md+ */}
            {rightPanel && (
              <aside
                className="w-full md:w-[var(--panel-width)] border-l border-neutral-200 bg-white overflow-y-auto flex-shrink-0"
                style={{ '--panel-width': rightPanelWidth } as React.CSSProperties}
              >
                {rightPanel}
              </aside>
            )}
          </div>
        </div>
      </div>
    );
  }
);

Layout.displayName = 'Layout';
