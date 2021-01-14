import classic from 'ember-classic-decorator';
import Route from '@ember/routing/route';

@classic
export default class EventRoute extends Route {
  model(params) {
    return this.store.query('event', {slug: params.event_slug})
      .then(function (pages) {
        return pages.get('firstObject');
      });
  }

  titleToken(model) {
    return model.get('title');
  }
}
