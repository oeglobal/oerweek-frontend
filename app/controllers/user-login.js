import Controller from '@ember/controller';
import {inject as service} from '@ember/service';
import {reads} from '@ember/object/computed';


export default Controller.extend({
  session: service('session'),

  fastboot: service(),
  isFastBoot: reads('fastboot.isFastBoot'),

  queryParams: ['user', 'key'],
  user: null,
  key: null,

  actions: {
    authUser() {
      if (!this.get('isFastBoot')) {
        let authenticator = 'authenticator:token';
        let credentials = {
          username: this.user,
          password: this.key
        };

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
      }
    }
  }
});
