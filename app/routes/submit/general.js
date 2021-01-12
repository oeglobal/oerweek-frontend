import Route from '@ember/routing/route';

export default class GeneralRoute extends Route {
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

  setupController(controller /*, model*/) {
    super.setupController(...arguments);
    let parentController = this.controllerFor('submit');
    controller.isEditing = parentController.isEditing;
  }
}
