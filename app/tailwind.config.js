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
        800: '#D9D9D9',
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
        600: '#3B80F7',
        900: '#cfdefc',
      },
      red: {
        400: '#ce1222',
        600: '#ff5547',
      },
      green: {
        400: '#2daa2a',
        800: '#B9EDB6',
      },
      turq: {
        800: '#A4EADC',
      },
    },
    extend: {
      fontSize: {
        lg: ['1.25rem', { lineHeight: '1.5rem' }],
        base: ['1rem', { lineHeight: '1.6rem' }],
        sm: ['0.85rem', { lineHeight: '1.19rem' }],
        '3xl': ['1.75rem', { lineHeight: '2.1rem', letterSpacing: '-0.1px' }],
        '4xl': ['2.75rem', { lineHeight: '3.3rem', letterSpacing: '-0.35px' }],
      },
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
      boxShadow: {
        DEFAULT: '0px 4px 4px rgba(0, 0, 0, 0.25)',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            a: {
              color: theme('colors.black'),
            },
            strong: {
              color: theme('colors.black'),
              fontWeight: '700',
            },
          },
        },
      }),
    },
  },
  variants: {
    extend: {
      borderColor: ['hover', 'active'],
      borderWidth: ['hover'],
      backgroundColor: ['hover', 'group-active', 'active'],
      opacity: [
        'responsive',
        'group-hover',
        'focus-within',
        'hover',
        'focus',
        'group-active',
      ],
    },
    textColor: [
      'responsive',
      'dark',
      'group-hover',
      'focus-within',
      'hover',
      'focus',
      'group-active',
    ],

    container: ['responsive'],
  },

  plugins: [
    // https://josemarluedke.github.io/tailwindcss-ember-power-select/
    require('tailwindcss-ember-power-select').plugin({}),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
    require('tailwindcss-interaction-variants'),
  ],
};

module.exports.theme.colors.primary = module.exports.theme.colors.blue['500'];
module.exports.theme.colors.menuHover = module.exports.theme.colors.blue['900'];
