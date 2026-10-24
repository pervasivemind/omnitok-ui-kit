/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
      colors: {
        // Brand Colors (v3: navy chrome; the tokens live in styles/index.css)
        sidebar: '#1A1240',
        navy: '#1A1240',
        canvas: '#F5F6F9',
        surface: '#FFFFFF',
        ink: '#252139',
        body: '#465066',
        muted: '#667085', // v3 (2026-10-24): 4.97:1 on white, 4.60:1 on canvas
        'muted-on-tint': '#5B6478',
        line: '#E4E5ED',
        primary: {
          DEFAULT: '#4D4A9D',
          dark: '#3d3a8c',
          light: '#6b68b3',
          // v3: the quiet violet of secondary actions and selected options.
          soft: '#F0EFF8',
          ink: '#3B3880',
          line: '#E0DEF2',
        },
        control: '#D0D4DE', // border of inputs, selects and textareas
        // v3: DEFAULT is the fill that carries white text (4.67:1); the bright
        // identity pink #FF177B is `light` (selection marks, never under text).
        accent: {
          DEFAULT: '#E0156D',
          dark: '#C8105F',
          light: '#FF177B',
        },

        // Auxiliary Colors
        // v3: the quieter hues of the approved reference; every DEFAULT carries
        // white text at >= 4.5:1 and works as text on white. On a `soft` tint use `dark`.
        violet: {
          DEFAULT: '#8E44AD',
          light: '#A78BFA',
          dark: '#763894',
        },
        rose: {
          DEFAULT: '#C4476A',
          light: '#F472B6',
          dark: '#94304C',
        },
        teal: {
          DEFAULT: '#0B7A5F',
          light: '#5EEAD4',
          dark: '#086049',
        },

        // Neutral Colors
        // v3: cool greys of the approved reference. 500 is the secondary text
        // (#667085), 600 the body text, 800 the ink; 400 is for icons and
        // borders only (2.6:1), never for text. bi-components and
        // dashboard-render resolve `neutral-*` through this preset too.
        neutral: {
          50: '#F8F9FB',
          100: '#F2F3F7',
          200: '#E4E5ED',
          300: '#D0D4DE',
          400: '#98A1B3',
          500: '#667085',
          600: '#465066',
          700: '#343A4D',
          800: '#252139',
          900: '#1A1240',
        },

        // Semantic Colors
        // v3 (reference palette): DEFAULT is a fill under white text and text on
        // white (>= 4.7:1); on its `soft` tint the text is `dark`.
        success: {
          DEFAULT: '#166534',
          light: '#86efac',
          dark: '#14532D',
          soft: '#E3F4EA',
        },
        warning: {
          DEFAULT: '#8A5A16',
          light: '#fcd34d',
          dark: '#6E4710',
          soft: '#FBF1DF',
        },
        error: {
          DEFAULT: '#C4476A',
          light: '#fca5a5',
          dark: '#94304C',
          soft: '#FDEEF2',
        },
        info: {
          DEFAULT: '#4D4A9D',
          light: '#B6B8DF',
          dark: '#3B3880',
          soft: '#F0EFF8',
        },

        // BI Chart Colors
        chart: {
          1: '#4D4A9D',
          2: '#FF177B',
          3: '#00C49F',
          4: '#FFBB28',
          5: '#0088FE',
          6: '#FF8042',
          7: '#8884D8',
          8: '#82CA9D',
        },
      },

      fontFamily: {
        // v3: Inter for the UI, Nunito Sans for headings and KPI values.
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Nunito Sans', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['Open Sans', 'monospace'],
      },

      fontSize: {
        // v3 floor (D9): 11px is the smallest functional text.
        '2xs': ['0.6875rem', { lineHeight: '1rem' }],
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
        '18': '4.5rem',
        '88': '22rem',
        sidebar: '260px',
        'sidebar-collapsed': '64px',
      },

      borderRadius: {
        DEFAULT: '8px',
      },

      boxShadow: {
        card: '0 2px 4px #21183F04, 0 6px 18px #21183F09',
        'card-hover': '0 4px 10px #21183F0A, 0 10px 26px #21183F12',
        menu: '0 10px 30px #1A124022',
        modal: '0 25px 50px -12px rgb(0 0 0 / 0.25)',
        sidebar: '2px 0 8px rgba(0, 0, 0, 0.1)',
      },

      backgroundImage: {
        'gradient-active': 'linear-gradient(90deg, #E0156D 0%, #4D4A9D 100%)',
        'gradient-brand': 'linear-gradient(135deg, #4D4A9D 0%, #E0156D 100%)',
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
