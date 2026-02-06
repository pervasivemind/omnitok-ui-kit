import { forwardRef, type InputHTMLAttributes } from 'react';
import { cn } from '../../utils/cn';

export interface RadioProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  /** Label text */
  label?: string;
  /** Description text below label */
  description?: string;
  /** Error message */
  error?: string;
}

export const Radio = forwardRef<HTMLInputElement, RadioProps>(
  ({ label, description, error, disabled, className, id, ...props }, ref) => {
    const radioId = id || `radio-${Math.random().toString(36).slice(2, 9)}`;
    const hasError = !!error;

    return (
      <div className={cn('flex flex-col gap-1', className)}>
        <label
          htmlFor={radioId}
          className={cn(
            'flex items-start gap-3 cursor-pointer',
            disabled && 'cursor-not-allowed opacity-60'
          )}
        >
          <div className="relative flex items-center justify-center">
            <input
              ref={ref}
              type="radio"
              id={radioId}
              disabled={disabled}
              className="peer sr-only"
              aria-invalid={hasError}
              {...props}
            />
            <div
              className={cn(
                'w-5 h-5 rounded-full border-2 transition-colors',
                'flex items-center justify-center',
                'peer-focus:ring-2 peer-focus:ring-primary peer-focus:ring-offset-2',
                'peer-checked:border-primary',
                hasError
                  ? 'border-error'
                  : 'border-neutral-300 peer-hover:border-neutral-400'
              )}
            >
              <div className="w-2.5 h-2.5 rounded-full bg-primary scale-0 peer-checked:scale-100 transition-transform" />
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

Radio.displayName = 'Radio';
