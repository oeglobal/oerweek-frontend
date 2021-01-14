import classic from 'ember-classic-decorator';
import Route from '@ember/routing/route';

@classic
export default class DetailRoute extends Route {
  model(params) {
    return this.store.findRecord('submission', params.id);
  }

  afterModel() {
    this.store.findAll('email-template').then(data => {
      this.controller.set('templates', data);
    });
  }
}
