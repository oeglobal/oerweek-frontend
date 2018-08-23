import Controller from '@ember/controller';
import {inject as service} from '@ember/service';
import {computed} from '@ember/object';

import moment from 'moment';
import getLanguages from 'frontend/utils/get-languages';
import getOpenTags from 'frontend/utils/get-open-tags';

export default Controller.extend({
  uploader: service('file-queue'),
  isUploading: computed('uploader.progress', function () {
    let progress = this.get('uploader.progress');
    return !(progress === 100 || progress === 0);
  }),

  init() {
    this._super(...arguments);

    this.set('didValidate', null);
    this.set('languages', getLanguages());
    this.set('openTags', getOpenTags());
    this.set('fields', ['eventType', 'title', 'eventFacilitator', 'description', 'eventTime', 'link', 'linkwebroom', 'language', 'openags'])
  },

  actions: {
    validateForm(route) {
      let fields = this.fields;

      this.model.validate({'on': fields}).then(({validations}) => {
        this.set('didValidate', true);

        if (validations.get('isValid')) {
          this.transitionToRoute(route);
        }
      });
    },

    updateDatetime(val) {
      let newDateTime = moment(val[0]);
      this.set('model.eventTime', newDateTime.toISOString());
      this.set('timezone', 'GMT' + newDateTime.format('Z'));
    },
  }
});
