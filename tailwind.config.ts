import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        tactical: {
          50: '#f4f6f3',
          100: '#e5e9e2',
          200: '#cbd3c6',
          300: '#a8b6a0',
          400: '#849878',
          500: '#67805a',
          600: '#4d6244',
          700: '#3d4e37',
          800: '#33402f',
          900: '#2b3528',
          950: '#161c15',
        },
        earth: {
          50: '#f5f7f4',
          100: '#e7ebe4',
          200: '#d0d9ca',
          300: '#adbfa5',
          400: '#84a079',
          500: '#648457',
          600: '#4d6844',
          700: '#3d5336',
          800: '#33432d',
          900: '#2b3827',
          950: '#151e13',
        },
        steel: {
          50: '#f6f7f8',
          100: '#eaecef',
          200: '#d9dde2',
          300: '#bec5cd',
          400: '#9ea7b3',
          500: '#848f9d',
          600: '#707a89',
          700: '#5e6670',
          800: '#50565e',
          900: '#45494f',
          950: '#2c2f33',
        },
      },
    },
  },
  plugins: [],
};

export default config;
