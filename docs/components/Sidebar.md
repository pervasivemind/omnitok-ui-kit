# Sidebar Component

Componente de barra lateral de navegación colapsable con soporte para jerarquías anidadas, badges, iconos y diseño moderno.

## Características

- ✅ Navegación jerárquica (multi-nivel)
- ✅ Colapsable con animaciones suaves
- ✅ Badges para notificaciones
- ✅ Iconos personalizables
- ✅ Estado activo con gradiente
- ✅ Logo personalizable (expandido y colapsado)
- ✅ Footer personalizable
- ✅ Responsive design
- ✅ Accesibilidad completa
- ✅ Transiciones suaves
- ✅ Scroll interno optimizado

## Instalación

```bash
npm install @omnitok/core lucide-react
```

## Uso Básico

```tsx
import { Sidebar } from '@omnitok/core';
import { Home, Users, Settings, FileText } from 'lucide-react';

const items = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    icon: <Home />,
    href: '/dashboard',
    active: true,
  },
  {
    id: 'users',
    label: 'Usuarios',
    icon: <Users />,
    href: '/users',
    badge: '12',
  },
  {
    id: 'reports',
    label: 'Reportes',
    icon: <FileText />,
    children: [
      { id: 'sales', label: 'Ventas', href: '/reports/sales' },
      { id: 'analytics', label: 'Analíticas', href: '/reports/analytics' },
    ],
  },
  {
    id: 'settings',
    label: 'Configuración',
    icon: <Settings />,
    href: '/settings',
  },
];

function App() {
  return (
    <Sidebar
      items={items}
      systemName="ADMIN PANEL"
    />
  );
}
```

## Props

### Sidebar Props

| Prop | Tipo | Descripción | Por defecto |
|------|------|-------------|-------------|
| `items` | `SidebarItem[]` | Items de navegación | **Requerido** |
| `logo` | `ReactNode` | Logo expandido | - |
| `logoCollapsed` | `ReactNode` | Logo colapsado | `logo` |
| `systemName` | `string` | Nombre del sistema bajo el logo | - |
| `footer` | `ReactNode` | Contenido del footer | - |
| `collapsed` | `boolean` | Estado colapsado | `false` |
| `onCollapsedChange` | `(collapsed: boolean) => void` | Callback al cambiar estado | - |
| `collapsible` | `boolean` | Permitir colapsar | `true` |
| `activeId` | `string` | ID del item activo | - |
| `onItemClick` | `(item: SidebarItem) => void` | Callback al hacer click | - |
| `className` | `string` | Clases CSS adicionales | - |

### SidebarItem Interface

```typescript
interface SidebarItem {
  /** Identificador único */
  id: string;
  /** Texto a mostrar */
  label: string;
  /** Componente de icono */
  icon?: ReactNode;
  /** URL de navegación */
  href?: string;
  /** Callback al hacer click */
  onClick?: () => void;
  /** Items hijos (subitems) */
  children?: SidebarItem[];
  /** Badge (número o texto) */
  badge?: string | number;
  /** Estado activo */
  active?: boolean;
}
```

## Ejemplos Completos

### Sidebar con control de estado

```tsx
import { Sidebar } from '@omnitok/core';
import { useState } from 'react';
import { 
  Home, 
  Users, 
  Settings, 
  FileText, 
  BarChart,
  MessageSquare 
} from 'lucide-react';

function App() {
  const [collapsed, setCollapsed] = useState(false);
  const [activeId, setActiveId] = useState('dashboard');

  const items = [
    {
      id: 'dashboard',
      label: 'Dashboard',
      icon: <Home />,
      href: '/dashboard',
    },
    {
      id: 'users',
      label: 'Usuarios',
      icon: <Users />,
      href: '/users',
      badge: 12,
    },
    {
      id: 'reports',
      label: 'Reportes',
      icon: <FileText />,
      children: [
        { id: 'sales', label: 'Ventas', href: '/reports/sales' },
        { id: 'analytics', label: 'Analíticas', href: '/reports/analytics' },
      ],
    },
    {
      id: 'charts',
      label: 'Gráficos',
      icon: <BarChart />,
      href: '/charts',
    },
    {
      id: 'messages',
      label: 'Mensajes',
      icon: <MessageSquare />,
      href: '/messages',
      badge: '3',
    },
    {
      id: 'settings',
      label: 'Configuración',
      icon: <Settings />,
      href: '/settings',
    },
  ];

  const handleItemClick = (item) => {
    setActiveId(item.id);
    console.log('Navegando a:', item.href);
  };

  return (
    <Sidebar
      items={items}
      collapsed={collapsed}
      onCollapsedChange={setCollapsed}
      activeId={activeId}
      onItemClick={handleItemClick}
      logo={<img src="/logo.svg" alt="Logo" className="h-8" />}
      logoCollapsed={<img src="/icon.svg" alt="Icon" className="h-6" />}
      systemName="ADMIN PANEL"
    />
  );
}
```

