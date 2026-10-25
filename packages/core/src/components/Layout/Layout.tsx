import { forwardRef, type HTMLAttributes, type ReactNode, useCallback, useEffect, useState } from 'react';
import { cn } from '../../utils/cn';
import { useI18n } from '../../i18n';
import { Sidebar, type SidebarItem, type SidebarProjectSelector } from '../Sidebar';
import { BrandHeader, type BrandHeaderProps } from '../Header/BrandHeader';

/**
 * Omnitok UI v3 — application shell.
 *
 * A 42 px brand header across the top, the framed navy sidebar on the
 * left, the content on the canvas. The header's menu button collapses the
 * sidebar on desktop and opens it as a drawer on small screens.
 */
export interface LayoutProps extends HTMLAttributes<HTMLDivElement> {
  /** Main content */
  children: ReactNode;
  /** Custom sidebar node */
  sidebar?: ReactNode;
  /** Sidebar navigation items */
  sidebarItems?: SidebarItem[];
  /** Sidebar footer content */
  sidebarFooter?: ReactNode;
  /** Sidebar footer content while collapsed */
  sidebarFooterCollapsed?: ReactNode;
  /** Active sidebar item ID */
  activeSidebarId?: string;
  /** Sidebar item click handler */
  onSidebarItemClick?: (item: SidebarItem) => void;
  /** Project selector card at the top of the sidebar */
  projectSelector?: SidebarProjectSelector;
  /** Open sidebar groups (controlled) */
  sidebarExpandedIds?: string[];
  /** Group toggled (controlled) */
  onSidebarExpandedChange?: (id: string, expanded: boolean) => void;
  /** Collapsed state of the sidebar (controlled). Uncontrolled when omitted. */
  sidebarCollapsed?: boolean;
  /** Collapse state change */
  onSidebarCollapsedChange?: (collapsed: boolean) => void;
  /** The brand header. Its `onMenuToggle` is wired by the layout. */
  brandHeader: Omit<BrandHeaderProps, 'onMenuToggle'>;
  /** Custom header node, instead of the brand header */
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
        footer={sidebarFooter}
        footerCollapsed={sidebarFooterCollapsed}
        collapsed={isDesktop ? collapsed : false}
        onCollapsedChange={setCollapsed}
        activeId={activeSidebarId}
        projectSelector={projectSelector}
        expandedIds={sidebarExpandedIds}
        onExpandedChange={onSidebarExpandedChange}
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
            data-omni-right-panel=""
            className={cn(
              'w-full flex-shrink-0 overflow-y-auto bg-white md:w-[var(--panel-width)]',
              // Docked panel with the left corners rounded (.omni-panel spec).
              'md:my-3 md:rounded-l-[18px] md:border md:border-r-0 md:border-neutral-200 md:shadow-card'
            )}
            style={{ '--panel-width': rightPanelWidth } as React.CSSProperties}
          >
            {rightPanel}
          </aside>
        )}
      </div>
    );

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
                  className="fixed inset-0 z-40 bg-neutral-900/45 lg:hidden"
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
);

Layout.displayName = 'Layout';
