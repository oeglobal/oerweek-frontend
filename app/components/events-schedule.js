import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class EventsScheduleComponent extends Component {
  @service store;

  @tracked date = 'all';

  @tracked isDateOther = false;
  @tracked isDateAll = false;

  constructor() {
    super(...arguments);
    this.isDateOther = this.date === 'other';
    this.isDateAll = this.date === 'all';
  }

  filteredLocalEvent() {
    return this.store.query('event', {
      event_type: 'local',
      'page[size]': 99,
      date: this.date,
    });
  }

  filteredOnlineEvent() {
    return this.store.query('event', {
      event_type: 'online',
      'page[size]': 99,
      date: this.date,
    });
  }

  @action
  selectDate(selectedTab) {
    const date = selectedTab.get('value');
    this.date = date;

    this.isDateOther = date === 'other';
    this.isDateAll = date === 'all';
  }
}
