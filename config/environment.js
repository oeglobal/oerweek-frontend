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
      API_NAMESPACE: 'api'
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
        environments: ['production'],
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
    },

    'ember-simple-auth-token': {
      serverTokenEndpoint: 'http://localhost:8000/api-token-auth/',
      serverTokenRefreshEndpoint: 'http://localhost:8000/api-token-refresh/',
      refreshTokenPropertyName: 'token',
      refreshAccessTokens: true,
      refreshLeeway: 300,

      // timeFactor: 7200,

      // tokenPropertyName: 'token',
      authorizationPrefix: 'JWT ',
      authorizationHeaderName: 'Authorization',
    }
  };

  if (environment === 'development') {
    ENV.APP.API_HOST = 'http://localhost:8000';

    // ENV.APP.API_HOST = 'https://api.openeducationweek.org';
    ENV['ember-simple-auth-token']['serverTokenEndpoint'] = ENV.APP.API_HOST + '/api-token-auth/';
    ENV['ember-simple-auth-token']['serverTokenRefreshEndpoint'] = ENV.APP.API_HOST  + '/api-token-refresh/';
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {
    ENV.APP.API_HOST = 'https://api.openeducationweek.org';
    ENV['ember-simple-auth-token']['serverTokenEndpoint'] = 'https://api.openeducationweek.org/api-token-auth/';
    ENV['ember-simple-auth-token']['serverTokenRefreshEndpoint'] = 'https://api.openeducationweek.org/api-token-refresh/';
  }

  ENV['ember-simple-auth'] = {
    authorizer: 'authorizer:token',
    crossOriginWhitelist: [process.env.API_HOST],
  };

  return ENV;
};
