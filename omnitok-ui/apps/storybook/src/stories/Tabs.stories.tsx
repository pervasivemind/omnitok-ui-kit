import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Tabs, TabPanel, Card } from '@omnitok/ui';
import { Home, User, Settings, Bell } from 'lucide-react';

const meta: Meta<typeof Tabs> = {
  title: 'Components/Tabs',
  component: Tabs,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'pills', 'underline'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const tabItems = [
  { id: 'overview', label: 'Overview' },
  { id: 'analytics', label: 'Analytics' },
  { id: 'reports', label: 'Reports' },
  { id: 'notifications', label: 'Notifications' },
];

export const Default: Story = {
  args: {
    items: tabItems,
    defaultActiveId: 'overview',
  },
  render: (args) => (
    <Tabs {...args}>
      <TabPanel id="overview">
        <Card>Overview content goes here</Card>
      </TabPanel>
      <TabPanel id="analytics">
        <Card>Analytics content goes here</Card>
      </TabPanel>
      <TabPanel id="reports">
        <Card>Reports content goes here</Card>
      </TabPanel>
      <TabPanel id="notifications">
        <Card>Notifications content goes here</Card>
      </TabPanel>
    </Tabs>
  ),
};

export const Pills: Story = {
  args: {
    items: tabItems,
    variant: 'pills',
    defaultActiveId: 'overview',
  },
  render: (args) => (
    <Tabs {...args}>
      <TabPanel id="overview">
        <Card>Overview content</Card>
      </TabPanel>
      <TabPanel id="analytics">
        <Card>Analytics content</Card>
      </TabPanel>
      <TabPanel id="reports">
        <Card>Reports content</Card>
      </TabPanel>
      <TabPanel id="notifications">
        <Card>Notifications content</Card>
      </TabPanel>
    </Tabs>
  ),
};

export const Underline: Story = {
  args: {
    items: tabItems,
    variant: 'underline',
    defaultActiveId: 'overview',
  },
  render: (args) => (
    <Tabs {...args}>
      <TabPanel id="overview">
        <Card>Overview content</Card>
      </TabPanel>
      <TabPanel id="analytics">
        <Card>Analytics content</Card>
      </TabPanel>
      <TabPanel id="reports">
        <Card>Reports content</Card>
      </TabPanel>
      <TabPanel id="notifications">
        <Card>Notifications content</Card>
      </TabPanel>
    </Tabs>
  ),
};

export const WithIcons: Story = {
  args: {
    items: [
      { id: 'home', label: 'Home', icon: <Home size={16} /> },
      { id: 'profile', label: 'Profile', icon: <User size={16} /> },
      { id: 'settings', label: 'Settings', icon: <Settings size={16} /> },
      { id: 'notifications', label: 'Notifications', icon: <Bell size={16} /> },
    ],
    defaultActiveId: 'home',
  },
  render: (args) => (
    <Tabs {...args}>
      <TabPanel id="home">
        <Card>Home content</Card>
      </TabPanel>
      <TabPanel id="profile">
        <Card>Profile content</Card>
      </TabPanel>
      <TabPanel id="settings">
        <Card>Settings content</Card>
      </TabPanel>
      <TabPanel id="notifications">
        <Card>Notifications content</Card>
      </TabPanel>
    </Tabs>
  ),
};

export const WithBadges: Story = {
  args: {
    items: [
      { id: 'all', label: 'All', badge: 24 },
      { id: 'unread', label: 'Unread', badge: 5 },
      { id: 'archived', label: 'Archived', badge: 12 },
    ],
    defaultActiveId: 'all',
  },
  render: (args) => (
    <Tabs {...args}>
      <TabPanel id="all">
        <Card>All messages</Card>
      </TabPanel>
      <TabPanel id="unread">
        <Card>Unread messages</Card>
      </TabPanel>
      <TabPanel id="archived">
        <Card>Archived messages</Card>
      </TabPanel>
    </Tabs>
  ),
};

export const FullWidth: Story = {
  args: {
    items: tabItems,
    fullWidth: true,
    defaultActiveId: 'overview',
  },
  parameters: {
    layout: 'fullscreen',
  },
  render: (args) => (
    <div className="w-full px-6">
      <Tabs {...args}>
        <TabPanel id="overview">
          <Card>Overview content</Card>
        </TabPanel>
        <TabPanel id="analytics">
          <Card>Analytics content</Card>
        </TabPanel>
        <TabPanel id="reports">
          <Card>Reports content</Card>
        </TabPanel>
        <TabPanel id="notifications">
          <Card>Notifications content</Card>
        </TabPanel>
      </Tabs>
    </div>
  ),
};

export const WithDisabled: Story = {
  args: {
    items: [
      { id: 'active', label: 'Active' },
      { id: 'pending', label: 'Pending' },
      { id: 'disabled', label: 'Disabled', disabled: true },
    ],
    defaultActiveId: 'active',
  },
  render: (args) => (
    <Tabs {...args}>
      <TabPanel id="active">
        <Card>Active content</Card>
      </TabPanel>
      <TabPanel id="pending">
        <Card>Pending content</Card>
      </TabPanel>
      <TabPanel id="disabled">
        <Card>Disabled content</Card>
      </TabPanel>
    </Tabs>
  ),
};
