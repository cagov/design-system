var styles$2 =
  '/* accordion component specific classes */\ncagov-accordion .cagov-accordion-card {\n  border-radius: 0.3rem !important;\n  margin-bottom: 0;\n  min-height: 3rem;\n  margin-top: 0.5rem;\n  border: solid 1px #ededef !important;\n}\n\ncagov-accordion .accordion-card-container {\n  display: block;\n  overflow: hidden;\n}\n\ncagov-accordion button.accordion-card-header {\n  display: flex;\n  justify-content: left;\n  align-items: center;\n  padding: 0 0 0 1rem;\n  background-clip: border-box;\n  background-color: #ededef;\n  border: none;\n  position: relative;\n  width: 100%;\n  line-height: 3rem;\n}\n\ncagov-accordion.prog-enhanced button.accordion-card-header {\n  cursor: pointer;\n}\n\ncagov-accordion .accordion-title {\n  text-align: left;\n  margin-bottom: 0;\n  color: var(--primary-color, #064e66);\n  margin-right: auto;\n  width: 90%;\n  padding: 0 0.5rem 0 0 !important;\n  font-size: 1.125rem;\n  font-weight: bold;\n}\n\ncagov-accordion.prog-enhanced .accordion-card-container {\n  height: 0px;\n  transition: height 0.3s ease;\n}\n\ncagov-accordion.prog-enhanced .accordion-card-container .card-body {\n  padding-left: 1rem;\n  margin-top: 8px;\n}\n\ncagov-accordion.prog-enhanced .accordion-card-container .card-body ul {\n  margin-left: 16px;\n  margin-right: 16px;\n}\n\ncagov-accordion .collapsed {\n  display: block;\n  overflow: hidden;\n  visibility: hidden;\n}\n\n.accordion-title h4,\n.accordion-title h3,\n.accordion-title h2 {\n  padding: 0 !important;\n  margin-top: 0 !important;\n  margin-bottom: 0 !important;\n  font-size: 1.2rem !important;\n  font-weight: 700;\n  color: var(--primary-color, #064e66);\n  text-align: left !important;\n}\n\nbutton.accordion-card-header:hover {\n  background-color: var(--hover-color, #f9f9fa);\n}\n\nbutton.accordion-card-header:hover .accordion-title {\n  text-decoration: underline;\n}\n\nbutton.accordion-card-header:hover .accordion-title:hover {\n  text-decoration: underline;\n}\n\nbutton.accordion-card-header:focus {\n  outline-offset: -2px;\n}\n\n.accordion-icon svg line {\n  stroke-width: 4px;\n}\n\ncagov-accordion.prog-enhanced .accordion-alpha .plus-minus {\n  width: 2.125rem;\n  height: 2.125rem;\n  border: none;\n  overflow: hidden;\n  margin-left: 1rem;\n  color: var(--primary-color, #064e66);\n  align-self: flex-start;\n  margin-top: 8px;\n}\n\n.prog-enhanced .accordion-alpha .plus-minus svg {\n  fill: var(--primary-color, #064e66);\n  width: 25px;\n  height: 25px;\n}\n\n.prog-enhanced .accordion-alpha-open cagov-plus .accordion-icon {\n  display: none !important;\n}\n\n.prog-enhanced .accordion-alpha-open cagov-minus .accordion-icon {\n  display: block !important;\n}\n\n@media only screen and (max-width: 767px) {\n  .accordion-alpha-open + .accordion-card-container {\n    height: 100% !important;\n  }\n}\n\n/*# sourceMappingURL=index.css.map */\n';

/**
 * Accordion web component that collapses and expands content inside itself on click.
 *
 * @element cagov-accordion
 *
 * @prop {class string} prog-enhanced -
 * The element is open before any javascript executes so content
 * can be read if an error occurs that prevents js execution.
 * The prog-enhanced class is added to the element once javascript
 * begins to execute. This triggers default collabsed state.
 *
 * @fires click - Default value, will be defined by this.dataset.eventType.
 *
 * @attr {string} [data-event-type=click] - dataset defined value for event type fired on click.
 * @attr {string} aria=expanded=true -
 * set on the internal element .accordion-card-header.
 * If this is true the accordion will be open before any user interaction.
 *
 * @cssprop --primary-color - Default value of #1f2574, used for all colors of borders and fills
 * @cssprop --hover-color - Default value of #F9F9FA, used for background on hover
 *
 */
