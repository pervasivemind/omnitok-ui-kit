# Componentes Base

Biblioteca de componentes UI para sistemas administrativos.

## Botones

### Variantes

| Variante | Uso |
|----------|-----|
| Primary | Acción principal de la página |
| Secondary | Acciones secundarias |
| Ghost | Acciones terciarias, dentro de cards |
| Danger | Acciones destructivas (eliminar) |
| Accent | CTAs destacados (usar con moderación) |

### Tamaños

| Tamaño | Height | Padding | Font Size |
|--------|--------|---------|-----------|
| Small | 32px | 12px 16px | 12px |
| Medium | 40px | 12px 20px | 14px |
| Large | 48px | 16px 24px | 16px |

### CSS de Botones

```css
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-sm);
  font-family: var(--font-primary);
  font-weight: var(--font-semibold);
  border-radius: var(--radius-md);
  border: none;
  cursor: pointer;
  transition: all 0.15s ease;
}

/* Tamaños */
.btn-sm {
  height: 32px;
  padding: 0 var(--spacing-md);
  font-size: var(--text-xs);
}

.btn-md {
  height: 40px;
  padding: 0 20px;
  font-size: var(--text-sm);
}

.btn-lg {
  height: 48px;
  padding: 0 var(--spacing-lg);
  font-size: var(--text-base);
}

/* Primary */
.btn-primary {
  background-color: var(--color-primary);
  color: var(--color-white);
}

.btn-primary:hover {
  background-color: var(--color-primary-dark);
}

/* Secondary */
.btn-secondary {
  background-color: var(--color-white);
  color: var(--color-gray-700);
  border: 1px solid var(--color-gray-300);
}

.btn-secondary:hover {
  background-color: var(--color-gray-50);
  border-color: var(--color-gray-400);
}

/* Ghost */
.btn-ghost {
  background-color: transparent;
  color: var(--color-primary);
}

.btn-ghost:hover {
  background-color: var(--color-primary-light);
  background-color: rgba(77, 74, 157, 0.1);
}

/* Danger */
.btn-danger {
  background-color: var(--color-error);
  color: var(--color-white);
}

.btn-danger:hover {
  background-color: #dc2626;
}

/* Accent */
.btn-accent {
  background-color: var(--color-accent);
  color: var(--color-white);
}

.btn-accent:hover {
  background-color: var(--color-accent-dark);
}

/* Disabled */
.btn:disabled {
  background-color: var(--color-gray-200);
  color: var(--color-gray-400);
  cursor: not-allowed;
  border-color: transparent;
}

/* Icon only */
.btn-icon {
  width: 40px;
  padding: 0;
}

.btn-icon.btn-sm { width: 32px; }
.btn-icon.btn-lg { width: 48px; }
```

## Inputs y Formularios

### Input de Texto

```css
.form-group {
  margin-bottom: var(--spacing-lg);
}

.form-label {
  display: block;
  font-size: var(--text-sm);
  font-weight: var(--font-medium);
  color: var(--color-gray-700);
  margin-bottom: var(--spacing-sm);
}

.form-input {
  width: 100%;
  height: 44px;
  padding: 0 var(--spacing-md);
  font-family: var(--font-primary);
  font-size: var(--text-base);
  color: var(--color-gray-700);
  background-color: var(--color-white);
  border: 1px solid var(--color-gray-300);
  border-radius: var(--radius-md);
  transition: border-color 0.15s ease, box-shadow 0.15s ease;
}

.form-input:hover {
  border-color: var(--color-gray-400);
}

.form-input:focus {
  outline: none;
  border-color: var(--color-primary);
  box-shadow: 0 0 0 3px rgba(77, 74, 157, 0.1);
}

.form-input::placeholder {
  color: var(--color-gray-400);
}

.form-input:disabled {
  background-color: var(--color-gray-100);
  cursor: not-allowed;
}

/* Error state */
.form-input.error {
  border-color: var(--color-error);
}

.form-input.error:focus {
  box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
}

.form-error {
  font-size: var(--text-sm);
  color: var(--color-error);
  margin-top: var(--spacing-xs);
}

.form-hint {
  font-size: var(--text-sm);
  color: var(--color-gray-500);
  margin-top: var(--spacing-xs);
}
```

### Textarea

```css
.form-textarea {
  width: 100%;
  min-height: 120px;
  padding: var(--spacing-md);
  font-family: var(--font-primary);
  font-size: var(--text-base);
  color: var(--color-gray-700);
  background-color: var(--color-white);
  border: 1px solid var(--color-gray-300);
  border-radius: var(--radius-md);
  resize: vertical;
}
```

### Select

