import { equal } from '@ember/object/computed';
import Component from '@ember/component';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';

export default Component.extend({
  store: service(),

  date: '2019-03-04',

  isDateOther: equal('date', 'other'),

  filteredLocalEvent: computed('date', 'model', function(){
    return this.store.query('event', {
      'event_type': 'local',
      'page[size]': 99,
      'date': this.date
    });
  }),

  filteredOnlineEvent: computed('date', 'model', function(){
    return this.store.query('event', {
      'event_type': 'online',
      'page[size]': 99,
      'date': this.date
    });
  }),

  actions: {
    selectDate(selectedTab, /* _ */) {
      this.set('date', selectedTab.get('value'));
    }
  }
});
