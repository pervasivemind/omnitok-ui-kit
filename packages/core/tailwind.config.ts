import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Brand Colors
        sidebar: '#211f4b',
        primary: {
          DEFAULT: '#4D4A9D',
          dark: '#3d3a8c',
          light: '#6b68b3',
        },
        accent: {
          DEFAULT: '#FF177B',
          dark: '#e0156d',
          light: '#ff4a96',
        },

        // Auxiliary Colors
        violet: {
          DEFAULT: '#8B5CF6',
          light: '#A78BFA',
          dark: '#7C3AED',
        },
        rose: {
          DEFAULT: '#EC4899',
          light: '#F472B6',
          dark: '#DB2777',
        },
        teal: {
          DEFAULT: '#14B8A6',
          light: '#2DD4BF',
          dark: '#0D9488',
        },

        // Neutral Colors
        neutral: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
        },

        // Semantic Colors
        success: {
          DEFAULT: '#22c55e',
          light: '#86efac',
          dark: '#16a34a',
        },
        warning: {
          DEFAULT: '#f59e0b',
          light: '#fcd34d',
          dark: '#d97706',
        },
        error: {
          DEFAULT: '#ef4444',
          light: '#fca5a5',
          dark: '#dc2626',
        },
        info: {
          DEFAULT: '#3b82f6',
          light: '#93c5fd',
          dark: '#2563eb',
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
        '18': '4.5rem',
        '88': '22rem',
        sidebar: '260px',
        'sidebar-collapsed': '64px',
      },

      borderRadius: {
        DEFAULT: '8px',
      },

      boxShadow: {
        card: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
        'card-hover': '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
        modal: '0 25px 50px -12px rgb(0 0 0 / 0.25)',
        sidebar: '2px 0 8px rgba(0, 0, 0, 0.1)',
      },

      backgroundImage: {
        'gradient-active': 'linear-gradient(90deg, #FF177B 0%, #4D4A9D 100%)',
        'gradient-brand': 'linear-gradient(135deg, #4D4A9D 0%, #FF177B 100%)',
      },

      animation: {
        'fade-in': 'fadeIn 0.2s ease-in-out',
        'slide-in': 'slideIn 0.3s ease-out',
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
      },

      transitionDuration: {
        DEFAULT: '200ms',
      },
    },
  },
  plugins: [],
};

export default config;
