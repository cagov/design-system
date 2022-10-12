var styles$5 =
  '/* initial styles */\ncagov-accordion details {\n  border-radius: var(--radius-2, 5px) !important;\n  margin-bottom: 0;\n  min-height: var(--s-5, 3rem);\n  margin-top: 0.5rem;\n  border: solid var(--border-1, 1px) var(--gray-200, #d4d4d7) !important;\n}\ncagov-accordion details summary {\n  cursor: pointer;\n  padding: var(--s-1, 0.5rem) var(--s-5, 3rem) var(--s-1, 0.5rem) var(--s-2, 1rem);\n  background-color: var(--gray-50, #fafafa);\n  position: relative;\n  line-height: var(--s-4, 2rem);\n  margin: 0;\n  color: var(--primary-700, #165ac2);\n  font-size: var(--font-size-2, 1.125rem);\n  font-weight: bold;\n}\ncagov-accordion details summary:hover {\n  background-color: var(--gray-100, #fafafa);\n  color: var(--primary-900, #003688);\n}\ncagov-accordion details .accordion-body {\n  padding: var(--s-2, 1rem);\n}\n\n/* styles applied after custom element javascript runs */\ncagov-accordion:defined {\n  /* let it be open initially if details has open attribute */\n}\ncagov-accordion:defined details {\n  transition: height var(--animation-duration-2, 0.2s);\n  height: var(--s-5, 3rem);\n  overflow: hidden;\n}\ncagov-accordion:defined details[open] {\n  height: auto;\n}\ncagov-accordion:defined summary::-webkit-details-marker {\n  display: none;\n}\ncagov-accordion:defined details summary {\n  list-style: none; /* hide default expansion triangle after js executes */\n  border-radius: var(--border-5, 5px) var(--border-5, 5px) 0 0;\n}\ncagov-accordion:defined details summary:focus {\n  outline-offset: -2px;\n  outline: solid 2px var(--accent2-500, #ac8227) !important;\n  background-color: var(--gray-100, #fafafa);\n}\ncagov-accordion:defined details .cagov-open-indicator {\n  background-color: var(--primary-700, #165ac2);\n  height: 3px;\n  width: 15px;\n  border-radius: var(--border-3, 3px);\n  position: absolute;\n  right: var(--s-2, 1rem);\n  top: 1.4rem;\n}\ncagov-accordion:defined details .cagov-open-indicator:before {\n  display: block;\n  content: "";\n  position: absolute;\n  top: -6px;\n  left: 3px;\n  width: 3px;\n  height: 15px;\n  border-radius: var(--border-3, 3px);\n  border: none;\n  box-shadow: 3px 0 0 0 var(--primary-700, #165ac2);\n  background: none;\n}\ncagov-accordion:defined details[open] .cagov-open-indicator:before {\n  display: none;\n}\n\n/*# sourceMappingURL=index.css.map */\n';

/**
 * Accordion web component that collapses and expands content inside itself on click.
 *
 * @element cagov-accordion
 *
 *
 * @fires click - Default events which may be listened to in order to discover most popular accordions
 *
 * @attr {string} open - set on the internal details element
 * If this is true the accordion will be open before any user interaction.
 *
 * @cssprop --primary-700 - Default value of #165ac2, used for all colors of borders and fills
 * @cssprop --primary-900 - Default value of #003588, used for background on hover
 *
 */
class CaGovAccordion extends window.HTMLElement {
  constructor() {
    super();

    if (!document.querySelector('#cagov-accordion-styles')) {
      const style = document.createElement('style');
      style.id = 'cagov-accordion-styles';
      style.textContent = styles$5;
      document.querySelector('head').appendChild(style);
    }
  }

  connectedCallback() {
    this.summaryEl = this.querySelector('summary');
    // trigger the opening and closing height change animation on summary click
    this.setHeight();
    this.summaryEl.addEventListener('click', this.listen.bind(this));
    this.summaryEl.insertAdjacentHTML(
      'beforeend',
      `<div class="cagov-open-indicator" aria-hidden="true" />`,
    );
    this.detailsEl = this.querySelector('details');
    this.bodyEl = this.querySelector('.accordion-body');

    window.addEventListener(
      'resize',
      this.debounce(() => this.setHeight()).bind(this),
    );
  }

  setHeight() {
    requestAnimationFrame(() => {
      // delay so the desired height is readable in all browsers
      this.closedHeightInt = parseInt(this.summaryEl.scrollHeight + 2, 10);
      this.closedHeight = `${this.closedHeightInt}px`;

      // apply initial height
      if (this.detailsEl.hasAttribute('open')) {
        // if open get scrollHeight
        this.detailsEl.style.height = `${parseInt(
          this.bodyEl.scrollHeight + this.closedHeightInt,
          10,
        )}px`;
      } else {
        // else apply closed height
        this.detailsEl.style.height = this.closedHeight;
      }
    });
  }

  listen() {
    if (this.detailsEl.hasAttribute('open')) {
      // was open, now closing
      this.detailsEl.style.height = this.closedHeight;
    } else {
      // was closed, opening
      requestAnimationFrame(() => {
        // delay so the desired height is readable in all browsers
        this.detailsEl.style.height = `${parseInt(
          this.bodyEl.scrollHeight + this.closedHeightInt,
          10,
        )}px`;
      });
    }
  }

  debounce(func, timeout = 300) {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(this, args);
      }, timeout);
    };
  }
}

window.customElements.define('cagov-accordion', CaGovAccordion);

var styles$4 =
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
      style.textContent = styles$4;
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

var styles$3 =
  '/* PAGE NAVIGATION */\nsidebar cagov-page-navigation .label {\n  font-weight: 700;\n  font-size: 24px;\n  line-height: 28.2px;\n  padding: 0;\n  margin: 0;\n  padding-bottom: 16px;\n}\n\nsidebar cagov-page-navigation ul,\nsidebar cagov-page-navigation ol:not([class*=menu]):not([class*=nav]):not([class*=footer-links]),\nsidebar cagov-page-navigation ul:not([class*=menu]):not([class*=nav]):not([class*=footer-links]) {\n  margin: 0;\n  text-indent: 0;\n  padding: 0;\n}\n\nsidebar cagov-page-navigation ul li {\n  padding-top: 14px;\n  padding-bottom: 18px;\n  margin-left: 0;\n  margin-top: 0px;\n  margin-bottom: 0px;\n  border-bottom: 1px solid var(--gray-300, #e1e0e3);\n  line-height: 28.2px;\n  list-style: none;\n}\nsidebar cagov-page-navigation ul li:first-child {\n  border-top: 1px solid var(--gray-300, #e1e0e3);\n}\nsidebar cagov-page-navigation ul li a {\n  text-decoration: none;\n}\nsidebar cagov-page-navigation ul li a:hover {\n  text-decoration: underline;\n}\n\n@media only screen and (max-width: 992px) {\n  cagov-page-navigation .label {\n    display: none;\n  }\n  .sidebar-container {\n    display: block;\n    width: 100%;\n    max-width: 100%;\n  }\n  cagov-page-navigation ul li a {\n    font-size: 16px;\n    line-height: 24px;\n  }\n}\n\n/*# sourceMappingURL=index.css.map */\n';

