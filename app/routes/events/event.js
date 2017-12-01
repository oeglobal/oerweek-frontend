import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    return this.store.query('event', {slug: params.event_slug})
      .then(function (pages) {
        return pages.get('firstObject');
      });
  },

  titleToken: function (model) {
    return model.get('title');
  },
});
