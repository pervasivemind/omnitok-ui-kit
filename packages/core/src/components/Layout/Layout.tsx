import { forwardRef, type HTMLAttributes, type ReactNode, useCallback, useEffect, useState } from 'react';
import { Menu } from 'lucide-react';
import { cn } from '../../utils/cn';
import { useI18n } from '../../i18n';
import { Sidebar, type SidebarItem, type SidebarProjectSelector } from '../Sidebar';
import { Header, type NotificationMenuProps } from '../Header';
import { BrandHeader, type BrandHeaderProps } from '../Header/BrandHeader';
import { DropdownMenuItem } from '../Dropdown';

/**
 * Omnitok UI v3 — application shell.
 *
 * With `brandHeader` the layout is the v3 shell: a 42 px brand header
 * across the top, the framed navy sidebar on the left, the content on
 * the canvas. The header's menu button collapses the sidebar on desktop
 * and opens it as a drawer on small screens.
 *
 * Without `brandHeader` the layout keeps its v0.2 shape (sidebar with the
 * logo, white header with search and user menu), so existing products
 * keep working until they adopt the brand header.
 */
export interface LayoutProps extends HTMLAttributes<HTMLDivElement> {
  /** Main content */
  children: ReactNode;
  /** Custom sidebar node */
  sidebar?: ReactNode;
  /** Sidebar navigation items */
  sidebarItems?: SidebarItem[];
  /** Whether the default sidebar is collapsible */
  collapsibleSidebar?: boolean;
  /** Logo element for sidebar (legacy shell) */
  logo?: ReactNode;
  /** Logo element for collapsed sidebar (legacy shell) */
  logoCollapsed?: ReactNode;
  /** System name displayed below logo (legacy shell) */
  systemName?: string;
  /** Sidebar footer content */
  sidebarFooter?: ReactNode;
  /** Sidebar footer content while collapsed (v3) */
  sidebarFooterCollapsed?: ReactNode;
  /** Active sidebar item ID */
  activeSidebarId?: string;
  /** Sidebar item click handler */
  onSidebarItemClick?: (item: SidebarItem) => void;
  /** Project selector card at the top of the sidebar (v3) */
  projectSelector?: SidebarProjectSelector;
  /** Open sidebar groups (controlled, v3) */
  sidebarExpandedIds?: string[];
  /** Group toggled (controlled, v3) */
  onSidebarExpandedChange?: (id: string, expanded: boolean) => void;
  /** Collapsed state of the sidebar (controlled). Uncontrolled when omitted. */
  sidebarCollapsed?: boolean;
  /** Collapse state change */
  onSidebarCollapsedChange?: (collapsed: boolean) => void;
  /** The v3 brand header. Its `onMenuToggle` is wired by the layout. */
  brandHeader?: Omit<BrandHeaderProps, 'onMenuToggle'>;
  /** Header title (legacy shell) */
  headerTitle?: string;
  /** User info for header (legacy shell) */
  user?: {
    name: string;
    email?: string;
    avatar?: string;
    role?: string;
    status?: 'online' | 'offline' | 'busy' | 'away';
  };
  /** User menu items (legacy shell) */
  userMenuItems?: DropdownMenuItem[];
  /** User click handler (legacy shell) */
  onUserClick?: () => void;
  /** Show notifications button (legacy shell) */
  showNotifications?: boolean;
  /** Notification menu (legacy shell) */
  notificationMenu?: NotificationMenuProps;
  /** Show header search (legacy shell) */
  showSearch?: boolean;
  /** Search value (legacy shell) */
  searchValue?: string;
  /** Search change handler (legacy shell) */
  onSearchChange?: (value: string) => void;
  /** Header actions (legacy shell) */
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
  /** Padding of the main area. Default `p-6`; pass `''` for edge-to-edge content. */
  mainClassName?: string;
}

const DESKTOP_QUERY = '(min-width: 1024px)';

