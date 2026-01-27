import { forwardRef, type HTMLAttributes, type ReactNode } from 'react';
import { ArrowUp, ArrowDown, ArrowUpDown } from 'lucide-react';
import { cn } from '../../utils/cn';

export type SortDirection = 'asc' | 'desc' | null;

export interface TableColumn<T> {
  /** Unique key for the column */
  key: string;
  /** Column header label */
  header: string;
  /** Render function for cell content */
  render?: (row: T, index: number) => ReactNode;
  /** Accessor key for simple data access */
  accessor?: keyof T;
  /** Column width */
  width?: string;
  /** Enable sorting for this column */
  sortable?: boolean;
  /** Text alignment */
  align?: 'left' | 'center' | 'right';
}

export interface TableProps<T> extends Omit<HTMLAttributes<HTMLTableElement>, 'children'> {
  /** Table columns configuration */
  columns: TableColumn<T>[];
  /** Table data */
  data: T[];
  /** Row key accessor */
  rowKey: keyof T | ((row: T) => string);
  /** Currently sorted column */
  sortColumn?: string;
  /** Current sort direction */
  sortDirection?: SortDirection;
  /** Sort change handler */
  onSort?: (column: string, direction: SortDirection) => void;
  /** Row click handler */
  onRowClick?: (row: T, index: number) => void;
  /** Loading state */
  loading?: boolean;
  /** Empty state message */
  emptyMessage?: string;
  /** Striped rows */
  striped?: boolean;
  /** Hoverable rows */
  hoverable?: boolean;
  /** Compact size */
  compact?: boolean;
}

function TableComponent<T>(
  {
    columns,
    data,
    rowKey,
    sortColumn,
    sortDirection,
    onSort,
    onRowClick,
    loading = false,
    emptyMessage = 'No data available',
    striped = false,
    hoverable = true,
    compact = false,
    className,
    ...props
  }: TableProps<T>,
  ref: React.ForwardedRef<HTMLTableElement>
) {
  const getRowKey = (row: T, index: number): string => {
    if (typeof rowKey === 'function') {
      return rowKey(row);
    }
    return String(row[rowKey] ?? index);
  };

  const getCellValue = (row: T, column: TableColumn<T>, index: number): ReactNode => {
    if (column.render) {
      return column.render(row, index);
    }
    if (column.accessor) {
      return String(row[column.accessor] ?? '');
    }
    return '';
  };

  const handleSort = (column: TableColumn<T>) => {
    if (!column.sortable || !onSort) return;

    let newDirection: SortDirection = 'asc';
    if (sortColumn === column.key) {
      if (sortDirection === 'asc') newDirection = 'desc';
      else if (sortDirection === 'desc') newDirection = null;
    }
    onSort(column.key, newDirection);
  };

  const renderSortIcon = (column: TableColumn<T>) => {
    if (!column.sortable) return null;

    const isActive = sortColumn === column.key;
    const iconClass = cn(
      'w-4 h-4 ml-1',
      isActive ? 'text-white' : 'text-white/60'
    );

    if (isActive && sortDirection === 'asc') {
      return <ArrowUp className={iconClass} />;
    }
    if (isActive && sortDirection === 'desc') {
      return <ArrowDown className={iconClass} />;
    }
    return <ArrowUpDown className={iconClass} />;
  };

  const alignClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  return (
    <div className="overflow-x-auto">
      <table
        ref={ref}
        className={cn('w-full border-collapse', className)}
        {...props}
      >
        <thead className="bg-primary text-white">
          <tr>
            {columns.map((column) => (
              <th
                key={column.key}
                className={cn(
                  'font-semibold text-white text-sm',
                  compact ? 'px-3 py-2' : 'px-4 py-3',
                  alignClasses[column.align || 'left'],
                  column.sortable && 'cursor-pointer select-none hover:bg-primary-dark'
                )}
                style={{ width: column.width }}
                onClick={() => handleSort(column)}
              >
                <div className={cn(
                  'flex items-center',
                  column.align === 'center' && 'justify-center',
                  column.align === 'right' && 'justify-end'
                )}>
                  {column.header}
                  {renderSortIcon(column)}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-neutral-200">
          {loading ? (
            <tr>
              <td
                colSpan={columns.length}
                className="px-4 py-8 text-center text-neutral-500"
              >
                <div className="flex items-center justify-center gap-2">
                  <div className="w-5 h-5 border-2 border-primary border-t-transparent rounded-full animate-spin" />
                  Loading...
                </div>
              </td>
            </tr>
          ) : data.length === 0 ? (
            <tr>
              <td
                colSpan={columns.length}
                className="px-4 py-8 text-center text-neutral-500"
              >
                {emptyMessage}
              </td>
            </tr>
          ) : (
            data.map((row, index) => (
              <tr
                key={getRowKey(row, index)}
                className={cn(
                  'transition-colors',
                  striped && index % 2 === 1 && 'bg-neutral-50',
                  hoverable && 'hover:bg-neutral-50',
                  onRowClick && 'cursor-pointer'
                )}
                onClick={() => onRowClick?.(row, index)}
              >
                {columns.map((column) => (
                  <td
                    key={column.key}
                    className={cn(
                      'text-neutral-700 text-sm',
                      compact ? 'px-3 py-2' : 'px-4 py-3',
                      alignClasses[column.align || 'left']
                    )}
                  >
                    {getCellValue(row, column, index)}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export const Table = forwardRef(TableComponent) as <T>(
  props: TableProps<T> & { ref?: React.ForwardedRef<HTMLTableElement> }
) => ReturnType<typeof TableComponent>;
