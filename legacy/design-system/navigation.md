# Navegación

Componentes de navegación para sistemas administrativos con sidebar izquierdo obligatorio.

## Sidebar

El sidebar es el elemento principal de navegación. Siempre ubicado a la izquierda con fondo `#211f4b`.

### Características clave del Sidebar

- **Logo centrado** en el header con el nombre del sistema debajo
- **Botón de colapsar** siempre visible en estado expandido (esquina superior derecha)
- **Logo expandido**: `logo_largo_blanco.png` (logo horizontal blanco)
- **Logo colapsado**: `logo_cuadrado_color.png` (logo cuadrado con color)
- **Elemento activo**: Gradiente `linear-gradient(90deg, #FF177B 0%, #4D4A9D 100%)` con bordes redondeados
- **Ancho**: 256px expandido, 64px colapsado
- **Íconos**: Siempre se reserva espacio de 20x20px para mantener alineación

### Estructura del Sidebar

```html
<aside class="sidebar">
  <!-- Logo + Nombre del Sistema (centrados) -->
  <div class="sidebar-header">
    <div class="sidebar-logo-container">
      <img src="logo_largo_blanco.png" alt="Logo" class="sidebar-logo-expanded">
      <span class="sidebar-system-name">Nombre del Sistema</span>
    </div>
    <button class="sidebar-toggle" aria-label="Colapsar sidebar">
      <!-- Icon collapse -->
    </button>
  </div>
  
  <!-- Navegación principal -->
  <nav class="sidebar-nav">
    <div class="sidebar-section">
      <span class="sidebar-section-title">Principal</span>
      <ul class="sidebar-menu">
        <li class="sidebar-item active">
          <a href="#">
            <span class="sidebar-icon"><!-- icon --></span>
            <span class="sidebar-text">Dashboard</span>
          </a>
        </li>
        <li class="sidebar-item">
          <a href="#">
            <span class="sidebar-icon"><!-- icon --></span>
            <span class="sidebar-text">Productos</span>
            <span class="sidebar-badge">12</span>
          </a>
        </li>
        <!-- más items -->
      </ul>
    </div>
    
    <div class="sidebar-section">
      <span class="sidebar-section-title">Configuración</span>
      <ul class="sidebar-menu">
        <!-- items de configuración -->
      </ul>
    </div>
  </nav>
  
  <!-- Footer del sidebar -->
  <div class="sidebar-footer">
    <div class="sidebar-user">
      <div class="avatar avatar-sm">PM</div>
      <div class="sidebar-user-info">
        <span class="sidebar-user-name">Pedro Martínez</span>
        <span class="sidebar-user-role">Administrador</span>
      </div>
    </div>
  </div>
</aside>
```

### CSS del Sidebar

