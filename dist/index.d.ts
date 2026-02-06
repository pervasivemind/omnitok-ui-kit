import { Accept } from 'react-dropzone';
import { ButtonHTMLAttributes } from 'react';
import { ClassValue } from 'clsx';
import { default as default_2 } from 'react';
import { FileRejection } from 'react-dropzone';
import { ForwardRefExoticComponent } from 'react';
import { HTMLAttributes } from 'react';
import { ImgHTMLAttributes } from 'react';
import { InputHTMLAttributes } from 'react';
import { JSX as JSX_2 } from 'react/jsx-runtime';
import { ReactNode } from 'react';
import { RefAttributes } from 'react';
import { SelectHTMLAttributes } from 'react';
import { TextareaHTMLAttributes } from 'react';

export declare const Alert: ForwardRefExoticComponent<AlertProps & RefAttributes<HTMLDivElement>>;

export declare interface AlertProps extends HTMLAttributes<HTMLDivElement> {
    /** Alert variant */
    variant?: AlertVariant;
    /** Alert title */
    title?: string;
    /** Alert content */
    children: ReactNode;
    /** Show dismiss button */
    dismissible?: boolean;
    /** Callback when dismissed */
    onDismiss?: () => void;
    /** Hide icon */
    hideIcon?: boolean;
}

export declare type AlertVariant = 'info' | 'success' | 'warning' | 'error';

export declare const Avatar: ForwardRefExoticComponent<AvatarProps & RefAttributes<HTMLDivElement>>;

export declare interface AvatarProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'size'> {
    /** Avatar size */
    size?: AvatarSize;
    /** Image source URL */
    src?: string;
    /** Alt text for image */
    alt?: string;
    /** Fallback initials when no image */
    initials?: string;
    /** Show online status indicator */
    status?: 'online' | 'offline' | 'busy' | 'away';
}

export declare type AvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export declare const Badge: ForwardRefExoticComponent<BadgeProps & RefAttributes<HTMLSpanElement>>;

export declare interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
    /** Badge content */
    children: ReactNode;
    /** Visual variant */
    variant?: BadgeVariant;
    /** Badge size */
    size?: BadgeSize;
    /** Show as pill (fully rounded) */
    pill?: boolean;
    /** Show as dot only (no content) */
    dot?: boolean;
}

export declare type BadgeSize = 'sm' | 'md' | 'lg';

export declare type BadgeVariant = 'default' | 'primary' | 'accent' | 'success' | 'warning' | 'error' | 'info';

export declare const Breadcrumb: ForwardRefExoticComponent<BreadcrumbProps & RefAttributes<HTMLElement>>;

export declare interface BreadcrumbItem {
    /** Display label */
    label: string;
    /** Navigation href */
    href?: string;
    /** Icon element */
    icon?: ReactNode;
}

export declare interface BreadcrumbProps extends HTMLAttributes<HTMLElement> {
    /** Breadcrumb items */
    items: BreadcrumbItem[];
    /** Show home icon on first item */
    showHomeIcon?: boolean;
    /** Separator element */
    separator?: ReactNode;
    /** Maximum items to show (collapses middle items) */
    maxItems?: number;
}

export declare const Button: ForwardRefExoticComponent<ButtonProps & RefAttributes<HTMLButtonElement>>;

export declare interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    /** Visual style variant */
    variant?: ButtonVariant;
    /** Button size */
    size?: ButtonSize;
    /** Show loading spinner */
    loading?: boolean;
    /** Icon to show before text */
    leftIcon?: ReactNode;
    /** Icon to show after text */
    rightIcon?: ReactNode;
    /** Full width button */
    fullWidth?: boolean;
    /** Button content */
    children: ReactNode;
}

export declare type ButtonSize = 'sm' | 'md' | 'lg';

export declare type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'danger' | 'accent' | 'outline';

export declare const Card: ForwardRefExoticComponent<CardProps & RefAttributes<HTMLDivElement>>;

export declare const CardBody: ForwardRefExoticComponent<CardBodyProps & RefAttributes<HTMLDivElement>>;

export declare interface CardBodyProps extends HTMLAttributes<HTMLDivElement> {
    /** Body content */
    children: ReactNode;
}

