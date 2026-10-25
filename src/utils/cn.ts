import { clsx, type ClassValue } from 'clsx';

/**
 * Utility function to merge class names with clsx
 * Useful for conditional classes and merging Tailwind classes
 */
export function cn(...inputs: ClassValue[]): string {
  return clsx(inputs);
}
