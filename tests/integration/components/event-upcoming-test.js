import { module, /* test , */ skip } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | event upcoming', function(hooks) {
  setupRenderingTest(hooks);

  skip('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    await render(hbs`{{event-upcoming}}`);

    assert.dom('*').hasText('');

    // Template block usage:
    await render(hbs`
      {{#event-upcoming}}
        template block text
      {{/event-upcoming}}
    `);

    assert.dom('*').hasText('template block text');
  });
});
