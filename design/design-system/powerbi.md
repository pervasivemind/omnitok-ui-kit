# Power BI - Guía de Visualización

Guía para dashboards y reportes en Power BI siguiendo la identidad visual Omnitok.

## Layout General

Power BI puede usarse de forma standalone o embebido. En ambos casos, seguir estas pautas:

### Standalone (Pantalla Completa)

```
┌─────────────────────────────────────────────────────────────────┐
│                         Header / Título                          │
├─────────────────────────────────────────────────────────────────┤
│  Filtros / Slicers                                               │
├────────────────────────────────────────────┬────────────────────┤
│                                            │                    │
│           Área de Visualizaciones          │   Chat/Insight     │
│                                            │   IA Panel         │
│   ┌─────────┐  ┌─────────┐  ┌─────────┐   │   (opcional)       │
│   │  KPI 1  │  │  KPI 2  │  │  KPI 3  │   │                    │
│   └─────────┘  └─────────┘  └─────────┘   │   ~300px ancho     │
│                                            │                    │
│   ┌─────────────────────────────────────┐ │                    │
│   │         Gráfico Principal           │ │                    │
│   └─────────────────────────────────────┘ │                    │
│                                            │                    │
│   ┌─────────────────┐ ┌─────────────────┐ │                    │
│   │   Gráfico 2     │ │   Gráfico 3     │ │                    │
│   └─────────────────┘ └─────────────────┘ │                    │
│                                            │                    │
└────────────────────────────────────────────┴────────────────────┘
```

### Embebido en Aplicación (con Sidebar)

```
┌─────────────────────────────────────────────────────────────────┐
│ Sidebar │                    Header                              │
│ #211f4b │────────────────────────────────────────────────────────│
│         │                                    │                   │
│  Nav    │     Power BI Embed                 │   Chat/Insight    │
│  Items  │                                    │   IA Panel        │
│         │     (iframe o SDK)                 │                   │
│         │                                    │   ~300px          │
│         │                                    │                   │
└─────────────────────────────────────────────────────────────────┘
```

## Theme JSON Corporativo

Usar este tema para mantener consistencia con la identidad Omnitok:

```json
{
  "name": "Omnitok Admin Theme",
  "dataColors": [
    "#4D4A9D",
    "#FF177B",
    "#1BCDF8",
    "#F2B01E",
    "#22C55E",
    "#6663B3",
    "#C231FA",
    "#3B82F6"
  ],
  "background": "#FFFFFF",
  "foreground": "#555555",
  "tableAccent": "#4D4A9D",
  "visualStyles": {
    "*": {
      "*": {
        "background": [{ "color": { "solid": { "color": "#FFFFFF" } } }],
        "border": [{ "color": { "solid": { "color": "#E5E5E5" } } }],
        "title": [{
          "fontColor": { "solid": { "color": "#404040" } },
          "fontSize": 12,
          "fontFamily": "Nunito Sans, Segoe UI, sans-serif"
        }],
        "labels": [{
          "fontColor": { "solid": { "color": "#737373" } },
          "fontSize": 10,
          "fontFamily": "Nunito Sans, Segoe UI, sans-serif"
        }]
      }
    },
    "page": {
      "*": {
        "background": [{ "color": { "solid": { "color": "#FAFAFA" } } }]
      }
    },
    "card": {
      "*": {
        "labels": [{
          "fontColor": { "solid": { "color": "#404040" } },
          "fontSize": 28,
          "fontFamily": "Nunito Sans, Segoe UI, sans-serif"
        }],
        "categoryLabels": [{
          "fontColor": { "solid": { "color": "#737373" } },
          "fontSize": 11
        }]
      }
    },
    "slicer": {
      "*": {
        "background": [{ "color": { "solid": { "color": "#FFFFFF" } } }],
        "items": [{
          "fontColor": { "solid": { "color": "#555555" } },
          "fontSize": 11
        }]
      }
    }
  },
  "textClasses": {
    "title": {
      "fontFace": "Nunito Sans, Segoe UI, sans-serif",
      "fontSize": 14,
      "color": "#404040"
    },
    "header": {
      "fontFace": "Nunito Sans, Segoe UI, sans-serif",
      "fontSize": 12,
      "color": "#555555"
    },
    "label": {
      "fontFace": "Nunito Sans, Segoe UI, sans-serif",
      "fontSize": 10,
      "color": "#737373"
    },
    "callout": {
      "fontFace": "Nunito Sans, Segoe UI, sans-serif",
      "fontSize": 28,
      "color": "#404040"
    }
  }
}
```

### Cómo Aplicar el Tema

1. Guardar el JSON como `omnitok-theme.json`
2. En Power BI Desktop: Vista > Temas > Buscar temas > Seleccionar archivo
3. En Power BI Service: Editar > Tema del informe > Importar tema

