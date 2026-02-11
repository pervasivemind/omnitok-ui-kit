import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { KanbanBoard, KanbanColumn } from '@omnitok/ui';

const meta: Meta<typeof KanbanBoard> = {
  title: 'Drag and Drop/KanbanBoard',
  component: KanbanBoard,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof KanbanBoard>;

// Story interactivo
function KanbanBoardDemo() {
  const [columns, setColumns] = useState<KanbanColumn[]>([
    {
      id: 'todo',
      title: 'Por Hacer',
      cards: [
        {
          id: 'card-1',
          title: 'Diseñar mockups',
          description: 'Crear los diseños iniciales para la nueva funcionalidad',
          tags: [
            { label: 'Diseño', variant: 'primary' },
            { label: 'Alta', variant: 'danger' },
          ],
        },
        {
          id: 'card-2',
          title: 'Revisar requisitos',
          description: 'Validar los requisitos con el equipo de producto',
          tags: [{ label: 'Documentación', variant: 'default' }],
        },
        {
          id: 'card-3',
          title: 'Configurar entorno',
          description: 'Preparar el ambiente de desarrollo local',
          tags: [{ label: 'DevOps', variant: 'warning' }],
        },
      ],
    },
    {
      id: 'in-progress',
      title: 'En Progreso',
      cards: [
        {
          id: 'card-4',
          title: 'Implementar API',
          description: 'Desarrollar los endpoints del backend',
          tags: [
            { label: 'Backend', variant: 'success' },
            { label: 'Media', variant: 'warning' },
          ],
        },
        {
          id: 'card-5',
          title: 'Crear componentes',
          description: 'Desarrollar los componentes de UI necesarios',
          tags: [{ label: 'Frontend', variant: 'primary' }],
        },
      ],
    },
    {
      id: 'review',
      title: 'En Revisión',
      cards: [
        {
          id: 'card-6',
          title: 'Tests unitarios',
          description: 'Escribir y ejecutar pruebas unitarias',
          tags: [{ label: 'Testing', variant: 'default' }],
        },
      ],
    },
    {
      id: 'done',
      title: 'Completado',
      cards: [
        {
          id: 'card-7',
          title: 'Setup inicial',
          description: 'Configuración inicial del proyecto completada',
          tags: [{ label: 'Completado', variant: 'success' }],
        },
        {
          id: 'card-8',
          title: 'Documentación base',
          description: 'README y documentación inicial creada',
          tags: [{ label: 'Docs', variant: 'default' }],
        },
      ],
    },
  ]);

  const handleCardMove = (
    cardId: string,
    sourceColumnId: string,
    destinationColumnId: string,
    sourceIndex: number,
    destinationIndex: number
  ) => {
    setColumns((prevColumns) => {
      const newColumns = [...prevColumns];

      // Encontrar columnas
      const sourceColumn = newColumns.find((col) => col.id === sourceColumnId);
      const destColumn = newColumns.find((col) => col.id === destinationColumnId);

      if (!sourceColumn || !destColumn) return prevColumns;

      // Remover card de origen
      const [movedCard] = sourceColumn.cards.splice(sourceIndex, 1);

      // Insertar en destino
      destColumn.cards.splice(destinationIndex, 0, movedCard);

      return newColumns;
    });
  };

  return (
    <div className="w-full overflow-x-auto">
      <KanbanBoard columns={columns} onCardMove={handleCardMove} />
    </div>
  );
}

export const Default: Story = {
  render: () => <KanbanBoardDemo />,
};

// Kanban simple
function KanbanBoardSimple() {
  const [columns, setColumns] = useState<KanbanColumn[]>([
    {
      id: 'backlog',
      title: 'Backlog',
      cards: [
        { id: '1', title: 'Tarea 1', description: 'Descripción de la tarea 1' },
        { id: '2', title: 'Tarea 2', description: 'Descripción de la tarea 2' },
        { id: '3', title: 'Tarea 3', description: 'Descripción de la tarea 3' },
      ],
    },
    {
      id: 'doing',
      title: 'En Proceso',
      cards: [
        { id: '4', title: 'Tarea 4', description: 'Descripción de la tarea 4' },
        { id: '5', title: 'Tarea 5', description: 'Descripción de la tarea 5' },
      ],
    },
    {
      id: 'done',
      title: 'Hecho',
      cards: [
        { id: '6', title: 'Tarea 6', description: 'Descripción de la tarea 6' },
      ],
    },
  ]);

  const handleCardMove = (
    cardId: string,
    sourceColumnId: string,
    destinationColumnId: string,
    sourceIndex: number,
    destinationIndex: number
  ) => {
    setColumns((prevColumns) => {
      const newColumns = [...prevColumns];
      const sourceColumn = newColumns.find((col) => col.id === sourceColumnId);
      const destColumn = newColumns.find((col) => col.id === destinationColumnId);

      if (!sourceColumn || !destColumn) return prevColumns;

      const [movedCard] = sourceColumn.cards.splice(sourceIndex, 1);
      destColumn.cards.splice(destinationIndex, 0, movedCard);

      return newColumns;
    });
  };

  return (
    <div className="w-full overflow-x-auto">
      <KanbanBoard columns={columns} onCardMove={handleCardMove} />
    </div>
  );
}

export const Simple: Story = {
  render: () => <KanbanBoardSimple />,
};

// Con muchas tarjetas
function KanbanBoardMany() {
  const [columns, setColumns] = useState<KanbanColumn[]>([
    {
      id: 'col-1',
      title: 'Ideas',
      cards: Array.from({ length: 5 }, (_, i) => ({
        id: `idea-${i + 1}`,
        title: `Idea ${i + 1}`,
        description: `Descripción de la idea número ${i + 1}`,
        tags: [{ label: 'Nueva', variant: 'primary' as const }],
      })),
    },
    {
      id: 'col-2',
      title: 'Planificación',
      cards: Array.from({ length: 3 }, (_, i) => ({
        id: `plan-${i + 1}`,
        title: `Plan ${i + 1}`,
        description: `Descripción del plan número ${i + 1}`,
        tags: [{ label: 'En curso', variant: 'warning' as const }],
      })),
    },
    {
      id: 'col-3',
      title: 'Desarrollo',
      cards: Array.from({ length: 4 }, (_, i) => ({
        id: `dev-${i + 1}`,
        title: `Desarrollo ${i + 1}`,
        description: `Descripción del desarrollo número ${i + 1}`,
        tags: [{ label: 'Activo', variant: 'success' as const }],
      })),
    },
    {
      id: 'col-4',
      title: 'Testing',
      cards: Array.from({ length: 2 }, (_, i) => ({
        id: `test-${i + 1}`,
        title: `Test ${i + 1}`,
        description: `Descripción del test número ${i + 1}`,
        tags: [{ label: 'QA', variant: 'default' as const }],
      })),
    },
  ]);

  const handleCardMove = (
    cardId: string,
    sourceColumnId: string,
    destinationColumnId: string,
    sourceIndex: number,
    destinationIndex: number
  ) => {
    setColumns((prevColumns) => {
      const newColumns = [...prevColumns];
      const sourceColumn = newColumns.find((col) => col.id === sourceColumnId);
      const destColumn = newColumns.find((col) => col.id === destinationColumnId);

      if (!sourceColumn || !destColumn) return prevColumns;

      const [movedCard] = sourceColumn.cards.splice(sourceIndex, 1);
      destColumn.cards.splice(destinationIndex, 0, movedCard);

      return newColumns;
    });
  };

  return (
    <div className="w-full overflow-x-auto">
      <KanbanBoard columns={columns} onCardMove={handleCardMove} />
    </div>
  );
}

export const ManyCards: Story = {
  render: () => <KanbanBoardMany />,
};
