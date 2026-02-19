import type { Meta, StoryObj } from '@storybook/react-vite';
import React, { useState } from 'react';
import { Sidebar, Avatar, cn } from '@omnitok/ui';
import {
  Home,
  Users,
  FileText,
  Settings,
  BarChart3,
  Package,
  ShoppingCart,
  MessageSquare,
  HelpCircle,
  LogOut,
} from 'lucide-react';

const meta: Meta<typeof Sidebar> = {
  title: 'Layout/Sidebar',
  component: Sidebar,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

const LogoExpanded = (
  <img src="/omnitok-logo.svg" alt="Omnitok" className="h-6 w-auto max-w-[140px] object-contain" />
);
const LogoCollapsed = (
  <img src="/omnitok-icon.svg" alt="Omnitok" className="h-8 w-8 object-contain" />
);

const CustomLogoExpanded = (
  <img
    src="/omnitok-logo-accent.svg"
    alt="Omnitok"
    className="h-6 w-auto max-w-[140px] object-contain"
  />
);
const CustomLogoCollapsed = (
  <img src="/omnitok-icon-accent.svg" alt="Omnitok" className="h-8 w-8 object-contain" />
);

const sidebarItems = [
  { id: 'dashboard', label: 'Dashboard', icon: <Home size={20} />, active: true },
  { id: 'users', label: 'Users', icon: <Users size={20} />, badge: 5 },
  { id: 'products', label: 'Products', icon: <Package size={20} /> },
  { id: 'orders', label: 'Orders', icon: <ShoppingCart size={20} />, badge: 12 },
  { id: 'analytics', label: 'Analytics', icon: <BarChart3 size={20} /> },
  {
    id: 'content',
    label: 'Content',
    icon: <FileText size={20} />,
    children: [
      { id: 'pages', label: 'Pages' },
      { id: 'posts', label: 'Posts' },
      { id: 'media', label: 'Media' },
    ],
  },
  { id: 'messages', label: 'Messages', icon: <MessageSquare size={20} /> },
  { id: 'settings', label: 'Settings', icon: <Settings size={20} /> },
];

export const Default: Story = {
  render: () => (
    <div className="h-screen">
      <Sidebar
        items={sidebarItems}
        logo={LogoExpanded}
        logoCollapsed={LogoCollapsed}
        systemName="Admin Panel"
        activeId="dashboard"
      />
    </div>
  ),
};

export const Collapsible: Story = {
  render: () => {
    const [collapsed, setCollapsed] = useState(false);
    return (
      <div className="h-screen">
        <Sidebar
          items={sidebarItems}
          logo={LogoExpanded}
          logoCollapsed={LogoCollapsed}
          systemName="Admin"
          activeId="dashboard"
          collapsed={collapsed}
          onCollapsedChange={setCollapsed}
          collapsible
        />
      </div>
    );
  },
};

export const WithCustomLogo: Story = {
  render: () => {
    const [collapsed, setCollapsed] = useState(false);
    return (
      <div className="h-screen">
        <Sidebar
          items={sidebarItems}
          logo={CustomLogoExpanded}
          logoCollapsed={CustomLogoCollapsed}
          systemName="Content Manager"
          activeId="dashboard"
          collapsed={collapsed}
          onCollapsedChange={setCollapsed}
          collapsible
        />
      </div>
    );
  },
};

export const WithFooter: Story = {
  render: () => {
    const [collapsed, setCollapsed] = useState(false);
    return (
    <div className="h-screen">
      <Sidebar
        items={sidebarItems}
        logo={LogoExpanded}
        logoCollapsed={LogoCollapsed}
        systemName="Dashboard"
        activeId="dashboard"
        collapsed={collapsed}
        onCollapsedChange={setCollapsed}
        collapsible
        footer={
          <div className="flex flex-col gap-2">
            <button className="flex items-center gap-3 px-4 py-2 text-sm text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors">
              <HelpCircle size={20} />
              <span className={cn(collapsed && 'hidden')}>Help & Support</span>
            </button>
            <button className="flex items-center gap-3 px-4 py-2 text-sm text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors">
              <LogOut size={20} />
              <span className={cn(collapsed && 'hidden')}>Logout</span>
            </button>
            <div className="flex items-center gap-3 px-4 py-2 border-t border-white/10 mt-2 pt-4">
              <Avatar initials="PJ" size="sm" />
              <div className={cn(collapsed && 'hidden')}>
                <div className="text-sm font-medium text-white">Pablo Junyent</div>
                <div className="text-xs text-white/50">Admin</div>
              </div>
            </div>
          </div>
        }
      />
    </div>
  )},
};

export const WithNestedItems: Story = {
  render: () => (
    <div className="h-screen">
      <Sidebar
        items={[
          { id: 'dashboard', label: 'Dashboard', icon: <Home size={20} /> },
          {
            id: 'products',
            label: 'Products',
            icon: <Package size={20} />,
            children: [
              { id: 'all-products', label: 'All Products' },
              { id: 'add-product', label: 'Add Product' },
              { id: 'categories', label: 'Categories' },
              { id: 'inventory', label: 'Inventory' },
            ],
          },
          {
            id: 'orders',
            label: 'Orders',
            icon: <ShoppingCart size={20} />,
            children: [
              { id: 'all-orders', label: 'All Orders' },
              { id: 'pending', label: 'Pending', badge: 8 },
              { id: 'completed', label: 'Completed' },
            ],
          },
          { id: 'analytics', label: 'Analytics', icon: <BarChart3 size={20} /> },
          { id: 'settings', label: 'Settings', icon: <Settings size={20} /> },
        ]}
        logo={LogoExpanded}
        logoCollapsed={LogoCollapsed}
        systemName="E-Commerce"
        activeId="dashboard"
      />
    </div>
  ),
};

export const WithSeparators: Story = {
  render: () => {
    const [collapsed, setCollapsed] = useState(false);
    return (
      <div className="h-screen">
        <Sidebar
          items={[
            { id: 'dashboard', label: 'Dashboard', icon: <Home size={20} />, active: true },
            { id: 'users', label: 'Users', icon: <Users size={20} />, badge: 5 },
            { id: 'products', label: 'Products', icon: <Package size={20} /> },
            { id: 'orders', label: 'Orders', icon: <ShoppingCart size={20} />, badge: 12 },
            {
              id: 'analytics',
              label: 'Analytics',
              icon: <BarChart3 size={20} />,
              dividerBefore: true,
            },
            { id: 'messages', label: 'Messages', icon: <MessageSquare size={20} /> },
            {
              id: 'settings',
              label: 'Settings',
              icon: <Settings size={20} />,
              dividerBefore: true,
            },
          ]}
          logo={LogoExpanded}
          logoCollapsed={LogoCollapsed}
          systemName="Admin Panel"
          activeId="dashboard"
          collapsed={collapsed}
          onCollapsedChange={setCollapsed}
          collapsible
        />
      </div>
    );
  },
};

export const CollapsedWithNestedItems: Story = {
  render: () => {
    const [collapsed, setCollapsed] = useState(true);
    return (
      <div className="h-screen">
        <Sidebar
          items={[
            { id: 'dashboard', label: 'Dashboard', icon: <Home size={20} /> },
            {
              id: 'products',
              label: 'Products',
              icon: <Package size={20} />,
              children: [
                { id: 'all-products', label: 'All Products' },
                { id: 'add-product', label: 'Add Product' },
                { id: 'categories', label: 'Categories' },
                { id: 'inventory', label: 'Inventory' },
              ],
            },
            {
              id: 'orders',
              label: 'Orders',
              icon: <ShoppingCart size={20} />,
              children: [
                { id: 'all-orders', label: 'All Orders' },
                { id: 'pending', label: 'Pending', badge: 8 },
                { id: 'completed', label: 'Completed' },
              ],
            },
            { id: 'analytics', label: 'Analytics', icon: <BarChart3 size={20} /> },
            { id: 'settings', label: 'Settings', icon: <Settings size={20} /> },
          ]}
          logo={LogoExpanded}
          logoCollapsed={LogoCollapsed}
          systemName="E-Commerce"
          activeId="dashboard"
          collapsed={collapsed}
          onCollapsedChange={setCollapsed}
          collapsible
        />
      </div>
    );
  },
};
