import { equal } from '@ember/object/computed';
import Component from '@ember/component';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';

export default Component.extend({
  store: service(),

  date: '2018-03-05',

  isDateOther: equal('date', 'other'),

  filteredLocalEvent: computed('date', 'model', function(){
    return this.store.query('event', {
      'event_type': 'local',
      'page_size': 99,
      'date': this.date
    });
  }),

  filteredOnlineEvent: computed('date', 'model', function(){
    return this.store.query('event', {
      'event_type': 'online',
      'page_size': 99,
      'date': this.date
    });
  }),

  actions: {
    selectDate(selectedTab, _) {
      this.set('date', selectedTab.get('value'));
    }
  }
});