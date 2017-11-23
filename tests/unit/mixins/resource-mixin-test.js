import EmberObject from '@ember/object';
import ResourceMixinMixin from 'frontend/mixins/resource-mixin';
import { module, test } from 'qunit';

module('Unit | Mixin | resource mixin');

// Replace this with your real tests.
test('it works', function(assert) {
  let ResourceMixinObject = EmberObject.extend(ResourceMixinMixin);
  let subject = ResourceMixinObject.create();
  assert.ok(subject);
});
