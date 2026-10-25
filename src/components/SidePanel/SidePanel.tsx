import { forwardRef, type HTMLAttributes, type ReactNode } from 'react';
import { X } from 'lucide-react';
import { cn } from '../../utils/cn';

export interface SidePanelProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  /** Close handler (called by X button; parent removes from rightPanel to close) */
  onClose: () => void;
  /** Header title */
  title?: ReactNode;
  /** Header description */
  description?: string;
  /** Panel body content */
  children: ReactNode;
  /** Sticky footer content (e.g., action buttons) */
  footer?: ReactNode;
}

export const SidePanel = forwardRef<HTMLDivElement, SidePanelProps>(
  ({ onClose, title, description, children, footer, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('flex flex-col h-full bg-white animate-slide-in-right motion-reduce:animate-none', className)}
        {...props}
      >
        {/* Header */}
        {/* v3: white header with a line under it, like the modal and the card. */}
        <div className="flex items-start justify-between gap-3 px-5 py-4 bg-white border-b border-neutral-200 flex-shrink-0">
          <div className="min-w-0 flex-1">
            {title && (
              <h2 className="font-display text-[15px] font-extrabold leading-6 text-neutral-800 truncate">{title}</h2>
            )}
            {description && (
              <p className="mt-0.5 text-[13px] leading-5 text-neutral-600">{description}</p>
            )}
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 -mr-1.5 rounded-lg text-neutral-500 hover:text-neutral-800 hover:bg-neutral-100 transition-colors flex-shrink-0"
            aria-label="Close"
          >
            <X aria-hidden="true" className="w-[18px] h-[18px]" />
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto px-5 py-4 text-[13px] leading-5 text-neutral-700">{children}</div>

        {/* Footer */}
        {footer && (
          <div className="flex items-center justify-end gap-2 px-5 py-3 border-t border-neutral-200 bg-[#FAFAFC] flex-shrink-0">
            {footer}
          </div>
        )}
      </div>
    );
  }
);

SidePanel.displayName = 'SidePanel';
