import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
  DroppableProvided,
  DraggableProvided,
  DraggableStateSnapshot,
  DroppableStateSnapshot,
} from '@hello-pangea/dnd';
import { GripVertical } from 'lucide-react';
import { cn } from '../../utils/cn';

export interface KanbanCard {
  id: string;
  title: string;
  description?: string;
  tags?: { label: string; variant?: 'default' | 'primary' | 'success' | 'warning' | 'danger' }[];
}

export interface KanbanColumn {
  id: string;
  title: string;
  cards: KanbanCard[];
  color?: string;
}

export interface KanbanBoardProps {
  columns: KanbanColumn[];
  onCardMove: (
    cardId: string,
    sourceColumnId: string,
    destinationColumnId: string,
    sourceIndex: number,
    destinationIndex: number
  ) => void;
  className?: string;
}

const tagVariants = {
  default: 'bg-neutral-100 text-neutral-700',
  primary: 'bg-primary-soft text-primary-ink',
  success: 'bg-success-soft text-success-dark',
  warning: 'bg-warning-soft text-warning-dark',
  danger: 'bg-error-soft text-error-dark',
};

export function KanbanBoard({ columns, onCardMove, className }: KanbanBoardProps) {
  const handleDragEnd = (result: DropResult) => {
    const { source, destination, draggableId } = result;

    if (!destination) return;

    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    ) {
      return;
    }

    onCardMove(
      draggableId,
      source.droppableId,
      destination.droppableId,
      source.index,
      destination.index
    );
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <div className={cn('flex gap-4 overflow-x-auto pb-4', className)}>
        {columns.map((column) => (
          <div
            key={column.id}
            className="flex-shrink-0 w-72 bg-[#F4F3F9] rounded-[14px] border border-neutral-200"
          >
            {/* Header de columna */}
            <div
              className={cn(
                'px-4 py-3 border-b border-neutral-200 rounded-t-[14px]',
                'bg-transparent'
              )}
            >
              <div className="flex items-center justify-between">
                <h3 className="font-display text-[14px] font-extrabold text-neutral-800">{column.title}</h3>
                <span
                  className={cn(
                    'px-2 py-0.5 text-2xs font-semibold tabular-nums rounded-full',
                    'bg-white border border-neutral-200 text-neutral-600'
                  )}
                >
                  {column.cards.length}
                </span>
              </div>
            </div>

            {/* Área de cards */}
            <Droppable droppableId={column.id}>
              {(provided: DroppableProvided, snapshot: DroppableStateSnapshot) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  className={cn(
                    'p-3 min-h-[200px] space-y-3 rounded-b-[14px] transition-colors duration-150',
                    snapshot.isDraggingOver && 'bg-primary-soft'
                  )}
                >
                  {column.cards.map((card, index) => (
                    <Draggable key={card.id} draggableId={card.id} index={index}>
                      {(provided: DraggableProvided, snapshot: DraggableStateSnapshot) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          className={cn(
                            'group bg-white rounded-xl border border-neutral-200 shadow-card overflow-hidden',
                            'transition-[box-shadow,border-color] duration-150',
                            'hover:shadow-card-hover hover:border-primary-line',
                            snapshot.isDragging && 'shadow-menu ring-2 ring-primary/25 border-primary-line'
                          )}
                          style={{
                            ...provided.draggableProps.style,
                          }}
                        >
                          {/* Handle */}
                          <div
                            {...provided.dragHandleProps}
                            className={cn(
                              'flex items-center gap-2 px-3 py-2 border-b border-neutral-100',
                              'cursor-grab active:cursor-grabbing',
                              'bg-white'
                            )}
                          >
                            <GripVertical
                              aria-hidden="true"
                              className={cn(
                                'w-4 h-4 flex-shrink-0 text-neutral-400',
                                'group-hover:text-neutral-600',
                                snapshot.isDragging && 'text-primary'
                              )}
                            />
                            <span className="font-semibold text-[13px] text-neutral-800 truncate">
                              {card.title}
                            </span>
                          </div>

                          {/* Contenido */}
                          <div className="p-3">
                            {card.description && (
                              <p className="text-xs leading-5 text-neutral-600 mb-2 line-clamp-2">
                                {card.description}
                              </p>
                            )}

                            {/* Tags */}
                            {card.tags && card.tags.length > 0 && (
                              <div className="flex flex-wrap gap-1">
                                {card.tags.map((tag, tagIndex) => (
                                  <span
                                    key={tagIndex}
                                    className={cn(
                                      'px-2 py-0.5 text-2xs font-semibold tabular-nums rounded-full',
                                      tagVariants[tag.variant || 'default']
                                    )}
                                  >
                                    {tag.label}
                                  </span>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}

                  {/* Estado vacío */}
                  {column.cards.length === 0 && !snapshot.isDraggingOver && (
                    <div className="flex items-center justify-center h-24 rounded-xl border border-dashed border-neutral-300 text-neutral-500 text-xs">
                      Sin tarjetas
                    </div>
                  )}
                </div>
              )}
            </Droppable>
          </div>
        ))}
      </div>
    </DragDropContext>
  );
}
