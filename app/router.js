import EmberRouter from '@ember/routing/router';
import config from './config/environment';
import RouterScroll from 'ember-router-scroll';
import {inject as service} from '@ember/service';
import {scheduleOnce} from '@ember/runloop';
import canUseDOM from './utils/can-use-dom';

const Router = EmberRouter.extend(RouterScroll, {
  location: config.locationType,
  rootURL: config.rootURL,

  metrics: service(),
  didTransition() {
    this._super(...arguments);
    if (canUseDOM) {
      this._trackPage();
    }
  },

  _trackPage() {
    scheduleOnce('afterRender', this, () => {
      const page = this.url;
      const title = this.getWithDefault('currentRouteName', 'unknown');

      this.metrics.trackPage({page, title});
    });
  }
});

Router.map(function () {
  this.route('events', function () {
    this.route('event', {
      path: ':event_slug'
    });
  });

  this.route('resources', function () {
    this.route('resource', {
      path: ':resource_slug'
    });
  });

  this.route('page', {
    path: '/page/:page_slug'
  });

  this.route('not-found');

  this.route('submit', {'path': '/submit'}, function () {
    this.route('general');
    this.route('event');
    this.route('preview');
    this.route('confirmation');
    this.route('resource');
    this.route('error');

    this.route('edit', {
      path: ':submission_id'
    });
  });

  this.route('login');
  this.route('submissions', function () {
    this.route('detail', {
      path: 'detail/:id'
    });
  });
  this.route('schedule');
  this.route('user-login');
  this.route('logout');
});

export default Router;
