import assert from 'assert';

describe('page title', () => {
  it('has the correct page title', () => {
    browser.url('/');
    var title = browser.getTitle();
    assert.equal(title, 'End-to-End Testing');
  });
});