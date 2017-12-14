/* eslint-env node */
'use strict';

module.exports = function (environment) {
  let ENV = {
    modulePrefix: 'frontend',
    environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },

    typekit: {
      options: {
        kitId: 'nyd6mie',
        async: true
      }
    },

    fastboot: {
      hostWhitelist: [/^localhost:\d+$/, 'www.openeducationweek.org']
    },

    moment: {
      includeTimezone: 'subset'
    },

    metricsAdapters: [
      {
        name: 'GoogleAnalytics',
        environments: ['all'],
        config: {
          id: 'UA-4248822-6'
        }
      },
    ],

    svgJar: {
      strategy: 'symbol',
      sourceDirs: [
        'public/svg'
      ],
      optimizer: false
    }
  };

  if (environment === 'development') {
    // ENV.APP.API_HOST = 'http://localhost:8000';
    ENV.APP.API_HOST = 'https://api.openeducationweek.org';
    ENV.APP.API_NAMESPACE = 'api';
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    ENV.APP.API_HOST = 'https://api.openeducationweek.org';
    ENV.APP.API_NAMESPACE = 'api';
  }

  return ENV;
};
