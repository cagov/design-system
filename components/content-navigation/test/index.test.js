import { expect, fixture, html } from '@open-wc/testing';
/* this test file can be run on command line with npm run test
   or with visual debug via npm run test:visual */

import '../src/index.js';

describe('CAGOV Content navigation', function unitTest() {
  this.timeout(5000);
  it('works', async () => {
    const el = await fixture(html`  <cagov-content-navigation data-selector=".main" data-label="On this page"></cagov-content-navigation>

    <div class="main">
      <h2>Hello world</h2>
      <h2>Hello world 1</h2>
      <h2>Hello world 2</h2>
      <h2>Hello world 3</h2>
      <h2>Hello world 4</h2>
      <h2>Hello world 5</h2>
      <h2>Hello world 6</h2>
      <h2>Hello world 7</h2>
      <h2>Hello world 8</h2>
      <h2>Hello world 9</h2>
    </div>`);

    // verify an expected initial attribute is present
    expect(
      el.querySelectorAll('li').length,
    ).to.be.greaterThan(3);

    await expect(el).to.be.accessible();
  });
});
