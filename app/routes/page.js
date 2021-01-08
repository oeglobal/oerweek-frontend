import Route from '@ember/routing/route';
import { action } from '@ember/object';

export default class PageRoute extends Route {
  classNames = ['page'];

  model(params) {
    console.log(params);
    return this.store
      .query('page', { slug: params.page_slug })
      .then(function (pages) {
        console.log(pages);
        if (pages.content.length) {
          return pages.get('firstObject');
        }

        throw new Error('Not found');
      });
  }

  titleToken(model) {
    return model.get('title');
  }

  @action
  error(error) {
    if (error) {
      return this.transitionTo('/not-found');
    }
  }
}
