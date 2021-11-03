import { expect, fixture } from '@open-wc/testing';
/* this test file can be run on command line with npm run test
   or with visual debug via npm run test:visual */

import '../dist/index.js';

describe('CAGOV Accordion', function unitTest() {
  this.timeout(9000);
  it('works', async () => {
    const response = await fetch('test/test.fixture.html');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const startHTML = await response.text();
    const el = await fixture(startHTML);

    expect(
      el.querySelector('.accordion-card-header').getAttribute('aria-expanded'),
    ).to.equal('false');

    expect(
      el.querySelector('.accordion-card-container a').getAttribute('tabindex'),
    ).to.equal('-1');

    el.querySelector('.accordion-card-header').click();

    expect(
      el.querySelector('.accordion-card-header').getAttribute('aria-expanded'),
    ).to.equal('true');

    expect(
      el.querySelector('.accordion-card-container a'),
    ).to.not.have.attribute('tabindex');

    await expect(el).to.be.accessible();
  });
});
