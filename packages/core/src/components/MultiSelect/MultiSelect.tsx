import {
  forwardRef,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type KeyboardEvent,
  type MouseEvent,
  type ReactNode,
} from 'react';
import { ChevronDown, X } from 'lucide-react';
import { cn } from '../../utils/cn';

export type MultiSelectSize = 'sm' | 'md' | 'lg';

export type MultiSelectTagColor =
  | 'primary'
  | 'accent'
  | 'neutral'
  | 'success'
  | 'warning'
  | 'error'
  | 'info'
  | 'violet'
  | 'rose'
  | 'teal';

export interface MultiSelectOption {
  value: string;
  label: string;
  disabled?: boolean;
  /** Badge color for this specific option (overrides the component-level tagColor) */
  color?: MultiSelectTagColor;
}

export interface MultiSelectProps {
  /** Available options */
  options: MultiSelectOption[];
  /** Controlled selected values */
  value?: string[];
  /** Default selected values (uncontrolled) */
  defaultValue?: string[];
  /** Callback when selection changes */
  onChange?: (values: string[]) => void;
  /** Component size */
  size?: MultiSelectSize;
  /** Label text */
  label?: string;
  /** Helper text shown below the input */
  helperText?: string;
  /** Error message */
  error?: string;
  /** Placeholder when no items are selected */
  placeholder?: string;
  /** Full width component */
  fullWidth?: boolean;
  /** Disabled state */
  disabled?: boolean;
  /** Maximum number of selectable items */
  maxItems?: number;
  /** Enable search/filter functionality */
  searchable?: boolean;
  /** Icon to show on the left */
  leftIcon?: ReactNode;
  /** Badge color applied to all selected tags (can be overridden per option) */
  tagColor?: MultiSelectTagColor;
  /** Additional class name */
  className?: string;
  /** Element id */
  id?: string;
}

const sizeStyles: Record<MultiSelectSize, string> = {
  sm: 'min-h-[34px] px-3 py-1 text-sm',
  md: 'min-h-[42px] px-4 py-1.5 text-base',
  lg: 'min-h-[50px] px-4 py-2 text-lg',
};

const tagSizeStyles: Record<MultiSelectSize, string> = {
  sm: 'px-1.5 py-0.5 text-xs gap-0.5',
  md: 'px-2 py-0.5 text-sm gap-1',
  lg: 'px-2.5 py-1 text-sm gap-1',
};

const iconSizeStyles: Record<MultiSelectSize, string> = {
  sm: 'pl-7',
  md: 'pl-9',
  lg: 'pl-11',
};

const tagRemoveIconSize: Record<MultiSelectSize, number> = {
  sm: 12,
  md: 14,
  lg: 14,
};

const chevronSize: Record<MultiSelectSize, number> = {
  sm: 14,
  md: 16,
  lg: 20,
};

const tagColorStyles: Record<MultiSelectTagColor, { base: string; hover: string }> = {
  primary: { base: 'bg-primary/10 text-primary', hover: 'hover:bg-primary/20' },
  accent: { base: 'bg-accent/10 text-accent', hover: 'hover:bg-accent/20' },
  neutral: { base: 'bg-neutral-100 text-neutral-700', hover: 'hover:bg-neutral-200' },
  success: { base: 'bg-success/10 text-success', hover: 'hover:bg-success/20' },
  warning: { base: 'bg-warning/10 text-warning', hover: 'hover:bg-warning/20' },
  error: { base: 'bg-error/10 text-error', hover: 'hover:bg-error/20' },
  info: { base: 'bg-info/10 text-info', hover: 'hover:bg-info/20' },
  violet: { base: 'bg-violet/10 text-violet', hover: 'hover:bg-violet/20' },
  rose: { base: 'bg-rose/10 text-rose', hover: 'hover:bg-rose/20' },
  teal: { base: 'bg-teal/10 text-teal', hover: 'hover:bg-teal/20' },
};

