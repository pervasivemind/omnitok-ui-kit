import type { Meta, StoryObj } from '@storybook/react-vite';
import React, { useState } from 'react';
import {
  Layout,
  Sidebar,
  Header,
  Card,
  CardHeader,
  CardBody,
  Button,
  Input,
  Select,
  Table,
  Badge,
  Avatar,
  Pagination,
  Modal,
  Breadcrumb,
} from '@omnitok/ui';
import {
  Home,
  Users,
  Package,
  ShoppingCart,
  Settings,
  Search,
  Plus,
  Filter,
  Download,
  Edit,
  Trash2,
  Eye,
  MoreHorizontal,
} from 'lucide-react';

const meta: Meta<typeof Layout> = {
  title: 'Examples/Tables',
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
    src="/omnitok-icon.svg"
    alt="Omnitok"
    className="h-8 w-8 object-contain"
  />
);

const sidebarItems = [
  { id: 'dashboard', label: 'Dashboard', icon: <Home size={20} /> },
  { id: 'users', label: 'Usuarios', icon: <Users size={20} />, active: true, badge: 42 },
  { id: 'products', label: 'Productos', icon: <Package size={20} />, badge: 156 },
  { id: 'orders', label: 'Pedidos', icon: <ShoppingCart size={20} />, badge: 8 },
  { id: 'settings', label: 'Configuración', icon: <Settings size={20} />, badge: 1 },
];

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  status: 'active' | 'inactive' | 'pending';
  lastLogin: string;
  avatar: string;
}

const users: User[] = [
  { id: 1, name: 'María García', email: 'maria@ejemplo.com', role: 'Admin', status: 'active', lastLogin: 'Hace 5 min', avatar: 'MG' },
  { id: 2, name: 'Carlos López', email: 'carlos@ejemplo.com', role: 'Editor', status: 'active', lastLogin: 'Hace 1 hora', avatar: 'CL' },
  { id: 3, name: 'Ana Martínez', email: 'ana@ejemplo.com', role: 'Viewer', status: 'inactive', lastLogin: 'Hace 3 días', avatar: 'AM' },
  { id: 4, name: 'Pedro Sánchez', email: 'pedro@ejemplo.com', role: 'Editor', status: 'pending', lastLogin: 'Nunca', avatar: 'PS' },
  { id: 5, name: 'Laura Torres', email: 'laura@ejemplo.com', role: 'Admin', status: 'active', lastLogin: 'Hace 30 min', avatar: 'LT' },
  { id: 6, name: 'Diego Ruiz', email: 'diego@ejemplo.com', role: 'Viewer', status: 'active', lastLogin: 'Hace 2 horas', avatar: 'DR' },
  { id: 7, name: 'Sofia Morales', email: 'sofia@ejemplo.com', role: 'Editor', status: 'inactive', lastLogin: 'Hace 1 semana', avatar: 'SM' },
  { id: 8, name: 'Andrés Vargas', email: 'andres@ejemplo.com', role: 'Viewer', status: 'active', lastLogin: 'Hace 15 min', avatar: 'AV' },
];

const statusVariants = {
  active: 'success',
  inactive: 'neutral',
  pending: 'warning',
} as const;

const statusLabels = {
  active: 'Activo',
  inactive: 'Inactivo',
  pending: 'Pendiente',
};

