import { module, test } from 'qunit';
import { visit, currentURL, click, fillIn, pauseTest } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import { selectChoose, selectSearch, removeMultipleOption, clearSelected } from 'ember-power-select/test-support';

module('Acceptance | submit', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /submit', async function(assert) {
    await visit('/submit');

    assert.equal(currentURL(), '/submit');
    await click('.button.test-submit');

    assert.equal(currentURL(), '/submit/general');

    await fillIn('[name=firstname]', 'John');
    await fillIn('[name=lastname]', 'Smith');
    await fillIn('[name=email]', 'john.smith@example.com');
    await fillIn('[name=institution]', 'US College');

    await selectChoose('.form-group.country', 'United States')
    await fillIn('[name=city]', 'San Francisco, CA');

    await click('.resource.ember-view');

    await click('.next-page button');
    assert.equal(currentURL(), '/submit/resource');

    await fillIn('[name=title]', 'Example Resource');
    await fillIn('[name=description]', 'Lorem ipsum dolor set');
    await fillIn('[name=link]', 'http://example.com');

    await selectChoose('.form-group.license', 'CC-BY');
    await selectChoose('.form-group.language', 'English');
    await selectChoose('.form-group.opentags', 'Open Policy');

    await click('.next-page.button');
    assert.equal(currentURL(), '/submit/preview');

    await click('.next-page.button');
    assert.equal(currentURL(), '/submit/confirmation');

    await pauseTest();
  });
});
