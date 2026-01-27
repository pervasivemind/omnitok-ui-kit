# Patrones de UI

Patrones comunes para pantallas administrativas de gestión de datos.

## Pantalla de Listado (CRUD - Read)

Estructura estándar para mostrar listados de entidades.

```html
<div class="content">
  <!-- Page Header -->
  <div class="page-header">
    <div class="page-header-left">
      <h1 class="page-title">Productos</h1>
      <p class="page-subtitle">Gestiona el catálogo de productos</p>
    </div>
    <div class="page-header-actions">
      <button class="btn btn-secondary btn-md">
        <span class="icon"><!-- export icon --></span>
        Exportar
      </button>
      <button class="btn btn-primary btn-md">
        <span class="icon"><!-- plus icon --></span>
        Nuevo Producto
      </button>
    </div>
  </div>
  
  <!-- Filters -->
  <div class="filters-bar">
    <div class="filters-left">
      <div class="search-field">
        <input type="search" placeholder="Buscar productos..." class="form-input">
      </div>
      <select class="form-select">
        <option>Todas las categorías</option>
      </select>
      <select class="form-select">
        <option>Todos los estados</option>
      </select>
    </div>
    <div class="filters-right">
      <span class="results-count">124 resultados</span>
    </div>
  </div>
  
  <!-- Table -->
  <div class="table-container">
    <table class="table">
      <thead>
        <tr>
          <th><input type="checkbox"></th>
          <th>Producto</th>
          <th>SKU</th>
          <th>Categoría</th>
          <th>Precio</th>
          <th>Estado</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><input type="checkbox"></td>
          <td>
            <div class="table-product">
              <img src="..." class="table-product-img">
              <span>Nombre del producto</span>
            </div>
          </td>
          <td>SKU-001</td>
          <td>Electrónica</td>
          <td>$99.00</td>
          <td><span class="badge badge-success">Activo</span></td>
          <td>
            <div class="table-actions">
              <button class="btn btn-ghost btn-sm">Editar</button>
              <button class="btn btn-icon btn-ghost btn-sm">...</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  
  <!-- Pagination -->
  <div class="table-footer">
    <div class="table-footer-info">
      Mostrando 1-10 de 124 productos
    </div>
    <nav class="pagination">
      <!-- pagination controls -->
    </nav>
  </div>
</div>
```

### CSS para Listados

```css
.page-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: var(--spacing-xl);
}

.page-header-left {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
}

.page-title {
  font-size: var(--text-3xl);
  font-weight: var(--font-bold);
  color: var(--color-gray-800);
  margin: 0;
}

.page-subtitle {
  font-size: var(--text-sm);
  color: var(--color-gray-500);
  margin: 0;
}

.page-header-actions {
  display: flex;
  gap: var(--spacing-md);
}

.filters-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--spacing-lg);
  gap: var(--spacing-md);
}

.filters-left {
  display: flex;
  gap: var(--spacing-md);
  flex-wrap: wrap;
}

.filters-left .form-input,
.filters-left .form-select {
  width: auto;
  min-width: 200px;
}

.results-count {
  font-size: var(--text-sm);
  color: var(--color-gray-500);
}

.table-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: var(--spacing-lg);
}

.table-footer-info {
  font-size: var(--text-sm);
  color: var(--color-gray-500);
}

.table-product {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
}

.table-product-img {
  width: 40px;
  height: 40px;
  border-radius: var(--radius-md);
  object-fit: cover;
}
```

## Pantalla de Formulario (CRUD - Create/Update)

