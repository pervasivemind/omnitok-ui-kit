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
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
};

export default config;
