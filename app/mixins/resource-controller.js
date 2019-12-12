import Mixin from '@ember/object/mixin';
import {computed} from '@ember/object';
import getOpenTags from 'frontend/utils/get-open-tags';
import getActiveLanguages from 'frontend/utils/get-active-languages';

export default Mixin.create({
  queryParams: ['page'],
  years: ['2015', '2016', '2017', '2018', '2019', '2020'],
  yearselected: '2019',
  opentag: null,
  language: null,

  page: 1,
  pageCount: computed('filteredResources.meta.pagination.count', function () {
    return this.get('filteredResources.meta.pagination.pages');
  }),

  filteredResources: computed('yearselected', 'page', 'opentag', 'language', 'model', function () {
    let page = this.page,
      year = this.yearselected,
      opentag = this.opentag,
      language = this.language;

    let params = {'page[number]': page};

    if (year) {
      params['year'] = year;
    }

    if (opentag) {
      params['opentags'] = opentag;
    }

    if (language) {
      params['form_language'] = language;
    }

    return this.store.query(this.modelName, params);
  }),

  init() {
    this._super(...arguments);
    this.set('opentags', getOpenTags());
    this.set('languages', getActiveLanguages());
  },

  actions: {
    previousPage: function () {
      this.decrementProperty('page');

      this.transitionToRoute({
        queryParams: {
          page: this.page
        }
      });
    },

    nextPage: function () {
      this.transitionToRoute({
        queryParams: {
          page: this.incrementProperty('page')
        }
      });
    },

    selectYear(year) {
      this.set('yearselected', year);
      this.set('page', 1);
    },

    selectOpentag(opentag) {
      this.set('opentag', opentag);
      this.set('page', 1);
    },

    selectLanguage(language) {
      this.set('language', language);
      this.set('page', 1);
    }
  }
});