class CaGovAccordion extends window.HTMLElement {
  constructor() {
    super();
    if (document.querySelector('api-viewer')) {
      const link = document.createElement('link');
      link.setAttribute('rel', 'stylesheet');
      link.setAttribute('href', './src/css/index.css');
      document.querySelector('api-viewer').shadowRoot.appendChild(link);
    }
  }

  connectedCallback() {
    this.classList.add('prog-enhanced');
    this.expandTarget = this.querySelector('.accordion-card-container');
    this.expandButton = this.querySelector('.accordion-card-header');
    if (this.expandButton) {
      this.expandButton.addEventListener('click', this.listen.bind(this));
    }
    this.activateButton = this.querySelector('.accordion-card-header');
    this.eventType = this.dataset.eventType ? this.dataset.eventType : 'click';

    // Detect if accordion should open by default
    const expanded = this.activateButton.getAttribute('aria-expanded');
    if (expanded === 'true') {
      this.triggerAccordionClick(); // Open the accordion.
      const allLinks = this.querySelectorAll('.accordion-card-container a');
      const allbuttons = this.querySelectorAll(
        '.accordion-card-container button',
      );
      for (let i = 0; i < allLinks.length; i += 1) {
        allLinks[i].removeAttribute('tabindex'); // remove tabindex from all the links
      }
      for (let i = 0; i < allbuttons.length; i += 1) {
        allbuttons[i].removeAttribute('tabindex'); // remove tabindex from all the buttons
      }
    } else {
      // making sure that all links inside of the accordion container are having tabindex -1
      const allLinks = this.querySelectorAll('.accordion-card-container a');
      const allbuttons = this.querySelectorAll(
        '.accordion-card-container button',
      );
      for (let i = 0; i < allLinks.length; i += 1) {
        allLinks[i].setAttribute('tabindex', '-1');
      }

      for (let i = 0; i < allbuttons.length; i += 1) {
        allbuttons[i].setAttribute('tabindex', '-1');
      }
    }
  }

  listen() {
    if (!this.cardBodyHeight) {
      this.cardBodyHeight = this.querySelector('.card-body').clientHeight + 24;
    }
    if (this.expandTarget.clientHeight > 0) {
      this.closeAccordion();
    } else {
      this.expandAccordion();
    }
  }

  triggerAccordionClick() {
    const event = new MouseEvent(this.eventType, {
      view: window,
      bubbles: true,
      cancelable: true,
    });
    this.expandButton.dispatchEvent(event);
  }

  closeAccordion() {
    this.expandTarget.style.height = '0px';
    this.expandTarget.setAttribute('aria-hidden', 'true');
    this.querySelector('.accordion-card-header').classList.remove(
      'accordion-alpha-open',
    );
    this.activateButton.setAttribute('aria-expanded', 'false');
    const allLinks = this.querySelectorAll('.accordion-card-container a');
    const allbuttons = this.querySelectorAll(
      '.accordion-card-container button',
    );
    for (let i = 0; i < allLinks.length; i += 1) {
      allLinks[i].setAttribute('tabindex', '-1'); // tabindex to all links
    }
    for (let i = 0; i < allbuttons.length; i += 1) {
      allbuttons[i].setAttribute('tabindex', '-1'); // tabindex to all buttons
    }
  }

