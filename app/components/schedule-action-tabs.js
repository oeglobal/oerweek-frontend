import Component from '@ember/component';
import EmberObject from '@ember/object';
import { A } from '@ember/array';

let TabDate = EmberObject.extend({
  value: '',
  text: '',
  isActive: false
});

export default Component.extend({
  tagName: '',

  dates: A([
    TabDate.create({value: '2020-03-02', isActive: false}),
    TabDate.create({value: '2020-03-03', isActive: false}),
    TabDate.create({value: '2020-03-04', isActive: false}),
    TabDate.create({value: '2020-03-05', isActive: false}),
    TabDate.create({value: '2020-03-06', isActive: true}),
    TabDate.create({value: 'other', isActive: false}),
  ]),
  eventType: 'local',

  actions: {
    selectDate(selectedTab) {
      this.dates.setEach('isActive', false);
      selectedTab.set('isActive', true);

      this.sendAction('selectDate', selectedTab, this.eventType);
    }
  }
});
