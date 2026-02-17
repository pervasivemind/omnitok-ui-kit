# Modal Component

Componente modal (diálogo) completo con overlay, múltiples tamaños, header con gradiente, footer personalizable y variante de confirmación.

## Características

- ✅ 5 tamaños predefinidos: **sm**, **md**, **lg**, **xl**, **full**
- ✅ Header con gradiente personalizable
- ✅ Footer con botones de acción
- ✅ Overlay con backdrop blur
- ✅ Cierre con tecla ESC
- ✅ Cierre al hacer click en overlay
- ✅ Bloqueo de scroll del body
- ✅ Animaciones de entrada/salida
- ✅ Componente `ConfirmModal` para confirmaciones
- ✅ Centrado vertical configurable
- ✅ Accesibilidad completa (ARIA)
- ✅ TypeScript completo

## Instalación

```bash
npm install @omnitok/core lucide-react
```

## Uso Básico

### Modal Simple

```tsx
import { Modal } from '@omnitok/core';
import { useState } from 'react';

function App() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)}>Abrir Modal</button>
      
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        title="Título del Modal"
        description="Descripción opcional del modal"
      >
        <p>Contenido del modal aquí...</p>
      </Modal>
    </>
  );
}
```

### Modal con Footer

```tsx
import { Modal, Button } from '@omnitok/core';

function ModalWithFooter() {
  const [open, setOpen] = useState(false);

  const handleSave = () => {
    // Guardar datos
    setOpen(false);
  };

  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      title="Editar Usuario"
      footer={
        <>
          <Button variant="neutral" ghost onClick={() => setOpen(false)}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Guardar
          </Button>
        </>
      }
    >
      <form>
        <input type="text" placeholder="Nombre" />
        <input type="email" placeholder="Email" />
      </form>
    </Modal>
  );
}
```

## Props

### Modal Props

| Prop | Tipo | Descripción | Por defecto |
|------|------|-------------|-------------|
| `open` | `boolean` | Estado de apertura del modal | **Requerido** |
| `onClose` | `() => void` | Callback al cerrar | **Requerido** |
| `title` | `ReactNode` | Título del modal | - |
| `description` | `string` | Descripción bajo el título | - |
| `children` | `ReactNode` | Contenido del modal | **Requerido** |
| `footer` | `ReactNode` | Contenido del footer | - |
| `size` | `'sm' \| 'md' \| 'lg' \| 'xl' \| 'full'` | Tamaño del modal | `'md'` |
| `closeOnOverlay` | `boolean` | Cerrar al hacer click en overlay | `true` |
| `closeOnEscape` | `boolean` | Cerrar con tecla ESC | `true` |
| `showCloseButton` | `boolean` | Mostrar botón X de cierre | `true` |
| `centered` | `boolean` | Centrar verticalmente | `true` |
| `className` | `string` | Clases CSS adicionales | - |

### Tamaños Disponibles

- `'sm'` - Small: `max-w-sm` (384px)
- `'md'` - Medium: `max-w-md` (448px)
- `'lg'` - Large: `max-w-lg` (512px)
- `'xl'` - Extra Large: `max-w-xl` (576px)
- `'full'` - Full: `max-w-4xl` (896px)

## ConfirmModal

Componente especializado para diálogos de confirmación.

### Props

| Prop | Tipo | Descripción | Por defecto |
|------|------|-------------|-------------|
| `open` | `boolean` | Estado de apertura | **Requerido** |
| `onClose` | `() => void` | Callback al cerrar | **Requerido** |
| `onConfirm` | `() => void` | Callback al confirmar | **Requerido** |
| `message` | `ReactNode` | Mensaje de confirmación | **Requerido** |
| `title` | `ReactNode` | Título del modal | - |
| `confirmText` | `string` | Texto del botón confirmar | `'Confirm'` |
| `cancelText` | `string` | Texto del botón cancelar | `'Cancel'` |
| `confirmVariant` | `'primary' \| 'danger' \| 'accent'` | Variante del botón | `'primary'` |
| `loading` | `boolean` | Estado de carga | `false` |