export declare const CardFooter: ForwardRefExoticComponent<CardFooterProps & RefAttributes<HTMLDivElement>>;

export declare interface CardFooterProps extends HTMLAttributes<HTMLDivElement> {
    /** Footer content */
    children: ReactNode;
    /** Align footer content */
    align?: 'left' | 'center' | 'right' | 'between';
}

export declare const CardHeader: ForwardRefExoticComponent<CardHeaderProps & RefAttributes<HTMLDivElement>>;

export declare interface CardHeaderProps extends HTMLAttributes<HTMLDivElement> {
    /** Header content */
    children: ReactNode;
    /** Action element (e.g., button) */
    action?: ReactNode;
}

export declare interface CardProps extends HTMLAttributes<HTMLDivElement> {
    /** Card content */
    children: ReactNode;
    /** Remove default padding */
    noPadding?: boolean;
    /** Add hover effect */
    hoverable?: boolean;
    /** Card variant */
    variant?: 'default' | 'bordered' | 'elevated';
}

export declare const Checkbox: ForwardRefExoticComponent<CheckboxProps & RefAttributes<HTMLInputElement>>;

export declare interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
    /** Label text */
    label?: string;
    /** Description text below label */
    description?: string;
    /** Error message */
    error?: string;
    /** Indeterminate state */
    indeterminate?: boolean;
}

/**
 * Utility function to merge class names with clsx
 * Useful for conditional classes and merging Tailwind classes
 */
export declare function cn(...inputs: ClassValue[]): string;

export declare const ConfirmModal: {
    ({ message, confirmText, cancelText, confirmVariant, onConfirm, onClose, loading, ...props }: ConfirmModalProps): JSX_2.Element;
    displayName: string;
};

export declare interface ConfirmModalProps extends Omit<ModalProps, 'children' | 'footer'> {
    /** Confirm message */
    message: ReactNode;
    /** Confirm button text */
    confirmText?: string;
    /** Cancel button text */
    cancelText?: string;
    /** Confirm button variant */
    confirmVariant?: 'primary' | 'danger' | 'accent';
    /** Confirm handler */
    onConfirm: () => void;
    /** Loading state */
    loading?: boolean;
}

export declare function DraggableCard({ items, onReorder, className, cardClassName, droppableId, direction, }: DraggableCardProps): JSX_2.Element;

export declare interface DraggableCardItem {
    id: string;
    title?: string;
    children: default_2.ReactNode;
}

export declare interface DraggableCardProps {
    items: DraggableCardItem[];
    onReorder: (items: DraggableCardItem[]) => void;
    className?: string;
    cardClassName?: string;
    droppableId?: string;
    direction?: 'vertical' | 'horizontal';
}

export declare function FileDropzone({ onFilesAccepted, onFilesRejected, accept, maxFiles, maxSize, // 5MB
    multiple, disabled, className, showPreview, }: FileDropzoneProps): JSX_2.Element;

export declare interface FileDropzoneProps {
    onFilesAccepted: (files: File[]) => void;
    onFilesRejected?: (rejections: FileRejection[]) => void;
    accept?: Accept;
    maxFiles?: number;
    maxSize?: number;
    multiple?: boolean;
    disabled?: boolean;
    className?: string;
    showPreview?: boolean;
}

export declare const Header: ForwardRefExoticComponent<HeaderProps & RefAttributes<HTMLElement>>;

export declare interface HeaderProps extends HTMLAttributes<HTMLElement> {
    /** Title displayed in header */
    title?: string;
    /** Breadcrumb element */
    breadcrumb?: ReactNode;
    /** Search placeholder text */
    searchPlaceholder?: string;
    /** Show search input */
    showSearch?: boolean;
    /** Search value */
    searchValue?: string;
    /** Search change handler */
    onSearchChange?: (value: string) => void;
    /** Show notifications button */
    showNotifications?: boolean;
    /** Notification count */
    notificationCount?: number;
    /** Notification click handler */
    onNotificationClick?: () => void;
    /** User info for avatar */
    user?: {
        name: string;
        avatar?: string;
        role?: string;
    };
    /** User click handler */
    onUserClick?: () => void;
    /** Mobile menu toggle handler */
    onMenuToggle?: () => void;
    /** Show mobile menu button */
    showMenuToggle?: boolean;
    /** Extra actions */
    actions?: ReactNode;
}

