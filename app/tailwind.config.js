/*global module, require */

const colors = require('tailwindcss/colors');

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,

      gray: {
        200: '#333333',
        300: '#4d4d4d',
        600: '#999999',
        900: '#f5f5f5',
      },
      purple: {
        500: '#664bda',
        900: '#dbd5f6',
      },
      blue: {
        200: '#1c2b5a',
        300: '#1f377a',
        400: '#1952b3',
        500: '#0d59f2',
        900: '#cfdefc',
      },
      red: {
        600: '#ff5547',
      },
      green: {
        500: '2daa2a',
      },
    },
    extend: {
      fontFamily: {
        sans: [
          'Montserrat',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          '"Noto Sans"',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      letterSpacing: {
        widest: '1px',
      },
      container: {
        center: true,
        padding: '1rem',
        screens: {
          sm: '100%',
          md: '100%',
          lg: '1024px',
          xl: '1280px',
        },
      },
    },
  },
  variants: {
    extend: {},
    container: ['responsive'],
  },

  plugins: [
    // https://josemarluedke.github.io/tailwindcss-ember-power-select/
    require('tailwindcss-ember-power-select').plugin({}),
  ],
};
