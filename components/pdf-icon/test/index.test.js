import { expect, fixture, html } from '@open-wc/testing';
/* this test file can be run on command line with npm run test
   or with visual debug via npm run test:visual */

import { placePdfIcons } from  '../src/index.js';

describe('CAGOV PDF icon', function () {
  this.timeout(5000);
  it('works', async () => {
    const el = await fixture(html`<a href="mypdf.pdf">link to a pdf</a>`);
        
    placePdfIcons();

    // verify an expected initial attribute is present
    expect(
      el.querySelector('.pdf-link-icon').getAttribute('aria-hidden'),
    ).to.equal('true');

    await expect(el).to.be.accessible();
  });
});
