import { Accept } from 'react-dropzone';
import { ButtonHTMLAttributes } from 'react';
import { ClassValue } from 'clsx';
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
    children?: ReactNode;
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

export declare type BadgeVariant = 'primary' | 'neutral' | 'success' | 'warning' | 'error' | 'info';

export declare const BrandHeader: ForwardRefExoticComponent<BrandHeaderProps & RefAttributes<HTMLElement>>;

/**
 * Omnitok UI v3 — the compact brand header (42 px).
 *
 * Left: the menu toggle and the CUSTOMER's brand (a logo node, or their
 * name as text when no logo exists). Centre: a label that says where the
 * user is ("Gating · Executive Summary"). Right: "POWERED BY omnitok".
 *
 * The brand belongs to the customer, never to Omnitok: a tenant without a
 * logo shows its own name. The platform keeps the powered-by mark.
 */
export declare interface BrandHeaderProps extends HTMLAttributes<HTMLElement> {
    /** Customer brand: an `<img>` or any node. Takes precedence over `brandText`. */
    brand?: ReactNode;
    /** Customer name rendered as a wordmark when there is no logo. */
    brandText?: string;
    /** Where the user is: "Proyecto · Reporte" or the page name. */
    label?: ReactNode;
    /** Show the "powered by omnitok" mark. Default true. */
    poweredBy?: boolean;
    /** Replaces the default "POWERED BY" caption. */
    poweredByCaption?: string;
    /** Extra controls placed before the powered-by mark. */
    actions?: ReactNode;
    /** Menu toggle handler (collapse on desktop, drawer on mobile). Hidden when absent. */
    onMenuToggle?: () => void;
    /** Accessible name of the menu toggle. */
    menuLabel?: string;
}

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
    /**
     * Quiet button for icons and minor actions: ink text at rest, a violet
     * tint on hover (D40). With `variant="danger"` the hover turns red (D41).
     * Other variants are ignored while ghost.
     */
    ghost?: boolean;
    /** Full width button */
    fullWidth?: boolean;
    /** Button content */
    children: ReactNode;
}

export declare type ButtonSize = 'xs' | 'sm' | 'md' | 'lg';

/**
 * v3 (DESIGN.md, Buttons): `primary` for the one action of an area,
 * `secondary` for shared actions, `outline` for the rest. `danger`,
 * `accept` and `info` exist for confirmation dialogs only.
 */
export declare type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'danger' | 'accept' | 'info';

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
    /** Render as a toggle switch */
    toggle?: boolean;
    /** Callback when checked state changes, provides the new boolean value */
    onCheckedChange?: (checked: boolean) => void;
}

/**
 * Utility function to merge class names with clsx
 * Useful for conditional classes and merging Tailwind classes
 */
export declare function cn(...inputs: ClassValue[]): string;

export declare const CodeEditor: ForwardRefExoticComponent<CodeEditorProps & RefAttributes<HTMLDivElement>>;

export declare interface CodeEditorProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
    /** Label text */
    label?: string;
    /** Helper text shown below the editor */
    helperText?: string;
    /** Error message */
    error?: string;
    /** Full width editor */
    fullWidth?: boolean;
    /** Current code value (controlled) */
    value: string;
    /** Called with the new code on edit */
    onValueChange?: (code: string) => void;
    /** Prism language id (e.g. 'javascript', 'json', 'tsx'). Non-core grammars are lazy-loaded. */
    language?: string;
    /** Placeholder shown when empty */
    placeholder?: string;
    /** Number of spaces per indent level */
    tabSize?: number;
    /** Insert spaces instead of a tab character */
    insertSpaces?: boolean;
    /** Minimum height of the editing area */
    minHeight?: number | string;
    /** Render highlighted, read-only content with no textarea */
    displayOnly?: boolean;
    /** Show a line-number gutter */
    showLineNumbers?: boolean;
    /** Show a line/character count footer */
    showCount?: boolean;
    /** Show a copy-to-clipboard button */
    showCopyButton?: boolean;
    /** Disable editing */
    disabled?: boolean;
}

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
    confirmVariant?: 'primary' | 'danger';
    /** Confirm handler */
    onConfirm: () => void;
    /** Loading state */
    loading?: boolean;
}

