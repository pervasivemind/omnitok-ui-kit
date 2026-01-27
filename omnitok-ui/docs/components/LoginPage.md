# LoginPage Component

Componente de página de inicio de sesión completo con tres variantes de diseño y funcionalidades completas de autenticación.

## Características

- ✅ Tres variantes de diseño: **gradient**, **split**, **centered**
- ✅ Gestión de estado de formulario integrada
- ✅ Validación de campos (email y contraseña)
- ✅ Opción "Recordarme"
- ✅ Enlace "Olvidaste tu contraseña"
- ✅ Estado de carga (loading)
- ✅ Manejo de errores
- ✅ Soporte para logos personalizados
- ✅ Footer personalizable
- ✅ Responsive design
- ✅ Mostrar/ocultar contraseña
- ✅ Accesibilidad completa

## Instalación

```bash
npm install @omnitok/core lucide-react
```

## Uso Básico

### Variante Gradient (por defecto)

```tsx
import { LoginPage } from '@omnitok/core';

function App() {
  const handleLogin = (email: string, password: string) => {
    console.log('Login:', email, password);
    // Tu lógica de autenticación aquí
  };

  return (
    <LoginPage
      onLoginSubmit={handleLogin}
      logo={<img src="/logo.svg" alt="Logo" />}
      title="Iniciar Sesión"
      subtitle="Ingresa tus credenciales para continuar"
    />
  );
}
```

### Variante Split (dos columnas)

```tsx
<LoginPage
  variant="split"
  onLoginSubmit={handleLogin}
  logo={<img src="/logo.svg" alt="Logo" />}
  splitLogo={<img src="/logo-white.svg" alt="Logo" className="w-32" />}
  title="Iniciar Sesión"
  subtitle="Ingresa tus credenciales"
/>
```

### Variante Centered (centrada con fondo gris)

```tsx
<LoginPage
  variant="centered"
  onLoginSubmit={handleLogin}
  logo={<img src="/logo.svg" alt="Logo" />}
  title="Iniciar Sesión"
  subtitle="Bienvenido de vuelta"
/>
```

## Props

| Prop | Tipo | Descripción | Por defecto |
|------|------|-------------|-------------|
| `logo` | `ReactNode` | Logo principal (recomendado cuadrado) | - |
| `logoWide` | `ReactNode` | Logo horizontal para pantallas grandes | - |
| `splitLogo` | `ReactNode` | Logo para el panel izquierdo en variante `split` | - |
| `title` | `string` | Título de la página | `'Iniciar Sesión'` |
| `subtitle` | `string` | Subtítulo o descripción | `'Ingresa tus credenciales para continuar'` |
| `onLoginSubmit` | `(email: string, password: string) => void` | Callback al enviar el formulario | - |
| `loading` | `boolean` | Estado de carga | `false` |
| `error` | `string` | Mensaje de error a mostrar | - |
| `onForgotPassword` | `() => void` | Callback para "Olvidaste tu contraseña" | - |
| `showRememberMe` | `boolean` | Mostrar checkbox "Recordarme" | `true` |
| `footer` | `ReactNode` | Contenido del footer | - |
| `variant` | `'gradient' \| 'split' \| 'centered'` | Variante de diseño | `'gradient'` |
| `className` | `string` | Clases CSS adicionales | - |

## Ejemplos Completos

### Con manejo de errores y estado de carga

```tsx
import { LoginPage } from '@omnitok/core';
import { useState } from 'react';

function App() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async (email: string, password: string) => {
    setLoading(true);
    setError('');
    
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      
      if (!response.ok) {
        throw new Error('Credenciales inválidas');
      }
      
      const data = await response.json();
      // Guardar token, redirigir, etc.
      localStorage.setItem('token', data.token);
      window.location.href = '/dashboard';
    } catch (err) {
      setError(err.message || 'Error al iniciar sesión');
    } finally {
      setLoading(false);
    }
  };

  const handleForgotPassword = () => {
    window.location.href = '/forgot-password';
  };

  return (
    <LoginPage
      variant="split"
      onLoginSubmit={handleLogin}
      onForgotPassword={handleForgotPassword}
      loading={loading}
      error={error}
      logo={<img src="/logo.svg" alt="Logo" className="h-8" />}
      splitLogo={<img src="/logo-white.svg" alt="Logo" className="h-12" />}
    />
  );
}
```

### Con footer personalizado

```tsx
<LoginPage
  onLoginSubmit={handleLogin}
  footer={
    <p className="text-sm text-neutral-500">
      ¿No tienes una cuenta?{' '}
      <a href="/register" className="text-primary font-medium hover:underline">
        Regístrate aquí
      </a>
    </p>
  }
/>
```

