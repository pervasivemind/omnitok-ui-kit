import { forwardRef, type InputHTMLAttributes } from 'react';
import { Check, Minus } from 'lucide-react';
import { cn } from '../../utils/cn';

export type CheckboxVariant =
  | 'primary'
  | 'accent'
  | 'neutral'
  | 'success'
  | 'info'
  | 'violet'
  | 'rose'
  | 'teal';

const variantStyles: Record<CheckboxVariant, { checked: string; ring: string }> = {
  primary: { checked: 'peer-checked:bg-primary peer-checked:border-primary', ring: 'peer-focus:ring-primary' },
  accent:  { checked: 'peer-checked:bg-accent peer-checked:border-accent',   ring: 'peer-focus:ring-accent' },
  neutral: { checked: 'peer-checked:bg-neutral-600 peer-checked:border-neutral-600', ring: 'peer-focus:ring-neutral-400' },
  success: { checked: 'peer-checked:bg-success peer-checked:border-success', ring: 'peer-focus:ring-success' },
  info:    { checked: 'peer-checked:bg-info peer-checked:border-info',       ring: 'peer-focus:ring-info' },
  violet:  { checked: 'peer-checked:bg-violet peer-checked:border-violet',   ring: 'peer-focus:ring-violet' },
  rose:    { checked: 'peer-checked:bg-rose peer-checked:border-rose',       ring: 'peer-focus:ring-rose' },
  teal:    { checked: 'peer-checked:bg-teal peer-checked:border-teal',       ring: 'peer-focus:ring-teal' },
};

const toggleVariantStyles: Record<CheckboxVariant, { checked: string; ring: string }> = {
  primary: { checked: 'peer-checked:bg-primary',      ring: 'peer-focus:ring-primary' },
  accent:  { checked: 'peer-checked:bg-accent',       ring: 'peer-focus:ring-accent' },
  neutral: { checked: 'peer-checked:bg-neutral-600',  ring: 'peer-focus:ring-neutral-400' },
  success: { checked: 'peer-checked:bg-success',      ring: 'peer-focus:ring-success' },
  info:    { checked: 'peer-checked:bg-info',          ring: 'peer-focus:ring-info' },
  violet:  { checked: 'peer-checked:bg-violet',        ring: 'peer-focus:ring-violet' },
  rose:    { checked: 'peer-checked:bg-rose',          ring: 'peer-focus:ring-rose' },
  teal:    { checked: 'peer-checked:bg-teal',          ring: 'peer-focus:ring-teal' },
};

export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  /** Label text */
  label?: string;
  /** Description text below label */
  description?: string;
  /** Error message */
  error?: string;
  /** Indeterminate state */
  indeterminate?: boolean;
  /** Color variant */
  variant?: CheckboxVariant;
  /** Render as a toggle switch */
  toggle?: boolean;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      label,
      description,
      error,
      indeterminate,
      variant = 'primary',
      toggle = false,
      disabled,
      className,
      id,
      ...props
    },
    ref
  ) => {
    const checkboxId = id || `checkbox-${Math.random().toString(36).slice(2, 9)}`;
    const hasError = !!error;

    const renderCheckbox = () => {
      const styles = variantStyles[variant];
      return (
        <div
          className={cn(
            'w-5 h-5 rounded border-2 transition-colors',
            'flex items-center justify-center',
            'peer-focus:ring-2 peer-focus:ring-offset-2',
            '[&>svg]:opacity-0 peer-checked:[&>svg]:opacity-100',
            styles.ring,
            styles.checked,
            hasError
              ? 'border-error'
              : 'border-neutral-300 peer-hover:border-neutral-400'
          )}
        >
          {indeterminate ? (
            <Minus className="w-3 h-3 text-white transition-opacity" />
          ) : (
            <Check className="w-3 h-3 text-white transition-opacity" />
          )}
        </div>
      );
    };

    const renderToggle = () => {
      const styles = toggleVariantStyles[variant];
      return (
        <div
          className={cn(
            'relative w-11 h-6 rounded-full transition-colors',
            'peer-focus:ring-2 peer-focus:ring-offset-2',
            'peer-checked:[&>div]:translate-x-5',
            styles.ring,
            styles.checked,
            hasError ? 'bg-error/30' : 'bg-neutral-300'
          )}
        >
          <div
            className={cn(
              'absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white',
              'shadow-sm transition-transform duration-200'
            )}
          />
        </div>
      );
    };

    return (
      <div className={cn('flex flex-col gap-1', className)}>
        <label
          htmlFor={checkboxId}
          className={cn(
            'flex items-start gap-3 cursor-pointer',
            disabled && 'cursor-not-allowed opacity-60'
          )}
        >
          <div className={cn('relative flex items-center', toggle ? 'justify-start' : 'justify-center')}>
            <input
              ref={ref}
              type="checkbox"
              id={checkboxId}
              disabled={disabled}
              className="peer sr-only"
              aria-invalid={hasError}
              {...props}
            />
            {toggle ? renderToggle() : renderCheckbox()}
          </div>
          {(label || description) && (
            <div className="flex flex-col">
              {label && (
                <span className="text-sm font-medium text-neutral-700">{label}</span>
              )}
              {description && (
                <span className="text-sm text-neutral-500">{description}</span>
              )}
            </div>
          )}
        </label>
        {hasError && (
          <p className={cn('text-sm text-error', toggle ? 'ml-14' : 'ml-8')}>{error}</p>
        )}
      </div>
    );
  }
);

Checkbox.displayName = 'Checkbox';
