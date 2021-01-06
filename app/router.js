import EmberRouter from '@ember/routing/router';
import config from 'frontend/config/environment';
import { inject as service } from '@ember/service';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;

  @service headData;
  @service metrics;

  didTransition() {
    super.didTransition(...arguments);
    // if (canUseDOM) {
    //   this._trackPage();
    // }
  }

  _trackPage() {
    scheduleOnce('afterRender', this, () => {
      const page = this.url;
      const title =
        this.currentRouteName === undefined ? 'unknown' : this.currentRouteName;

      this.metrics.trackPage({ page, title });
    });
  }

  setTitle(title) {
    this.headData.set('title', title);
  }
}

Router.map(function () {
  this.route('events', function () {
    this.route('event', {
      path: ':event_slug',
    });
  });

  this.route('resources', function () {
    this.route('resource', {
      path: ':resource_slug',
    });
  });

  this.route('page', {
    path: '/page/:page_slug',
  });

  this.route('not-found');

  this.route('submit', function () {
    this.route('general');
    this.route('event');
    this.route('preview');
    this.route('confirmation');
    this.route('resource');
    this.route('error');

    this.route('edit', {
      path: ':submission_id',
    });
  });

  this.route('login');
  this.route('submissions', function () {
    this.route('detail', {
      path: 'detail/:id',
    });
  });
  this.route('schedule');
  this.route('user-login');
  this.route('logout');
  this.route('request-access');
});
