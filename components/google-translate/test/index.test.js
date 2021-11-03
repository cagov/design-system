import { expect, fixture, html } from '@open-wc/testing';
/* this test file can be run on command line with npm run test
   or with visual debug via npm run test:visual */

import '../index.js';

describe('CAGOV Google Translate', function unitTest() {
  this.timeout(5000);
  it('works', async () => {
    const el = await fixture(html`<cagov-google-translate />`);

    // verify an expected initial element is present
    expect(el.querySelectorAll('#google_translate_element').length).to.equal(1);

    await expect(el).to.be.accessible();
  });
});
