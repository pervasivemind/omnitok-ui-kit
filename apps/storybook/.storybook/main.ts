import { fileURLToPath } from "node:url";
import { dirname } from "node:path";
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
    getAbsolutePath("@storybook/addon-docs"),
    getAbsolutePath("@storybook/addon-mcp"),
  ],

  framework: {
    name: getAbsolutePath("@storybook/react-vite"),
    options: {},
  },

  features: {
    experimentalComponentsManifest: true,
  }
};

export default config;

function getAbsolutePath(value: string): any {
  return dirname(fileURLToPath(import.meta.resolve(`${value}/package.json`)));
}
