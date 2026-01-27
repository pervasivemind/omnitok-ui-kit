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

const variantStyles = {
  default: 'bg-white border border-neutral-200 rounded-lg',
  bordered: 'bg-white border-2 border-neutral-300 rounded-lg',
  elevated: 'bg-white border border-neutral-200 shadow-card rounded-lg',
};

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ children, noPadding = false, hoverable = false, variant = 'default', className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          variantStyles[variant],
          !noPadding && 'p-4',
          hoverable && 'transition-shadow transition-colors duration-200 hover:shadow-card-hover hover:border-primary/30 cursor-pointer',
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
          'flex items-center justify-between px-4 py-3',
          'bg-gradient-to-r from-primary to-primary-dark text-white border-b border-white/15',
          className
        )}
        {...props}
      >
        <div className="font-semibold text-lg">{children}</div>
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
          'flex items-center gap-3 px-4 py-3 bg-neutral-50 border-t border-neutral-200',
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
