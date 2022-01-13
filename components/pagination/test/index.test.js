import { expect, fixture } from '@open-wc/testing';
/* this test file can be run on command line with npm run test
   or with visual debug via npm run test:visual */

import '../dist/index.js';

describe('CAGOV Pagination', function unitTest() {
  this.timeout(9000);
  it('works', async () => {
    const response = await fetch('../template.html');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const startHTML = await response.text();
    const el = await fixture(`<div>${startHTML}</div>`); // use a prent div because referring to el.querySelector below

    // verify an expected initial attribute is present
    expect(
      el
        .querySelector('.cagov-pagination-current .cagov-pagination__button')
        .getAttribute('aria-current'),
    ).to.equal('page');

    expect(
      el
        .querySelector('.cagov-pagination-current .cagov-pagination__button')
        .getAttribute('data-page-num'),
    ).to.equal('5');

    el.querySelector('a[data-page-num="6"]').click();

    expect(
      el
        .querySelector('.cagov-pagination-current .cagov-pagination__button')
        .getAttribute('data-page-num'),
    ).to.equal('6');

    el.querySelector('.cagov-pagination__previous-page').click();

    expect(
      el
        .querySelector('.cagov-pagination-current .cagov-pagination__button')
        .getAttribute('data-page-num'),
    ).to.equal('5');

    await expect(el).to.be.accessible();
  });
});
