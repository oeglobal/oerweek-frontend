import classic from 'ember-classic-decorator';
import Route from '@ember/routing/route';

@classic
export default class EditRoute extends Route {
  titleToken = 'Edit Submission';

  model(params) {
    return this.store.find('submission', params.submission_id);
  }

  setupController(controller, model) {
    super.setupController(controller, model);
    this.controllerFor('submit').set('isEditing', true);
  }
}
