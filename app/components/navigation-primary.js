import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class NavigationPrimaryComponent extends Component {
  @tracked isMobileOpen = false;

  @action
  toggleMobileOpen() {
    this.isMobileOpen = !this.isMobileOpen;
  }
}
