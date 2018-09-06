import getActiveLanguages from 'frontend/utils/get-active-languages';
import { module, test } from 'qunit';

module('Unit | Utility | getActiveLanguages', function(/* hooks */) {

  // Replace this with your real tests.
  test('it works', function(assert) {
    let result = getActiveLanguages();
    assert.ok(result.length >= 18);
  });
});
