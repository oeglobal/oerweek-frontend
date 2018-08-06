import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | submit/resource', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:submit/resource');
    assert.ok(route);
  });
});
