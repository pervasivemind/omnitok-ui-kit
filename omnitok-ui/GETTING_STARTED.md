# Getting Started - Omnitok UI Kit

Guía completa para integrar Omnitok UI Kit en tu proyecto.

## 📋 Prerequisitos

- Node.js 18 o superior
- npm, pnpm o yarn
- React 18 o superior

## 📦 Instalación

### 1. Instalar el paquete

```bash
npm install @omnitok/ui lucide-react
```

> **Nota**: `lucide-react` es requerido para los íconos.

### 2. Importar estilos globales

En tu archivo principal (`main.tsx`, `App.tsx` o `index.tsx`):

```tsx
import '@omnitok/ui/styles.css';
```

### 3. Configurar Tailwind (Opcional)

Si tu proyecto usa Tailwind CSS, extiende la configuración:

```js
// tailwind.config.js
import { tailwindConfig } from '@omnitok/ui/tailwind';

export default {
  ...tailwindConfig,
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@omnitok/ui/dist/**/*.js',
  ],
};
```

## 🎨 Assets Requeridos

Coloca los logos de Omnitok en tu carpeta `public/`:

```
public/
├── logo_largo_blanco.png   # Sidebar expandido (horizontal blanco)
├── logo_cuadrado_color.png # Sidebar colapsado (cuadrado color)
└── logo_largo_color.png    # Login (horizontal color)
```

> Los logos están disponibles en la carpeta `legacy/figma/` del repositorio.

## 🏗️ Estructura Básica

### Layout Completo

```tsx
import { Layout } from '@omnitok/ui';
import { Home, Users, Settings, BarChart3 } from 'lucide-react';

function App() {
  const sidebarItems = [
    { 
      id: 'dashboard', 
      label: 'Dashboard', 
      icon: <Home size={20} />,
      href: '/dashboard'
    },
    { 
      id: 'users', 
      label: 'Usuarios', 
      icon: <Users size={20} />,
      badge: 5,
      href: '/users'
    },
    { 
      id: 'analytics', 
      label: 'Analítica', 
      icon: <BarChart3 size={20} />,
      href: '/analytics'
    },
    { 
      id: 'settings', 
      label: 'Configuración', 
      icon: <Settings size={20} />,
      href: '/settings'
    },
  ];

  return (
    <Layout
      sidebarItems={sidebarItems}
      logo={<img src="/logo_largo_blanco.png" alt="Omnitok" />}
      logoCollapsed={<img src="/logo_cuadrado_color.png" alt="Omnitok" />}
      systemName="Mi Sistema Admin"
      activeSidebarId="dashboard"
      headerTitle="Dashboard"
      headerSubtitle="Resumen general del sistema"
      user={{
        name: 'Juan Pérez',
        role: 'Administrador',
        avatar: '/avatar.jpg', // opcional
      }}
      onUserClick={() => console.log('User clicked')}
      notificationCount={3}
      onNotificationClick={() => console.log('Notifications')}
    >
      {/* Tu contenido aquí */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>KPI 1</Card>
        <Card>KPI 2</Card>
        <Card>KPI 3</Card>
      </div>
    </Layout>
  );
}
```

### Formularios

```tsx
import { Card, CardHeader, CardBody, CardFooter, Input, Select, Button } from '@omnitok/ui';
import { Save, X } from 'lucide-react';

function ProductForm() {
  return (
    <Card noPadding>
      <CardHeader>Nuevo Producto</CardHeader>
      <CardBody className="space-y-4">
        <Input
          label="Nombre del Producto"
          placeholder="Ej: Laptop HP"
          required
        />
        <Select
          label="Categoría"
          options={[
            { value: 'electronics', label: 'Electrónica' },
            { value: 'clothing', label: 'Ropa' },
            { value: 'home', label: 'Hogar' },
          ]}
          required
        />
        <Input
          label="Precio"
          type="number"
          leftIcon={<span>$</span>}
          required
        />
      </CardBody>
      <CardFooter>
        <Button variant="ghost" leftIcon={<X size={18} />}>
          Cancelar
        </Button>
        <Button variant="primary" leftIcon={<Save size={18} />}>
          Guardar
        </Button>
      </CardFooter>
    </Card>
  );
}
```

### Tablas

