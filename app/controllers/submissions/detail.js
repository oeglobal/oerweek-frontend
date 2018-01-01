import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    changeSubmissionStatus(model, postStatus) {
      model.set('postStatus', postStatus);
      model.save();
    }
  }
});
