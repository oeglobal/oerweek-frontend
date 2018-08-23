import Route from '@ember/routing/route';

export default Route.extend({
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
  },

  afterModel(model) {
    if (!model.get('firstname')) {
      this.transitionTo('submit');
    }
  },

  setupController(controller/*, model*/) {
    this._super(...arguments);
    controller.set('isEditing', this.controllerFor('submit').get('isEditing'))
  }
});
