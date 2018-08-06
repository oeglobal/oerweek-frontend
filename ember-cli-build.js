'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
    'ember-cli-foundation-6-sass': {
      'foundationJs': 'none'
    },
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
    }
  });

  return app.toTree();
};
