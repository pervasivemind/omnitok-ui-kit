import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { Badge } from '@omnitok/ui';

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'neutral', 'success', 'warning', 'error', 'info'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Badge',
  },
};

export const Tones: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge variant="primary">Seleccionado</Badge>
      <Badge variant="neutral">Borrador</Badge>
    </div>
  ),
};

/** A status chip always carries its word: never colour alone. */
export const Status: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge variant="success">Publicado</Badge>
      <Badge variant="warning">Pendiente</Badge>
      <Badge variant="error">Falló</Badge>
      <Badge variant="info">En curso</Badge>
    </div>
  ),
};

export const Pill: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge variant="primary" pill>Seleccionado</Badge>
      <Badge variant="neutral" pill>Borrador</Badge>
      <Badge variant="success" pill>Publicado</Badge>
      <Badge variant="warning" pill>Pendiente</Badge>
      <Badge variant="error" pill>Falló</Badge>
      <Badge variant="info" pill>En curso</Badge>
    </div>
  ),
};

/** The dot marks a live state and always sits next to its word. */
export const Dot: Story = {
  render: () => (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-2">
        <Badge variant="success" dot />
        <span>Activo</span>
      </div>
      <div className="flex items-center gap-2">
        <Badge variant="warning" dot />
        <span>Pendiente</span>
      </div>
      <div className="flex items-center gap-2">
        <Badge variant="error" dot />
        <span>Inactivo</span>
      </div>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Badge size="sm">Small</Badge>
      <Badge size="md">Medium</Badge>
      <Badge size="lg">Large</Badge>
    </div>
  ),
};
