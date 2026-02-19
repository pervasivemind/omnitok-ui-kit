import type { Meta, StoryObj } from '@storybook/react-vite';
import React, { useState } from 'react';
import { Header } from '@omnitok/ui';
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
  role: 'Admin',
};

const userWithAvatar = {
  name: 'Jose Soto',
  avatar: 'https://i.pravatar.cc/150?u=jose',
  role: 'Admin',
};

const userWithStatus = {
  name: 'Jose Soto',
  avatar: 'https://i.pravatar.cc/150?u=jose',
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

const notificationItems = [
  { label: 'Billing Reminder', value: 'billing-reminder', icon: <CreditCard size={16} /> },
  { label: 'Notification 1', value: 'notification-1', icon: <Bell size={16} />, dividerBefore: true },
  { label: 'Notification 2', value: 'notification-2', icon: <Bell size={16} /> },
  { label: 'Notification 3', value: 'notification-3', icon: <Bell size={16} /> },
];

export const Default: Story = {
  render: () => (
    <Header
      title="Dashboard"
      user={defaultUser}
      notificationCount={3}
      onNotificationClick={() => console.log('Notifications clicked')}
      onUserClick={() => console.log('User clicked')}
    />
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

export const NoSearch: Story = {
  render: () => <Header title="Settings" showSearch={false} user={userWithAvatar} />,
};

export const WithNotificationCount: Story = {
  render: () => (
    <Header
      title="Dashboard"
      user={userWithAvatar}
      notificationItems={notificationItems}
      notificationCount={3}
      onNotificationClick={() => console.log('Notifications clicked')}
    />
  ),
};

export const NoNotifications: Story = {
  render: () => <Header title="Profile" showNotifications={false} user={userWithAvatar} />,
};

export const WithMenuToggle: Story = {
  render: () => (
    <Header
      title="Dashboard"
      showMenuToggle
      onMenuToggle={() => console.log('Menu toggled')}
      user={userWithAvatar}
      notificationCount={3}
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
      notificationCount={5}
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
    return (
      <Header
        title="Order Management"
        showSearch
        searchPlaceholder="Search orders..."
        searchValue={search}
        onSearchChange={setSearch}
        showNotifications
        notificationItems={notificationItems}
        notificationCount={12}
        onNotificationClick={() => console.log('Notifications clicked')}
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
