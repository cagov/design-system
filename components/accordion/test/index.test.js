import { expect, fixture } from '@open-wc/testing';
/* this test file can be run on command line with npm run test
   or with visual debug via npm run test:visual */

import '../dist/index.js';

describe('CAGOV Accordion', function unitTest() {
  this.timeout(9000);
  it('works', async () => {
    const response = await fetch('../template.html');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const startHTML = await response.text();
    const el = await fixture(`<div>${startHTML}</div>`); // use a prent div because referring to el.querySelector below

    expect(el.querySelector('details').hasAttribute('open')).to.equal(false);

    el.querySelector('summary').click();

    expect(el.querySelector('details').hasAttribute('open')).to.equal(true);

    await expect(el).to.be.accessible();
  });
});
