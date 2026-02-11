import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { Input } from '@omnitok/ui';
import { Search, Mail, Lock, Eye, User } from 'lucide-react';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
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
    placeholder: 'Enter text...',
  },
};

export const WithLabel: Story = {
  args: {
    label: 'Email Address',
    placeholder: 'you@example.com',
    type: 'email',
  },
};

export const WithHelperText: Story = {
  args: {
    label: 'Password',
    type: 'password',
    placeholder: '••••••••',
    helperText: 'Must be at least 8 characters',
  },
};

export const WithError: Story = {
  args: {
    label: 'Email',
    type: 'email',
    placeholder: 'you@example.com',
    value: 'invalid-email',
    error: 'Please enter a valid email address',
  },
};

export const WithLeftIcon: Story = {
  args: {
    placeholder: 'Search...',
    leftIcon: <Search size={18} />,
  },
};

export const WithRightIcon: Story = {
  args: {
    label: 'Password',
    type: 'password',
    placeholder: '••••••••',
    rightIcon: <Eye size={18} />,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Input',
    placeholder: 'Cannot edit',
    disabled: true,
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-80">
      <Input size="sm" placeholder="Small input" />
      <Input size="md" placeholder="Medium input" />
      <Input size="lg" placeholder="Large input" />
    </div>
  ),
};

export const FormExample: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-80">
      <Input
        label="Full Name"
        placeholder="John Doe"
        leftIcon={<User size={18} />}
      />
      <Input
        label="Email"
        type="email"
        placeholder="john@example.com"
        leftIcon={<Mail size={18} />}
      />
      <Input
        label="Password"
        type="password"
        placeholder="••••••••"
        leftIcon={<Lock size={18} />}
        helperText="Must be at least 8 characters"
      />
    </div>
  ),
};
