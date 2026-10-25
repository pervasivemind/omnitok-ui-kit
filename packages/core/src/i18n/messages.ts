export type SupportedLanguage = 'es' | 'en' | 'pt';

export type MessagesByLanguage = Record<string, Record<string, string>>;

export const defaultMessages: Record<SupportedLanguage, Record<string, string>> = {
  es: {
    // LoginPage
    'login.title': 'Iniciar sesión',
    'login.subtitle': 'Ingresa tus credenciales para continuar',
    'login.emailLabel': 'Correo electrónico',
    'login.emailPlaceholder': 'tu@email.com',
    'login.passwordLabel': 'Contraseña',
    'login.passwordPlaceholder': '••••••••',
    'login.rememberMe': 'Recordarme',
    'login.forgotPassword': '¿Olvidaste tu contraseña?',
    'login.submit': 'Iniciar sesión',

    'login.split.heroTitle': 'Te damos la bienvenida',
    'login.split.heroDescription': 'Ingresa para seguir donde lo dejaste.',
    'login.showPassword': 'Mostrar contraseña',
    'login.hidePassword': 'Ocultar contraseña',
    'login.split.copyright': '© {year} Omnitok. Todos los derechos reservados.',

    // Pagination
    'pagination.ariaLabel': 'Paginación',
    'pagination.firstPage': 'Primera página',
    'pagination.lastPage': 'Última página',
    'pagination.previousPage': 'Página anterior',
    'pagination.nextPage': 'Página siguiente',
    'pagination.info': '{start}-{end} de {total}',
    'pagination.itemsPerPage': 'Elementos por página',

    // Shell v3 (Sidebar, BrandHeader, Layout)
    'sidebar.project': 'Proyecto',
    'sidebar.chooseProject': 'Elegir proyecto',
    'sidebar.changeProject': 'Cambiar de proyecto',
    'sidebar.searchProject': 'Buscar proyecto…',
    'sidebar.noProjects': 'Ningún proyecto coincide',
    'sidebar.language': 'Idioma',
    'sidebar.signOut': 'Salir',
    'header.toggleMenu': 'Mostrar u ocultar el menú',
    'header.poweredBy': 'Powered by',
    'layout.closeMenu': 'Cerrar menú',
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
    'login.showPassword': 'Show password',
    'login.hidePassword': 'Hide password',
    'login.split.heroDescription':
      'Sign in to pick up where you left off.',
    'login.split.copyright': '© {year} Omnitok. All rights reserved.',

    // Pagination
    'pagination.ariaLabel': 'Pagination',
    'pagination.firstPage': 'First page',
    'pagination.lastPage': 'Last page',
    'pagination.previousPage': 'Previous page',
    'pagination.nextPage': 'Next page',
    'pagination.info': '{start}-{end} of {total}',
    'pagination.itemsPerPage': 'Items per page',

    // Shell v3 (Sidebar, BrandHeader, Layout)
    'sidebar.project': 'Project',
    'sidebar.chooseProject': 'Choose a project',
    'sidebar.changeProject': 'Change project',
    'sidebar.searchProject': 'Search project…',
    'sidebar.noProjects': 'No project matches',
    'sidebar.language': 'Language',
    'sidebar.signOut': 'Sign out',
    'header.toggleMenu': 'Show or hide the menu',
    'header.poweredBy': 'Powered by',
    'layout.closeMenu': 'Close menu',
  },
  pt: {
    // LoginPage
    'login.title': 'Entrar',
    'login.subtitle': 'Informe suas credenciais para continuar',
    'login.emailLabel': 'E-mail',
    'login.emailPlaceholder': 'voce@email.com',
    'login.passwordLabel': 'Senha',
    'login.passwordPlaceholder': '••••••••',
    'login.rememberMe': 'Lembrar de mim',
    'login.forgotPassword': 'Esqueceu sua senha?',
    'login.submit': 'Entrar',

    'login.split.heroTitle': 'Que bom ter você de volta',
    'login.split.heroDescription': 'Entre para continuar de onde parou.',
    'login.showPassword': 'Mostrar senha',
    'login.hidePassword': 'Ocultar senha',
    'login.split.copyright': '© {year} Omnitok. Todos os direitos reservados.',

    // Pagination
    'pagination.ariaLabel': 'Paginação',
    'pagination.firstPage': 'Primeira página',
    'pagination.lastPage': 'Última página',
    'pagination.previousPage': 'Página anterior',
    'pagination.nextPage': 'Próxima página',
    'pagination.info': '{start}-{end} de {total}',
    'pagination.itemsPerPage': 'Itens por página',

    // Shell v3 (Sidebar, BrandHeader, Layout)
    'sidebar.project': 'Projeto',
    'sidebar.chooseProject': 'Escolher projeto',
    'sidebar.changeProject': 'Trocar de projeto',
    'sidebar.searchProject': 'Buscar projeto…',
    'sidebar.noProjects': 'Nenhum projeto corresponde',
    'sidebar.language': 'Idioma',
    'sidebar.signOut': 'Sair',
    'header.toggleMenu': 'Mostrar ou ocultar o menu',
    'header.poweredBy': 'Powered by',
    'layout.closeMenu': 'Fechar menu',
  },
};