/**
 * Page Navigation web component
 *
 * @element cagov-page-navigation
 *
 * @attr {string} [data-selector] - "main";
 * @attr {string} [data-type] - "wordpress";
 * @attr {string} [data-label] - "On this page";
 */

class CAGovPageNavigation extends window.HTMLElement {
  constructor() {
    super();

    if (!document.querySelector('#cagov-page-navigation-styles')) {
      const style = document.createElement('style');
      style.id = 'cagov-page-navigation-styles';
      style.textContent = styles$3;
      document.querySelector('head').appendChild(style);
    }
  }

  connectedCallback() {
    this.type = 'wordpress';

    /* eslint-disable */
    /* https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js */
    /* Smooth scroll polyfill for safari, since it does not support scroll behaviors yet - can be moved to a dependency bundle split out by browser support later or in headless implementation */
    !(function () {
      function o() {
        const o = window;
        const t = document;
        if (
          !(
            'scrollBehavior' in t.documentElement.style &&
            !0 !== o.__forceSmoothScrollPolyfill__
          )
        ) {
          let l;
          const e = o.HTMLElement || o.Element;
          var r = 468;
          var i = {
            scroll: o.scroll || o.scrollTo,
            scrollBy: o.scrollBy,
            elementScroll: e.prototype.scroll || n,
            scrollIntoView: e.prototype.scrollIntoView,
          };
          var s =
            o.performance && o.performance.now
              ? o.performance.now.bind(o.performance)
              : Date.now;
          var c =
            ((l = o.navigator.userAgent),
            new RegExp(['MSIE ', 'Trident/', 'Edge/'].join('|')).test(l)
              ? 1
              : 0);
          (o.scroll = o.scrollTo =
            function () {
              void 0 !== arguments[0] &&
                (!0 !== f(arguments[0])
                  ? h.call(
                      o,
                      t.body,
                      void 0 !== arguments[0].left
                        ? ~~arguments[0].left
                        : o.scrollX || o.pageXOffset,
                      void 0 !== arguments[0].top
                        ? ~~arguments[0].top
                        : o.scrollY || o.pageYOffset,
                    )
                  : i.scroll.call(
                      o,
                      void 0 !== arguments[0].left
                        ? arguments[0].left
                        : typeof arguments[0] !== 'object'
                        ? arguments[0]
                        : o.scrollX || o.pageXOffset,
                      void 0 !== arguments[0].top
                        ? arguments[0].top
                        : void 0 !== arguments[1]
                        ? arguments[1]
                        : o.scrollY || o.pageYOffset,
                    ));
            }),
            (o.scrollBy = function () {
              void 0 !== arguments[0] &&
                (f(arguments[0])
                  ? i.scrollBy.call(
                      o,
                      void 0 !== arguments[0].left
                        ? arguments[0].left
                        : typeof arguments[0] !== 'object'
                        ? arguments[0]
                        : 0,
                      void 0 !== arguments[0].top
                        ? arguments[0].top
                        : void 0 !== arguments[1]
                        ? arguments[1]
                        : 0,
                    )
                  : h.call(
                      o,
                      t.body,
                      ~~arguments[0].left + (o.scrollX || o.pageXOffset),
                      ~~arguments[0].top + (o.scrollY || o.pageYOffset),
                    ));
            }),
            (e.prototype.scroll = e.prototype.scrollTo =
              function () {
                if (void 0 !== arguments[0])
                  if (!0 !== f(arguments[0])) {
                    const o = arguments[0].left;
                    const t = arguments[0].top;
                    h.call(
                      this,
                      this,
                      void 0 === o ? this.scrollLeft : ~~o,
                      void 0 === t ? this.scrollTop : ~~t,
                    );
                  } else {
                    if (
                      typeof arguments[0] === 'number' &&
                      void 0 === arguments[1]
                    )
                      throw new SyntaxError('Value could not be converted');
                    i.elementScroll.call(
                      this,
                      void 0 !== arguments[0].left
                        ? ~~arguments[0].left
                        : typeof arguments[0] !== 'object'
                        ? ~~arguments[0]
                        : this.scrollLeft,
                      void 0 !== arguments[0].top
                        ? ~~arguments[0].top
                        : void 0 !== arguments[1]
                        ? ~~arguments[1]
                        : this.scrollTop,
                    );
                  }
              }),
            (e.prototype.scrollBy = function () {
              void 0 !== arguments[0] &&
                (!0 !== f(arguments[0])
                  ? this.scroll({
                      left: ~~arguments[0].left + this.scrollLeft,
                      top: ~~arguments[0].top + this.scrollTop,
                      behavior: arguments[0].behavior,
                    })
                  : i.elementScroll.call(
                      this,
                      void 0 !== arguments[0].left
                        ? ~~arguments[0].left + this.scrollLeft
                        : ~~arguments[0] + this.scrollLeft,
                      void 0 !== arguments[0].top
                        ? ~~arguments[0].top + this.scrollTop
                        : ~~arguments[1] + this.scrollTop,
                    ));
            }),
            (e.prototype.scrollIntoView = function () {
              if (!0 !== f(arguments[0])) {
                const l = (function (o) {
                  for (
                    ;
                    o !== t.body &&
                    !1 ===
                      ((e = p((l = o), 'Y') && a(l, 'Y')),
                      (r = p(l, 'X') && a(l, 'X')),
                      e || r);

                  )
                    o = o.parentNode || o.host;
                  let l;
                  let e;
                  let r;
                  return o;
                })(this);
                const e = l.getBoundingClientRect();
                const r = this.getBoundingClientRect();
                l !== t.body
                  ? (h.call(
                      this,
                      l,
                      l.scrollLeft + r.left - e.left,
                      l.scrollTop + r.top - e.top,
                    ),
                    o.getComputedStyle(l).position !== 'fixed' &&
                      o.scrollBy({
                        left: e.left,
                        top: e.top,
                        behavior: 'smooth',
                      }))
                  : o.scrollBy({
                      left: r.left,
                      top: r.top,
                      behavior: 'smooth',
                    });
              } else
                i.scrollIntoView.call(
                  this,
                  void 0 === arguments[0] || arguments[0],
                );
            });
        }
        function n(o, t) {
          (this.scrollLeft = o), (this.scrollTop = t);
        }
        function f(o) {
          if (
            o === null ||
            typeof o !== 'object' ||
            void 0 === o.behavior ||
            o.behavior === 'auto' ||
            o.behavior === 'instant'
          )
            return !0;
          if (typeof o === 'object' && o.behavior === 'smooth') return !1;
          throw new TypeError(
            `behavior member of ScrollOptions ${o.behavior} is not a valid value for enumeration ScrollBehavior.`,
          );
        }
        function p(o, t) {
          return t === 'Y'
            ? o.clientHeight + c < o.scrollHeight
            : t === 'X'
            ? o.clientWidth + c < o.scrollWidth
            : void 0;
        }
        function a(t, l) {
          const e = o.getComputedStyle(t, null)[`overflow${l}`];
          return e === 'auto' || e === 'scroll';
        }
        function d(t) {
          let l;
          let e;
          let i;
          let c;
          let n = (s() - t.startTime) / r;
          (c = n = n > 1 ? 1 : n),
            (l = 0.5 * (1 - Math.cos(Math.PI * c))),
            (e = t.startX + (t.x - t.startX) * l),
            (i = t.startY + (t.y - t.startY) * l),
            t.method.call(t.scrollable, e, i),
            (e === t.x && i === t.y) || o.requestAnimationFrame(d.bind(o, t));
        }
        function h(l, e, r) {
          let c;
          let f;
          let p;
          let a;
          const h = s();
          l === t.body
            ? ((c = o),
              (f = o.scrollX || o.pageXOffset),
              (p = o.scrollY || o.pageYOffset),
              (a = i.scroll))
            : ((c = l), (f = l.scrollLeft), (p = l.scrollTop), (a = n)),
            d({
              scrollable: c,
              method: a,
              startTime: h,
              startX: f,
              startY: p,
              x: e,
              y: r,
            });
        }
      }
      typeof exports === 'object' && typeof module !== 'undefined'
        ? (module.exports = { polyfill: o })
        : o();
    })();
    /* eslint-enable */

    if (this.type === 'wordpress') {
      document.addEventListener('DOMContentLoaded', () =>
        this.buildContentNavigation(),
      );
    }
    if (
      document.readyState === 'complete' ||
      document.readyState === 'loaded'
    ) {
      this.buildContentNavigation();
    }
  }

