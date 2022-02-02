import { expect, fixture } from '@open-wc/testing';
/* this test file can be run on command line with npm run test
   or with visual debug via npm run test:visual */

describe('CAGOV Site header', function unitTest() {
  this.timeout(9000);
  it('works', async () => {
    const csslink = document.createElement('link');
    csslink.rel = 'stylesheet';
    csslink.type = 'text/css';
    csslink.href = '../index.css';
    csslink.media = 'all';
    document.getElementsByTagName('head')[0].appendChild(csslink);

    const response = await fetch('../template.html');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const startHTML = await response.text();
    const el = await fixture(`${startHTML}`);

    await expect(el).to.be.accessible();
  });
});
