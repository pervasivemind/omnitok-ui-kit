import { forwardRef } from 'react';
import { Bell } from 'lucide-react';
import { DropdownMenu, DropdownMenuItem } from '../Dropdown';
import { Input } from '../Input';
import { Search } from 'lucide-react';
import { Checkbox } from '../Checkbox';

export interface NotificationMenuProps {
  items: DropdownMenuItem[];
  count?: number;
  searchValue?: string;
  searchPlaceholder?: string;
  filterLabel?: string;
  onSearchChange?: (value: string) => void;
  onFilterChange?: (filter: boolean) => void;
}

export const NotificationMenu = forwardRef<HTMLDivElement, NotificationMenuProps>(
  ({ items, count, searchValue, searchPlaceholder, filterLabel, onSearchChange, onFilterChange }) => {
    return (
      <DropdownMenu
        offset={14}
        card={
          <div className="flex flex-col gap-4 p-4">
            <Input
              size="sm"
              leftIcon={<Search size={14} />}
              value={searchValue}
              onChange={(e) => onSearchChange?.(e.target.value)}
              placeholder={searchPlaceholder ?? 'Search notifications...'}
            />
            <Checkbox label={filterLabel ?? 'Unread only'} onCheckedChange={onFilterChange} />
          </div>
        }
        items={items ?? []}
        placement="bottom-end"
        trigger={
          <button
            type="button"
            className="relative p-2 rounded-lg hover:bg-neutral-100 transition-colors"
            aria-label="Notifications"
          >
            <Bell className="w-5 h-5 text-neutral-600" />
            {count !== undefined && count > 0 && (
              <span className="absolute top-0 right-0 translate-x-1/4 -translate-y-1/4 w-4 h-4 text-xs font-medium text-white bg-accent rounded-full flex items-center justify-center">
                {count > 9 ? '9+' : count}
              </span>
            )}
          </button>
        }
      />
    );
  }
);

NotificationMenu.displayName = 'NotificationMenu';