### Con logos para diferentes estados

```tsx
<LoginPage
  logo={<img src="/logo-square.svg" alt="Logo" className="h-10" />}
  logoWide={<img src="/logo-horizontal.svg" alt="Logo" className="h-8" />}
  splitLogo={<img src="/logo-white.svg" alt="Logo" className="h-14" />}
  onLoginSubmit={handleLogin}
/>
```

## Variantes de Diseño

### Gradient
- Fondo con gradiente de colores del sistema
- Formulario en tarjeta blanca centrada
- Ideal para aplicaciones modernas

### Split
- Panel izquierdo con branding y mensaje de bienvenida (50% en desktop)
- Formulario en panel derecho (50% en desktop)
- Se convierte en diseño de una columna en móvil
- Perfecto para aplicaciones empresariales

### Centered
- Fondo gris neutral
- Formulario en tarjeta blanca centrada con sombra
- Diseño limpio y profesional

## Comportamiento del Formulario

### Validación
- Email: validación HTML5 nativa (`type="email"`)
- Contraseña: campo requerido
- Ambos campos son requeridos para enviar el formulario

### Estados
- **Normal**: Campos editables, botón habilitado
- **Loading**: Campos deshabilitados, botón muestra spinner
- **Error**: Mensaje de error visible arriba del formulario

### Accesibilidad
- Labels correctamente asociados con inputs
- Estados de focus visibles
- Atributo `aria-invalid` en campos con error
- Botones con texto descriptivo

## Estilos Personalizados

### Personalizar colores
Los colores se heredan del sistema de diseño de Tailwind configurado:

```tsx
// tailwind.config.ts
export default {
  theme: {
    extend: {
      colors: {
        primary: '#3B82F6',
        accent: '#8B5CF6',
        sidebar: '#1E293B',
        error: '#EF4444',
      },
    },
  },
};
```

### Personalizar estilos del formulario

```tsx
<LoginPage
  className="custom-login"
  onLoginSubmit={handleLogin}
/>
```

```css
.custom-login {
  /* Personalizar el contenedor principal */
}
```

## Integración con Autenticación

### Con Firebase

```tsx
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase';

const handleLogin = async (email: string, password: string) => {
  setLoading(true);
  try {
    await signInWithEmailAndPassword(auth, email, password);
    // El estado de autenticación se manejará automáticamente
  } catch (error) {
    setError('Error al iniciar sesión. Verifica tus credenciales.');
  } finally {
    setLoading(false);
  }
};
```

### Con NextAuth

```tsx
import { signIn } from 'next-auth/react';

const handleLogin = async (email: string, password: string) => {
  setLoading(true);
  const result = await signIn('credentials', {
    email,
    password,
    redirect: false,
  });
  
  if (result?.error) {
    setError('Credenciales inválidas');
  } else {
    window.location.href = '/dashboard';
  }
  setLoading(false);
};
```

### Con API REST personalizada

```tsx
const handleLogin = async (email: string, password: string) => {
  setLoading(true);
  setError('');
  
  try {
    const response = await fetch(`${API_URL}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
    
    if (!response.ok) {
      const data = await response.json();
      throw new Error(data.message || 'Error al iniciar sesión');
    }
    
    const { token, user } = await response.json();
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
    
    // Redirigir al dashboard
    window.location.href = '/dashboard';
  } catch (err) {
    setError(err.message);
  } finally {
    setLoading(false);
  }
};
```

## Best Practices

1. **Manejo de errores**: Siempre proporciona mensajes de error claros
2. **Estado de carga**: Usa el prop `loading` para deshabilitar el formulario durante la autenticación
3. **Seguridad**: Nunca almacenes contraseñas en localStorage, solo tokens
4. **Responsive**: El componente es responsive por defecto, asegúrate de que tus logos también lo sean
5. **Accesibilidad**: Mantén los labels y placeholders descriptivos

## Notas Técnicas

- El componente gestiona su propio estado interno para email, password y showPassword
- Los datos del formulario se pasan al callback `onLoginSubmit` como parámetros
- El estado "Recordarme" se gestiona internamente pero no se expone (puedes implementarlo en tu callback)
- Los íconos utilizan `lucide-react` para mantener un diseño consistente
- El componente es completamente tipado con TypeScript

## Soporte de Navegadores

- Chrome/Edge (últimas 2 versiones)
- Firefox (últimas 2 versiones)
- Safari (últimas 2 versiones)
- Mobile Safari (iOS 12+)
- Chrome Mobile (Android 8+)
