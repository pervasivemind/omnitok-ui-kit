import type { Meta, StoryObj } from '@storybook/react-vite';
import React, { useState } from 'react';
import { Radio } from '@omnitok/ui';

/** Single choice inside a group. v3: 18px circle, line border, violet dot; 13px label. */
const meta: Meta<typeof Radio> = {
  title: 'Components/Radio',
  component: Radio,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { label: 'Por SKU', name: 'unit' },
};

export const Group: Story = {
  render: () => {
    const [value, setValue] = useState('sku');
    return (
      <div className="flex flex-col gap-3" role="radiogroup" aria-label="Unidad">
        {[
          ['sku', 'Por SKU', 'Cada producto cuenta una vez por retailer'],
          ['pub', 'Por publicación', 'Cada publicación cuenta por separado'],
        ].map(([v, label, description]) => (
          <Radio key={v} name="unit-group" value={v} label={label} description={description} checked={value === v} onChange={() => setValue(v)} />
        ))}
        <Radio name="unit-group" label="No disponible" disabled />
      </div>
    );
  },
};

export const WithError: Story = {
  args: { label: 'Por publicación', name: 'unit-error', error: 'Elige una unidad para continuar.' },
};
