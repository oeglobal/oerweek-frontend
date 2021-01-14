import classic from 'ember-classic-decorator';
import { action, computed } from '@ember/object';
import { inject as service } from '@ember/service';
import Controller from '@ember/controller';

import getLanguages from 'frontend/utils/get-languages';
import getOpenTags from 'frontend/utils/get-open-tags';

@classic
export default class ResourceController extends Controller {
  @service('file-queue')
  uploader;

  @computed('uploader.progress')
  get isUploading() {
    let progress = this.get('uploader.progress');
    return !(progress === 100 || progress === 0);
  }

  init() {
    super.init(...arguments);
    this.set('languages', getLanguages());
    this.set('openTags', getOpenTags());
    this.set('licenses', [
      'CC-BY',
      'CC-BY-SA',
      'CC-BY-NC',
      'CC-BY-NC-SA',
      'Other',
    ]);
    this.set('fields', [
      'title',
      'description',
      'link',
      'license',
      'language',
      'opentags',
    ]);
  }

  @action
  validateForm(route) {
    let fields = this.fields;

    this.model.validate({ on: fields }).then(({ validations }) => {
      this.set('didValidate', true);

      if (validations.get('isValid')) {
        this.transitionToRoute(route);
      }
    });
  }
}
