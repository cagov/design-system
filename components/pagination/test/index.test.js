import { expect, fixture, html } from '@open-wc/testing';
/* this test file can be run on command line with npm run test
   or with visual debug via npm run test:visual */

import '../dist/index.js';

describe('CAGOV Pagination', function unitTest() {
  this.timeout(9000);
  it('works', async () => {
    const el = await fixture(html`<cagov-pagination data-current-page="5" data-total-pages="99"></cagov-pagination>`);
    
    // verify an expected initial attribute is present
    expect(
      el.querySelector('.cagov-pagination-current .cagov-pagination__button').getAttribute('aria-current'),
    ).to.equal('page');

    expect(
      el.querySelector('.cagov-pagination-current .cagov-pagination__button').getAttribute('data-page-num'),
    ).to.equal('5');

    el.querySelector('a[data-page-num="6"]').click();

    expect(
      el.querySelector('.cagov-pagination-current .cagov-pagination__button').getAttribute('data-page-num'),
    ).to.equal('6');

    el.querySelector('.cagov-pagination__previous-page').click();

    expect(
      el.querySelector('.cagov-pagination-current .cagov-pagination__button').getAttribute('data-page-num'),
    ).to.equal('5');

    await expect(el).to.be.accessible();
  });
});
