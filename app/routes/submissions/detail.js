import classic from 'ember-classic-decorator';
import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

@classic
export default class DetailRoute extends Route {
  @service fastboot;

  model(params) {
    return this.store.findRecord('submission', params.id);
  }

  afterModel() {
    if (!this.fastboot.isFastBoot) {
      this.store.findAll('email-template').then((data) => {
        this.controller.set('templates', data);
      });
    }
  }
}
