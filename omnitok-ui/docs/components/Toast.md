# Toast Component

Sistema de notificaciones toast completo con gestión de estado global, múltiples variantes y posicionamiento flexible.

## Características

- ✅ 4 variantes: **info**, **success**, **warning**, **error**
- ✅ 6 posiciones disponibles
- ✅ Gestión de estado global con Context API
- ✅ Auto-dismiss configurable
- ✅ Título y mensaje
- ✅ Iconos automáticos según variante
- ✅ Animaciones de entrada/salida
- ✅ Stack de notificaciones
- ✅ API simple y limpia
- ✅ TypeScript completo
- ✅ Accesibilidad (role="alert")

## Instalación

```bash
npm install @omnitok/core lucide-react
```

## Uso Básico

### 1. Configurar el ToastProvider

Envuelve tu aplicación con el `ToastProvider`:

```tsx
import { ToastProvider } from '@omnitok/core';

function App() {
  return (
    <ToastProvider position="top-right">
      <YourApp />
    </ToastProvider>
  );
}
```

### 2. Usar el hook useToast

```tsx
import { useToast } from '@omnitok/core';

function MyComponent() {
  const toast = useToast();

  const handleSuccess = () => {
    toast.success('Operación exitosa', 'Los datos se guardaron correctamente');
  };

  const handleError = () => {
    toast.error('Error al guardar', 'No se pudo completar la operación');
  };

  return (
    <div>
      <button onClick={handleSuccess}>Mostrar Success</button>
      <button onClick={handleError}>Mostrar Error</button>
    </div>
  );
}
```

## API del useToast Hook

El hook `useToast` retorna un objeto con los siguientes métodos:

### Métodos de Conveniencia

```typescript
// Success toast (verde)
toast.success(message: string, title?: string): string

// Error toast (rojo)
toast.error(message: string, title?: string): string

// Warning toast (amarillo)
toast.warning(message: string, title?: string): string

// Info toast (azul)
toast.info(message: string, title?: string): string
```

### Método Avanzado

```typescript
// Toast personalizado con todas las opciones
toast.addToast({
  variant: 'info' | 'success' | 'warning' | 'error',
  message: string,
  title?: string,
  duration?: number, // ms, 0 = no auto-dismiss
}): string // Retorna el ID del toast
```

### Remover Toast

```typescript
toast.removeToast(id: string): void
```

### Acceso al Estado

```typescript
toast.toasts: ToastData[] // Lista de toasts activos
```

## Props

### ToastProvider Props

| Prop | Tipo | Descripción | Por defecto |
|------|------|-------------|-------------|
| `children` | `ReactNode` | Contenido de la aplicación | **Requerido** |
| `position` | `ToastPosition` | Posición de los toasts | `'top-right'` |

### Posiciones Disponibles

- `'top-right'` - Esquina superior derecha
- `'top-left'` - Esquina superior izquierda
- `'top-center'` - Centro superior
- `'bottom-right'` - Esquina inferior derecha
- `'bottom-left'` - Esquina inferior izquierda
- `'bottom-center'` - Centro inferior

### ToastData Interface

```typescript
interface ToastData {
  id: string;
  variant: 'info' | 'success' | 'warning' | 'error';
  title?: string;
  message: string;
  duration?: number; // en milisegundos
}
```

## Ejemplos Completos

### Toasts Básicos

```tsx
import { useToast } from '@omnitok/core';

function BasicToasts() {
  const toast = useToast();

  return (
    <div className="space-y-2">
      <button onClick={() => toast.info('Esta es una notificación informativa')}>
        Info
      </button>
      
      <button onClick={() => toast.success('Operación completada con éxito')}>
        Success
      </button>
      
      <button onClick={() => toast.warning('Ten cuidado con esta acción')}>
        Warning
      </button>
      
      <button onClick={() => toast.error('Ocurrió un error inesperado')}>
        Error
      </button>
    </div>
  );
}
```

### Toasts con Título

```tsx
function ToastsWithTitle() {
  const toast = useToast();

  return (
    <button 
      onClick={() => 
        toast.success(
          'Los cambios se guardaron correctamente en la base de datos',
          'Guardado exitoso'
        )
      }
    >
      Guardar
    </button>
  );
}
```

### Toast sin Auto-dismiss

```tsx
function PersistentToast() {
  const toast = useToast();

  const showPersistent = () => {
    toast.addToast({
      variant: 'warning',
      title: 'Acción requerida',
      message: 'Este mensaje permanecerá hasta que lo cierres',
      duration: 0, // No se cierra automáticamente
    });
  };

  return <button onClick={showPersistent}>Mostrar Persistente</button>;
}
```

### Toast con Duración Personalizada

```tsx
function CustomDurationToast() {
  const toast = useToast();

  const showCustom = () => {
    toast.addToast({
      variant: 'info',
      message: 'Este mensaje se cerrará en 10 segundos',
      duration: 10000, // 10 segundos
    });
  };

  return <button onClick={showCustom}>Toast 10s</button>;
}
```

### Manejo de Operaciones Asíncronas

```tsx
function AsyncOperation() {
  const toast = useToast();

  const handleSave = async () => {
    try {
      const response = await fetch('/api/save', {
        method: 'POST',
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Error al guardar');
      }

      toast.success('Datos guardados correctamente', 'Éxito');
    } catch (error) {
      toast.error(
        error.message || 'No se pudo completar la operación',
        'Error'
      );
    }
  };

  return <button onClick={handleSave}>Guardar</button>;
}
```

### Toast con Loading y Success/Error

