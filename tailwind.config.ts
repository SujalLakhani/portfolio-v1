import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      background: {
        DEFAULT: 'rgb(var(--background))',
      },
      foreground: {
        DEFAULT: 'rgb(var(--foreground))',
        secondary: 'rgb(var(--foreground-secondary))',
      },
    },
    fontFamily: {
      sans: ['var(--theme-font)', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
};
export default config;
