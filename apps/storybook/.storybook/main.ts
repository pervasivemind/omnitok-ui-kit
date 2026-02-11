import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: [
    '../src/stories/Introduction.mdx',
    '../src/stories/docs/**/*.mdx',
    '../src/stories/*.stories.@(js|jsx|mjs|ts|tsx)',
    '../src/stories/examples/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],

  staticDirs: ['../public'],
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-mcp',
    '@storybook/addon-vitest',
    '@storybook/addon-a11y',
  ],

  framework: {
    name: '@storybook/react-vite',
    options: {},
  },

  features: {
    experimentalComponentsManifest: true,
  },
};

export default config;
