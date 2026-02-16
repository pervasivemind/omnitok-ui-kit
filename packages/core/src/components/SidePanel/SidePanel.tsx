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
        className={cn('flex flex-col h-full animate-slide-in-right', className)}
        {...props}
      >
        {/* Header */}
        <div className="flex items-start justify-between p-4 bg-gradient-to-r from-primary to-primary-dark flex-shrink-0">
          <div className="min-w-0 flex-1">
            {title && (
              <h2 className="text-lg font-semibold text-white truncate">{title}</h2>
            )}
            {description && (
              <p className="mt-1 text-sm text-white/80">{description}</p>
            )}
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-colors flex-shrink-0 ml-3"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto p-4">{children}</div>

        {/* Footer */}
        {footer && (
          <div className="flex items-center justify-end gap-3 p-4 border-t border-neutral-200 flex-shrink-0">
            {footer}
          </div>
        )}
      </div>
    );
  }
);

SidePanel.displayName = 'SidePanel';
