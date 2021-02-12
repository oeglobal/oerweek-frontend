import classic from 'ember-classic-decorator';
import Route from '@ember/routing/route';

@classic
export default class ScheduleRoute extends Route {
  model() {
    // noinspection JSCheckFunctionSignatures
    return this.store.query('event', { 'page[size]': 999, year: 2021 });
  }
}