export declare function createTranslator({ language, messagesByLanguage, fallbackLanguage, }: CreateTranslatorOptions): {
    language: string;
    messagesByLanguage: MessagesByLanguage;
    t: (key: string, vars?: Record<string, string | number>) => string;
};

declare interface CreateTranslatorOptions {
    language: string;
    /** Per-language message dictionaries (merged on top of defaults) */
    messagesByLanguage?: MessagesByLanguage;
    /** Fallback language if key is missing for current language */
    fallbackLanguage?: SupportedLanguage;
}

export declare const defaultMessages: Record<SupportedLanguage, Record<string, string>>;

export declare const Dropdown: ForwardRefExoticComponent<DropdownProps & RefAttributes<HTMLDivElement>>;

export declare const DropdownMenu: ForwardRefExoticComponent<DropdownMenuProps & RefAttributes<HTMLDivElement>>;

export declare interface DropdownMenuItem {
    /** Display label */
    label: string;
    /** Unique value identifier */
    value: string;
    /** Icon component */
    icon?: ReactNode;
    /** Navigation href — renders item as an anchor tag */
    href?: string;
    /** Click handler for this specific item */
    onClick?: () => void;
    /** Disabled state */
    disabled?: boolean;
    /** Danger / destructive style */
    danger?: boolean;
    /** Render a divider line above this item */
    dividerBefore?: boolean;
    /** Badge content */
    badge?: ReactNode;
}

export declare interface DropdownMenuProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onSelect'> {
    /** Card content */
    card?: ReactNode;
    /** Menu items */
    items: DropdownMenuItem[];
    /** Callback when any item is selected (fires in addition to item-level onClick) */
    onSelect?: (value: string) => void;
    /** Trigger element that opens the menu */
    trigger: ReactNode;
    /** Menu placement relative to trigger */
    placement?: DropdownPlacement;
    /** Distance in pixels between the trigger and the menu panel */
    offset?: number;
    /** Menu item size */
    size?: DropdownMenuSize;
    /** Disabled state (prevents opening) */
    disabled?: boolean;
}

export declare type DropdownMenuSize = 'sm' | 'md' | 'lg';

export declare type DropdownPlacement = 'bottom-start' | 'bottom-end' | 'bottom' | 'top-start' | 'top-end' | 'top' | 'left-start' | 'left-end' | 'left' | 'right-start' | 'right-end' | 'right';

