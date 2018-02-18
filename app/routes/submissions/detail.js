import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    return this.get('store').findRecord('submission', params.id);
  },

  afterModel() {
    this.get('store').findAll('email-template').then(data => {
      this.get('controller').set('templates', data);
    });
  },

});
