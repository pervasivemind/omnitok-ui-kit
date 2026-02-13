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
      options: ['primary', 'accent', 'neutral', 'success', 'warning', 'error', 'info'],
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

export const Principales: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge variant="primary">Primary</Badge>
      <Badge variant="accent">Accent</Badge>
      <Badge variant="neutral">Neutral</Badge>
    </div>
  ),
};

export const Semanticos: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge variant="success">Success</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="error">Error</Badge>
      <Badge variant="info">Info</Badge>
    </div>
  ),
};

export const Auxiliares: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge variant="violet">Violet</Badge>
      <Badge variant="rose">Rose</Badge>
      <Badge variant="teal">Teal</Badge>
    </div>
  ),
};

export const Pill: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Badge variant="primary" pill>Primary</Badge>
      <Badge variant="accent" pill>Accent</Badge>
      <Badge variant="neutral" pill>Neutral</Badge>
      <Badge variant="success" pill>Success</Badge>
      <Badge variant="warning" pill>Warning</Badge>
      <Badge variant="error" pill>Error</Badge>
      <Badge variant="info" pill>Info</Badge>
      <Badge variant="violet" pill>Violet</Badge>
      <Badge variant="rose" pill>Rose</Badge>
      <Badge variant="teal" pill>Teal</Badge>
    </div>
  ),
};

export const Dot: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Badge variant="primary" dot />
      <Badge variant="accent" dot />
      <Badge variant="neutral" dot />
      <Badge variant="success" dot />
      <Badge variant="warning" dot />
      <Badge variant="error" dot />
      <Badge variant="info" dot />
      <Badge variant="violet" dot />
      <Badge variant="rose" dot />
      <Badge variant="teal" dot />
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

export const StatusBadges: Story = {
  render: () => (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-2">
        <Badge variant="success" dot />
        <span>Active</span>
      </div>
      <div className="flex items-center gap-2">
        <Badge variant="warning" dot />
        <span>Pending</span>
      </div>
      <div className="flex items-center gap-2">
        <Badge variant="error" dot />
        <span>Inactive</span>
      </div>
    </div>
  ),
};
