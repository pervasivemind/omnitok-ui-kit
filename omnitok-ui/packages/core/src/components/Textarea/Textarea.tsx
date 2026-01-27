import { forwardRef, type TextareaHTMLAttributes } from 'react';
import { cn } from '../../utils/cn';

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  /** Label text */
  label?: string;
  /** Helper text shown below textarea */
  helperText?: string;
  /** Error message */
  error?: string;
  /** Full width textarea */
  fullWidth?: boolean;
  /** Show character count */
  showCount?: boolean;
  /** Maximum character count */
  maxLength?: number;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      label,
      helperText,
      error,
      fullWidth = false,
      showCount = false,
      maxLength,
      disabled,
      className,
      id,
      value,
      ...props
    },
    ref
  ) => {
    const textareaId = id || `textarea-${Math.random().toString(36).slice(2, 9)}`;
    const hasError = !!error;
    const currentLength = typeof value === 'string' ? value.length : 0;

    return (
      <div className={cn('flex flex-col gap-1.5', fullWidth && 'w-full')}>
        {label && (
          <label
            htmlFor={textareaId}
            className="text-sm font-medium text-neutral-700"
          >
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          id={textareaId}
          disabled={disabled}
          maxLength={maxLength}
          value={value}
          className={cn(
            // Base styles
            'w-full rounded-md border bg-white px-4 py-3',
            'transition-colors duration-200',
            'placeholder:text-neutral-400',
            'focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary',
            'resize-y min-h-[100px]',
            // Border color
            hasError
              ? 'border-error focus:ring-error focus:border-error'
              : 'border-neutral-300',
            // Disabled state
            disabled && 'bg-neutral-100 cursor-not-allowed opacity-60',
            className
          )}
          aria-invalid={hasError}
          aria-describedby={
            hasError ? `${textareaId}-error` : helperText ? `${textareaId}-helper` : undefined
          }
          {...props}
        />
        <div className="flex justify-between">
          <div>
            {hasError && (
              <p id={`${textareaId}-error`} className="text-sm text-error">
                {error}
              </p>
            )}
            {!hasError && helperText && (
              <p id={`${textareaId}-helper`} className="text-sm text-neutral-500">
                {helperText}
              </p>
            )}
          </div>
          {showCount && maxLength && (
            <span className="text-sm text-neutral-500">
              {currentLength}/{maxLength}
            </span>
          )}
        </div>
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';
