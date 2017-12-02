import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    newSubmission() {
      let owner = getOwner(this);
      owner.lookup('route:submit').refresh();

      this.transitionToRoute('submit.general');
    }
  }
});