```tsx
function LoadingToast() {
  const toast = useToast();

  const handleOperation = async () => {
    // Mostrar toast de carga
    const loadingId = toast.info('Procesando...', 'Por favor espera');

    try {
      await someAsyncOperation();
      
      // Remover toast de carga
      toast.removeToast(loadingId);
      
      // Mostrar toast de éxito
      toast.success('Operación completada', 'Éxito');
    } catch (error) {
      // Remover toast de carga
      toast.removeToast(loadingId);
      
      // Mostrar toast de error
      toast.error('No se pudo completar la operación', 'Error');
    }
  };

  return <button onClick={handleOperation}>Ejecutar</button>;
}
```

### Diferentes Posiciones

```tsx
import { ToastProvider } from '@omnitok/core';

// Top Right (por defecto)
<ToastProvider position="top-right">
  <App />
</ToastProvider>

// Top Center
<ToastProvider position="top-center">
  <App />
</ToastProvider>

// Bottom Left
<ToastProvider position="bottom-left">
  <App />
</ToastProvider>
```

### Múltiples Toasts Simultáneos

```tsx
function MultipleToasts() {
  const toast = useToast();

  const showMultiple = () => {
    toast.info('Primera notificación');
    toast.success('Segunda notificación');
    toast.warning('Tercera notificación');
  };

  return <button onClick={showMultiple}>Mostrar Múltiples</button>;
}
```

## Integración con Formularios

### Con React Hook Form

```tsx
import { useForm } from 'react-hook-form';
import { useToast } from '@omnitok/core';

function Form() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const toast = useToast();

  const onSubmit = async (data) => {
    try {
      await saveData(data);
      toast.success('Formulario enviado correctamente', 'Éxito');
    } catch (error) {
      toast.error('Error al enviar el formulario', 'Error');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('name', { required: true })} />
      {errors.name && toast.error('El nombre es requerido')}
      <button type="submit">Enviar</button>
    </form>
  );
}
```

### Con Validación Manual

```tsx
function ValidatedForm() {
  const toast = useToast();
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación
    if (!email) {
      toast.error('El email es requerido', 'Validación');
      return;
    }

    if (!isValidEmail(email)) {
      toast.error('El email no es válido', 'Validación');
      return;
    }

    // Enviar
    toast.success('Email enviado correctamente', 'Éxito');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="email" 
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit">Enviar</button>
    </form>
  );
}
```

## Casos de Uso Comunes

### Confirmación de Acciones

```tsx
const handleDelete = async (id) => {
  try {
    await deleteItem(id);
    toast.success('Elemento eliminado correctamente');
  } catch (error) {
    toast.error('No se pudo eliminar el elemento');
  }
};
```

### Notificaciones de Actualización

```tsx
const handleUpdate = async (data) => {
  try {
    await updateItem(data);
    toast.info('Los datos se actualizaron', 'Actualización');
  } catch (error) {
    toast.error('Error al actualizar');
  }
};
```

### Advertencias de Usuario

```tsx
const handleRiskyAction = () => {
  toast.warning(
    'Esta acción no se puede deshacer',
    'Advertencia'
  );
};
```

### Notificaciones de Red

```tsx
useEffect(() => {
  const handleOnline = () => {
    toast.success('Conexión restaurada', 'Online');
  };

  const handleOffline = () => {
    toast.error('Sin conexión a internet', 'Offline');
  };

  window.addEventListener('online', handleOnline);
  window.addEventListener('offline', handleOffline);

  return () => {
    window.removeEventListener('online', handleOnline);
    window.removeEventListener('offline', handleOffline);
  };
}, []);
```

## Estilos Personalizados

### Personalizar colores

```tsx
// tailwind.config.ts
export default {
  theme: {
    extend: {
      colors: {
        info: '#3B82F6',
        success: '#10B981',
        warning: '#F59E0B',
        error: '#EF4444',
      },
    },
  },
};
```

### Personalizar duración por defecto

```tsx
// Crear un wrapper personalizado
export const useCustomToast = () => {
  const toast = useToast();

  return {
    ...toast,
    success: (message, title) => 
      toast.addToast({ variant: 'success', message, title, duration: 3000 }),
    error: (message, title) => 
      toast.addToast({ variant: 'error', message, title, duration: 5000 }),
  };
};
```

## Accesibilidad

El componente incluye:
- `role="alert"` para anunciar notificaciones
- Botón de cierre con `aria-label`
- Animaciones que respetan `prefers-reduced-motion`
- Colores con contraste suficiente (WCAG AA)

## Best Practices

1. **Mensajes claros**: Usa mensajes descriptivos y concisos
2. **Variante apropiada**: Usa la variante correcta según el contexto
3. **Título opcional**: Usa títulos solo cuando sea necesario para claridad
4. **Duración**: Info/Success cortos (3-5s), Errors/Warnings más largos (5-8s)
5. **No abuses**: Evita mostrar múltiples toasts a la vez innecesariamente
6. **Posición consistente**: Mantén la misma posición en toda la app

## Notas Técnicas

- Los toasts se apilan verticalmente con un gap de `8px`
- Ancho mínimo: `320px`, máximo: `448px` (28rem)
- Duración por defecto: `5000ms` (5 segundos)
- Animación de entrada/salida: `200ms`
- Z-index: `50` (asegura que esté sobre otros elementos)
- Los IDs se generan con `Math.random().toString(36)`

## Soporte de Navegadores

- Chrome/Edge (últimas 2 versiones)
- Firefox (últimas 2 versiones)
- Safari (últimas 2 versiones)
- Mobile Safari (iOS 12+)
- Chrome Mobile (Android 8+)
