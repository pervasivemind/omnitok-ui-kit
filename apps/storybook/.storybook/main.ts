import type { StorybookConfig } from '@storybook/react-vite';
import remarkGfm from 'remark-gfm';

const config: StorybookConfig = {
  stories: [
    '../src/stories/Introduction.mdx',
    '../src/stories/docs/**/*.mdx',
    '../src/stories/*.stories.@(js|jsx|mjs|ts|tsx)',
    '../src/stories/examples/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],

  staticDirs: ['../../../assets'],
  addons: [
    {
      name: '@storybook/addon-docs',
      options: {
        mdxPluginOptions: {
          mdxCompileOptions: {
            remarkPlugins: [remarkGfm],
          },
        },
      },
    },
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

  // The BI components (bi-components and dashboard-render) have their own
  // Storybook in the BI monorepo (tools/storybook-bi). This one composes it,
  // so one sidebar shows everything the platform draws. Pages answers
  // `Access-Control-Allow-Origin: *` by default, so the BI site needs no
  // _headers for this. In development the BI Storybook runs on its own port.
  refs: (_config, { configType }) => ({
    bi: {
      title: 'BI (bi-components y dashboard-render)',
      url: configType === 'DEVELOPMENT' ? 'http://localhost:6008' : 'https://ui-bi.omnitok.cloud',
    },
  }),
};

export default config;
