import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, find } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | event card long', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    await render(hbs`{{event-card-long}}`);

    assert.dom('*').hasText('');

    // Template block usage:
    await render(hbs`
      {{#event-card-long}}
        template block text
      {{/event-card-long}}
    `);

    assert.dom('*').hasText('template block text');
  });
});