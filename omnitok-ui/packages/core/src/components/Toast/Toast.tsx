import { forwardRef, type HTMLAttributes, type ReactNode, useEffect, useState, createContext, useContext, useCallback } from 'react';
import { AlertCircle, CheckCircle, Info, AlertTriangle, X } from 'lucide-react';
import { cn } from '../../utils/cn';

export type ToastVariant = 'info' | 'success' | 'warning' | 'error';
export type ToastPosition = 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'top-center' | 'bottom-center';

export interface ToastData {
  id: string;
  variant: ToastVariant;
  title?: string;
  message: string;
  duration?: number;
}

export interface ToastProps extends HTMLAttributes<HTMLDivElement> {
  /** Toast data */
  toast: ToastData;
  /** Close handler */
  onClose: (id: string) => void;
}

const variantStyles: Record<ToastVariant, string> = {
  info: 'bg-info text-white',
  success: 'bg-success text-white',
  warning: 'bg-warning text-white',
  error: 'bg-error text-white',
};

const iconMap: Record<ToastVariant, typeof Info> = {
  info: Info,
  success: CheckCircle,
  warning: AlertTriangle,
  error: AlertCircle,
};

export const Toast = forwardRef<HTMLDivElement, ToastProps>(
  ({ toast, onClose, className, ...props }, ref) => {
    const [isVisible, setIsVisible] = useState(false);
    const Icon = iconMap[toast.variant];

    useEffect(() => {
      // Trigger enter animation
      requestAnimationFrame(() => setIsVisible(true));

      // Auto dismiss
      if (toast.duration !== 0) {
        const timer = setTimeout(() => {
          setIsVisible(false);
          setTimeout(() => onClose(toast.id), 200);
        }, toast.duration || 5000);
        return () => clearTimeout(timer);
      }
    }, [toast, onClose]);

    const handleClose = () => {
      setIsVisible(false);
      setTimeout(() => onClose(toast.id), 200);
    };

    return (
      <div
        ref={ref}
        role="alert"
        className={cn(
          'flex items-start gap-3 p-4 rounded-lg shadow-lg min-w-[320px] max-w-md',
          'transition-all duration-200',
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2',
          variantStyles[toast.variant],
          className
        )}
        {...props}
      >
        <Icon className="flex-shrink-0 w-5 h-5 mt-0.5" />
        <div className="flex-1 min-w-0">
          {toast.title && (
            <h5 className="font-semibold mb-0.5">{toast.title}</h5>
          )}
          <p className="text-sm opacity-90">{toast.message}</p>
        </div>
        <button
          type="button"
          onClick={handleClose}
          className="flex-shrink-0 p-1 rounded hover:bg-white/20 transition-colors"
          aria-label="Dismiss"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    );
  }
);

Toast.displayName = 'Toast';

// Toast Container
export interface ToastContainerProps {
  /** Toast position */
  position?: ToastPosition;
  /** Toasts to display */
  toasts: ToastData[];
  /** Close handler */
  onClose: (id: string) => void;
}

const positionStyles: Record<ToastPosition, string> = {
  'top-right': 'top-4 right-4',
  'top-left': 'top-4 left-4',
  'bottom-right': 'bottom-4 right-4',
  'bottom-left': 'bottom-4 left-4',
  'top-center': 'top-4 left-1/2 -translate-x-1/2',
  'bottom-center': 'bottom-4 left-1/2 -translate-x-1/2',
};

export const ToastContainer = ({
  position = 'top-right',
  toasts,
  onClose,
}: ToastContainerProps) => {
  return (
    <div
      className={cn(
        'fixed z-50 flex flex-col gap-2',
        positionStyles[position]
      )}
    >
      {toasts.map((toast) => (
        <Toast key={toast.id} toast={toast} onClose={onClose} />
      ))}
    </div>
  );
};

// Toast Context for global toast management
interface ToastContextValue {
  toasts: ToastData[];
  addToast: (toast: Omit<ToastData, 'id'>) => string;
  removeToast: (id: string) => void;
  success: (message: string, title?: string) => string;
  error: (message: string, title?: string) => string;
  warning: (message: string, title?: string) => string;
  info: (message: string, title?: string) => string;
}

const ToastContext = createContext<ToastContextValue | null>(null);

export interface ToastProviderProps {
  children: ReactNode;
  position?: ToastPosition;
}

export const ToastProvider = ({ children, position = 'top-right' }: ToastProviderProps) => {
  const [toasts, setToasts] = useState<ToastData[]>([]);

  const addToast = useCallback((toast: Omit<ToastData, 'id'>) => {
    const id = Math.random().toString(36).slice(2, 9);
    setToasts((prev) => [...prev, { ...toast, id }]);
    return id;
  }, []);

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const success = useCallback(
    (message: string, title?: string) => addToast({ variant: 'success', message, title }),
    [addToast]
  );

  const error = useCallback(
    (message: string, title?: string) => addToast({ variant: 'error', message, title }),
    [addToast]
  );

  const warning = useCallback(
    (message: string, title?: string) => addToast({ variant: 'warning', message, title }),
    [addToast]
  );

  const info = useCallback(
    (message: string, title?: string) => addToast({ variant: 'info', message, title }),
    [addToast]
  );

  return (
    <ToastContext.Provider value={{ toasts, addToast, removeToast, success, error, warning, info }}>
      {children}
      <ToastContainer position={position} toasts={toasts} onClose={removeToast} />
    </ToastContext.Provider>
  );
};

export const useToast = (): ToastContextValue => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};
