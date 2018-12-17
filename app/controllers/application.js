import Controller from '@ember/controller';
import {equal} from '@ember/object/computed';
import {inject as service} from '@ember/service';
import {computed} from '@ember/object';

export default Controller.extend({
  session: service('session'),
  user: service(),
  isHomepage: equal('currentRouteName', 'index'),
  isSchedule: equal('currentRouteName', 'schedule'),

  actions: {
    logout() {
      this.session.invalidate();
    }
  }
});
