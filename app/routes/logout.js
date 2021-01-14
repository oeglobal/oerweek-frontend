import classic from 'ember-classic-decorator';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import Route from '@ember/routing/route';

@classic
export default class LogoutRoute extends Route {
  @service('session')
  session;

  @action
  didTransition() {
    this.get('session').invalidate();
    this.transitionTo('index');
  }
}
