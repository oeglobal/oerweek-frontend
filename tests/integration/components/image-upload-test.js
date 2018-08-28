import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { find } from 'ember-native-dom-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | image-upload', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`{{image-upload}}`);
    assert.equal(find('h4').textContent.trim(), 'Upload Image');
  });
});
