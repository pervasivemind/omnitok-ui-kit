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

export const SpaLinksWithNewTabSupport: Story = {
  render: () => {
    const [activeId, setActiveId] = useState('dashboard');
    const [lastAction, setLastAction] = useState('Waiting for click...');

    return (
      <div className="h-screen flex">
        <Sidebar
          items={[
            { id: 'dashboard', label: 'Dashboard', icon: <Home size={20} />, href: '/dashboard' },
            { id: 'users', label: 'Users', icon: <Users size={20} />, href: '/users' },
            {
              id: 'analytics',
              label: 'Analytics',
              icon: <BarChart3 size={20} />,
              href: '/analytics',
            },
            { id: 'settings', label: 'Settings', icon: <Settings size={20} />, href: '/settings' },
          ]}
          logo={LogoExpanded}
          logoCollapsed={LogoCollapsed}
          systemName="SPA Navigation"
          activeId={activeId}
          onItemClick={(item) => {
            setActiveId(item.id);
            setLastAction(`SPA navigation to ${item.href ?? item.id}`);
          }}
        />

        <main className="flex-1 p-6 bg-background text-foreground overflow-y-auto">
          <h2 className="text-2xl font-semibold mb-4">Link behavior demo</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>Normal left click: updates state via SPA callback without full page refresh.</li>
            <li>Ctrl/Cmd + click: browser opens a new tab natively.</li>
            <li>Mouse wheel/middle click: browser opens a new tab natively.</li>
          </ul>

          <div className="mt-6 rounded-lg border border-border p-4">
            <p className="text-sm text-muted-foreground">Active item</p>
            <p className="text-base font-medium">{activeId}</p>
            <p className="mt-3 text-sm text-muted-foreground">Last SPA action</p>
            <p className="text-base font-medium">{lastAction}</p>
          </div>
        </main>
      </div>
    );
  },
};

export const WithOptionalElementId: Story = {
  render: () => {
    const [activeId, setActiveId] = useState('dashboard');
    const [lastClicked, setLastClicked] = useState<{ id: string; elementId?: string } | null>(null);

    return (
      <div className="h-screen flex">
        <Sidebar
          items={[
            {
              id: 'dashboard',
              label: 'Dashboard',
              icon: <Home size={20} />,
              href: '/dashboard',
              elementId: 'nav-dashboard',
            },
            {
              id: 'users',
              label: 'Users',
              icon: <Users size={20} />,
              href: '/users',
            },
            {
              id: 'analytics',
              label: 'Analytics',
              icon: <BarChart3 size={20} />,
              elementId: 'nav-analytics',
            },
            {
              id: 'settings',
              label: 'Settings',
              icon: <Settings size={20} />,
            },
          ]}
          logo={LogoExpanded}
          logoCollapsed={LogoCollapsed}
          systemName="Optional element id"
          activeId={activeId}
          onItemClick={(item) => {
            setActiveId(item.id);
            setLastClicked({ id: item.id, elementId: item.elementId });
          }}
        />

        <main className="flex-1 p-6 bg-background text-foreground overflow-y-auto">
          <h2 className="text-2xl font-semibold mb-2">Optional elementId demo</h2>
          <p className="text-sm text-muted-foreground mb-6">
            Items with <strong>elementId</strong> render an <strong>id</strong> attribute. Items
            without it still work normally.
          </p>

          <div className="rounded-lg border border-border p-4 space-y-3">
            <div>
              <p className="text-sm text-muted-foreground">Active item</p>
              <p className="text-base font-medium">{activeId}</p>
            </div>

            <div>
              <p className="text-sm text-muted-foreground">Last clicked id</p>
              <p className="text-base font-medium">{lastClicked?.id ?? 'None'}</p>
            </div>

            <div>
              <p className="text-sm text-muted-foreground">Last clicked elementId</p>
              <p className="text-base font-medium">{lastClicked?.elementId ?? 'Undefined'}</p>
            </div>
          </div>
        </main>
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
    );
  },
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

export const AutoExpandOnActiveChild: Story = {
  render: () => {
    const [activeId, setActiveId] = useState('dashboard');

    const items = [
      { id: 'dashboard', label: 'Dashboard', icon: <Home size={20} />, href: '/dashboard' },
      {
        id: 'products',
        label: 'Products',
        icon: <Package size={20} />,
        children: [
          { id: 'all-products', label: 'All Products', href: '/products/all' },
          { id: 'add-product', label: 'Add Product', href: '/products/add' },
          { id: 'categories', label: 'Categories', href: '/products/categories' },
        ],
      },
      {
        id: 'orders',
        label: 'Orders',
        icon: <ShoppingCart size={20} />,
        children: [
          { id: 'all-orders', label: 'All Orders', href: '/orders/all' },
          { id: 'pending', label: 'Pending', badge: 8, href: '/orders/pending' },
          { id: 'completed', label: 'Completed', href: '/orders/completed' },
        ],
      },
      { id: 'analytics', label: 'Analytics', icon: <BarChart3 size={20} />, href: '/analytics' },
      { id: 'settings', label: 'Settings', icon: <Settings size={20} />, href: '/settings' },
    ];

    return (
      <div className="h-screen flex">
        <Sidebar
          items={items}
          logo={LogoExpanded}
          logoCollapsed={LogoCollapsed}
          systemName="Auto-Expand Demo"
          activeId={activeId}
          onItemClick={(item) => setActiveId(item.id)}
        />

        <main className="flex-1 p-6 bg-background text-foreground overflow-y-auto">
          <h2 className="text-2xl font-semibold mb-2">Auto-expand on active child</h2>
          <p className="text-sm text-muted-foreground mb-6">
            Click the buttons below to simulate navigating to a nested child. The parent group
            automatically expands when one of its children becomes active.
          </p>

          <div className="space-y-3 mb-6">
            <p className="text-sm font-medium">Simulate navigation:</p>
            <div className="flex flex-wrap gap-2">
              {['dashboard', 'all-products', 'categories', 'pending', 'completed', 'analytics'].map(
                (id) => (
                  <button
                    key={id}
                    onClick={() => setActiveId(id)}
                    className={cn(
                      'px-3 py-1.5 text-sm rounded-lg border transition-colors',
                      activeId === id
                        ? 'bg-primary text-white border-primary'
                        : 'bg-background text-foreground border-border hover:bg-muted'
                    )}
                  >
                    {id}
                  </button>
                )
              )}
            </div>
          </div>

          <div className="rounded-lg border border-border p-4">
            <p className="text-sm text-muted-foreground">Current activeId</p>
            <p className="text-lg font-medium">{activeId}</p>
          </div>
        </main>
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