### Con Logo y Footer Personalizados

```tsx
<Sidebar
  items={items}
  logo={
    <div className="flex items-center gap-2">
      <img src="/logo.svg" alt="Logo" className="h-8" />
      <span className="font-bold text-lg">Omnitok</span>
    </div>
  }
  logoCollapsed={
    <img src="/icon.svg" alt="Icon" className="h-8" />
  }
  systemName="ANALYTICS"
  footer={
    <div className="flex items-center gap-3">
      <img 
        src="/avatar.jpg" 
        alt="User" 
        className="w-8 h-8 rounded-full"
      />
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-white truncate">
          Juan Pérez
        </p>
        <p className="text-xs text-white/60 truncate">
          juan@example.com
        </p>
      </div>
    </div>
  }
/>
```

### Navegación con React Router

```tsx
import { useNavigate, useLocation } from 'react-router-dom';

function AppSidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  const items = [
    {
      id: 'dashboard',
      label: 'Dashboard',
      icon: <Home />,
      href: '/dashboard',
      active: location.pathname === '/dashboard',
    },
    {
      id: 'users',
      label: 'Usuarios',
      icon: <Users />,
      href: '/users',
      active: location.pathname.startsWith('/users'),
    },
  ];

  const handleItemClick = (item) => {
    if (item.href) {
      navigate(item.href);
    }
  };

  return (
    <Sidebar
      items={items}
      onItemClick={handleItemClick}
    />
  );
}
```

### Navegación con Next.js

```tsx
import { useRouter } from 'next/router';
import Link from 'next/link';

function AppSidebar() {
  const router = useRouter();

  const items = [
    {
      id: 'dashboard',
      label: 'Dashboard',
      icon: <Home />,
      href: '/dashboard',
      active: router.pathname === '/dashboard',
    },
    {
      id: 'users',
      label: 'Usuarios',
      icon: <Users />,
      href: '/users',
      active: router.pathname.startsWith('/users'),
    },
  ];

  const handleItemClick = (item) => {
    if (item.href) {
      router.push(item.href);
    }
  };

  return (
    <Sidebar
      items={items}
      onItemClick={handleItemClick}
    />
  );
}
```

### Con Navegación Anidada Compleja

```tsx
const items = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    icon: <Home />,
    href: '/dashboard',
  },
  {
    id: 'ecommerce',
    label: 'E-commerce',
    icon: <ShoppingCart />,
    children: [
      {
        id: 'products',
        label: 'Productos',
        href: '/ecommerce/products',
        badge: '156',
      },
      {
        id: 'orders',
        label: 'Pedidos',
        href: '/ecommerce/orders',
        badge: '23',
      },
      {
        id: 'customers',
        label: 'Clientes',
        href: '/ecommerce/customers',
      },
    ],
  },
  {
    id: 'reports',
    label: 'Reportes',
    icon: <FileText />,
    children: [
      {
        id: 'sales',
        label: 'Ventas',
        children: [
          { id: 'daily', label: 'Diarias', href: '/reports/sales/daily' },
          { id: 'monthly', label: 'Mensuales', href: '/reports/sales/monthly' },
        ],
      },
      {
        id: 'analytics',
        label: 'Analíticas',
        href: '/reports/analytics',
      },
    ],
  },
];
```

## Layout Completo

### Con Header y Content

