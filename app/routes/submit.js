import Route from '@ember/routing/route';

export default Route.extend({
  titleToken: 'New Submission',

  model() {
    return this.store.createRecord('submission', {
      'eventTime': '2018-03-11T09:00:00.000Z',
      'postStatus': 'draft'
    });
  },

  afterModel(model) {
    let submissions = this.store.peekAll('submission');
    if (submissions.get('length') > 1) {
      let prevSubmission = submissions.slice(-2)[0];
      model.setProperties({
        eventTime: prevSubmission.get('eventTime'),
        firstname: prevSubmission.get('firstname'),
        lastname: prevSubmission.get('lastname'),
        email: prevSubmission.get('email'),
        country: prevSubmission.get('country'),
        city: prevSubmission.get('city'),
        institution: prevSubmission.get('institution'),
        institutionurl: prevSubmission.get('institutionurl')
      });
    }
  }
});
