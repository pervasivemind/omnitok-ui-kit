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
            className="text-xs font-semibold text-neutral-600"
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
            'w-full rounded-[10px] border bg-white px-3.5 py-2.5 text-[13px] leading-5',
            'transition-colors duration-200',
            'placeholder:text-neutral-500',
            'focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary',
            'resize-y min-h-[100px]',
            // Border color
            hasError
              ? 'border-error focus:ring-error focus:border-error'
              : 'border-control',
            // Disabled state
            disabled && '!bg-neutral-100 text-neutral-500 cursor-not-allowed',
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
              <p id={`${textareaId}-error`} className="text-xs text-error">
                {error}
              </p>
            )}
            {!hasError && helperText && (
              <p id={`${textareaId}-helper`} className="text-xs text-neutral-500">
                {helperText}
              </p>
            )}
          </div>
          {showCount && maxLength && (
            <span className="text-xs text-neutral-500 tabular-nums">
              {currentLength}/{maxLength}
            </span>
          )}
        </div>
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';
