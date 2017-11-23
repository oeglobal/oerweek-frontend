import Component from '@ember/component';
import { computed } from '@ember/object';
import { range, max, min } from 'lodash';

export default Component.extend({
  tagName: '',
  showPageNextMargin: computed('page', 'pageCount', function() {
    let page = this.get('page'),
      pageCount = this.get('pageCount');

    if ( page + 2 < pageCount ) {
      return true;
    }
  }),

  showPagePrevMargin: computed('page', 'pageCount', function() {
    let page = this.get('page');

    if ( page - 2 > 2 ) {
      return true;
    }
  }),

  hasPreviousPage: computed.gt('page', 1),
  hasNextPage: computed('page', 'pageCount', function() {
    return this.get('page') < this.get('pageCount');
  }),

  getPreviousPages: computed('page', function() {
    let page = this.get('page');
    if ( page > 1 ) {
      return range(max([page - 2, 1]), page);
    }
  }),

  getNextPages: computed('page', 'pageCount', function() {
    let page = this.get('page'),
      pageCount = this.get('pageCount');

    var showNumPages = max([3, 6 - page]);

    return range(page+1, min([page+showNumPages, pageCount+1]));
  }),

  actions: {
    previousPage: function() {
      this.sendAction('previousPage');
    },
    nextPage: function() {
      this.sendAction('nextPage');
    }

  }
});
