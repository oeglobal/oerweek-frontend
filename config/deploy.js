/* eslint-env node */
'use strict';

module.exports = function (deployTarget) {
  let ENV = {
    build: {
      environment: deployTarget,
    },
  };

  if (deployTarget === 'development') {
    ENV.build.environment = 'development';
    // configure other plugins for development deploy target here
  }

  if (deployTarget === 'staging') {
    ENV.build.environment = 'production';
    // configure other plugins for staging deploy target here
  }

  if (deployTarget === 'production') {
    ENV.build.environment = 'production';
    ENV['simply-ssh'] = {
      connection: {
        username: process.env.DEPLOY_USERNAME,
        host: process.env.DEPLOY_HOST,
        port: process.env.DEPLOY_PORT,
        privateKey: process.env.DEPLOY_SSH_KEY,
      },
      dir: process.env.DEPLOY_PATH,
      keep: 5,
    };
  }

  // Note: if you need to build some configuration asynchronously, you can return
  // a promise that resolves with the ENV object instead of returning the
  // ENV object synchronously.
  return ENV;
};
