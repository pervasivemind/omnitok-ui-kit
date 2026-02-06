import type { Preview } from '@storybook/react';
import '../src/styles.css';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#fafafa' },
        { name: 'white', value: '#ffffff' },
        { name: 'dark', value: '#171717' },
        { name: 'sidebar', value: '#211f4b' },
      ],
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
};

export default preview;
