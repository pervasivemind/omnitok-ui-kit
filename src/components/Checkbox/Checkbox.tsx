import { forwardRef, type ChangeEvent, type InputHTMLAttributes } from 'react';
import { Check, Minus } from 'lucide-react';
import { cn } from '../../utils/cn';

// v3: checked boxes and toggles use the shared violet.
const checkedStyles = {
  checked: 'peer-checked:bg-primary peer-checked:border-primary',
  ring: 'peer-focus:ring-primary',
};
const toggleCheckedStyles = { checked: 'peer-checked:bg-primary', ring: 'peer-focus:ring-primary' };

export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  /** Label text */
  label?: string;
  /** Description text below label */
  description?: string;
  /** Error message */
  error?: string;
  /** Indeterminate state */
  indeterminate?: boolean;
  /** Render as a toggle switch */
  toggle?: boolean;
  /** Callback when checked state changes, provides the new boolean value */
  onCheckedChange?: (checked: boolean) => void;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      label,
      description,
      error,
      indeterminate,
      toggle = false,
      onCheckedChange,
      disabled,
      className,
      id,
      onChange,
      ...props
    },
    ref
  ) => {
    const checkboxId = id || `checkbox-${Math.random().toString(36).slice(2, 9)}`;
    const hasError = !!error;

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      onChange?.(e);
      onCheckedChange?.(e.target.checked);
    };

    const renderCheckbox = () => {
      const styles = checkedStyles;
      return (
        <div
          className={cn(
            'w-[18px] h-[18px] rounded-[5px] border-2 transition-colors',
            'flex items-center justify-center',
            'peer-focus:ring-2 peer-focus:ring-offset-2',
            '[&>svg]:opacity-0 peer-checked:[&>svg]:opacity-100',
            styles.ring,
            styles.checked,
            hasError
              ? 'border-error'
              : 'border-neutral-400 peer-hover:border-primary'
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
      const styles = toggleCheckedStyles;
      return (
        <div
          className={cn(
            'relative w-11 h-6 rounded-full transition-colors',
            'peer-focus:ring-2 peer-focus:ring-offset-2',
            'peer-checked:[&>div]:translate-x-5',
            styles.ring,
            styles.checked,
            hasError ? 'bg-error/30' : 'bg-neutral-400'
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
              onChange={handleChange}
              {...props}
            />
            {toggle ? renderToggle() : renderCheckbox()}
          </div>
          {(label || description) && (
            <div className="flex flex-col">
              {label && (
                <span className="text-[13px] font-medium text-neutral-800">{label}</span>
              )}
              {description && (
                <span className="text-xs text-neutral-500">{description}</span>
              )}
            </div>
          )}
        </label>
        {hasError && (
          <p className={cn('text-xs text-error', toggle ? 'ml-14' : 'ml-8')}>{error}</p>
        )}
      </div>
    );
  }
);

Checkbox.displayName = 'Checkbox';
