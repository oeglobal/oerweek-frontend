/* The MIT License (MIT)
  Copyright (c) 2016 - Chris Honniball
  https://github.com/ChrisHonniball/ember-string-helpers
  */

import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Helper | uc-words', function(hooks) {
  setupRenderingTest(hooks);

  test('all lower case', async function(assert) {
    this.set('inputValue', 'hellow world');
    await render(hbs`{{uc-words inputValue}}`);

    assert.equal(this.element.textContent.trim(), 'Hello World');
  });
});
