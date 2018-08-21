import Route from '@ember/routing/route';

export default Route.extend({
  titleToken: 'Edit Submission',

  model(params) {
    return this.store.find('submission', params.submission_id);
  },

  setupController(controller, model) {
    this._super(controller, model);
    this.controllerFor('submit').set('isEditing', true);
  }

});