```tsx
import { Table, Badge } from '@omnitok/ui';

function UsersList() {
  const columns = [
    {
      key: 'name',
      header: 'Usuario',
      accessor: 'name' as const,
    },
    {
      key: 'email',
      header: 'Email',
      accessor: 'email' as const,
    },
    {
      key: 'status',
      header: 'Estado',
      render: (row: User) => (
        <Badge variant={row.status === 'active' ? 'success' : 'neutral'}>
          {row.status === 'active' ? 'Activo' : 'Inactivo'}
        </Badge>
      ),
    },
  ];

  const data = [
    { id: 1, name: 'María García', email: 'maria@ejemplo.com', status: 'active' },
    { id: 2, name: 'Carlos López', email: 'carlos@ejemplo.com', status: 'inactive' },
  ];

  return (
    <Table
      columns={columns}
      data={data}
      rowKey="id"
      striped
      hoverable
    />
  );
}
```

### Login Page

```tsx
import { LoginPage } from '@omnitok/ui';

function Login() {
  const handleLogin = (email: string, password: string) => {
    console.log('Login:', email, password);
    // Tu lógica de autenticación
  };

  return (
    <LoginPage
      logo={<img src="/logo_largo_color.png" alt="Omnitok" />}
      logoWide={<img src="/logo_largo_color.png" alt="Omnitok" />}
      title="Iniciar Sesión"
      subtitle="Ingresa tus credenciales para continuar"
      variant="gradient" // o "split" o "centered"
      onLoginSubmit={handleLogin}
      onForgotPassword={() => console.log('Forgot password')}
    />
  );
}
```

## 🎯 Ejemplos Completos

Ver ejemplos completos en **Storybook > Examples**:

- **Dashboard** - Dashboard con KPIs, gráficos y actividad reciente
- **Forms** - Formularios de productos y usuarios
- **Tables** - Listados con filtros, búsqueda y acciones
- **AI Analytics** - Dashboard con panel de insights IA

## 🐳 Deploy con Docker

### Storybook en Docker

```bash
# Build
docker build -t omnitok-ui-storybook .

# Run
docker run -p 8080:80 omnitok-ui-storybook

# Acceder
open http://localhost:8080
```

### Docker Compose

```bash
docker-compose up -d
```

## 🚀 Publicar en NPM (Para Maintainers)

```bash
# Build core package
cd packages/core
pnpm build

# Version bump
npm version patch  # o minor o major

# Publish
npm publish --access public
```

## 🎨 Personalización

### CSS Variables

Puedes sobrescribir variables CSS en tu proyecto:

```css
:root {
  /* Sobrescribir colores si es necesario */
  --color-primary: #4D4A9D;
  --color-accent: #FF177B;
  --sidebar-bg: #211f4b;
}
```

### Tailwind Customization

```js
// tailwind.config.js
export default {
  theme: {
    extend: {
      colors: {
        primary: '#4D4A9D',
        accent: '#FF177B',
        sidebar: '#211f4b',
      },
    },
  },
};
```

## ❓ FAQ

### ¿Puedo usar solo algunos componentes?

Sí, todos los componentes son tree-shakeable:

```tsx
// Solo importa lo que necesitas
import { Button } from '@omnitok/ui';
```

### ¿Funciona con Next.js?

Sí, compatible con Next.js 13+. Asegúrate de importar estilos en `_app.tsx` o `layout.tsx`.

### ¿Funciona con Vite?

Sí, totalmente compatible con Vite.

### ¿Puedo modificar los estilos?

Sí, todos los componentes aceptan `className` para personalización adicional.

### ¿Necesito instalar Tailwind?

No es necesario instalar Tailwind en tu proyecto. Los estilos están pre-compilados en `@omnitok/ui/styles.css`.

## 🐛 Problemas Conocidos

Si tienes problemas:

1. Asegúrate de importar `@omnitok/ui/styles.css`
2. Verifica que tienes `lucide-react` instalado
3. Revisa la consola para errores de importación
4. Consulta los ejemplos en Storybook

## 📞 Soporte

- **Issues**: https://github.com/pervasivemind/omnitok-ui-kit/issues
- **Documentación**: https://pervasivemind.github.io/omnitok-ui-kit
- **Email**: soporte@omnitok.com

---

**Hecho con ❤️ por el equipo de Omnitok**
