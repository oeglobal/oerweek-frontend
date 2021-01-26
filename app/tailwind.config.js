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
        900: '#1a1a1a',
        800: '#333333',
        700: '#4d4d4d',
        600: '#666666',
        500: '#808080',
        400: '#999999',
        300: '#b2b2b2',
        200: '#d9d9d9',
        100: '#f5f5f5',
      },
      purple: {
        800: '#221155',
        500: '#664bda',
        100: '#dbd5f6',
      },
      blue: {
        900: '#0d1530',
        800: '#1c2b5a',
        700: '#1f377a',
        600: '#1a52b2',
        500: '#0d59f2',
        400: '#3b80f7',
        300: '#6ca0f9',
        200: '#9ec1fa',
        100: '#d8e7fd',
      },
      red: {
        900: '#600623',
        800: '#7d081f',
        700: '#af0821',
        600: '#ce1222',
        500: '#e51a1a',
        400: '#ff5547',
        300: '#ff8670',
        200: '#ffaa99',
        100: '#ffdacc',
      },
      green: {
        900: '#134912',
        800: '#1e721d',
        700: '#268f24',
        600: '#2daa2a',
        500: '#34c431',
        400: '#4ed24b',
        300: '#8be085',
        200: '#b9edb6',
        100: '#dbf5d6',
      },
      turq: {
        900: '#0d454a',
        800: '#115e5f',
        700: '#1a8f83',
        600: '#1fad98',
        500: '#26d7b2',
        400: '#4be7c5',
        300: '#80e5cf',
        200: '#a4eadc',
        100: '#cef8ef',
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
            color: theme('colors.gray.800'),
            a: {
              color: theme('colors.gray.800'),
              '&:hover': {
                color: theme('colors.purple.500'),
              },
            },
            strong: {
              color: theme('colors.gray.800'),
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
module.exports.theme.colors.menuHover = module.exports.theme.colors.blue['100'];
