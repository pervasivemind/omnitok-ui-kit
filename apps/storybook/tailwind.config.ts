import type { Config } from 'tailwindcss';
import coreConfig from '../../packages/core/tailwind.config';

const config: Config = {
  ...coreConfig,
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    '../../packages/core/src/**/*.{js,ts,jsx,tsx}',
  ],
};

export default config;