  buildContentNavigation() {
    // Parse header tags
    const markup = this.getHeaderTags();
    let label = null;
    if (markup !== null) {
      label = this.dataset.label || 'On this page';
    }
    let content = null;
    if (markup !== null) {
      content = `<nav aria-labelledby="page-navigation-label"> <div id="page-navigation-label" class="label">${label}</div> ${markup}</nav>`;
    }

    this.template({ content }, 'wordpress');
  }

  template(data, type) {
    if (data !== undefined && data !== null && data.content !== null) {
      if (type === 'wordpress') {
        this.innerHTML = `${data.content}`;
      }
    }

    document.querySelectorAll('a[data-page-navigation]').forEach((anchor) => {
      anchor.addEventListener('click', (e) => {
        const hashval = decodeURI(anchor.getAttribute('href'));
        try {
          const target = document.querySelector(hashval);
          if (target !== null) {
            const position = target.getBoundingClientRect();

            window.scrollTo({
              // Handle accessible smoothing behavior in CSS
              left: position.left,
              top: position.top - 200,
            });

            target.focus();

            window.history.pushState(null, null, hashval);
          }
        } catch (error) {
          console.error(error);
        }
        e.preventDefault();
      });
    });

    return null;
  }

  renderNoContent() {
    this.innerHTML = '';
  }

  getHeaderTags() {
    const { selector } = this.dataset;
    // const { callback } = this.dataset; // Editor only right now

    const h = ['h2'];
    for (let i = 0; i < h.length; i += 1) {
      // Pull out the header tags, in order & render as links with anchor tags
      // auto convert h tags with tag names
      if (selector !== undefined && selector !== null) {
        {
          const selectorContent = document.querySelector(selector);
          if (selectorContent !== null) {
            const outline = CAGovPageNavigation.outliner(selectorContent);
            return outline;
          }
        }
      }
    }
    return null;
  }

  static outliner(content) {
    const headers = content.querySelectorAll('h2');
    let output = '';
    if (headers !== undefined && headers !== null && headers.length > 0) {
      headers.forEach((tag) => {
        const tagId = tag.getAttribute('id');
        const tagName = tag.getAttribute('name');

        const title = tag.innerHTML;

        let anchorLabel = null;

        // If id not set already, create an id to jump to.
        if (tagId) {
          anchorLabel = tagId;
        } else if (tagName) {
          anchorLabel = tagName;
        } else {
          anchorLabel = tag.innerHTML;
        }

        // Convert anchor label content to remove breaking characters.
        const anchor = anchorLabel
          .toLowerCase()
          .trim()
          .replace(/ /g, '-')
          // Strip out unallowed CSS characters (Selector API is used with the anchor links)
          // !, ", #, $, %, &, ', (, ), *, +, ,, -, ., /, :, ;,
          // <, =, >, ?, @, [, \, ], ^, `, {, |, }, and ~.
          .replace(
            /\(|\)|!|"|#|\$|%|&|'|\*|\+|,|\.|\/|:|;|<|=|>|\?|@|\[|\]|\\|\^|`|\{|\||\|\}|~/g,
            '',
          )
          // All other characters are encoded and decoded using encodeURI/decodeURI
          // which escapes UTF-8 characters.
          // If we want to do this with allowed characters only
          // .replace(/a-zA-ZÃ€-Ã–Ã™-Ã¶Ã¹-Ã¿Ä€-Å¾á¸€-á»¿0-9/g,"")
          // Alt: [a-zA-Z\u00C0-\u017F]+,\s[a-zA-Z\u00C0-\u017F]+
          .replace(/a-zA-ZÃ€-Ã–Ã™-Ã¶Ã¹-Ã¿Ä€-Å¾á¸€-á»¿0-9\u00A0-\u017F/g, '');

        output += `<li><a data-page-navigation href="#${encodeURI(
          anchor,
        )}">${title}</a></li>`;

        tag.setAttribute('id', anchor);
        tag.setAttribute('name', anchor);
      });
      return `<ul>${output}</ul>`;
    }
    return null;
  }
}

window.customElements.define('cagov-page-navigation', CAGovPageNavigation);

function ratingsTemplate(
  question,
  yes,
  no,
  commentPrompt,
  thanksFeedback,
  thanksComments,
  submit,
) {
  return `
  <section aria-label="feedback">
  <div class="feedback-form cagov-stack">
    <div class="js-feedback-form feedback-form-question">
      <h2 class="feedback-form-label" id="feedback-rating">${question}</h2>
      <button class="btn-light m-r-2 js-feedback-yes feedback-yes" id="feedback-yes">${yes}</button>
      <button class="btn-light js-feedback-no" id="feedback-no">${no}</button>
    </div>
          
    <div class="feedback-form-thanks js-feedback-thanks" role="alert">${thanksFeedback}</div>
          
    <div class="feedback-form-add">
      <label class="feedback-form-label js-feedback-field-label" for="add-feedback">${commentPrompt}</label>
      <div class="feedback-form-add-grid">
        <textarea name="add-feedback" class="js-add-feedback feedback-form-textarea" id="add-feedback" rows="1"></textarea>
        <button class="btn-light js-feedback-submit" type="submit" id="feedback-submit">${submit}</button>
      </div>
    </div>

    <div class="feedback-form-thanks feedback-thanks-add" role="alert">${thanksComments}</div>
  </div>
  </section>`;
}

