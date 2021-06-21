import { fixture, expect } from '@open-wc/testing';

import '../index.js';

function elementExists (selector) {
  return new Promise(resolve => {
    function checkForElement (selector, callback) {
      if (document.querySelector(selector)) {
        callback();
      } else {
        setTimeout(() => {
          checkForElement(selector, callback);
        }, 1000);
      }
    }

    checkForElement(selector, function () {
      resolve(true);
    });
  });
}

describe('renders', function () {
  it('an element', async () => {
    const el = await fixture(`<cwds-pagerating
  >
  </cwds-pagerating>`);
    await elementExists('button');
    expect(el.querySelectorAll('button').length).to.be.above(0);
  });
});
