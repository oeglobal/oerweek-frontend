import EmberObject from '@ember/object';
import ResourceControllerMixin from 'frontend/mixins/resource-controller';
import { module, test } from 'qunit';

module('Unit | Mixin | resource controller');

// Replace this with your real tests.
test('it works', function(assert) {
  let ResourceControllerObject = EmberObject.extend(ResourceControllerMixin);
  let subject = ResourceControllerObject.create();
  assert.ok(subject);
});
