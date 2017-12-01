import Controller from '@ember/controller';
import moment from 'moment';

export default Controller.extend({
  init() {
    this._super(...arguments);

    this.set('didValidate', null);
    this.set('languages', ['Albanian', 'Arabic', 'Armenian', 'Basque', 'Bosnian', 'Bulgarian', 'Catalan', 'Chinese (Simplified)', 'Chinese (Traditional)', 'Croatian', 'Czech', 'Danish', 'Dutch', 'English', 'Esperanto', 'Estonian', 'Finnish', 'French', 'German', 'Greek', 'Hebrew', 'Hindi', 'Hungarian', 'Icelandic', 'Indonesian', 'Irish', 'Italian', 'Japanese', 'Korean', 'Kurdish', 'Latin', 'Latvian', 'Lithuanian', 'Macedonian', 'Malay', 'Maltese', 'Moldavian', 'Mongolian', 'Nepali', 'Norwegian Bokmål', 'Persian', 'Polish', 'Portuguese, Brazil', 'Portuguese, Portugal', 'Punjabi', 'Quechua', 'Romanian', 'Russian', 'Serbian', 'Slavic', 'Slovak', 'Slovenian', 'Somali', 'Spanish', 'Swedish', 'Tamil', 'Thai', 'Turkish', 'Ukrainian', 'Urdu', 'Uzbek', 'Vietnamese', 'Welsh', 'Yiddish', 'Zulu']);
    this.set('openTags', ['Open Access', 'Open Course (OCW / MOOC)', 'Open Culture', 'Open Data', 'Open Education Degree',
      'Open Licenses', 'Open Pedagogy', 'Open Policy', 'Open Research', 'Open Repository', 'Open Science',
      'Open Source Software', 'Open Textbook', 'Open Web', 'Other Open Content']);
    this.set('fields', ['eventtype', 'title', 'facilitator', 'description', 'datetime', 'link', 'linkwebroom', 'language', 'openags'])
  },

  actions: {
    validateForm(route) {
      let fields = this.get('fields');

      this.get('model').validate({'on': fields}).then(({validations}) => {
        this.set('didValidate', true);

        if (validations.get('isValid')) {
          this.transitionToRoute(route);
        }
      });
    },

    updateDatetime(val) {
      let newDateTime = moment(val[0]);
      this.set('model.datetime', newDateTime.toISOString());
      this.set('timezone', 'GMT' + newDateTime.format('Z'));
    },
  }
});
