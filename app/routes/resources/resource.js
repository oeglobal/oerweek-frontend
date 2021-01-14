import classic from 'ember-classic-decorator';
import Route from '@ember/routing/route';

@classic
export default class ResourceRoute extends Route {
  model(params) {
    return this.store
      .query('resource', { slug: params.resource_slug })
      .then(function (pages) {
        return pages.get('firstObject');
      });
  }

  titleToken(model) {
    return model.get('title');
  }
}
