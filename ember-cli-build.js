'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');
const isProduction = EmberApp.env() === 'production';

const purgeCSS = {
  module: require('@fullhuman/postcss-purgecss'),
  options: {
    content: [
      // add extra paths here for components/controllers which include tailwind classes
      './app/index.html',
      './app/templates/**/*.hbs',
      './app/components/**/*.hbs',
    ],
    defaultExtractor: (content) => content.match(/[A-Za-z0-9-_:/]+/g) || [],
  },
};

module.exports = function (defaults) {
  let app = new EmberApp(defaults, {
    babel: {
      plugins: [require.resolve('ember-auto-import/babel-plugin')],
    },
    autoImport: {
      webpack: {
        node: {
          path: true,
        },
      },
    },
    postcssOptions: {
      compile: {
        plugins: [
          {
            module: require('postcss-import'),
            options: {
              path: ['node_modules'],
            },
          },
          require('postcss-nested-ancestors'),
          require('postcss-nested'),
          require('tailwindcss')('./app/tailwind.config.js'),
          ...(isProduction
            ? [
                /* purgeCSS */
              ]
            : []),
        ],
      },
      filter: {
        enabled: true,
        plugins: [
          {
            module: require('autoprefixer'),
            options: {
              browsers: ['last 2 versions'], // this will override the config, but just for this plugin
            },
          },
        ],
      },
    },
    'ember-power-select': {
      theme: false,
    },
    fingerprint: {
      exclude: ['assets/images/oew*.png'],
    },
  });
  return app.toTree();
};
