import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  queryParams: ['postStatus'],
  postStatus: null,

  filteredSubmissions: computed('postStatus', 'model.@each.postStatus', function() {
    let postStatus = this.postStatus;
    let submissions = this.model;

    if (postStatus) {
      return submissions.filterBy('postStatus', postStatus);
    } else {
      return submissions;
    }
  })
});
