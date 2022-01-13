import { expect, fixture } from '@open-wc/testing';
/* this test file can be run on command line with npm run test
   or with visual debug via npm run test:visual */

import '../dist/index.js';

describe('CAGOV Back-to-top', function unitTest() {
  this.timeout(9000);
  it('works', async () => {
    const response = await fetch('../template.html');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const startHTML = await response.text();
    const el = await fixture(`
    <body>
      <div style="height: 2000px; width:100px; background-color: blue;">
        ${startHTML}
      </div>
    </body>
  `);

    expect(el.querySelector('button')).to.have.class('back-to-top');

    expect(el.querySelector('button').getAttribute('aria-hidden')).to.equal(
      'true',
    );

    expect(el.querySelector('button').getAttribute('tabindex')).to.equal('-1');

    await expect(el).to.be.accessible();
  });
});