var styles$2 =
  'cagov-page-feedback {\n  width: 100%;\n}\ncagov-page-feedback .feedback-form {\n  background: var(--primary-900, #003588);\n  padding: var(--s-2, 1rem);\n  border-radius: var(--radius-2, 4px);\n  max-width: var(--w-lg, 1176px);\n  margin: 0 auto;\n}\ncagov-page-feedback .feedback-form-question {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n}\ncagov-page-feedback .feedback-form-label {\n  color: #fff;\n  background-color: var(--primary-900, #003588);\n  font-size: var(--font-size-2, 1.125rem);\n  display: block;\n  margin-right: var(--s-2, 1rem);\n  transition: 0.3s color cubic-bezier(0.57, 0.2, 0.21, 0.89);\n  line-height: 3rem;\n  width: auto;\n}\n@media (max-width: 768px) {\n  cagov-page-feedback .feedback-form-label {\n    line-height: unset;\n    margin-bottom: var(--s-2, 1rem);\n  }\n}\ncagov-page-feedback .feedback-form .btn-light {\n  padding: 0.5rem 1rem;\n  border-radius: 0.5rem;\n  display: inline-block;\n  font-size: var(--font-size-2, 1.125rem);\n  font-weight: var(--font-weight-6, 600);\n  padding: var(--s-1, 0.5rem) var(--s-2, 1rem);\n  line-height: var(--font-lineheight-3, 1.5);\n  border-radius: var(--radius-2, 4px);\n  border: var(--border-1, 1px) solid;\n  text-align: center;\n  text-decoration: none;\n  vertical-align: middle;\n  cursor: pointer;\n  color: var(--primary-900, #003588);\n  background-color: var(--white, #ffffff);\n  border-color: var(--white, #ffffff);\n}\ncagov-page-feedback .feedback-form .btn-light:hover {\n  color: var(--primary-900, #003588);\n  background-color: var(--gray-200, #d4d4d7);\n  border-color: var(--gray-200, #d4d4d7);\n  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);\n  text-decoration: none;\n}\ncagov-page-feedback .feedback-form .btn-light:focus {\n  background-color: var(--gray-200, #d4d4d7);\n  border-color: var(--gray-200, #d4d4d7);\n  outline: var(--border-2) solid var(--accent2-500, #ac8226);\n  outline-offset: 2px;\n}\ncagov-page-feedback .feedback-form .btn-light .feedback-yes {\n  margin-right: var(--s-2, 1rem);\n}\ncagov-page-feedback .feedback-form-add {\n  padding-top: 0;\n  display: none;\n}\n@media (max-width: 768px) {\n  cagov-page-feedback .feedback-form-add {\n    text-align: left;\n    padding-top: 0;\n  }\n}\ncagov-page-feedback .feedback-form-add-grid {\n  position: relative;\n  margin-top: var(--s-2, 1rem);\n  display: inline-flex;\n  flex-flow: column;\n  align-items: flex-start;\n}\n@media (max-width: 768px) {\n  cagov-page-feedback .feedback-form-add-grid {\n    display: block;\n  }\n}\ncagov-page-feedback .feedback-form-textarea {\n  width: 100%;\n  padding: var(--s-2, 1rem);\n  margin-bottom: var(--s-2, 1rem);\n  color: var(--primary-900, #003484);\n  max-width: 90%;\n  height: 127px;\n  width: 600px;\n}\ncagov-page-feedback .feedback-form-thanks {\n  display: none;\n  color: #fff;\n}\ncagov-page-feedback .feedback-form-error {\n  position: relative;\n  top: 100%;\n  left: 0;\n  display: none;\n  font-weight: 300;\n  text-align: left;\n}\n\n/*# sourceMappingURL=index.css.map */\n';

/**
 * Page feedback web component that asks if you found what you were looking for,
 * then prompts for comments
 *
 * @element cagov-page-feedback
 *
 * @fires ratedPage - custom event with object with detail value of whether the user
 *                    clicked yes or no to the first question: {detail: "yes"}.
 *                    This can be used to send that value as a GA event outside this
 *                    component.
 *
 * @attr {string} [data-question] - "Did you find what you were looking for?";
 * @attr {string} [data-yes] - "Yes";
 * @attr {string} [data-no] - "No";
 * @attr {string} [data-commentPrompt] - "What was the problem?";
 * @attr {string} [data-positiveCommentPrompt] - "Great! What were you looking for today?";
 * @attr {string} [data-thanksFeedback] - "Thank you for your feedback!";
 * @attr {string} [data-thanksComments] - "Thank you for your comments!";
 * @attr {string} [data-submit] - "Submit";
 * @attr {string} [data-anythingToAdd] - "If you have anything to add,"
 * @attr {string} [data-anyOtherFeedback] - "If you have any other feedback about this website,"
 *
 * @cssprop --primary-700 - Default value of #165ac2, used for background
 */
class CAGovPageFeedback extends window.HTMLElement {
  constructor() {
    super();

    if (!document.querySelector('#cagov-page-feedback-styles')) {
      const style = document.createElement('style');
      style.id = 'cagov-page-feedback-styles';
      style.textContent = styles$2;
      document.querySelector('head').appendChild(style);
    }
  }

  connectedCallback() {
    const question = this.dataset.question
      ? this.dataset.question
      : 'Did you find what you were looking for?';
    const yes = this.dataset.yes ? this.dataset.yes : 'Yes';
    const no = this.dataset.no ? this.dataset.no : 'No';
    const commentPrompt = this.dataset.commentPrompt
      ? this.dataset.commentPrompt
      : 'What was the problem?';
    this.positiveCommentPrompt = this.dataset.positiveCommentPrompt
      ? this.dataset.positiveCommentPrompt
      : 'Great! What were you looking for today?';
    const thanksFeedback = this.dataset.thanksFeedback
      ? this.dataset.thanksFeedback
      : 'Thank you for your feedback!';
    const thanksComments = this.dataset.thanksComments
      ? this.dataset.thanksComments
      : 'Thank you for your comments!';
    const submit = this.dataset.submit ? this.dataset.submit : 'Submit';
    this.dataset.characterLimit
      ? this.dataset.characterLimit
      : 'You have reached your character limit.';
    this.dataset.anythingToAdd
      ? this.dataset.anythingToAdd
      : 'If you have anything to add,';
    this.dataset.anyOtherFeedback
      ? this.dataset.anyOtherFeedback
      : 'If you have any other feedback about this website,';

    this.endpointUrl = this.dataset.endpointUrl;
    const html = ratingsTemplate(
      question,
      yes,
      no,
      commentPrompt,
      thanksFeedback,
      thanksComments,
      submit,
    );
    this.innerHTML = html;
    this.applyListeners();
  }

