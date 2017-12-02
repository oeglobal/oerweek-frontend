import Controller from '@ember/controller';

export default Controller.extend({
  init() {
    this._super(...arguments);
    },

  actions: {
    submitForm() {
      this.get('model').save().then((resp) => {
        this.transitionToRoute('submit.confirmation');
      }).catch((reason) => {
        this.transitionToRoute('submit.error');
      });
    }
  }
});