export const MultiSelect = forwardRef<HTMLDivElement, MultiSelectProps>(
  (
    {
      options,
      value: controlledValue,
      defaultValue = [],
      onChange,
      size = 'md',
      label,
      helperText,
      error,
      placeholder = 'Select...',
      fullWidth = false,
      disabled = false,
      maxItems,
      searchable = true,
      leftIcon,
      tagColor = 'primary',
      className,
      id,
    },
    ref
  ) => {
    const componentId = id || `multiselect-${Math.random().toString(36).slice(2, 9)}`;
    const hasError = !!error;

    const isControlled = controlledValue !== undefined;
    const [internalValue, setInternalValue] = useState<string[]>(defaultValue);
    const selectedValues = isControlled ? controlledValue : internalValue;

    const [searchQuery, setSearchQuery] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const [highlightedIndex, setHighlightedIndex] = useState(-1);

    const containerRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const listboxRef = useRef<HTMLUListElement>(null);

    const updateValue = useCallback(
      (newValues: string[]) => {
        if (!isControlled) {
          setInternalValue(newValues);
        }
        onChange?.(newValues);
      },
      [isControlled, onChange]
    );

    const filteredOptions = useMemo(() => {
      return options.filter((option) => {
        const isAlreadySelected = selectedValues.includes(option.value);
        const matchesSearch =
          !searchQuery || option.label.toLowerCase().includes(searchQuery.toLowerCase());
        return !isAlreadySelected && matchesSearch;
      });
    }, [options, selectedValues, searchQuery]);

    const canAddMore = maxItems === undefined || selectedValues.length < maxItems;

    const handleSelect = useCallback(
      (optionValue: string) => {
        if (!canAddMore || disabled) return;

        const option = options.find((o) => o.value === optionValue);
        if (option?.disabled) return;

        const newValues = [...selectedValues, optionValue];
        updateValue(newValues);
        setSearchQuery('');
        setHighlightedIndex(-1);
        inputRef.current?.focus();
      },
      [canAddMore, disabled, options, selectedValues, updateValue]
    );

    const handleRemove = useCallback(
      (optionValue: string, e?: MouseEvent) => {
        e?.stopPropagation();
        if (disabled) return;

        const newValues = selectedValues.filter((v) => v !== optionValue);
        updateValue(newValues);
        inputRef.current?.focus();
      },
      [disabled, selectedValues, updateValue]
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
          case 'Backspace': {
            if (searchQuery === '' && selectedValues.length > 0) {
              const lastValue = selectedValues[selectedValues.length - 1];
              handleRemove(lastValue);
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
        handleSelect,
        searchQuery,
        selectedValues,
        handleRemove,
        findNextEnabledIndex,
        findFirstEnabledIndex,
      ]
    );

    // Close dropdown on outside click
    useEffect(() => {
      const handleClickOutside = (e: Event) => {
        if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
          setIsOpen(false);
          setHighlightedIndex(-1);
          setSearchQuery('');
        }
      };

      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

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

    const getOptionLabel = (value: string) => {
      return options.find((o) => o.value === value)?.label ?? value;
    };

    const getTagColor = (value: string): MultiSelectTagColor => {
      return options.find((o) => o.value === value)?.color ?? tagColor;
    };

    return (
      <div ref={ref} className={cn('flex flex-col gap-1.5', fullWidth && 'w-full')}>
        {label && (
          <label htmlFor={`${componentId}-input`} className="text-sm font-medium text-neutral-700">
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
              'flex flex-wrap items-center gap-1.5 w-full rounded-md border bg-white cursor-text',
              'transition-colors duration-200',
              // Size styles
              sizeStyles[size],
              // Left icon padding
              leftIcon && iconSizeStyles[size],
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
              hasError ? `${componentId}-error` : helperText ? `${componentId}-helper` : undefined
            }
          >
            {selectedValues.map((val) => {
              const colorStyle = tagColorStyles[getTagColor(val)];
              return (
                <span
                  key={val}
                  className={cn(
                    'inline-flex items-center rounded-md font-medium',
                    'transition-colors duration-150',
                    colorStyle.base,
                    !disabled && colorStyle.hover,
                    tagSizeStyles[size]
                  )}
                >
                  {getOptionLabel(val)}
                  {!disabled && (
                    <button
                      type="button"
                      onClick={(e) => handleRemove(val, e)}
                      className={cn(
                        'inline-flex items-center justify-center rounded-sm transition-colors',
                        colorStyle.hover
                      )}
                      aria-label={`Remove ${getOptionLabel(val)}`}
                      tabIndex={-1}
                    >
                      <X size={tagRemoveIconSize[size]} />
                    </button>
                  )}
                </span>
              );
            })}
            {searchable ? (
              <input
                ref={inputRef}
                id={`${componentId}-input`}
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  if (!isOpen) setIsOpen(true);
                  setHighlightedIndex(0);
                }}
                onFocus={() => {
                  if (!disabled) setIsOpen(true);
                }}
                onKeyDown={handleKeyDown}
                placeholder={selectedValues.length === 0 ? placeholder : ''}
                disabled={disabled}
                className={cn(
                  'flex-1 min-w-[60px] outline-none bg-transparent',
                  'placeholder:text-neutral-400',
                  disabled && 'cursor-not-allowed'
                )}
                role="combobox"
                aria-expanded={isOpen}
                aria-controls={`${componentId}-listbox`}
                aria-activedescendant={
                  highlightedIndex >= 0 ? `${componentId}-option-${highlightedIndex}` : undefined
                }
                aria-autocomplete="list"
                autoComplete="off"
              />
            ) : (
              <>
                {selectedValues.length === 0 && (
                  <span className="text-neutral-400">{placeholder}</span>
                )}
                {/* Hidden input for focus/keyboard support in non-searchable mode */}
                <input
                  ref={inputRef}
                  id={`${componentId}-input`}
                  className="absolute opacity-0 w-0 h-0"
                  onFocus={() => {
                    if (!disabled) setIsOpen(true);
                  }}
                  onKeyDown={handleKeyDown}
                  disabled={disabled}
                  tabIndex={0}
                  role="combobox"
                  aria-expanded={isOpen}
                  aria-controls={`${componentId}-listbox`}
                  aria-activedescendant={
                    highlightedIndex >= 0 ? `${componentId}-option-${highlightedIndex}` : undefined
                  }
                  readOnly
                />
              </>
            )}
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
              id={`${componentId}-listbox`}
              role="listbox"
              aria-multiselectable="true"
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
                    id={`${componentId}-option-${index}`}
                    role="option"
                    aria-selected={selectedValues.includes(option.value)}
                    aria-disabled={option.disabled || !canAddMore}
                    onClick={() => {
                      if (!option.disabled && canAddMore) {
                        handleSelect(option.value);
                      }
                    }}
                    className={cn(
                      'px-4 py-2 text-sm transition-colors duration-100',
                      // Disabled state (takes precedence over other visual states)
                      option.disabled || !canAddMore
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
        </div>
        {hasError && (
          <p id={`${componentId}-error`} className="text-sm text-error">
            {error}
          </p>
        )}
        {!hasError && helperText && (
          <p id={`${componentId}-helper`} className="text-sm text-neutral-500">
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

MultiSelect.displayName = 'MultiSelect';
