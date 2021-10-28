import { expect, fixture, html } from '@open-wc/testing';
/* this test file can be run on command line with npm run test
   or with visual debug via npm run test:visual */

import '../index.js';

describe('CAGOV Plus svg', function () {
  this.timeout(5000);
  it('works', async () => {
    const el = await fixture(html`<cagov-plus />`);

    // verify an expected initial attribute is present
    expect(
      el.querySelector('.accordion-icon').getAttribute('aria-hidden'),
    ).to.equal('true');

    await expect(el).to.be.accessible();
  });
});
