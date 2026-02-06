import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Alert } from '@omnitok/ui';

const meta: Meta<typeof Alert> = {
  title: 'Components/Alert',
  component: Alert,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['info', 'success', 'warning', 'error'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Info: Story = {
  args: {
    variant: 'info',
    children: 'This is an informational message.',
  },
};

export const Success: Story = {
  args: {
    variant: 'success',
    children: 'Your changes have been saved successfully.',
  },
};

export const Warning: Story = {
  args: {
    variant: 'warning',
    children: 'Please review your information before proceeding.',
  },
};

export const Error: Story = {
  args: {
    variant: 'error',
    children: 'An error occurred while processing your request.',
  },
};

export const WithTitle: Story = {
  args: {
    variant: 'info',
    title: 'Information',
    children: 'This alert has a title and a description.',
  },
};

export const Dismissible: Story = {
  args: {
    variant: 'success',
    title: 'Success!',
    children: 'Your profile has been updated. Click the X to dismiss this alert.',
    dismissible: true,
    onDismiss: () => alert('Alert dismissed!'),
  },
};

export const WithoutIcon: Story = {
  args: {
    variant: 'info',
    children: 'This alert has no icon.',
    hideIcon: true,
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-96">
      <Alert variant="info" title="Info">
        This is an informational alert.
      </Alert>
      <Alert variant="success" title="Success">
        Operation completed successfully.
      </Alert>
      <Alert variant="warning" title="Warning">
        Please check your input.
      </Alert>
      <Alert variant="error" title="Error">
        Something went wrong.
      </Alert>
    </div>
  ),
};
