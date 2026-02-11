import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { Button } from '@omnitok/ui';
import { Plus, Save, Trash2, Send } from 'lucide-react';

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
      options: ['primary', 'secondary', 'ghost', 'danger', 'accent', 'outline'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Primary Button',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary Button',
  },
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    children: 'Ghost Button',
  },
};

export const Danger: Story = {
  args: {
    variant: 'danger',
    children: 'Delete',
    leftIcon: <Trash2 size={16} />,
  },
};

export const Accent: Story = {
  args: {
    variant: 'accent',
    children: 'Accent Button',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Outline Button',
  },
};

export const WithLeftIcon: Story = {
  args: {
    variant: 'primary',
    children: 'Create New',
    leftIcon: <Plus size={16} />,
  },
};

export const WithRightIcon: Story = {
  args: {
    variant: 'primary',
    children: 'Send Message',
    rightIcon: <Send size={16} />,
  },
};

export const Loading: Story = {
  args: {
    variant: 'primary',
    children: 'Saving...',
    loading: true,
  },
};

export const Disabled: Story = {
  args: {
    variant: 'primary',
    children: 'Disabled',
    disabled: true,
  },
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
    <div className="flex items-center gap-4">
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="danger">Danger</Button>
      <Button variant="accent">Accent</Button>
      <Button variant="outline">Outline</Button>
    </div>
  ),
};