```html
<div class="content">
  <!-- Page Header -->
  <div class="page-header">
    <div class="page-header-left">
      <nav class="breadcrumb">
        <a href="#">Productos</a>
        <span>/</span>
        <span>Nuevo Producto</span>
      </nav>
      <h1 class="page-title">Nuevo Producto</h1>
    </div>
  </div>
  
  <!-- Form -->
  <form class="form-layout">
    <div class="form-main">
      <!-- Card: Información básica -->
      <div class="card">
        <div class="card-header">
          <h3 class="card-title">Información básica</h3>
        </div>
        <div class="card-body">
          <div class="form-row">
            <div class="form-group">
              <label class="form-label">Nombre del producto *</label>
              <input type="text" class="form-input" placeholder="Ej: Laptop HP 15">
            </div>
          </div>
          <div class="form-row form-row-2">
            <div class="form-group">
              <label class="form-label">SKU *</label>
              <input type="text" class="form-input" placeholder="SKU-001">
            </div>
            <div class="form-group">
              <label class="form-label">Categoría *</label>
              <select class="form-select">
                <option>Seleccionar categoría</option>
              </select>
            </div>
          </div>
          <div class="form-group">
            <label class="form-label">Descripción</label>
            <textarea class="form-textarea" rows="4" placeholder="Descripción del producto..."></textarea>
          </div>
        </div>
      </div>
      
      <!-- Card: Precios -->
      <div class="card">
        <div class="card-header">
          <h3 class="card-title">Precios</h3>
        </div>
        <div class="card-body">
          <div class="form-row form-row-3">
            <div class="form-group">
              <label class="form-label">Precio *</label>
              <input type="number" class="form-input" placeholder="0.00">
            </div>
            <div class="form-group">
              <label class="form-label">Precio comparación</label>
              <input type="number" class="form-input" placeholder="0.00">
            </div>
            <div class="form-group">
              <label class="form-label">Costo</label>
              <input type="number" class="form-input" placeholder="0.00">
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Sidebar del formulario -->
    <div class="form-sidebar">
      <!-- Card: Estado -->
      <div class="card">
        <div class="card-header">
          <h3 class="card-title">Estado</h3>
        </div>
        <div class="card-body">
          <select class="form-select">
            <option>Activo</option>
            <option>Borrador</option>
            <option>Archivado</option>
          </select>
        </div>
      </div>
      
      <!-- Card: Imagen -->
      <div class="card">
        <div class="card-header">
          <h3 class="card-title">Imagen</h3>
        </div>
        <div class="card-body">
          <div class="upload-area">
            <span class="upload-icon"><!-- icon --></span>
            <span class="upload-text">Arrastra una imagen o haz clic</span>
          </div>
        </div>
      </div>
    </div>
  </form>
  
  <!-- Form Actions (sticky) -->
  <div class="form-actions">
    <button class="btn btn-secondary btn-md">Cancelar</button>
    <button class="btn btn-primary btn-md">Guardar Producto</button>
  </div>
</div>
```

### CSS para Formularios

```css
.form-layout {
  display: grid;
  grid-template-columns: 1fr 320px;
  gap: var(--spacing-lg);
}

.form-main {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
}

.form-sidebar {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
}

.form-row {
  margin-bottom: var(--spacing-lg);
}

.form-row:last-child {
  margin-bottom: 0;
}

.form-row-2 {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--spacing-lg);
}

.form-row-3 {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-lg);
}

.form-actions {
  position: sticky;
  bottom: 0;
  background-color: var(--color-white);
  border-top: 1px solid var(--color-border);
  padding: var(--spacing-lg) var(--content-padding);
  margin: var(--spacing-lg) calc(var(--content-padding) * -1) 0;
  display: flex;
  justify-content: flex-end;
  gap: var(--spacing-md);
}

.upload-area {
  border: 2px dashed var(--color-gray-300);
  border-radius: var(--radius-lg);
  padding: var(--spacing-xl);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-sm);
  cursor: pointer;
  transition: all 0.15s ease;
}

.upload-area:hover {
  border-color: var(--color-primary);
  background-color: rgba(77, 74, 157, 0.05);
}

.upload-icon {
  color: var(--color-gray-400);
  font-size: 32px;
}

.upload-text {
  font-size: var(--text-sm);
  color: var(--color-gray-500);
}

@media (max-width: 1023px) {
  .form-layout {
    grid-template-columns: 1fr;
  }
  
  .form-sidebar {
    order: -1;
  }
}
```

## Pantalla de Detalle (CRUD - Read Single)

```html
<div class="content">
  <div class="page-header">
    <div class="page-header-left">
      <nav class="breadcrumb">...</nav>
      <h1 class="page-title">Laptop HP 15</h1>
      <span class="badge badge-success">Activo</span>
    </div>
    <div class="page-header-actions">
      <button class="btn btn-secondary btn-md">Duplicar</button>
      <button class="btn btn-primary btn-md">Editar</button>
    </div>
  </div>
  
  <div class="detail-layout">
    <div class="detail-main">
      <div class="card">
        <div class="card-body">
          <dl class="detail-list">
            <div class="detail-item">
              <dt>SKU</dt>
              <dd>SKU-001</dd>
            </div>
            <div class="detail-item">
              <dt>Categoría</dt>
              <dd>Electrónica</dd>
            </div>
            <div class="detail-item">
              <dt>Precio</dt>
              <dd>$999.00</dd>
            </div>
            <div class="detail-item full-width">
              <dt>Descripción</dt>
              <dd>Lorem ipsum dolor sit amet...</dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
    
    <div class="detail-sidebar">
      <div class="card">
        <img src="..." class="detail-image">
      </div>
    </div>
  </div>
</div>
```

### CSS para Detalle

