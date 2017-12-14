import Controller from '@ember/controller';

export default Controller.extend({
  init() {
    this._super(...arguments);
    },

  actions: {
    submitForm() {
      this.get('model').save().then(() => {
        this.transitionToRoute('submit.confirmation');
      }).catch(() => {
        this.transitionToRoute('submit.error');
      });
    }
  }
});
