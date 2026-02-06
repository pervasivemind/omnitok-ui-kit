import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Select } from '@omnitok/ui';
import { Globe } from 'lucide-react';

const meta: Meta<typeof Select> = {
  title: 'Components/Select',
  component: Select,
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

const countryOptions = [
  { value: 'us', label: 'United States' },
  { value: 'uk', label: 'United Kingdom' },
  { value: 'ca', label: 'Canada' },
  { value: 'au', label: 'Australia' },
  { value: 'cl', label: 'Chile' },
];

export const Default: Story = {
  args: {
    options: countryOptions,
    placeholder: 'Select a country',
  },
};

export const WithLabel: Story = {
  args: {
    label: 'Country',
    options: countryOptions,
    placeholder: 'Select a country',
  },
};

export const WithHelperText: Story = {
  args: {
    label: 'Country',
    options: countryOptions,
    placeholder: 'Select a country',
    helperText: 'Select your country of residence',
  },
};

export const WithError: Story = {
  args: {
    label: 'Country',
    options: countryOptions,
    placeholder: 'Select a country',
    error: 'Please select a country',
  },
};

export const WithLeftIcon: Story = {
  args: {
    label: 'Country',
    options: countryOptions,
    placeholder: 'Select a country',
    leftIcon: <Globe size={18} />,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Country',
    options: countryOptions,
    placeholder: 'Select a country',
    disabled: true,
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-80">
      <Select size="sm" options={countryOptions} placeholder="Small" />
      <Select size="md" options={countryOptions} placeholder="Medium" />
      <Select size="lg" options={countryOptions} placeholder="Large" />
    </div>
  ),
};

export const WithDisabledOption: Story = {
  args: {
    label: 'Status',
    options: [
      { value: 'active', label: 'Active' },
      { value: 'pending', label: 'Pending' },
      { value: 'inactive', label: 'Inactive', disabled: true },
    ],
    placeholder: 'Select status',
  },
};
