# Metabase - Guía de Visualización (Embebido)

Guía para dashboards Metabase embebidos dentro del layout de aplicación administrativa.

## Contexto de Uso

Metabase **siempre se embebe** dentro del layout principal de la aplicación. Esto significa:

- El sidebar izquierdo (`#211f4b`) siempre está visible
- El header de la aplicación está presente
- Metabase ocupa el área de contenido
- El panel de Chat/Insight IA puede estar a la derecha

## Layout con Metabase Embebido

```
┌─────────────────────────────────────────────────────────────────┐
│ Sidebar │                    Header App                          │
│ #211f4b │────────────────────────────────────────────────────────│
│         │  Breadcrumb: Dashboard > Ventas                        │
│  Logo   ├────────────────────────────────────┬───────────────────┤
│         │                                    │                   │
│  Nav    │     Metabase Embed                 │   Chat/Insight    │
│  Items  │     (iframe)                       │   IA Panel        │
│         │                                    │                   │
│  ────── │     ┌────────────────────────┐    │   ┌─────────────┐ │
│         │     │  Dashboard Metabase    │    │   │  Insights   │ │
│  Ventas │     │                        │    │   │  automáticos│ │
│  Reportes     │  KPIs, Gráficos, etc.  │    │   │             │ │
│  Config │     │                        │    │   │  ─────────  │ │
│         │     └────────────────────────┘    │   │  Chat input │ │
│         │                                    │   └─────────────┘ │
└─────────────────────────────────────────────────────────────────┘
```

## Embedding de Metabase

### Métodos de Embedding

1. **Static Embedding** (JWT): Para dashboards públicos o con permisos fijos
2. **Interactive Embedding** (SDK): Control total sobre tema y comportamiento
3. **Full-app Embedding**: Metabase completo dentro de iframe

### Configuración del Iframe

```html
<div class="metabase-container">
  <iframe
    src="https://metabase.example.com/embed/dashboard/eyJ..."
    frameborder="0"
    width="100%"
    height="100%"
    allowtransparency="true"
  ></iframe>
</div>
```

### CSS del Contenedor

```css
.metabase-container {
  flex: 1;
  display: flex;
  background-color: var(--color-gray-50);
  border-radius: var(--radius-lg);
  overflow: hidden;
  min-height: 600px;
}

.metabase-container iframe {
  flex: 1;
  border: none;
  background-color: transparent;
}

/* Layout con Chat IA */
.bi-layout {
  display: flex;
  gap: var(--spacing-lg);
  height: calc(100vh - var(--header-height) - 48px);
}

.bi-content {
  flex: 1;
  min-width: 0;
}

.bi-chat-panel {
  width: 320px;
  flex-shrink: 0;
}
```

## Tema Personalizado (SDK Embedding)

Para Interactive Embedding, usar este objeto de tema:

```javascript
const metabaseTheme = {
  // Colores de marca
  colors: {
    brand: "#4D4A9D",
    "brand-light": "#6663B3",
    filter: "#FF177B",
    "text-primary": "#404040",
    "text-secondary": "#737373",
    "text-tertiary": "#A3A3A3",
    border: "#E5E5E5",
    background: "#FFFFFF",
    "background-hover": "#FAFAFA",
    "background-disabled": "#F5F5F5",
    shadow: "rgba(0, 0, 0, 0.08)",
    positive: "#22C55E",
    negative: "#EF4444",
    warning: "#F59E0B",
  },
  
  // Colores para gráficos (series de datos)
  charts: {
    colors: [
      "#4D4A9D",  // Púrpura principal
      "#FF177B",  // Magenta
      "#1BCDF8",  // Cyan
      "#F2B01E",  // Amarillo
      "#22C55E",  // Verde
      "#6663B3",  // Púrpura claro
      "#C231FA",  // Violeta
      "#3B82F6",  // Azul
    ]
  },
  
  // Tipografía
  fontFamily: "'Nunito Sans', 'Segoe UI', sans-serif",
  
  // Componentes
  components: {
    dashboard: {
      backgroundColor: "#FAFAFA",
      card: {
        backgroundColor: "#FFFFFF",
        borderRadius: "12px",
        boxShadow: "0 1px 2px rgba(0, 0, 0, 0.05)"
      }
    },
    question: {
      backgroundColor: "#FFFFFF"
    },
    table: {
      cell: {
        fontSize: "14px",
        textColor: "#555555"
      },
      idColumn: {
        textColor: "#4D4A9D"
      }
    }
  }
};

// Aplicar tema en SDK
MetabaseEmbed.init({
  metabaseUrl: "https://metabase.example.com",
  theme: metabaseTheme
});
```