### Uso del ConfirmModal

```tsx
import { ConfirmModal } from '@omnitok/core';
import { useState } from 'react';

function DeleteConfirm() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleConfirm = async () => {
    setLoading(true);
    try {
      await deleteItem();
      setOpen(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <button onClick={() => setOpen(true)}>Eliminar</button>
      
      <ConfirmModal
        open={open}
        onClose={() => setOpen(false)}
        onConfirm={handleConfirm}
        title="Confirmar eliminación"
        message="¿Estás seguro de que deseas eliminar este elemento? Esta acción no se puede deshacer."
        confirmText="Eliminar"
        cancelText="Cancelar"
        confirmVariant="danger"
        loading={loading}
      />
    </>
  );
}
```

## Ejemplos Completos

### Modal de Formulario

```tsx
import { Modal, Button, Input } from '@omnitok/core';
import { useState } from 'react';

function FormModal() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      await saveUser(formData);
      setOpen(false);
      // Reset form
      setFormData({ name: '', email: '', role: '' });
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Button onClick={() => setOpen(true)}>Nuevo Usuario</Button>
      
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        title="Crear Usuario"
        description="Completa los datos del nuevo usuario"
        size="lg"
        footer={
          <>
            <Button 
              variant="neutral" 
              ghost
              onClick={() => setOpen(false)}
              disabled={loading}
            >
              Cancelar
            </Button>
            <Button 
              variant="primary" 
              onClick={handleSubmit}
              loading={loading}
            >
              Crear Usuario
            </Button>
          </>
        }
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            label="Nombre completo"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
          <Input
            label="Email"
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
          />
          <Input
            label="Rol"
            value={formData.role}
            onChange={(e) => setFormData({ ...formData, role: e.target.value })}
            required
          />
        </form>
      </Modal>
    </>
  );
}
```

### Modal de Diferentes Tamaños

```tsx
function SizeExamples() {
  const [size, setSize] = useState<'sm' | 'md' | 'lg' | 'xl' | 'full'>('md');
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="space-x-2">
        <button onClick={() => { setSize('sm'); setOpen(true); }}>
          Small
        </button>
        <button onClick={() => { setSize('md'); setOpen(true); }}>
          Medium
        </button>
        <button onClick={() => { setSize('lg'); setOpen(true); }}>
          Large
        </button>
        <button onClick={() => { setSize('xl'); setOpen(true); }}>
          Extra Large
        </button>
        <button onClick={() => { setSize('full'); setOpen(true); }}>
          Full
        </button>
      </div>

      <Modal
        open={open}
        onClose={() => setOpen(false)}
        title={`Modal ${size.toUpperCase()}`}
        size={size}
      >
        <p>Este es un modal de tamaño {size}</p>
      </Modal>
    </>
  );
}
```

### Modal sin Cierre Automático

```tsx
function NoAutoCloseModal() {
  const [open, setOpen] = useState(false);

  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      title="Acción Importante"
      closeOnOverlay={false}
      closeOnEscape={false}
      showCloseButton={false}
      footer={
        <Button variant="primary" onClick={() => setOpen(false)}>
          He leído y entiendo
        </Button>
      }
    >
      <p>Este modal requiere que leas el contenido antes de cerrarlo.</p>
      <p>No se puede cerrar haciendo click fuera o presionando ESC.</p>
    </Modal>
  );
}
```

### Modal de Confirmación de Eliminación

