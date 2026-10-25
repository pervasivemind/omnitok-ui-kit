# Historias fuera del Storybook v3

Estas historias y documentos son de la línea anterior (0.2.x y v2) y no
representan el diseño v3 (`DESIGN.md`). Se sacaron del Storybook publicado
el 2026-10-25 a pedido de Pablo; quedan aquí, sin cargarse
(`.storybook/main.ts` solo lee `src/stories`), hasta que se decida si los
componentes que muestran se retiran del paquete.

- `Layout`, `Header`, `Sidebar`: el shell antiguo. En v3 es `Layout/Shell v3`
  (Layout con `brandHeader`), `BrandHeader` y `SidebarAccount`.
- `DraggableCard`, `KanbanBoard`, `SortableList`, `docs/DragAndDrop.mdx`: sin
  uso en la plataforma BI.
- `docs/Metabase.mdx`, `docs/PowerBI.mdx`: guías de incrustación de la línea
  anterior.
- `examples/`: pantallas de demostración con el shell antiguo.
