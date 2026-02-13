import { forwardRef, type HTMLAttributes, type ReactNode } from 'react';
import { cn } from '../../utils/cn';

export type BadgeVariant =
  | 'primary'
  | 'accent'
  | 'neutral'
  | 'success'
  | 'warning'
  | 'error'
  | 'info'
  | 'violet'
  | 'rose'
  | 'teal';
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
  primary: 'bg-primary/10 text-primary',
  accent: 'bg-accent/10 text-accent',
  neutral: 'bg-neutral-100 text-neutral-700',
  success: 'bg-success/10 text-success-dark',
  warning: 'bg-warning/10 text-warning-dark',
  error: 'bg-error/10 text-error-dark',
  info: 'bg-info/10 text-info-dark',
  violet: 'bg-violet/10 text-violet-dark',
  rose: 'bg-rose/10 text-rose-dark',
  teal: 'bg-teal/10 text-teal-dark',
};

const sizeStyles: Record<BadgeSize, string> = {
  sm: 'px-2 py-0.5 text-xs',
  md: 'px-2.5 py-1 text-sm',
  lg: 'px-3 py-1.5 text-base',
};

const dotVariantStyles: Record<BadgeVariant, string> = {
  primary: 'bg-primary',
  accent: 'bg-accent',
  neutral: 'bg-neutral-400',
  success: 'bg-success',
  warning: 'bg-warning',
  error: 'bg-error',
  info: 'bg-info',
  violet: 'bg-violet',
  rose: 'bg-rose',
  teal: 'bg-teal',
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
          'inline-flex items-center font-medium',
          pill ? 'rounded-full' : 'rounded-md',
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
