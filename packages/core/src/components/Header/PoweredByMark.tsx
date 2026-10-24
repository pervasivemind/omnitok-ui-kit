import { cn } from '../../utils/cn';

/**
 * "POWERED BY omnitok": the platform's mark on chrome that belongs to the
 * customer (brand header, login hero). Internal: not exported from the kit.
 * The 10 px caption is one of the two exceptions to the 11 px floor (D9).
 */
export function PoweredByMark({ caption, className }: { caption: string; className?: string }) {
  return (
    <div data-omni-powered-by="" className={cn('flex items-center gap-2 whitespace-nowrap', className)}>
      <span className="hidden text-[10px] font-medium uppercase tracking-[.12em] text-[#C9C4E6] sm:inline">{caption}</span>
      <span className="rounded-[5px] bg-white px-2 py-px font-display text-[14px] font-extrabold leading-5 tracking-[-.02em] text-[var(--omni-navy)]">
        omnitok
      </span>
    </div>
  );
}
