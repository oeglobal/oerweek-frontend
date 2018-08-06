import { gt } from '@ember/object/computed';
import Component from '@ember/component';
import { computed } from '@ember/object';
import { range, max, min } from 'lodash';

export default Component.extend({
  tagName: '',
  showPageNextMargin: computed('page', 'pageCount', function() {
    let page = this.page,
      pageCount = this.pageCount;

    if ( page + 2 < pageCount ) {
      return true;
    }
  }),

  showPagePrevMargin: computed('page', 'pageCount', function() {
    let page = this.page;

    if ( page - 2 > 2 ) {
      return true;
    }
  }),

  hasPreviousPage: gt('page', 1),
  hasNextPage: computed('page', 'pageCount', function() {
    return this.page < this.pageCount;
  }),

  getPreviousPages: computed('page', function() {
    let page = this.page;
    if ( page > 1 ) {
      return range(max([page - 2, 1]), page);
    }
  }),

  getNextPages: computed('page', 'pageCount', function() {
    let page = this.page,
      pageCount = this.pageCount;

    var showNumPages = max([3, 6 - page]);

    return range(page+1, min([page+showNumPages, pageCount+1]));
  }),

});
