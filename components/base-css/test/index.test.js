import { expect, fixture } from '@open-wc/testing';

describe('CAGOV Base CSS', function unitTest() {
  this.timeout(5000);
  it('works', async () => {
    const csslink = document.createElement('link');
    csslink.rel = 'stylesheet';
    csslink.type = 'text/css';
    csslink.href = '../dist/themes/cagov.css';
    csslink.media = 'all';
    document.getElementsByTagName('head')[0].appendChild(csslink);

    // import our element starting HTML from the component's template file
    const response = await fetch('test/test.fixture.html');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const startHTML = await response.text();
    // use this HTML as a test fixture
    const el = await fixture(startHTML);

    await expect(el).to.be.accessible();
  });
});