```tsx
import { ConfirmModal, useToast } from '@omnitok/core';

function DeleteButton({ itemId, itemName }) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const toast = useToast();

  const handleDelete = async () => {
    setLoading(true);
    try {
      await deleteItem(itemId);
      toast.success('Elemento eliminado correctamente');
      setOpen(false);
    } catch (error) {
      toast.error('Error al eliminar el elemento');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Button variant="danger" onClick={() => setOpen(true)}>
        Eliminar
      </Button>

      <ConfirmModal
        open={open}
        onClose={() => setOpen(false)}
        onConfirm={handleDelete}
        title="Confirmar eliminación"
        message={`¿Estás seguro de que deseas eliminar "${itemName}"? Esta acción no se puede deshacer.`}
        confirmText="Sí, eliminar"
        cancelText="Cancelar"
        confirmVariant="danger"
        loading={loading}
      />
    </>
  );
}
```

### Modal con Tabs

```tsx
import { Modal, Tabs } from '@omnitok/core';

function TabbedModal() {
  const [open, setOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('profile');

  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      title="Configuración de Usuario"
      size="xl"
    >
      <Tabs
        tabs={[
          { id: 'profile', label: 'Perfil' },
          { id: 'security', label: 'Seguridad' },
          { id: 'notifications', label: 'Notificaciones' },
        ]}
        activeTab={activeTab}
        onChange={setActiveTab}
      />
      
      <div className="mt-4">
        {activeTab === 'profile' && <ProfileSettings />}
        {activeTab === 'security' && <SecuritySettings />}
        {activeTab === 'notifications' && <NotificationSettings />}
      </div>
    </Modal>
  );
}
```

### Modal con Lista de Selección

```tsx
function SelectModal() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<string[]>([]);

  const items = [
    { id: '1', name: 'Opción 1' },
    { id: '2', name: 'Opción 2' },
    { id: '3', name: 'Opción 3' },
  ];

  const handleConfirm = () => {
    console.log('Seleccionados:', selected);
    setOpen(false);
  };

  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      title="Seleccionar elementos"
      size="md"
      footer={
        <>
          <Button variant="neutral" ghost onClick={() => setOpen(false)}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={handleConfirm}>
            Confirmar ({selected.length})
          </Button>
        </>
      }
    >
      <div className="space-y-2">
        {items.map((item) => (
          <label key={item.id} className="flex items-center gap-2 p-2 hover:bg-neutral-50 rounded cursor-pointer">
            <input
              type="checkbox"
              checked={selected.includes(item.id)}
              onChange={(e) => {
                if (e.target.checked) {
                  setSelected([...selected, item.id]);
                } else {
                  setSelected(selected.filter(id => id !== item.id));
                }
              }}
            />
            <span>{item.name}</span>
          </label>
        ))}
      </div>
    </Modal>
  );
}
```

### Modal de Vista Previa de Imagen

```tsx
function ImagePreviewModal({ imageUrl, alt }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <img 
        src={imageUrl} 
        alt={alt}
        className="cursor-pointer hover:opacity-80"
        onClick={() => setOpen(true)}
      />

      <Modal
        open={open}
        onClose={() => setOpen(false)}
        size="full"
        title={alt}
      >
        <img 
          src={imageUrl} 
          alt={alt}
          className="w-full h-auto"
        />
      </Modal>
    </>
  );
}
```

### Modal Anidado (Modal dentro de Modal)

```tsx
function NestedModals() {
  const [mainOpen, setMainOpen] = useState(false);
  const [confirmOpen, setConfirmOpen] = useState(false);

  const handleMainAction = () => {
    setConfirmOpen(true);
  };

  const handleConfirm = () => {
    // Ejecutar acción
    setConfirmOpen(false);
    setMainOpen(false);
  };

  return (
    <>
      <Button onClick={() => setMainOpen(true)}>Abrir</Button>

      <Modal
        open={mainOpen}
        onClose={() => setMainOpen(false)}
        title="Configuración Avanzada"
        footer={
          <Button variant="danger" onClick={handleMainAction}>
            Restablecer Todo
          </Button>
        }
      >
        <p>Contenido de configuración...</p>
      </Modal>

      <ConfirmModal
        open={confirmOpen}
        onClose={() => setConfirmOpen(false)}
        onConfirm={handleConfirm}
        title="¿Estás seguro?"
        message="Se restablecerán todas las configuraciones a sus valores por defecto."
        confirmVariant="danger"
      />
    </>
  );
}
```

