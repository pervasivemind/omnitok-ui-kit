import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from 'react';
import { Loader2 } from 'lucide-react';
import { cn } from '../../utils/cn';

export type ButtonVariant =
  | 'primary'
  | 'accent'
  | 'neutral'
  | 'accept'
  | 'danger'
  | 'info'
  | 'violet'
  | 'rose'
  | 'teal'
  | 'outline'
  | 'secondary';
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
  /** Render as ghost (transparent bg, colored text) */
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
  accent: 'bg-accent text-white hover:bg-accent-dark active:bg-accent-dark focus:ring-accent',
  neutral:
    'bg-neutral-200 text-neutral-800 hover:bg-neutral-300 active:bg-neutral-400 focus:ring-neutral-400',
  accept: 'bg-success text-white hover:bg-success-dark active:bg-success-dark focus:ring-success',
  danger: 'bg-error text-white hover:bg-error-dark active:bg-error-dark focus:ring-error',
  info: 'bg-info text-white hover:bg-info-dark active:bg-info-dark focus:ring-info',
  violet: 'bg-violet text-white hover:bg-violet-dark active:bg-violet-dark focus:ring-violet',
  rose: 'bg-rose text-white hover:bg-rose-dark active:bg-rose-dark focus:ring-rose',
  teal: 'bg-teal text-white hover:bg-teal-dark active:bg-teal-dark focus:ring-teal',
  outline:
    'bg-white border-2 border-primary text-primary hover:bg-primary hover:text-white focus:ring-primary',
};

const ghostStyles: Partial<Record<ButtonVariant, string>> = {
  primary: 'bg-transparent text-primary hover:bg-primary/10 active:bg-primary/20 focus:ring-primary',
  accent: 'bg-transparent text-accent hover:bg-accent/10 active:bg-accent/20 focus:ring-accent',
  neutral:
    'bg-transparent text-neutral-700 hover:bg-neutral-100 active:bg-neutral-200 focus:ring-neutral-300',
  accept: 'bg-transparent text-success hover:bg-success/10 active:bg-success/20 focus:ring-success',
  danger: 'bg-transparent text-error hover:bg-error/10 active:bg-error/20 focus:ring-error',
  info: 'bg-transparent text-info hover:bg-info/10 active:bg-info/20 focus:ring-info',
  violet: 'bg-transparent text-violet hover:bg-violet/10 active:bg-violet/20 focus:ring-violet',
  rose: 'bg-transparent text-rose hover:bg-rose/10 active:bg-rose/20 focus:ring-rose',
  teal: 'bg-transparent text-teal hover:bg-teal/10 active:bg-teal/20 focus:ring-teal',
};

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
          ghost && ghostStyles[variant] ? ghostStyles[variant] : variantStyles[variant],
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