export declare const Input: ForwardRefExoticComponent<InputProps & RefAttributes<HTMLInputElement>>;

export declare interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
    /** Input size */
    size?: InputSize;
    /** Label text */
    label?: string;
    /** Helper text shown below input */
    helperText?: string;
    /** Error message */
    error?: string;
    /** Icon to show on the left */
    leftIcon?: ReactNode;
    /** Icon to show on the right */
    rightIcon?: ReactNode;
    /** Full width input */
    fullWidth?: boolean;
}

export declare type InputSize = 'sm' | 'md' | 'lg';

export declare function KanbanBoard({ columns, onCardMove, className }: KanbanBoardProps): JSX_2.Element;

export declare interface KanbanBoardProps {
    columns: KanbanColumn[];
    onCardMove: (cardId: string, sourceColumnId: string, destinationColumnId: string, sourceIndex: number, destinationIndex: number) => void;
    className?: string;
}

export declare interface KanbanCard {
    id: string;
    title: string;
    description?: string;
    tags?: {
        label: string;
        variant?: 'default' | 'primary' | 'success' | 'warning' | 'danger';
    }[];
}

export declare interface KanbanColumn {
    id: string;
    title: string;
    cards: KanbanCard[];
    color?: string;
}

export declare const Layout: ForwardRefExoticComponent<LayoutProps & RefAttributes<HTMLDivElement>>;

export declare interface LayoutProps extends HTMLAttributes<HTMLDivElement> {
    /** Main content */
    children: ReactNode;
    /** Custom sidebar node */
    sidebar?: ReactNode;
    /** Sidebar navigation items */
    sidebarItems?: SidebarItem[];
    /** Logo element for sidebar */
    logo?: ReactNode;
    /** Logo element for collapsed sidebar */
    logoCollapsed?: ReactNode;
    /** System name displayed below logo */
    systemName?: string;
    /** Sidebar footer content */
    sidebarFooter?: ReactNode;
    /** Active sidebar item ID */
    activeSidebarId?: string;
    /** Sidebar item click handler */
    onSidebarItemClick?: (item: SidebarItem) => void;
    /** Header title */
    headerTitle?: string;
    /** Header breadcrumb */
    headerBreadcrumb?: ReactNode;
    /** User info for header */
    user?: {
        name: string;
        avatar?: string;
        role?: string;
    };
    /** User click handler */
    onUserClick?: () => void;
    /** Notification count */
    notificationCount?: number;
    /** Notification click handler */
    onNotificationClick?: () => void;
    /** Show header search */
    showSearch?: boolean;
    /** Search value */
    searchValue?: string;
    /** Search change handler */
    onSearchChange?: (value: string) => void;
    /** Header actions */
    headerActions?: ReactNode;
    /** Custom header node */
    header?: ReactNode;
    /** Hide sidebar */
    hideSidebar?: boolean;
    /** Hide header */
    hideHeader?: boolean;
    /** Right panel content (e.g., AI chat) */
    rightPanel?: ReactNode;
    /** Right panel width */
    rightPanelWidth?: string;
}

export declare const LoginPage: ForwardRefExoticComponent<LoginPageProps & RefAttributes<HTMLDivElement>>;

export declare interface LoginPageProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onSubmit'> {
    /** Logo element (square logo recommended) */
    logo?: ReactNode;
    /** Logo for wide/horizontal display */
    logoWide?: ReactNode;
    /** Logo for the split hero panel */
    splitLogo?: ReactNode;
    /** Application/System title */
    title?: string;
    /** Subtitle or description */
    subtitle?: string;
    /** Submit handler */
    onLoginSubmit?: (email: string, password: string) => void;
    /** Loading state */
    loading?: boolean;
    /** Error message */
    error?: string;
    /** Forgot password handler */
    onForgotPassword?: () => void;
    /** Remember me option */
    showRememberMe?: boolean;
    /** Footer content */
    footer?: ReactNode;
    /** Background variant */
    variant?: 'gradient' | 'split' | 'centered';
}

export declare const Modal: ForwardRefExoticComponent<ModalProps & RefAttributes<HTMLDivElement>>;

