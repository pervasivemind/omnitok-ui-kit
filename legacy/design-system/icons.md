# Iconografía

Sistema de iconos para aplicaciones administrativas.

## Librería Recomendada

### Lucide Icons (Recomendado)

Lucide es un fork de Feather Icons con más iconos y mejor mantenimiento. Es consistente, minimalista y perfecto para interfaces administrativas.

**Instalación:**

```bash
# npm
npm install lucide-react

# CDN
<script src="https://unpkg.com/lucide@latest"></script>
```

**Uso en React:**

```jsx
import { Home, Users, Settings, ChevronRight } from 'lucide-react';

<Home size={20} strokeWidth={2} />
```

**Uso con CDN:**

```html
<i data-lucide="home"></i>
<script>lucide.createIcons();</script>
```

### Alternativas

- **Heroicons**: Iconos de Tailwind, estilo similar
- **Phosphor Icons**: Más variedad de estilos
- **Tabler Icons**: Amplia colección, stroke consistente

## Tamaños Estándar

| Contexto | Tamaño | Uso |
|----------|--------|-----|
| Extra Small | 14px | Badges, indicadores inline |
| Small | 16px | Botones pequeños, inputs |
| Medium | 20px | Navegación, botones normales |
| Large | 24px | Headers, acciones principales |
| Extra Large | 32px | Estados vacíos, ilustraciones |

```css
.icon-xs { width: 14px; height: 14px; }
.icon-sm { width: 16px; height: 16px; }
.icon-md { width: 20px; height: 20px; }
.icon-lg { width: 24px; height: 24px; }
.icon-xl { width: 32px; height: 32px; }
```

## Iconos por Categoría

### Navegación Principal

| Icono | Nombre Lucide | Uso |
|-------|---------------|-----|
| Dashboard | `layout-dashboard` | Inicio, resumen |
| Productos | `package` | Catálogo, inventario |
| Pedidos | `shopping-cart` | Órdenes, ventas |
| Clientes | `users` | Usuarios, contactos |
| Reportes | `bar-chart-2` | Analítica, estadísticas |
| Configuración | `settings` | Ajustes |
| Ayuda | `help-circle` | Soporte, FAQ |

### Acciones Comunes

| Icono | Nombre Lucide | Uso |
|-------|---------------|-----|
| Agregar | `plus` | Crear nuevo |
| Editar | `pencil` | Modificar |
| Eliminar | `trash-2` | Borrar |
| Ver | `eye` | Visualizar detalle |
| Buscar | `search` | Búsqueda |
| Filtrar | `filter` | Filtros |
| Exportar | `download` | Descargar, exportar |
| Importar | `upload` | Subir, importar |
| Refrescar | `refresh-cw` | Actualizar |
| Más opciones | `more-vertical` | Menú contextual |

### Estados y Feedback

| Icono | Nombre Lucide | Uso |
|-------|---------------|-----|
| Éxito | `check-circle` | Confirmación |
| Error | `x-circle` | Error |
| Advertencia | `alert-triangle` | Warning |
| Info | `info` | Información |
| Cargando | `loader-2` | Loading (animado) |

### Navegación UI

| Icono | Nombre Lucide | Uso |
|-------|---------------|-----|
| Menú | `menu` | Toggle sidebar |
| Cerrar | `x` | Cerrar modal/panel |
| Chevron derecha | `chevron-right` | Expandir, siguiente |
| Chevron abajo | `chevron-down` | Dropdown, colapsar |
| Flecha atrás | `arrow-left` | Volver |
| Externo | `external-link` | Link externo |

### Comunicación

| Icono | Nombre Lucide | Uso |
|-------|---------------|-----|
| Notificación | `bell` | Alertas |
| Mensaje | `message-square` | Chat, comentarios |
| Email | `mail` | Correo |
| Teléfono | `phone` | Llamada |

### Usuario

| Icono | Nombre Lucide | Uso |
|-------|---------------|-----|
| Usuario | `user` | Perfil individual |
| Usuarios | `users` | Grupo, equipo |
| Logout | `log-out` | Cerrar sesión |
| Login | `log-in` | Iniciar sesión |

## Uso en Sidebar

```html
<li class="sidebar-item">
  <a href="#">
    <span class="sidebar-icon">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <rect width="7" height="9" x="3" y="3" rx="1"/>
        <rect width="7" height="5" x="14" y="3" rx="1"/>
        <rect width="7" height="9" x="14" y="12" rx="1"/>
        <rect width="7" height="5" x="3" y="16" rx="1"/>
      </svg>
    </span>
    <span class="sidebar-text">Dashboard</span>
  </a>
</li>
```

## Uso en Botones

```html
<!-- Botón con icono a la izquierda -->
<button class="btn btn-primary btn-md">
  <svg class="icon-sm"><!-- plus icon --></svg>
  Nuevo Producto
</button>

<!-- Botón solo icono -->
<button class="btn btn-icon btn-ghost btn-md" title="Editar">
  <svg class="icon-md"><!-- pencil icon --></svg>
</button>
```

## Colores de Iconos

```css
/* Iconos en sidebar (sobre fondo oscuro) */
.sidebar-icon {
  color: rgba(255, 255, 255, 0.7);
}

.sidebar-item.active .sidebar-icon {
  color: #FFFFFF;
}

/* Iconos en contenido (sobre fondo claro) */
.icon-default {
  color: var(--color-gray-500);
}

.icon-primary {
  color: var(--color-primary);
}

.icon-success {
  color: var(--color-success);
}

.icon-error {
  color: var(--color-error);
}

.icon-warning {
  color: var(--color-warning);
}

/* Iconos en botones */
.btn .icon {
  color: currentColor;
}
```

## Assets SVG Existentes

El proyecto incluye assets SVG en `figma/omnitok-assets/` que pueden usarse:

- Logos: `omnitok-logo.svg`, variantes de color
- Elementos de marca: letras individuales del logo
- Iconos de estado: `feliz.svg`, `triste.svg`, `enojado.svg`, etc.

Para iconos de UI general, se recomienda usar Lucide por consistencia.

## Animaciones de Iconos

```css
/* Spinner de carga */
.icon-spin {
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

/* Pulse para notificaciones */
.icon-pulse {
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

/* Bounce para llamar atención */
.icon-bounce {
  animation: bounce 1s ease infinite;
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-4px); }
}
```

## Accesibilidad

1. **Iconos decorativos**: usar `aria-hidden="true"`
2. **Iconos funcionales**: agregar `aria-label` o texto visible
3. **Botones solo icono**: siempre incluir `title` y `aria-label`

```html
<!-- Icono decorativo (junto a texto) -->
<button class="btn">
  <svg aria-hidden="true">...</svg>
  Guardar
</button>

<!-- Icono funcional (solo) -->
<button class="btn btn-icon" aria-label="Eliminar" title="Eliminar">
  <svg aria-hidden="true">...</svg>
</button>
```
