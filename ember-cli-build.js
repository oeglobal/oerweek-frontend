'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');
const mergeTrees = require('broccoli-merge-trees');
const path = require('path');
const Funnel = require('broccoli-funnel');

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