export declare interface ModalProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
    /** Whether modal is open */
    open: boolean;
    /** Close handler */
    onClose: () => void;
    /** Modal title */
    title?: ReactNode;
    /** Modal description */
    description?: string;
    /** Modal content */
    children: ReactNode;
    /** Footer content */
    footer?: ReactNode;
    /** Modal size */
    size?: ModalSize;
    /** Close on overlay click */
    closeOnOverlay?: boolean;
    /** Close on escape key */
    closeOnEscape?: boolean;
    /** Show close button */
    showCloseButton?: boolean;
    /** Center content vertically */
    centered?: boolean;
}

export declare type ModalSize = 'sm' | 'md' | 'lg' | 'xl' | 'full';

export declare const Pagination: ForwardRefExoticComponent<PaginationProps & RefAttributes<HTMLElement>>;

export declare interface PaginationProps extends Omit<HTMLAttributes<HTMLElement>, 'onChange'> {
    /** Current page (1-indexed) */
    currentPage: number;
    /** Total number of pages */
    totalPages: number;
    /** Change handler */
    onChange: (page: number) => void;
    /** Number of page buttons to show */
    siblingCount?: number;
    /** Show first/last buttons */
    showFirstLast?: boolean;
    /** Show page info text */
    showInfo?: boolean;
    /** Total items count */
    totalItems?: number;
    /** Items per page */
    itemsPerPage?: number;
    /** Disabled state */
    disabled?: boolean;
    /** Size variant */
    size?: 'sm' | 'md' | 'lg';
}

export declare const Radio: ForwardRefExoticComponent<RadioProps & RefAttributes<HTMLInputElement>>;

export declare interface RadioProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
    /** Label text */
    label?: string;
    /** Description text below label */
    description?: string;
    /** Error message */
    error?: string;
}

export declare const Select: ForwardRefExoticComponent<SelectProps & RefAttributes<HTMLSelectElement>>;

export declare interface SelectOption {
    value: string;
    label: string;
    disabled?: boolean;
}

export declare interface SelectProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, 'size'> {
    /** Select size */
    size?: SelectSize;
    /** Label text */
    label?: string;
    /** Helper text shown below select */
    helperText?: string;
    /** Error message */
    error?: string;
    /** Options to display */
    options: SelectOption[];
    /** Placeholder text */
    placeholder?: string;
    /** Full width select */
    fullWidth?: boolean;
    /** Icon to show on the left */
    leftIcon?: ReactNode;
}

export declare type SelectSize = 'sm' | 'md' | 'lg';

export declare const Sidebar: ForwardRefExoticComponent<SidebarProps & RefAttributes<HTMLElement>>;

export declare interface SidebarItem {
    /** Unique identifier */
    id: string;
    /** Display label */
    label: string;
    /** Icon component */
    icon?: ReactNode;
    /** Navigation href */
    href?: string;
    /** Click handler */
    onClick?: () => void;
    /** Nested items */
    children?: SidebarItem[];
    /** Badge content */
    badge?: string | number;
    /** Is this item active */
    active?: boolean;
}

export declare interface SidebarProps extends HTMLAttributes<HTMLElement> {
    /** Navigation items */
    items: SidebarItem[];
    /** Logo element */
    logo?: ReactNode;
    /** Logo element for collapsed state */
    logoCollapsed?: ReactNode;
    /** System name displayed below logo */
    systemName?: string;
    /** Footer content */
    footer?: ReactNode;
    /** Collapsed state */
    collapsed?: boolean;
    /** Callback when collapse state changes */
    onCollapsedChange?: (collapsed: boolean) => void;
    /** Show collapse toggle button */
    collapsible?: boolean;
    /** Custom active item ID */
    activeId?: string;
    /** Callback when item is clicked */
    onItemClick?: (item: SidebarItem) => void;
}

export declare function SingleDraggableCard({ title, children, className, isDragging, dragHandleProps, }: SingleDraggableCardProps): JSX_2.Element;

export declare interface SingleDraggableCardProps {
    id: string;
    title?: string;
    children: default_2.ReactNode;
    className?: string;
    isDragging?: boolean;
    dragHandleProps?: Record<string, unknown>;
}

