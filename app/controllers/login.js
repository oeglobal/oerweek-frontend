import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  session: service('session'),
  errorMessage: null,

  actions: {
    authenticate() {
      let credentials = this.getProperties('username', 'password'),
        authenticator = 'authenticator:token';

      this.session.authenticate(authenticator, credentials)
        .then(() => {
          this.transitionToRoute('submissions');
        }).catch(resp => {
        if (resp['non_field_errors']) {
          this.set('errorMessage', resp['non_field_errors']);
        } else {
          this.set('errorMessage', resp);
        }
      });
    },
  }
});