  applyListeners() {
    this.wasHelpful = '';
    this.querySelector('.js-add-feedback').addEventListener('focus', () => {
      this.querySelector('.js-feedback-submit').style.display = 'block';
    });
    const feedback = this.querySelector('.js-add-feedback');
    feedback.addEventListener('keyup', () => {
      if (feedback.value.length > 15) {
        feedback.setAttribute('rows', '3');
      } else {
        feedback.setAttribute('rows', '1');
      }
    });

    feedback.addEventListener('blur', () => {
      if (feedback.value.length !== 0) {
        this.querySelector('.js-feedback-submit').style.display = 'block';
      }
    });
    this.querySelector('.js-feedback-yes').addEventListener('click', () => {
      this.querySelector('.js-feedback-field-label').innerHTML =
        this.positiveCommentPrompt;
      this.querySelector('.js-feedback-form').style.display = 'none';
      this.querySelector('.feedback-form-add').style.display = 'block';
      this.wasHelpful = 'yes';
      this.dispatchEvent(
        new CustomEvent('ratedPage', {
          detail: this.wasHelpful,
        }),
      );
    });
    this.querySelector('.js-feedback-no').addEventListener('click', () => {
      this.querySelector('.js-feedback-form').style.display = 'none';
      this.querySelector('.feedback-form-add').style.display = 'block';
      this.wasHelpful = 'no';
      this.dispatchEvent(
        new CustomEvent('ratedPage', {
          detail: this.wasHelpful,
        }),
      );
    });
    this.querySelector('.js-feedback-submit').addEventListener('click', () => {
      this.querySelector('.feedback-form-add').style.display = 'none';
      this.querySelector('.feedback-thanks-add').style.display = 'block';

      const postData = {};
      postData.url = window.location.href;
      postData.helpful = this.wasHelpful;
      postData.comments = feedback.value;
      postData.userAgent = navigator.userAgent;

      fetch(this.endpointUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
      })
        .then((response) => response.json())
        .then((data) => console.log(data));
    });
  }
}

window.customElements.define('cagov-page-feedback', CAGovPageFeedback);

/**
 * Dropdown menu web component
 *
 * @element cagov-site-navigation
 *
 * @cssprop --primary-700 - Default value of #165ac2, used for background
 * @cssprop --primary-900 - #003588
 * @cssprop --gray-200 - #d4d4d7
 * @cssprop --w-lg - '1176px'
 */

// Function determining if it's mobile view (max 767px)
function mobileView() {
  const mobileElement = document.querySelector(
    '.site-header .grid-mobile-icons',
  );
  if (mobileElement) {
    return getComputedStyle(mobileElement).display !== 'none';
  }
  return false;
}
class CAGovSiteNavigation extends window.HTMLElement {
  connectedCallback() {
    document
      .querySelector('.cagov-nav.open-menu')
      .addEventListener('click', this.toggleMainMenu.bind(this));

    // Mobile search events
    const mobileSearchBtn = document.querySelector(
      '.cagov-nav.mobile-search .search-btn',
    );
    if (mobileSearchBtn) {
      mobileSearchBtn.setAttribute('aria-expanded', 'false');
      document
        .querySelector('.search-container--small .site-search input')
        .setAttribute('tabindex', '-1');
      document
        .querySelector(
          '.search-container--small .site-search button.search-submit',
        )
        .setAttribute('tabindex', '-1');
      document
        .querySelector('.search-container--small')
        .setAttribute('aria-hidden', 'true');
      if (mobileView()) {
        mobileSearchBtn.addEventListener('click', () => {
          document
            .querySelector('.search-container--small')
            .classList.toggle('hidden-search');
          const searchactive = document
            .querySelector('.search-container--small')
            .classList.contains('hidden-search');
          if (searchactive) {
            mobileSearchBtn.setAttribute('aria-expanded', 'false');
            document
              .querySelector('.search-container--small .site-search input')
              .setAttribute('tabindex', '-1');
            document
              .querySelector(
                '.search-container--small .site-search button.search-submit',
              )
              .setAttribute('tabindex', '-1');
            document
              .querySelector('.search-container--small')
              .setAttribute('aria-hidden', 'true');
          } else {
            mobileSearchBtn.setAttribute('aria-expanded', 'true');
            document
              .querySelector('.search-container--small .site-search input')
              .focus();
            document
              .querySelector('.search-container--small .site-search input')
              .removeAttribute('tabindex');
            document
              .querySelector(
                '.search-container--small .site-search button.search-submit',
              )
              .removeAttribute('tabindex');
            document
              .querySelector('.search-container--small')
              .setAttribute('aria-hidden', 'false');
          }
        });
      }
    }

    // reset mobile search on resize
    window.addEventListener('resize', () => {
      document
        .querySelector('.search-container--small')
        .classList.add('hidden-search');
      if (mobileSearchBtn) {
        document
          .querySelector('.cagov-nav.mobile-search .search-btn')
          .setAttribute('aria-expanded', 'false');
      }
      document
        .querySelector('.search-container--small .site-search input')
        .setAttribute('tabindex', '-1');
      document
        .querySelector(
          '.search-container--small .site-search button.search-submit',
        )
        .setAttribute('tabindex', '-1');
      document
        .querySelector('.search-container--small')
        .setAttribute('aria-hidden', 'true');
      // reset navigation on resize
      this.closeAllMenus();
      this.closeMainMenu();
    });

    this.expansionListeners();
    document.addEventListener('keydown', this.escapeMainMenu.bind(this));
    document.body.addEventListener('click', this.bodyClick.bind(this));
    this.highlightCurrentPage();
  }

  toggleMainMenu() {
    if (
      document
        .querySelector('.cagov-nav.hamburger')
        .classList.contains('is-active')
    ) {
      this.closeMainMenu();
    } else {
      this.openMainMenu();
    }
  }

  highlightCurrentPage() {
    this.querySelectorAll('a.expanded-menu-dropdown-link').forEach((link) => {
      if (link.href === window.location.href) {
        link.classList.add('current-page-highlight');
      }
    });
  }

  openMainMenu() {
    document.querySelector('.mobile-icons').classList.add('display-menu');
    this.classList.add('display-menu');
    document.querySelector('.cagov-nav.hamburger').classList.add('is-active');
    document.querySelector('.cagov-nav.menu-trigger').classList.add('is-fixed');
    document
      .querySelector('.cagov-nav.menu-trigger')
      .setAttribute('aria-expanded', 'true');
    const menLabel = document.querySelector('.cagov-nav.menu-trigger-label');
    menLabel.innerHTML = menLabel.getAttribute('data-closelabel');
  }

