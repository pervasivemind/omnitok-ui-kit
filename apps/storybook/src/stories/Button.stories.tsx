import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { Button } from '@omnitok/ui';
import { Plus, Trash2, Send, Check, Info } from 'lucide-react';

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
      options: [
        'primary',
        'secondary',
        'ghost',
        'accept',
        'danger',
        'accent',
        'info',
        'violet',
        'rose',
        'teal',
        'outline',
      ],
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
    children: 'Button',
  },
};

export const Principales: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Button variant="primary">Primary</Button>
      <Button variant="accent">Accent</Button>
      <Button variant="neutral">Neutral</Button>
    </div>
  ),
};

export const Especiales: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Button variant="ghost">Ghost</Button>
      <Button variant="outline">Outline</Button>
    </div>
  ),
};

export const Auxiliares: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Button variant="violet">Violet</Button>
      <Button variant="rose">Rose</Button>
      <Button variant="teal">Teal</Button>
    </div>
  ),
};

export const WithIcon: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Button variant="primary" leftIcon={<Plus size={16} />}>
        Create New
      </Button>
      <Button variant="primary" rightIcon={<Send size={16} />}>
        Send Message
      </Button>
    </div>
  ),
};

export const Funcionales: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Button variant="accept" leftIcon={<Check size={16} />}>
        Aceptar
      </Button>
      <Button variant="danger" leftIcon={<Trash2 size={16} />}>
        Eliminar
      </Button>
      <Button variant="info" leftIcon={<Info size={16} />}>
        Info
      </Button>
    </div>
  ),
};

export const Loading: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap justify-center gap-4">
        <Button variant="primary" loading>
          Sending...
        </Button>
        <Button variant="accent" loading>
          Loading...
        </Button>
        <Button variant="neutral" loading>
          Saving...
        </Button>
        <Button variant="accept" loading>
          Accepting...
        </Button>
        <Button variant="danger" loading>
          Deleting...
        </Button>
        <Button variant="info" loading>
          Updating...
        </Button>
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        <Button variant="violet" loading>
          Creating...
        </Button>
        <Button variant="rose" loading>
          Verifying...
        </Button>
        <Button variant="teal" loading>
          Confirming...
        </Button>
        <Button variant="ghost" loading>
          Ghosting...
        </Button>
        <Button variant="outline" loading>
          Outlining...
        </Button>
      </div>
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap justify-center gap-4">
        <Button variant="primary" disabled>
          Primary
        </Button>
        <Button variant="accent" disabled>
          Accent
        </Button>
        <Button variant="neutral" disabled>
          Neutral
        </Button>
        <Button variant="accept" disabled>
          Accept
        </Button>
        <Button variant="danger" disabled>
          Danger
        </Button>
        <Button variant="info" disabled>
          Info
        </Button>
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        <Button variant="violet" disabled>
          Violet
        </Button>
        <Button variant="rose" disabled>
          Rose
        </Button>
        <Button variant="teal" disabled>
          Teal
        </Button>
        <Button variant="ghost" disabled>
          Ghost
        </Button>
        <Button variant="outline" disabled>
          Outline
        </Button>
      </div>
    </div>
  ),
};

export const FullWidth: Story = {
  args: {
    variant: 'primary',
    children: 'Full Width Button',
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
        <Button size="xs">Extra Small</Button>
        <Button size="sm">Small</Button>
        <Button size="md">Medium</Button>
        <Button size="lg">Large</Button>
      </div>
      <div className="flex items-center gap-4">
        <Button size="xs" leftIcon={<Plus size={12} />}>Extra Small</Button>
        <Button size="sm" rightIcon={<Plus size={14} />}>Small</Button>
        <Button size="md" leftIcon={<Plus size={16} />}>Medium</Button>
        <Button size="lg" rightIcon={<Plus size={20} />}>Large</Button>
      </div>
      <div className="flex items-center gap-4">
        <Button size="xs" loading>
          Extra Small
        </Button>
        <Button size="sm" loading>
          Small
        </Button>
        <Button size="md" loading>
          Medium
        </Button>
        <Button size="lg" loading>
          Large
        </Button>
      </div>
    </div>
  ),
};
