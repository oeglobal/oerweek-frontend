import Route from '@ember/routing/route';

export default Route.extend({
  classNames: ['page'],

  model(params) {
    return this.store.query('page', { slug: params.page_slug })
      .then(function(pages) {
        if ( pages.content.length ) {
          return pages.get('firstObject');
        }

        throw new Error("Not found");
      });
  },

  titleToken: function(model) {
    return model.get('title');
  },

  actions: {
    error(error) {
      if (error) {
        return this.transitionTo('/not-found');
      }
    }
  }

});
