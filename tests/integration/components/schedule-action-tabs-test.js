import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('schedule-action-tabs', 'Integration | Component | schedule action tabs', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{schedule-action-tabs}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#schedule-action-tabs}}
      template block text
    {{/schedule-action-tabs}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
