import type { Config } from 'tailwindcss';
import preset from './tailwind.preset.js';

const config: Config = {
  presets: [preset],
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
};

export default config;
