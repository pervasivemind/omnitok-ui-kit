import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { LoginPage } from '@omnitok/ui';

/**
 * v3 login (DESIGN.md, Components / Login; decision D26): split screen, the
 * brand hero on the sidebar's navy and the form on white. Below 1024 px only
 * the form shows.
 */
const meta: Meta<typeof LoginPage> = {
  title: 'Pages/LoginPage',
  component: LoginPage,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  args: {
    variant: 'split',
    onLoginSubmit: (email: string, password: string) => {
      console.log('Login:', { email, password });
    },
    onForgotPassword: () => {
      console.log('Forgot password clicked');
    },
  },
  argTypes: {
    language: {
      control: 'select',
      options: ['es', 'en'],
    },
    variant: { table: { disable: true } },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const LogoWideColor = () => (
  <img src="/omnitok-logo-primary.svg" alt="Omnitok" className="h-10 w-auto object-contain" />
);

const LogoWideWhite = () => (
  <img src="/omnitok-logo.svg" alt="Omnitok" className="h-10 w-auto object-contain" />
);

/** Omnitok's own products (builder, console): the logo on the hero. */
export const Split: Story = {
  args: {
    logo: <LogoWideColor />,
    logoWide: <LogoWideColor />,
    splitLogo: <LogoWideWhite />,
    language: 'es',
  },
};

/** A customer tenant: its name as text on the hero, no logo. */
export const SplitTenantWordmark: Story = {
  args: {
    brandText: 'Brother Perú',
    language: 'es',
    showRememberMe: false,
    heroTitle: 'Disponibilidad, precios y búsqueda en un solo lugar',
    heroDescription: 'Ingresa para ver los reportes de tu marca en cada retailer.',
  },
};

export const SplitWithError: Story = {
  args: {
    brandText: 'Brother Perú',
    language: 'es',
    showRememberMe: false,
    error: 'El correo o la contraseña no coinciden.',
  },
};

export const Loading: Story = {
  args: {
    logo: <LogoWideColor />,
    logoWide: <LogoWideColor />,
    splitLogo: <LogoWideWhite />,
    language: 'es',
    loading: true,
  },
};

export const NoForgotPassword: Story = {
  args: {
    logo: <LogoWideColor />,
    logoWide: <LogoWideColor />,
    splitLogo: <LogoWideWhite />,
    language: 'es',
    showForgotPassword: false,
  },
};

export const WithFooter: Story = {
  args: {
    logo: <LogoWideColor />,
    logoWide: <LogoWideColor />,
    splitLogo: <LogoWideWhite />,
    language: 'es',
    footer: (
      <p className="text-sm text-neutral-600">
        ¿No tienes cuenta?{' '}
        <a href="#" className="font-medium text-primary hover:underline">
          Contacta al administrador
        </a>
      </p>
    ),
  },
};

/** Below 1024 px the hero hides and the form fills the screen. */
export const Mobile: Story = {
  args: {
    brandText: 'Brother Perú',
    language: 'es',
    showRememberMe: false,
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
};

export const English: Story = {
  args: {
    logo: <LogoWideColor />,
    logoWide: <LogoWideColor />,
    splitLogo: <LogoWideWhite />,
    language: 'en',
  },
};
