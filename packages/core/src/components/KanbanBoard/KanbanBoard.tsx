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
  primary: 'bg-primary/10 text-primary',
  success: 'bg-green-100 text-green-700',
  warning: 'bg-amber-100 text-amber-700',
  danger: 'bg-red-100 text-red-700',
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
            className="flex-shrink-0 w-72 bg-neutral-50 rounded-xl border border-neutral-200"
          >
            {/* Header de columna */}
            <div
              className={cn(
                'px-4 py-3 border-b border-neutral-200 rounded-t-xl',
                'bg-gradient-to-r from-neutral-100 to-neutral-50'
              )}
            >
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-neutral-800">{column.title}</h3>
                <span
                  className={cn(
                    'px-2 py-0.5 text-xs font-medium rounded-full',
                    'bg-primary/10 text-primary'
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
                    'p-3 min-h-[200px] space-y-3 transition-colors duration-200',
                    snapshot.isDraggingOver && 'bg-primary/5'
                  )}
                >
                  {column.cards.map((card, index) => (
                    <Draggable key={card.id} draggableId={card.id} index={index}>
                      {(provided: DraggableProvided, snapshot: DraggableStateSnapshot) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          className={cn(
                            'group bg-white rounded-lg border border-neutral-200 overflow-hidden',
                            'transition-all duration-200',
                            'hover:shadow-md hover:border-primary/30',
                            snapshot.isDragging && 'shadow-xl ring-2 ring-primary/30 rotate-2'
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
                              'bg-gradient-to-r from-neutral-50 to-white'
                            )}
                          >
                            <GripVertical
                              className={cn(
                                'w-4 h-4 text-neutral-300',
                                'group-hover:text-neutral-400',
                                snapshot.isDragging && 'text-primary'
                              )}
                            />
                            <span className="font-medium text-sm text-neutral-800 truncate">
                              {card.title}
                            </span>
                          </div>

                          {/* Contenido */}
                          <div className="p-3">
                            {card.description && (
                              <p className="text-sm text-neutral-600 mb-2 line-clamp-2">
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
                                      'px-2 py-0.5 text-xs font-medium rounded-full',
                                      tagVariants[tag.variant || 'default']
                                    )}
                                  >
                                    {tag.label}
                                  </span>
                                ))}
                              </div>
                            )}
                          </div>

                          {/* Barra de gradiente superior */}
                          <div
                            className={cn(
                              'absolute top-0 left-0 right-0 h-0.5 transition-opacity duration-200',
                              'bg-gradient-to-r from-accent via-primary to-primary',
                              snapshot.isDragging ? 'opacity-100' : 'opacity-0 group-hover:opacity-50'
                            )}
                          />
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}

                  {/* Estado vacío */}
                  {column.cards.length === 0 && !snapshot.isDraggingOver && (
                    <div className="flex items-center justify-center h-24 text-neutral-400 text-sm">
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
