import Component from '@ember/component';
import { task } from 'ember-concurrency';
import { inject as service } from '@ember/service';
import { get } from '@ember/object';
import { flatMap } from 'lodash';

import ENV from 'frontend/config/environment';

export default Component.extend({
  tagName: '',
  errors: null,
  uploader: service('file-queue'),

  uploadPhoto: task(function* (file) {
    this.set('errors', null);

    try {
      file.readAsDataURL();
      yield file
        .upload(`${ENV.APP.API_HOST}/${ENV.APP.API_NAMESPACE}/resource-image`, {
          fileKey: 'image',
        })
        .then((data) => {
          this.set('model.image', data.body.id);
          this.set('model.imageUrl', data.body.image);
        });
    } catch (e) {
      this.set('model.image', null);
      this.set('model.imageUrl', null);

      this.set(
        'errors',
        flatMap(e.body, (k) => k)
      );
    }
  })
    .maxConcurrency(3)
    .enqueue(),

  actions: {
    uploadImage(file) {
      get(this, 'uploadPhoto').perform(file);
    },

    removeImage() {
      this.model.set('imageUrl', '');
      this.model.set('image', null);
    },

    resetDropzone() {
      this.set('errors', null);
    },
  },
});
