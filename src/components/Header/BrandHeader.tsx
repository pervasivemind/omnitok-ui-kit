import { forwardRef, type HTMLAttributes, type ReactNode } from 'react';
import { Menu } from 'lucide-react';
import { cn } from '../../utils/cn';
import { useI18n } from '../../i18n';
import { PoweredByMark } from './PoweredByMark';

/**
 * Omnitok UI v3 — the compact brand header (42 px).
 *
 * Left: the menu toggle and the CUSTOMER's brand (a logo node, or their
 * name as text when no logo exists). Centre: a label that says where the
 * user is ("Gating · Executive Summary"). Right: "POWERED BY omnitok".
 *
 * The brand belongs to the customer, never to Omnitok: a tenant without a
 * logo shows its own name. The platform keeps the powered-by mark.
 */
export interface BrandHeaderProps extends HTMLAttributes<HTMLElement> {
  /** Customer brand: an `<img>` or any node. Takes precedence over `brandText`. */
  brand?: ReactNode;
  /** Customer name rendered as a wordmark when there is no logo. */
  brandText?: string;
  /** Where the user is: "Proyecto · Reporte" or the page name. */
  label?: ReactNode;
  /** Show the "powered by omnitok" mark. Default true. */
  poweredBy?: boolean;
  /** Replaces the default "POWERED BY" caption. */
  poweredByCaption?: string;
  /** Extra controls placed before the powered-by mark. */
  actions?: ReactNode;
  /** Menu toggle handler (collapse on desktop, drawer on mobile). Hidden when absent. */
  onMenuToggle?: () => void;
  /** Accessible name of the menu toggle. */
  menuLabel?: string;
}

export const BrandHeader = forwardRef<HTMLElement, BrandHeaderProps>(
  (
    { brand, brandText, label, poweredBy = true, poweredByCaption, actions, onMenuToggle, menuLabel, className, ...props },
    ref
  ) => {
    const { t } = useI18n();
    const hasBrand = brand != null || (brandText != null && brandText !== '');
    return (
      <header
        ref={ref}
        data-omni-brand-header=""
        className={cn(
          'flex h-[42px] flex-shrink-0 items-center gap-3.5 border-b border-[var(--omni-navy-border)] [background:var(--omni-header-bg)] px-4 font-sans text-[#E4DFF3]',
          className
        )}
        {...props}
      >
        {onMenuToggle && (
          <button
            type="button"
            onClick={onMenuToggle}
            aria-label={menuLabel ?? t('header.toggleMenu')}
            className="-ml-1.5 grid h-8 w-8 flex-shrink-0 place-items-center rounded-md text-[#BEB6D8] transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
          >
            <Menu className="h-[18px] w-[18px]" aria-hidden="true" />
          </button>
        )}
        {hasBrand && (
          <div data-omni-brand="" className="flex min-w-0 flex-shrink-0 items-center [&_img]:max-h-6 [&_img]:w-auto [&_img]:max-w-[160px]">
            {brand ?? (
              <span className="truncate font-display text-[15px] font-bold tracking-[-.01em] text-white">{brandText}</span>
            )}
          </div>
        )}
        {label != null && label !== '' && (
          <div
            data-omni-brand-label=""
            className={cn(
              'hidden min-w-0 truncate text-[11px] uppercase tracking-[.06em] text-[#C9C4E6] md:block',
              hasBrand && 'border-l border-white/[.15] pl-3.5'
            )}
          >
            {label}
          </div>
        )}
        <div className="ml-auto flex flex-shrink-0 items-center gap-3">
          {actions}
          {poweredBy && <PoweredByMark caption={poweredByCaption ?? t('header.poweredBy')} />}
        </div>
      </header>
    );
  }
);

BrandHeader.displayName = 'BrandHeader';
