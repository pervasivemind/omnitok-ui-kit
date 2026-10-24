import { forwardRef, type HTMLAttributes, type ReactNode } from 'react';
import { cn } from '../../utils/cn';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  /** Card content */
  children: ReactNode;
  /** Remove default padding */
  noPadding?: boolean;
  /** Add hover effect */
  hoverable?: boolean;
  /** Card variant */
  variant?: 'default' | 'bordered' | 'elevated';
}

export interface CardHeaderProps extends HTMLAttributes<HTMLDivElement> {
  /** Header content */
  children: ReactNode;
  /** Action element (e.g., button) */
  action?: ReactNode;
}

export interface CardBodyProps extends HTMLAttributes<HTMLDivElement> {
  /** Body content */
  children: ReactNode;
}

export interface CardFooterProps extends HTMLAttributes<HTMLDivElement> {
  /** Footer content */
  children: ReactNode;
  /** Align footer content */
  align?: 'left' | 'center' | 'right' | 'between';
}

// v3: white surface, 1px line border, 14px radius and the shared soft shadow.
// Never a coloured side bar: colour belongs to the data inside.
const variantStyles = {
  default: 'bg-white border border-neutral-200 rounded-[14px] shadow-card',
  bordered: 'bg-white border border-neutral-300 rounded-[14px]',
  elevated: 'bg-white border border-neutral-200 rounded-[14px] shadow-card-hover',
};

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ children, noPadding = false, hoverable = false, variant = 'default', className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          variantStyles[variant],
          !noPadding && 'p-4',
          hoverable && 'transition-[box-shadow,border-color] duration-150 hover:shadow-card-hover hover:border-primary/30 cursor-pointer',
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';

export const CardHeader = forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ children, action, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          // v3: the header is part of the white card, not a coloured band.
          'flex items-center justify-between gap-3 px-4 py-3 first:rounded-t-[14px]',
          'bg-white text-neutral-800 border-b border-neutral-200',
          className
        )}
        {...props}
      >
        <div className="font-display text-[15px] font-extrabold leading-6">{children}</div>
        {action && <div>{action}</div>}
      </div>
    );
  }
);

CardHeader.displayName = 'CardHeader';

export const CardBody = forwardRef<HTMLDivElement, CardBodyProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div ref={ref} className={cn('p-4', className)} {...props}>
        {children}
      </div>
    );
  }
);

CardBody.displayName = 'CardBody';

const footerAlignStyles = {
  left: 'justify-start',
  center: 'justify-center',
  right: 'justify-end',
  between: 'justify-between',
};

export const CardFooter = forwardRef<HTMLDivElement, CardFooterProps>(
  ({ children, align = 'right', className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'flex items-center gap-3 px-4 py-3 bg-[#FAFAFC] border-t border-neutral-200 text-xs text-neutral-600 last:rounded-b-[14px]',
          footerAlignStyles[align],
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

CardFooter.displayName = 'CardFooter';
