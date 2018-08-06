import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('helper:divisible-by', function(hooks) {
  setupRenderingTest(hooks);

  // Replace this with your real tests.
  test('it renders', async function(assert) {
    this.set('index', 3);
    await render(hbs`{{if (divisible-by index 2) 'yes' 'no'}}`);
    assert.dom('*').hasText('yes');

    this.set('index', 4);
    await render(hbs`{{if (divisible-by index 2) 'yes' 'no'}}`);
    assert.dom('*').hasText('no');
  });
});

