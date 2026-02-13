import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from 'react';
import { Loader2 } from 'lucide-react';
import { cn } from '../../utils/cn';

export type ButtonVariant =
  | 'default'
  | 'primary'
  | 'accent'
  | 'accept'
  | 'danger'
  | 'info'
  | 'violet'
  | 'rose'
  | 'teal'
  | 'ghost'
  | 'outline';
export type ButtonSize = 'sm' | 'md' | 'lg';

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
  /** Full width button */
  fullWidth?: boolean;
  /** Button content */
  children: ReactNode;
}

const variantStyles: Record<ButtonVariant, string> = {
  default:
    'bg-neutral-200 text-neutral-800 hover:bg-neutral-300 active:bg-neutral-400 focus:ring-neutral-400',
  primary:
    'bg-primary text-white hover:bg-primary-dark active:bg-primary-dark focus:ring-primary',
  accent:
    'bg-accent text-white hover:bg-accent-dark active:bg-accent-dark focus:ring-accent',
  accept:
    'bg-success text-white hover:bg-success-dark active:bg-success-dark focus:ring-success',
  danger:
    'bg-error text-white hover:bg-error-dark active:bg-error-dark focus:ring-error',
  info: 'bg-info text-white hover:bg-info-dark active:bg-info-dark focus:ring-info',
  violet:
    'bg-violet text-white hover:bg-violet-dark active:bg-violet-dark focus:ring-violet',
  rose: 'bg-rose text-white hover:bg-rose-dark active:bg-rose-dark focus:ring-rose',
  teal: 'bg-teal text-white hover:bg-teal-dark active:bg-teal-dark focus:ring-teal',
  ghost:
    'bg-transparent text-neutral-700 hover:bg-neutral-100 active:bg-neutral-200 focus:ring-neutral-300',
  outline:
    'bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white focus:ring-primary',
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-3 py-1.5 text-sm gap-1.5',
  md: 'px-4 py-2 text-base gap-2',
  lg: 'px-6 py-3 text-lg gap-2.5',
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'default',
      size = 'md',
      loading = false,
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
          'inline-flex items-center justify-center font-medium rounded-md',
          'transition-colors duration-200',
          'focus:outline-none focus:ring-2 focus:ring-offset-2',
          // Variant styles
          variantStyles[variant],
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
        {loading ? (
          <Loader2
            className="animate-spin"
            size={size === 'sm' ? 14 : size === 'lg' ? 20 : 16}
          />
        ) : (
          leftIcon
        )}
        {children}
        {!loading && rightIcon}
      </button>
    );
  }
);

Button.displayName = 'Button';
