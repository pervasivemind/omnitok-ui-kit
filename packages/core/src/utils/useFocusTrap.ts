import { useEffect, useRef, type RefObject } from 'react';

const FOCUSABLE =
  'a[href], area[href], button:not([disabled]), input:not([disabled]):not([type="hidden"]), select:not([disabled]), textarea:not([disabled]), iframe, [tabindex]:not([tabindex="-1"]), [contenteditable="true"]';

function focusables(root: HTMLElement): HTMLElement[] {
  return Array.from(root.querySelectorAll<HTMLElement>(FOCUSABLE)).filter(
    (el) => !el.closest('[inert]') && el.getClientRects().length > 0
  );
}

/**
 * The focus contract of a dialog (3.2.2): while ``active``, the focus moves
 * into ``containerRef`` (its first control, else the container itself),
 * Tab and Shift+Tab stay inside it, and on close the focus goes back to
 * what had it before (the trigger). Escape is the caller's (the Modal
 * already owns it through ``closeOnEscape``).
 *
 * Before 3.2.2 the Modal handled Escape only: Tab walked out to the page
 * behind the overlay and closing left the focus on ``body`` (QA look v3,
 * 2026-10-26, F14).
 */
export function useFocusTrap(active: boolean, containerRef: RefObject<HTMLElement | null>): void {
  const triggerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!active) return undefined;
    const container = containerRef.current;
    if (!container) return undefined;
    triggerRef.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const raf = requestAnimationFrame(() => {
      if (container.contains(document.activeElement)) return;
      const first = focusables(container)[0];
      if (first) first.focus();
      else {
        if (!container.hasAttribute('tabindex')) container.setAttribute('tabindex', '-1');
        container.focus();
      }
    });
    const onKey = (e: KeyboardEvent): void => {
      if (e.key !== 'Tab') return;
      const items = focusables(container);
      if (items.length === 0) {
        e.preventDefault();
        return;
      }
      const first = items[0];
      const last = items[items.length - 1];
      const current = document.activeElement;
      if (e.shiftKey && (current === first || !container.contains(current))) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && (current === last || !container.contains(current))) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener('keydown', onKey);
    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener('keydown', onKey);
      const trigger = triggerRef.current;
      triggerRef.current = null;
      if (trigger && trigger.isConnected) trigger.focus();
    };
  }, [active, containerRef]);
}
