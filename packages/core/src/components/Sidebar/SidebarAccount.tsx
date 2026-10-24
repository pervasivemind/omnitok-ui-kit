import { forwardRef, type HTMLAttributes, type ReactNode } from 'react';
import { Globe, LogOut } from 'lucide-react';
import { cn } from '../../utils/cn';
import { useI18n } from '../../i18n';

/**
 * Omnitok UI v3 — the account block at the foot of the sidebar.
 *
 * One block for the three apps (portal, builder, console), in the order
 * decided on 2026-10-23 (D2): version, any extra rows the host adds (a task
 * bell, say), the language switch as visible buttons, sign out, and the
 * person. Collapsed (the 64 px rail) it is the avatar alone.
 *
 * It only draws: the host owns the language state, the sign-out and what
 * the version string says.
 */
export interface SidebarAccountLanguage {
  /** Value passed to `onLanguageChange`, e.g. `es`. */
  code: string;
  /** Text on the button. Defaults to the code in capitals. */
  label?: string;
}

export interface SidebarAccountProps extends HTMLAttributes<HTMLDivElement> {
  /** Person's name. */
  name: string;
  /** Second line: email or role. */
  detail?: string;
  /** Avatar letters. Defaults to the first letters of the first two words of `name`. */
  initials?: string;
  /** Avatar image. */
  avatarSrc?: string;
  /** Build version, shown as a boxed `v{version}`. Hidden when absent. */
  version?: string;
  /** Languages offered. The switch is hidden with fewer than two. */
  languages?: SidebarAccountLanguage[];
  /** Code of the active language. */
  language?: string;
  onLanguageChange?: (code: string) => void;
  /** Accessible name of the language group. */
  languageLabel?: string;
  /** Sign-out handler. The row is hidden when absent. */
  onSignOut?: () => void;
  signOutLabel?: string;
  /** Rail mode: avatar only. */
  collapsed?: boolean;
  /** Extra rows placed between the version and the language switch. */
  children?: ReactNode;
}

function initialsOf(name: string): string {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
    .toUpperCase();
}

function AccountAvatar({ name, initials, src }: { name: string; initials: string; src?: string }) {
  if (src) {
    return <img src={src} alt="" className="h-8 w-8 flex-shrink-0 rounded-full object-cover" />;
  }
  return (
    <span
      aria-hidden="true"
      className="grid h-8 w-8 flex-shrink-0 place-items-center rounded-full bg-white/10 text-2xs font-bold text-[#E3DAFA]"
      title={name}
    >
      {initials}
    </span>
  );
}

export const SidebarAccount = forwardRef<HTMLDivElement, SidebarAccountProps>(
  (
    {
      name,
      detail,
      initials,
      avatarSrc,
      version,
      languages,
      language,
      onLanguageChange,
      languageLabel,
      onSignOut,
      signOutLabel,
      collapsed = false,
      children,
      className,
      ...props
    },
    ref
  ) => {
    const { t } = useI18n();
    const letters = initials ?? initialsOf(name);

    if (collapsed) {
      return (
        <div ref={ref} data-omni-sidebar-account="" className={cn('flex justify-center py-1', className)} title={name} {...props}>
          <AccountAvatar name={name} initials={letters} src={avatarSrc} />
          <span className="sr-only">{name}</span>
        </div>
      );
    }

    return (
      <div ref={ref} data-omni-sidebar-account="" className={cn('flex flex-col gap-0.5 px-1', className)} {...props}>
        {version && (
          <div className="px-2 pb-1.5">
            <span className="inline-flex items-center rounded-md border border-white/25 bg-white/10 px-2 py-0.5 text-2xs font-bold tracking-wide tabular-nums text-white/90">
              v{version}
            </span>
          </div>
        )}
        {children}
        {languages && languages.length > 1 && (
          <div className="flex items-center gap-2.5 px-2 py-1">
            <Globe aria-hidden="true" className="h-4 w-4 flex-shrink-0 text-[var(--omni-sb-muted)]" />
            <div
              role="group"
              aria-label={languageLabel ?? t('sidebar.language')}
              className="inline-flex overflow-hidden rounded-lg border border-white/30 bg-white/[.04]"
            >
              {languages.map((lang) => {
                const active = lang.code === language;
                return (
                  <button
                    key={lang.code}
                    type="button"
                    aria-pressed={active}
                    onClick={() => onLanguageChange?.(lang.code)}
                    className={cn(
                      'border-r border-white/20 px-2.5 py-1 text-2xs font-semibold uppercase tracking-wide transition-colors last:border-r-0',
                      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-white/60',
                      active ? 'bg-white text-[var(--omni-navy)]' : 'text-[var(--omni-sb-text)] hover:bg-white/10'
                    )}
                  >
                    {lang.label ?? lang.code.toUpperCase()}
                  </button>
                );
              })}
            </div>
          </div>
        )}
        {onSignOut && (
          <button
            type="button"
            onClick={onSignOut}
            className="flex items-center gap-2.5 rounded-lg px-2 py-1.5 text-left text-[12px] text-[var(--omni-sb-text)] transition-colors hover:bg-white/[.05] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
          >
            <LogOut aria-hidden="true" className="h-4 w-4 text-[var(--omni-sb-muted)]" />
            <span>{signOutLabel ?? t('sidebar.signOut')}</span>
          </button>
        )}
        <div className="mt-1 flex items-center gap-2.5 border-t border-white/[.11] px-2 pt-2.5">
          <AccountAvatar name={name} initials={letters} src={avatarSrc} />
          <div className="min-w-0 flex-1">
            <div className="truncate text-[12px] font-semibold text-white">{name}</div>
            {detail && <div className="truncate text-2xs text-[var(--omni-sb-muted)]">{detail}</div>}
          </div>
        </div>
      </div>
    );
  }
);

SidebarAccount.displayName = 'SidebarAccount';
