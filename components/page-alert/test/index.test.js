import { expect, fixture, html } from '@open-wc/testing';
/* this test file can be run on command line with npm run test
   or with visual debug via npm run test:visual */

import '../src/index.js';

describe('Page Alert', function unitTest() {
  this.timeout(5000);
  it('works', async () => {
    const el = await fixture(html`<cagov-page-alert data-icon="ca-gov-icon-bell"
       >
       </cagov-page-alert>`);


    // click on dismiss button
    el.querySelector('.close-button').click();

    // verify now that page alert is dismissed
    expect(el.querySelector('.cagov-page-alert').style.display).to.equal(
      'none',
    );

    await expect(el).to.be.accessible();
  });
});