```css
.form-select {
  width: 100%;
  height: 44px;
  padding: 0 var(--spacing-md);
  padding-right: 40px;
  font-family: var(--font-primary);
  font-size: var(--text-base);
  color: var(--color-gray-700);
  background-color: var(--color-white);
  background-image: url("data:image/svg+xml,..."); /* chevron icon */
  background-repeat: no-repeat;
  background-position: right 12px center;
  border: 1px solid var(--color-gray-300);
  border-radius: var(--radius-md);
  appearance: none;
  cursor: pointer;
}
```

### Checkbox y Radio

```css
.form-checkbox,
.form-radio {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  cursor: pointer;
}

.form-checkbox input,
.form-radio input {
  width: 18px;
  height: 18px;
  accent-color: var(--color-primary);
  cursor: pointer;
}

.form-checkbox span,
.form-radio span {
  font-size: var(--text-sm);
  color: var(--color-gray-700);
}
```

## Cards

```css
.card {
  background-color: var(--color-white);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-sm);
  overflow: hidden;
}

.card-header {
  padding: var(--spacing-lg);
  background: linear-gradient(90deg, #4D4A9D 0%, #3B3880 100%);
  color: #FFFFFF;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.card-title {
  font-size: var(--text-lg);
  font-weight: var(--font-semibold);
  color: #FFFFFF;
}

.card-body {
  padding: var(--spacing-lg);
}

.card-footer {
  padding: var(--spacing-lg);
  border-top: 1px solid var(--color-border);
  background-color: var(--color-gray-50);
  display: flex;
  justify-content: flex-end;
  gap: var(--spacing-md);
}
```

## Tablas

```css
.table-container {
  background-color: var(--color-white);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-sm);
  overflow: hidden;
}

.table {
  width: 100%;
  border-collapse: collapse;
  font-family: var(--font-secondary);
}

.table th {
  padding: var(--spacing-md) var(--spacing-lg);
  text-align: left;
  font-size: var(--text-sm);
  font-weight: var(--font-semibold);
  color: #FFFFFF;
  background-color: #4D4A9D; /* var(--color-primary) */
  border-bottom: 1px solid #3B3880; /* var(--color-primary-dark) */
}

.table td {
  padding: var(--spacing-md) var(--spacing-lg);
  font-size: var(--text-sm);
  color: var(--color-gray-700);
  border-bottom: 1px solid var(--color-border);
  vertical-align: middle;
}

.table tr:last-child td {
  border-bottom: none;
}

.table tr:hover td {
  background-color: var(--color-gray-50);
}

/* Acciones en tabla */
.table-actions {
  display: flex;
  gap: var(--spacing-sm);
  justify-content: flex-end;
}
```

## Modales

```css
.modal-backdrop {
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: var(--z-modal-backdrop);
}

.modal {
  background-color: var(--color-white);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-xl);
  width: 100%;
  max-width: 500px;
  max-height: 90vh;
  overflow: hidden;
  z-index: var(--z-modal);
}

.modal-header {
  padding: var(--spacing-lg);
  background: linear-gradient(90deg, #4D4A9D 0%, #3B3880 100%);
  color: #FFFFFF;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: var(--radius-xl) var(--radius-xl) 0 0;
}

.modal-title {
  font-size: var(--text-xl);
  font-weight: var(--font-semibold);
  color: #FFFFFF;
}

.modal-close {
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-md);
  color: rgba(255, 255, 255, 0.7);
  cursor: pointer;
}

.modal-close:hover {
  background-color: rgba(255, 255, 255, 0.1);
  color: #FFFFFF;
}

.modal-body {
  padding: var(--spacing-lg);
  overflow-y: auto;
}

.modal-footer {
  padding: var(--spacing-lg);
  border-top: 1px solid var(--color-border);
  display: flex;
  justify-content: flex-end;
  gap: var(--spacing-md);
}

/* Tamaños de modal */
.modal-sm { max-width: 400px; }
.modal-md { max-width: 500px; }
.modal-lg { max-width: 700px; }
.modal-xl { max-width: 900px; }
```

## Notificaciones / Toasts

```css
.toast {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  padding: var(--spacing-md) var(--spacing-lg);
  border-radius: var(--radius-md);
  font-size: var(--text-sm);
  font-weight: var(--font-medium);
  box-shadow: var(--shadow-lg);
}

.toast-success {
  background-color: var(--color-success);
  color: var(--color-white);
}

.toast-error {
  background-color: var(--color-error);
  color: var(--color-white);
}

.toast-warning {
  background-color: var(--color-warning);
  color: var(--color-gray-900);
}

.toast-info {
  background-color: var(--color-info);
  color: var(--color-white);
}

/* Container para toasts */
.toast-container {
  position: fixed;
  top: var(--spacing-lg);
  right: var(--spacing-lg);
  z-index: var(--z-toast);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
}
```

