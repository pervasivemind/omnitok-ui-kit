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
                      'group relative bg-white border border-neutral-200 rounded-xl overflow-hidden',
                      'transition-all duration-200 ease-out',
                      'hover:shadow-lg hover:border-primary/40 hover:-translate-y-0.5',
                      snapshot.isDragging && 'shadow-2xl ring-2 ring-primary/30 scale-[1.02] rotate-1',
                      cardClassName
                    )}
                    style={{
                      ...provided.draggableProps.style,
                    }}
                  >
                    {/* Header con título y gradiente */}
                    {item.title ? (
                      <div
                        {...provided.dragHandleProps}
                        className={cn(
                          'flex items-center justify-between px-4 py-3',
                          'bg-gradient-to-r from-primary to-primary-dark text-white',
                          'cursor-grab active:cursor-grabbing'
                        )}
                      >
                        <h3 className="font-semibold">{item.title}</h3>
                        <GripVertical className="w-5 h-5 opacity-70" />
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
                          className={cn(
                            'w-5 h-5 flex-shrink-0 text-neutral-300',
                            'group-hover:text-neutral-400 transition-colors',
                            snapshot.isDragging && 'text-primary'
                          )}
                        />
                        <div className="flex-1 h-px bg-gradient-to-r from-neutral-200 via-neutral-300 to-transparent" />
                      </div>
                    )}

                    {/* Contenido */}
                    <div className={cn(item.title ? 'p-4' : 'px-4 pb-4')}>
                      {item.children}
                    </div>

                    {/* Barra superior de gradiente cuando no hay título */}
                    {!item.title && (
                      <div
                        className={cn(
                          'absolute top-0 left-0 right-0 h-1 transition-opacity duration-200',
                          'bg-gradient-to-r from-accent via-primary to-primary',
                          snapshot.isDragging ? 'opacity-100' : 'opacity-0 group-hover:opacity-50'
                        )}
                      />
                    )}
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
        'group relative bg-white border border-neutral-200 rounded-xl overflow-hidden',
        'transition-all duration-200 ease-out',
        'hover:shadow-lg hover:border-primary/40 hover:-translate-y-0.5',
        isDragging && 'shadow-2xl ring-2 ring-primary/30 scale-[1.02] rotate-1',
        className
      )}
    >
      {/* Header con título y gradiente */}
      {title ? (
        <div
          {...dragHandleProps}
          className={cn(
            'flex items-center justify-between px-4 py-3',
            'bg-gradient-to-r from-primary to-primary-dark text-white',
            'cursor-grab active:cursor-grabbing'
          )}
        >
          <h3 className="font-semibold">{title}</h3>
          <GripVertical className="w-5 h-5 opacity-70" />
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
            className={cn(
              'w-5 h-5 flex-shrink-0 text-neutral-300',
              'group-hover:text-neutral-400 transition-colors',
              isDragging && 'text-primary'
            )}
          />
          <div className="flex-1 h-px bg-gradient-to-r from-neutral-200 via-neutral-300 to-transparent" />
        </div>
      )}

      {/* Contenido */}
      <div className={cn(title ? 'p-4' : 'px-4 pb-4')}>{children}</div>

      {/* Barra superior de gradiente cuando no hay título */}
      {!title && (
        <div
          className={cn(
            'absolute top-0 left-0 right-0 h-1 transition-opacity duration-200',
            'bg-gradient-to-r from-accent via-primary to-primary',
            isDragging ? 'opacity-100' : 'opacity-0 group-hover:opacity-50'
          )}
        />
      )}
    </div>
  );
}
