export class CaGovBackToTop extends window.HTMLElement {
    static get observedAttributes() { return ["data-hide-after", "data-label"]; }
    constructor() {
      super();
      // Support additional options
      let defaultOptions = {
        parentSelector: "#page-container",
        onLoadSelector: "body",
        scrollBottomThreshold: 10,
        scrollAfterHeight: 400, // Pixel height (after which, go-to-top behavior will start)
      };
      this.options = Object.assign({}, defaultOptions, {
        label: this.dataset.label || "Back to top",
        hideAfter: Number(this.dataset.hideAfter) || 7000, // 7 second initial display. (milliseconds)
      });
      this.state = {
        lastScrollTop: 0,
        timer: null,
      };
    }
  
    connectedCallback() {
      // Load go-to-top button
      document.querySelector(
        this.options.onLoadSelector
      ).onload = this.addGoToTopButton(this.options);
  
      // If a user scrolls down the page for more than the "scrollAfterHeight" (example: 400px), activate back to top button.
      // Otherwise, keep it invisible.
      window.addEventListener(
        "scroll",
        this.debounce(() => this.scrollToTopHandler(this.options, this.state), 200), // 1 second debounce delay
        false
      );
  
      // Reaching botton of the screen
      window.onscroll = this.debounce((e) => this.checkScrolledToBottom(e, this.state), 200)
    }
  
    checkScrolledToBottom(e, state) {
      let { timer } = state;
      var returnTopButton = document.querySelector(".back-to-top");
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        returnTopButton.classList.add("is-visible");
        clearTimeout(timer);
      }
    }
  
    // Returns a function, that, as long as it continues to be invoked, will not
    // be triggered. The function will be called after it stops being called for
    // N milliseconds. If `immediate` is passed, trigger the function on the
    // leading edge, instead of the trailing.
    debounce(func, wait, immediate) {
      var timeout;
      return function() {
        var context = this, args = arguments;
        var later = function() {
          timeout = null;
          if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
      };
    };
  
    attributeChangedCallback(name, oldValue, newValue) {
      if (name === "data-hide-after") {
        this.options.hideAfter = Number(newValue);
      }
      if (name === "data-label") {
        this.options.label = newValue;
        if (document.querySelector(".back-to-top") !== null) {
          document.querySelector(".back-to-top").innerHTML = this.options.label;
        }
      }
    }
  
    scrollToTopHandler(options, state) {
      let container = document.querySelector(this.options.parentSelector);
      let { lastScrollTop, timer } = state;
      var returnTopButton = document.querySelector(".back-to-top");
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > lastScrollTop) {
        // Downscroll code
        returnTopButton.classList.remove("is-visible");
      } else {
        // Upscroll code
        if (
          container.scrollTop >= options.scrollAfterHeight ||
          document.documentElement.scrollTop >= options.scrollAfterHeight
        ) {
          if (timer !== null) {
            clearTimeout(timer);
          }
          returnTopButton.classList.add("is-visible");
  
          timer = setTimeout(function () {
            returnTopButton.classList.remove("is-visible");
          }, options.hideAfter); // Back to top removes itself after 2 sec of inactivity
        } else {
          // Bottom of the page
          returnTopButton.classList.remove("is-visible");
        }
      }
  
      state.lastScrollTop =
        scrollTop <= 0
          ? 0
          : scrollTop; // For Mobile or negative scrolling
    }
  
  
    // Insert swg icon
    addStyle(element) {
      const svg = document.createElement("span");
      svg.setAttribute("aria-hidden", "true");
      svg.innerHTML  = `
      <svg version="1.1" x="0px" y="0px" width="21px" height="16px" viewBox="0 0 21 16" style="enable-background:new 0 0 21 16;" xml:space="preserve"><path d="M5.2,10.8l5.3-5.3l5.3,5.3c0.4,0.4,0.9,0.4,1.3,0c0.4-0.4,0.4-0.9,0-1.3l-5.9-5.9c-0.2-0.2-0.4-0.3-0.6-0.3S10,3.5,9.8,3.6 L3.9,9.5c-0.4,0.4-0.4,0.9,0,1.3C4.3,11.2,4.8,11.2,5.2,10.8z"/></svg> 
      `;
      element.insertBefore(svg, element.firstChild);
    }
  
    // Create go-to-top button
    addGoToTopButton(options) {
      // Create a new go-to-top span element with class "back-to-top"
      let container = document.querySelector(options.parentSelector);
  
      const returnTop = document.createElement("button");
      returnTop.classList.add("back-to-top");
      // returnTop.classList.add(options.classes);
      // Does not need to be accessible.
      // Screen Reader users have other options to get to the top.
      // returnTop.setAttribute("aria-hidden", "true");
  
      // Add some text to the go-to-top button
      const returnContent = document.createTextNode(options.label);
  
      // Append text to the go-to-top span
      returnTop.appendChild(returnContent);
      this.addStyle(returnTop);
      // Add the newly created element and its content into main tag
      container.append(returnTop);
  
      // Add on-click event
      returnTop.addEventListener("click", (options) =>
        this.goToTopFunction(options)
      );
    }
  
    goToTopFunction(options) {
      document.querySelector(this.options.onLoadSelector).scrollTop = 0; // For Safari
      // document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
      window.scroll({top: 0, behavior: "smooth"})
    }
  }
  
  window.customElements.define("cagov-back-to-top", CaGovBackToTop);
    