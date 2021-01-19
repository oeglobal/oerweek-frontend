import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  user: service(),

  actions: {
    changeSubmissionStatus(model, postStatus) {
      model.set('postStatus', postStatus);

      if (!model.image) {
        model.set('image', '');
      }
      model.save();
    },
  },
});