function useIsDesktop(): boolean {
  const [desktop, setDesktop] = useState(() =>
    typeof window === 'undefined' || typeof window.matchMedia !== 'function' ? true : window.matchMedia(DESKTOP_QUERY).matches
  );
  useEffect(() => {
    if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') return;
    const mq = window.matchMedia(DESKTOP_QUERY);
    const onChange = () => setDesktop(mq.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);
  return desktop;
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
      sidebarFooterCollapsed,
      activeSidebarId,
      onSidebarItemClick,
      projectSelector,
      sidebarExpandedIds,
      onSidebarExpandedChange,
      sidebarCollapsed,
      onSidebarCollapsedChange,
      brandHeader,
      headerTitle,
      user,
      userMenuItems,
      onUserClick,
      showNotifications = true,
      notificationMenu,
      showSearch = true,
      searchValue,
      onSearchChange,
      headerActions,
      header,
      hideSidebar = false,
      hideHeader = false,
      rightPanel,
      rightPanelWidth = '360px',
      mainClassName,
      className,
      ...props
    },
    ref
  ) => {
    const { t } = useI18n();
    const [internalCollapsed, setInternalCollapsed] = useState(false);
    const collapsed = sidebarCollapsed ?? internalCollapsed;
    const setCollapsed = useCallback(
      (next: boolean) => {
        if (sidebarCollapsed === undefined) setInternalCollapsed(next);
        onSidebarCollapsedChange?.(next);
      },
      [sidebarCollapsed, onSidebarCollapsedChange]
    );
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const isDesktop = useIsDesktop();
    const hasCustomSidebar = !!sidebar;
    const hasCustomHeader = !!header;
    const v3 = !!brandHeader;

    // The drawer never survives a resize to desktop.
    useEffect(() => {
      if (isDesktop) setMobileMenuOpen(false);
    }, [isDesktop]);

    const toggleMenu = () => {
      if (isDesktop) setCollapsed(!collapsed);
      else setMobileMenuOpen((v) => !v);
    };

    const builtInSidebar = (
      <Sidebar
        items={sidebarItems}
        logo={v3 ? undefined : logo}
        logoCollapsed={v3 ? undefined : logoCollapsed}
        systemName={v3 ? undefined : systemName}
        footer={sidebarFooter}
        footerCollapsed={sidebarFooterCollapsed}
        collapsible={v3 ? false : collapsibleSidebar}
        collapsed={isDesktop ? collapsed : false}
        onCollapsedChange={setCollapsed}
        activeId={activeSidebarId}
        projectSelector={projectSelector}
        expandedIds={sidebarExpandedIds}
        onExpandedChange={onSidebarExpandedChange}
        frame={v3 ? 'framed' : 'flush'}
        onItemClick={(item) => {
          onSidebarItemClick?.(item);
          setMobileMenuOpen(false);
        }}
      />
    );

    const mainArea = (
      <div className="flex min-h-0 flex-1 overflow-hidden">
        <main
          data-omni-main=""
          className={cn('flex-1 overflow-y-auto', mainClassName ?? 'p-6', rightPanel && 'hidden md:block')}
        >
          {children}
        </main>
        {rightPanel && (
          <aside
            className="w-full flex-shrink-0 overflow-y-auto border-l border-neutral-200 bg-white md:w-[var(--panel-width)]"
            style={{ '--panel-width': rightPanelWidth } as React.CSSProperties}
          >
            {rightPanel}
          </aside>
        )}
      </div>
    );

    if (v3) {
      return (
        <div
          ref={ref}
          data-omni-shell="v3"
          className={cn('flex h-screen flex-col bg-[var(--omni-canvas)] font-sans text-[var(--omni-text)]', className)}
          {...props}
        >
          {!hideHeader && (hasCustomHeader ? header : <BrandHeader {...brandHeader} onMenuToggle={hideSidebar ? undefined : toggleMenu} />)}
          <div className="flex min-h-0 flex-1">
            {!hideSidebar && (
              <>
                {!hasCustomSidebar && mobileMenuOpen && (
                  <button
                    type="button"
                    aria-label={t('layout.closeMenu')}
                    className="fixed inset-0 z-40 bg-black/50 lg:hidden"
                    onClick={() => setMobileMenuOpen(false)}
                  />
                )}
                <div
                  className={cn(
                    'z-50 flex-shrink-0 transition-transform duration-300 lg:static lg:z-auto lg:h-full lg:translate-x-0 lg:transform-none',
                    'fixed bottom-0 left-0 top-[42px]',
                    !hasCustomSidebar && mobileMenuOpen ? 'translate-x-0' : '-translate-x-full',
                    hasCustomSidebar && 'translate-x-0'
                  )}
                >
                  {hasCustomSidebar ? sidebar : builtInSidebar}
                </div>
              </>
            )}
            <div className="flex min-w-0 flex-1 flex-col">{mainArea}</div>
          </div>
        </div>
      );
    }

    // ── Legacy shell (v0.2 shape) ─────────────────────────────────────
    return (
      <div ref={ref} className={cn('flex h-screen bg-neutral-50', className)} {...props}>
        {!hideSidebar && (
          <>
            {!hasCustomSidebar && mobileMenuOpen && (
              <div className="fixed inset-0 z-40 bg-black/50 lg:hidden" onClick={() => setMobileMenuOpen(false)} />
            )}
            <div
              className={cn(
                'fixed inset-y-0 left-0 z-50 lg:static lg:z-auto',
                'transform transition-transform duration-300 lg:transform-none',
                !hasCustomSidebar && mobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0',
                hasCustomSidebar && 'translate-x-0'
              )}
            >
              {hasCustomSidebar ? sidebar : builtInSidebar}
            </div>
          </>
        )}

        {!hideSidebar && hideHeader && !hasCustomHeader && (
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="fixed left-4 top-4 z-50 rounded-lg border border-neutral-200 bg-white p-2 shadow-md lg:hidden"
            aria-label={t('header.toggleMenu')}
          >
            <Menu className="h-5 w-5 text-neutral-600" />
          </button>
        )}

        <div className="flex min-w-0 flex-1 flex-col">
          {!hideHeader &&
            (hasCustomHeader ? (
              header
            ) : (
              <Header
                title={headerTitle}
                showSearch={showSearch}
                searchValue={searchValue}
                onSearchChange={onSearchChange}
                showNotifications={showNotifications}
                notificationMenu={notificationMenu}
                user={user}
                userMenuItems={userMenuItems}
                onUserClick={onUserClick}
                showMenuToggle={!hideSidebar}
                onMenuToggle={() => setMobileMenuOpen(!mobileMenuOpen)}
                actions={headerActions}
              />
            ))}
          {mainArea}
        </div>
      </div>
    );
  }
);

Layout.displayName = 'Layout';
