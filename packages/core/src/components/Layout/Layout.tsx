import { forwardRef, type HTMLAttributes, type ReactNode, useState } from 'react';
import { cn } from '../../utils/cn';
import { Sidebar, type SidebarItem } from '../Sidebar';
import { Header } from '../Header';

export interface LayoutProps extends HTMLAttributes<HTMLDivElement> {
  /** Main content */
  children: ReactNode;
  /** Custom sidebar node */
  sidebar?: ReactNode;
  /** Sidebar navigation items */
  sidebarItems?: SidebarItem[];
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
  /** Header breadcrumb */
  headerBreadcrumb?: ReactNode;
  /** User info for header */
  user?: {
    name: string;
    avatar?: string;
    role?: string;
  };
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
      logo,
      logoCollapsed,
      systemName,
      sidebarFooter,
      activeSidebarId,
      onSidebarItemClick,
      headerTitle,
      headerBreadcrumb,
      user,
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

        {/* Main content area */}
        <div className="flex-1 flex flex-col min-w-0">
          {/* Header */}
          {!hideHeader && (
            hasCustomHeader ? (
              header
            ) : (
              <Header
                title={headerTitle}
                breadcrumb={headerBreadcrumb}
                showSearch={showSearch}
                searchValue={searchValue}
                onSearchChange={onSearchChange}
                showNotifications
                notificationCount={notificationCount}
                onNotificationClick={onNotificationClick}
                user={user}
                onUserClick={onUserClick}
                showMenuToggle={!hideSidebar}
                onMenuToggle={() => setMobileMenuOpen(!mobileMenuOpen)}
                actions={headerActions}
              />
            )
          )}

          {/* Content */}
          <div className="flex-1 flex overflow-hidden">
            <main className="flex-1 overflow-y-auto p-6">
              {children}
            </main>

            {/* Right panel */}
            {rightPanel && (
              <aside
                className="hidden xl:block border-l border-neutral-200 bg-white overflow-y-auto"
                style={{ width: rightPanelWidth }}
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
