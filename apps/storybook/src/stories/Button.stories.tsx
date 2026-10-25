import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { Button } from '@omnitok/ui';
import { Plus, Trash2, Send, Check, Info } from 'lucide-react';

/**
 * v3 buttons (DESIGN.md, Components / Buttons): primary for the one action
 * of an area, secondary for shared actions, outline and ghost for the rest.
 * Danger, accept and info exist for confirmation dialogs only.
 */
const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'outline', 'danger', 'accept', 'info'],
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg'],
    },
    ghost: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Nuevo reporte',
  },
};

export const Variants: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-4">
      <Button variant="primary">Primario</Button>
      <Button variant="secondary">Secundario</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="primary" ghost>
        Ghost
      </Button>
    </div>
  ),
};

export const WithIcon: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-4">
      <Button variant="primary" leftIcon={<Plus size={16} />}>
        Nuevo reporte
      </Button>
      <Button variant="secondary" rightIcon={<Send size={16} />}>
        Enviar
      </Button>
    </div>
  ),
};

/** Only inside a confirmation dialog: the button names what happens. */
export const Confirmation: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-4">
      <Button variant="danger" leftIcon={<Trash2 size={16} />}>
        Eliminar
      </Button>
      <Button variant="accept" leftIcon={<Check size={16} />}>
        Confirmar
      </Button>
      <Button variant="info" leftIcon={<Info size={16} />}>
        Entendido
      </Button>
    </div>
  ),
};

export const Loading: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-4">
      <Button variant="primary" loading>
        Guardando
      </Button>
      <Button variant="secondary" loading>
        Probando
      </Button>
      <Button variant="outline" loading>
        Cargando
      </Button>
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-4">
      <Button variant="primary" disabled>
        Primario
      </Button>
      <Button variant="secondary" disabled>
        Secundario
      </Button>
      <Button variant="outline" disabled>
        Outline
      </Button>
      <Button variant="primary" ghost disabled>
        Ghost
      </Button>
    </div>
  ),
};

export const FullWidth: Story = {
  args: {
    variant: 'primary',
    children: 'Ingresar',
    fullWidth: true,
  },
  parameters: {
    layout: 'padded',
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <Button size="xs">Extra small</Button>
        <Button size="sm">Small</Button>
        <Button size="md">Medium</Button>
        <Button size="lg">Large</Button>
      </div>
      <div className="flex items-center gap-4">
        <Button size="xs" variant="secondary" leftIcon={<Plus size={12} />}>
          Extra small
        </Button>
        <Button size="sm" variant="secondary" leftIcon={<Plus size={14} />}>
          Small
        </Button>
        <Button size="md" variant="secondary" leftIcon={<Plus size={16} />}>
          Medium
        </Button>
        <Button size="lg" variant="secondary" leftIcon={<Plus size={20} />}>
          Large
        </Button>
      </div>
    </div>
  ),
};
