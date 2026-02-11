import type { Meta, StoryObj } from '@storybook/react-vite';
import React, { useState } from 'react';
import {
  Layout,
  Sidebar,
  Header,
  Card,
  CardHeader,
  CardBody,
  Badge,
  Avatar,
  Button,
  Tabs,
  TabPanel,
} from '@omnitok/ui';
import {
  Home,
  Users,
  Package,
  ShoppingCart,
  BarChart3,
  Settings,
  TrendingUp,
  TrendingDown,
  DollarSign,
  Activity,
  ArrowUpRight,
} from 'lucide-react';

const meta: Meta<typeof Layout> = {
  title: 'Examples/Dashboard',
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
    src="/logos/logo_largo_blanco.png"
    alt="Omnitok"
    className="h-6 w-auto max-w-[140px] object-contain"
  />
);
const LogoCollapsed = (
  <img
    src="/logos/logo_cuadrado_color.png"
    alt="Omnitok"
    className="h-8 w-8 object-contain"
  />
);

const sidebarItems = [
  { id: 'dashboard', label: 'Dashboard', icon: <Home size={20} />, active: true },
  { id: 'users', label: 'Usuarios', icon: <Users size={20} />, badge: 42 },
  { id: 'products', label: 'Productos', icon: <Package size={20} />, badge: 156 },
  { id: 'orders', label: 'Pedidos', icon: <ShoppingCart size={20} />, badge: 8 },
  { id: 'analytics', label: 'Analítica', icon: <BarChart3 size={20} />, badge: 3 },
  { id: 'settings', label: 'Configuración', icon: <Settings size={20} />, badge: 1 },
];