## Paleta de Colores para Visualizaciones

### Colores de Series

| Orden | Color | Hex | Uso |
|-------|-------|-----|-----|
| 1 | Púrpura | `#4D4A9D` | Serie principal |
| 2 | Magenta | `#FF177B` | Serie secundaria |
| 3 | Cyan | `#1BCDF8` | Tercera serie |
| 4 | Amarillo | `#F2B01E` | Cuarta serie |
| 5 | Verde | `#22C55E` | Quinta serie |
| 6 | Púrpura claro | `#6663B3` | Sexta serie |
| 7 | Violeta | `#C231FA` | Séptima serie |
| 8 | Azul | `#3B82F6` | Octava serie |

### Colores Semánticos

| Significado | Color | Hex |
|-------------|-------|-----|
| Positivo | Verde | `#22C55E` |
| Negativo | Rojo | `#EF4444` |
| Advertencia | Amarillo | `#F59E0B` |
| Neutro | Gris | `#737373` |

### Configuración en Metabase Admin

En **Admin > Settings > Appearance**:

1. **Application Name**: Nombre de tu app
2. **Primary Color**: `#4D4A9D`
3. **Chart Colors**: Agregar la paleta en orden
4. **Font**: Nunito Sans (si está disponible) o Lato

## Tipos de Gráficos Recomendados

### Por Caso de Uso

| Caso de Uso | Tipo en Metabase | Configuración |
|-------------|------------------|---------------|
| **Tendencias** | Line | Suavizado opcional |
| **Comparación** | Bar | Horizontal para nombres largos |
| **Partes de todo** | Donut | Máximo 5-6 categorías |
| **KPI único** | Number | Con goal y trend |
| **Progreso** | Progress | Con meta definida |
| **Distribución** | Histogram | Bins automáticos |
| **Correlación** | Scatter | Con línea de tendencia |
| **Geográfico** | Map | Pin o region map |
| **Detalle** | Table | Con formato condicional |
| **Múltiples métricas** | Combo | Barras + línea |

### Configuración de Visualizaciones

```javascript
// Ejemplo: Configuración de gráfico de líneas
{
  "display": "line",
  "visualization_settings": {
    "graph.dimensions": ["created_at"],
    "graph.metrics": ["count"],
    "graph.colors": ["#4D4A9D"],
    "graph.x_axis.title_text": "Fecha",
    "graph.y_axis.title_text": "Cantidad",
    "graph.show_goal": true,
    "graph.goal_value": 1000,
    "graph.goal_label": "Meta"
  }
}
```

## Estructura del Dashboard

### Jerarquía de Cards

