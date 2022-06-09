import { expect, fixture } from '@open-wc/testing';
/* this test file can be run on command line with npm run test
   or with visual debug via npm run test:visual */

import '../src/index.js';

describe('Site navigation', function unitTest() {
  this.timeout(5000);
  it('works', async () => {
    const csslink = document.createElement('link');
    csslink.rel = 'stylesheet';
    csslink.type = 'text/css';
    csslink.href = '../index.css';
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
    // vscode thinks this await is unnecessary but it is required when doing the accessible test

    // verify an expected initial class is present
    expect(el.querySelector('.search-container')).to.have.class(
      'hidden-search',
    );

    // verify attribute expected to change on click is in the initial off state
    expect(
      el
        .querySelector('.expanded-menu-col button')
        .getAttribute('aria-expanded'),
    ).to.equal('false');

    // click to expand menu
    el.querySelector('.expanded-menu-col').click();

    // verify attribute is changed as expected after click
    expect(
      el
        .querySelector('.expanded-menu-col button')
        .getAttribute('aria-expanded'),
    ).to.equal('true');
  });
});