## Paleta de Colores para Datos

### Colores de Series (dataColors)

| Orden | Color | Hex | Uso |
|-------|-------|-----|-----|
| 1 | Púrpura | `#4D4A9D` | Serie principal, destacado |
| 2 | Magenta | `#FF177B` | Serie secundaria, accent |
| 3 | Cyan | `#1BCDF8` | Tercera serie |
| 4 | Amarillo | `#F2B01E` | Cuarta serie |
| 5 | Verde | `#22C55E` | Quinta serie |
| 6 | Púrpura claro | `#6663B3` | Sexta serie |
| 7 | Violeta | `#C231FA` | Séptima serie |
| 8 | Azul | `#3B82F6` | Octava serie |

### Colores Semánticos

| Significado | Color | Hex | Uso |
|-------------|-------|-----|-----|
| Positivo/Bueno | Verde | `#22C55E` | Crecimiento, cumplimiento, OK |
| Negativo/Malo | Rojo | `#EF4444` | Decrecimiento, alerta, error |
| Advertencia | Amarillo | `#F59E0B` | Atención, precaución |
| Neutro | Gris | `#737373` | Sin tendencia, referencia |
| Meta/Objetivo | Púrpura oscuro | `#3a3878` | Líneas de meta |

### Reglas de Uso de Color

1. **Máximo 5-6 colores** por visualización
2. **No usar rojo/verde** solo para categorías (reservar para semántica)
3. **Consistencia**: misma categoría = mismo color en todo el reporte
4. **Contraste**: verificar legibilidad sobre fondos claros y oscuros
5. **Accesibilidad**: probar con simuladores de daltonismo

## Tipos de Gráficos Recomendados

### Por Caso de Uso

| Caso de Uso | Gráfico Recomendado | Notas |
|-------------|---------------------|-------|
| **Tendencias temporales** | Líneas, Áreas | Usar líneas para múltiples series |
| **Comparación de categorías** | Barras horizontales | Mejor para nombres largos |
| **Ranking** | Barras horizontales ordenadas | De mayor a menor |
| **Partes de un todo** | Donut | Máximo 5-6 categorías |
| **KPIs destacados** | Card, KPI visual | Con indicador de variación |
| **Objetivo vs Real** | Gauge, Bullet chart | O barras con línea de meta |
| **Distribución** | Histograma, Box plot | Para análisis estadístico |
| **Correlación** | Scatter plot | Con línea de tendencia |
| **Geográfico** | Mapa coroplético | Solo si datos geográficos relevantes |
| **Detalle tabular** | Matriz, Tabla | Con formato condicional |

### Gráficos a Evitar

- **Pie charts**: Difíciles de comparar, usar donut con pocas categorías
- **3D charts**: Distorsionan la percepción
- **Gauges múltiples**: Ocupan mucho espacio, usar cards
- **Gráficos decorativos**: Priorizar claridad sobre estética

## Estructura del Dashboard

### Jerarquía Visual (Patrón F)

```
┌─────────────────────────────────────────────────────────────┐
│  TÍTULO DEL DASHBOARD                           [Filtros]   │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  ┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────┐        │
│  │ KPI 1   │  │ KPI 2   │  │ KPI 3   │  │ KPI 4   │        │  ← Métricas clave arriba
│  │ $1.2M   │  │ +15%    │  │ 847     │  │ 92%     │        │
│  └─────────┘  └─────────┘  └─────────┘  └─────────┘        │
│                                                             │
│  ┌─────────────────────────────────────────────────────┐   │
│  │                                                     │   │  ← Gráfico principal
│  │              Gráfico Principal (Tendencia)          │   │     (más grande)
│  │                                                     │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                             │
│  ┌─────────────────────┐  ┌─────────────────────────────┐  │
│  │                     │  │                             │  │  ← Gráficos secundarios
│  │   Gráfico 2         │  │   Gráfico 3                 │  │
│  │   (Comparación)     │  │   (Distribución)            │  │
│  └─────────────────────┘  └─────────────────────────────┘  │
│                                                             │
│  ┌─────────────────────────────────────────────────────┐   │
│  │              Tabla de Detalle                       │   │  ← Detalle abajo
│  └─────────────────────────────────────────────────────┘   │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Dimensiones Recomendadas

| Elemento | Ancho | Alto |
|----------|-------|------|
| Canvas (16:9) | 1280px | 720px |
| Canvas (widescreen) | 1664px | 936px |
| KPI Card | 200-250px | 100-120px |
| Gráfico pequeño | 400-500px | 250-300px |
| Gráfico grande | 800-1000px | 350-400px |
| Tabla | Ancho completo | 200-300px |

### Espaciado

- **Entre elementos**: 16px mínimo
- **Padding interno**: 8-12px
- **Márgenes del canvas**: 24px

## Panel de Chat/Insight IA

### Integración

El panel de Chat IA puede integrarse de varias formas:

1. **Visual personalizado**: Custom visual de Power BI
2. **Iframe externo**: Panel web embebido junto al reporte
3. **Aplicación contenedora**: Si Power BI está embebido en una app

### Diseño del Panel

```css
/* Panel de Chat IA para Power BI */
.chat-panel {
  width: 320px;
  height: 100%;
  background-color: #FFFFFF;
  border-left: 1px solid #E5E5E5;
  display: flex;
  flex-direction: column;
}

