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
                      'group relative flex items-center gap-3 px-3.5 py-3 bg-white border border-neutral-200 rounded-xl shadow-card text-[13px] text-neutral-700',
                      'transition-[box-shadow,border-color] duration-150 ease-out',
                      'hover:shadow-card-hover hover:border-primary-line',
                      snapshot.isDragging && 'shadow-menu ring-2 ring-primary/25 border-primary-line',
                      itemClassName
                    )}
                    style={{
                      ...provided.draggableProps.style,
                    }}
                  >

                    {/* Handle para arrastrar */}
                    <div
                      {...provided.dragHandleProps}
                      className={cn(
                        'flex-shrink-0 p-1 rounded-lg cursor-grab active:cursor-grabbing',
                        'text-neutral-400 hover:text-neutral-700 hover:bg-neutral-100',
                        'transition-colors duration-150',
                        snapshot.isDragging && 'text-primary'
                      )}
                    >
                      <GripVertical aria-hidden="true" className="w-4 h-4" />
                    </div>

                    {/* Contenido */}
                    <div className="flex-1 min-w-0">{item.content}</div>

                    {/* Indicador de posición */}
                    <span
                      className={cn(
                        'flex-shrink-0 min-w-6 h-6 px-1.5 flex items-center justify-center rounded-full text-2xs font-semibold tabular-nums',
                        'bg-neutral-100 text-neutral-600',
                        'transition-colors duration-200',
                        snapshot.isDragging && 'bg-primary-soft text-primary-ink'
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