const KPICard = ({
  title,
  value,
  change,
  changeType,
  icon: Icon,
}: {
  title: string;
  value: string;
  change: string;
  changeType: 'up' | 'down';
  icon: typeof DollarSign;
}) => (
  <Card variant="bordered" className="relative overflow-hidden min-w-0">
    <div className="flex items-start justify-between gap-3">
      <div className="min-w-0">
        <p className="text-sm text-neutral-500 mb-1">{title}</p>
        <p className="text-2xl sm:text-3xl font-bold text-neutral-900 leading-tight">
          {value}
        </p>
        <div className={`flex flex-wrap items-center gap-1 mt-2 text-sm ${changeType === 'up' ? 'text-success' : 'text-error'}`}>
          {changeType === 'up' ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
          <span>{change}</span>
          <span className="text-neutral-400">vs mes anterior</span>
        </div>
      </div>
      <div className="p-3 rounded-xl bg-primary/10 border border-primary/20 flex-shrink-0">
        <Icon className="w-6 h-6 text-primary" />
      </div>
    </div>
  </Card>
);

const ChartPlaceholder = ({ title, height = 'h-64' }: { title: string; height?: string }) => (
  <Card noPadding>
    <CardHeader>{title}</CardHeader>
    <CardBody>
      <div className={`${height} bg-gradient-to-br from-primary/5 to-accent/5 rounded-lg flex items-center justify-center`}>
        <div className="text-center">
          <BarChart3 className="w-12 h-12 text-primary/30 mx-auto mb-2" />
          <p className="text-neutral-400 text-sm">Gráfico de {title}</p>
        </div>
      </div>
    </CardBody>
  </Card>
);

const RecentActivity = () => (
  <Card noPadding>
    <CardHeader action={<Button variant="ghost" size="sm">Ver todo</Button>}>
      Actividad Reciente
    </CardHeader>
    <CardBody className="space-y-4">
      {[
        { user: 'María García', action: 'creó un nuevo producto', time: 'Hace 5 min', avatar: 'MG' },
        { user: 'Carlos López', action: 'completó un pedido', time: 'Hace 15 min', avatar: 'CL' },
        { user: 'Ana Martínez', action: 'actualizó inventario', time: 'Hace 1 hora', avatar: 'AM' },
        { user: 'Pedro Sánchez', action: 'agregó un usuario', time: 'Hace 2 horas', avatar: 'PS' },
      ].map((item, i) => (
        <div key={i} className="flex items-center gap-3">
          <Avatar initials={item.avatar} size="sm" />
          <div className="flex-1 min-w-0">
            <p className="text-sm text-neutral-900 truncate">
              <span className="font-medium">{item.user}</span> {item.action}
            </p>
            <p className="text-xs text-neutral-400">{item.time}</p>
          </div>
          <ArrowUpRight className="w-4 h-4 text-neutral-400" />
        </div>
      ))}
    </CardBody>
  </Card>
);

export const AnalyticsDashboard: Story = {
  render: () => {
    const [collapsed, setCollapsed] = useState(false);

    return (
      <Layout
        sidebarItems={sidebarItems}
        logo={LogoExpanded}
        logoCollapsed={LogoCollapsed}
        systemName="Analytics Dashboard"
        activeSidebarId="dashboard"
        headerTitle="Dashboard"
        headerSubtitle="Resumen general del sistema"
        headerActions={
          <div className="flex items-center gap-3">
            <Badge variant="success">En línea</Badge>
            <Button variant="primary" size="sm">
              Exportar Reporte
            </Button>
          </div>
        }
        sidebarFooter={
          <div className="flex items-center gap-3">
            <Avatar initials="PJ" size="sm" />
            <div>
              <div className="text-sm font-medium text-white">Pablo J.</div>
              <div className="text-xs text-white/50">Admin</div>
            </div>
          </div>
        }
      >
        <div className="space-y-6">
          {/* KPIs */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
            <KPICard
              title="Ingresos Totales"
              value="$124,500"
              change="+12.5%"
              changeType="up"
              icon={DollarSign}
            />
            <KPICard
              title="Usuarios Activos"
              value="2,847"
              change="+8.2%"
              changeType="up"
              icon={Users}
            />
            <KPICard
              title="Pedidos"
              value="1,234"
              change="-3.1%"
              changeType="down"
              icon={ShoppingCart}
            />
            <KPICard
              title="Tasa de Conversión"
              value="3.24%"
              change="+0.8%"
              changeType="up"
              icon={Activity}
            />
          </div>

          {/* Charts Row */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <ChartPlaceholder title="Ventas por Mes" height="h-80" />
            </div>
            <RecentActivity />
          </div>

          {/* Bottom Row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <ChartPlaceholder title="Productos más Vendidos" />
            <ChartPlaceholder title="Distribución por Región" />
          </div>
        </div>
      </Layout>
    );
  },
};

export const WithTabs: Story = {
  render: () => {
    const [collapsed, setCollapsed] = useState(false);
    const [activeTab, setActiveTab] = useState('overview');

    return (
      <Layout
        sidebarItems={sidebarItems}
        logo={LogoExpanded}
        logoCollapsed={LogoCollapsed}
        systemName="Analytics"
        activeSidebarId="analytics"
        headerTitle="Analítica"
        headerSubtitle="Métricas y estadísticas del sistema"
      >
        <Tabs
          items={[
            { id: 'overview', label: 'General' },
            { id: 'sales', label: 'Ventas' },
            { id: 'users', label: 'Usuarios' },
            { id: 'products', label: 'Productos' },
          ]}
          activeId={activeTab}
          onChange={setActiveTab}
          variant="pills"
        >
          <TabPanel id="overview">
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mt-6">
              <KPICard title="Ingresos" value="$124,500" change="+12.5%" changeType="up" icon={DollarSign} />
              <KPICard title="Usuarios" value="2,847" change="+8.2%" changeType="up" icon={Users} />
              <KPICard title="Pedidos" value="1,234" change="-3.1%" changeType="down" icon={ShoppingCart} />
              <KPICard title="Conversión" value="3.24%" change="+0.8%" changeType="up" icon={Activity} />
            </div>
          </TabPanel>
          <TabPanel id="sales">
            <div className="mt-6">
              <ChartPlaceholder title="Ventas por Período" height="h-96" />
            </div>
          </TabPanel>
          <TabPanel id="users">
            <div className="mt-6">
              <ChartPlaceholder title="Crecimiento de Usuarios" height="h-96" />
            </div>
          </TabPanel>
          <TabPanel id="products">
            <div className="mt-6">
              <ChartPlaceholder title="Rendimiento de Productos" height="h-96" />
            </div>
          </TabPanel>
        </Tabs>
      </Layout>
    );
  },
};
