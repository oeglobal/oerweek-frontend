import classic from 'ember-classic-decorator';
import Route from '@ember/routing/route';

@classic
export default class EventRoute extends Route {
  model() {
    let isEditing = this.controllerFor('submit').get('isEditing'),
      resolvedModel;

    if (isEditing) {
      resolvedModel = this.modelFor('submit.edit');
    } else {
      resolvedModel = this.modelFor('submit.index');
    }

    if (!resolvedModel) {
      this.transitionTo('submit');
    } else {
      return resolvedModel;
    }
  }

  afterModel(model) {
    if (!model.get('firstname')) {
      this.transitionTo('submit');
    }
  }

  setupController(controller/*, model*/) {
    super.setupController(...arguments);
    controller.set('isEditing', this.controllerFor('submit').get('isEditing'))
  }
}
