import type { Meta, StoryObj } from '@storybook/react-vite';
import React, { useState } from 'react';
import { Layout, SidePanel, Card, Button, Input, Select, Textarea } from '@omnitok/ui';
import {
  Home,
  Users,
  Package,
  ShoppingCart,
  BarChart3,
  Settings,
  Pencil,
} from 'lucide-react';

const meta: Meta<typeof SidePanel> = {
  title: 'Layout/SidePanel',
  component: SidePanel,
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

const userInfo = {
  name: 'Pablo Junyent',
  role: 'Administrator',
};

const sampleProducts = [
  { id: 1, name: 'Wireless Headphones', category: 'Electronics', price: '$89.99', stock: 142 },
  { id: 2, name: 'Ergonomic Keyboard', category: 'Electronics', price: '$129.99', stock: 85 },
  { id: 3, name: 'Running Shoes', category: 'Footwear', price: '$74.50', stock: 213 },
  { id: 4, name: 'Backpack Pro', category: 'Accessories', price: '$59.99', stock: 67 },
  { id: 5, name: 'Desk Lamp', category: 'Home', price: '$34.99', stock: 310 },
];

export const WithSidebar: Story = {
  render: () => {
    const [editorOpen, setEditorOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState<(typeof sampleProducts)[0] | null>(null);

    const openEditor = (product: (typeof sampleProducts)[0]) => {
      setSelectedProduct(product);
      setEditorOpen(true);
    };

    return (
      <Layout
        sidebarItems={sidebarItems}
        logo={LogoExpanded}
        logoCollapsed={LogoCollapsed}
        systemName="Admin Panel"
        activeSidebarId="products"
        headerTitle="Products"
        user={userInfo}
        notificationCount={3}
        rightPanel={
          editorOpen && selectedProduct ? (
            <SidePanel
              title={`Edit: ${selectedProduct.name}`}
              description="Update product details"
              onClose={() => setEditorOpen(false)}
            >
              <div className="space-y-4">
                <Input label="Product Name" defaultValue={selectedProduct.name} />
                <Input label="Price" defaultValue={selectedProduct.price} />
                <Input
                  label="Stock"
                  type="number"
                  defaultValue={String(selectedProduct.stock)}
                />
                <Textarea
                  label="Description"
                  placeholder="Enter product description..."
                  rows={4}
                />
              </div>
            </SidePanel>
          ) : undefined
        }
        rightPanelWidth="480px"
      >
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">Product List</h2>
            <span className="text-sm text-neutral-500">
              Click edit to open the side panel
            </span>
          </div>
          <div className="space-y-3">
            {sampleProducts.map((product) => (
              <Card key={product.id} variant="bordered">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold">{product.name}</h3>
                    <p className="text-sm text-neutral-500">
                      {product.category} &middot; {product.price} &middot; {product.stock} in stock
                    </p>
                  </div>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => openEditor(product)}
                  >
                    <Pencil size={16} className="mr-1" />
                    Edit
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Layout>
    );
  },
};

export const WithoutSidebar: Story = {
  render: () => {
    const [editorOpen, setEditorOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState<(typeof sampleProducts)[0] | null>(null);

    const openEditor = (product: (typeof sampleProducts)[0]) => {
      setSelectedProduct(product);
      setEditorOpen(true);
    };

    return (
      <Layout
        hideSidebar
        headerTitle="Products"
        user={userInfo}
        rightPanel={
          editorOpen && selectedProduct ? (
            <SidePanel
              title={`Edit: ${selectedProduct.name}`}
              description="Update product details"
              onClose={() => setEditorOpen(false)}
            >
              <div className="space-y-4">
                <Input label="Product Name" defaultValue={selectedProduct.name} />
                <Input label="Price" defaultValue={selectedProduct.price} />
                <Input
                  label="Stock"
                  type="number"
                  defaultValue={String(selectedProduct.stock)}
                />
              </div>
            </SidePanel>
          ) : undefined
        }
        rightPanelWidth="480px"
      >
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">Product List</h2>
            <span className="text-sm text-neutral-500">
              Layout without sidebar
            </span>
          </div>
          <div className="space-y-3">
            {sampleProducts.map((product) => (
              <Card key={product.id} variant="bordered">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold">{product.name}</h3>
                    <p className="text-sm text-neutral-500">
                      {product.category} &middot; {product.price} &middot; {product.stock} in stock
                    </p>
                  </div>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => openEditor(product)}
                  >
                    <Pencil size={16} className="mr-1" />
                    Edit
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Layout>
    );
  },
};

export const WithForm: Story = {
  render: () => {
    const [editorOpen, setEditorOpen] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      setEditorOpen(false);
    };

    return (
      <Layout
        sidebarItems={sidebarItems}
        logo={LogoExpanded}
        logoCollapsed={LogoCollapsed}
        systemName="Admin Panel"
        activeSidebarId="users"
        headerTitle="Users"
        user={userInfo}
        rightPanel={
          editorOpen ? (
            <SidePanel
              title="Create User"
              description="Add a new team member"
              onClose={() => setEditorOpen(false)}
              footer={
                <>
                  <Button variant="ghost" onClick={() => setEditorOpen(false)}>
                    Cancel
                  </Button>
                  <Button type="submit" form="create-user-form">
                    Save User
                  </Button>
                </>
              }
            >
              <form id="create-user-form" onSubmit={handleSubmit} className="space-y-4">
                <Input label="Full Name" placeholder="John Doe" required />
                <Input label="Email" type="email" placeholder="john@example.com" required />
                <Select
                  label="Role"
                  options={[
                    { value: 'admin', label: 'Administrator' },
                    { value: 'editor', label: 'Editor' },
                    { value: 'viewer', label: 'Viewer' },
                  ]}
                  placeholder="Select a role"
                />
                <Select
                  label="Department"
                  options={[
                    { value: 'engineering', label: 'Engineering' },
                    { value: 'design', label: 'Design' },
                    { value: 'marketing', label: 'Marketing' },
                    { value: 'sales', label: 'Sales' },
                  ]}
                  placeholder="Select a department"
                />
                <Textarea
                  label="Notes"
                  placeholder="Any additional notes..."
                  rows={3}
                />
              </form>
            </SidePanel>
          ) : undefined
        }
        rightPanelWidth="480px"
      >
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">Team Members</h2>
            <Button onClick={() => setEditorOpen(true)}>
              + Add User
            </Button>
          </div>
          <Card variant="bordered">
            <p className="text-neutral-600">
              Click &quot;Add User&quot; to open the side panel with a form.
              The form can be submitted via the footer Save button, which closes the panel.
              The Cancel button and X button also close it.
            </p>
          </Card>
        </div>
      </Layout>
    );
  },
};

export const CustomWidth: Story = {
  render: () => {
    const [editorOpen, setEditorOpen] = useState(true);

    return (
      <Layout
        sidebarItems={sidebarItems}
        logo={LogoExpanded}
        logoCollapsed={LogoCollapsed}
        systemName="Admin Panel"
        activeSidebarId="orders"
        headerTitle="Orders"
        user={userInfo}
        rightPanel={
          editorOpen ? (
            <SidePanel
              title="Order #1234"
              description="Review order details and line items"
              onClose={() => setEditorOpen(false)}
              footer={
                <>
                  <Button variant="ghost" onClick={() => setEditorOpen(false)}>
                    Close
                  </Button>
                  <Button variant="primary">
                    Approve Order
                  </Button>
                </>
              }
            >
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-2">Customer</h3>
                  <p className="text-sm text-neutral-600">Jane Smith</p>
                  <p className="text-sm text-neutral-500">jane.smith@example.com</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Items</h3>
                  <div className="space-y-2">
                    {[
                      { name: 'Wireless Headphones', qty: 1, price: '$89.99' },
                      { name: 'USB-C Cable (3-pack)', qty: 2, price: '$24.99' },
                      { name: 'Phone Case', qty: 1, price: '$19.99' },
                    ].map((item) => (
                      <div
                        key={item.name}
                        className="flex justify-between text-sm py-2 border-b border-neutral-100"
                      >
                        <span>
                          {item.name} <span className="text-neutral-400">x{item.qty}</span>
                        </span>
                        <span className="font-medium">{item.price}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex justify-between font-semibold pt-2">
                  <span>Total</span>
                  <span>$159.96</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Shipping Address</h3>
                  <p className="text-sm text-neutral-600">
                    123 Main St, Apt 4B<br />
                    New York, NY 10001
                  </p>
                </div>
              </div>
            </SidePanel>
          ) : undefined
        }
        rightPanelWidth="640px"
      >
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">Orders</h2>
            {!editorOpen && (
              <Button onClick={() => setEditorOpen(true)}>View Order #1234</Button>
            )}
          </div>
          <Card variant="bordered">
            <p className="text-neutral-600">
              This story demonstrates a wider side panel (640px) with order details.
            </p>
          </Card>
        </div>
      </Layout>
    );
  },
};
