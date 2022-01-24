import { expect, fixture } from '@open-wc/testing';
/* this test file can be run on command line with npm run test
   or with visual debug via npm run test:visual */

import '../dist/index.js';

describe('Page Alert', function unitTest() {
  this.timeout(20000);
  it('works', async () => {

    const response = await fetch('../template.html');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const startHTML = await response.text();
    const el = await fixture(startHTML);

    // click if icon has aria-hidden attribute
    await expect(
      el.querySelector('.icon').getAttribute('aria-hidden'),
    ).to.equal('true');

    // click on dismiss button
    el.querySelector('.close-button').click();

    // verify now that page alert is dismissed
    await expect(el).to.have.style('display', 'none');
    await expect(
      el.querySelector('.cagov-page-alert').getAttribute('aria-hidden'),
    ).to.equal('true');

    await expect(el).to.be.accessible();
  });
});
