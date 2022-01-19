import { expect, fixture } from '@open-wc/testing';
/* this test file can be run on command line with npm run test
   or with visual debug via npm run test:visual */

describe('CAGOVRegulatoryOutline', () => {
  it('works', async () => {
    const csslink = document.createElement('link');
    csslink.rel = 'stylesheet';
    csslink.type = 'text/css';
    csslink.href = '../dist/index.css';
    csslink.media = 'all';
    document.getElementsByTagName('head')[0].appendChild(csslink);

    // import our element starting HTML from the component's template file
    const response = await fetch('../template.html');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const startHTML = await response.text();
    // use this HTML as a test fixture
    const el = await fixture(startHTML);

    // automated axe accessibility test
    // this test can be made to intentionally fail by adding inaccessible code to the template.html
    // reproduce these results manually by:
    //   installing the axe chrome extension
    //     (https://chrome.google.com/webstore/detail/axe-devtools-web-accessib/lhdoppojpmngadmnindnejefpokejbdd/related?hl=en-US)
    //   running npm run start in the repo root to start local web server
    //   and loading this component's preview.html file
    await expect(el).to.be.accessible();
  });
});
