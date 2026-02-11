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
};

export default meta;
type Story = StoryObj<typeof meta>;

const LogoWideColor = () => (
  <img
    src="/logos/logo_largo_color.png"
    alt="Omnitok"
    className="h-10 w-auto object-contain"
  />
);

const LogoWideWhite = () => (
  <img
    src="/logos/logo_largo_blanco.png"
    alt="Omnitok"
    className="h-10 w-auto object-contain"
  />
);

export const Gradient: Story = {
  args: {
    logo: <LogoWideColor />,
    logoWide: <LogoWideColor />,
    title: 'Iniciar Sesión',
    subtitle: 'Ingresa tus credenciales para continuar',
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
    title: 'Bienvenido',
    subtitle: 'Accede a tu cuenta para continuar',
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
    title: 'Iniciar Sesión',
    subtitle: 'Ingresa tus credenciales',
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
    title: 'Iniciar Sesión',
    subtitle: 'Ingresa tus credenciales para continuar',
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
    title: 'Iniciar Sesión',
    subtitle: 'Ingresa tus credenciales para continuar',
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
    title: 'Iniciar Sesión',
    subtitle: 'Ingresa tus credenciales para continuar',
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
    title: 'Iniciar Sesión',
    subtitle: 'Ingresa tus credenciales',
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