export declare interface DropdownProps extends HTMLAttributes<HTMLDivElement> {
    /** Trigger element that opens the dropdown */
    trigger: ReactNode;
    /** Content rendered inside the dropdown panel */
    children: ReactNode;
    /** Dropdown placement relative to trigger */
    placement?: DropdownPlacement;
    /** Distance in pixels between the trigger and the dropdown panel */
    offset?: number;
    /** Disabled state (prevents opening) */
    disabled?: boolean;
    /** Controlled open state */
    open?: boolean;
    /** Callback when open state changes */
    onOpenChange?: (open: boolean) => void;
    /** Additional classes for the trigger wrapper*/
    triggerClassName?: string;
    /** Additional classes for the dropdown panel */
    contentClassName?: string;
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

export declare interface I18nContextValue {
    language: string;
    messagesByLanguage: MessagesByLanguage;
    t: (key: string, vars?: Record<string, string | number>) => string;
}

export declare function I18nProvider({ children, language, messages, fallbackLanguage, }: I18nProviderProps): JSX_2.Element;

export declare interface I18nProviderProps {
    children: ReactNode;
    /** Current language code (controlled by the host app) */
    language: string;
    /** Optional per-language dictionaries to extend/override built-in messages */
    messages?: MessagesByLanguage;
    /** Fallback language for missing keys (defaults to 'en') */
    fallbackLanguage?: SupportedLanguage;
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

export declare const Layout: ForwardRefExoticComponent<LayoutProps & RefAttributes<HTMLDivElement>>;

/**
 * Omnitok UI v3 — application shell.
 *
 * A 42 px brand header across the top, the framed navy sidebar on the
 * left, the content on the canvas. The header's menu button collapses the
 * sidebar on desktop and opens it as a drawer on small screens.
 */
export declare interface LayoutProps extends HTMLAttributes<HTMLDivElement> {
    /** Main content */
    children: ReactNode;
    /** Custom sidebar node */
    sidebar?: ReactNode;
    /** Sidebar navigation items */
    sidebarItems?: SidebarItem[];
    /** Sidebar footer content */
    sidebarFooter?: ReactNode;
    /** Sidebar footer content while collapsed */
    sidebarFooterCollapsed?: ReactNode;
    /** Active sidebar item ID */
    activeSidebarId?: string;
    /** Sidebar item click handler */
    onSidebarItemClick?: (item: SidebarItem) => void;
    /** Project selector card at the top of the sidebar */
    projectSelector?: SidebarProjectSelector;
    /** Open sidebar groups (controlled) */
    sidebarExpandedIds?: string[];
    /** Group toggled (controlled) */
    onSidebarExpandedChange?: (id: string, expanded: boolean) => void;
    /** Collapsed state of the sidebar (controlled). Uncontrolled when omitted. */
    sidebarCollapsed?: boolean;
    /** Collapse state change */
    onSidebarCollapsedChange?: (collapsed: boolean) => void;
    /** The brand header. Its `onMenuToggle` is wired by the layout. */
    brandHeader: Omit<BrandHeaderProps, 'onMenuToggle'>;
    /** Custom header node, instead of the brand header */
    header?: ReactNode;
    /** Hide sidebar */
    hideSidebar?: boolean;
    /** Hide header */
    hideHeader?: boolean;
    /** Right panel content (e.g., AI chat) */
    rightPanel?: ReactNode;
    /** Right panel width */
    rightPanelWidth?: string;
    /** Padding of the main area. Default `p-6`; pass `''` for edge-to-edge content. */
    mainClassName?: string;
}

export declare const LoginPage: ForwardRefExoticComponent<LoginPageProps & RefAttributes<HTMLDivElement>>;

/**
 * Omnitok UI v3 — sign-in page.
 *
 * Split screen (D26): the customer's brand on the left over the sidebar
 * colour (so a tenant tint reaches it), the form on the right on white.
 * Below `lg` the hero folds away and the brand sits above the form.
 *
 * The brand is the customer's: a logo node or, without one, its name as a
 * wordmark (`brandText`). The platform keeps the "powered by" mark.
 */
export declare interface LoginPageProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onSubmit'> {
    /** Language for built-in strings. Overrides I18nProvider language if set. */
    language?: SupportedLanguage;
    /** Logo element (square logo recommended) */
    logo?: ReactNode;
    /** Logo for wide/horizontal display */
    logoWide?: ReactNode;
    /** Logo for the split hero panel (drawn on the dark side) */
    splitLogo?: ReactNode;
    /** Customer name as a wordmark when there is no logo. */
    brandText?: string;
    /** Split hero title. Defaults to the kit's welcome string. */
    heroTitle?: ReactNode;
    /** Split hero description. */
    heroDescription?: ReactNode;
    /** Show "powered by omnitok" in the split hero. Default true. */
    poweredBy?: boolean;
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
    /** Show forgot password option */
    showForgotPassword?: boolean;
    /** Footer content */
    footer?: ReactNode;
    /**
     * Prefix for the field ids. Default: none, so the fields keep the stable
     * ids `email` and `password` that hosts and tests rely on. Set it when two
     * login forms share a page.
     */
    idPrefix?: string;
}

export declare type MessagesByLanguage = Record<string, Record<string, string>>;

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

export declare const MultiSelect: ForwardRefExoticComponent<MultiSelectProps & RefAttributes<HTMLDivElement>>;

export declare interface MultiSelectOption {
    value: string;
    label: string;
    disabled?: boolean;
}

export declare interface MultiSelectProps {
    /** Available options */
    options: MultiSelectOption[];
    /** Controlled selected values */
    value?: string[];
    /** Default selected values (uncontrolled) */
    defaultValue?: string[];
    /** Callback when selection changes */
    onChange?: (values: string[]) => void;
    /** Component size */
    size?: MultiSelectSize;
    /** Label text */
    label?: string;
    /** Helper text shown below the input */
    helperText?: string;
    /** Error message */
    error?: string;
    /** Placeholder when no items are selected */
    placeholder?: string;
    /** Full width component */
    fullWidth?: boolean;
    /** Disabled state */
    disabled?: boolean;
    /** Maximum number of selectable items */
    maxItems?: number;
    /** Enable search/filter functionality */
    searchable?: boolean;
    /** Icon to show on the left */
    leftIcon?: ReactNode;
    /** Additional class name */
    className?: string;
    /** Element id */
    id?: string;
}

export declare type MultiSelectSize = 'sm' | 'md' | 'lg';

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
    /** Options for the items-per-page selector. When provided (non-empty), a page-size dropdown is shown; when omitted, it is hidden. */
    itemsPerPageOptions?: number[];
    /** Fired when the user selects a new page size from the selector */
    onItemsPerPageChange?: (itemsPerPage: number) => void;
    /** Placement of the info text + selector cluster. 'end' pushes it to the far side with space-between. */
    infoPosition?: 'start' | 'end';
    /** Disabled state */
    disabled?: boolean;
    /** Size variant */
    size?: 'sm' | 'md' | 'lg';
    /** Language */
    language?: SupportedLanguage;
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
    /** Enable search/filter functionality (renders a searchable single-select combobox) */
    searchable?: boolean;
    /** Icon to show on the left */
    leftIcon?: ReactNode;
}

