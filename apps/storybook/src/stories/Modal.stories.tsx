import type { Meta, StoryObj } from '@storybook/react-vite';
import React, { useState } from 'react';
import { Modal, ConfirmModal, Button, Input } from '@omnitok/ui';

const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl', 'full'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Modal</Button>
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          title="Modal Title"
          description="This is a description of what this modal is about."
        >
          <p className="text-neutral-600">
            This is the modal content. You can put any content here.
          </p>
        </Modal>
      </>
    );
  },
};

export const WithFooter: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Modal</Button>
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          title="Edit Profile"
          footer={
            <>
              <Button variant="ghost" onClick={() => setOpen(false)}>
                Cancel
              </Button>
              <Button variant="primary" onClick={() => setOpen(false)}>
                Save Changes
              </Button>
            </>
          }
        >
          <div className="space-y-4">
            <Input label="Name" placeholder="Enter your name" />
            <Input label="Email" type="email" placeholder="Enter your email" />
          </div>
        </Modal>
      </>
    );
  },
};

export const Sizes: Story = {
  render: () => {
    const [size, setSize] = useState<'sm' | 'md' | 'lg' | 'xl' | 'full' | null>(null);
    return (
      <>
        <div className="flex gap-2">
          <Button onClick={() => setSize('sm')}>Small</Button>
          <Button onClick={() => setSize('md')}>Medium</Button>
          <Button onClick={() => setSize('lg')}>Large</Button>
          <Button onClick={() => setSize('xl')}>XL</Button>
          <Button onClick={() => setSize('full')}>Full</Button>
        </div>
        <Modal
          open={size !== null}
          onClose={() => setSize(null)}
          title={`${size?.toUpperCase()} Modal`}
          size={size || 'md'}
        >
          <p className="text-neutral-600">
            This is a {size} sized modal.
          </p>
        </Modal>
      </>
    );
  },
};

export const ConfirmDialog: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button variant="danger" onClick={() => setOpen(true)}>
          Delete Item
        </Button>
        <ConfirmModal
          open={open}
          onClose={() => setOpen(false)}
          title="Delete Item"
          message="Are you sure you want to delete this item? This action cannot be undone."
          confirmText="Delete"
          cancelText="Cancel"
          confirmVariant="danger"
          onConfirm={() => {
            alert('Item deleted!');
            setOpen(false);
          }}
        />
      </>
    );
  },
};

export const NonDismissible: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Modal</Button>
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          title="Important Notice"
          closeOnOverlay={false}
          closeOnEscape={false}
          showCloseButton={false}
          footer={
            <Button variant="primary" onClick={() => setOpen(false)}>
              I Understand
            </Button>
          }
        >
          <p className="text-neutral-600">
            This modal can only be closed by clicking the button below.
          </p>
        </Modal>
      </>
    );
  },
};
