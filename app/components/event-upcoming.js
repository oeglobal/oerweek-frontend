import Component from '@ember/component';
import {computed, observer} from '@ember/object';
import {inject as service} from '@ember/service';
import {once} from '@ember/runloop';

import moment from 'moment';

export default Component.extend({
  store: service(),

  nextEvent: null,

  currentTime: computed(function () {
    return moment();
  }),

  events: null,

  didReceiveAttrs() {
    this._super(...arguments);
    this.get('store').query('event', {'special': 'current'}).then((data) => {
      this.set('events', data);
    });
  },

  currentEvents: computed('events', function () {
    let currentTime = this.get('currentTime'),
      events = this.get('events');

    if (events) {
      return events.filter((event) => {
        return currentTime.diff(moment(event.get('event_time')), 'minutes') > 5;
      })
    }
    return [];
  }),

  upcomingEvents: computed('events', function () {
    let currentTime = this.get('currentTime'),
      events = this.get('events');

    if (events) {
      return events.filter((event) => {
        return currentTime.diff(moment(event.get('event_time')), 'minutes') < 5;
      })
    }
    return [];
  })
});
