import Component from '@ember/component';
import { computed } from '@ember/object';
import {inject as service} from '@ember/service';

export default Component.extend({
  store: service(),

  localDate: '2018-03-05',
  onlineDate: '2018-03-05',

  filteredLocalEvent: computed('localDate', 'model', function(){
    return this.get('store').query('event', {
      'event_type': 'local',
      'page_size': 99,
      'date': this.get('localDate')
    });
  }),

  filteredOnlineEvent: computed('onlineDate', 'model', function(){
    return this.get('store').query('event', {
      'event_type': 'online',
      'page_size': 99,
      'date': this.get('onlineDate')
    });
  }),

  actions: {
    selectDate(selectedTab, event_type) {
      if ( event_type === 'online') {
        this.set('onlineDate', selectedTab.get('value'));
      } else {
        this.set('localDate', selectedTab.get('value'));
      }
    }
  }
});
