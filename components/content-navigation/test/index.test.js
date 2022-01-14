import { expect, fixture } from '@open-wc/testing';
/* this test file can be run on command line with npm run test
   or with visual debug via npm run test:visual */

import '../dist/index.js';

describe('CAGOV Content navigation', function unitTest() {
  this.timeout(5000);
  it('works', async () => {
    const response = await fetch('../template.html');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const startHTML = await response.text();
    console.log(startHTML)

    const el = await fixture(`<div>
    ${startHTML}

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
      </div>
      </div>`);

    // verify an expected initial attribute is present
    expect(el.querySelectorAll('li').length).to.be.greaterThan(3);

    await expect(el).to.be.accessible();
  });
});