.chat-header {
  padding: 16px;
  border-bottom: 1px solid #E5E5E5;
  display: flex;
  align-items: center;
  gap: 8px;
}

.chat-header-title {
  font-family: 'Nunito Sans', sans-serif;
  font-size: 14px;
  font-weight: 600;
  color: #404040;
}

.chat-messages {
  flex: 1;
  overflow-y: auto;
  padding: 16px;
}

.chat-message {
  margin-bottom: 16px;
  padding: 12px;
  border-radius: 8px;
  font-size: 14px;
  line-height: 1.5;
}

.chat-message.assistant {
  background-color: #F5F5F5;
  color: #555555;
}

.chat-message.user {
  background-color: #4D4A9D;
  color: #FFFFFF;
  margin-left: 24px;
}

.chat-insight {
  background-color: rgba(77, 74, 157, 0.1);
  border-left: 3px solid #4D4A9D;
  padding: 12px;
  margin-bottom: 12px;
  border-radius: 0 8px 8px 0;
}

.chat-insight-title {
  font-size: 12px;
  font-weight: 600;
  color: #4D4A9D;
  margin-bottom: 4px;
}

.chat-input-area {
  padding: 16px;
  border-top: 1px solid #E5E5E5;
}

.chat-input {
  width: 100%;
  padding: 12px;
  border: 1px solid #D4D4D4;
  border-radius: 8px;
  font-family: 'Nunito Sans', sans-serif;
  font-size: 14px;
  resize: none;
}

.chat-input:focus {
  outline: none;
  border-color: #4D4A9D;
}
```

### Funcionalidades del Chat IA

1. **Preguntas en lenguaje natural**: "¿Cuál fue el producto más vendido?"
2. **Insights automáticos**: Detectar anomalías, tendencias
3. **Explicaciones**: "¿Por qué bajaron las ventas en marzo?"
4. **Sugerencias**: "Podrías filtrar por región para ver más detalle"
5. **Alertas**: Notificar cuando métricas crucen umbrales

## Filtros y Slicers

### Ubicación

- **Filtros globales**: Parte superior del reporte o panel lateral
- **Filtros de página**: Cerca de las visualizaciones que afectan
- **Evitar**: Más de 5-6 filtros visibles simultáneamente

### Estilo

```json
{
  "slicer": {
    "*": {
      "general": [{
        "outlineColor": { "solid": { "color": "#E5E5E5" } },
        "outlineWeight": 1
      }],
      "items": [{
        "fontColor": { "solid": { "color": "#555555" } },
        "background": { "solid": { "color": "#FFFFFF" } }
      }],
      "selection": [{
        "selectAllCheckboxEnabled": true,
        "singleSelect": false
      }]
    }
  }
}
```

## Accesibilidad

### Checklist

- [ ] Contraste de texto mínimo 4.5:1
- [ ] No usar solo color para transmitir información
- [ ] Títulos descriptivos en todas las visualizaciones
- [ ] Alt text en imágenes
- [ ] Orden de tabulación lógico
- [ ] Tooltips informativos

### Contraste de Colores

| Combinación | Ratio | Estado |
|-------------|-------|--------|
| `#555555` sobre `#FFFFFF` | 7.5:1 | OK |
| `#4D4A9D` sobre `#FFFFFF` | 5.9:1 | OK |
| `#FF177B` sobre `#FFFFFF` | 4.1:1 | Límite (usar para grandes) |
| `#FFFFFF` sobre `#211f4b` | 13.5:1 | OK |

## Buenas Prácticas

1. **Un mensaje por dashboard**: Cada página debe responder una pregunta específica
2. **Menos es más**: Máximo 7-9 visualizaciones por página
3. **Títulos claros**: "Ventas por Región (Q1 2024)" no solo "Ventas"
4. **Contexto**: Incluir período, fuente de datos, última actualización
5. **Interactividad**: Habilitar cross-filtering entre visualizaciones
6. **Performance**: Limitar datos, usar agregaciones, evitar cálculos complejos en visuales
