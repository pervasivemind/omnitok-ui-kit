export type SupportedLanguage = 'es' | 'en';

export type MessagesByLanguage = Record<string, Record<string, string>>;

export const defaultMessages: Record<SupportedLanguage, Record<string, string>> = {
  es: {
    // LoginPage
    'login.title': 'Iniciar Sesión',
    'login.subtitle': 'Ingresa tus credenciales para continuar',
    'login.emailLabel': 'Correo electrónico',
    'login.emailPlaceholder': 'tu@email.com',
    'login.passwordLabel': 'Contraseña',
    'login.passwordPlaceholder': '••••••••',
    'login.rememberMe': 'Recordarme',
    'login.forgotPassword': '¿Olvidaste tu contraseña?',
    'login.submit': 'Iniciar Sesión',

    'login.split.heroTitle': 'Bienvenido de vuelta',
    'login.split.heroDescription':
      'Accede a tu panel de administración y gestiona tu plataforma de manera eficiente.',
    'login.split.copyright': '© {year} Omnitok. Todos los derechos reservados.',

    // Pagination
    'pagination.ariaLabel': 'Paginación',
    'pagination.firstPage': 'Primera página',
    'pagination.lastPage': 'Última página',
    'pagination.previousPage': 'Página anterior',
    'pagination.nextPage': 'Página siguiente',
    'pagination.info': '{start}-{end} de {total}',
  },
  en: {
    // LoginPage
    'login.title': 'Sign in',
    'login.subtitle': 'Enter your credentials to continue',
    'login.emailLabel': 'Email',
    'login.emailPlaceholder': 'you@email.com',
    'login.passwordLabel': 'Password',
    'login.passwordPlaceholder': '••••••••',
    'login.rememberMe': 'Remember me',
    'login.forgotPassword': 'Forgot your password?',
    'login.submit': 'Sign in',

    'login.split.heroTitle': 'Welcome back',
    'login.split.heroDescription':
      'Access your admin dashboard and manage your platform efficiently.',
    'login.split.copyright': '© {year} Omnitok. All rights reserved.',

    // Pagination
    'pagination.ariaLabel': 'Pagination',
    'pagination.firstPage': 'First page',
    'pagination.lastPage': 'Last page',
    'pagination.previousPage': 'Previous page',
    'pagination.nextPage': 'Next page',
    'pagination.info': '{start}-{end} of {total}',
  },
};
