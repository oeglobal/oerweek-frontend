import Controller from '@ember/controller';
import {equal} from '@ember/object/computed';
import {inject as service} from '@ember/service';
import {computed} from '@ember/object';

export default Controller.extend({
  session: service('session'),
  isHomepage: equal('currentRouteName', 'index'),
  isSchedule: equal('currentRouteName', 'schedule'),

  isStaff: computed('session', 'session.data.authenticated.token', function () {
    let token = this.get('session.data.authenticated.token'),
      tokenData = JSON.parse(atob(token.split('.')[1]));

    return tokenData['staff'];
  }),

  actions: {
    logout() {
      this.session.invalidate();
    }
  }
});
