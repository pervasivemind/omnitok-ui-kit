import type { Meta, StoryObj } from '@storybook/react-vite';
import React, { useState } from 'react';
import { Layout, Card, Button, Breadcrumb } from '@omnitok/ui';
import {
  Home,
  Users,
  Package,
  ShoppingCart,
  BarChart3,
  Settings,
  MessageSquare,
  Send,
} from 'lucide-react';

const meta: Meta<typeof Layout> = {
  title: 'Layout/Layout',
  component: Layout,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

const LogoExpanded = (
  <img
    src="/omnitok-logo.svg"
    alt="Omnitok"
    className="h-6 w-auto max-w-[140px] object-contain"
  />
);
const LogoCollapsed = (
  <img
    src="/omnitok-icon.svg"
    alt="Omnitok"
    className="h-8 w-8 object-contain"
  />
);

const sidebarItems = [
  { id: 'dashboard', label: 'Dashboard', icon: <Home size={20} /> },
  { id: 'users', label: 'Users', icon: <Users size={20} />, badge: 5 },
  { id: 'products', label: 'Products', icon: <Package size={20} /> },
  { id: 'orders', label: 'Orders', icon: <ShoppingCart size={20} />, badge: 12 },
  { id: 'analytics', label: 'Analytics', icon: <BarChart3 size={20} /> },
  { id: 'settings', label: 'Settings', icon: <Settings size={20} /> },
];

export const Default: Story = {
  args: {
    sidebarItems,
    logo: LogoExpanded,
    logoCollapsed: LogoCollapsed,
    systemName: 'Admin Panel',
    activeSidebarId: 'dashboard',
    headerTitle: 'Dashboard',
    user: {
      name: 'Pablo Junyent',
      role: 'Administrator',
    },
    notificationCount: 3,
    children: (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card variant="bordered">
          <h3 className="font-semibold mb-2">Total Users</h3>
          <p className="text-3xl font-bold text-primary">1,234</p>
        </Card>
        <Card variant="bordered">
          <h3 className="font-semibold mb-2">Revenue</h3>
          <p className="text-3xl font-bold text-success">$45,678</p>
        </Card>
        <Card variant="bordered">
          <h3 className="font-semibold mb-2">Orders</h3>
          <p className="text-3xl font-bold text-accent">567</p>
        </Card>
      </div>
    ),
  },
};

export const WithBreadcrumb: Story = {
  args: {
    sidebarItems,
    logo: LogoExpanded,
    logoCollapsed: LogoCollapsed,
    systemName: 'Admin Panel',
    activeSidebarId: 'products',
    headerBreadcrumb: (
      <Breadcrumb
        items={[
          { label: 'Home', href: '#' },
          { label: 'Products', href: '#' },
          { label: 'Edit Product' },
        ]}
        showHomeIcon
      />
    ),
    user: {
      name: 'Pablo Junyent',
      role: 'Administrator',
    },
    children: (
      <Card variant="bordered">
        <h2 className="text-xl font-semibold mb-4">Edit Product</h2>
        <p className="text-neutral-600">Product form content goes here...</p>
      </Card>
    ),
  },
};

export const WithRightPanel: Story = {
  args: {
    sidebarItems,
    logo: LogoExpanded,
    logoCollapsed: LogoCollapsed,
    systemName: 'Content Analytics',
    activeSidebarId: 'analytics',
    headerTitle: 'Analytics Dashboard',
    user: {
      name: 'Pablo Junyent',
      role: 'Administrator',
    },
    rightPanel: (
      <div className="flex flex-col h-full">
        <div className="p-4 border-b border-neutral-200">
          <h3 className="font-semibold flex items-center gap-2">
            <MessageSquare size={18} />
            AI Assistant
          </h3>
        </div>
        <div className="flex-1 p-4 overflow-y-auto">
          <div className="space-y-4">
            <div className="bg-neutral-100 rounded-lg p-3">
              <p className="text-sm">How can I help you today?</p>
            </div>
            <div className="bg-primary/10 rounded-lg p-3 ml-8">
              <p className="text-sm">Show me the sales trend for this month.</p>
            </div>
            <div className="bg-neutral-100 rounded-lg p-3">
              <p className="text-sm">
                Based on the data, sales are up 15% compared to last month.
                The main drivers are...
              </p>
            </div>
          </div>
        </div>
        <div className="p-4 border-t border-neutral-200">
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Ask a question..."
              className="flex-1 px-3 py-2 border border-neutral-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Button size="sm">
              <Send size={16} />
            </Button>
          </div>
        </div>
      </div>
    ),
    rightPanelWidth: '360px',
    children: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="md:col-span-2" variant="bordered">
          <h3 className="font-semibold mb-4">Sales Overview</h3>
          <div className="h-64 bg-neutral-100 rounded flex items-center justify-center text-neutral-400">
            Chart placeholder
          </div>
        </Card>
        <Card variant="bordered">
          <h3 className="font-semibold mb-4">Top Products</h3>
          <div className="space-y-3">
            {['Product A', 'Product B', 'Product C'].map((product) => (
              <div key={product} className="flex justify-between">
                <span>{product}</span>
                <span className="text-neutral-500">$1,234</span>
              </div>
            ))}
          </div>
        </Card>
        <Card variant="bordered">
          <h3 className="font-semibold mb-4">Recent Orders</h3>
          <div className="space-y-3">
            {['#1234', '#1235', '#1236'].map((order) => (
              <div key={order} className="flex justify-between">
                <span>{order}</span>
                <span className="text-success">Completed</span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    ),
  },
};

export const NoSidebar: Story = {
  args: {
    hideSidebar: true,
    headerTitle: 'Public Page',
    children: (
      <Card variant="bordered">
        <h2 className="text-xl font-semibold mb-4">Welcome</h2>
        <p className="text-neutral-600">
          This layout has no sidebar, useful for public pages or login screens.
        </p>
      </Card>
    ),
  },
};

export const NoHeader: Story = {
  args: {
    sidebarItems,
    logo: LogoExpanded,
    logoCollapsed: LogoCollapsed,
    systemName: 'Admin Panel',
    activeSidebarId: 'dashboard',
    hideHeader: true,
    children: (
      <Card variant="bordered">
        <h2 className="text-xl font-semibold mb-4">Full Content Area</h2>
        <p className="text-neutral-600">
          This layout has no header, giving more space for content.
        </p>
      </Card>
    ),
  },
};
