import Mixin from '@ember/object/mixin';
import { computed } from '@ember/object';

export default Mixin.create({
  queryParams: ['page'],
  years: ['2015', '2016', '2017', '2018'],
  yearselected: '2018',

  page: 1,
  pageCount: computed('filteredResources.content.meta.count', function(){
    if ( this.get('filteredResources.content.meta.count') ) {
      return Math.ceil(this.get('filteredResources.content.meta.count') / 9);
    }
  }),

  filteredResources: computed('yearselected', 'page', 'model', function() {
    let page = this.page,
      year = this.yearselected;

    return this.store.query(this.modelName, {page, year});
  }),

  actions: {
    previousPage: function() {
      this.decrementProperty('page');

      this.transitionToRoute({
        queryParams: {
          page: this.page
        }
      });
    },

    nextPage: function(){
      this.transitionToRoute({
        queryParams: {
          page: this.incrementProperty('page')
        }
      });
    },

    selectYear(year) {
      this.set('yearselected', year);
      this.set('page', 1);
    }
  }
});
