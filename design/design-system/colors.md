# Sistema de Colores

Sistema de colores para aplicaciones administrativas internas basado en la identidad visual de Omnitok.

## Paleta Principal

### Colores de Marca

| Nombre | Variable CSS | Hex | Uso |
|--------|--------------|-----|-----|
| Sidebar | `--color-sidebar` | `#211f4b` | Fondo del sidebar izquierdo |
| Primary | `--color-primary` | `#4D4A9D` | Acciones principales, enlaces |
| Primary Dark | `--color-primary-dark` | `#3a3878` | Hover en elementos primarios |
| Primary Light | `--color-primary-light` | `#6663b3` | Fondos sutiles, badges |
| Accent | `--color-accent` | `#FF177B` | CTAs destacados, notificaciones importantes |
| Accent Dark | `--color-accent-dark` | `#d91065` | Hover en elementos accent |

### Colores Neutros

| Nombre | Variable CSS | Hex | Uso |
|--------|--------------|-----|-----|
| White | `--color-white` | `#FFFFFF` | Fondos principales, texto sobre oscuro |
| Gray 50 | `--color-gray-50` | `#FAFAFA` | Fondos alternativos |
| Gray 100 | `--color-gray-100` | `#F5F5F5` | Fondos de cards, hover |
| Gray 200 | `--color-gray-200` | `#E5E5E5` | Bordes, divisores |
| Gray 300 | `--color-gray-300` | `#D4D4D4` | Bordes inputs |
| Gray 400 | `--color-gray-400` | `#A3A3A3` | Texto placeholder |
| Gray 500 | `--color-gray-500` | `#737373` | Texto secundario |
| Gray 600 | `--color-gray-600` | `#555555` | Texto principal |
| Gray 700 | `--color-gray-700` | `#404040` | Títulos |
| Gray 800 | `--color-gray-800` | `#262626` | Texto énfasis |
| Gray 900 | `--color-gray-900` | `#171717` | Texto máximo contraste |

### Colores Semánticos

| Nombre | Variable CSS | Hex | Uso |
|--------|--------------|-----|-----|
| Success | `--color-success` | `#22C55E` | Confirmaciones, estados exitosos |
| Success Light | `--color-success-light` | `#DCFCE7` | Fondos de alertas success |
| Error | `--color-error` | `#EF4444` | Errores, acciones destructivas |
| Error Light | `--color-error-light` | `#FEE2E2` | Fondos de alertas error |
| Warning | `--color-warning` | `#F59E0B` | Advertencias |
| Warning Light | `--color-warning-light` | `#FEF3C7` | Fondos de alertas warning |
| Info | `--color-info` | `#3B82F6` | Información, ayuda |
| Info Light | `--color-info-light` | `#DBEAFE` | Fondos de alertas info |

## Variables CSS

```css
:root {
  /* Marca */
  --color-sidebar: #211f4b;
  --color-primary: #4D4A9D;
  --color-primary-dark: #3a3878;
  --color-primary-light: #6663b3;
  --color-accent: #FF177B;
  --color-accent-dark: #d91065;
  
  /* Neutros */
  --color-white: #FFFFFF;
  --color-gray-50: #FAFAFA;
  --color-gray-100: #F5F5F5;
  --color-gray-200: #E5E5E5;
  --color-gray-300: #D4D4D4;
  --color-gray-400: #A3A3A3;
  --color-gray-500: #737373;
  --color-gray-600: #555555;
  --color-gray-700: #404040;
  --color-gray-800: #262626;
  --color-gray-900: #171717;
  
  /* Semánticos */
  --color-success: #22C55E;
  --color-success-light: #DCFCE7;
  --color-error: #EF4444;
  --color-error-light: #FEE2E2;
  --color-warning: #F59E0B;
  --color-warning-light: #FEF3C7;
  --color-info: #3B82F6;
  --color-info-light: #DBEAFE;
  
  /* Aliases semánticos */
  --color-background: var(--color-white);
  --color-background-alt: var(--color-gray-50);
  --color-surface: var(--color-white);
  --color-border: var(--color-gray-200);
  --color-text-primary: var(--color-gray-700);
  --color-text-secondary: var(--color-gray-500);
  --color-text-muted: var(--color-gray-400);
}
```

## Uso del Sidebar

El sidebar siempre usa `#211f4b` como fondo con texto blanco:

```css
.sidebar {
  background-color: var(--color-sidebar);
  color: var(--color-white);
}

.sidebar-item {
  color: rgba(255, 255, 255, 0.7);
}

.sidebar-item:hover,
.sidebar-item.active {
  background-color: rgba(255, 255, 255, 0.1);
  color: var(--color-white);
}

.sidebar-item.active {
  border-left: 3px solid var(--color-accent);
}
```

## Contraste y Accesibilidad

- Texto sobre `--color-sidebar`: usar siempre `--color-white` o `rgba(255,255,255,0.7)`
- Texto sobre fondos claros: usar `--color-gray-600` o más oscuro
- Botones primarios: fondo `--color-primary`, texto `--color-white`
- Botones accent: fondo `--color-accent`, texto `--color-white`
- Todos los colores cumplen WCAG AA para contraste

## Estados de Interacción

```css
/* Hover */
.btn-primary:hover {
  background-color: var(--color-primary-dark);
}

/* Focus */
.btn-primary:focus {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}

/* Disabled */
.btn-primary:disabled {
  background-color: var(--color-gray-300);
  color: var(--color-gray-500);
  cursor: not-allowed;
}
```
