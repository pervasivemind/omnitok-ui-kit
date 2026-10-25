import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from 'react';
import { Loader2 } from 'lucide-react';
import { cn } from '../../utils/cn';

/**
 * v3 (DESIGN.md, Buttons): `primary` for the one action of an area,
 * `secondary` for shared actions, `outline` for the rest. `danger`,
 * `accept` and `info` exist for confirmation dialogs only.
 */
export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'danger' | 'accept' | 'info';
export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style variant */
  variant?: ButtonVariant;
  /** Button size */
  size?: ButtonSize;
  /** Show loading spinner */
  loading?: boolean;
  /** Icon to show before text */
  leftIcon?: ReactNode;
  /** Icon to show after text */
  rightIcon?: ReactNode;
  /**
   * Quiet button for icons and minor actions: ink text at rest, a violet
   * tint on hover (D40). With `variant="danger"` the hover turns red (D41).
   * Other variants are ignored while ghost.
   */
  ghost?: boolean;
  /** Full width button */
  fullWidth?: boolean;
  /** Button content */
  children: ReactNode;
}

const variantStyles: Record<ButtonVariant, string> = {
  // v3: the action colour. Pink-to-violet gradient (tenant-overridable token),
  // white text >= 4.6:1 on both ends, soft pink glow.
  primary:
    'bg-[image:var(--omni-gradient-action)] text-white shadow-[var(--omni-shadow-action)] enabled:hover:brightness-95 focus:ring-accent',
  secondary:
    'bg-primary-soft text-primary-ink border border-primary-line enabled:hover:bg-[#E7E5F4] focus:ring-primary',
  accept: 'bg-success text-white hover:bg-success-dark active:bg-success-dark focus:ring-success',
  danger: 'bg-error text-white hover:bg-error-dark active:bg-error-dark focus:ring-error',
  info: 'bg-info text-white hover:bg-info-dark active:bg-info-dark focus:ring-info',
  outline:
    'bg-white border-2 border-primary text-primary hover:bg-primary hover:text-white focus:ring-primary',
};

// One ghost for every variant (D40); only destructive actions warn on hover (D41).
const ghostStyle =
  'bg-transparent text-neutral-700 hover:bg-primary-soft hover:text-primary-ink active:bg-primary-line focus:ring-primary';
const ghostDangerStyle =
  'bg-transparent text-neutral-700 hover:bg-error-soft hover:text-error-dark active:bg-error-soft focus:ring-error';

// v3 type scale for controls: 11 / 12 / 13 / 14 px.
const sizeStyles: Record<ButtonSize, string> = {
  xs: 'px-2.5 py-1 text-2xs gap-1',
  sm: 'px-3 py-1.5 text-xs gap-1.5',
  md: 'px-4 py-2 text-[13px] leading-5 gap-2',
  lg: 'px-5 py-2.5 text-sm gap-2.5',
};

const loaderSize: Record<ButtonSize, number> = {
  xs: 12,
  sm: 14,
  md: 16,
  lg: 20,
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      loading = false,
      ghost = false,
      leftIcon,
      rightIcon,
      fullWidth = false,
      disabled,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const isDisabled = disabled || loading;

    return (
      <button
        ref={ref}
        disabled={isDisabled}
        className={cn(
          // Base styles
          'inline-flex items-center justify-center font-semibold rounded-xl',
          // State motion only: colour, shadow and a 1px lift on hover.
          'transition-[background-color,box-shadow,transform,filter,color] duration-150',
          'enabled:hover:-translate-y-px enabled:hover:shadow-[0_3px_10px_#1A124018] motion-reduce:transform-none',
          'focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
          // Variant styles
          ghost ? (variant === 'danger' ? ghostDangerStyle : ghostStyle) : variantStyles[variant],
          // Size styles
          sizeStyles[size],
          // Full width
          fullWidth && 'w-full',
          // Disabled state
          isDisabled && 'opacity-50 cursor-not-allowed',
          className
        )}
        {...props}
      >
        {loading ? <Loader2 className="animate-spin" size={loaderSize[size]} /> : leftIcon}
        {children}
        {!loading && rightIcon}
      </button>
    );
  }
);

Button.displayName = 'Button';
