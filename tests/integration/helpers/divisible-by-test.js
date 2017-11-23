
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('divisible-by', 'helper:divisible-by', {
  integration: true
});

// Replace this with your real tests.
test('it renders', function(assert) {
  this.set('inputValue', '1234');

  this.render(hbs`{{divisible-by inputValue}}`);

  assert.equal(this.$().text().trim(), '1234');
});

