import Controller from '@ember/controller';
import { getOwner } from '@ember/application';

export default Controller.extend({
  actions: {
    newSubmission() {
      let owner = getOwner(this);
      owner.lookup('route:submit').refresh();

      this.transitionToRoute('submit.index');
    }
  }
});
