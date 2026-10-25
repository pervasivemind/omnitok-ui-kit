import type { Meta, StoryObj } from '@storybook/react-vite';
import React, { useState } from 'react';
import { Header, Badge } from '@omnitok/ui';
import { Settings, LogOut, CreditCard, HelpCircle, Moon, Bell } from 'lucide-react';

const meta: Meta<typeof Header> = {
  title: 'Layout/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

const defaultUser = {
  name: 'Jose Soto',
  email: 'jose@example.com',
  role: 'Admin',
};

const userWithAvatar = {
  name: 'Jose Soto',
  avatar: 'https://i.pravatar.cc/150?u=jose',
  email: 'jose@example.com',
  role: 'Admin',
};

const userWithStatus = {
  name: 'Jose Soto',
  avatar: 'https://i.pravatar.cc/150?u=jose',
  email: 'jose@example.com',
  role: 'Admin',
  status: 'online' as const,
};

const userMenuItems = [
  { label: 'Settings', value: 'settings', icon: <Settings size={16} /> },
  { label: 'Billing', value: 'billing', icon: <CreditCard size={16} /> },
  { label: 'Help', value: 'help', icon: <HelpCircle size={16} /> },
  {
    label: 'Logout',
    value: 'logout',
    icon: <LogOut size={16} />,
    danger: true,
    dividerBefore: true,
  },
];

const unreadNotifications = [
  {
    label: 'Notification 1',
    value: 'notification-1',
    icon: <Bell size={16} />,
    badge: <Badge variant="info" dot />,
  },
  {
    label: 'Notification 2',
    value: 'notification-2',
    icon: <Bell size={16} />,
    badge: <Badge variant="info" dot />,
  },
  {
    label: 'Notification 3',
    value: 'notification-3',
    icon: <Bell size={16} />,
    badge: <Badge variant="info" dot />,
  },
];

const readNotifications = [
  { label: 'Notification 4', value: 'notification-4', icon: <Bell size={16} /> },
  { label: 'Notification 5', value: 'notification-5', icon: <Bell size={16} /> },
];

const notificationItems = [...unreadNotifications, ...readNotifications];


// --- Stories ---

export const Default: Story = {
  render: () => (
    <Header title="Dashboard" user={defaultUser} onUserClick={() => console.log('User clicked')} />
  ),
};

export const WithSearch: Story = {
  render: () => {
    const [search, setSearch] = useState('');
    return (
      <Header
        title="Products"
        showSearch
        searchPlaceholder="Search products..."
        searchValue={search}
        onSearchChange={setSearch}
        user={userWithAvatar}
      />
    );
  },
};

export const WithNotifications: Story = {
  render: () => {
    const [notificationSearch, setNotificationSearch] = useState('');
    const [unreadOnly, setUnreadOnly] = useState(false);
    const unreadNotificationCount = unreadNotifications.length;
    const filteredNotifications = unreadOnly ? unreadNotifications : notificationItems;
    const searchedNotifications = filteredNotifications.filter((item) =>
      item.label.toLowerCase().includes(notificationSearch.toLowerCase())
    );
    const shownNotifications = searchedNotifications.length > 0 ? searchedNotifications : [{
      label: 'No notifications found.',
      value: 'no-notifications',
      disabled: true,
    }];

    return (
      <Header
        title="Dashboard"
        user={userWithAvatar}
        showNotifications
        notificationMenu={{
          items: shownNotifications,
          count: unreadNotificationCount,
          searchValue: notificationSearch,
          onSearchChange: setNotificationSearch,
          onFilterChange: setUnreadOnly,
        }}
      />
    );
  },
};


export const WithCustomNotificationsText: Story = {
  render: () => {
    const [notificationSearch, setNotificationSearch] = useState('');
    const [unreadOnly, setUnreadOnly] = useState(false);
    const unreadNotificationCount = unreadNotifications.length;
    const filteredNotifications = unreadOnly ? unreadNotifications : notificationItems;
    const searchedNotifications = filteredNotifications.filter((item) =>
      item.label.toLowerCase().includes(notificationSearch.toLowerCase())
    );
    const shownNotifications = searchedNotifications.length > 0 ? searchedNotifications : [{
      label: 'No notifications found.',
      value: 'no-notifications',
      disabled: true,
    }];

    return (
      <Header
        title="Dashboard"
        user={userWithAvatar}
        showNotifications
        notificationMenu={{
          items: shownNotifications,
          count: unreadNotificationCount,
          searchValue: notificationSearch,
          onSearchChange: setNotificationSearch,
          onFilterChange: setUnreadOnly,
          filterLabel: 'Solo no leídos',
          searchPlaceholder: 'Buscar notificaciones...',
        }}
      />
    );
  },
};

export const WithMenuToggle: Story = {
  render: () => (
    <Header
      title="Dashboard"
      showMenuToggle
      onMenuToggle={() => console.log('Menu toggled')}
      user={userWithAvatar}
    />
  ),
};

export const WithUserMenu: Story = {
  render: () => (
    <Header
      title="Dashboard"
      user={userWithAvatar}
      userMenuItems={userMenuItems}
      onUserClick={() => console.log('Profile clicked')}
    />
  ),
};

export const WithCustomActions: Story = {
  render: () => (
    <Header
      title="Dashboard"
      user={userWithAvatar}
      actions={
        <button
          type="button"
          className="p-2 rounded-lg hover:bg-neutral-100 transition-colors"
          aria-label="Toggle dark mode"
        >
          <Moon className="w-5 h-5 text-neutral-600" />
        </button>
      }
    />
  ),
};

export const Minimal: Story = {
  render: () => <Header title="Simple Page" showSearch={false} showNotifications={false} />,
};

export const FullFeatured: Story = {
  render: () => {
    const [search, setSearch] = useState('');
    const [notificationSearch, setNotificationSearch] = useState('');
    const [unreadOnly, setUnreadOnly] = useState(false);
    const unreadNotificationCount = unreadNotifications.length;
    const filteredNotifications = unreadOnly ? unreadNotifications : notificationItems;
    const searchedNotifications = filteredNotifications.filter((item) =>
      item.label.toLowerCase().includes(notificationSearch.toLowerCase())
    );
    const shownNotifications = searchedNotifications.length > 0 ? searchedNotifications : [{
      label: 'No notifications found.',
      value: 'no-notifications',
      disabled: true,
    }];

    return (
      <Header
        title="Order Management"
        showSearch
        searchPlaceholder="Search orders..."
        searchValue={search}
        onSearchChange={setSearch}
        showNotifications
        notificationMenu={{
          items: shownNotifications,
          count: unreadNotificationCount,
          searchValue: notificationSearch,
          onSearchChange: setNotificationSearch,
          onFilterChange: setUnreadOnly,
        }}
        showMenuToggle
        onMenuToggle={() => console.log('Menu toggled')}
        user={userWithStatus}
        userMenuItems={userMenuItems}
        onUserClick={() => console.log('Profile clicked')}
        actions={
          <button
            type="button"
            className="p-2 rounded-lg hover:bg-neutral-100 transition-colors"
            aria-label="Toggle dark mode"
          >
            <Moon className="w-5 h-5 text-neutral-600" />
          </button>
        }
      />
    );
  },
};