export declare interface SortableItem {
    id: string;
    content: default_2.ReactNode;
}

export declare function SortableList({ items, onReorder, className, itemClassName, droppableId, }: SortableListProps): JSX_2.Element;

export declare interface SortableListProps {
    items: SortableItem[];
    onReorder: (items: SortableItem[]) => void;
    className?: string;
    itemClassName?: string;
    droppableId?: string;
}

export declare type SortDirection = 'asc' | 'desc' | null;

export declare interface TabItem {
    /** Unique identifier */
    id: string;
    /** Tab label */
    label: string;
    /** Tab icon */
    icon?: ReactNode;
    /** Disabled state */
    disabled?: boolean;
    /** Badge content */
    badge?: string | number;
}

export declare const Table: <T>(props: TableProps<T> & {
    ref?: React.ForwardedRef<HTMLTableElement>;
}) => ReturnType<typeof TableComponent>;

export declare interface TableColumn<T> {
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

declare function TableComponent<T>({ columns, data, rowKey, sortColumn, sortDirection, onSort, onRowClick, loading, emptyMessage, striped, hoverable, compact, className, ...props }: TableProps<T>, ref: React.ForwardedRef<HTMLTableElement>): JSX_2.Element;

export declare interface TableProps<T> extends Omit<HTMLAttributes<HTMLTableElement>, 'children'> {
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

export declare const TabPanel: ForwardRefExoticComponent<TabPanelProps & RefAttributes<HTMLDivElement>>;

export declare interface TabPanelProps extends HTMLAttributes<HTMLDivElement> {
    /** Panel ID (should match tab ID) */
    id: string;
    /** Panel content */
    children: ReactNode;
}

export declare const Tabs: ForwardRefExoticComponent<TabsProps & RefAttributes<HTMLDivElement>>;

export declare interface TabsProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
    /** Tab items */
    items: TabItem[];
    /** Active tab ID */
    activeId?: string;
    /** Default active tab ID */
    defaultActiveId?: string;
    /** Change handler */
    onChange?: (id: string) => void;
    /** Tab variant */
    variant?: 'default' | 'pills' | 'underline';
    /** Full width tabs */
    fullWidth?: boolean;
    /** Tab size */
    size?: 'sm' | 'md' | 'lg';
}

export declare const Textarea: ForwardRefExoticComponent<TextareaProps & RefAttributes<HTMLTextAreaElement>>;

export declare interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    /** Label text */
    label?: string;
    /** Helper text shown below textarea */
    helperText?: string;
    /** Error message */
    error?: string;
    /** Full width textarea */
    fullWidth?: boolean;
    /** Show character count */
    showCount?: boolean;
    /** Maximum character count */
    maxLength?: number;
}

export declare const Toast: ForwardRefExoticComponent<ToastProps & RefAttributes<HTMLDivElement>>;

export declare const ToastContainer: ({ position, toasts, onClose, }: ToastContainerProps) => JSX_2.Element;

export declare interface ToastContainerProps {
    /** Toast position */
    position?: ToastPosition;
    /** Toasts to display */
    toasts: ToastData[];
    /** Close handler */
    onClose: (id: string) => void;
}

declare interface ToastContextValue {
    toasts: ToastData[];
    addToast: (toast: Omit<ToastData, 'id'>) => string;
    removeToast: (id: string) => void;
    success: (message: string, title?: string) => string;
    error: (message: string, title?: string) => string;
    warning: (message: string, title?: string) => string;
    info: (message: string, title?: string) => string;
}

export declare interface ToastData {
    id: string;
    variant: ToastVariant;
    title?: string;
    message: string;
    duration?: number;
}

export declare type ToastPosition = 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'top-center' | 'bottom-center';

export declare interface ToastProps extends HTMLAttributes<HTMLDivElement> {
    /** Toast data */
    toast: ToastData;
    /** Close handler */
    onClose: (id: string) => void;
}

export declare const ToastProvider: ({ children, position }: ToastProviderProps) => JSX_2.Element;

export declare interface ToastProviderProps {
    children: ReactNode;
    position?: ToastPosition;
}

export declare type ToastVariant = 'info' | 'success' | 'warning' | 'error';

export declare const useToast: () => ToastContextValue;

export { }