```css
.sidebar {
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  width: var(--sidebar-width);
  background-color: #211f4b;
  display: flex;
  flex-direction: column;
  z-index: var(--z-sidebar);
  transition: width 0.2s ease;
}

/* Header */
.sidebar-header {
  height: 64px;
  padding: 0 1rem;
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.sidebar-logo-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  min-width: 0;
}

.sidebar-logo-expanded {
  height: 24px;
  max-width: 140px;
  object-fit: contain;
}

.sidebar-logo-collapsed {
  width: 32px;
  height: 32px;
  object-fit: contain;
}

.sidebar-system-name {
  font-size: 11px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.5);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-top: 4px;
  text-align: center;
}

.sidebar-toggle {
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.7);
  border-radius: var(--radius-md);
  cursor: pointer;
  background: transparent;
  border: none;
}

.sidebar-toggle:hover {
  background-color: rgba(255, 255, 255, 0.1);
  color: #FFFFFF;
}

/* Navegación */
.sidebar-nav {
  flex: 1;
  overflow-y: auto;
  padding: var(--spacing-md) 0;
}

.sidebar-section {
  margin-bottom: var(--spacing-lg);
}

.sidebar-section-title {
  display: block;
  padding: var(--spacing-sm) var(--spacing-lg);
  font-size: var(--text-xs);
  font-weight: var(--font-semibold);
  text-transform: uppercase;
  letter-spacing: var(--tracking-wide);
  color: rgba(255, 255, 255, 0.4);
}

.sidebar-menu {
  list-style: none;
  padding: 0;
  margin: 0;
}

.sidebar-item a {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  padding: var(--spacing-sm) var(--spacing-md);
  margin: 2px 8px;
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  font-size: var(--text-sm);
  font-weight: var(--font-medium);
  transition: all 0.15s ease;
  border-radius: var(--radius-md);
}

.sidebar-item a:hover {
  background-color: rgba(255, 255, 255, 0.08);
  color: #FFFFFF;
}

.sidebar-item.active a {
  background: linear-gradient(90deg, #FF177B 0%, #4D4A9D 100%);
  border-radius: 8px;
  color: #FFFFFF;
  font-weight: 500;
}

.sidebar-icon {
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

/* IMPORTANTE: Siempre se reserva espacio para el ícono, 
   incluso si no existe, para mantener alineación */
.sidebar-item a::before {
  content: '';
  width: 20px;
  height: 20px;
  flex-shrink: 0;
}

.sidebar-text {
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.sidebar-badge {
  background-color: var(--color-accent);
  color: #FFFFFF;
  font-size: var(--text-xs);
  font-weight: var(--font-semibold);
  padding: 2px 8px;
  border-radius: var(--radius-full);
}

/* Footer */
.sidebar-footer {
  padding: var(--spacing-md) var(--spacing-lg);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.sidebar-user {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
}

.sidebar-user-info {
  display: flex;
  flex-direction: column;
}

.sidebar-user-name {
  font-size: var(--text-sm);
  font-weight: var(--font-medium);
  color: #FFFFFF;
}

.sidebar-user-role {
  font-size: var(--text-xs);
  color: rgba(255, 255, 255, 0.5);
}

/* Sidebar colapsado */
.sidebar.collapsed {
  width: 64px; /* var(--sidebar-width-collapsed) */
}

.sidebar.collapsed .sidebar-text,
.sidebar.collapsed .sidebar-section-title,
.sidebar.collapsed .sidebar-user-info,
.sidebar.collapsed .sidebar-badge,
.sidebar.collapsed .sidebar-system-name {
  display: none;
}

.sidebar.collapsed .sidebar-item a {
  justify-content: center;
  padding: var(--spacing-md);
}

.sidebar.collapsed .sidebar-header {
  justify-content: center;
  padding: 0.5rem;
}

.sidebar.collapsed .sidebar-logo-container {
  align-items: center;
}

.sidebar.collapsed .sidebar-logo-expanded {
  display: none;
}

.sidebar.collapsed .sidebar-toggle {
  display: none; /* El logo cuadrado actúa como botón de expandir */
}

/* En estado colapsado, el logo cuadrado es clickeable */
.sidebar.collapsed .sidebar-logo-collapsed {
  display: block;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 0.5rem;
  transition: background-color 0.2s;
}

.sidebar.collapsed .sidebar-logo-collapsed:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
```

## Header / Topbar

```html
<header class="header">
  <div class="header-left">
    <nav class="breadcrumb">
      <a href="#" class="breadcrumb-item">Dashboard</a>
      <span class="breadcrumb-separator">/</span>
      <a href="#" class="breadcrumb-item">Productos</a>
      <span class="breadcrumb-separator">/</span>
      <span class="breadcrumb-item current">Editar</span>
    </nav>
  </div>
  
  <div class="header-right">
    <div class="header-search">
      <input type="search" placeholder="Buscar..." class="search-input">
    </div>
    
    <button class="header-icon-btn">
      <!-- Notifications icon -->
      <span class="notification-dot"></span>
    </button>
    
    <div class="header-user">
      <div class="avatar avatar-sm">PM</div>
      <span class="header-user-name">Pedro</span>
    </div>
  </div>
</header>
```

### CSS del Header

```css
.header {
  height: var(--header-height);
  background-color: var(--color-white);
  border-bottom: 1px solid var(--color-border);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 var(--content-padding);
  position: sticky;
  top: 0;
  z-index: var(--z-sticky);
}

.header-left {
  display: flex;
  align-items: center;
  gap: var(--spacing-lg);
}

.header-right {
  display: flex;
  align-items: center;
  gap: var(--spacing-lg);
}

.header-search {
  position: relative;
}

.search-input {
  width: 280px;
  height: 40px;
  padding: 0 var(--spacing-md);
  padding-left: 40px;
  font-size: var(--text-sm);
  background-color: var(--color-gray-50);
  border: 1px solid transparent;
  border-radius: var(--radius-md);
}

.search-input:focus {
  background-color: var(--color-white);
  border-color: var(--color-primary);
  outline: none;
}

.header-icon-btn {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-md);
  color: var(--color-gray-500);
  background: transparent;
  border: none;
  cursor: pointer;
  position: relative;
}

.header-icon-btn:hover {
  background-color: var(--color-gray-100);
  color: var(--color-gray-700);
}

.notification-dot {
  position: absolute;
  top: 8px;
  right: 8px;
  width: 8px;
  height: 8px;
  background-color: var(--color-accent);
  border-radius: var(--radius-full);
}

.header-user {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  cursor: pointer;
  padding: var(--spacing-xs) var(--spacing-sm);
  border-radius: var(--radius-md);
}

.header-user:hover {
  background-color: var(--color-gray-100);
}

.header-user-name {
  font-size: var(--text-sm);
  font-weight: var(--font-medium);
  color: var(--color-gray-700);
}
```

## Breadcrumbs

