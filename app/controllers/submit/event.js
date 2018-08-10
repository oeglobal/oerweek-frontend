import Controller from '@ember/controller';
import moment from 'moment';
import getLanguages from 'frontend/utils/get-languages';
import getOpenTags from 'frontend/utils/get-open-tags';

export default Controller.extend({
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
