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

export interface DraggableCardItem {
  id: string;
  title?: string;
  children: React.ReactNode;
}

export interface DraggableCardProps {
  items: DraggableCardItem[];
  onReorder: (items: DraggableCardItem[]) => void;
  className?: string;
  cardClassName?: string;
  droppableId?: string;
  direction?: 'vertical' | 'horizontal';
}

export function DraggableCard({
  items,
  onReorder,
  className,
  cardClassName,
  droppableId = 'draggable-cards',
  direction = 'vertical',
}: DraggableCardProps) {
  const handleDragEnd = (result: DropResult) => {
    if (!result.destination) return;

    const reorderedItems = Array.from(items);
    const [removed] = reorderedItems.splice(result.source.index, 1);
    reorderedItems.splice(result.destination.index, 0, removed);

    onReorder(reorderedItems);
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId={droppableId} direction={direction}>
        {(provided: DroppableProvided) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className={cn(
              direction === 'horizontal' ? 'flex gap-4' : 'space-y-4',
              className
            )}
          >
            {items.map((item, index) => (
              <Draggable key={item.id} draggableId={item.id} index={index}>
                {(provided: DraggableProvided, snapshot: DraggableStateSnapshot) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    className={cn(
                      'group relative bg-white border border-neutral-200 rounded-[14px] shadow-card overflow-hidden',
                      'transition-[box-shadow,border-color] duration-150 ease-out',
                      'hover:shadow-card-hover hover:border-primary-line',
                      snapshot.isDragging && 'shadow-menu ring-2 ring-primary/25 border-primary-line',
                      cardClassName
                    )}
                    style={{
                      ...provided.draggableProps.style,
                    }}
                  >
                    {/* v3: white header with a line under it, like Card. */}
                    {item.title ? (
                      <div
                        {...provided.dragHandleProps}
                        className={cn(
                          'flex items-center justify-between gap-3 px-4 py-3',
                          'bg-white border-b border-neutral-200 text-neutral-800',
                          'cursor-grab active:cursor-grabbing'
                        )}
                      >
                        <h3 className="font-display text-[15px] font-extrabold leading-6">{item.title}</h3>
                        <GripVertical aria-hidden="true" className="w-4 h-4 flex-shrink-0 text-neutral-400 transition-colors group-hover:text-neutral-600" />
                      </div>
                    ) : (
                      /* Handle sin título */
                      <div
                        {...provided.dragHandleProps}
                        className={cn(
                          'flex items-center gap-3 px-4 pt-4 pb-2',
                          'cursor-grab active:cursor-grabbing'
                        )}
                      >
                        <GripVertical
                          aria-hidden="true"
                          className={cn(
                            'w-4 h-4 flex-shrink-0 text-neutral-400',
                            'group-hover:text-neutral-600 transition-colors',
                            snapshot.isDragging && 'text-primary'
                          )}
                        />
                        <div className="flex-1 h-px bg-neutral-200" />
                      </div>
                    )}

                    {/* Contenido */}
                    <div className={cn('text-[13px] leading-5 text-neutral-700', item.title ? 'p-4' : 'px-4 pb-4')}>
                      {item.children}
                    </div>
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}

// Componente simple para uso individual (sin contexto de lista)
export interface SingleDraggableCardProps {
  id: string;
  title?: string;
  children: React.ReactNode;
  className?: string;
  isDragging?: boolean;
  dragHandleProps?: Record<string, unknown>;
}

export function SingleDraggableCard({
  title,
  children,
  className,
  isDragging = false,
  dragHandleProps,
}: SingleDraggableCardProps) {
  return (
    <div
      className={cn(
        'group relative bg-white border border-neutral-200 rounded-[14px] shadow-card overflow-hidden',
        'transition-[box-shadow,border-color] duration-150 ease-out',
        'hover:shadow-card-hover hover:border-primary-line',
        isDragging && 'shadow-menu ring-2 ring-primary/25 border-primary-line',
        className
      )}
    >
      {/* v3: white header with a line under it, like Card. */}
      {title ? (
        <div
          {...dragHandleProps}
          className={cn(
            'flex items-center justify-between gap-3 px-4 py-3',
            'bg-white border-b border-neutral-200 text-neutral-800',
            'cursor-grab active:cursor-grabbing'
          )}
        >
          <h3 className="font-display text-[15px] font-extrabold leading-6">{title}</h3>
          <GripVertical aria-hidden="true" className="w-4 h-4 flex-shrink-0 text-neutral-400 transition-colors group-hover:text-neutral-600" />
        </div>
      ) : (
        /* Handle sin título */
        <div
          {...dragHandleProps}
          className={cn(
            'flex items-center gap-3 px-4 pt-4 pb-2',
            'cursor-grab active:cursor-grabbing'
          )}
        >
          <GripVertical
            aria-hidden="true"
            className={cn(
              'w-4 h-4 flex-shrink-0 text-neutral-400',
              'group-hover:text-neutral-600 transition-colors',
              isDragging && 'text-primary'
            )}
          />
          <div className="flex-1 h-px bg-neutral-200" />
        </div>
      )}

      {/* Contenido */}
      <div className={cn('text-[13px] leading-5 text-neutral-700', title ? 'p-4' : 'px-4 pb-4')}>{children}</div>
    </div>
  );
}