```
┌─────────────────────────────────────────────────────────────┐
│  TÍTULO DEL DASHBOARD                                        │
│  Descripción breve del propósito                            │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  ┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────┐        │
│  │ Number  │  │ Number  │  │ Number  │  │ Number  │        │  ← KPIs (row 1)
│  │ Card 1  │  │ Card 2  │  │ Card 3  │  │ Card 4  │        │
│  └─────────┘  └─────────┘  └─────────┘  └─────────┘        │
│                                                             │
│  ┌─────────────────────────────────────────────────────┐   │
│  │                                                     │   │  ← Gráfico principal
│  │              Line/Area Chart                        │   │     (row 2-3)
│  │                                                     │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                             │
│  ┌─────────────────────┐  ┌─────────────────────────────┐  │
│  │                     │  │                             │  │  ← Gráficos secundarios
│  │   Bar Chart         │  │   Donut Chart               │  │     (row 4-5)
│  │                     │  │                             │  │
│  └─────────────────────┘  └─────────────────────────────┘  │
│                                                             │
│  ┌─────────────────────────────────────────────────────┐   │
│  │              Table                                  │   │  ← Detalle (row 6-7)
│  └─────────────────────────────────────────────────────┘   │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Buenas Prácticas de Layout

1. **Importancia arriba-izquierda**: Los ojos van primero ahí
2. **Cards grandes para métricas clave**: Number cards prominentes
3. **Agrupación lógica**: Relacionados juntos
4. **Espacio negativo**: No saturar, dejar respirar
5. **Máximo 10 cards**: Dividir en múltiples dashboards si necesario
6. **Texto explicativo**: Usar Text cards para contexto

## Panel de Chat/Insight IA

### Estructura HTML

```html
<div class="bi-layout">
  <!-- Contenido Metabase -->
  <div class="bi-content">
    <div class="metabase-container">
      <iframe src="..."></iframe>
    </div>
  </div>
  
  <!-- Panel de Chat IA -->
  <aside class="bi-chat-panel">
    <div class="chat-panel">
      <header class="chat-header">
        <div class="chat-header-icon">
          <!-- AI icon -->
        </div>
        <h3 class="chat-header-title">Asistente IA</h3>
        <button class="chat-toggle" aria-label="Minimizar">
          <!-- chevron icon -->
        </button>
      </header>
      
      <div class="chat-insights">
        <div class="insight-card">
          <span class="insight-icon">📈</span>
          <div class="insight-content">
            <strong>Tendencia detectada</strong>
            <p>Las ventas aumentaron 15% respecto al mes anterior</p>
          </div>
        </div>
        <div class="insight-card warning">
          <span class="insight-icon">⚠️</span>
          <div class="insight-content">
            <strong>Atención</strong>
            <p>Región Sur bajo el objetivo en 8%</p>
          </div>
        </div>
      </div>
      
      <div class="chat-messages">
        <!-- Mensajes del chat -->
      </div>
      
      <div class="chat-input-area">
        <textarea 
          class="chat-input" 
          placeholder="Pregunta sobre los datos..."
          rows="2"
        ></textarea>
        <button class="chat-send btn btn-primary btn-sm">
          Enviar
        </button>
      </div>
    </div>
  </aside>
</div>
```

### CSS del Panel de Chat

```css
.bi-layout {
  display: flex;
  gap: var(--spacing-lg);
  height: calc(100vh - var(--header-height) - 48px);
  padding: var(--spacing-lg);
}

.bi-content {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
}

.bi-chat-panel {
  width: 320px;
  flex-shrink: 0;
}

