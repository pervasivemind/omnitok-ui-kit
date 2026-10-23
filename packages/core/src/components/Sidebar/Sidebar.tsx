import {
  forwardRef,
  type HTMLAttributes,
  type ReactNode,
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
  type MouseEvent,
} from 'react';
import { createPortal } from 'react-dom';
import { Check, ChevronDown, ChevronRight, PanelLeftClose, Search } from 'lucide-react';
import { cn } from '../../utils/cn';
import { useI18n } from '../../i18n';

/**
 * Omnitok UI v3 — Sidebar.
 *
 * Navy, framed rail (250 px, 64 px collapsed) with three building blocks:
 *   - a PROJECT SELECTOR card (one active project, the rest behind a menu),
 *   - SECTIONS (a caption plus children drawn under a guide line),
 *   - ITEMS (flat rows, optional children as a controlled group).
 *
 * Selection is pink (3 px left bar, 12 % fill, dot); hover is a faint
 * white wash. Nothing here relies on colour alone: the active row is also
 * bold and carries `aria-current`.
 *
 * Group expansion can be CONTROLLED (`expandedIds` + `onExpandedChange`) so
 * a host router can keep the open groups in sync with the URL without
 * touching the DOM. Uncontrolled groups keep the v0.2 behaviour: open when
 * a child becomes active.
 */

export interface SidebarItem {
  /** Unique identifier */
  id: string;
  /** Optional value for the HTML id attribute */
  elementId?: string;
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
  /** Render a separator line above this item */
  dividerBefore?: boolean;
  /**
   * `section`: the label is drawn as a small caption (REPORTES) and the
   * children under a guide line; the caption itself is not clickable.
   * `item` (default): a row, with optional children as a collapsible group.
   * `project-selector`: a placeholder that positions the `projectSelector`
   * card at this point of the list (otherwise the card goes first).
   */
  kind?: 'item' | 'section' | 'project-selector';
  /** Small trailing tag on the row, e.g. "ADMIN". Not a badge: muted, bordered. */
  tag?: string;
}

export interface SidebarProjectOption {
  id: string;
  label: string;
  /** Secondary text in the menu, e.g. "8 reportes". */
  meta?: string;
  /** Letter shown in the card tile. Defaults to the first character of `label`. */
  initial?: string;
  /** Listed but not selectable (e.g. a project without reports). */
  disabled?: boolean;
}

export interface SidebarProjectSelector {
  /** Caption above the card. Defaults to the kit's "Project" string. */
  caption?: string;
  /** The project currently shown. `null` renders the card as a prompt. */
  active?: SidebarProjectOption | null;
  /** Every project the user can switch to (the active one included). */
  options: SidebarProjectOption[];
  /** Called with the chosen option. The host decides what "switching" means. */
  onSelect?: (option: SidebarProjectOption) => void;
  /** Menu title. Defaults to the kit's "Change project" string. */
  menuTitle?: string;
  /** Show a search box when there are at least this many options. Default 8. */
  searchThreshold?: number;
  searchPlaceholder?: string;
  /** Text when the search matches nothing. */
  emptyLabel?: string;
}

export interface SidebarProps extends HTMLAttributes<HTMLElement> {
  /** Navigation items */
  items: SidebarItem[];
  /** Logo element (legacy: v3 shells put the brand in the header instead) */
  logo?: ReactNode;
  /** Logo element for collapsed state */
  logoCollapsed?: ReactNode;
  /** System name displayed below logo */
  systemName?: string;
  /** Footer content (expanded) */
  footer?: ReactNode;
  /** Footer content while collapsed. Without it the footer is hidden when collapsed. */
  footerCollapsed?: ReactNode;
  /** Collapsed state */
  collapsed?: boolean;
  /** Callback when collapse state changes */
  onCollapsedChange?: (collapsed: boolean) => void;
  /** Show the collapse toggle button inside the rail */
  collapsible?: boolean;
  /** Custom active item ID */
  activeId?: string;
  /**
   * Callback when item is clicked.
   * For href items, only called on normal left-clicks — modified clicks
   * (Ctrl/Cmd/Shift/middle) are left entirely to the browser so new-tab
   * behaviour works without interference.
   */
  onItemClick?: (item: SidebarItem) => void;
  /** Project selector card rendered above the items. */
  projectSelector?: SidebarProjectSelector;
  /** Ids of the groups that are open. Makes expansion controlled. */
  expandedIds?: string[];
  /** Called when a group header is clicked (controlled mode). */
  onExpandedChange?: (id: string, expanded: boolean) => void;
  /**
   * `framed` (default): rounded rail with a margin, as in the v3 shell.
   * `flush`: edge to edge, full height (legacy layouts).
   */
  frame?: 'framed' | 'flush';
}

