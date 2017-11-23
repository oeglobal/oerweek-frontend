import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('events');
  this.route('resources');

  this.route('page', {
    path: '/page/:page_slug'
  });
  this.route('not-found');
});

export default Router;
