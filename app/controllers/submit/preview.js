import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    submitForm() {
      this.model
        .save()
        .then(() => {
          this.transitionToRoute('submit.confirmation');
        })
        .catch(() => {
          this.transitionToRoute('submit.error');
        });
    },
  },
});