/* ────────────────────────────────────────────────────────────────── */

const ROW =
  'flex w-full items-center gap-2.5 rounded-lg px-3 text-left text-[12px] leading-tight ' +
  'text-[var(--omni-sb-text)] transition-colors duration-150 ' +
  'hover:bg-white/[.05] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40';
const ROW_ACTIVE = 'bg-[#FF177B20] text-white font-semibold shadow-[inset_3px_0_0_#FF177B]';
const ICON = 'relative flex h-4 w-4 flex-shrink-0 items-center justify-center text-[var(--omni-sb-muted)] [&>svg]:h-4 [&>svg]:w-4';
const ICON_ACTIVE = 'text-[#FF6AAA]';

function ItemRow({
  item,
  collapsed,
  active,
  expanded,
  hasChildren,
  onPress,
  onAnchorClick,
}: {
  item: SidebarItem;
  collapsed: boolean;
  active: boolean;
  expanded: boolean;
  hasChildren: boolean;
  onPress: () => void;
  onAnchorClick: (e: MouseEvent) => void;
}) {
  const classes = cn(
    ROW,
    collapsed ? 'min-h-[38px] justify-center px-0' : 'min-h-[36px] py-1.5',
    active && ROW_ACTIVE,
    hasChildren && !collapsed && 'font-semibold'
  );
  const content = (
    <>
      <span className={cn(ICON, active && ICON_ACTIVE)}>
        {item.icon ?? <span className="h-1.5 w-1.5 rounded-full bg-current opacity-60" />}
      </span>
      {!collapsed && (
        <>
          <span className="min-w-0 flex-1 truncate">{item.label}</span>
          {item.badge != null && item.badge !== '' && (
            <span className="rounded-full bg-[var(--omni-pink)] px-1.5 py-px text-[10px] font-bold leading-4 text-white">
              {item.badge}
            </span>
          )}
          {item.tag && (
            <span className="rounded border border-white/20 px-1 text-[9px] font-semibold uppercase tracking-[.08em] text-[var(--omni-sb-muted)]">
              {item.tag}
            </span>
          )}
          {active && !hasChildren && (
            <span aria-hidden="true" className="h-1 w-1 flex-shrink-0 rounded-full bg-[var(--omni-pink)]" />
          )}
          {hasChildren && (
            <ChevronDown
              aria-hidden="true"
              className={cn('h-3.5 w-3.5 text-[var(--omni-sb-muted)] transition-transform', expanded && 'rotate-180')}
            />
          )}
        </>
      )}
      {collapsed && hasChildren && (
        <ChevronRight aria-hidden="true" className="absolute right-1.5 top-1/2 h-2.5 w-2.5 -translate-y-1/2 text-white/50" />
      )}
    </>
  );
  const shared = {
    id: item.elementId,
    className: cn(classes, collapsed && 'relative'),
    title: collapsed ? item.label : undefined,
    'aria-current': active && !hasChildren ? ('page' as const) : undefined,
  };
  if (item.href && !hasChildren) {
    return (
      <a href={item.href} onClick={onAnchorClick} {...shared}>
        {content}
      </a>
    );
  }
  return (
    <button type="button" onClick={onPress} aria-expanded={hasChildren ? expanded : undefined} {...shared}>
      {content}
    </button>
  );
}

