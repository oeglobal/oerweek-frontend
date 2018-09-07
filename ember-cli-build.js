'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');
const mergeTrees = require('broccoli-merge-trees');
const path = require('path');
const Funnel = require('broccoli-funnel');

const autoprefixer = require('autoprefixer');
const purgecss = require('@fullhuman/postcss-purgecss')

module.exports = function (defaults) {
  let options = {
    fingerprint: {
      exclude: [
        'images/layers-2x.png',
        'images/layers.png',
        'images/marker-icon-2x.png',
        'images/marker-icon.png',
        'images/marker-shadow.png',
        'assets/badges/*.png',
        'assets/images/oew2018-facebook-opengraph.png',
        'assets/svg/*.svg'
      ]
    },
    sassOptions: {
      includePaths: []
    },
    postcssOptions: {
      compile: {
        enabled: false
      },
      filter: {
        enabled: true,
        plugins: [
          {
            module: autoprefixer,
            options: {
              browsers: ['last 2 versions', 'ie >= 10', 'safari >= 10'],
            }
          },
          {
            module: purgecss,
            options: {
              content: ['./app/**/*.hbs', './app/**/.js'],
              whitelistPatternsChildren: ['/ember/']  // try to catch addons that use classnames with 'ember' in them
            }
          }
        ]
      }
    }
  };

  let foundationPath = path.resolve(require.resolve('foundation-sites'), '../../..');
  let foundationFunnel = mergeTrees([new Funnel(foundationPath, {
    include: ['_vendor/**/*']
  }), new Funnel(path.join(foundationPath, 'scss'), {
    destDir: 'foundation-sites',
    include: ['**/*']
  })]);

  let app = new EmberApp(defaults, options);
  app.options.sassOptions.includePaths.push(foundationFunnel);

  return app.toTree();
};
