import { expect, fixture, html } from '@open-wc/testing';
/* this test file can be run on command line with npm run test
   or with visual debug via npm run test:visual */

import '../dist/index.js';

describe('CAGOV Page feedback', function unitTest() {
  this.timeout(5000);
  it('works', async () => {
    const el = await fixture(html`<cagov-feedback
      data-endpoint-url="my-endpoint-url"
    >
    </cagov-feedback>`);

    // verify textarea is not display block
    expect(el.querySelector('.feedback-form-add').style.display).to.equal('');

    // click on yes
    el.querySelector('.js-feedback-yes').click();

    // verify now textarea is now visible with display block
    expect(el.querySelector('.feedback-form-add').style.display).to.equal(
      'block',
    );

    await expect(el).to.be.accessible();
  });
});
