/* eslint-env node */
'use strict';

module.exports = function (deployTarget) {
  var ENV = {
    build: {
      environment: deployTarget,
    },
    'revision-data': {
      type: 'git-commit',
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
    console.log(process.env);
    ENV['scp'] = {
      nodes: [
        {
          username: process.env.DEPLOY_USERNAME,
          host: process.env.DEPLOY_HOST,
          path: process.env.DEPLOY_PATH,
          port: process.env.DEPLOY_PORT,
          displayCommands: true,
        },
      ],
    };
  }

  // Note: if you need to build some configuration asynchronously, you can return
  // a promise that resolves with the ENV object instead of returning the
  // ENV object synchronously.
  return ENV;
};
