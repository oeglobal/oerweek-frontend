import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class ApplicationController extends Controller {
  @service session;
  @service user;
  @service router;
  @service metrics;

  get isHomepage() {
    return this.router.currentRouteName === 'index';
  }

  get isSchedule() {
    return this.router.currentRouteName === 'schedule';
  }

  constructor() {
    super(...arguments);

    let router = this.router;
    router.on('routeDidChange', () => {
      const page = router.currentURL;
      const title = router.currentRouteName || 'unknown';

      this.metrics.trackPage({ page, title });
    });
  }

  @action
  logout() {
    this.session.invalidate();
  }
}