## Hook Personalizado para Modales

```tsx
import { useState } from 'react';

function useModal(initialState = false) {
  const [open, setOpen] = useState(initialState);

  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);
  const toggleModal = () => setOpen(!open);

  return {
    open,
    openModal,
    closeModal,
    toggleModal,
  };
}

// Uso
function MyComponent() {
  const modal = useModal();

  return (
    <>
      <Button onClick={modal.openModal}>Abrir</Button>
      
      <Modal
        open={modal.open}
        onClose={modal.closeModal}
        title="Mi Modal"
      >
        <p>Contenido</p>
      </Modal>
    </>
  );
}
```

## Gestión de Estado Global

```tsx
import { create } from 'zustand';

interface ModalStore {
  modals: Record<string, boolean>;
  openModal: (id: string) => void;
  closeModal: (id: string) => void;
  toggleModal: (id: string) => void;
}

const useModalStore = create<ModalStore>((set) => ({
  modals: {},
  openModal: (id) => set((state) => ({
    modals: { ...state.modals, [id]: true }
  })),
  closeModal: (id) => set((state) => ({
    modals: { ...state.modals, [id]: false }
  })),
  toggleModal: (id) => set((state) => ({
    modals: { ...state.modals, [id]: !state.modals[id] }
  })),
}));

// Uso
function MyComponent() {
  const { modals, openModal, closeModal } = useModalStore();

  return (
    <Modal
      open={modals['myModal'] || false}
      onClose={() => closeModal('myModal')}
      title="Modal con Zustand"
    >
      <p>Contenido</p>
    </Modal>
  );
}
```

## Estilos Personalizados

### Personalizar el gradiente del header

```tsx
// Crear un componente wrapper
function CustomModal({ children, ...props }) {
  return (
    <Modal {...props}>
      <style jsx>{`
        .modal-header {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        }
      `}</style>
      {children}
    </Modal>
  );
}
```

### Personalizar colores en Tailwind

```tsx
// tailwind.config.ts
export default {
  theme: {
    extend: {
      colors: {
        primary: '#3B82F6',
        'primary-dark': '#2563EB',
      },
      boxShadow: {
        modal: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      },
    },
  },
};
```

## Accesibilidad

El componente incluye:
- `role="dialog"` y `aria-modal="true"`
- Bloqueo de scroll del body cuando está abierto
- Cierre con tecla ESC
- Focus trap (mantiene el foco dentro del modal)
- Botón de cierre con `aria-label`

## Best Practices

1. **Estado de carga**: Usa `loading` en ConfirmModal para operaciones asíncronas
2. **Tamaño apropiado**: Usa el tamaño correcto según el contenido
3. **Footer consistente**: Mantén el orden de botones (Cancelar a la izquierda, Acción a la derecha)
4. **Confirmaciones**: Usa ConfirmModal para acciones destructivas
5. **No abuses**: Evita modales anidados cuando sea posible
6. **Títulos claros**: Usa títulos descriptivos que indiquen la acción

## Notas Técnicas

- Z-index: `50` (asegura que esté sobre otros elementos)
- Overlay: `bg-black/50` (negro con 50% de opacidad)
- Animación: `animate-fade-in` (200ms)
- El scroll del body se bloquea cuando el modal está abierto
- El modal se desmonta completamente cuando `open={false}`

## Soporte de Navegadores

- Chrome/Edge (últimas 2 versiones)
- Firefox (últimas 2 versiones)
- Safari (últimas 2 versiones)
- Mobile Safari (iOS 12+)
- Chrome Mobile (Android 8+)
