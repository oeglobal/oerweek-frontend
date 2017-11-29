import Route from '@ember/routing/route';

export default Route.extend({
  titleToken: 'New Submission',

  model() {
    return this.store.createRecord('submission', {
      'datetime': new Date(2018, 3, 5) // also update date in controller.resetSubmission();
    });
  },
});
