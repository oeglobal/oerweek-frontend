import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | submit/error', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:submit/error');
    assert.ok(route);
  });
});
