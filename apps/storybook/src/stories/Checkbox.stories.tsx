import type { Meta, StoryObj } from '@storybook/react-vite';
import React, { useState } from 'react';
import { Checkbox } from '@omnitok/ui';

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'success', 'info'],
    },
    toggle: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Accept terms and conditions',
  },
};

export const WithLabel: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Checkbox label="Email notifications" description="Receive emails about account activity" />
      <Checkbox label="SMS notifications" description="Receive text messages for urgent alerts" />
      <Checkbox label="Marketing emails" description="Receive promotional content and offers" />
    </div>
  ),
};

export const Controlled: Story = {
  render: () => {
    const [checked, setChecked] = useState(false);
    const [toggle, setToggle] = useState(false);
    return (
      <div className="flex flex-col gap-4 w-48">
        <Checkbox
          label="Controlled checkbox"
          description={`Current state: ${checked ? 'checked' : 'unchecked'}`}
          checked={checked}
          onCheckedChange={setChecked}
        />
        <Checkbox
          toggle
          label="Controlled toggle"
          description={`Current state: ${toggle ? 'on' : 'off'}`}
          checked={toggle}
          onCheckedChange={setToggle}
        />
      </div>
    );
  },
};

export const WithError: Story = {
  args: {
    label: 'I agree to the terms',
    error: 'You must accept the terms to continue',
  },
};

export const Indeterminate: Story = {
  render: () => (
    <div className="flex flex-col gap-3">
      <Checkbox label="Select all" indeterminate defaultChecked />
      <div className="ml-6 flex flex-col gap-2">
        <Checkbox label="Option A" defaultChecked />
        <Checkbox label="Option B" />
        <Checkbox label="Option C" defaultChecked />
      </div>
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Checkbox label="Disabled unchecked" disabled />
      <Checkbox label="Disabled checked" disabled defaultChecked />
    </div>
  ),
};

export const ToggleSwitch: Story = {
  args: {
    toggle: true,
    label: 'Enable dark mode',
  },
};

export const ToggleWithLabel: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Checkbox toggle label="Wi-Fi" description="Connect to wireless networks" defaultChecked />
      <Checkbox toggle label="Bluetooth" description="Allow nearby device connections" />
      <Checkbox toggle label="Airplane mode" description="Disable all wireless communications" />
    </div>
  ),
};

export const ToggleDisabled: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Checkbox toggle label="Disabled off" disabled />
      <Checkbox toggle label="Disabled on" disabled defaultChecked />
    </div>
  ),
};
