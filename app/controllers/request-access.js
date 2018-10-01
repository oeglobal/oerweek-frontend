import Controller from '@ember/controller';
import {inject as service} from '@ember/service';

import ENV from 'frontend/config/environment';

export default Controller.extend({
  ajax: service(),
  email: null,
  errorMessage: '',
  message: '',

  init() {
    this._super(...arguments);
    this.set('email', null);
    this.set('errorMessage', null);
    this.set('message', null);
  },

  actions: {
    requestAccess() {
      let ajax = this.ajax,
        email = this.email;

      ajax.post(`${ENV.APP.API_HOST}/api/request-access/`, {data: {email}}).then((response) => {
        this.set('errorMessage', '');
        this.set('message', '');

        if (response.status !== 'ok') {
          this.set('errorMessage', 'Invalid email');
        } else {
          this.set('message', 'You\'ll receive email with instructions shortly. Please also check Spam folder.');
        }
      });
    }
  }
});
