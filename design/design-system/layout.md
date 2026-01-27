# Layout y Estructura

Guía de layout para aplicaciones administrativas con patrón de sidebar izquierdo obligatorio.

## Estructura Principal

Todas las aplicaciones administrativas deben seguir este patrón:

```
┌─────────────────────────────────────────────────────────────┐
│ Sidebar │                    Header                         │
│ #211f4b │─────────────────────────────────────────────────── │
│         │                                                    │
│  Logo   │                    Content                         │
│         │                                                    │
│  Nav    │                                                    │
│  Items  │                                                    │
│         │                                                    │
│         │                                                    │
│         │                                                    │
│ ─────── │                                                    │
│ Footer  │                                                    │
└─────────────────────────────────────────────────────────────┘
```

## Variables CSS de Layout

```css
:root {
  /* Sidebar */
  --sidebar-width: 260px;
  --sidebar-width-collapsed: 72px;
  --sidebar-bg: #211f4b;
  
  /* Header */
  --header-height: 64px;
  
  /* Contenido */
  --content-max-width: 1440px;
  --content-padding: 24px;
  
  /* Espaciado */
  --spacing-xs: 4px;
  --spacing-sm: 8px;
  --spacing-md: 16px;
  --spacing-lg: 24px;
  --spacing-xl: 32px;
  --spacing-2xl: 48px;
  --spacing-3xl: 64px;
  
  /* Border Radius */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-xl: 16px;
  --radius-full: 9999px;
  
  /* Shadows */
  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
}
```

## Estructura HTML Base

```html
<div class="app-layout">
  <!-- Sidebar fijo a la izquierda -->
  <aside class="sidebar">
    <div class="sidebar-header">
      <img src="logo.svg" alt="Logo" class="sidebar-logo">
    </div>
    <nav class="sidebar-nav">
      <!-- Navigation items -->
    </nav>
    <div class="sidebar-footer">
      <!-- User info, settings -->
    </div>
  </aside>
  
  <!-- Contenido principal -->
  <div class="main-wrapper">
    <header class="header">
      <!-- Breadcrumb, search, user menu -->
    </header>
    <main class="content">
      <!-- Page content -->
    </main>
  </div>
</div>
```

## CSS del Layout Principal

```css
.app-layout {
  display: flex;
  min-height: 100vh;
  background-color: var(--color-gray-50);
}

/* Sidebar */
.sidebar {
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  width: var(--sidebar-width);
  background-color: var(--sidebar-bg);
  display: flex;
  flex-direction: column;
  z-index: 100;
  transition: width 0.2s ease;
}

.sidebar.collapsed {
  width: var(--sidebar-width-collapsed);
}

.sidebar-header {
  height: var(--header-height);
  display: flex;
  align-items: center;
  padding: 0 var(--spacing-lg);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.sidebar-nav {
  flex: 1;
  overflow-y: auto;
  padding: var(--spacing-md) 0;
}

.sidebar-footer {
  padding: var(--spacing-md) var(--spacing-lg);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

/* Main Wrapper */
.main-wrapper {
  flex: 1;
  margin-left: var(--sidebar-width);
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  transition: margin-left 0.2s ease;
}

.sidebar.collapsed + .main-wrapper {
  margin-left: var(--sidebar-width-collapsed);
}

/* Header */
.header {
  height: var(--header-height);
  background-color: var(--color-white);
  border-bottom: 1px solid var(--color-border);
  display: flex;
  align-items: center;
  padding: 0 var(--content-padding);
  position: sticky;
  top: 0;
  z-index: 50;
}

/* Content */
.content {
  flex: 1;
  padding: var(--content-padding);
  max-width: var(--content-max-width);
  width: 100%;
}
```

## Sistema de Grid

Usar CSS Grid para layouts de contenido:

```css
/* Grid de 12 columnas */
.grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: var(--spacing-lg);
}

.col-1 { grid-column: span 1; }
.col-2 { grid-column: span 2; }
.col-3 { grid-column: span 3; }
.col-4 { grid-column: span 4; }
.col-5 { grid-column: span 5; }
.col-6 { grid-column: span 6; }
.col-7 { grid-column: span 7; }
.col-8 { grid-column: span 8; }
.col-9 { grid-column: span 9; }
.col-10 { grid-column: span 10; }
.col-11 { grid-column: span 11; }
.col-12 { grid-column: span 12; }
```

## Breakpoints

```css
:root {
  --breakpoint-sm: 640px;
  --breakpoint-md: 768px;
  --breakpoint-lg: 1024px;
  --breakpoint-xl: 1280px;
  --breakpoint-2xl: 1536px;
}

/* Mobile: sidebar oculto */
@media (max-width: 1023px) {
  .sidebar {
    transform: translateX(-100%);
  }
  
  .sidebar.open {
    transform: translateX(0);
  }
  
  .main-wrapper {
    margin-left: 0;
  }
}

/* Tablet: sidebar colapsado */
@media (min-width: 1024px) and (max-width: 1279px) {
  .sidebar {
    width: var(--sidebar-width-collapsed);
  }
  
  .main-wrapper {
    margin-left: var(--sidebar-width-collapsed);
  }
}

/* Desktop: sidebar expandido */
@media (min-width: 1280px) {
  .sidebar {
    width: var(--sidebar-width);
  }
  
  .main-wrapper {
    margin-left: var(--sidebar-width);
  }
}
```

## Espaciado

Usar la escala de espaciado consistentemente:

| Variable | Valor | Uso |
|----------|-------|-----|
| `--spacing-xs` | 4px | Separación mínima entre elementos inline |
| `--spacing-sm` | 8px | Padding interno de badges, gaps pequeños |
| `--spacing-md` | 16px | Padding de botones, gaps de formularios |
| `--spacing-lg` | 24px | Padding de cards, separación de secciones |
| `--spacing-xl` | 32px | Separación entre grupos de contenido |
| `--spacing-2xl` | 48px | Separación de secciones principales |
| `--spacing-3xl` | 64px | Márgenes de página |

## Contenedores

```css
/* Card container */
.card {
  background-color: var(--color-white);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-sm);
  padding: var(--spacing-lg);
}

/* Section container */
.section {
  margin-bottom: var(--spacing-2xl);
}

/* Page header */
.page-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--spacing-xl);
}

.page-title {
  font-size: var(--text-3xl);
  font-weight: var(--font-bold);
  color: var(--color-gray-800);
}
```

## Z-Index Scale

```css
:root {
  --z-dropdown: 10;
  --z-sticky: 20;
  --z-fixed: 30;
  --z-modal-backdrop: 40;
  --z-modal: 50;
  --z-popover: 60;
  --z-tooltip: 70;
  --z-toast: 80;
  --z-sidebar: 100;
}
```