export declare type SelectSize = 'sm' | 'md' | 'lg';

export declare const Sidebar: ForwardRefExoticComponent<SidebarProps & RefAttributes<HTMLElement>>;

export declare const SidebarAccount: ForwardRefExoticComponent<SidebarAccountProps & RefAttributes<HTMLDivElement>>;

/**
 * Omnitok UI v3 — the account block at the foot of the sidebar.
 *
 * One block for the three apps (portal, builder, console), in the order
 * decided on 2026-10-23 (D2): version, any extra rows the host adds (a task
 * bell, say), the language switch as visible buttons, sign out, and the
 * person. Collapsed (the 64 px rail) it is the avatar alone.
 *
 * It only draws: the host owns the language state, the sign-out and what
 * the version string says.
 */
export declare interface SidebarAccountLanguage {
    /** Value passed to `onLanguageChange`, e.g. `es`. */
    code: string;
    /** Text on the button. Defaults to the code in capitals. */
    label?: string;
}

export declare interface SidebarAccountProps extends HTMLAttributes<HTMLDivElement> {
    /** Person's name. */
    name: string;
    /** Second line: email or role. */
    detail?: string;
    /** Avatar letters. Defaults to the first letters of the first two words of `name`. */
    initials?: string;
    /** Avatar image. */
    avatarSrc?: string;
    /** Build version, shown as a boxed `v{version}`. Hidden when absent. */
    version?: string;
    /** Languages offered. The switch is hidden with fewer than two. */
    languages?: SidebarAccountLanguage[];
    /** Code of the active language. */
    language?: string;
    onLanguageChange?: (code: string) => void;
    /** Accessible name of the language group. */
    languageLabel?: string;
    /** Sign-out handler. The row is hidden when absent. */
    onSignOut?: () => void;
    signOutLabel?: string;
    /** Rail mode: avatar only. */
    collapsed?: boolean;
    /** Extra rows placed between the version and the language switch. */
    children?: ReactNode;
}

/**
 * Omnitok UI v3 — Sidebar.
 *
 * Navy, framed rail (250 px, 64 px collapsed) with three building blocks:
 *   - a PROJECT SELECTOR card (one active project, the rest behind a menu),
 *   - SECTIONS (a caption plus children drawn under a guide line),
 *   - ITEMS (flat rows, optional children as a controlled group).
 *
 * Selection is pink (3 px left bar, 12 % fill, dot); hover is a faint
 * white wash. Nothing here relies on colour alone: the active row is also
 * bold and carries `aria-current`.
 *
 * Group expansion can be CONTROLLED (`expandedIds` + `onExpandedChange`) so
 * a host router can keep the open groups in sync with the URL without
 * touching the DOM. Uncontrolled groups keep the v0.2 behaviour: open when
 * a child becomes active.
 */