```css
.detail-layout {
  display: grid;
  grid-template-columns: 1fr 320px;
  gap: var(--spacing-lg);
}

.detail-list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--spacing-lg);
}

.detail-item {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
}

.detail-item.full-width {
  grid-column: span 2;
}

.detail-item dt {
  font-size: var(--text-xs);
  font-weight: var(--font-semibold);
  text-transform: uppercase;
  letter-spacing: var(--tracking-wide);
  color: var(--color-gray-500);
}

.detail-item dd {
  font-size: var(--text-base);
  color: var(--color-gray-700);
  margin: 0;
}

.detail-image {
  width: 100%;
  border-radius: var(--radius-md);
}
```

## Estados Vacíos

```html
<div class="empty-state">
  <div class="empty-state-icon">
    <!-- icon -->
  </div>
  <h3 class="empty-state-title">No hay productos</h3>
  <p class="empty-state-description">
    Comienza agregando tu primer producto al catálogo.
  </p>
  <button class="btn btn-primary btn-md">
    Agregar Producto
  </button>
</div>
```

```css
.empty-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--spacing-3xl);
  text-align: center;
}

.empty-state-icon {
  width: 64px;
  height: 64px;
  color: var(--color-gray-300);
  margin-bottom: var(--spacing-lg);
}

.empty-state-title {
  font-size: var(--text-xl);
  font-weight: var(--font-semibold);
  color: var(--color-gray-700);
  margin: 0 0 var(--spacing-sm);
}

.empty-state-description {
  font-size: var(--text-sm);
  color: var(--color-gray-500);
  margin: 0 0 var(--spacing-lg);
  max-width: 400px;
}
```

## Estados de Carga

```html
<!-- Skeleton para tabla -->
<div class="skeleton-row">
  <div class="skeleton skeleton-checkbox"></div>
  <div class="skeleton skeleton-text"></div>
  <div class="skeleton skeleton-text-sm"></div>
  <div class="skeleton skeleton-text-sm"></div>
  <div class="skeleton skeleton-badge"></div>
</div>

<!-- Spinner -->
<div class="spinner"></div>

<!-- Loading overlay -->
<div class="loading-overlay">
  <div class="spinner"></div>
  <span>Cargando...</span>
</div>
```

```css
.skeleton {
  background: linear-gradient(90deg, var(--color-gray-200) 25%, var(--color-gray-100) 50%, var(--color-gray-200) 75%);
  background-size: 200% 100%;
  animation: skeleton-loading 1.5s infinite;
  border-radius: var(--radius-sm);
}

@keyframes skeleton-loading {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}

.skeleton-text {
  height: 16px;
  width: 150px;
}

.skeleton-text-sm {
  height: 14px;
  width: 80px;
}

.skeleton-checkbox {
  height: 18px;
  width: 18px;
}

.skeleton-badge {
  height: 24px;
  width: 60px;
  border-radius: var(--radius-full);
}

.spinner {
  width: 24px;
  height: 24px;
  border: 3px solid var(--color-gray-200);
  border-top-color: var(--color-primary);
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.loading-overlay {
  position: absolute;
  inset: 0;
  background-color: rgba(255, 255, 255, 0.8);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-md);
  z-index: var(--z-modal);
}
```

## Confirmación de Eliminación

```html
<div class="modal-backdrop">
  <div class="modal modal-sm">
    <div class="modal-header">
      <h3 class="modal-title">Eliminar producto</h3>
      <button class="modal-close">×</button>
    </div>
    <div class="modal-body">
      <p>¿Estás seguro de que deseas eliminar <strong>"Laptop HP 15"</strong>?</p>
      <p class="text-muted">Esta acción no se puede deshacer.</p>
    </div>
    <div class="modal-footer">
      <button class="btn btn-secondary btn-md">Cancelar</button>
      <button class="btn btn-danger btn-md">Eliminar</button>
    </div>
  </div>
</div>
```

## Mensajes de Feedback

```css
/* Inline alert */
.alert {
  display: flex;
  align-items: flex-start;
  gap: var(--spacing-md);
  padding: var(--spacing-md);
  border-radius: var(--radius-md);
  font-size: var(--text-sm);
}

.alert-success {
  background-color: var(--color-success-light);
  color: #166534;
}

.alert-error {
  background-color: var(--color-error-light);
  color: #991b1b;
}

.alert-warning {
  background-color: var(--color-warning-light);
  color: #92400e;
}

.alert-info {
  background-color: var(--color-info-light);
  color: #1e40af;
}

.alert-icon {
  flex-shrink: 0;
  width: 20px;
  height: 20px;
}

.alert-content {
  flex: 1;
}

.alert-title {
  font-weight: var(--font-semibold);
  margin-bottom: var(--spacing-xs);
}
```
