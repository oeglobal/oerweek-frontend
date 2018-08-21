import Route from '@ember/routing/route';
import {inject as service} from '@ember/service';

export default Route.extend({
  session: service('session'),

  actions: {
    didTransition() {
      this.get('session').invalidate();
      this.transitionTo('index');
    }
  }
});