export declare interface SidebarItem {
    /** Unique identifier */
    id: string;
    /** Optional value for the HTML id attribute */
    elementId?: string;
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
    /** Render a separator line above this item */
    dividerBefore?: boolean;
    /**
     * `section`: the label is drawn as a small caption (REPORTES) and the
     * children under a guide line; the caption itself is not clickable.
     * `item` (default): a row, with optional children as a collapsible group.
     * `project-selector`: a placeholder that positions the `projectSelector`
     * card at this point of the list (otherwise the card goes first).
     */
    kind?: 'item' | 'section' | 'project-selector';
    /** Small trailing tag on the row, e.g. "ADMIN". Not a badge: muted, bordered. */
    tag?: string;
}

export declare interface SidebarProjectOption {
    id: string;
    label: string;
    /** Secondary text in the menu, e.g. "8 reportes". */
    meta?: string;
    /** Letter shown in the card tile. Defaults to the first character of `label`. */
    initial?: string;
    /** Listed but not selectable (e.g. a project without reports). */
    disabled?: boolean;
}

export declare interface SidebarProjectSelector {
    /** Caption above the card. Defaults to the kit's "Project" string. */
    caption?: string;
    /** The project currently shown. `null` renders the card as a prompt. */
    active?: SidebarProjectOption | null;
    /** Every project the user can switch to (the active one included). */
    options: SidebarProjectOption[];
    /** Called with the chosen option. The host decides what "switching" means. */
    onSelect?: (option: SidebarProjectOption) => void;
    /** Menu title. Defaults to the kit's "Change project" string. */
    menuTitle?: string;
    /** Show a search box when there are at least this many options. Default 8. */
    searchThreshold?: number;
    searchPlaceholder?: string;
    /** Text when the search matches nothing. */
    emptyLabel?: string;
}

export declare interface SidebarProps extends HTMLAttributes<HTMLElement> {
    /** Navigation items */
    items: SidebarItem[];
    /** Footer content (expanded) */
    footer?: ReactNode;
    /** Footer content while collapsed. Without it the footer is hidden when collapsed. */
    footerCollapsed?: ReactNode;
    /** Collapsed state */
    collapsed?: boolean;
    /** Callback when collapse state changes */
    onCollapsedChange?: (collapsed: boolean) => void;
    /** Custom active item ID */
    activeId?: string;
    /**
     * Callback when item is clicked.
     * For href items, only called on normal left-clicks — modified clicks
     * (Ctrl/Cmd/Shift/middle) are left entirely to the browser so new-tab
     * behaviour works without interference.
     */
    onItemClick?: (item: SidebarItem) => void;
    /** Project selector card rendered above the items. */
    projectSelector?: SidebarProjectSelector;
    /** Ids of the groups that are open. Makes expansion controlled. */
    expandedIds?: string[];
    /** Called when a group header is clicked (controlled mode). */
    onExpandedChange?: (id: string, expanded: boolean) => void;
}

export declare const SidePanel: ForwardRefExoticComponent<SidePanelProps & RefAttributes<HTMLDivElement>>;

export declare interface SidePanelProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
    /** Close handler (called by X button; parent removes from rightPanel to close) */
    onClose: () => void;
    /** Header title */
    title?: ReactNode;
    /** Header description */
    description?: string;
    /** Panel body content */
    children: ReactNode;
    /** Sticky footer content (e.g., action buttons) */
    footer?: ReactNode;
}

export declare type SortDirection = 'asc' | 'desc' | null;

export declare type SupportedLanguage = 'es' | 'en' | 'pt';

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

export declare function useI18n(): I18nContextValue;

export declare const useToast: () => ToastContextValue;

export { }
