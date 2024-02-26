var styles =
  '/* Back to top button */\ncagov-back-to-top .back-to-top {\n  position: fixed;\n  z-index: 99999;\n  right: -100px;\n  font-size: var(--font-size-2, 1.125rem);\n  padding: 10px 10px 10px 10px;\n  bottom: 50px;\n  opacity: 0;\n  visibility: hidden;\n  color: var(--primary-700, #004abc);\n  border: 1px solid var(--primary-700, #004abc);\n  border-radius: 5px 0px 0px 5px;\n  text-decoration: none;\n  cursor: pointer;\n  transition: all 0.5s ease;\n  background-color: #fff;\n}\n@media (max-width: 767px) {\n  cagov-back-to-top .back-to-top {\n    font-size: var(--font-size-1, 1rem);\n    padding: 8px 8px 8px 8px;\n  }\n}\ncagov-back-to-top .back-to-top:hover {\n  color: var(--primary-900, #003484);\n  border: 1px solid var(--primary-900, #003484);\n  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);\n}\ncagov-back-to-top .back-to-top:hover svg path {\n  fill: var(--primary-900, #003484);\n}\ncagov-back-to-top .back-to-top:focus {\n  outline: 2px solid var(--accent2-500, #ac8227);\n}\ncagov-back-to-top .back-to-top svg {\n  width: 16px;\n  position: relative;\n  top: 3px;\n}\ncagov-back-to-top .back-to-top svg path {\n  fill: var(--primary-700, #004abc);\n}\ncagov-back-to-top .back-to-top.is-visible {\n  opacity: 1;\n  visibility: visible;\n  display: inline;\n  right: 0;\n}\n\n/*# sourceMappingURL=index.css.map */\n';

class CaGovBackToTop extends window.HTMLElement {
  static get observedAttributes() {
    return ['data-hide-after', 'data-label'];
  }

  constructor() {
    super();
    // Support additional options
    const defaultOptions = {
      parentSelector: 'cagov-back-to-top',
      onLoadSelector: 'body',
      scrollBottomThreshold: 10,
      scrollAfterHeight: 400, // Pixel height (after which, go-to-top behavior will start)
    };
    this.options = {
      ...defaultOptions,
      label: this.dataset.label || 'Back to top',
      hideAfter: Number(this.dataset.hideAfter) || 7000, // 7 second initial display. (milliseconds)
    };
    this.state = {
      lastScrollTop: 0,
      timer: null,
    };

    if (!document.querySelector('#cagov-back-to-top-styles')) {
      const style = document.createElement('style');
      style.id = 'cagov-back-to-top-styles';
      style.textContent = styles;
      document.querySelector('head').appendChild(style);
    }
  }

  connectedCallback() {
    // Load go-to-top button
    document.querySelector(this.options.onLoadSelector).onload =
      this.addGoToTopButton();

    // If a user scrolls down the page for more than the "scrollAfterHeight" (example: 400px),
    // activate back to top button. Otherwise, keep it invisible.
    window.addEventListener(
      'scroll',
      CaGovBackToTop.debounce(() => {
        // 1 second debounce delay
        this.scrollToTopHandler();
      }, 200),
      false,
    );

    // Reaching botton of the screen
    window.onscroll = CaGovBackToTop.debounce(() => {
      this.checkScrolledToBottom();
    }, 200);
  }