export const UsersList: Story = {
  render: () => {
    const [collapsed, setCollapsed] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [search, setSearch] = useState('');
    const [deleteModal, setDeleteModal] = useState<User | null>(null);

    const columns = [
      {
        key: 'user',
        header: 'Usuario',
        render: (row: User) => (
          <div className="flex items-center gap-3">
            <Avatar initials={row.avatar} size="sm" />
            <div>
              <div className="font-medium text-neutral-900">{row.name}</div>
              <div className="text-sm text-neutral-500">{row.email}</div>
            </div>
          </div>
        ),
      },
      {
        key: 'role',
        header: 'Rol',
        accessor: 'role' as keyof User,
      },
      {
        key: 'status',
        header: 'Estado',
        render: (row: User) => (
          <Badge variant={statusVariants[row.status]}>
            {statusLabels[row.status]}
          </Badge>
        ),
      },
      {
        key: 'lastLogin',
        header: 'Último Acceso',
        accessor: 'lastLogin' as keyof User,
      },
      {
        key: 'actions',
        header: 'Acciones',
        align: 'right' as const,
        render: (row: User) => (
          <div className="flex items-center justify-end gap-1">
            <Button variant="ghost" size="sm" className="p-2">
              <Eye size={16} />
            </Button>
            <Button variant="ghost" size="sm" className="p-2">
              <Edit size={16} />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="p-2 text-error hover:bg-error/10"
              onClick={() => setDeleteModal(row)}
            >
              <Trash2 size={16} />
            </Button>
          </div>
        ),
      },
    ];

    return (
      <Layout
        sidebarItems={sidebarItems}
        logo={LogoExpanded}
        logoCollapsed={LogoCollapsed}
        systemName="Admin Panel"
        activeSidebarId="users"
        headerTitle="Usuarios"
        headerSubtitle="Gestiona los usuarios del sistema"
        headerBreadcrumb={
          <Breadcrumb
            items={[
              { label: 'Inicio', href: '#' },
              { label: 'Usuarios' },
            ]}
          />
        }
        headerActions={
          <Button variant="primary" leftIcon={<Plus size={18} />}>
            Nuevo Usuario
          </Button>
        }
      >
        <Card noPadding>
          <CardHeader
            action={
              <div className="flex items-center gap-2">
                <Input
                  placeholder="Buscar usuarios..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  leftIcon={<Search size={16} />}
                  size="sm"
                  className="w-56"
                />
                <Select
                  options={[
                    { value: '', label: 'Todos los roles' },
                    { value: 'admin', label: 'Admin' },
                    { value: 'editor', label: 'Editor' },
                    { value: 'viewer', label: 'Viewer' },
                  ]}
                  size="sm"
                  className="w-36"
                />
                <Button
                  variant="outline"
                  size="sm"
                  leftIcon={<Filter size={16} />}
                  className="border-white/30 text-white hover:bg-white/10 hover:text-white"
                >
                  Filtros
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  leftIcon={<Download size={16} />}
                  className="text-white/90 hover:bg-white/10 hover:text-white"
                >
                  Exportar
                </Button>
              </div>
            }
          >
            Lista de Usuarios
          </CardHeader>
          <Table
            columns={columns}
            data={users}
            rowKey="id"
            striped
            hoverable
          />
          <div className="p-4 border-t border-neutral-200">
            <Pagination
              currentPage={currentPage}
              totalPages={5}
              onPageChange={setCurrentPage}
              showInfo
              totalItems={42}
              itemsPerPage={8}
            />
          </div>
        </Card>

        {/* Delete Confirmation Modal */}
        <Modal
          open={!!deleteModal}
          onClose={() => setDeleteModal(null)}
          title="Eliminar Usuario"
          size="sm"
          footer={
            <>
              <Button variant="ghost" onClick={() => setDeleteModal(null)}>
                Cancelar
              </Button>
              <Button variant="danger" onClick={() => setDeleteModal(null)}>
                Eliminar
              </Button>
            </>
          }
        >
          <p className="text-neutral-600">
            ¿Estás seguro de que deseas eliminar a <strong>{deleteModal?.name}</strong>?
            Esta acción no se puede deshacer.
          </p>
        </Modal>
      </Layout>
    );
  },
};

interface Product {
  id: number;
  name: string;
  sku: string;
  category: string;
  price: number;
  stock: number;
  status: 'active' | 'draft' | 'archived';
}

