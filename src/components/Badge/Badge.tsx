import { forwardRef, type HTMLAttributes, type ReactNode } from 'react';
import { cn } from '../../utils/cn';

export type BadgeVariant = 'primary' | 'neutral' | 'success' | 'warning' | 'error' | 'info';
export type BadgeSize = 'sm' | 'md' | 'lg';

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  /** Badge content */
  children?: ReactNode;
  /** Visual variant */
  variant?: BadgeVariant;
  /** Badge size */
  size?: BadgeSize;
  /** Show as pill (fully rounded) */
  pill?: boolean;
  /** Show as dot only (no content) */
  dot?: boolean;
}

const variantStyles: Record<BadgeVariant, string> = {
  // v3: tint behind, the dark tone in front (>= 5:1 on every tint).
  primary: 'bg-primary-soft text-primary-ink',
  neutral: 'bg-neutral-100 text-neutral-700',
  success: 'bg-success-soft text-success-dark',
  warning: 'bg-warning-soft text-warning-dark',
  error: 'bg-error-soft text-error-dark',
  info: 'bg-info-soft text-info-dark',
};

const sizeStyles: Record<BadgeSize, string> = {
  sm: 'px-2 py-0.5 text-2xs',
  md: 'px-2.5 py-0.5 text-xs',
  lg: 'px-3 py-1 text-[13px]',
};

const dotVariantStyles: Record<BadgeVariant, string> = {
  primary: 'bg-primary',
  neutral: 'bg-neutral-400',
  success: 'bg-success',
  warning: 'bg-warning',
  error: 'bg-error',
  info: 'bg-info',
};

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  (
    {
      children,
      variant = 'primary',
      size = 'md',
      pill = false,
      dot = false,
      className,
      ...props
    },
    ref
  ) => {
    if (dot) {
      return (
        <span
          ref={ref}
          className={cn(
            'inline-block rounded-full',
            size === 'sm' && 'w-2 h-2',
            size === 'md' && 'w-2.5 h-2.5',
            size === 'lg' && 'w-3 h-3',
            dotVariantStyles[variant],
            className
          )}
          {...props}
        />
      );
    }

    return (
      <span
        ref={ref}
        className={cn(
          'inline-flex items-center font-semibold tabular-nums',
          pill ? 'rounded-full' : 'rounded-[7px]',
          variantStyles[variant],
          sizeStyles[size],
          className
        )}
        {...props}
      >
        {children}
      </span>
    );
  }
);

Badge.displayName = 'Badge';