  checkScrolledToBottom() {
    const { timer } = this.state;
    const returnTopButton = document.querySelector('.back-to-top');
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      returnTopButton.classList.add('is-visible');
      returnTopButton.removeAttribute('aria-hidden');
      returnTopButton.removeAttribute('tabindex');
      clearTimeout(timer);
    }
  }

  // Returns a function, that, as long as it continues to be invoked, will not
  // be triggered. The function will be called after it stops being called for
  // N milliseconds. If `immediate` is passed, trigger the function on the
  // leading edge, instead of the trailing.
  static debounce(func, wait, immediate) {
    let timeout;
    return (...args) => {
      const context = this;
      const later = () => {
        timeout = null;
        if (!immediate) func.apply(context, ...args);
      };
      const callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, ...args);
    };
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'data-hide-after') {
      this.options.hideAfter = Number(newValue);
    }
    if (name === 'data-label') {
      this.options.label = newValue;
      if (document.querySelector('.back-to-top') !== null) {
        document.querySelector('.back-to-top').innerHTML = this.options.label;
      }
    }
  }

  scrollToTopHandler() {
    const container = document.querySelector(this.options.parentSelector);
    const { lastScrollTop } = this.state;
    let { timer } = this.state;
    const returnTopButton = document.querySelector('.back-to-top');
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
      // Downscroll code
      returnTopButton.classList.remove('is-visible');
      returnTopButton.setAttribute('aria-hidden', 'true');
      returnTopButton.setAttribute('tabindex', '-1');
    } else if (
      container.scrollTop >= this.options.scrollAfterHeight ||
      document.documentElement.scrollTop >= this.options.scrollAfterHeight
    ) {
      // Upscroll code
      if (timer !== null) {
        clearTimeout(timer);
      }
      returnTopButton.classList.add('is-visible');
      returnTopButton.removeAttribute('aria-hidden');
      returnTopButton.removeAttribute('tabindex');

      timer = setTimeout(() => {
        returnTopButton.classList.remove('is-visible');
        returnTopButton.setAttribute('aria-hidden', 'true');
        returnTopButton.setAttribute('tabindex', '-1');
      }, this.options.hideAfter); // Back to top removes itself after 2 sec of inactivity
    } else {
      // Bottom of the page
      returnTopButton.classList.remove('is-visible');
      returnTopButton.setAttribute('aria-hidden', 'true');
      returnTopButton.setAttribute('tabindex', '-1');
    }

    this.state.lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
  }

  // Insert swg icon
  static addStyle(element) {
    const svg = document.createElement('span');
    svg.setAttribute('aria-hidden', 'true');
    svg.innerHTML = `
      <svg version="1.1" x="0px" y="0px" width="21px" height="16px" viewBox="0 0 21 16" style="enable-background:new 0 0 21 16;" xml:space="preserve"><path d="M5.2,10.8l5.3-5.3l5.3,5.3c0.4,0.4,0.9,0.4,1.3,0c0.4-0.4,0.4-0.9,0-1.3l-5.9-5.9c-0.2-0.2-0.4-0.3-0.6-0.3S10,3.5,9.8,3.6 L3.9,9.5c-0.4,0.4-0.4,0.9,0,1.3C4.3,11.2,4.8,11.2,5.2,10.8z"/></svg> 
      `;
    element.insertBefore(svg, element.firstChild);
  }

  // Create go-to-top button
  addGoToTopButton() {
    // Create a new go-to-top span element with class "back-to-top"
    const container = document.querySelector(this.options.parentSelector);

    const returnTop = document.createElement('button');
    returnTop.classList.add('back-to-top');
    // returnTop.classList.add(options.classes);
    // Does not need to be accessible.
    // Screen Reader users have other options to get to the top.
    returnTop.setAttribute('aria-hidden', 'true');
    returnTop.setAttribute('tabindex', '-1');
    // Add some text to the go-to-top button
    const returnContent = document.createTextNode(this.options.label);

    // Append text to the go-to-top span
    returnTop.appendChild(returnContent);
    CaGovBackToTop.addStyle(returnTop);
    // Add the newly created element and its content into main tag
    container.append(returnTop);

    // Add on-click event
    returnTop.addEventListener('click', () => this.goToTopFunction());
  }

  goToTopFunction() {
    document.querySelector(this.options.onLoadSelector).scrollTop = 0; // For Safari
    // document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    window.scroll({ top: 0, behavior: 'smooth' });
  }
}

window.customElements.define('cagov-back-to-top', CaGovBackToTop);

export { CaGovBackToTop };