## Badges

```css
.badge {
  display: inline-flex;
  align-items: center;
  padding: var(--spacing-xs) var(--spacing-sm);
  font-size: var(--text-xs);
  font-weight: var(--font-semibold);
  border-radius: var(--radius-full);
}

.badge-primary {
  background-color: var(--color-primary-light);
  background-color: rgba(77, 74, 157, 0.15);
  color: var(--color-primary);
}

.badge-success {
  background-color: var(--color-success-light);
  color: #166534;
}

.badge-error {
  background-color: var(--color-error-light);
  color: #991b1b;
}

.badge-warning {
  background-color: var(--color-warning-light);
  color: #92400e;
}

.badge-gray {
  background-color: var(--color-gray-100);
  color: var(--color-gray-600);
}
```

## Dropdown

```css
.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  min-width: 200px;
  background-color: var(--color-white);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-lg);
  border: 1px solid var(--color-border);
  padding: var(--spacing-sm) 0;
  z-index: var(--z-dropdown);
}

.dropdown-item {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  padding: var(--spacing-sm) var(--spacing-md);
  font-size: var(--text-sm);
  color: var(--color-gray-700);
  cursor: pointer;
}

.dropdown-item:hover {
  background-color: var(--color-gray-50);
}

.dropdown-item.danger {
  color: var(--color-error);
}

.dropdown-divider {
  height: 1px;
  background-color: var(--color-border);
  margin: var(--spacing-sm) 0;
}
```

## Avatar

```css
.avatar {
  width: 40px;
  height: 40px;
  border-radius: var(--radius-full);
  background-color: var(--color-primary);
  color: var(--color-white);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: var(--font-semibold);
  font-size: var(--text-sm);
  overflow: hidden;
}

.avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.avatar-sm { width: 32px; height: 32px; font-size: var(--text-xs); }
.avatar-lg { width: 48px; height: 48px; font-size: var(--text-base); }
.avatar-xl { width: 64px; height: 64px; font-size: var(--text-lg); }
```

## LoginPage

Componente de página de login con 3 variantes: `gradient`, `split` y `centered`.

### Variantes

| Variante | Uso | Logo |
|----------|-----|------|
| Gradient | Login con fondo degradado | `logo_largo_color.png` |
| Split | Login con panel izquierdo de branding | Panel izq: `logo_largo_blanco.png`, Form: `logo_largo_color.png` |
| Centered | Login centrado con fondo neutro | `logo_largo_color.png` |

### Características

- **Logos**: 
  - Expandido/Desktop: `logo_largo_color.png` (horizontal color)
  - Split panel izquierdo: `logo_largo_blanco.png` (horizontal blanco)
- **Campos**: Email, Password
- **Opciones**: Remember me, Forgot password
- **Estados**: Normal, Loading, Error
- **Responsive**: Se adapta a mobile mostrando solo el formulario

### CSS de LoginPage

```css
/* Variante Gradient */
.login-gradient {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  background: linear-gradient(135deg, #211f4b 0%, #4D4A9D 50%, #FF177B 100%);
}

.login-gradient .login-form-container {
  width: 100%;
  max-width: 28rem;
  background-color: #FFFFFF;
  border-radius: 1rem;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
  padding: 2rem;
}

/* Variante Split */
.login-split {
  min-height: 100vh;
  display: flex;
}

.login-split .login-branding {
  display: none;
  width: 50%;
  background: linear-gradient(135deg, #211f4b 0%, #4D4A9D 50%, #FF177B 100%);
  padding: 3rem;
  flex-direction: column;
  justify-content: space-between;
  color: #FFFFFF;
}

@media (min-width: 1024px) {
  .login-split .login-branding {
    display: flex;
  }
}

.login-split .login-form-container {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background-color: #FFFFFF;
}

/* Variante Centered */
.login-centered {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  background-color: var(--color-gray-100);
}

.login-centered .login-form-container {
  width: 100%;
  max-width: 28rem;
  background-color: #FFFFFF;
  border-radius: 1rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  padding: 2rem;
}

/* Form Elements */
.login-logo {
  display: flex;
  justify-content: center;
  margin-bottom: 1.5rem;
}

.login-logo img {
  height: 2.5rem;
  object-fit: contain;
}

.login-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-gray-900);
  text-align: center;
}

.login-subtitle {
  margin-top: 0.5rem;
  color: var(--color-gray-500);
  text-align: center;
}

.login-error {
  padding: 0.75rem;
  border-radius: 0.5rem;
  background-color: rgba(239, 68, 68, 0.1);
  border: 1px solid rgba(239, 68, 68, 0.2);
  color: #ef4444;
  font-size: 0.875rem;
}
```