```css
.breadcrumb {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
}

.breadcrumb-item {
  font-size: var(--text-sm);
  color: var(--color-gray-500);
  text-decoration: none;
}

.breadcrumb-item:hover:not(.current) {
  color: var(--color-primary);
}

.breadcrumb-item.current {
  color: var(--color-gray-700);
  font-weight: var(--font-medium);
}

.breadcrumb-separator {
  color: var(--color-gray-400);
  font-size: var(--text-sm);
}
```

## Tabs

Los tabs tienen 3 variantes: `default`, `pills` y `underline`. Todos usan colores más vibrantes para el estado activo.

```html
<!-- Variante Pills (recomendada) -->
<div class="tabs tabs-pills">
  <button class="tab active">General</button>
  <button class="tab">Configuración</button>
  <button class="tab">Permisos</button>
  <button class="tab" disabled>Avanzado</button>
</div>
```

```css
/* Variante Default */
.tabs {
  display: flex;
  gap: 0.25rem;
  background-color: rgba(77, 74, 157, 0.1);
  padding: 0.25rem;
  border-radius: 0.5rem;
  margin-bottom: var(--spacing-lg);
}

.tab {
  padding: var(--spacing-sm) var(--spacing-lg);
  font-size: var(--text-sm);
  font-weight: var(--font-medium);
  color: rgba(77, 74, 157, 0.7);
  background: transparent;
  border: none;
  border-radius: 0.375rem;
  cursor: pointer;
  transition: all 0.15s ease;
}

.tab:hover:not(:disabled) {
  color: #4D4A9D;
  background-color: rgba(255, 255, 255, 0.5);
}

.tab.active {
  background-color: #FFFFFF;
  color: #4D4A9D;
  font-weight: 600;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
}

/* Variante Pills */
.tabs-pills {
  background: transparent;
  gap: 0.5rem;
}

.tabs-pills .tab {
  border-radius: 9999px;
}

.tabs-pills .tab.active {
  background: linear-gradient(90deg, #FF177B 0%, #4D4A9D 100%);
  color: #FFFFFF;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

/* Variante Underline */
.tabs-underline {
  background: transparent;
  border-bottom: 1px solid rgba(77, 74, 157, 0.2);
  padding: 0;
}

.tabs-underline .tab {
  border-bottom: 2px solid transparent;
  border-radius: 0;
  margin-bottom: -1px;
}

.tabs-underline .tab.active {
  background: transparent;
  border-bottom-color: #FF177B;
  color: #4D4A9D;
  font-weight: 600;
}

.tab:disabled {
  color: var(--color-gray-300);
  cursor: not-allowed;
  opacity: 0.5;
}
```

## Pagination

```html
<nav class="pagination">
  <button class="pagination-btn" disabled>Anterior</button>
  <div class="pagination-pages">
    <button class="pagination-page active">1</button>
    <button class="pagination-page">2</button>
    <button class="pagination-page">3</button>
    <span class="pagination-ellipsis">...</span>
    <button class="pagination-page">10</button>
  </div>
  <button class="pagination-btn">Siguiente</button>
</nav>
```

```css
.pagination {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
}

.pagination-btn {
  padding: var(--spacing-sm) var(--spacing-md);
  font-size: var(--text-sm);
  font-weight: var(--font-medium);
  color: var(--color-gray-700);
  background-color: var(--color-white);
  border: 1px solid var(--color-gray-300);
  border-radius: var(--radius-md);
  cursor: pointer;
}

.pagination-btn:hover:not(:disabled) {
  background-color: var(--color-gray-50);
  border-color: var(--color-gray-400);
}

.pagination-btn:disabled {
  color: var(--color-gray-400);
  cursor: not-allowed;
}

.pagination-pages {
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);
}

.pagination-page {
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--text-sm);
  color: var(--color-gray-700);
  background: transparent;
  border: none;
  border-radius: var(--radius-md);
  cursor: pointer;
}

.pagination-page:hover {
  background-color: var(--color-gray-100);
}

.pagination-page.active {
  background-color: var(--color-primary);
  color: var(--color-white);
}

.pagination-ellipsis {
  color: var(--color-gray-400);
  padding: 0 var(--spacing-xs);
}
```

## Menú Contextual

Para acciones adicionales en items de lista o tabla:

```css
.context-menu {
  position: absolute;
  min-width: 180px;
  background-color: var(--color-white);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-lg);
  border: 1px solid var(--color-border);
  padding: var(--spacing-sm) 0;
  z-index: var(--z-dropdown);
}

.context-menu-item {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  padding: var(--spacing-sm) var(--spacing-md);
  font-size: var(--text-sm);
  color: var(--color-gray-700);
  cursor: pointer;
}

.context-menu-item:hover {
  background-color: var(--color-gray-50);
}

.context-menu-item.danger {
  color: var(--color-error);
}

.context-menu-item.danger:hover {
  background-color: var(--color-error-light);
}
```
