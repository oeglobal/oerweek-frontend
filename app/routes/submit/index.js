import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class IndexRoute extends Route {
  titleToken = 'New Submission';

  @service fastboot;

  model() {
    if (!this.fastboot.isFastBoot) {
      return this.store.createRecord('submission', {
        eventTime: '2021-03-01T09:00:00.000Z',
        postStatus: 'draft',
      });
    }
  }

  afterModel(model) {
    let submissions = this.store.peekAll('submission');
    if (submissions && submissions.length > 1) {
      let prevSubmission = submissions.slice(-2)[0];
      model.setProperties({
        eventTime: prevSubmission.get('eventTime'),
        firstname: prevSubmission.get('firstname'),
        lastname: prevSubmission.get('lastname'),
        email: prevSubmission.get('email'),
        country: prevSubmission.get('country'),
        city: prevSubmission.get('city'),
        institution: prevSubmission.get('institution'),
        institutionurl: prevSubmission.get('institutionurl'),
      });
    }
  }

  setupController(controller, ...args) {
    super.setupController(controller, ...args);
    controller.isEditing = false;
    // this.controllerFor('submit').set('isEditing', false);
  }
}
