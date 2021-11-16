import { expect, fixture, html } from '@open-wc/testing';
/* this test file can be run on command line with npm run test
   or with visual debug via npm run test:visual */

import '../src/index.js';

describe('Page Alert', function unitTest() {
  this.timeout(20000);
  it('works', async () => {
    const el = await fixture(html`<div class="main">
    <cagov-page-alert data-icon="ca-gov-icon-bell" data-message="Notice: DCC is soliciting proposals for the Local Jurisdiction Assistance Grant Program. <a href=&quot;/about-us/grant-funding/local-jurisdiction-assistance-grant-program/&quot;>Learn more</a>."></cagov-page-alert>
  </div>`);

    // click if icon has aria-hidden attribute
    await expect(
      el.querySelector('.icon').getAttribute('aria-hidden'),
    ).to.equal('true');


    // click on dismiss button
    el.querySelector('.close-button').click();

    // verify now that page alert is dismissed
    await expect(el.querySelector('cagov-page-alert')).to.have.style("display", "none");

    await expect(el).to.be.accessible();
  });
});




function delay(time) {
  return new Promise(function (resolve) {
    setTimeout(resolve, time)
  });
}