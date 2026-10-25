import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { Card, CardHeader, CardBody, CardFooter, Button, Badge } from '@omnitok/ui';
import { MoreVertical } from 'lucide-react';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <p className="text-neutral-600">
        This is a basic card with some content inside.
      </p>
    ),
  },
};

export const WithHeader: Story = {
  render: () => (
    <Card className="w-96" noPadding>
      <CardHeader>Card Title</CardHeader>
      <CardBody>
        <p className="text-neutral-600">
          This card has a header section with a title.
        </p>
      </CardBody>
    </Card>
  ),
};

export const WithHeaderAction: Story = {
  render: () => (
    <Card className="w-96" noPadding>
      <CardHeader
        action={
          <button className="p-1 rounded text-white/80 hover:text-white hover:bg-white/10">
            <MoreVertical size={18} />
          </button>
        }
      >
        Card with Action
      </CardHeader>
      <CardBody>
        <p className="text-neutral-600">
          This card has an action button in the header.
        </p>
      </CardBody>
    </Card>
  ),
};

export const WithFooter: Story = {
  render: () => (
    <Card className="w-96" noPadding>
      <CardHeader>Edit Profile</CardHeader>
      <CardBody>
        <p className="text-neutral-600">
          Make changes to your profile information here.
        </p>
      </CardBody>
      <CardFooter>
        <Button variant="secondary">Cancel</Button>
        <Button variant="primary">Save Changes</Button>
      </CardFooter>
    </Card>
  ),
};

export const Hoverable: Story = {
  args: {
    hoverable: true,
    children: (
      <div className="p-2">
        <h3 className="font-semibold mb-2">Hoverable Card</h3>
        <p className="text-neutral-600 text-sm">
          Hover over this card to see the effect.
        </p>
      </div>
    ),
  },
};

export const Variants: Story = {
  render: () => (
    <div className="flex gap-4">
      <Card variant="default" className="w-48">
        <p className="text-sm text-neutral-600">Default</p>
      </Card>
      <Card variant="bordered" className="w-48">
        <p className="text-sm text-neutral-600">Bordered</p>
      </Card>
      <Card variant="elevated" className="w-48">
        <p className="text-sm text-neutral-600">Elevated</p>
      </Card>
    </div>
  ),
};