  expandAccordion() {
    this.expandTarget.style.height = `${this.cardBodyHeight}px`;
    this.expandTarget.setAttribute('aria-hidden', 'false');
    this.querySelector('.accordion-card-header').classList.add(
      'accordion-alpha-open',
    );
    this.querySelector('.accordion-card-container').classList.remove(
      'collapsed',
    );
    this.activateButton.setAttribute('aria-expanded', 'true');
    const allLinks = this.querySelectorAll('.accordion-card-container a');
    const allbuttons = this.querySelectorAll(
      '.accordion-card-container button',
    );
    for (let i = 0; i < allLinks.length; i += 1) {
      allLinks[i].removeAttribute('tabindex'); // remove tabindex from all the links
    }
    for (let i = 0; i < allbuttons.length; i += 1) {
      allbuttons[i].removeAttribute('tabindex'); // remove tabindex from all the buttons
    }
  }
}
window.customElements.define('cagov-accordion', CaGovAccordion);
const style$2 = document.createElement('style');
style$2.textContent = styles$2;
document.querySelector('head').appendChild(style$2);

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

/**
 * Content Navigation web component
 *
 * @element cagov-content-navigation
 *
 * @attr {string} [data-selector] - "main";
 * @attr {string} [data-type] - "wordpress";
 * @attr {string} [data-label] - "On this page";
 */
