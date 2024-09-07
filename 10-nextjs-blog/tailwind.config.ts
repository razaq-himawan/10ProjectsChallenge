import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3673fd',
        dark: '#0d0c22',
        soft: '#e5e5e5',
        bgsoft: '#2d2b42',
      },
    },
  },
  plugins: [],
};
export default config;