interface NodeProps {
  item: SidebarItem;
  collapsed: boolean;
  activeId?: string;
  isExpanded: (item: SidebarItem) => boolean;
  toggle: (item: SidebarItem) => void;
  onItemClick?: (item: SidebarItem) => void;
  onCollapsedChange?: (collapsed: boolean) => void;
  level: number;
}

function SidebarNode({ item, collapsed, activeId, isExpanded, toggle, onItemClick, onCollapsedChange, level }: NodeProps) {
  const hasChildren = !!item.children && item.children.length > 0;
  const active = item.active || item.id === activeId;
  const expanded = hasChildren && isExpanded(item);

  const handleAnchorClick = (event: MouseEvent) => {
    const modified = event.ctrlKey || event.metaKey || event.shiftKey || event.button !== 0;
    if (modified) return;
    event.preventDefault();
    onItemClick?.(item);
    item.onClick?.();
  };
  const handlePress = () => {
    if (hasChildren) {
      if (collapsed) {
        onCollapsedChange?.(false);
        if (!expanded) toggle(item);
      } else {
        toggle(item);
      }
      // A group header is also reported, so a host can treat the click as
      // navigation (open the first child) when it prefers.
      onItemClick?.(item);
      item.onClick?.();
      return;
    }
    onItemClick?.(item);
    item.onClick?.();
  };

  const children = hasChildren && expanded && !collapsed && (
    <div className={cn('mt-0.5 space-y-px', item.kind === 'section' ? 'ml-5 border-l border-white/[.11] pl-1.5' : 'ml-4')}>
      {item.children!.map((child) => (
        <SidebarNode
          key={child.id}
          item={child}
          collapsed={collapsed}
          activeId={activeId}
          isExpanded={isExpanded}
          toggle={toggle}
          onItemClick={onItemClick}
          onCollapsedChange={onCollapsedChange}
          level={level + 1}
        />
      ))}
    </div>
  );

  if (item.kind === 'section') {
    // Caption + children. Collapsed: a hairline stands in for the caption
    // and the children keep their icons.
    return (
      <div>
        {item.dividerBefore && <div className="my-2 border-t border-white/[.11]" role="separator" />}
        {collapsed ? (
          <div className="mx-1.5 my-2 border-t border-white/[.11]" role="separator" aria-label={item.label} />
        ) : (
          <div className="mx-2.5 mb-1 mt-3 flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[.1em] text-[var(--omni-sb-muted)]">
            <span className="truncate">{item.label}</span>
            {item.badge != null && item.badge !== '' && <span className="font-medium">· {item.badge}</span>}
          </div>
        )}
        {hasChildren && (
          <div className={cn('space-y-px', !collapsed && 'ml-5 border-l border-white/[.11] pl-1.5')}>
            {item.children!.map((child) => (
              <SidebarNode
                key={child.id}
                item={child}
                collapsed={collapsed}
                activeId={activeId}
                isExpanded={isExpanded}
                toggle={toggle}
                onItemClick={onItemClick}
                onCollapsedChange={onCollapsedChange}
                level={level + 1}
              />
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <div>
      {item.dividerBefore && <div className="my-2 border-t border-white/[.11]" role="separator" />}
      <ItemRow
        item={item}
        collapsed={collapsed}
        active={active}
        expanded={expanded}
        hasChildren={hasChildren}
        onPress={handlePress}
        onAnchorClick={handleAnchorClick}
      />
      {children}
    </div>
  );
}

/* ────────────────────────────────────────────────────────────────── */

function ProjectSelectorCard({ selector, collapsed }: { selector: SidebarProjectSelector; collapsed: boolean }) {
  const { t } = useI18n();
  const { active, options, onSelect } = selector;
  const canOpen = options.length > 1 || (options.length === 1 && active == null);
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [pos, setPos] = useState<{ left: number; top: number; width: number } | null>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const searchThreshold = selector.searchThreshold ?? 8;
  const showSearch = options.length >= searchThreshold;

  const place = useCallback(() => {
    const r = triggerRef.current?.getBoundingClientRect();
    if (!r) return;
    // Beside a collapsed rail, below the card otherwise.
    setPos(collapsed ? { left: r.right + 10, top: r.top, width: 250 } : { left: r.left, top: r.bottom + 6, width: Math.max(r.width, 230) });
  }, [collapsed]);

  useLayoutEffect(() => {
    if (open) place();
  }, [open, place]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false);
        triggerRef.current?.focus();
      }
    };
    const onDown = (e: Event) => {
      const target = e.target as Node;
      if (menuRef.current?.contains(target) || triggerRef.current?.contains(target)) return;
      setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('mousedown', onDown);
    window.addEventListener('resize', place);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('mousedown', onDown);
      window.removeEventListener('resize', place);
    };
  }, [open, place]);

  useEffect(() => {
    if (!open) setQuery('');
  }, [open]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return q ? options.filter((o) => o.label.toLowerCase().includes(q)) : options;
  }, [options, query]);

  const initial = (active?.initial ?? active?.label ?? '?').trim().charAt(0).toUpperCase();
  const caption = selector.caption ?? t('sidebar.project');

  const choose = (option: SidebarProjectOption) => {
    if (option.disabled) return;
    setOpen(false);
    onSelect?.(option);
  };

  return (
    <div className={cn(collapsed ? 'my-2' : 'mb-1')}>
      {!collapsed && (
        <div className="mx-2.5 mb-1.5 mt-1 text-[11px] font-semibold uppercase tracking-[.1em] text-[var(--omni-sb-muted)]">
          {caption}
          {options.length > 1 && <span className="font-medium"> · {options.length}</span>}
        </div>
      )}
      <button
        ref={triggerRef}
        type="button"
        disabled={!canOpen}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={collapsed ? `${caption}: ${active?.label ?? ''}` : undefined}
        title={collapsed ? active?.label : undefined}
        onClick={() => {
          if (!canOpen) return;
          if (collapsed) {
            // Keep the rail closed: the menu opens beside it.
            setOpen((v) => !v);
            return;
          }
          setOpen((v) => !v);
        }}
        className={cn(
          'flex w-full items-center gap-2.5 rounded-[10px] border border-white/[.11] bg-white/[.04] text-left transition-colors',
          collapsed ? 'mx-auto h-10 w-10 justify-center p-0' : 'px-2.5 py-2',
          canOpen && 'hover:border-white/30 hover:bg-white/[.08]',
          open && 'border-white/40 bg-white/[.1]',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40'
        )}
      >
        <span
          aria-hidden="true"
          className="grid h-7 w-7 flex-shrink-0 place-items-center rounded-md bg-white font-display text-[17px] font-extrabold leading-none text-[#254D9D]"
        >
          {initial}
        </span>
        {!collapsed && (
          <>
            <span className="min-w-0 flex-1">
              <span className="block truncate text-[12px] font-semibold leading-tight text-white">
                {active?.label ?? t('sidebar.chooseProject')}
              </span>
              {active?.meta && (
                <span className="block truncate text-[11px] leading-tight text-[var(--omni-sb-muted)]">{active.meta}</span>
              )}
            </span>
            {canOpen && (
              <ChevronDown
                aria-hidden="true"
                className={cn('h-4 w-4 flex-shrink-0 text-[var(--omni-sb-muted)] transition-transform', open && 'rotate-180')}
              />
            )}
          </>
        )}
      </button>
      {open &&
        pos &&
        createPortal(
          <div
            ref={menuRef}
            role="listbox"
            aria-label={selector.menuTitle ?? t('sidebar.changeProject')}
            data-dropdown-surface="list"
            style={{ position: 'fixed', left: pos.left, top: pos.top, width: pos.width }}
            className="z-[1000] max-h-[60vh] overflow-y-auto rounded-xl border border-[var(--omni-line)] bg-white p-1.5 font-sans text-[12px] text-[var(--omni-text)] shadow-[var(--omni-shadow-menu)]"
          >
            <div className="px-2.5 pb-1 pt-1.5 text-[10px] font-semibold uppercase tracking-[.1em] text-[var(--omni-muted)]">
              {selector.menuTitle ?? t('sidebar.changeProject')}
            </div>
            {showSearch && (
              <label className="mx-1 mb-1.5 flex items-center gap-1.5 rounded-lg border border-[var(--omni-line)] px-2 py-1.5 text-[var(--omni-muted)] focus-within:border-[var(--omni-accent)]">
                <Search aria-hidden="true" className="h-3.5 w-3.5" />
                <input
                  autoFocus
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder={selector.searchPlaceholder ?? t('sidebar.searchProject')}
                  className="min-w-0 flex-1 bg-transparent text-[12px] text-[var(--omni-text)] outline-none placeholder:text-[var(--omni-muted)]"
                />
              </label>
            )}
            {filtered.length === 0 && (
              <div className="px-2.5 py-2 text-[var(--omni-muted)]">{selector.emptyLabel ?? t('sidebar.noProjects')}</div>
            )}
            {filtered.map((option) => {
              const isActive = option.id === active?.id;
              return (
                <button
                  key={option.id}
                  type="button"
                  role="option"
                  aria-selected={isActive}
                  disabled={option.disabled}
                  onClick={() => choose(option)}
                  className={cn(
                    'flex w-full items-center gap-2 rounded-[7px] px-2.5 py-2 text-left leading-tight',
                    isActive ? 'bg-[var(--omni-active)] font-semibold text-[var(--omni-accent)]' : 'hover:bg-[var(--omni-canvas)]',
                    option.disabled && 'cursor-default text-[var(--omni-muted)] hover:bg-transparent'
                  )}
                >
                  <span className="flex h-3.5 w-3.5 flex-shrink-0 items-center justify-center">
                    {isActive && <Check aria-hidden="true" className="h-3.5 w-3.5" />}
                  </span>
                  <span className="min-w-0 flex-1 truncate">{option.label}</span>
                  {option.meta && <span className="flex-shrink-0 text-[11px] text-[var(--omni-muted)]">{option.meta}</span>}
                </button>
              );
            })}
          </div>,
          document.body
        )}
    </div>
  );
}

/* ────────────────────────────────────────────────────────────────── */

function collectActiveAncestors(items: SidebarItem[], activeId: string | undefined, acc: string[]): boolean {
  let found = false;
  for (const item of items) {
    if (item.children && item.children.length > 0) {
      const inside = collectActiveAncestors(item.children, activeId, acc);
      if (inside) {
        acc.push(item.id);
        found = true;
      }
    } else if (item.id === activeId || item.active) {
      found = true;
    }
  }
  return found;
}

export const Sidebar = forwardRef<HTMLElement, SidebarProps>(
  (
    {
      items,
      logo,
      logoCollapsed,
      systemName,
      footer,
      footerCollapsed,
      collapsed = false,
      onCollapsedChange,
      collapsible = false,
      activeId,
      onItemClick,
      projectSelector,
      expandedIds,
      onExpandedChange,
      frame = 'framed',
      className,
      ...props
    },
    ref
  ) => {
    const { t } = useI18n();
    const controlled = expandedIds !== undefined;

    // Uncontrolled: groups open when a child is active and stay open until
    // the user closes them (the v0.2 behaviour, now at every depth).
    const [internalOpen, setInternalOpen] = useState<Set<string>>(() => {
      const acc: string[] = [];
      collectActiveAncestors(items, activeId, acc);
      return new Set(acc);
    });
    useEffect(() => {
      if (controlled) return;
      const acc: string[] = [];
      collectActiveAncestors(items, activeId, acc);
      if (acc.length === 0) return;
      setInternalOpen((prev) => {
        const next = new Set(prev);
        acc.forEach((id) => next.add(id));
        return next;
      });
    }, [items, activeId, controlled]);

    const isExpanded = useCallback(
      (item: SidebarItem) => (controlled ? expandedIds!.includes(item.id) : internalOpen.has(item.id)),
      [controlled, expandedIds, internalOpen]
    );
    const toggle = useCallback(
      (item: SidebarItem) => {
        const next = !isExpanded(item);
        if (controlled) {
          onExpandedChange?.(item.id, next);
          return;
        }
        setInternalOpen((prev) => {
          const set = new Set(prev);
          if (next) set.add(item.id);
          else set.delete(item.id);
          return set;
        });
        onExpandedChange?.(item.id, next);
      },
      [controlled, isExpanded, onExpandedChange]
    );

    const expandedLogo = logo;
    const collapsedLogo = logoCollapsed ?? logo;
    const framed = frame === 'framed';

    return (
      <aside
        ref={ref}
        data-omni-sidebar=""
        data-collapsed={collapsed ? '' : undefined}
        className={cn(
          'flex flex-shrink-0 flex-col overflow-hidden bg-[var(--omni-navy)] font-sans text-[var(--omni-sb-text)]',
          'transition-[width] duration-200',
          framed
            ? 'm-3 h-[calc(100%-24px)] rounded-[14px] border border-[#302453] shadow-[0_2px_8px_#1A124008]'
            : 'h-full border-r border-[#302453]',
          collapsed ? 'w-16' : 'w-[250px]',
          className
        )}
        {...props}
      >
        {/* Legacy logo slot: v3 shells carry the brand in the header, so this stays optional. */}
        {(expandedLogo || collapsible) && (
          <div className={cn('flex items-center border-b border-white/[.11] px-3', collapsed ? 'h-14 justify-center px-2' : 'h-14')}>
            {collapsed ? (
              <button
                type="button"
                onClick={() => onCollapsedChange?.(false)}
                className="flex h-9 w-9 items-center justify-center rounded-lg transition-colors hover:bg-white/10"
                aria-label={t('sidebar.expand')}
              >
                {collapsedLogo ?? <ChevronRight className="h-4 w-4" aria-hidden="true" />}
              </button>
            ) : (
              <>
                <div className="flex min-w-0 flex-1 flex-col">
                  <div className="flex items-center justify-center">{expandedLogo}</div>
                  {systemName && (
                    <span className="mt-0.5 text-center text-[10px] uppercase leading-tight tracking-wider text-white/50">
                      {systemName}
                    </span>
                  )}
                </div>
                {collapsible && (
                  <button
                    type="button"
                    onClick={() => onCollapsedChange?.(true)}
                    className="ml-2 flex-shrink-0 rounded-lg p-1.5 transition-colors hover:bg-white/10"
                    aria-label={t('sidebar.collapse')}
                  >
                    <PanelLeftClose className="h-4 w-4" aria-hidden="true" />
                  </button>
                )}
              </>
            )}
          </div>
        )}

        <nav className={cn('scrollbar-thin flex-1 overflow-y-auto overflow-x-hidden', collapsed ? 'px-2 py-2' : 'px-2.5 py-2.5')}>
          {projectSelector && !items.some((item) => item.kind === 'project-selector') && (
            <ProjectSelectorCard selector={projectSelector} collapsed={collapsed} />
          )}
          {items.map((item) =>
            item.kind === 'project-selector' ? (
              projectSelector ? <ProjectSelectorCard key={item.id} selector={projectSelector} collapsed={collapsed} /> : null
            ) : (
              <SidebarNode
                key={item.id}
                item={item}
                collapsed={collapsed}
                activeId={activeId}
                isExpanded={isExpanded}
                toggle={toggle}
                onItemClick={onItemClick}
                onCollapsedChange={onCollapsedChange}
                level={0}
              />
            )
          )}
        </nav>

        {collapsed
          ? footerCollapsed && <div className="border-t border-white/[.11] p-2">{footerCollapsed}</div>
          : footer && <div className="border-t border-white/[.11] p-2.5">{footer}</div>}
      </aside>
    );
  }
);

Sidebar.displayName = 'Sidebar';
