const withMT = require('@material-tailwind/react/utils/withMT');
const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{html,js,jsx}'],

  theme: {
    extend: {
      colors: {
        warning: '#A33232',
        primarygreen: '#066135',
        darkbg:'#292927',
        lightbg: '#d4d4d4',
      },
    },
    screens: {
      // xs: '520px',

      // sm: '640px',

      // md: '768px',

      // lg: '1024px',

      // xl: '1280px',

      // '2xl': '1536px',

      ...defaultTheme.screens,
    },
  },
  variants: ['responsive', 'group-hover', 'hover', 'focus', 'active'],
  plugins: [],
  darkMode: 'class',
};
