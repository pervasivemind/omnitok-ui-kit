import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { SortableList, SortableItem } from '@omnitok/ui';
import { Package, Users, ShoppingCart, TrendingUp, Settings } from 'lucide-react';

const meta: Meta<typeof SortableList> = {
  title: 'Drag and Drop/SortableList',
  component: SortableList,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof SortableList>;

// Story interactivo con estado
function SortableListDemo() {
  const [items, setItems] = useState<SortableItem[]>([
    { id: '1', content: <span className="font-medium">Primer elemento de la lista</span> },
    { id: '2', content: <span className="font-medium">Segundo elemento de la lista</span> },
    { id: '3', content: <span className="font-medium">Tercer elemento de la lista</span> },
    { id: '4', content: <span className="font-medium">Cuarto elemento de la lista</span> },
    { id: '5', content: <span className="font-medium">Quinto elemento de la lista</span> },
  ]);

  return (
    <div className="max-w-md">
      <SortableList items={items} onReorder={setItems} />
    </div>
  );
}

export const Default: Story = {
  render: () => <SortableListDemo />,
};

// Con iconos
function SortableListWithIcons() {
  const [items, setItems] = useState<SortableItem[]>([
    {
      id: '1',
      content: (
        <div className="flex items-center gap-3">
          <Package className="w-5 h-5 text-primary" />
          <span className="font-medium">Productos</span>
        </div>
      ),
    },
    {
      id: '2',
      content: (
        <div className="flex items-center gap-3">
          <Users className="w-5 h-5 text-primary" />
          <span className="font-medium">Clientes</span>
        </div>
      ),
    },
    {
      id: '3',
      content: (
        <div className="flex items-center gap-3">
          <ShoppingCart className="w-5 h-5 text-primary" />
          <span className="font-medium">Pedidos</span>
        </div>
      ),
    },
    {
      id: '4',
      content: (
        <div className="flex items-center gap-3">
          <TrendingUp className="w-5 h-5 text-primary" />
          <span className="font-medium">Ventas</span>
        </div>
      ),
    },
    {
      id: '5',
      content: (
        <div className="flex items-center gap-3">
          <Settings className="w-5 h-5 text-primary" />
          <span className="font-medium">Configuración</span>
        </div>
      ),
    },
  ]);

  return (
    <div className="max-w-md">
      <SortableList items={items} onReorder={setItems} />
    </div>
  );
}

export const WithIcons: Story = {
  render: () => <SortableListWithIcons />,
};

// Con contenido complejo
function SortableListComplex() {
  const [items, setItems] = useState<SortableItem[]>([
    {
      id: '1',
      content: (
        <div className="flex items-center justify-between w-full">
          <div>
            <p className="font-medium">Tarea de alta prioridad</p>
            <p className="text-sm text-neutral-500">Vence mañana</p>
          </div>
          <span className="px-2 py-1 text-xs font-medium bg-red-100 text-red-700 rounded-full">
            Urgente
          </span>
        </div>
      ),
    },
    {
      id: '2',
      content: (
        <div className="flex items-center justify-between w-full">
          <div>
            <p className="font-medium">Revisar documentación</p>
            <p className="text-sm text-neutral-500">Vence en 3 días</p>
          </div>
          <span className="px-2 py-1 text-xs font-medium bg-amber-100 text-amber-700 rounded-full">
            Media
          </span>
        </div>
      ),
    },
    {
      id: '3',
      content: (
        <div className="flex items-center justify-between w-full">
          <div>
            <p className="font-medium">Actualizar dependencias</p>
            <p className="text-sm text-neutral-500">Sin fecha límite</p>
          </div>
          <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-700 rounded-full">
            Baja
          </span>
        </div>
      ),
    },
    {
      id: '4',
      content: (
        <div className="flex items-center justify-between w-full">
          <div>
            <p className="font-medium">Preparar presentación</p>
            <p className="text-sm text-neutral-500">Vence en 1 semana</p>
          </div>
          <span className="px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
            Normal
          </span>
        </div>
      ),
    },
    {
      id: '5',
      content: (
        <div className="flex items-center justify-between w-full">
          <div>
            <p className="font-medium">Reunión con equipo</p>
            <p className="text-sm text-neutral-500">Hoy a las 15:00</p>
          </div>
          <span className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-700 rounded-full">
            Evento
          </span>
        </div>
      ),
    },
  ]);

  return (
    <div className="max-w-lg">
      <SortableList items={items} onReorder={setItems} />
    </div>
  );
}

export const ComplexContent: Story = {
  render: () => <SortableListComplex />,
};
