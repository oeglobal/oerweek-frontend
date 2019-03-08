import Controller from '@ember/controller';
import {computed} from '@ember/object';
import {inject as service} from '@ember/service';

export default Controller.extend({
  user: service(),
  queryParams: ['postStatus'],
  postStatus: null,

  filteredSubmissions: computed('postStatus', 'model.@each.postStatus', function () {
    let postStatus = this.postStatus;
    let submissions = this.model;

    if (postStatus) {
      return submissions.filterBy('postStatus', postStatus);
    } else {
      return submissions;
    }
  })
});
