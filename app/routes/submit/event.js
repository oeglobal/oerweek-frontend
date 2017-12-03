import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return this.modelFor('submit');
  },

  afterModel(model) {
    if ( ! model.get('firstname') ) {
      this.transitionTo('submit');
    }
  }
});
