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
  info: 'bg-info/10 border-info/30 text-info-dark',
  success: 'bg-success/10 border-success/30 text-success-dark',
  warning: 'bg-warning/10 border-warning/30 text-warning-dark',
  error: 'bg-error/10 border-error/30 text-error-dark',
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
          'flex gap-3 p-4 rounded-lg border',
          variantStyles[variant],
          className
        )}
        {...props}
      >
        {!hideIcon && (
          <Icon className="flex-shrink-0 w-5 h-5 mt-0.5" />
        )}
        <div className="flex-1 min-w-0">
          {title && (
            <h5 className="font-semibold mb-1">{title}</h5>
          )}
          <div className="text-sm">{children}</div>
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
