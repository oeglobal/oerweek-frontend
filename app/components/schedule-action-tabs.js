import Component from '@ember/component';
import EmberObject from '@ember/object';
import { A } from '@ember/array';

let TabDate = EmberObject.extend({
  value: '',
  text: '',
  isActive: false
});

export default Component.extend({
  dates: A([
    TabDate.create({value: '2018-03-05', text: 'Monday, 5.3',     isActive: true}),
    TabDate.create({value: '2018-03-06', text: 'Tuesday, 6.3',    isActive: false}),
    TabDate.create({value: '2018-03-07', text: 'Wednesday, 7.3',  isActive: false}),
    TabDate.create({value: '2018-03-08', text: 'Thursday, 8.3',  isActive: false}),
    TabDate.create({value: '2018-03-09', text: 'Friday, 9.3',    isActive: false}),
  ]),
  event_type: 'local',

  actions: {
    selectDate(selectedTab) {
      this.get('dates').setEach('isActive', false);
      selectedTab.set('isActive', true);

      this.sendAction('selectDate', selectedTab, this.get('event_type'));
    }
  }
});