.chat-panel {
  height: 100%;
  background-color: var(--color-white);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.chat-header {
  padding: var(--spacing-md) var(--spacing-lg);
  border-bottom: 1px solid var(--color-border);
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  background-color: var(--color-gray-50);
}

.chat-header-icon {
  width: 32px;
  height: 32px;
  background-color: var(--color-primary);
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}

.chat-header-title {
  flex: 1;
  font-size: var(--text-sm);
  font-weight: var(--font-semibold);
  color: var(--color-gray-700);
  margin: 0;
}

.chat-toggle {
  background: none;
  border: none;
  color: var(--color-gray-500);
  cursor: pointer;
  padding: var(--spacing-xs);
}

.chat-insights {
  padding: var(--spacing-md);
  border-bottom: 1px solid var(--color-border);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
  max-height: 200px;
  overflow-y: auto;
}

.insight-card {
  display: flex;
  gap: var(--spacing-sm);
  padding: var(--spacing-sm) var(--spacing-md);
  background-color: rgba(77, 74, 157, 0.08);
  border-radius: var(--radius-md);
  border-left: 3px solid var(--color-primary);
}

.insight-card.warning {
  background-color: rgba(245, 158, 11, 0.1);
  border-left-color: var(--color-warning);
}

.insight-card.error {
  background-color: rgba(239, 68, 68, 0.1);
  border-left-color: var(--color-error);
}

.insight-icon {
  font-size: 16px;
}

.insight-content {
  flex: 1;
}

.insight-content strong {
  display: block;
  font-size: var(--text-xs);
  font-weight: var(--font-semibold);
  color: var(--color-gray-700);
  margin-bottom: 2px;
}

.insight-content p {
  font-size: var(--text-xs);
  color: var(--color-gray-600);
  margin: 0;
  line-height: 1.4;
}

.chat-messages {
  flex: 1;
  overflow-y: auto;
  padding: var(--spacing-md);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
}

.chat-message {
  padding: var(--spacing-sm) var(--spacing-md);
  border-radius: var(--radius-md);
  font-size: var(--text-sm);
  line-height: 1.5;
  max-width: 90%;
}

.chat-message.assistant {
  background-color: var(--color-gray-100);
  color: var(--color-gray-700);
  align-self: flex-start;
}

.chat-message.user {
  background-color: var(--color-primary);
  color: white;
  align-self: flex-end;
}

.chat-input-area {
  padding: var(--spacing-md);
  border-top: 1px solid var(--color-border);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
}

.chat-input {
  width: 100%;
  padding: var(--spacing-sm) var(--spacing-md);
  border: 1px solid var(--color-gray-300);
  border-radius: var(--radius-md);
  font-family: var(--font-primary);
  font-size: var(--text-sm);
  resize: none;
}

.chat-input:focus {
  outline: none;
  border-color: var(--color-primary);
  box-shadow: 0 0 0 3px rgba(77, 74, 157, 0.1);
}

.chat-send {
  align-self: flex-end;
}

/* Responsive: ocultar chat en móvil */
@media (max-width: 1279px) {
  .bi-chat-panel {
    position: fixed;
    right: 0;
    top: var(--header-height);
    bottom: 0;
    transform: translateX(100%);
    transition: transform 0.3s ease;
    z-index: var(--z-modal);
    box-shadow: var(--shadow-xl);
  }
  
  .bi-chat-panel.open {
    transform: translateX(0);
  }
}
```

## Filtros en Metabase

### Ubicación de Filtros

- **Filtros globales**: Parte superior del dashboard
- **Filtros de card**: Dentro de cada visualización si necesario
- **Parámetros URL**: Para embedding con filtros predefinidos

### Estilo de Filtros

```css
/* Personalizar filtros embebidos */
.metabase-container :deep(.DashboardHeader-title) {
  font-family: 'Nunito Sans', sans-serif;
  color: #404040;
}

.metabase-container :deep(.FilterWidget) {
  border-color: #E5E5E5;
  border-radius: 8px;
}

.metabase-container :deep(.FilterWidget:focus-within) {
  border-color: #4D4A9D;
  box-shadow: 0 0 0 3px rgba(77, 74, 157, 0.1);
}
```

## Interactividad

### Cross-Filtering

Habilitar click-through entre cards relacionadas:

1. En el dashboard, ir a configuración de card
2. Activar "Click behavior"
3. Seleccionar "Update a dashboard filter"
4. Mapear campos

### Drill-Through

Configurar navegación a detalle:

1. Click behavior > "Go to a custom destination"
2. Seleccionar dashboard o question de detalle
3. Pasar parámetros del contexto

## Accesibilidad

### Checklist

- [ ] Títulos descriptivos en todas las cards
- [ ] Descripciones en dashboards
- [ ] Contraste adecuado en gráficos
- [ ] No depender solo del color
- [ ] Tablas con headers claros

### Títulos Descriptivos

```
❌ Malo: "Ventas"
✅ Bueno: "Ventas Mensuales por Región (2024)"

❌ Malo: "Gráfico 1"
✅ Bueno: "Tendencia de Nuevos Usuarios - Últimos 12 Meses"
```

## Buenas Prácticas

1. **Un propósito por dashboard**: Responder una pregunta de negocio
2. **Contexto visible**: Período, fuente, última actualización
3. **Jerarquía clara**: KPIs arriba, detalle abajo
4. **Consistencia**: Mismos colores para mismas categorías
5. **Performance**: Limitar queries, usar caching
6. **Documentación**: Describir métricas y cálculos en Text cards
