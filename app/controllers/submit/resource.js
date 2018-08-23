import Controller from '@ember/controller';
import {inject as service} from '@ember/service';
import {computed} from '@ember/object';

import getLanguages from 'frontend/utils/get-languages';
import getOpenTags from 'frontend/utils/get-open-tags';

export default Controller.extend({
  isUploading: computed('uploader.progress', function () {
    let progress = this.get('uploader.progress');
    return !(progress === 100 || progress === 0);
  }),

  init() {
    this._super(...arguments);
    this.set('languages', getLanguages());
    this.set('openTags', getOpenTags());
    this.set('licenses', ['CC-BY', 'CC-BY-SA', 'CC-BY-NC', 'CC-BY-NC-SA', 'Other']);
    this.set('fields', ['title', 'description', 'link', 'license', 'language', 'opentags']);
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
    }
  }
});
