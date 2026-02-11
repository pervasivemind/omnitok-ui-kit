import type { Meta, StoryObj } from '@storybook/react-vite';
import React, { useState } from 'react';
import {
  Layout,
  Sidebar,
  Header,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
  Input,
  Select,
  Textarea,
  Checkbox,
  Radio,
  Alert,
  Breadcrumb,
} from '@omnitok/ui';
import {
  Home,
  Users,
  Package,
  ShoppingCart,
  Settings,
  Save,
  X,
  Upload,
  Image,
} from 'lucide-react';

const meta: Meta<typeof Layout> = {
  title: 'Examples/Forms',
  component: Layout,
  parameters: {
    layout: 'fullscreen',
    viewport: {
      defaultViewport: 'desktop',
    },
  },
};

export default meta;
type Story = StoryObj;

const LogoExpanded = (
  <img
    src="/omnitok-logo.svg"
    alt="Omnitok"
    className="h-6 w-auto max-w-[140px] object-contain"
  />
);
const LogoCollapsed = (
  <img
    src="/omnitok-icon-primary.svg"
    alt="Omnitok"
    className="h-8 w-8 object-contain"
  />
);

const sidebarItems = [
  { id: 'dashboard', label: 'Dashboard', icon: <Home size={20} /> },
  { id: 'users', label: 'Usuarios', icon: <Users size={20} />, badge: 42 },
  { id: 'products', label: 'Productos', icon: <Package size={20} />, active: true, badge: 156 },
  { id: 'orders', label: 'Pedidos', icon: <ShoppingCart size={20} />, badge: 8 },
  { id: 'settings', label: 'Configuración', icon: <Settings size={20} />, badge: 1 },
];

export const ProductForm: Story = {
  render: () => {
    const [collapsed, setCollapsed] = useState(false);
    const [formData, setFormData] = useState({
      name: '',
      sku: '',
      category: '',
      price: '',
      stock: '',
      description: '',
      active: true,
      featured: false,
      status: 'draft',
    });

    return (
      <Layout
        sidebarItems={sidebarItems}
        logo={LogoExpanded}
        logoCollapsed={LogoCollapsed}
        systemName="Inventario"
        activeSidebarId="products"
        headerTitle="Nuevo Producto"
        headerSubtitle="Crear un nuevo producto en el catálogo"
        headerBreadcrumb={
          <Breadcrumb
            items={[
              { label: 'Inicio', href: '#' },
              { label: 'Productos', href: '#' },
              { label: 'Nuevo Producto' },
            ]}
          />
        }
        headerActions={
          <div className="flex items-center gap-3">
            <Button variant="ghost" leftIcon={<X size={18} />}>
              Cancelar
            </Button>
            <Button variant="primary" leftIcon={<Save size={18} />}>
              Guardar Producto
            </Button>
          </div>
        }
      >
        <div className="max-w-4xl space-y-6">
          {/* Basic Info */}
          <Card noPadding>
            <CardHeader>Información Básica</CardHeader>
            <CardBody className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1">
                    Nombre del Producto *
                  </label>
                  <Input
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Ej: Camiseta Premium"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1">
                    SKU *
                  </label>
                  <Input
                    value={formData.sku}
                    onChange={(e) => setFormData({ ...formData, sku: e.target.value })}
                    placeholder="Ej: CAM-001"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-1">
                  Categoría *
                </label>
                <Select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  options={[
                    { value: '', label: 'Seleccionar categoría' },
                    { value: 'clothing', label: 'Ropa' },
                    { value: 'electronics', label: 'Electrónica' },
                    { value: 'home', label: 'Hogar' },
                    { value: 'sports', label: 'Deportes' },
                  ]}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-1">
                  Descripción
                </label>
                <Textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Describe el producto..."
                  rows={4}
                />
              </div>
            </CardBody>
          </Card>

          {/* Pricing & Inventory */}
          <Card noPadding>
            <CardHeader>Precio e Inventario</CardHeader>
            <CardBody className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1">
                    Precio *
                  </label>
                  <Input
                    type="number"
                    value={formData.price}
                    onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                    placeholder="0.00"
                    leftIcon={<span className="text-neutral-400">$</span>}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1">
                    Stock Disponible *
                  </label>
                  <Input
                    type="number"
                    value={formData.stock}
                    onChange={(e) => setFormData({ ...formData, stock: e.target.value })}
                    placeholder="0"
                  />
                </div>
              </div>
            </CardBody>
          </Card>

          {/* Images */}
          <Card noPadding>
            <CardHeader>Imágenes</CardHeader>
            <CardBody>
              <div className="border-2 border-dashed border-neutral-300 rounded-lg p-8 text-center hover:border-primary transition-colors cursor-pointer">
                <div className="flex flex-col items-center">
                  <div className="p-3 rounded-full bg-primary/10 mb-4">
                    <Upload className="w-8 h-8 text-primary" />
                  </div>
                  <p className="text-neutral-700 font-medium mb-1">
                    Arrastra imágenes aquí o haz clic para subir
                  </p>
                  <p className="text-sm text-neutral-400">
                    PNG, JPG hasta 5MB
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-4 gap-4 mt-4">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="aspect-square rounded-lg bg-neutral-100 flex items-center justify-center"
                  >
                    <Image className="w-8 h-8 text-neutral-300" />
                  </div>
                ))}
              </div>
            </CardBody>
          </Card>

          {/* Status & Options */}
          <Card noPadding>
            <CardHeader>Estado y Opciones</CardHeader>
            <CardBody className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-3">
                  Estado del Producto
                </label>
                <div className="flex gap-6">
                  <Radio
                    name="status"
                    value="draft"
                    checked={formData.status === 'draft'}
                    onChange={() => setFormData({ ...formData, status: 'draft' })}
                    label="Borrador"
                  />
                  <Radio
                    name="status"
                    value="published"
                    checked={formData.status === 'published'}
                    onChange={() => setFormData({ ...formData, status: 'published' })}
                    label="Publicado"
                  />
                  <Radio
                    name="status"
                    value="archived"
                    checked={formData.status === 'archived'}
                    onChange={() => setFormData({ ...formData, status: 'archived' })}
                    label="Archivado"
                  />
                </div>
              </div>

              <div className="border-t border-neutral-200 pt-4 space-y-3">
                <Checkbox
                  checked={formData.active}
                  onChange={(e) => setFormData({ ...formData, active: e.target.checked })}
                  label="Producto activo"
                  description="El producto será visible en el catálogo"
                />
                <Checkbox
                  checked={formData.featured}
                  onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
                  label="Producto destacado"
                  description="Aparecerá en la sección de destacados"
                />
              </div>
            </CardBody>
            <CardFooter>
              <Button variant="ghost">Cancelar</Button>
              <Button variant="primary" leftIcon={<Save size={18} />}>
                Guardar Producto
              </Button>
            </CardFooter>
          </Card>
        </div>
      </Layout>
    );
  },
};