class CAGovContentNavigation extends window.HTMLElement {
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
      content = `<div class="label">${label}</div> ${markup}`;
    }

    this.template({ content }, 'wordpress');
  }

  template(data, type) {
    if (data !== undefined && data !== null && data.content !== null) {
      if (type === 'wordpress') {
        this.innerHTML = `${data.content}`;
      }
    }

    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener('click', (e) => {
        const hashval = decodeURI(anchor.getAttribute('href'));
        try {
          const target = document.querySelector(hashval);
          if (target !== null) {
            const position = target.getBoundingClientRect();

            const prefersReducedMotion = window.matchMedia(
              '(prefers-reduced-motion)',
            ).matches;

            // console.log("prefersReducedMotion", prefersReducedMotion);
            if (!prefersReducedMotion) {
              window.scrollTo({
                behavior: 'smooth',
                left: position.left,
                top: position.top - 200,
              });
            }

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
    // const headings = [];
    for (let i = 0; i < h.length; i += 1) {
      // Pull out the header tags, in order & render as links with anchor tags
      // auto convert h tags with tag names
      if (selector !== undefined && selector !== null) {
        {
          const selectorContent = document.querySelector(selector);
          if (selectorContent !== null) {
            const outline = CAGovContentNavigation.outliner(selectorContent);
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
        let tagId = tag.getAttribute('id');
        const title = tag.innerHTML;
        // Alt: [a-zA-Z\u00C0-\u017F]+,\s[a-zA-Z\u00C0-\u017F]+
        let anchor = tag.innerHTML
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
          .replace(/a-zA-ZÃ€-Ã–Ã™-Ã¶Ã¹-Ã¿Ä€-Å¾á¸€-á»¿0-9\u00A0-\u017F/g, '');

        // If id not set already, create an id to jump to.
        if (tagId !== undefined && tagId !== null) {
          anchor = tagId;
        }

        output += `<li><a href="#${encodeURI(anchor)}">${title}</a></li>`;

        if (tagId === undefined || tagId === null) {
          tagId = anchor;
          tag.setAttribute('id', tagId);
        }
      });
      return `<ul>${output}</ul>`;
    }
    return null;
  }
}

if (customElements.get('cagov-content-navigation') === undefined) {
  window.customElements.define(
    'cagov-content-navigation',
    CAGovContentNavigation,
  );
}

function linkAnnotator() {
  const ext =
    '<span class="external-link-icon" aria-hidden="true"><svg version="1.1" x="0px" y="0px" viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve"><path d="M1.4,13.3c0-1.9,0-3.8,0-5.7c0-2.3,1.3-3.6,3.7-3.7c2,0,3.9,0,5.9,0c0.9,0,1.4,0.4,1.4,1.1c0,0.7-0.5,1.1-1.5,1.1 c-2,0-3.9,0-5.9,0c-1.1,0-1.4,0.3-1.4,1.5c0,3.8,0,7.6,0,11.3c0,1.1,0.4,1.5,1.5,1.5c3.8,0,7.6,0,11.3,0c1.1,0,1.4-0.3,1.4-1.5 c0-1.9,0-3.9,0-5.8c0-1,0.4-1.5,1.1-1.5c0.7,0,1.1,0.5,1.1,1.5c0,2,0,4,0,6.1c0,2-1.4,3.4-3.4,3.4c-4,0-7.9,0-11.9,0 c-2.1,0-3.4-1.4-3.4-3.4C1.4,17.2,1.4,15.2,1.4,13.3L1.4,13.3z"/><path d="M19.6,2.8c-1.3,0-2.5,0-3.6,0c-0.9,0-1.4-0.4-1.4-1.1c0.1-0.8,0.6-1.1,1.3-1.1c2.1,0,4.2,0,6.2,0c0.8,0,1.2,0.5,1.2,1.3 c0,2,0,4.1,0,6.2c0,0.9-0.4,1.4-1.1,1.4c-0.7,0-1.1-0.5-1.1-1.4c0-1.1,0-2.3,0-3.6c-0.3,0.3-0.6,0.5-0.8,0.7c-3,3-6,6-8.9,8.9 c-0.2,0.2-0.3,0.3-0.5,0.5c-0.5,0.5-1.1,0.5-1.6,0c-0.5-0.5-0.4-1,0-1.5c0.1-0.2,0.3-0.3,0.5-0.5c3-3,6-6,8.9-8.9 C19,3.4,19.2,3.2,19.6,2.8L19.6,2.8z"/></svg></span>';

  // Check if link is external function
  function linkIsExternal(linkElement) {
    return window.location.host.indexOf(linkElement.host) > -1;
  }

  // Looping thru all links inside of the main content body, agency footer and statewide footer
  const externalLink = document.querySelectorAll(
    'main a, .agency-footer a, footer a',
  );
  externalLink.forEach((element) => {
    const anchorLink = element.href.indexOf('#') > -1;
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
      <button class="feedback-form-button js-feedback-yes feedback-yes" id="feedback-yes">${yes}</button>
      <button class="feedback-form-button js-feedback-no" id="feedback-no">${no}</button>
    </div>
          
    <div class="feedback-form-thanks js-feedback-thanks" role="alert">${thanksFeedback}</div>
          
    <div class="feedback-form-add">
      <label class="feedback-form-label js-feedback-field-label" for="add-feedback">${commentPrompt}</label>
      <div class="feedback-form-add-grid">
        <textarea name="add-feedback" class="js-add-feedback feedback-form-textarea" id="add-feedback" rows="1"></textarea>
        <button class="feedback-form-button js-feedback-submit" type="submit" id="feedback-submit">${submit}</button>
      </div>
    </div>

    <div class="feedback-form-thanks feedback-thanks-add" role="alert">${thanksComments}</div>
  </div>
  </section>`;
}

var styles$1 =
  'cagov-feedback {\n  width: 100%;\n}\ncagov-feedback .feedback-form {\n  background: var(--primary-dark-color, #003484);\n  padding: 1rem;\n  border-radius: 0.3125rem;\n  max-width: var(--w-lg, 1176px);\n  margin: 0 auto;\n}\ncagov-feedback .feedback-form-question {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n}\ncagov-feedback .feedback-form-label {\n  color: #fff;\n  background-color: var(--primary-dark-color, #003484);\n  font-size: 1.125rem;\n  display: block;\n  margin-right: 1rem;\n  transition: 0.3s color cubic-bezier(0.57, 0.2, 0.21, 0.89);\n  line-height: 3rem;\n  width: auto;\n}\n@media (max-width: 768px) {\n  cagov-feedback .feedback-form-label {\n    line-height: unset;\n    margin-bottom: 1rem;\n  }\n}\ncagov-feedback .feedback-form-button {\n  padding: 1rem;\n  color: var(--primary-dark-color, #003484);\n  border: none;\n  border-radius: 0.3rem;\n  transition: 0.3s background cubic-bezier(0.57, 0.2, 0.21, 0.89);\n  cursor: pointer;\n  margin: 0 0.5rem 0 0;\n  display: inline !important;\n  /* defensive overrides */\n  position: relative;\n  text-transform: none;\n  top: auto;\n  right: auto;\n  background: #fff;\n}\ncagov-feedback .feedback-form-button:hover {\n  box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.2);\n  text-decoration: underline;\n}\ncagov-feedback .feedback-form-button:focus {\n  box-shadow: 0 0 0 2px #fff;\n}\ncagov-feedback .feedback-form-button .feedback-yes {\n  margin-right: 1rem;\n}\ncagov-feedback .feedback-form-add {\n  padding-top: 0;\n  display: none;\n}\n@media (max-width: 768px) {\n  cagov-feedback .feedback-form-add {\n    text-align: left;\n    padding-top: 0;\n  }\n}\ncagov-feedback .feedback-form-add-grid {\n  position: relative;\n  margin-top: 1rem;\n  display: inline-flex;\n  flex-flow: column;\n  align-items: flex-start;\n}\n@media (max-width: 768px) {\n  cagov-feedback .feedback-form-add-grid {\n    display: block;\n  }\n}\ncagov-feedback .feedback-form-textarea {\n  width: 100%;\n  padding: 1rem;\n  margin-bottom: 1rem;\n  font-family: "Roboto", sans-serif;\n  color: var(--primary-dark-color, #003484);\n  max-width: 90%;\n  height: 127px;\n  width: 600px;\n}\ncagov-feedback .feedback-form-thanks {\n  display: none;\n  color: #fff;\n}\ncagov-feedback .feedback-form-error {\n  position: relative;\n  top: 100%;\n  left: 0;\n  display: none;\n  font-weight: 300;\n  text-align: left;\n}\n\n/*# sourceMappingURL=index.css.map */\n';

/**
 * Page feedback web component that asks if you found what you were looking for,
 * then prompts for comments
 *
 * @element cagov-feedback
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
 * @cssprop --primary-color - Default value of #064E66, used for background
 */
class CAGovFeedback extends window.HTMLElement {
  constructor() {
    super();
    if (document.querySelector('api-viewer')) {
      const link = document.createElement('link');
      link.setAttribute('rel', 'stylesheet');
      link.setAttribute('href', './src/css/index.css');
      document.querySelector('api-viewer').shadowRoot.appendChild(link);
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
window.customElements.define('cagov-feedback', CAGovFeedback);
const style$1 = document.createElement('style');
style$1.textContent = styles$1;
document.querySelector('head').appendChild(style$1);

const appendGoogleTranslateJS = () => {
  const JS = document.createElement('script');
  JS.type = 'text/javascript';
  JS.defer = 'defer';
  JS.src =
    '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
  document.body.appendChild(JS);
};

class CAGOVGoogleTranslate extends window.HTMLElement {
  connectedCallback() {
    this.storagekey = 'google_translate_page_used';

    this.innerHTML = `<div class="quarter standard-translate d-none" id="google_translate_element">
      <a class="goog-init" href="#">Change language</a>
    </div>`;

    this.querySelector('.goog-init').addEventListener('click', (e) => {
      e.preventDefault();
      sessionStorage.setItem(this.storagekey, new Date().getTime());
      this.innerHTML =
        '<div class="quarter standard-translate" id="google_translate_element">loading</div>';
      this.loadGoogleTranslateJS();
    });

    this.loadGoogleTranslateJS();
  }

  loadGoogleTranslateJS() {
    if (sessionStorage.getItem(this.storagekey)) {
      appendGoogleTranslateJS();
    } else {
      this.querySelector('.standard-translate').classList.remove('d-none');
    }
  }
}
window.customElements.define('cagov-google-translate', CAGOVGoogleTranslate);

// global callback function for google translate javascript load
window.googleTranslateElementInit = () => {
  const translateEl = document.getElementById('google_translate_element');
  translateEl.innerHTML = '';
  translateEl.classList.remove('d-none');
  (() =>
    new window.google.translate.TranslateElement(
      {
        pageLanguage: 'en',
        gaTrack: !0,
        autoDisplay: !1,
        layout: window.google.translate.TranslateElement.InlineLayout.VERTICAL,
      },
      'google_translate_element',
    ))();
};

/**
 * Dropdown menu web component
 *
 * @element cagov-navoverlay
 *
 * @cssprop --primary-color - Default value of #064E66, used for background
 * @cssprop --gray-300 - #e1e0e3
 * @cssprop --primary-dark-color - #064e66
 * @cssprop --secondary-color - #fec02f
 * @cssprop --w-lg - '1176px'
 */
class CAGOVOverlayNav extends window.HTMLElement {
  connectedCallback() {
    document
      .querySelector('.cagov-nav.open-menu')
      .addEventListener('click', this.toggleMainMenu.bind(this));
    const mobileSearchBtn = document.querySelector(
      '.cagov-nav.mobile-search .search-btn',
    );
    if (mobileSearchBtn) {
      mobileSearchBtn.addEventListener('click', () => {
        document
          .querySelector('.search-container--small')
          .classList.toggle('hidden-search');
        document
          .querySelector('.search-container--small .site-search input')
          .focus();
      });
    }
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
    if (!event.target.closest('cagov-navoverlay')) {
      this.closeAllMenus();
    }
  }

  closeAllMenus() {
    const allMenus = this.querySelectorAll('.js-cagov-navoverlay-expandable');
    allMenus.forEach((menu) => {
      const expandedEl = menu.querySelector('.expanded-menu-section');
      expandedEl.classList.remove('expanded');
      menu.setAttribute('aria-expanded', 'false');
      const closestDropDown = menu.querySelector('.expanded-menu-dropdown');
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
          menu.setAttribute('aria-expanded', 'false');
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
            menu.setAttribute('aria-expanded', 'true');
            const closestDropDown = this.querySelector(
              '.expanded-menu-dropdown',
            );
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
window.customElements.define('cagov-navoverlay', CAGOVOverlayNav);

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
  'cagov-pagination .cagov-pagination__list {\n  list-style: none;\n  margin: 0;\n  padding: 0 !important;\n  display: flex;\n}\ncagov-pagination .cagov-pagination__item {\n  border: 1px solid #EDEDEF;\n  border-radius: 0.3rem;\n  margin: 0.25rem;\n}\ncagov-pagination .cagov-pagination__item a {\n  padding: 0.75rem 0.875rem;\n  display: inline-block;\n  color: var(--primary-color, #064E66);\n  text-decoration: none;\n}\ncagov-pagination .cagov-pagination__item:hover {\n  background: #F9F9FA;\n}\ncagov-pagination .cagov-pagination__item:hover a {\n  text-decoration: underline;\n}\ncagov-pagination .cagov-pagination__item.cagov-pagination-current {\n  background-color: #064E66;\n  background-color: var(--primary-color, #064E66);\n}\ncagov-pagination .cagov-pagination__item.cagov-pagination-current a {\n  color: #fff;\n}\ncagov-pagination .cagov-pagination__item.cagov-pagination__overflow {\n  border: none;\n  padding: 0.875rem 0;\n}\ncagov-pagination .cagov-pagination__item.cagov-pagination__overflow:hover {\n  background: inherit;\n}\ncagov-pagination .cagov-pagination__link-inactive {\n  color: grey;\n  border-color: grey;\n  cursor: not-allowed;\n  opacity: 0.5;\n}\n\n/*# sourceMappingURL=index.css.map */\n';

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
 * @cssprop --primary-color - Default value of #064E66, used for text, border color
 */
class CAGovPagination extends window.HTMLElement {
  constructor() {
    super();
    if (document.querySelector('api-viewer')) {
      const link = document.createElement('link');
      link.setAttribute('rel', 'stylesheet');
      link.setAttribute('href', './src/css/index.css');
      document.querySelector('api-viewer').shadowRoot.appendChild(link);
    }
  }

  // add jsdoc event
  // add jsdoc event to feedback too

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
const style = document.createElement('style');
style.textContent = styles;
document.querySelector('head').appendChild(style);

function placePdfIcons() {
  // pdf-icon component svg icon
  const pdf =
    '<span class="pdf-link-icon" aria-hidden="true"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"width="25.1px" height="13.6px" viewBox="0 0 25.1 13.6" style="enable-background:new 0 0 25.1 13.6;" xml:space="preserve"><path d="M11.7,9.9h1.5c1.7,0,3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1h-1.5c-0.3,0-0.6,0.3-0.6,0.6v4.9c0,0.2,0.1,0.3,0.2,0.4C11.4,9.9,11.6,9.9,11.7,9.9L11.7,9.9z M12.3,5h0.9c1,0,1.8,0.8,1.8,1.8s-0.8,1.8-1.8,1.8h-0.9V5z"/><path d="M17.8,9.9c0.2,0,0.3-0.1,0.4-0.2c0.1-0.1,0.2-0.3,0.2-0.4V7.5h1.2c0.3,0,0.6-0.3,0.6-0.6c0-0.3-0.3-0.6-0.6-0.6h-1.2V5h2.1c0.3,0,0.6-0.3,0.6-0.6c0-0.3-0.3-0.6-0.6-0.6h-2.8c-0.3,0-0.6,0.3-0.6,0.6v4.9c0,0.2,0.1,0.3,0.2,0.4C17.5,9.9,17.7,9.9,17.8,9.9L17.8,9.9z"/><path d="M6.2,9.9c0.2,0,0.3-0.1,0.4-0.2c0.1-0.1,0.2-0.3,0.2-0.4V8.1H8c1.2,0,2.1-1,2.1-2.1c0-1.2-1-2.1-2.1-2.1H6.2c-0.3,0-0.6,0.3-0.6,0.6v4.9c0,0.2,0.1,0.3,0.2,0.4C5.9,9.9,6,9.9,6.2,9.9L6.2,9.9z M9,6c0,0.3-0.1,0.5-0.2,0.7C8.5,6.8,8.3,6.9,8,6.9H6.8V5H8c0.2,0,0.5,0.1,0.7,0.2C8.9,5.5,9,5.7,9,6L9,6z"/><path d="M5,9.3c0,0.8-1.2,0.8-1.2,0C3.8,8.5,5,8.5,5,9.3z"/></svg></span><span class="sr-only"> (this is a pdf file)</span>';

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

/**
 * Plus web component, inlines an svg plus symbol so it can be styled dynamically
 *
 * @element cagov-plus
 *
 */
class CaGovPlus extends window.HTMLElement {
  connectedCallback() {
    this.innerHTML = `<div class="accordion-icon" aria-hidden="true">
        <svg viewbox="0 0 25 25">
            <title>Plus</title>
            <line x1="6" y1="12.5" x2="19" y2="12.5" fill="none" stroke="currentColor" stroke-width="6" stroke-linecap="round" vector-effect="non-scaling-stroke" />
            <line y1="6" x1="12.5" y2="19" x2="12.5" fill="none" stroke="currentColor" stroke-width="6" stroke-linecap="round" vector-effect="non-scaling-stroke" />
        </svg>
      </div>`;
  }
}
window.customElements.define('cagov-plus', CaGovPlus);

/**
 * Minus web component, inlines an svg minus symbol so it can be styled dynamically
 *
 * @element cagov-minus
 *
 */
class CaGovMinus extends window.HTMLElement {
  connectedCallback() {
    this.innerHTML = `<div class="accordion-icon" aria-hidden="true">
        <svg viewbox="0 0 25 25">
            <title>Minus</title>
            <line x1="6" y1="12.5" x2="19" y2="12.5"  fill="none" stroke="currentColor" stroke-width="6" stroke-linecap="round" vector-effect="non-scaling-stroke" />
        </svg>
      </div>`;
  }
}
window.customElements.define('cagov-minus', CaGovMinus);
