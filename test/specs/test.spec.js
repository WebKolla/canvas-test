import assert from 'assert';
// import webdriver from 'assert';

describe('When test runs it should', () => {
  it('load the defined page', () => {
    browser.url('/');
    var title = browser.getTitle();
    
    assert.equal(title, 'End-to-End Testing');
  });

  it('be able to locate a node', () => {
    browser.url('/');
    var title = browser.getTitle();
    
    // $("circle[data-node-id='n10']").isDisplayed()
    // .then(function(displayed) {
        assert.equal($("circle[data-node-id='people']").state, 'success');
        assert.equal($("circle[data-node-id='n15']").state, 'success');
    // });

  });
});