export const UserForm: Story = {
  render: () => {
    const [collapsed, setCollapsed] = useState(false);
    const [saved, setSaved] = useState(false);

    return (
      <Layout
        sidebarItems={sidebarItems}
        logo={LogoExpanded}
        logoCollapsed={LogoCollapsed}
        systemName="Admin"
        activeSidebarId="users"
        headerTitle="Editar Usuario"
        headerSubtitle="Modificar información del usuario"
        headerBreadcrumb={
          <Breadcrumb
            items={[
              { label: 'Inicio', href: '#' },
              { label: 'Usuarios', href: '#' },
              { label: 'Editar Usuario' },
            ]}
          />
        }
      >
        <div className="max-w-2xl space-y-6">
          {saved && (
            <Alert
              variant="success"
              title="Cambios guardados"
              onClose={() => setSaved(false)}
            >
              Los datos del usuario han sido actualizados correctamente.
            </Alert>
          )}

          <Card noPadding>
            <CardHeader>Información Personal</CardHeader>
            <CardBody className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1">
                    Nombre
                  </label>
                  <Input defaultValue="María" placeholder="Nombre" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1">
                    Apellido
                  </label>
                  <Input defaultValue="García" placeholder="Apellido" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-1">
                  Correo Electrónico
                </label>
                <Input type="email" defaultValue="maria@ejemplo.com" placeholder="correo@ejemplo.com" />
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-1">
                  Rol
                </label>
                <Select
                  defaultValue="editor"
                  options={[
                    { value: 'admin', label: 'Administrador' },
                    { value: 'editor', label: 'Editor' },
                    { value: 'viewer', label: 'Visualizador' },
                  ]}
                />
              </div>
            </CardBody>
            <CardFooter>
              <Button variant="ghost">Cancelar</Button>
              <Button variant="primary" onClick={() => setSaved(true)}>
                Guardar Cambios
              </Button>
            </CardFooter>
          </Card>
        </div>
      </Layout>
    );
  },
};
