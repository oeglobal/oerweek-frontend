import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    return this.store.findRecord('submission', params.id);
  },

  afterModel() {
    this.store.findAll('email-template').then(data => {
      this.controller.set('templates', data);
    });
  },

});
