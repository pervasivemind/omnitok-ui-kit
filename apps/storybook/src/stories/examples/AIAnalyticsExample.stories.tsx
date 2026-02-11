import type { Meta, StoryObj } from '@storybook/react-vite';
import React, { useState } from 'react';
import {
  Layout,
  Card,
  CardHeader,
  CardBody,
  Badge,
  Button,
  Select,
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
  AlertCircle,
  Lightbulb,
  Sparkles,
  Calendar,
  MapPin,
  Tag,
  Filter,
} from 'lucide-react';

const meta: Meta<typeof Layout> = {
  title: 'Examples/AI Analytics',
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
  { id: 'dashboard', label: 'Dashboard', icon: <Home size={20} /> },
  { id: 'analytics', label: 'AI Analytics', icon: <BarChart3 size={20} />, active: true, badge: 3 },
  { id: 'users', label: 'Usuarios', icon: <Users size={20} />, badge: 42 },
  { id: 'products', label: 'Productos', icon: <Package size={20} />, badge: 156 },
  { id: 'orders', label: 'Pedidos', icon: <ShoppingCart size={20} />, badge: 8 },
  { id: 'settings', label: 'Configuración', icon: <Settings size={20} /> },
];

const KPICard = ({
  title,
  value,
  change,
  changeType,
}: {
  title: string;
  value: string;
  change: string;
  changeType: 'up' | 'down';
}) => (
  <Card variant="bordered" className="min-w-0">
    <div className="p-2">
      <p className="text-xs text-neutral-500 mb-0.5">{title}</p>
      <p className="text-lg font-bold text-neutral-900 leading-tight">
        {value}
      </p>
      <div className={`flex items-center gap-1 mt-0.5 text-xs ${changeType === 'up' ? 'text-success' : 'text-error'}`}>
        {changeType === 'up' ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
        <span className="text-xs">{change}</span>
        <span className="text-neutral-400 text-xs">vs Q3</span>
      </div>
    </div>
  </Card>
);

const BarChart = () => {
  const data = [
    { month: 'Jun', value: 68, color: '#4D4A9D', label: 'Primary' },
    { month: 'Jul', value: 75, color: '#FF177B', label: 'Accent' },
    { month: 'Ago', value: 82, color: '#10B981', label: 'Success' },
    { month: 'Sep', value: 78, color: '#F59E0B', label: 'Warning' },
    { month: 'Oct', value: 85, color: '#3B82F6', label: 'Info' },
    { month: 'Nov', value: 92, color: '#8B5CF6', label: 'Purple' },
    { month: 'Dic', value: 112, color: '#EC4899', label: 'Pink' },
  ];
  const maxValue = 120; // Valor fijo para que las barras sean proporcionales

  return (
    <Card noPadding>
      <CardHeader>Ventas por Mes - Paleta de Colores (Miles USD)</CardHeader>
      <CardBody>
        <div className="h-96 flex items-end justify-around gap-4 px-6 pb-8">
          {data.map((item, i) => (
            <div key={i} className="flex-1 flex flex-col items-center gap-3">
              <div className="text-base font-bold text-neutral-900">${item.value}K</div>
              <div
                className="w-full rounded-t-lg transition-all hover:opacity-80 cursor-pointer relative group"
                style={{
                  height: `${(item.value / maxValue) * 280}px`,
                  backgroundColor: item.color,
                }}
                title={item.label}
              >
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-neutral-900 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                  {item.label}
                </div>
              </div>
              <div className="text-sm font-medium text-neutral-600">{item.month}</div>
            </div>
          ))}
        </div>
        <div className="px-6 pb-4">
          <p className="text-xs text-neutral-500 text-center">
            Paleta de colores: Primary • Accent • Success • Warning • Info • Purple • Pink
          </p>
        </div>
      </CardBody>
    </Card>
  );
};

const LineChart = () => {
  const data = [
    { label: 'Ene', value: 68 },
    { label: 'Feb', value: 72 },
    { label: 'Mar', value: 78 },
    { label: 'Abr', value: 75 },
    { label: 'May', value: 82 },
    { label: 'Jun', value: 88 },
    { label: 'Jul', value: 85 },
    { label: 'Ago', value: 90 },
    { label: 'Sep', value: 95 },
    { label: 'Oct', value: 85 },
    { label: 'Nov', value: 92 },
    { label: 'Dic', value: 112 },
  ];

  return (
    <Card noPadding>
      <CardHeader>Ventas por Categoría (Tendencia)</CardHeader>
      <CardBody>
        <div className="h-64 relative px-4 pb-8">
          <svg width="100%" height="100%" viewBox="0 0 600 200" preserveAspectRatio="none">
            {/* Grid lines */}
            {[0, 25, 50, 75, 100].map((y) => (
              <line
                key={y}
                x1="0"
                y1={200 - y * 2}
                x2="600"
                y2={200 - y * 2}
                stroke="#E5E7EB"
                strokeWidth="1"
              />
            ))}
            
            {/* Línea Electrónica (Primary) */}
            <polyline
              points={data.map((d, i) => `${(i / (data.length - 1)) * 600},${200 - (d.value / 112) * 180}`).join(' ')}
              fill="none"
              stroke="#4D4A9D"
              strokeWidth="3"
            />
            
            {/* Área bajo la línea */}
            <polygon
              points={`0,200 ${data.map((d, i) => `${(i / (data.length - 1)) * 600},${200 - (d.value / 112) * 180}`).join(' ')} 600,200`}
              fill="url(#gradient-primary)"
              opacity="0.2"
            />
            
            <defs>
              <linearGradient id="gradient-primary" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#4D4A9D" />
                <stop offset="100%" stopColor="#4D4A9D" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
          
          {/* Labels */}
          <div className="flex justify-between text-xs text-neutral-500 mt-2">
            <span>Ene</span>
            <span>Jun</span>
            <span>Dic</span>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

const DonutChart = () => {
  const data = [
    { label: 'Electrónica', value: 40, color: '#4D4A9D' },
    { label: 'Ropa', value: 25, color: '#FF177B' },
    { label: 'Hogar', value: 15, color: '#10B981' },
    { label: 'Otros', value: 20, color: '#F59E0B' },
  ];

  let currentAngle = -90;
  const segments = data.map(item => {
    const percentage = item.value;
    const angle = (percentage / 100) * 360;
    const startAngle = currentAngle;
    const endAngle = currentAngle + angle;
    currentAngle = endAngle;

    const startRad = (startAngle * Math.PI) / 180;
    const endRad = (endAngle * Math.PI) / 180;

    const x1 = 100 + 80 * Math.cos(startRad);
    const y1 = 100 + 80 * Math.sin(startRad);
    const x2 = 100 + 80 * Math.cos(endRad);
    const y2 = 100 + 80 * Math.sin(endRad);

    const largeArc = angle > 180 ? 1 : 0;

    return {
      path: `M 100 100 L ${x1} ${y1} A 80 80 0 ${largeArc} 1 ${x2} ${y2} Z`,
      color: item.color,
      label: item.label,
      value: item.value,
    };
  });

  return (
    <Card noPadding>
      <CardHeader>Distribución por Región</CardHeader>
      <CardBody>
        <div className="h-64 flex items-center justify-center gap-8">
          <svg width="200" height="200" viewBox="0 0 200 200">
            {/* Outer segments */}
            {segments.map((segment, i) => (
              <path
                key={i}
                d={segment.path}
                fill={segment.color}
                className="transition-opacity hover:opacity-80 cursor-pointer"
              />
            ))}
            {/* Inner circle (donut hole) */}
            <circle cx="100" cy="100" r="50" fill="white" />
          </svg>
          
          {/* Legend */}
          <div className="space-y-2">
            {data.map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <div
                  className="w-3 h-3 rounded-sm"
                  style={{ backgroundColor: item.color }}
                />
                <span className="text-sm text-neutral-700">{item.label}</span>
                <span className="text-sm font-semibold text-neutral-900">{item.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

const AIInsightsPanel = () => {
  const insights = [
    {
      type: 'positive',
      icon: <TrendingUp className="text-success" />,
      title: 'Tendencia positiva',
      description: 'Las ventas de Q4 superan en 12.5% al trimestre anterior',
      time: '14:23',
    },
    {
      type: 'warning',
      icon: <AlertCircle className="text-warning" />,
      title: 'Atención',
      description: 'La categoría Ropa muestra una caída del 3%',
      time: '14:18',
    },
    {
      type: 'insight',
      icon: <Lightbulb className="text-accent" />,
      title: 'Oportunidad',
      description: 'Estacionalidad: Q4 típicamente tiene mejor demanda de ropa casual',
      time: '14:12',
    },
    {
      type: 'positive',
      icon: <TrendingUp className="text-success" />,
      title: 'Desempeño destacado',
      description: 'Electrónica lideró con 40% de participación total',
      time: '14:05',
    },
    {
      type: 'insight',
      icon: <Lightbulb className="text-info" />,
      title: 'Patrón detectado',
      description: 'Los laptops HP tienen 8% más conversión que competidores',
      time: '13:58',
    },
  ];

  return (
    <div className="flex flex-col h-full bg-white">
      {/* Header */}
      <div className="p-4 border-b border-neutral-200 bg-gradient-to-r from-primary to-primary-dark">
        <h3 className="font-semibold text-white flex items-center gap-2">
          <Sparkles size={18} />
          AI Insights
        </h3>
        <p className="text-xs text-white/70 mt-1">Detectados automáticamente</p>
      </div>

      {/* Insights Section - Solo insights, sin chat */}
      <div className="flex-1 p-4 overflow-y-auto bg-neutral-50">
        <div className="flex items-center justify-between mb-4">
          <h4 className="text-sm font-semibold text-neutral-700 uppercase tracking-wide">
            Insights Detectados
          </h4>
          <Badge variant="primary">{insights.length}</Badge>
        </div>
        <div className="space-y-3">
          {insights.map((insight, i) => (
            <div
              key={i}
              className="bg-white rounded-lg p-3 border border-neutral-200 hover:border-primary/30 transition-colors cursor-pointer"
            >
              <div className="flex items-start gap-2 mb-2">
                <div className="flex-shrink-0 mt-0.5">{insight.icon}</div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-neutral-900">{insight.title}</p>
                  <p className="text-xs text-neutral-500 mt-1 leading-relaxed">{insight.description}</p>
                </div>
              </div>
              <p className="text-xs text-neutral-400">{insight.time}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const AIAnalyticsDashboard: Story = {
  render: () => {
    return (
      <Layout
        sidebarItems={sidebarItems}
        logo={LogoExpanded}
        logoCollapsed={LogoCollapsed}
        systemName="AI Analytics"
        activeSidebarId="analytics"
        headerTitle="Análisis de Ventas - Q4 2024"
        headerSubtitle="Dashboard con insights automáticos"
        headerActions={
          <div className="flex items-center gap-3">
            <Badge variant="success">
              <Sparkles size={12} className="mr-1" />
              3 Insights
            </Badge>
            <Button variant="secondary" size="sm">
              Exportar Reporte
            </Button>
          </div>
        }
        rightPanel={<AIInsightsPanel />}
        rightPanelWidth="360px"
      >
        <div className="space-y-4">
          {/* Filtros */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            <Select
              options={[
                { value: 'q4-2024', label: 'Q4 2024' },
                { value: 'q3-2024', label: 'Q3 2024' },
                { value: 'q2-2024', label: 'Q2 2024' },
              ]}
              placeholder="Período"
              size="sm"
            />
            <Select
              options={[
                { value: 'todas', label: 'Todas las categorías' },
                { value: 'electronica', label: 'Electrónica' },
                { value: 'ropa', label: 'Ropa' },
                { value: 'hogar', label: 'Hogar' },
              ]}
              placeholder="Categoría"
              size="sm"
            />
            <Select
              options={[
                { value: 'todas', label: 'Todas las regiones' },
                { value: 'norte', label: 'Norte' },
                { value: 'sur', label: 'Sur' },
                { value: 'centro', label: 'Centro' },
              ]}
              placeholder="Región"
              size="sm"
            />
            <Select
              options={[
                { value: 'todos', label: 'Todos los canales' },
                { value: 'online', label: 'Online' },
                { value: 'tienda', label: 'Tienda' },
              ]}
              placeholder="Canal"
              size="sm"
            />
            <Select
              options={[
                { value: 'todos', label: 'Todos los vendedores' },
                { value: 'maria', label: 'María García' },
                { value: 'carlos', label: 'Carlos López' },
              ]}
              placeholder="Vendedor"
              size="sm"
            />
            <Button variant="secondary" size="sm" leftIcon={<Filter size={14} />}>
              Más filtros
            </Button>
          </div>

          {/* KPIs - 3 KPIs compactos */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <KPICard
              title="Ventas Totales"
              value="$1.24M"
              change="+12.5%"
              changeType="up"
            />
            <KPICard
              title="Pedidos"
              value="8,472"
              change="+8.2%"
              changeType="up"
            />
            <KPICard
              title="Conversión"
              value="3.24%"
              change="+0.5%"
              changeType="up"
            />
          </div>

          {/* Gráfico grande inicial - Barras */}
          <BarChart />

          {/* Dos gráficos pequeños */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <LineChart />
            <DonutChart />
          </div>

          {/* Table */}
          <Card noPadding>
            <CardHeader>Productos más Vendidos</CardHeader>
            <CardBody className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-primary text-white">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-semibold">Producto</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold">Categoría</th>
                      <th className="px-4 py-3 text-right text-sm font-semibold">Unidades</th>
                      <th className="px-4 py-3 text-right text-sm font-semibold">Ingresos</th>
                      <th className="px-4 py-3 text-right text-sm font-semibold">Tendencia</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-neutral-200">
                    <tr className="hover:bg-neutral-50">
                      <td className="px-4 py-3 text-sm text-neutral-900">Laptop HP Pavilion</td>
                      <td className="px-4 py-3 text-sm text-neutral-600">Electrónica</td>
                      <td className="px-4 py-3 text-sm text-neutral-900 text-right font-medium">234</td>
                      <td className="px-4 py-3 text-sm text-neutral-900 text-right font-medium">$210,600</td>
                      <td className="px-4 py-3 text-right">
                        <Badge variant="success">+15%</Badge>
                      </td>
                    </tr>
                    <tr className="hover:bg-neutral-50">
                      <td className="px-4 py-3 text-sm text-neutral-900">Monitor Samsung 27"</td>
                      <td className="px-4 py-3 text-sm text-neutral-600">Electrónica</td>
                      <td className="px-4 py-3 text-sm text-neutral-900 text-right font-medium">189</td>
                      <td className="px-4 py-3 text-sm text-neutral-900 text-right font-medium">$65,961</td>
                      <td className="px-4 py-3 text-right">
                        <Badge variant="success">+8%</Badge>
                      </td>
                    </tr>
                    <tr className="hover:bg-neutral-50">
                      <td className="px-4 py-3 text-sm text-neutral-900">Camiseta Básica</td>
                      <td className="px-4 py-3 text-sm text-neutral-600">Ropa</td>
                      <td className="px-4 py-3 text-sm text-neutral-900 text-right font-medium">1,245</td>
                      <td className="px-4 py-3 text-sm text-neutral-900 text-right font-medium">$36,105</td>
                      <td className="px-4 py-3 text-right">
                        <Badge variant="error">-3%</Badge>
                      </td>
                    </tr>
                    <tr className="hover:bg-neutral-50">
                      <td className="px-4 py-3 text-sm text-neutral-900">Lámpara LED</td>
                      <td className="px-4 py-3 text-sm text-neutral-600">Hogar</td>
                      <td className="px-4 py-3 text-sm text-neutral-900 text-right font-medium">456</td>
                      <td className="px-4 py-3 text-sm text-neutral-900 text-right font-medium">$26,904</td>
                      <td className="px-4 py-3 text-right">
                        <Badge variant="success">+2%</Badge>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardBody>
          </Card>
        </div>
      </Layout>
    );
  },
};
