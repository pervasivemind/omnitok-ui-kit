import type { Preview } from '@storybook/react-vite';
import '../src/styles.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      options: {
        light: { name: 'light', value: '#fafafa' },
        white: { name: 'white', value: '#ffffff' },
        dark: { name: 'dark', value: '#171717' },
        sidebar: { name: 'sidebar', value: '#211f4b' }
      }
    },
    options: {
      storySort: {
        order: [
          'Introduction',
          'Design System',
          'Components',
          'Layout',
          'Drag and Drop',
          'Pages',
          'Examples',
        ],
      },
    },
  },

  tags: ['autodocs'],

  initialGlobals: {
    backgrounds: {
      value: 'light'
    }
  }
};

export default preview;
