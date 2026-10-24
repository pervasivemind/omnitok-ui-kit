import type { Meta, StoryObj } from '@storybook/react-vite';
import React, { useState } from 'react';
import { Textarea } from '@omnitok/ui';

/** Multi-line text. v3: 10px radius, line border, 13px text, 12px label and helper, optional counter. */
const meta: Meta<typeof Textarea> = {
  title: 'Components/Textarea',
  component: Textarea,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  decorators: [(Story) => <div style={{ width: 360 }}><Story /></div>],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { label: 'Notas', placeholder: 'Escribe una nota…' },
};

export const WithCounter: Story = {
  render: () => {
    const [value, setValue] = useState('Analizar los productos que llevan más de 15 días fuera.');
    return <Textarea label="Descripción" value={value} onChange={(e) => setValue(e.target.value)} showCount maxLength={180} helperText="Se muestra en el resumen del reporte." />;
  },
};

export const WithError: Story = {
  args: { label: 'Notas', placeholder: 'Escribe una nota…', error: 'Completa la nota antes de guardar.' },
};

export const Disabled: Story = {
  args: { label: 'Notas', defaultValue: 'Solo lectura', disabled: true },
};
