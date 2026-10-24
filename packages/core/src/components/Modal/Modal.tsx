import { forwardRef, type HTMLAttributes, type ReactNode, useEffect, useCallback } from 'react';
import { X } from 'lucide-react';
import { cn } from '../../utils/cn';
import { Button } from '../Button';

export type ModalSize = 'sm' | 'md' | 'lg' | 'xl' | 'full';

export interface ModalProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
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

const sizeStyles: Record<ModalSize, string> = {
  sm: 'max-w-sm',
  md: 'max-w-md',
  lg: 'max-w-lg',
  xl: 'max-w-xl',
  full: 'max-w-4xl',
};

export const Modal = forwardRef<HTMLDivElement, ModalProps>(
  (
    {
      open,
      onClose,
      title,
      description,
      children,
      footer,
      size = 'md',
      closeOnOverlay = true,
      closeOnEscape = true,
      showCloseButton = true,
      centered = true,
      className,
      ...props
    },
    ref
  ) => {
    const handleEscape = useCallback(
      (e: KeyboardEvent) => {
        if (e.key === 'Escape' && closeOnEscape) {
          onClose();
        }
      },
      [closeOnEscape, onClose]
    );

    useEffect(() => {
      if (open) {
        document.addEventListener('keydown', handleEscape);
        document.body.style.overflow = 'hidden';
      }
      return () => {
        document.removeEventListener('keydown', handleEscape);
        document.body.style.overflow = '';
      };
    }, [open, handleEscape]);

    if (!open) return null;

    return (
      <div
        className="fixed inset-0 z-50 flex overflow-y-auto"
        role="dialog"
        aria-modal="true"
      >
        {/* Overlay */}
        <div
          className="fixed inset-0 bg-neutral-900/45 animate-fade-in"
          onClick={closeOnOverlay ? onClose : undefined}
        />

        {/* Modal container */}
        <div
          className={cn(
            'relative flex min-h-full w-full p-4',
            centered ? 'items-center justify-center' : 'items-start justify-center pt-16'
          )}
        >
          {/* Modal content */}
          <div
            ref={ref}
            className={cn(
              // v3: radius 18, line border, deep soft shadow; the header is white.
              'relative w-full bg-white rounded-[18px] border border-neutral-200 shadow-modal',
              'animate-fade-in',
              sizeStyles[size],
              className
            )}
            onClick={(e) => e.stopPropagation()}
            {...props}
          >
            {/* Header */}
            {(title || showCloseButton) && (
              <div className="flex items-start justify-between gap-3 px-5 py-4 bg-white border-b border-neutral-200 rounded-t-[18px]">
                <div className="min-w-0">
                  {title && (
                    <h2 className="font-display text-[17px] font-extrabold leading-6 text-neutral-800">{title}</h2>
                  )}
                  {description && (
                    <p className="mt-0.5 text-[13px] leading-5 text-neutral-600">{description}</p>
                  )}
                </div>
                {showCloseButton && (
                  <button
                    type="button"
                    onClick={onClose}
                    className="p-1.5 -mr-1.5 rounded-lg text-neutral-500 hover:text-neutral-800 hover:bg-neutral-100 transition-colors"
                    aria-label="Close"
                  >
                    <X aria-hidden="true" className="w-[18px] h-[18px]" />
                  </button>
                )}
              </div>
            )}

            {/* Body */}
            <div className="px-5 py-4 text-[13px] leading-5 text-neutral-700">{children}</div>

            {/* Footer */}
            {footer && (
              <div className="flex items-center justify-end gap-2 px-5 py-3 border-t border-neutral-200 bg-[#FAFAFC] rounded-b-[18px]">
                {footer}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
);

Modal.displayName = 'Modal';

// Convenience component for confirm dialogs
export interface ConfirmModalProps extends Omit<ModalProps, 'children' | 'footer'> {
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

export const ConfirmModal = ({
  message,
  confirmText = 'Confirm',
  cancelText = 'Cancel',
  confirmVariant = 'primary',
  onConfirm,
  onClose,
  loading,
  ...props
}: ConfirmModalProps) => {
  return (
    <Modal
      {...props}
      onClose={onClose}
      size="sm"
      footer={
        <>
          <Button variant="secondary" onClick={onClose} disabled={loading}>
            {cancelText}
          </Button>
          <Button variant={confirmVariant} onClick={onConfirm} loading={loading}>
            {confirmText}
          </Button>
        </>
      }
    >
      <p className="text-[13px] leading-5 text-neutral-700">{message}</p>
    </Modal>
  );
};

ConfirmModal.displayName = 'ConfirmModal';
