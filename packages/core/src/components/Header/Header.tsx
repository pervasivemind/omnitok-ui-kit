import { forwardRef, type HTMLAttributes, type ReactNode } from 'react';
import { Search, Menu } from 'lucide-react';
import { cn } from '../../utils/cn';
import { useI18n } from '../../i18n';
import { Avatar } from '../Avatar';
import { DropdownMenu, DropdownMenuItem } from '../Dropdown';
import { NotificationMenu, type NotificationMenuProps } from './NotificationMenu';

export interface HeaderProps extends HTMLAttributes<HTMLElement> {
  /** Title displayed in header */
  title?: string;
  /** Search placeholder text */
  searchPlaceholder?: string;
  /** Show search input */
  showSearch?: boolean;
  /** Search value */
  searchValue?: string;
  /** Search change handler */
  onSearchChange?: (value: string) => void;
  /** Show notifications button */
  showNotifications?: boolean;
  /** Notification menu */
  notificationMenu?: NotificationMenuProps;
  /** User info for avatar */
  user?: {
    name: string;
    email?: string;
    avatar?: string;
    role?: string;
    status?: 'online' | 'offline' | 'busy' | 'away';
  };
  /** User menu items */
  userMenuItems?: DropdownMenuItem[];
  /** User click handler */
  onUserClick?: () => void;
  /** Mobile menu toggle handler */
  onMenuToggle?: () => void;
  /** Show mobile menu button */
  showMenuToggle?: boolean;
  /** Extra actions */
  actions?: ReactNode;
}

export const Header = forwardRef<HTMLElement, HeaderProps>(
  (
    {
      title,
      searchPlaceholder = 'Search...',
      showSearch = false,
      searchValue,
      onSearchChange,
      showNotifications = false,
      notificationMenu = {
        items: [],
        count: 0,
        searchValue: '',
        onSearchChange: () => {},
        onFilterChange: () => {},
        onItemClick: () => {},
      },
      user,
      userMenuItems,
      onUserClick,
      onMenuToggle,
      showMenuToggle = false,
      actions,
      className,
      ...props
    },
    ref
  ) => {
    const { t } = useI18n();
    return (
      <header
        ref={ref}
        className={cn(
          'flex items-center justify-between gap-4 h-14 px-6 bg-white border-b border-neutral-200 font-sans',
          className
        )}
        {...props}
      >
        {/* Left section */}
        <div className="flex items-center gap-4">
          {showMenuToggle && (
            <button
              type="button"
              onClick={onMenuToggle}
              className="p-2 rounded-lg hover:bg-neutral-100 lg:hidden"
              aria-label={t('header.toggleMenu')}
            >
              <Menu aria-hidden="true" className="w-[18px] h-[18px] text-neutral-600" />
            </button>
          )}
          <div className="flex flex-col">
            {title && <h1 className="font-display text-[17px] font-extrabold leading-6 tracking-[-.01em] text-neutral-800 truncate">{title}</h1>}
          </div>
        </div>

        {/* Right section */}
        <div className="flex items-center gap-4">
          {/* Search */}
          {showSearch && (
            <div className="relative hidden md:block">
              <Search aria-hidden="true" className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" />
              <input
                type="search"
                placeholder={searchPlaceholder}
                value={searchValue}
                onChange={(e) => onSearchChange?.(e.target.value)}
                className={cn(
                  'w-64 pl-9 pr-3.5 py-2 text-[13px] leading-5 rounded-[10px]',
                  'bg-neutral-50 border border-control',
                  'placeholder:text-neutral-500',
                  'focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20'
                )}
              />
            </div>
          )}

          {/* Custom actions */}
          {actions}

          {/* Notifications */}
          {showNotifications && <NotificationMenu {...notificationMenu} />}

          {/* User */}
          {user && (
            <DropdownMenu
              className="-mr-2"
              offset={16}
              card={
                <div className="px-4 py-2 flex items-center gap-4">
                  <Avatar src={user.avatar} alt={user.name} size="xl" />
                  <div className="flex flex-col gap-1">
                    <span className="text-[13px] font-semibold text-neutral-800">{user.name}</span>
                    {user.email && <span className="text-xs text-neutral-500">{user.email}</span>}
                    {user.role && <span className="text-xs text-neutral-500">{user.role}</span>}
                  </div>
                </div>
              }
              items={userMenuItems ?? []}
              trigger={
                <div className="pr-2 flex items-center">
                  <Avatar
                    className="rounded-full hover:ring-2 hover:ring-offset-2 hover:ring-neutral-200"
                    src={user.avatar}
                    alt={user.name}
                    size="sm"
                    status={user.status}
                  />
                </div>
              }
              placement="bottom-end"
            />
          )}
        </div>
      </header>
    );
  }
);

Header.displayName = 'Header';
