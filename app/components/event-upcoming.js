import Component from '@ember/component';
import {computed} from '@ember/object';
import {inject as service} from '@ember/service';
import moment from 'moment';

export default Component.extend({
  store: service(),

  nextEvent: null,

  upcomingEvents: computed(function () {
    let current_time = moment('2018-03-06 15:10');
    return this.get('store').query('event', {'special': 'current'});
  })
});
