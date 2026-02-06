# Tipografía

Sistema tipográfico para aplicaciones administrativas basado en la identidad Omnitok.

## Fuentes

### Fuente Principal: Nunito Sans

Usar para todo el contenido de la aplicación.

```css
@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;500;600;700&display=swap');
```

### Fuente Secundaria: Open Sans

Usar para datos tabulares, código o cuando se requiera máxima legibilidad en textos largos.

```css
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600;700&display=swap');
```

## Variables CSS

```css
:root {
  /* Familias */
  --font-primary: 'Nunito Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  --font-secondary: 'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  --font-mono: 'JetBrains Mono', 'Fira Code', 'Consolas', monospace;
  
  /* Tamaños */
  --text-xs: 0.75rem;     /* 12px */
  --text-sm: 0.875rem;    /* 14px */
  --text-base: 1rem;      /* 16px */
  --text-lg: 1.125rem;    /* 18px */
  --text-xl: 1.25rem;     /* 20px */
  --text-2xl: 1.5rem;     /* 24px */
  --text-3xl: 1.875rem;   /* 30px */
  --text-4xl: 2.25rem;    /* 36px */
  
  /* Pesos */
  --font-normal: 400;
  --font-medium: 500;
  --font-semibold: 600;
  --font-bold: 700;
  
  /* Line Heights */
  --leading-tight: 1.25;
  --leading-normal: 1.5;
  --leading-relaxed: 1.625;
  
  /* Letter Spacing */
  --tracking-tight: -0.025em;
  --tracking-normal: 0;
  --tracking-wide: 0.025em;
}
```

## Escala Tipográfica

### Encabezados

| Elemento | Tamaño | Peso | Line Height | Uso |
|----------|--------|------|-------------|-----|
| h1 | `--text-3xl` (30px) | 700 | 1.25 | Títulos de página |
| h2 | `--text-2xl` (24px) | 700 | 1.25 | Secciones principales |
| h3 | `--text-xl` (20px) | 600 | 1.25 | Subsecciones |
| h4 | `--text-lg` (18px) | 600 | 1.25 | Cards, grupos |
| h5 | `--text-base` (16px) | 600 | 1.25 | Labels destacados |
| h6 | `--text-sm` (14px) | 600 | 1.25 | Subtítulos menores |

```css
h1 {
  font-family: var(--font-primary);
  font-size: var(--text-3xl);
  font-weight: var(--font-bold);
  line-height: var(--leading-tight);
  color: var(--color-gray-800);
}

h2 {
  font-family: var(--font-primary);
  font-size: var(--text-2xl);
  font-weight: var(--font-bold);
  line-height: var(--leading-tight);
  color: var(--color-gray-800);
}

h3 {
  font-family: var(--font-primary);
  font-size: var(--text-xl);
  font-weight: var(--font-semibold);
  line-height: var(--leading-tight);
  color: var(--color-gray-700);
}

h4 {
  font-family: var(--font-primary);
  font-size: var(--text-lg);
  font-weight: var(--font-semibold);
  line-height: var(--leading-tight);
  color: var(--color-gray-700);
}
```

### Texto de Cuerpo

| Variante | Tamaño | Peso | Uso |
|----------|--------|------|-----|
| Body Large | `--text-lg` (18px) | 400 | Introducciones, destacados |
| Body | `--text-base` (16px) | 400 | Texto principal |
| Body Small | `--text-sm` (14px) | 400 | Texto secundario, descripciones |
| Caption | `--text-xs` (12px) | 400 | Etiquetas, metadata |

```css
.body-lg {
  font-family: var(--font-primary);
  font-size: var(--text-lg);
  font-weight: var(--font-normal);
  line-height: var(--leading-relaxed);
  color: var(--color-gray-600);
}

.body {
  font-family: var(--font-primary);
  font-size: var(--text-base);
  font-weight: var(--font-normal);
  line-height: var(--leading-normal);
  color: var(--color-gray-600);
}

.body-sm {
  font-family: var(--font-primary);
  font-size: var(--text-sm);
  font-weight: var(--font-normal);
  line-height: var(--leading-normal);
  color: var(--color-gray-500);
}

.caption {
  font-family: var(--font-primary);
  font-size: var(--text-xs);
  font-weight: var(--font-normal);
  line-height: var(--leading-normal);
  color: var(--color-gray-500);
  text-transform: uppercase;
  letter-spacing: var(--tracking-wide);
}
```

### Texto en UI

| Elemento | Tamaño | Peso | Uso |
|----------|--------|------|-----|
| Button | `--text-sm` (14px) | 600 | Botones |
| Label | `--text-sm` (14px) | 500 | Labels de formularios |
| Input | `--text-base` (16px) | 400 | Texto en inputs |
| Table Header | `--text-xs` (12px) | 600 | Encabezados de tabla |
| Table Cell | `--text-sm` (14px) | 400 | Celdas de tabla |
| Nav Item | `--text-sm` (14px) | 500 | Items de navegación |
| Badge | `--text-xs` (12px) | 600 | Badges, tags |

```css
.btn {
  font-family: var(--font-primary);
  font-size: var(--text-sm);
  font-weight: var(--font-semibold);
  line-height: 1;
}

.label {
  font-family: var(--font-primary);
  font-size: var(--text-sm);
  font-weight: var(--font-medium);
  color: var(--color-gray-700);
}

.input {
  font-family: var(--font-primary);
  font-size: var(--text-base);
  font-weight: var(--font-normal);
}

.table-header {
  font-family: var(--font-primary);
  font-size: var(--text-xs);
  font-weight: var(--font-semibold);
  text-transform: uppercase;
  letter-spacing: var(--tracking-wide);
  color: var(--color-gray-500);
}
```

## Tipografía en Sidebar

El sidebar usa texto claro sobre fondo oscuro:

```css
.sidebar-title {
  font-family: var(--font-primary);
  font-size: var(--text-xs);
  font-weight: var(--font-semibold);
  text-transform: uppercase;
  letter-spacing: var(--tracking-wide);
  color: rgba(255, 255, 255, 0.5);
}

.sidebar-item {
  font-family: var(--font-primary);
  font-size: var(--text-sm);
  font-weight: var(--font-medium);
  color: rgba(255, 255, 255, 0.7);
}

.sidebar-item.active {
  font-weight: var(--font-semibold);
  color: #FFFFFF;
}
```

## Buenas Prácticas

1. **No usar más de 2 pesos** en un mismo componente
2. **Mantener jerarquía clara**: h1 > h2 > h3 > body
3. **Texto secundario**: usar `--color-gray-500` no gris más claro
4. **Inputs**: mínimo 16px para evitar zoom en móviles
5. **Tablas**: usar fuente secundaria (Open Sans) para mejor legibilidad de datos
6. **Números en tablas**: considerar `font-variant-numeric: tabular-nums` para alineación
