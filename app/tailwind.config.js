/* eslint-disable no-undef */
/*global module*/

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },

  plugins: [
    // https://josemarluedke.github.io/tailwindcss-ember-power-select/
    require('tailwindcss-ember-power-select').plugin({}),
  ],
};
