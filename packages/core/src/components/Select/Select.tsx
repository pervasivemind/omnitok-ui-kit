import {
  forwardRef,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ChangeEvent,
  type KeyboardEvent,
  type MutableRefObject,
  type ReactNode,
  type SelectHTMLAttributes,
} from 'react';
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
  /** Enable search/filter functionality (renders a searchable single-select combobox) */
  searchable?: boolean;
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

// Sizing for the searchable combobox control, mirroring MultiSelect so the
// search field looks identical (minus the tags).
const searchableSizeStyles: Record<SelectSize, string> = {
  sm: 'min-h-[34px] px-3 py-1 text-sm',
  md: 'min-h-[42px] px-4 py-1.5 text-base',
  lg: 'min-h-[50px] px-4 py-2 text-lg',
};

const searchableIconSizeStyles: Record<SelectSize, string> = {
  sm: 'pl-7',
  md: 'pl-9',
  lg: 'pl-11',
};

const chevronSize: Record<SelectSize, number> = {
  sm: 14,
  md: 16,
  lg: 20,
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
      searchable = false,
      disabled,
      leftIcon,
      className,
      id,
      value,
      defaultValue,
      onChange,
      name,
      ...props
    },
    ref
  ) => {
    const selectId = id || `select-${Math.random().toString(36).slice(2, 9)}`;
    const hasError = !!error;

    // ----- Searchable (custom combobox) state -----
    const isControlled = value !== undefined;
    const [internalValue, setInternalValue] = useState<string>(
      defaultValue !== undefined ? String(defaultValue) : ''
    );
    const selectedValue = isControlled ? String(value ?? '') : internalValue;
    const selectedLabel = options.find((o) => o.value === selectedValue)?.label ?? '';

    const [searchQuery, setSearchQuery] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const [highlightedIndex, setHighlightedIndex] = useState(-1);

    const containerRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const listboxRef = useRef<HTMLUListElement>(null);
    const innerRef = useRef<HTMLSelectElement | null>(null);

    // Forward the hidden native <select> to both our inner ref and the
    // consumer-provided ref, preserving the forwardRef<HTMLSelectElement> contract.
    const setRefs = useCallback(
      (node: HTMLSelectElement | null) => {
        innerRef.current = node;
        if (typeof ref === 'function') {
          ref(node);
        } else if (ref) {
          (ref as MutableRefObject<HTMLSelectElement | null>).current = node;
        }
      },
      [ref]
    );

    const filteredOptions = useMemo(() => {
      return options.filter(
        (option) =>
          !searchQuery || option.label.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }, [options, searchQuery]);

    // Commit a selection through the hidden native <select> so the consumer's
    // native onChange fires with a real ChangeEvent and form/DOM value stays in sync.
    const commitValue = useCallback((newValue: string) => {
      const selectEl = innerRef.current;
      if (!selectEl) return;
      const setter = Object.getOwnPropertyDescriptor(
        HTMLSelectElement.prototype,
        'value'
      )?.set;
      setter?.call(selectEl, newValue);
      selectEl.dispatchEvent(new Event('change', { bubbles: true }));
    }, []);

    const handleNativeChange = useCallback(
      (e: ChangeEvent<HTMLSelectElement>) => {
        if (!isControlled) {
          setInternalValue(e.target.value);
        }
        onChange?.(e);
        setIsOpen(false);
        setSearchQuery('');
        setHighlightedIndex(-1);
      },
      [isControlled, onChange]
    );

    const handleSelect = useCallback(
      (optionValue: string) => {
        if (disabled) return;
        const option = options.find((o) => o.value === optionValue);
        if (option?.disabled) return;
        commitValue(optionValue);
      },
      [disabled, options, commitValue]
    );

    const findNextEnabledIndex = useCallback(
      (start: number, direction: 1 | -1): number => {
        const len = filteredOptions.length;
        if (len === 0) return -1;

        for (let i = 0; i < len; i++) {
          const idx = (start + direction * (i + 1) + len) % len;
          if (!filteredOptions[idx].disabled) return idx;
        }
        return -1; // all options are disabled
      },
      [filteredOptions]
    );

    const findFirstEnabledIndex = useCallback((): number => {
      return filteredOptions.findIndex((o) => !o.disabled);
    }, [filteredOptions]);

    const handleKeyDown = useCallback(
      (e: KeyboardEvent<HTMLInputElement>) => {
        if (disabled) return;

        switch (e.key) {
          case 'ArrowDown': {
            e.preventDefault();
            if (!isOpen) {
              setIsOpen(true);
              setHighlightedIndex(findFirstEnabledIndex());
            } else {
              setHighlightedIndex((prev) => findNextEnabledIndex(prev, 1));
            }
            break;
          }
          case 'ArrowUp': {
            e.preventDefault();
            if (isOpen) {
              setHighlightedIndex((prev) => findNextEnabledIndex(prev, -1));
            }
            break;
          }
          case 'Enter': {
            e.preventDefault();
            if (isOpen && highlightedIndex >= 0 && highlightedIndex < filteredOptions.length) {
              const option = filteredOptions[highlightedIndex];
              if (!option.disabled) {
                handleSelect(option.value);
              }
            } else if (!isOpen) {
              setIsOpen(true);
            }
            break;
          }
          case 'Escape': {
            e.preventDefault();
            setIsOpen(false);
            setHighlightedIndex(-1);
            break;
          }
        }
      },
      [
        disabled,
        isOpen,
        highlightedIndex,
        filteredOptions,
        handleSelect,
        findNextEnabledIndex,
        findFirstEnabledIndex,
      ]
    );

    // Close dropdown on outside click
    useEffect(() => {
      if (!searchable) return;
      const handleClickOutside = (e: Event) => {
        if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
          setIsOpen(false);
          setHighlightedIndex(-1);
          setSearchQuery('');
        }
      };

      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [searchable]);

    // Scroll highlighted option into view
    useEffect(() => {
      if (highlightedIndex >= 0 && listboxRef.current) {
        const items = listboxRef.current.querySelectorAll('[role="option"]');
        items[highlightedIndex]?.scrollIntoView({ block: 'nearest' });
      }
    }, [highlightedIndex]);

    const handleContainerClick = () => {
      if (disabled) return;
      inputRef.current?.focus();
      setIsOpen(true);
    };

    if (searchable) {
      return (
        <div className={cn('flex flex-col gap-1.5', fullWidth && 'w-full')}>
          {label && (
            <label
              htmlFor={`${selectId}-input`}
              className="text-sm font-medium text-neutral-700"
            >
              {label}
            </label>
          )}
          <div ref={containerRef} className="relative">
            {leftIcon && (
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none z-10">
                {leftIcon}
              </div>
            )}
            <div
              onClick={handleContainerClick}
              className={cn(
                // Base styles
                'flex items-center gap-1.5 w-full rounded-md border bg-white cursor-text',
                'transition-colors duration-200',
                // Size styles
                searchableSizeStyles[size],
                // Left icon padding
                leftIcon && searchableIconSizeStyles[size],
                // Right padding for chevron
                'pr-8',
                // Focus ring (applied when dropdown is open)
                isOpen && !hasError && 'ring-2 ring-primary border-primary',
                isOpen && hasError && 'ring-2 ring-error border-error',
                // Border color
                hasError ? 'border-error' : 'border-neutral-300',
                // Disabled state
                disabled && 'bg-neutral-100 cursor-not-allowed opacity-60',
                className
              )}
              aria-invalid={hasError}
              aria-describedby={
                hasError ? `${selectId}-error` : helperText ? `${selectId}-helper` : undefined
              }
            >
              <input
                ref={inputRef}
                id={`${selectId}-input`}
                type="text"
                value={isOpen ? searchQuery : selectedLabel}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  if (!isOpen) setIsOpen(true);
                  setHighlightedIndex(0);
                }}
                onFocus={() => {
                  if (!disabled) setIsOpen(true);
                }}
                onKeyDown={handleKeyDown}
                placeholder={selectedLabel || placeholder}
                disabled={disabled}
                className={cn(
                  'flex-1 min-w-[60px] outline-none bg-transparent',
                  'placeholder:text-neutral-400',
                  disabled && 'cursor-not-allowed'
                )}
                role="combobox"
                aria-expanded={isOpen}
                aria-controls={`${selectId}-listbox`}
                aria-activedescendant={
                  highlightedIndex >= 0 ? `${selectId}-option-${highlightedIndex}` : undefined
                }
                aria-autocomplete="list"
                autoComplete="off"
              />
            </div>
            <ChevronDown
              className={cn(
                'absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none transition-transform duration-200',
                isOpen && 'rotate-180'
              )}
              size={chevronSize[size]}
            />
            {isOpen && (
              <ul
                ref={listboxRef}
                id={`${selectId}-listbox`}
                role="listbox"
                className={cn(
                  'absolute z-50 mt-1 w-full rounded-md border border-neutral-200 bg-white shadow-lg',
                  'max-h-60 overflow-auto',
                  'py-1'
                )}
              >
                {filteredOptions.length === 0 ? (
                  <li className="px-4 py-2 text-sm text-neutral-400">
                    {searchQuery ? 'No matching options' : 'No options available'}
                  </li>
                ) : (
                  filteredOptions.map((option, index) => (
                    <li
                      key={option.value}
                      id={`${selectId}-option-${index}`}
                      role="option"
                      aria-selected={option.value === selectedValue}
                      aria-disabled={option.disabled}
                      onClick={() => {
                        if (!option.disabled) {
                          handleSelect(option.value);
                        }
                      }}
                      className={cn(
                        'px-4 py-2 text-sm transition-colors duration-100',
                        // Disabled state (takes precedence over other visual states)
                        option.disabled
                          ? 'text-neutral-300 cursor-not-allowed opacity-50 select-none'
                          : cn(
                              'cursor-pointer',
                              index === highlightedIndex
                                ? 'bg-primary/10 text-primary'
                                : 'text-neutral-700 hover:bg-neutral-50'
                            )
                      )}
                    >
                      {option.label}
                    </li>
                  ))
                )}
              </ul>
            )}
            {/* Hidden native select holds the value for forms, the ref, and onChange */}
            <select
              ref={setRefs}
              id={selectId}
              name={name}
              disabled={disabled}
              {...(isControlled ? { value } : { defaultValue })}
              onChange={handleNativeChange}
              className="sr-only"
              tabIndex={-1}
              aria-hidden="true"
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
            name={name}
            disabled={disabled}
            value={value}
            defaultValue={defaultValue}
            onChange={onChange}
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
