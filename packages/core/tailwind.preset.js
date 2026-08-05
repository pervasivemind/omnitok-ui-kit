/** @type {import('tailwindcss').Config} */
//
// TEMA OSCURO — consola Gating (bi-console-gating).
//
// El kit se diseñó para fondo claro: no tiene `darkMode` configurado y su escala
// `neutral` va de claro (50) a oscuro (900), de modo que `text-neutral-700` es texto
// oscuro y `bg-neutral-50` es fondo claro. Sobre el fondo de la consola (#131227) eso
// da 1.02:1 — texto invisible.
//
// Este preset NO agrega un modo: reasigna los tokens para que el MISMO conjunto de
// clases que ya usan los componentes produzca el resultado correcto en oscuro. Por eso
// la escala neutral queda invertida: `neutral-50` es ahora el fondo más oscuro y
// `neutral-900` el texto más claro. Los componentes no se tocan.
//
// Los valores salen de la paleta de facto de la consola, medida sobre su CSS (los
// conteos son ocurrencias reales en frontend/src/**/*.css):
//     #131227 fondo · #1a1838 superficie (13×) · #201d44 superficie elevada (16×)
//     #232048 (18×) · #2e2b55 borde dominante (40×) · #3a3768 borde fuerte (7×)
//     #94a3b8 texto atenuado (35×) · #cfd0e8 texto (16×) · #e2e8f0 texto (21×)
//
// Lo que este preset NO puede resolver está en src/styles/index.css: hay clases que el
// kit usa en dos roles opuestos (`text-primary` como texto y `bg-primary` como fondo con
// texto blanco encima). Está PROBADO que no existe un color que sirva a ambos sobre
// #131227: para ser texto legible hace falta luminancia >= 0.2073, y para llevar blanco
// encima <= 0.1833. Esas se resuelven pisando la utilidad, no el token.
export default {
  theme: {
    extend: {
      colors: {
        // Brand
        sidebar: '#1c1a3e',

        // primary/accent quedan en el valor de FONDO (llevan texto blanco encima).
        // Como TEXTO se usan las utilidades pisadas en index.css.
        primary: {
          DEFAULT: '#6d3df5', // = --accent-to de la consola. Blanco encima: 5.78:1
          dark: '#5a2fd6',
          light: '#a78bfa', // 6.75:1 sobre #131227 — el que sirve como texto
        },
        accent: {
          DEFAULT: '#d41c81', // rosa de la consola, apenas más oscuro: blanco encima 4.90:1
          //                     (#e0218a queda en 4.42:1 y no llega a AA)
          dark: '#b3166c',
          light: '#f472b6', // 6.93:1 sobre #131227
        },

        // Auxiliares. Mismo criterio que primary/accent: el DEFAULT es el FONDO sólido
        // (`bg-violet text-white`), y el uso como texto se pisa en index.css.
        // Los valores originales del kit (#8B5CF6, #EC4899, #14B8A6) daban 4.23:1, 3.53:1
        // y 2.49:1 con texto blanco — un defecto que el kit ya tenía en tema claro.
        violet: { DEFAULT: '#8452f5', light: '#c4b5fd', dark: '#6d28d9' },
        rose: { DEFAULT: '#de177a', light: '#f9a8d4', dark: '#be185d' },
        teal: { DEFAULT: '#0e8376', light: '#5eead4', dark: '#0f766e' },

        // Escala neutral INVERTIDA. El corte entre "superficie", "borde" y "texto" NO
        // se eligió a ojo: sale de contar cómo usa el kit cada paso en sus 27
        // componentes (prefijo text-/bg-/border- sobre src/components/**/*.tsx):
        //
        //     paso  texto  fondo  borde   rol dominante
        //       50      0      9      0   FONDO
        //      100      0     20      1   FONDO
        //      200      0      4     22   BORDE
        //      300      8      2     10   BORDE (y texto deshabilitado)
        //      400     27      3      2   TEXTO  ← placeholders e iconos
        //      500     25      0      0   TEXTO
        //      600     10      2      1   TEXTO
        //      700     23      1      0   TEXTO
        //      800      4      0      0   TEXTO
        //      900      4      0      0   TEXTO
        //
        // Por eso el texto arranca en el 400 y no en el 500: `text-neutral-400` es el
        // color de placeholder de Input, Select, MultiSelect, Textarea y Header, más
        // los chevrons y los estados vacíos. Dejarlo en un tono de borde lo volvía
        // invisible (1.68:1).
        neutral: {
          50: '#131227', // fondo de la app
          100: '#1a1838', // superficie (tarjeta, input, dropdown)
          200: '#2e2b55', // borde dominante (40 usos en el CSS de la consola)
          300: '#3a3768', // borde fuerte / divisor
          400: '#8489ae', // texto tenue: placeholder e iconos — 5.01:1 sobre #1a1838
          500: '#94a3b8', // texto atenuado — 6.65:1
          600: '#9b9cc4', // texto atenuado violeta
          700: '#cfd0e8', // texto principal — 11.24:1
          800: '#e2e8f0', // texto enfático
          900: '#ffffff', // máximo
        },

        // Semánticos. El DEFAULT es el FONDO sólido de `bg-X text-white` (los botones
        // accept/danger/info de Button y los Badge sólidos): oscurecido hasta que el
        // blanco pasa AA. Los originales daban 2.28:1 (success), 2.15:1 (warning),
        // 3.76:1 (error) y 3.68:1 (info) — defecto preexistente del kit, no del tema.
        // El uso como TEXTO (`text-success`, `text-error-dark`) se pisa en index.css.
        success: { DEFAULT: '#178640', light: '#86efac', dark: '#15803d' },
        warning: { DEFAULT: '#a16807', light: '#fcd34d', dark: '#b45309' },
        error: { DEFAULT: '#e81414', light: '#fca5a5', dark: '#b91c1c' },
        info: { DEFAULT: '#1a6df4', light: '#93c5fd', dark: '#1d4ed8' },

        // Series de gráficos: repensadas para fondo oscuro (las originales #4D4A9D y
        // #0088FE quedan en 2.43:1 y 3.09:1 — casi indistinguibles del fondo).
        chart: {
          1: '#a78bfa',
          2: '#f472b6',
          3: '#5eead4',
          4: '#fcd34d',
          5: '#7dd3fc',
          6: '#fdba74',
          7: '#c4b5fd',
          8: '#86efac',
        },
      },

      // El offset del focus ring usa #fff por defecto en Tailwind: sobre fondo oscuro
      // dibuja un halo blanco alrededor de cada control enfocado. Afecta a Button,
      // Checkbox (×2), Radio, Pagination y Header.
      ringOffsetColor: {
        DEFAULT: '#131227',
      },

      fontFamily: {
        sans: ['Nunito Sans', 'system-ui', 'sans-serif'],
        mono: ['Open Sans', 'monospace'],
      },

      fontSize: {
        xs: ['0.75rem', { lineHeight: '1rem' }],
        sm: ['0.875rem', { lineHeight: '1.25rem' }],
        base: ['1rem', { lineHeight: '1.5rem' }],
        lg: ['1.125rem', { lineHeight: '1.75rem' }],
        xl: ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
      },

      spacing: {
        '4.5': '1.125rem',
        18: '4.5rem',
        88: '22rem',
        sidebar: '260px',
        'sidebar-collapsed': '64px',
      },

      borderRadius: {
        DEFAULT: '8px',
      },

      // Una sombra negra al 10% no se ve sobre #131227. En oscuro la elevación se lee
      // por el borde y por una sombra mucho más densa.
      boxShadow: {
        card: '0 1px 3px 0 rgb(0 0 0 / 0.5), 0 1px 2px -1px rgb(0 0 0 / 0.6)',
        'card-hover': '0 4px 10px -1px rgb(0 0 0 / 0.65), 0 2px 6px -2px rgb(0 0 0 / 0.6)',
        modal: '0 25px 50px -12px rgb(0 0 0 / 0.8)',
        sidebar: '2px 0 8px rgba(0, 0, 0, 0.5)',
      },

      backgroundImage: {
        'gradient-active': 'linear-gradient(90deg, #e0218a 0%, #6d3df5 100%)',
        'gradient-brand': 'linear-gradient(135deg, #6d3df5 0%, #e0218a 100%)',
      },

      animation: {
        'fade-in': 'fadeIn 0.2s ease-in-out',
        'slide-in': 'slideIn 0.3s ease-out',
        'slide-in-right': 'slideInRight 0.3s ease-out',
        'spin-slow': 'spin 2s linear infinite',
      },

      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },

      transitionDuration: {
        DEFAULT: '200ms',
      },
    },
  },
};