  closeMainMenu() {
    document.querySelector('.mobile-icons').classList.remove('display-menu');
    this.classList.remove('display-menu');
    document
      .querySelector('.cagov-nav.hamburger')
      .classList.remove('is-active');
    document
      .querySelector('.cagov-nav.menu-trigger')
      .classList.remove('is-fixed');
    document
      .querySelector('.cagov-nav.menu-trigger')
      .setAttribute('aria-expanded', 'false');
    const menLabel = document.querySelector('.cagov-nav.menu-trigger-label');
    menLabel.innerHTML = menLabel.getAttribute('data-openlabel');
  }

  escapeMainMenu(event) {
    // Close menus if user presses escape key.
    if (event.keyCode === 27) {
      this.closeAllMenus();
    }
  }

  bodyClick(event) {
    if (!event.target.closest('cagov-site-navigation')) {
      this.closeAllMenus();
    }
  }

  closeAllMenus() {
    const allMenus = this.querySelectorAll('.js-cagov-navoverlay-expandable');
    allMenus.forEach((menu) => {
      const expandedEl = menu.querySelector('.expanded-menu-section');
      expandedEl.classList.remove('expanded');
      const closestDropDown = menu.querySelector('.expanded-menu-dropdown');
      if (
        closestDropDown &&
        closestDropDown.id &&
        menu.querySelector(`button[aria-controls=${closestDropDown.id}]`)
      ) {
        menu
          .querySelector(`button[aria-controls=${closestDropDown.id}]`)
          .setAttribute('aria-expanded', 'false');
      }
      if (closestDropDown) {
        closestDropDown.setAttribute('aria-hidden', 'true');
        const allLinks = closestDropDown.querySelectorAll('a');
        allLinks.forEach((link) => {
          link.setAttribute('tabindex', '-1'); // set tabindex to -1 so you cannot tab through these hidden links
        });
      }
    });
  }

  expansionListeners() {
    const allMenus = this.querySelectorAll('.js-cagov-navoverlay-expandable');
    allMenus.forEach((menu) => {
      const nearestMenu = menu.querySelector('.expanded-menu-section');
      if (nearestMenu) {
        const nearestMenuDropDown = nearestMenu.querySelector(
          '.expanded-menu-dropdown',
        );
        if (nearestMenuDropDown) {
          nearestMenuDropDown.setAttribute('aria-hidden', 'true');
          if (
            nearestMenuDropDown &&
            nearestMenuDropDown.id &&
            menu.querySelector(
              `button[aria-controls=${nearestMenuDropDown.id}]`,
            )
          ) {
            menu
              .querySelector(`button[aria-controls=${nearestMenuDropDown.id}]`)
              .setAttribute('aria-expanded', 'false');
          }
        }
      }
      const menuComponent = this;
      menu.addEventListener('click', function addingClickListener(event) {
        if (event.target.nodeName !== 'A') {
          event.preventDefault();
        }
        const expandedEl = this.querySelector('.expanded-menu-section');
        if (expandedEl) {
          if (expandedEl.classList.contains('expanded')) {
            // closing an open menu
            menuComponent.closeAllMenus();
          } else {
            menuComponent.closeAllMenus();
            expandedEl.classList.add('expanded');
            const closestDropDown = this.querySelector(
              '.expanded-menu-dropdown',
            );
            if (
              closestDropDown &&
              closestDropDown.id &&
              menu.querySelector(`button[aria-controls=${closestDropDown.id}]`)
            ) {
              menu
                .querySelector(`button[aria-controls=${closestDropDown.id}]`)
                .setAttribute('aria-expanded', 'true');
            }
            if (closestDropDown) {
              closestDropDown.setAttribute('aria-hidden', 'false');
              const allLinks = closestDropDown.querySelectorAll('a');
              allLinks.forEach((link) => {
                link.removeAttribute('tabindex'); // remove tabindex from all the links
              });
            }
          }
        }
      });
    });
  }
}
window.customElements.define('cagov-site-navigation', CAGovSiteNavigation);

var styles$1 =
  '/* Page alert */\n.icon-select {\n  height: 48px;\n  padding: 0 0px 0 16px;\n}\n\n.editor-styles-wrapper .message-body {\n  padding: 0 32px;\n}\n\n.editor-styles-wrapper .cagov-page-alert {\n  min-height: 64px;\n  height: auto;\n}\n\n.cagov-page-alert {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  padding: 8px 16px;\n  width: 100%;\n  min-height: 46px;\n  height: auto;\n  background: rgba(254, 192, 47, 0.2);\n  border: 1px solid var(--cagov-highlight, #fec02f);\n  box-sizing: border-box;\n  border-radius: 5px;\n  flex: none;\n  order: 1;\n  flex-grow: 0;\n  margin: 32px 0px;\n}\n.cagov-page-alert .icon {\n  line-height: 1.5rem;\n  background: none;\n}\n.cagov-page-alert .close-button {\n  background: none;\n  margin-left: auto;\n  border: none;\n  cursor: pointer !important;\n}\n.cagov-page-alert .body {\n  line-height: 1.5rem;\n  padding: 0 16px;\n  background: none;\n}\n@media only screen and (max-width: 600px) {\n  .cagov-page-alert {\n    min-height: 46px;\n    height: auto;\n  }\n}\n\n.sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border: 0;\n}\n\n/*# sourceMappingURL=index.css.map */\n';

/**
 * Page Alert web component
 * Supported endpoints: Wordpress v2
 */

class CAGovPageAlert extends window.HTMLElement {
  constructor() {
    super();

    if (!document.querySelector('#cagov-page-alert-styles')) {
      const style = document.createElement('style');
      style.id = 'cagov-page-alert-styles';
      style.textContent = styles$1;
      document.querySelector('head').appendChild(style);
    }
  }

  connectedCallback() {
    this.message = this.dataset.message || '';
    this.icon = this.dataset.icon || '';

    this.template({ message: this.message, icon: this.icon });
    document
      .querySelector('cagov-page-alert .close-button')
      .addEventListener('click', () => {
        document
          .querySelector('.cagov-page-alert')
          .setAttribute('aria-hidden', 'true');
        document
          .querySelector('cagov-page-alert .close-button')
          .setAttribute('tabindex', '-1');
        document.querySelector('cagov-page-alert').style.display = 'none';
      });
  }

  template(data) {
    if (data !== undefined && data !== null && data.content !== null) {
      this.innerHTML = `<div class="cagov-page-alert cagov-stack">
      <div class="icon" aria-hidden="true"><span class="${this.icon}"></span></div>
        <div class="body">${this.message}</div>
        <button class="close-button">
          <span class="ca-gov-icon-close-line" aria-hidden="true"></span>
          <span class="sr-only">Dismiss page alert</span>
        </button>
      </div>`;
    }

    return null;
  }
}

