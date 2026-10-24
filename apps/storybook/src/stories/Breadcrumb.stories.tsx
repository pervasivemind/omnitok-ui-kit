import type { Meta, StoryObj } from '@storybook/react-vite';
import { Breadcrumb } from '@omnitok/ui';

/** Where the reader is. v3: 12px, muted links, current page in ink and semibold, small chevrons. */
const meta: Meta<typeof Breadcrumb> = {
  title: 'Components/Breadcrumb',
  component: Breadcrumb,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: [
      { label: 'Reportes', href: '#' },
      { label: 'Brother Perú', href: '#' },
      { label: 'Disponibilidad' },
    ],
  },
};

export const WithHome: Story = {
  args: {
    showHomeIcon: true,
    items: [
      { label: 'Inicio', href: '#' },
      { label: 'Brother Perú', href: '#' },
      { label: 'Disponibilidad' },
    ],
  },
};
