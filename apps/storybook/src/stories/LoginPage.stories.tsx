import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { LoginPage } from '@omnitok/ui';

const meta: Meta<typeof LoginPage> = {
  title: 'Pages/LoginPage',
  component: LoginPage,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    language: {
      control: 'select',
      options: ['es', 'en'],
    },
    variant: {
      control: 'select',
      options: ['gradient', 'split', 'centered'],
    },
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

export const Gradient: Story = {
  args: {
    logo: <LogoWideColor />,
    logoWide: <LogoWideColor />,
    language: 'es',
    variant: 'gradient',
    onLoginSubmit: (email, password) => {
      console.log('Login:', { email, password });
    },
    onForgotPassword: () => {
      console.log('Forgot password clicked');
    },
  },
};

export const Split: Story = {
  args: {
    logo: <LogoWideColor />,
    logoWide: <LogoWideColor />,
    splitLogo: <LogoWideWhite />,
    language: 'es',
    variant: 'split',
    onLoginSubmit: (email, password) => {
      console.log('Login:', { email, password });
    },
    onForgotPassword: () => {
      console.log('Forgot password clicked');
    },
  },
};

export const Centered: Story = {
  args: {
    logo: <LogoWideColor />,
    logoWide: <LogoWideColor />,
    language: 'es',
    variant: 'centered',
    onLoginSubmit: (email, password) => {
      console.log('Login:', { email, password });
    },
    onForgotPassword: () => {
      console.log('Forgot password clicked');
    },
  },
};

export const WithError: Story = {
  args: {
    logo: <LogoWideColor />,
    logoWide: <LogoWideColor />,
    language: 'es',
    variant: 'gradient',
    error: 'Credenciales inválidas. Por favor, verifica tu correo y contraseña.',
    onLoginSubmit: (email, password) => {
      console.log('Login:', { email, password });
    },
  },
};

export const Loading: Story = {
  args: {
    logo: <LogoWideColor />,
    logoWide: <LogoWideColor />,
    language: 'es',
    variant: 'gradient',
    loading: true,
    onLoginSubmit: (email, password) => {
      console.log('Login:', { email, password });
    },
  },
};

export const WithFooter: Story = {
  args: {
    logo: <LogoWideColor />,
    logoWide: <LogoWideColor />,
    language: 'es',
    variant: 'gradient',
    onLoginSubmit: (email, password) => {
      console.log('Login:', { email, password });
    },
    footer: (
      <p className="text-sm text-neutral-500">
        ¿No tienes cuenta?{' '}
        <a href="#" className="text-primary font-medium hover:underline">
          Contacta al administrador
        </a>
      </p>
    ),
  },
};

export const Mobile: Story = {
  args: {
    logo: <LogoWideColor />,
    logoWide: <LogoWideColor />,
    language: 'es',
    variant: 'gradient',
    onLoginSubmit: (email, password) => {
      console.log('Login:', { email, password });
    },
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
    language: 'en',
    variant: 'gradient',
    onLoginSubmit: (email, password) => {
      console.log('Login:', { email, password });
    },
  },
};

export const EnglishSplit: Story = {
  args: {
    logo: <LogoWideColor />,
    logoWide: <LogoWideColor />,
    splitLogo: <LogoWideWhite />,
    language: 'en',
    variant: 'split',
    onLoginSubmit: (email, password) => {
      console.log('Login:', { email, password });
    },
  },
};

export const EnglishCentered: Story = {
  args: {
    logo: <LogoWideColor />,
    logoWide: <LogoWideColor />,
    language: 'en',
    variant: 'centered',
    onLoginSubmit: (email, password) => {
      console.log('Login:', { email, password });
    },
  },
};
