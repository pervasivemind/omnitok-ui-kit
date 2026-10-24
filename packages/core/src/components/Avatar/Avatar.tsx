import { forwardRef, type ImgHTMLAttributes } from 'react';
import { cn } from '../../utils/cn';

export type AvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export interface AvatarProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'size'> {
  /** Avatar size */
  size?: AvatarSize;
  /** Image source URL */
  src?: string;
  /** Alt text for image */
  alt?: string;
  /** Fallback initials when no image */
  initials?: string;
  /** Show online status indicator */
  status?: 'online' | 'offline' | 'busy' | 'away';
}

const sizeStyles: Record<AvatarSize, string> = {
  xs: 'w-6 h-6 text-2xs',
  sm: 'w-8 h-8 text-xs',
  md: 'w-10 h-10 text-sm',
  lg: 'w-12 h-12 text-base',
  xl: 'w-16 h-16 text-xl',
};

const statusSizeStyles: Record<AvatarSize, string> = {
  xs: 'w-1.5 h-1.5 border',
  sm: 'w-2 h-2 border',
  md: 'w-2.5 h-2.5 border-2',
  lg: 'w-3 h-3 border-2',
  xl: 'w-4 h-4 border-2',
};

const statusColors = {
  online: 'bg-success',
  offline: 'bg-neutral-400',
  busy: 'bg-error',
  away: 'bg-warning',
};

export const Avatar = forwardRef<HTMLDivElement, AvatarProps>(
  ({ size = 'md', src, alt = '', initials, status, className, ...props }, ref) => {
    const getInitials = (text?: string) => {
      if (!text) return '?';
      return text
        .split(' ')
        .map((word) => word[0])
        .join('')
        .toUpperCase()
        .slice(0, 2);
    };

    return (
      <div ref={ref} className={cn('relative inline-block', className)}>
        {src ? (
          <img
            src={src}
            alt={alt}
            className={cn(
              'rounded-full object-cover',
              sizeStyles[size]
            )}
            {...props}
          />
        ) : (
          <div
            className={cn(
              'rounded-full flex items-center justify-center font-semibold',
              // v3: the action gradient (white initials >= 4.6:1 on both ends).
              'bg-[image:var(--omni-gradient-action)] text-white',
              sizeStyles[size]
            )}
          >
            {getInitials(initials || alt)}
          </div>
        )}
        {status && (
          <span
            className={cn(
              'absolute bottom-0 right-0 rounded-full border-white',
              statusSizeStyles[size],
              statusColors[status]
            )}
          />
        )}
      </div>
    );
  }
);

Avatar.displayName = 'Avatar';
