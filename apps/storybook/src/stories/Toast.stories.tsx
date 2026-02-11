import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { ToastProvider, useToast, Button } from '@omnitok/ui';

const meta: Meta<typeof ToastProvider> = {
  title: 'Components/Toast',
  component: ToastProvider,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <ToastProvider>
        <Story />
      </ToastProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj;

const ToastDemo = () => {
  const { success, error, warning, info } = useToast();

  return (
    <div className="flex flex-wrap gap-4">
      <Button
        variant="primary"
        onClick={() => success('Operation completed successfully!')}
      >
        Success Toast
      </Button>
      <Button
        variant="danger"
        onClick={() => error('An error occurred. Please try again.')}
      >
        Error Toast
      </Button>
      <Button
        variant="secondary"
        onClick={() => warning('Please review your changes before saving.')}
      >
        Warning Toast
      </Button>
      <Button
        variant="ghost"
        onClick={() => info('New updates are available.')}
      >
        Info Toast
      </Button>
    </div>
  );
};

export const Default: Story = {
  render: () => <ToastDemo />,
};

const ToastWithTitleDemo = () => {
  const { addToast } = useToast();

  return (
    <div className="flex flex-wrap gap-4">
      <Button
        variant="primary"
        onClick={() =>
          addToast({
            variant: 'success',
            title: 'Success!',
            message: 'Your profile has been updated successfully.',
          })
        }
      >
        With Title
      </Button>
      <Button
        variant="danger"
        onClick={() =>
          addToast({
            variant: 'error',
            title: 'Error',
            message: 'Failed to save changes. Please check your connection.',
          })
        }
      >
        Error with Title
      </Button>
    </div>
  );
};

export const WithTitle: Story = {
  render: () => <ToastWithTitleDemo />,
};

const LongDurationDemo = () => {
  const { addToast } = useToast();

  return (
    <Button
      onClick={() =>
        addToast({
          variant: 'info',
          title: 'Processing',
          message: 'This toast will stay for 10 seconds...',
          duration: 10000,
        })
      }
    >
      Long Duration (10s)
    </Button>
  );
};

export const LongDuration: Story = {
  render: () => <LongDurationDemo />,
};

const MultipleToastsDemo = () => {
  const { success, error, warning, info } = useToast();

  const showAll = () => {
    success('First toast');
    setTimeout(() => error('Second toast'), 200);
    setTimeout(() => warning('Third toast'), 400);
    setTimeout(() => info('Fourth toast'), 600);
  };

  return (
    <Button onClick={showAll}>
      Show Multiple Toasts
    </Button>
  );
};

export const MultipleToasts: Story = {
  render: () => <MultipleToastsDemo />,
};
