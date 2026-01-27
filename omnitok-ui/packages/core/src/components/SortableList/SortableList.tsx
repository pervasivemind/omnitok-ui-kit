import React from 'react';
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
  DroppableProvided,
  DraggableProvided,
  DraggableStateSnapshot,
} from '@hello-pangea/dnd';
import { GripVertical } from 'lucide-react';
import { cn } from '../../utils/cn';

export interface SortableItem {
  id: string;
  content: React.ReactNode;
}

export interface SortableListProps {
  items: SortableItem[];
  onReorder: (items: SortableItem[]) => void;
  className?: string;
  itemClassName?: string;
  droppableId?: string;
}

export function SortableList({
  items,
  onReorder,
  className,
  itemClassName,
  droppableId = 'sortable-list',
}: SortableListProps) {
  const handleDragEnd = (result: DropResult) => {
    if (!result.destination) return;

    const reorderedItems = Array.from(items);
    const [removed] = reorderedItems.splice(result.source.index, 1);
    reorderedItems.splice(result.destination.index, 0, removed);

    onReorder(reorderedItems);
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId={droppableId}>
        {(provided: DroppableProvided) => (
          <ul
            ref={provided.innerRef}
            {...provided.droppableProps}
            className={cn('space-y-2', className)}
          >
            {items.map((item, index) => (
              <Draggable key={item.id} draggableId={item.id} index={index}>
                {(provided: DraggableProvided, snapshot: DraggableStateSnapshot) => (
                  <li
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    className={cn(
                      'group relative flex items-center gap-3 p-4 bg-white border border-neutral-200 rounded-xl',
                      'transition-all duration-200 ease-out',
                      'hover:shadow-md hover:border-primary/40',
                      snapshot.isDragging && 'shadow-xl ring-2 ring-primary/30 rotate-1 scale-[1.02]',
                      itemClassName
                    )}
                    style={{
                      ...provided.draggableProps.style,
                    }}
                  >
                    {/* Barra de gradiente superior cuando se arrastra */}
                    <div
                      className={cn(
                        'absolute top-0 left-0 right-0 h-1 rounded-t-xl transition-opacity duration-200',
                        'bg-gradient-to-r from-accent via-primary to-primary',
                        snapshot.isDragging ? 'opacity-100' : 'opacity-0 group-hover:opacity-50'
                      )}
                    />

                    {/* Handle para arrastrar */}
                    <div
                      {...provided.dragHandleProps}
                      className={cn(
                        'flex-shrink-0 p-1 rounded-lg cursor-grab active:cursor-grabbing',
                        'text-neutral-300 hover:text-neutral-500 hover:bg-neutral-100',
                        'transition-colors duration-150',
                        snapshot.isDragging && 'text-primary'
                      )}
                    >
                      <GripVertical className="w-5 h-5" />
                    </div>

                    {/* Contenido */}
                    <div className="flex-1 min-w-0">{item.content}</div>

                    {/* Indicador de posición */}
                    <span
                      className={cn(
                        'flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full text-xs font-medium',
                        'bg-neutral-100 text-neutral-500',
                        'transition-colors duration-200',
                        snapshot.isDragging && 'bg-primary text-white'
                      )}
                    >
                      {index + 1}
                    </span>
                  </li>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
    </DragDropContext>
  );
}
