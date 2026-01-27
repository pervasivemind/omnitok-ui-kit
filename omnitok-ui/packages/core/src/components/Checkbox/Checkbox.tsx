import { forwardRef, type InputHTMLAttributes } from 'react';
import { Check, Minus } from 'lucide-react';
import { cn } from '../../utils/cn';

export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  /** Label text */
  label?: string;
  /** Description text below label */
  description?: string;
  /** Error message */
  error?: string;
  /** Indeterminate state */
  indeterminate?: boolean;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, description, error, indeterminate, disabled, className, id, ...props }, ref) => {
    const checkboxId = id || `checkbox-${Math.random().toString(36).slice(2, 9)}`;
    const hasError = !!error;

    return (
      <div className={cn('flex flex-col gap-1', className)}>
        <label
          htmlFor={checkboxId}
          className={cn(
            'flex items-start gap-3 cursor-pointer',
            disabled && 'cursor-not-allowed opacity-60'
          )}
        >
          <div className="relative flex items-center justify-center">
            <input
              ref={ref}
              type="checkbox"
              id={checkboxId}
              disabled={disabled}
              className="peer sr-only"
              aria-invalid={hasError}
              {...props}
            />
            <div
              className={cn(
                'w-5 h-5 rounded border-2 transition-colors',
                'flex items-center justify-center',
                'peer-focus:ring-2 peer-focus:ring-primary peer-focus:ring-offset-2',
                'peer-checked:bg-primary peer-checked:border-primary',
                hasError
                  ? 'border-error'
                  : 'border-neutral-300 peer-hover:border-neutral-400'
              )}
            >
              {indeterminate ? (
                <Minus className="w-3 h-3 text-white opacity-0 peer-checked:opacity-100" />
              ) : (
                <Check className="w-3 h-3 text-white opacity-0 peer-checked:opacity-100" />
              )}
            </div>
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
          <p className="text-sm text-error ml-8">{error}</p>
        )}
      </div>
    );
  }
);

Checkbox.displayName = 'Checkbox';
