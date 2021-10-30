import { expect, fixture, html } from '@open-wc/testing';
/* this test file can be run on command line with npm run test
   or with visual debug via npm run test:visual */

import '../src/index.js';

describe('CAGOV Back-to-top', function unitTest() {
  this.timeout(9000);
  it('works', async () => {
    const el = await fixture(
      html`
        <body>
          <div style="height: 2000px; width:100px; background-color: blue;">
            <cagov-back-to-top data-hide-after="1000" data-label="Back to top">
            </cagov-back-to-top>
          </div>
        </body>
      `,
    );

    expect(el.querySelector('button')).to.have.class('back-to-top');

    expect(el.querySelector('button').getAttribute('aria-hidden')).to.equal(
      'true',
    );

    expect(el.querySelector('button').getAttribute('tabindex')).to.equal('-1');

    await expect(el).to.be.accessible();
  });
});
