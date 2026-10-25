import { forwardRef, type HTMLAttributes, type ReactNode } from 'react';
import { AlertCircle, CheckCircle, Info, AlertTriangle, X } from 'lucide-react';
import { cn } from '../../utils/cn';

export type AlertVariant = 'info' | 'success' | 'warning' | 'error';

export interface AlertProps extends HTMLAttributes<HTMLDivElement> {
  /** Alert variant */
  variant?: AlertVariant;
  /** Alert title */
  title?: string;
  /** Alert content */
  children: ReactNode;
  /** Show dismiss button */
  dismissible?: boolean;
  /** Callback when dismissed */
  onDismiss?: () => void;
  /** Hide icon */
  hideIcon?: boolean;
}

const variantStyles: Record<AlertVariant, string> = {
  // v3: the state's tint, a 1px border of its colour and the dark tone for
  // text; the icon carries the shape (never colour alone).
  info: 'bg-info-soft border-info/30 text-info-dark',
  success: 'bg-success-soft border-success/30 text-success-dark',
  warning: 'bg-warning-soft border-warning/30 text-warning-dark',
  error: 'bg-error-soft border-error/30 text-error-dark',
};

const iconMap: Record<AlertVariant, typeof Info> = {
  info: Info,
  success: CheckCircle,
  warning: AlertTriangle,
  error: AlertCircle,
};

export const Alert = forwardRef<HTMLDivElement, AlertProps>(
  (
    {
      variant = 'info',
      title,
      children,
      dismissible = false,
      onDismiss,
      hideIcon = false,
      className,
      ...props
    },
    ref
  ) => {
    const Icon = iconMap[variant];

    return (
      <div
        ref={ref}
        role="alert"
        className={cn(
          'flex gap-3 px-4 py-3.5 rounded-xl border',
          variantStyles[variant],
          className
        )}
        {...props}
      >
        {!hideIcon && (
          <Icon aria-hidden="true" className="flex-shrink-0 w-[18px] h-[18px] mt-0.5" />
        )}
        <div className="flex-1 min-w-0">
          {title && (
            // Not a heading: an alert sits inside any outline level.
            <p className="text-xs font-semibold mb-0.5">{title}</p>
          )}
          <div className="text-[13px] leading-5">{children}</div>
        </div>
        {dismissible && (
          <button
            type="button"
            onClick={onDismiss}
            className="flex-shrink-0 p-1 rounded hover:bg-black/5 transition-colors"
            aria-label="Dismiss"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>
    );
  }
);

Alert.displayName = 'Alert';
