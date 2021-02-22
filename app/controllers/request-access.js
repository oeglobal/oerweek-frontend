import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import fetch from 'fetch';

import ENV from 'frontend/config/environment';

export default Controller.extend({
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

      fetch(`${ENV.APP.API_HOST}/api/request-access/`, {
        method: 'POST',
        headers: {
          Accept: 'application/json, text/plain, */*',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })
        .then((response) => {
          return response.json();
        })
        .then((response) => {
          this.set('errorMessage', '');
          this.set('message', '');

          if (response.status === 'invalid_email') {
            this.set('errorMessage', 'Invalid email');
          } else {
            this.set(
              'message',
              "You'll receive email with instructions shortly. Please also check Spam folder."
            );
          }
        });
    },
  },
});
