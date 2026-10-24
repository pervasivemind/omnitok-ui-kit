import type { Meta, StoryObj } from '@storybook/react-vite';
import React, { useState } from 'react';
import { Bell } from 'lucide-react';
import { SidebarAccount } from '@omnitok/ui';

/**
 * The account block at the foot of the v3 sidebar (D2): version, extra rows,
 * the language switch as buttons, sign out and the person. Portal, builder
 * and console use the same block (D27).
 */
const meta: Meta<typeof SidebarAccount> = {
  title: 'Layout/SidebarAccount',
  component: SidebarAccount,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className="w-[250px] rounded-[14px] border border-[var(--omni-navy-line)] p-2.5 [background:var(--omni-sb-bg)]">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

const LANGUAGES = [{ code: 'es' }, { code: 'en' }, { code: 'pt' }];

function Interactive(props: React.ComponentProps<typeof SidebarAccount>) {
  const [lang, setLang] = useState(props.language ?? 'es');
  return <SidebarAccount {...props} language={lang} onLanguageChange={setLang} />;
}

export const Default: Story = {
  render: () => (
    <Interactive
      name="María Rojas"
      detail="maria.rojas@brother.com.pe"
      version="3.1.0"
      languages={LANGUAGES}
      language="es"
      onSignOut={() => undefined}
    />
  ),
};

/** Con una fila extra del host (por ejemplo, las tareas pendientes). */
export const WithExtraRow: Story = {
  render: () => (
    <Interactive
      name="Pablo Junyent"
      detail="Administrador"
      version="3.1.0"
      languages={LANGUAGES}
      language="es"
      onSignOut={() => undefined}
    >
      <button
        type="button"
        className="flex items-center gap-2.5 rounded-lg px-2 py-1.5 text-left text-[12px] text-[var(--omni-sb-text)] hover:bg-white/[.05]"
      >
        <Bell size={16} className="text-[var(--omni-sb-muted)]" aria-hidden="true" />
        <span className="flex-1">Tareas</span>
        <span className="rounded-full bg-[var(--omni-sb-badge)] px-1.5 text-2xs font-bold leading-4 text-white">3</span>
      </button>
    </Interactive>
  ),
};

/** Un solo idioma: el selector no aparece. */
export const SingleLanguage: Story = {
  args: {
    name: 'Ana Pérez',
    detail: 'ana.perez@cliente.com',
    languages: [{ code: 'es' }],
    language: 'es',
    onSignOut: () => undefined,
  },
};

/** Riel colapsado de 64 px (D25): solo el avatar. */
export const Collapsed: Story = {
  args: {
    name: 'María Rojas',
    collapsed: true,
  },
  decorators: [
    (Story) => (
      <div className="w-16">
        <Story />
      </div>
    ),
  ],
};