window.customElements.define('cagov-page-alert', CAGovPageAlert);

function pageListItem(label, number) {
  return `<li class="cagov-pagination__item">
    <a
      href="javascript:void(0);"
      class="cagov-pagination__button"
      aria-label="${label} ${number}"
      data-page-num="${number}"
    >
      ${number}
    </a>
  </li>`;
}

function pageOverflow() {
  return `<li
    class="cagov-pagination__item cagov-pagination__overflow"
    role="presentation"
  >
    <span> … </span>
  </li>`;
}

function templateHTML(next, previous, page, currentPage, totalPages) {
  return `<nav aria-label="Pagination" class="cagov-pagination">
    <ul class="cagov-pagination__list">
      <li class="cagov-pagination__item">
        <a
          href="javascript:void(0);"
          class="cagov-pagination__link cagov-pagination__previous-page"
          aria-label="${previous} ${page}"
        >
          <span class="cagov-pagination__link-text ${
            currentPage > 2 ? '' : 'cagov-pagination__link-inactive'
          }"> ${previous} </span>
        </a>
      </li>
      ${currentPage > 2 ? pageListItem(page, 1) : ''}

      ${currentPage > 3 ? pageOverflow() : ''}

      ${currentPage > 1 ? pageListItem(page, currentPage - 1) : ''}

      <li class="cagov-pagination__item cagov-pagination-current">
        <a
          href="javascript:void(0);"
          class="cagov-pagination__button"
          aria-label="Page ${currentPage}"
          aria-current="page"
          data-page-num="${currentPage}"
        >
          ${currentPage}
        </a>
      </li>

      ${currentPage < totalPages ? pageListItem(page, currentPage + 1) : ''}

      ${currentPage < totalPages - 3 ? pageOverflow() : ''}

      ${currentPage < totalPages - 1 ? pageListItem(page, totalPages) : ''}

      <li class="cagov-pagination__item">
        <a
          href="javascript:void(0);"
          class="cagov-pagination__link cagov-pagination__next-page"
          aria-label="${next} ${page}"
        >
          <span class="cagov-pagination__link-text ${
            currentPage > totalPages - 1
              ? 'cagov-pagination__link-inactive'
              : ''
          }"> ${next} </span>
        </a>
      </li>
    </ul>
  </nav>`;
}

var styles =
  'cagov-pagination .cagov-pagination__list {\n  list-style: none;\n  margin: 0;\n  padding: 0 !important;\n  display: flex;\n}\ncagov-pagination .cagov-pagination__item {\n  border: var(--border-1, 1px) solid var(--gray-100, #ededef);\n  border-radius: var(--radius-2, 4px);\n  margin: var(--s-sm, 0.25rem);\n}\ncagov-pagination .cagov-pagination__item a {\n  padding: 0.75rem 0.875rem;\n  display: inline-block;\n  color: var(--primary-700, #165ac2);\n  text-decoration: none;\n}\ncagov-pagination .cagov-pagination__item a:hover {\n  color: var(--primary-900, #003588);\n  background: var(--gray-50, #fafafa);\n  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);\n  text-decoration: none;\n}\ncagov-pagination .cagov-pagination__item a:focus {\n  color: var(--primary-900, #003588);\n  background: var(--gray-50, #fafafa);\n  outline: var(--border-2) solid var(--accent2-500);\n  outline-offset: 2px;\n  text-decoration: none;\n}\ncagov-pagination .cagov-pagination__item.cagov-pagination-current {\n  background-color: #165ac2;\n  background-color: var(--primary-700, #165ac2);\n}\ncagov-pagination .cagov-pagination__item.cagov-pagination-current a {\n  color: var(--white, #ffffff);\n}\ncagov-pagination .cagov-pagination__item.cagov-pagination-current a:hover {\n  background-color: var(--primary-900, 3588);\n  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);\n  text-decoration: none;\n  color: var(--white, #ffffff);\n}\ncagov-pagination .cagov-pagination__item.cagov-pagination-current a:focus {\n  background-color: var(--primary-900, 3588);\n  border-color: var(--primary-900, 3588);\n  outline: var(--border-2) solid var(--accent2-500);\n  outline-offset: 2px;\n}\ncagov-pagination .cagov-pagination__item.cagov-pagination__overflow {\n  border: none;\n  padding: 0.875rem 0;\n}\ncagov-pagination .cagov-pagination__item.cagov-pagination__overflow:hover {\n  background: inherit;\n}\ncagov-pagination .cagov-pagination__link-inactive {\n  color: grey;\n  border-color: grey;\n  cursor: not-allowed;\n  opacity: 0.5;\n}\n\n/*# sourceMappingURL=index.css.map */\n';

/**
 * Pagination web component
 *
 * @element cagov-pagination
 *
 * @fires paginationClick - custom event with object with detail value of current page: {detail: 1}
 *
 * @attr {string} [data-yes] - "Yes";
 * @attr {string} [data-no] - "No";
 *
 * @cssprop --primary-700 - Default value of #165ac2, used for text, border color
 */
class CAGovPagination extends window.HTMLElement {
  constructor() {
    super();

    if (!document.querySelector('#cagov-pagination-styles')) {
      const style = document.createElement('style');
      style.id = 'cagov-pagination-styles';
      style.textContent = styles;
      document.querySelector('head').appendChild(style);
    }
  }

  connectedCallback() {
    this.currentPage = parseInt(
      this.dataset.currentPage ? this.dataset.currentPage : '1',
      10,
    );
    this.render();
  }

  render() {
    const previous = this.dataset.previous ? this.dataset.previous : '&#60;';
    const next = this.dataset.next ? this.dataset.next : '&#62;';
    const page = this.dataset.page ? this.dataset.page : 'Page';
    this.totalPages = this.dataset.totalPages ? this.dataset.totalPages : '1';
    const html = templateHTML(
      next,
      previous,
      page,
      this.currentPage,
      this.totalPages,
    );
    this.innerHTML = html;
    this.applyListeners();
  }

  static get observedAttributes() {
    return ['data-current-page', 'data-total-pages'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'data-current-page') {
      this.currentPage = parseInt(newValue, 10);
      this.render();
    }
  }

