import Controller from '@ember/controller';
import { equal } from '@ember/object/computed';

export default Controller.extend({
  isHomepage: equal('currentRouteName', 'index'),
});