```tsx
import { Sidebar } from '@omnitok/core';
import { useState } from 'react';

function Layout({ children }) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="flex h-screen">
      <Sidebar
        items={items}
        collapsed={collapsed}
        onCollapsedChange={setCollapsed}
      />
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="h-14 border-b bg-white px-6 flex items-center">
          <h1 className="text-xl font-bold">Dashboard</h1>
        </header>
        <main className="flex-1 overflow-auto p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
```

### Responsive con Mobile Menu

```tsx
import { Sidebar } from '@omnitok/core';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

function ResponsiveLayout({ children }) {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="flex h-screen">
      {/* Desktop Sidebar */}
      <div className="hidden md:block">
        <Sidebar
          items={items}
          collapsed={collapsed}
          onCollapsedChange={setCollapsed}
        />
      </div>

      {/* Mobile Sidebar */}
      {mobileOpen && (
        <>
          <div 
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
            onClick={() => setMobileOpen(false)}
          />
          <div className="fixed inset-y-0 left-0 z-50 md:hidden">
            <Sidebar items={items} collapsible={false} />
          </div>
        </>
      )}

      {/* Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="h-14 border-b bg-white px-4 flex items-center gap-4">
          <button 
            className="md:hidden p-2"
            onClick={() => setMobileOpen(true)}
          >
            <Menu className="w-5 h-5" />
          </button>
          <h1 className="text-xl font-bold">Dashboard</h1>
        </header>
        <main className="flex-1 overflow-auto p-4 md:p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
```

## Estilos Personalizados

### Personalizar colores del sidebar

```tsx
// tailwind.config.ts
export default {
  theme: {
    extend: {
      colors: {
        sidebar: '#1E293B',  // Color de fondo
        primary: '#3B82F6',  // Color del gradiente activo
        accent: '#8B5CF6',   // Color secundario del gradiente
      },
    },
  },
};
```

### Personalizar el gradiente activo

```css
/* global.css */
.gradient-active {
  background: linear-gradient(
    135deg, 
    rgba(59, 130, 246, 0.8) 0%, 
    rgba(139, 92, 246, 0.8) 100%
  );
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
}
```

## Persistencia del Estado

### Guardar estado colapsado en localStorage

```tsx
import { useState, useEffect } from 'react';

function useSidebarState() {
  const [collapsed, setCollapsed] = useState(() => {
    const saved = localStorage.getItem('sidebar-collapsed');
    return saved === 'true';
  });

  useEffect(() => {
    localStorage.setItem('sidebar-collapsed', String(collapsed));
  }, [collapsed]);

  return [collapsed, setCollapsed];
}

// Usar en tu componente
function App() {
  const [collapsed, setCollapsed] = useSidebarState();

  return (
    <Sidebar
      items={items}
      collapsed={collapsed}
      onCollapsedChange={setCollapsed}
    />
  );
}
```

## Accesibilidad

El componente incluye:
- Roles ARIA apropiados (`navigation`)
- Labels descriptivos para botones
- Navegación con teclado
- Estados focus visibles
- Soporte para lectores de pantalla

## Best Practices

1. **IDs únicos**: Asegúrate de que cada item tenga un `id` único
2. **Iconos consistentes**: Usa el mismo conjunto de iconos (recomendado: lucide-react)
3. **Badges**: Usa badges para notificaciones importantes, pero no abuses
4. **Jerarquía**: Limita la profundidad de anidación a 2-3 niveles máximo
5. **Estado activo**: Mantén sincronizado el estado activo con la ruta actual
6. **Performance**: Para listas muy grandes, considera virtualización

## Notas Técnicas

- Ancho expandido: `256px` (16rem / w-64)
- Ancho colapsado: `64px` (4rem / w-16)
- Altura de header: `56px` (3.5rem / h-14)
- Transición: `300ms` ease-in-out
- Z-index del footer: mantiene el footer visible durante scroll

## Soporte de Navegadores

- Chrome/Edge (últimas 2 versiones)
- Firefox (últimas 2 versiones)
- Safari (últimas 2 versiones)
- Mobile Safari (iOS 12+)
- Chrome Mobile (Android 8+)
