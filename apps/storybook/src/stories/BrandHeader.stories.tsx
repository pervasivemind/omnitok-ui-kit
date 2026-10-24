import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { BrandHeader } from '@omnitok/ui';

/**
 * The v3 brand header (42 px): the customer's brand on the left, where the
 * person is in the middle, "powered by omnitok" on the right. A tenant
 * without a logo shows its name as text (D3).
 */
const meta: Meta<typeof BrandHeader> = {
  title: 'Layout/BrandHeader',
  component: BrandHeader,
  parameters: { layout: 'fullscreen' },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

function BrotherLogo() {
  return (
    <span className="flex items-baseline gap-1.5 font-display text-[20px] font-extrabold tracking-[-.04em] text-white">
      brother<span className="text-[10px] font-medium tracking-normal text-[#C9C4E6]">at your side</span>
    </span>
  );
}

/** Tenant con logo, dentro de un reporte. */
export const WithLogo: Story = {
  args: {
    brand: <BrotherLogo />,
    label: 'Disponibilidad · Disponibilidad y cobertura',
    onMenuToggle: () => undefined,
  },
};

/** Tenant sin logo: el nombre como texto. */
export const TextBrand: Story = {
  args: {
    brandText: 'Omnitok',
    label: 'Inicio',
    onMenuToggle: () => undefined,
  },
};

/** Sin botón de menú (pantallas sin sidebar). */
export const WithoutMenu: Story = {
  args: {
    brandText: 'Hisense Argentina',
    label: 'Configuración',
  },
};

/** Ancho de teléfono: el rótulo se oculta y el "powered by" queda solo con la marca. */
export const Mobile: Story = {
  args: {
    brand: <BrotherLogo />,
    label: 'Disponibilidad · Disponibilidad y cobertura',
    onMenuToggle: () => undefined,
  },
  parameters: { viewport: { defaultViewport: 'mobile1' } },
  render: (args) => (
    <div style={{ maxWidth: 375 }}>
      <BrandHeader {...args} />
    </div>
  ),
};

/** Tema del tenant (D14): el host define --omni-header-bg. */
export const TenantTint: Story = {
  args: {
    brand: <BrotherLogo />,
    label: 'Disponibilidad · Disponibilidad y cobertura',
    onMenuToggle: () => undefined,
  },
  render: (args) => (
    <div style={{ '--omni-header-bg': '#0B2150' } as React.CSSProperties}>
      <BrandHeader {...args} />
    </div>
  ),
};
