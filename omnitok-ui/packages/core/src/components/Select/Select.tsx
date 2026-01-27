import { forwardRef, type SelectHTMLAttributes, type ReactNode } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '../../utils/cn';

export type SelectSize = 'sm' | 'md' | 'lg';

export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface SelectProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, 'size'> {
  /** Select size */
  size?: SelectSize;
  /** Label text */
  label?: string;
  /** Helper text shown below select */
  helperText?: string;
  /** Error message */
  error?: string;
  /** Options to display */
  options: SelectOption[];
  /** Placeholder text */
  placeholder?: string;
  /** Full width select */
  fullWidth?: boolean;
  /** Icon to show on the left */
  leftIcon?: ReactNode;
}

const sizeStyles: Record<SelectSize, string> = {
  sm: 'px-3 py-1.5 text-sm pr-8',
  md: 'px-4 py-2 text-base pr-10',
  lg: 'px-4 py-3 text-lg pr-12',
};

const iconSizeStyles: Record<SelectSize, string> = {
  sm: 'pl-8',
  md: 'pl-10',
  lg: 'pl-12',
};

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      size = 'md',
      label,
      helperText,
      error,
      options,
      placeholder,
      fullWidth = false,
      disabled,
      leftIcon,
      className,
      id,
      ...props
    },
    ref
  ) => {
    const selectId = id || `select-${Math.random().toString(36).slice(2, 9)}`;
    const hasError = !!error;

    return (
      <div className={cn('flex flex-col gap-1.5', fullWidth && 'w-full')}>
        {label && (
          <label
            htmlFor={selectId}
            className="text-sm font-medium text-neutral-700"
          >
            {label}
          </label>
        )}
        <div className="relative">
          {leftIcon && (
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none">
              {leftIcon}
            </div>
          )}
          <select
            ref={ref}
            id={selectId}
            disabled={disabled}
            className={cn(
              // Base styles
              'w-full rounded-md border bg-white appearance-none cursor-pointer',
              'transition-colors duration-200',
              'focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary',
              // Size styles
              sizeStyles[size],
              // Icon padding
              leftIcon && iconSizeStyles[size],
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
              hasError ? `${selectId}-error` : helperText ? `${selectId}-helper` : undefined
            }
            {...props}
          >
            {placeholder && (
              <option value="" disabled>
                {placeholder}
              </option>
            )}
            {options.map((option) => (
              <option key={option.value} value={option.value} disabled={option.disabled}>
                {option.label}
              </option>
            ))}
          </select>
          <ChevronDown
            className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none"
            size={size === 'sm' ? 14 : size === 'lg' ? 20 : 16}
          />
        </div>
        {hasError && (
          <p id={`${selectId}-error`} className="text-sm text-error">
            {error}
          </p>
        )}
        {!hasError && helperText && (
          <p id={`${selectId}-helper`} className="text-sm text-neutral-500">
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

Select.displayName = 'Select';
