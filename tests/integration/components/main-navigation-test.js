import { module, /* test , */ skip } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | main navigation', function(hooks) {
  setupRenderingTest(hooks);

  skip('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    await render(hbs`{{main-navigation}}`);

    assert.dom('*').hasText('');

    // Template block usage:
    await render(hbs`
      {{#main-navigation}}
        template block text
      {{/main-navigation}}
    `);

    assert.dom('*').hasText('template block text');
  });
});
