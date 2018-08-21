import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    let isEditing = this.controllerFor('submit').get('isEditing');
    if (isEditing) {
      return this.modelFor('submit.edit');
    } else {
      return this.modelFor('submit.index');
    }
  },

  afterModel(model) {
    if ( ! model.get('firstname') ) {
      this.transitionTo('submit');
    }
  },

  setupController(controller/*, model*/) {
    this._super(...arguments);
    controller.set('isEditing', this.controllerFor('submit').get('isEditing'))
  }
});
