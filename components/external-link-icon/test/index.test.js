import { expect, fixture, html } from '@open-wc/testing';
/* this test file can be run on command line with npm run test
   or with visual debug via npm run test:visual */

import { linkAnnotator } from '../src/index.js';

describe('CAGOV External Link Icon', function unitTest() {
  this.timeout(5000);
  it('applies icons to external links', async () => {
    const el = await fixture(html`
      <main>
        <a href="https://google.com/something.html">External link</a>
      </main>
    `);

    linkAnnotator();

    expect(
      el.querySelector('.external-link-icon').getAttribute('aria-hidden'),
    ).to.equal('true');

    await expect(el).to.be.accessible();
  });

  this.timeout(5000);
  it('does not apply icon to internal links', async () => {
    const el = await fixture(html`
      <main>
        <a href="https://localhost:8000/something.html">External link</a>
      </main>
    `);

    linkAnnotator();

    expect(el).to.not.contain('.external-link-icon');

    await expect(el).to.be.accessible();
  });
});
