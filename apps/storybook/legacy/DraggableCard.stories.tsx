import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { DraggableCard, DraggableCardItem } from '@omnitok/ui';
import { Package, TrendingUp, Users, ShoppingCart, DollarSign } from 'lucide-react';

const meta: Meta<typeof DraggableCard> = {
  title: 'Drag and Drop/DraggableCard',
  component: DraggableCard,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof DraggableCard>;

// Story básico
function DraggableCardDemo() {
  const [items, setItems] = useState<DraggableCardItem[]>([
    {
      id: '1',
      children: (
        <div className="space-y-2">
          <p className="text-neutral-600">Contenido de la primera tarjeta arrastrable.</p>
          <p className="text-sm text-neutral-400">Arrastra desde el handle superior.</p>
        </div>
      ),
    },
    {
      id: '2',
      children: (
        <div className="space-y-2">
          <p className="text-neutral-600">Contenido de la segunda tarjeta arrastrable.</p>
          <p className="text-sm text-neutral-400">Arrastra desde el handle superior.</p>
        </div>
      ),
    },
    {
      id: '3',
      children: (
        <div className="space-y-2">
          <p className="text-neutral-600">Contenido de la tercera tarjeta arrastrable.</p>
          <p className="text-sm text-neutral-400">Arrastra desde el handle superior.</p>
        </div>
      ),
    },
  ]);

  return (
    <div className="max-w-md">
      <DraggableCard items={items} onReorder={setItems} />
    </div>
  );
}

export const Default: Story = {
  render: () => <DraggableCardDemo />,
};

// Con títulos (header con gradiente)
function DraggableCardWithTitles() {
  const [items, setItems] = useState<DraggableCardItem[]>([
    {
      id: '1',
      title: 'Ventas Q1',
      children: (
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-green-500" />
            <span className="text-2xl font-bold">$125,430</span>
          </div>
          <p className="text-sm text-neutral-500">+15% vs trimestre anterior</p>
        </div>
      ),
    },
    {
      id: '2',
      title: 'Clientes Activos',
      children: (
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5 text-blue-500" />
            <span className="text-2xl font-bold">2,847</span>
          </div>
          <p className="text-sm text-neutral-500">+8% vs mes anterior</p>
        </div>
      ),
    },
    {
      id: '3',
      title: 'Pedidos',
      children: (
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <ShoppingCart className="w-5 h-5 text-purple-500" />
            <span className="text-2xl font-bold">1,234</span>
          </div>
          <p className="text-sm text-neutral-500">+12% vs semana anterior</p>
        </div>
      ),
    },
    {
      id: '4',
      title: 'Productos',
      children: (
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <Package className="w-5 h-5 text-amber-500" />
            <span className="text-2xl font-bold">456</span>
          </div>
          <p className="text-sm text-neutral-500">+3% nuevos este mes</p>
        </div>
      ),
    },
    {
      id: '5',
      title: 'Ingresos',
      children: (
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <DollarSign className="w-5 h-5 text-green-500" />
            <span className="text-2xl font-bold">$89,200</span>
          </div>
          <p className="text-sm text-neutral-500">+23% vs mes anterior</p>
        </div>
      ),
    },
  ]);

  return (
    <div className="max-w-md">
      <DraggableCard items={items} onReorder={setItems} />
    </div>
  );
}

export const WithTitles: Story = {
  render: () => <DraggableCardWithTitles />,
};

// Horizontal
function DraggableCardHorizontal() {
  const [items, setItems] = useState<DraggableCardItem[]>([
    {
      id: '1',
      title: 'Card 1',
      children: <p className="text-neutral-600">Contenido horizontal</p>,
    },
    {
      id: '2',
      title: 'Card 2',
      children: <p className="text-neutral-600">Contenido horizontal</p>,
    },
    {
      id: '3',
      title: 'Card 3',
      children: <p className="text-neutral-600">Contenido horizontal</p>,
    },
  ]);

  return (
    <div className="w-full overflow-x-auto">
      <DraggableCard
        items={items}
        onReorder={setItems}
        direction="horizontal"
        cardClassName="w-64"
      />
    </div>
  );
}

export const Horizontal: Story = {
  render: () => <DraggableCardHorizontal />,
};

// Contenido complejo
function DraggableCardComplex() {
  const [items, setItems] = useState<DraggableCardItem[]>([
    {
      id: '1',
      title: 'Proyecto Alpha',
      children: (
        <div className="space-y-3">
          <p className="text-sm text-neutral-600">
            Desarrollo de nueva funcionalidad para el módulo de reportes.
          </p>
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              <div className="w-6 h-6 rounded-full bg-primary/20 border-2 border-white" />
              <div className="w-6 h-6 rounded-full bg-accent/20 border-2 border-white" />
              <div className="w-6 h-6 rounded-full bg-green-200 border-2 border-white" />
            </div>
            <span className="text-xs text-neutral-500">3 miembros</span>
          </div>
          <div className="w-full bg-neutral-100 rounded-full h-2">
            <div className="bg-primary h-2 rounded-full" style={{ width: '75%' }} />
          </div>
          <p className="text-xs text-neutral-500">75% completado</p>
        </div>
      ),
    },
    {
      id: '2',
      title: 'Proyecto Beta',
      children: (
        <div className="space-y-3">
          <p className="text-sm text-neutral-600">
            Integración con sistema de pagos externo.
          </p>
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              <div className="w-6 h-6 rounded-full bg-blue-200 border-2 border-white" />
              <div className="w-6 h-6 rounded-full bg-purple-200 border-2 border-white" />
            </div>
            <span className="text-xs text-neutral-500">2 miembros</span>
          </div>
          <div className="w-full bg-neutral-100 rounded-full h-2">
            <div className="bg-accent h-2 rounded-full" style={{ width: '40%' }} />
          </div>
          <p className="text-xs text-neutral-500">40% completado</p>
        </div>
      ),
    },
    {
      id: '3',
      title: 'Proyecto Gamma',
      children: (
        <div className="space-y-3">
          <p className="text-sm text-neutral-600">
            Optimización de rendimiento del dashboard.
          </p>
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              <div className="w-6 h-6 rounded-full bg-amber-200 border-2 border-white" />
            </div>
            <span className="text-xs text-neutral-500">1 miembro</span>
          </div>
          <div className="w-full bg-neutral-100 rounded-full h-2">
            <div className="bg-green-500 h-2 rounded-full" style={{ width: '90%' }} />
          </div>
          <p className="text-xs text-neutral-500">90% completado</p>
        </div>
      ),
    },
  ]);

  return (
    <div className="max-w-md">
      <DraggableCard items={items} onReorder={setItems} />
    </div>
  );
}

export const ComplexContent: Story = {
  render: () => <DraggableCardComplex />,
};
