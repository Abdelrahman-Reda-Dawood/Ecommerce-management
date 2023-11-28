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
        darkbg: '#292927',
        lightbg: '#d4d4d4',
      },
      keyframes: () => ({
        fadeup: {
          '0%': { opacity: '0', transform: 'translateY(30px) scale(0.9)' },
          '100%': { opacity: '1', transform: 'translateY(0px) scale(1)' },
        },
        fadedown: {
          '0%': {
            opacity: '0',
            // filter: 'blur(2px)',
            transform: 'translateY(-30px) scale(0.9)',
          },
          '100%': { opacity: '1', transform: 'translateY(0px)' },
        },
        faderight: {
          '0%': {
            opacity: '0',
            transform: 'translateX(-30px) scale(0.9)',
          },
          '100%': { opacity: '1', transform: 'translateX(0px) scale(1)' },
        },
        zoomin: {
          '0%': {
            opacity: '0.5',
            transform: 'scale(1.5)',
          },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      }),

      animation: {
        fadeup: 'fadeup 1s ease-in-out',
        fadedown: 'fadedown 1s ease-in-out',
        faderight: 'faderight 1s ease-in-out',
        zoomin: 'zoomin 2s',
      },
    },
    screens: {
       xs: '520px',

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
