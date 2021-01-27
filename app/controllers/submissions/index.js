import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';

export default Controller.extend({
  user: service(),
  queryParams: ['postStatus'],
  postStatus: null,

  humanPostStatus: computed('postStatus', function () {
    if (!this.user.isStaff) {
      return 'Your Submissions';
    }

    if (this.postStatus === 'draft') {
      return 'Draft Submissions';
    } else if (this.postStatus === 'publish') {
      return 'Published Submissions';
    } else if (this.postStatus === 'trash') {
      return 'Rejected Submissions';
    } else {
      return 'All Submissions';
    }
  }),

  filteredSubmissions: computed(
    'postStatus',
    'model.@each.postStatus',
    function () {
      let postStatus = this.postStatus;
      let submissions = this.model;

      if (postStatus) {
        return submissions.filterBy('postStatus', postStatus);
      } else {
        return submissions;
      }
    }
  ),
});