const products: Product[] = [
  { id: 1, name: 'Camiseta Premium', sku: 'CAM-001', category: 'Ropa', price: 29.99, stock: 150, status: 'active' },
  { id: 2, name: 'Pantalón Casual', sku: 'PAN-002', category: 'Ropa', price: 49.99, stock: 75, status: 'active' },
  { id: 3, name: 'Zapatillas Sport', sku: 'ZAP-003', category: 'Calzado', price: 89.99, stock: 30, status: 'active' },
  { id: 4, name: 'Gorra Vintage', sku: 'GOR-004', category: 'Accesorios', price: 19.99, stock: 0, status: 'draft' },
  { id: 5, name: 'Chaqueta Invierno', sku: 'CHA-005', category: 'Ropa', price: 129.99, stock: 45, status: 'active' },
  { id: 6, name: 'Bufanda Lana', sku: 'BUF-006', category: 'Accesorios', price: 24.99, stock: 100, status: 'archived' },
];

export const ProductsList: Story = {
  render: () => {
    const [collapsed, setCollapsed] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);

    const productColumns = [
      {
        key: 'product',
        header: 'Producto',
        render: (row: Product) => (
          <div>
            <div className="font-medium text-neutral-900">{row.name}</div>
            <div className="text-sm text-neutral-500">{row.sku}</div>
          </div>
        ),
      },
      {
        key: 'category',
        header: 'Categoría',
        accessor: 'category' as keyof Product,
      },
      {
        key: 'price',
        header: 'Precio',
        align: 'right' as const,
        render: (row: Product) => (
          <span className="font-medium">${row.price.toFixed(2)}</span>
        ),
      },
      {
        key: 'stock',
        header: 'Stock',
        align: 'center' as const,
        render: (row: Product) => (
          <span className={row.stock === 0 ? 'text-error font-medium' : ''}>
            {row.stock === 0 ? 'Sin stock' : row.stock}
          </span>
        ),
      },
      {
        key: 'status',
        header: 'Estado',
        render: (row: Product) => {
          const variants = { active: 'success', draft: 'warning', archived: 'neutral' } as const;
          const labels = { active: 'Activo', draft: 'Borrador', archived: 'Archivado' };
          return <Badge variant={variants[row.status]}>{labels[row.status]}</Badge>;
        },
      },
      {
        key: 'actions',
        header: '',
        align: 'right' as const,
        render: () => (
          <Button variant="ghost" size="sm" className="p-2">
            <MoreHorizontal size={16} />
          </Button>
        ),
      },
    ];

    return (
      <Layout
        sidebarItems={sidebarItems}
        logo={LogoExpanded}
        logoCollapsed={LogoCollapsed}
        systemName="Inventario"
        activeSidebarId="products"
        headerTitle="Productos"
        headerSubtitle="Catálogo de productos"
        headerActions={
          <Button variant="primary" leftIcon={<Plus size={18} />}>
            Nuevo Producto
          </Button>
        }
      >
        <Card noPadding>
          <CardHeader
            action={
              <div className="flex items-center gap-2">
                <Input
                  placeholder="Buscar productos..."
                  leftIcon={<Search size={16} />}
                  size="sm"
                  className="w-56"
                />
                <Button
                  variant="outline"
                  size="sm"
                  leftIcon={<Filter size={16} />}
                  className="border-white/30 text-white hover:bg-white/10 hover:text-white"
                >
                  Filtros
                </Button>
              </div>
            }
          >
            Catálogo
          </CardHeader>
          <Table
            columns={productColumns}
            data={products}
            rowKey="id"
            striped
            hoverable
          />
          <div className="p-4 border-t border-neutral-200">
            <Pagination
              currentPage={currentPage}
              totalPages={3}
              onPageChange={setCurrentPage}
              showInfo
              totalItems={18}
              itemsPerPage={6}
            />
          </div>
        </Card>
      </Layout>
    );
  },
};
