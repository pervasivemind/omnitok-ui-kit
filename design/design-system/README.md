# Design System - Sistemas Administrativos

Sistema de diseño para aplicaciones administrativas internas basado en la identidad visual de Omnitok.

## Uso

Este design system está pensado para ser referenciado por otros proyectos de Cursor. Copia la carpeta `design-system/` y el archivo `.cursor/rules/ui-ux.mdc` a tu proyecto.

## Documentos

| Archivo | Contenido |
|---------|-----------|
| [colors.md](colors.md) | Paleta de colores, variables CSS, estados |
| [typography.md](typography.md) | Fuentes, escala tipográfica, pesos |
| [layout.md](layout.md) | Estructura sidebar + content, grid, espaciado |
| [components.md](components.md) | Botones, inputs, cards, tablas, modales, badges |
| [navigation.md](navigation.md) | Sidebar, header, breadcrumbs, tabs, paginación |
| [patterns.md](patterns.md) | Pantallas CRUD, estados vacíos, loading, errores |
| [icons.md](icons.md) | Sistema de iconos, Lucide, tamaños |
| [powerbi.md](powerbi.md) | Guía Power BI: theme JSON, gráficos, layout |
| [metabase.md](metabase.md) | Guía Metabase embebido: tema SDK, layout |

## Principios

1. **Sidebar izquierdo obligatorio** - Color `#211f4b`
2. **Consistencia** - Usar variables CSS definidas
3. **Jerarquía clara** - Tipografía y espaciado consistentes
4. **Accesibilidad** - Contraste WCAG AA, focus visible
5. **Responsive** - Sidebar colapsable en tablet, oculto en móvil

## Colores Principales

- Sidebar: `#211f4b`
- Primary: `#4D4A9D`
- Accent: `#FF177B`

## Assets

Los assets de marca están en `figma/`:
- `omnitok-assets/` - Logos, paleta, tipografía
- `omnitok-assitant/` - Componentes UI exportados