  applyListeners() {
    const pageLinks = this.querySelectorAll('.cagov-pagination__button');
    pageLinks.forEach((pl) => {
      pl.addEventListener('click', (event) => {
        this.currentPage = parseInt(event.target.dataset.pageNum, 10);
        this.dispatchEvent(
          new CustomEvent('paginationClick', {
            detail: this.currentPage,
          }),
        );
        this.dataset.currentPage = this.currentPage;
      });
    });
    this.querySelector('.cagov-pagination__previous-page').addEventListener(
      'click',
      (event) => {
        if (
          !event.target.classList.contains('cagov-pagination__link-inactive')
        ) {
          this.currentPage -= 1;
          if (this.currentPage < 1) {
            this.currentPage = 1;
          }
          this.dispatchEvent(
            new CustomEvent('paginationClick', {
              detail: this.currentPage,
            }),
          );
          this.dataset.currentPage = this.currentPage;
        }
      },
    );
    this.querySelector('.cagov-pagination__next-page').addEventListener(
      'click',
      (event) => {
        if (
          !event.target.classList.contains('cagov-pagination__link-inactive')
        ) {
          this.currentPage += 1;
          if (this.currentPage > this.totalPages) {
            this.currentPage = this.totalPages;
          }
          this.dispatchEvent(
            new CustomEvent('paginationClick', {
              detail: this.currentPage,
            }),
          );
          this.dataset.currentPage = this.currentPage;
        }
      },
    );
  }
}

window.customElements.define('cagov-pagination', CAGovPagination);

/* PDF ICON */
function placePdfIcons() {
  // pdf-icon component svg icon
  const pdf =
    '<span class="pdf-link-icon" aria-hidden="true"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"width="25.1px" height="13.6px" viewBox="0 0 25.1 13.6" style="enable-background:new 0 0 25.1 13.6;" xml:space="preserve"><path d="M11.7,9.9h1.5c1.7,0,3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1h-1.5c-0.3,0-0.6,0.3-0.6,0.6v4.9c0,0.2,0.1,0.3,0.2,0.4C11.4,9.9,11.6,9.9,11.7,9.9L11.7,9.9z M12.3,5h0.9c1,0,1.8,0.8,1.8,1.8s-0.8,1.8-1.8,1.8h-0.9V5z"/><path d="M17.8,9.9c0.2,0,0.3-0.1,0.4-0.2c0.1-0.1,0.2-0.3,0.2-0.4V7.5h1.2c0.3,0,0.6-0.3,0.6-0.6c0-0.3-0.3-0.6-0.6-0.6h-1.2V5h2.1c0.3,0,0.6-0.3,0.6-0.6c0-0.3-0.3-0.6-0.6-0.6h-2.8c-0.3,0-0.6,0.3-0.6,0.6v4.9c0,0.2,0.1,0.3,0.2,0.4C17.5,9.9,17.7,9.9,17.8,9.9L17.8,9.9z"/><path d="M6.2,9.9c0.2,0,0.3-0.1,0.4-0.2c0.1-0.1,0.2-0.3,0.2-0.4V8.1H8c1.2,0,2.1-1,2.1-2.1c0-1.2-1-2.1-2.1-2.1H6.2c-0.3,0-0.6,0.3-0.6,0.6v4.9c0,0.2,0.1,0.3,0.2,0.4C5.9,9.9,6,9.9,6.2,9.9L6.2,9.9z M9,6c0,0.3-0.1,0.5-0.2,0.7C8.5,6.8,8.3,6.9,8,6.9H6.8V5H8c0.2,0,0.5,0.1,0.7,0.2C8.9,5.5,9,5.7,9,6L9,6z"/></svg></span><span class="sr-only"> (this is a pdf file)</span>';

  // selector is looking for links with pdf extension in the href
  const pdfLink = document.querySelectorAll("a[href*='.pdf']");
  for (let i = 0; i < pdfLink.length; i += 1) {
    pdfLink[i].innerHTML += pdf; // += concatenates to pdf links
    // Fixing search results PDF links
    if (pdfLink[i].innerHTML.indexOf('*PDF (this is a pdf file)*') !== -1) {
      pdfLink[i].innerHTML += pdf.replace(/PDF (this is a pdf file)]/g, ''); // += concatenates to pdf links
    }
  }
}
placePdfIcons();

/* EXTERNAL LINK ICON */
function linkAnnotator() {
  const ext =
    '<span class="external-link-icon" aria-hidden="true"><svg version="1.1" x="0px" y="0px" viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve"><path d="M1.4,13.3c0-1.9,0-3.8,0-5.7c0-2.3,1.3-3.6,3.7-3.7c2,0,3.9,0,5.9,0c0.9,0,1.4,0.4,1.4,1.1c0,0.7-0.5,1.1-1.5,1.1 c-2,0-3.9,0-5.9,0c-1.1,0-1.4,0.3-1.4,1.5c0,3.8,0,7.6,0,11.3c0,1.1,0.4,1.5,1.5,1.5c3.8,0,7.6,0,11.3,0c1.1,0,1.4-0.3,1.4-1.5 c0-1.9,0-3.9,0-5.8c0-1,0.4-1.5,1.1-1.5c0.7,0,1.1,0.5,1.1,1.5c0,2,0,4,0,6.1c0,2-1.4,3.4-3.4,3.4c-4,0-7.9,0-11.9,0 c-2.1,0-3.4-1.4-3.4-3.4C1.4,17.2,1.4,15.2,1.4,13.3L1.4,13.3z"/><path d="M19.6,2.8c-1.3,0-2.5,0-3.6,0c-0.9,0-1.4-0.4-1.4-1.1c0.1-0.8,0.6-1.1,1.3-1.1c2.1,0,4.2,0,6.2,0c0.8,0,1.2,0.5,1.2,1.3 c0,2,0,4.1,0,6.2c0,0.9-0.4,1.4-1.1,1.4c-0.7,0-1.1-0.5-1.1-1.4c0-1.1,0-2.3,0-3.6c-0.3,0.3-0.6,0.5-0.8,0.7c-3,3-6,6-8.9,8.9 c-0.2,0.2-0.3,0.3-0.5,0.5c-0.5,0.5-1.1,0.5-1.6,0c-0.5-0.5-0.4-1,0-1.5c0.1-0.2,0.3-0.3,0.5-0.5c3-3,6-6,8.9-8.9 C19,3.4,19.2,3.2,19.6,2.8L19.6,2.8z"/></svg></span>';

  // Check if link is external function
  function linkIsExternal(linkElement) {
    return window.location.host.indexOf(linkElement.host) > -1;
  }

  // Looping thru all links inside of the main content body, agency footer and statewide footer
  const externalLink = document.querySelectorAll(
    'main a, .agency-footer a, .site-footer a, footer a',
  );
  externalLink.forEach((element) => {
    const anchorLink = element.href.indexOf('#') === 0;
    const localHost = element.href.indexOf('localhost') > -1;
    const localEmail = element.href.indexOf('@') > -1;
    const linkElement = element;
    if (
      linkIsExternal(linkElement) === false &&
      !anchorLink &&
      !localEmail &&
      !localHost
    ) {
      linkElement.innerHTML += ext; // += concatenates to external links
    }
  });
}

linkAnnotator();
