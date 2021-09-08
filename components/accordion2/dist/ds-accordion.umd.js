(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.accordion = factory());
}(this, (function () { 'use strict';

  var styles = "/* accordion component specific classes */\r\n.cagov-accordion-card {\r\n  border-radius: .3rem !important;\r\n  margin-bottom: 0;\r\n  min-height: 3rem;\r\n  margin-top: .5rem;\r\n  border: solid 1px #ededef !important;\r\n}\r\n\r\n.accordion-card-container {\r\n  display: block;\r\n  overflow: hidden;\r\n}\r\n\r\nbutton.accordion-card-header {\r\n  display: flex;\r\n  justify-content: left;\r\n  align-items: center;\r\n  padding: 0 0 0 1rem;\r\n  background-clip: border-box;\r\n  background-color: #EDEDEF;\r\n  border: none;\r\n  position: relative;\r\n  width: 100%;\r\n  line-height: 3rem;\r\n}\r\n\r\nbutton.accordion-card-header {\r\n  cursor:pointer;\r\n}\r\n\r\n.accordion-title {\r\n  text-align: left;\r\n  margin-bottom: 0;\r\n  color: var(--primary-color, #064E66);\r\n  margin-right: auto;\r\n  width: 90%;\r\n  padding: 0 0.5rem 0 0 !important;\r\n  font-size: 1.125rem;\r\n  font-weight: bold;\r\n}\r\n\r\n.accordion-card-container {\r\n  height: 0px;\r\n  transition: height 0.3s ease;\r\n}\r\n.accordion-card-container .card-body {\r\n  padding-left: 1rem;\r\n  margin-top: 8px;\r\n}\r\n\r\n.accordion-card-container .card-body ul {\r\n  margin-left: 16px;\r\n  margin-right: 16px;\r\n}\r\n\r\n.collapsed {\r\n  display: block;\r\n  overflow: hidden;\r\n  visibility: hidden;\r\n}\r\n\r\n.accordion-title ::slotted(*) {\r\n  padding: 0 !important;\r\n  margin-top: 0 !important;\r\n  margin-bottom: 0 !important;\r\n  font-size: 1.2rem !important;\r\n  font-weight: 700;\r\n  color: var(--primary-color, #064E66);\r\n  text-align: left !important;\r\n}\r\n\r\nbutton.accordion-card-header:hover {\r\n  background-color: var(--hover-color, #F9F9FA);\r\n}\r\nbutton.accordion-card-header:hover .accordion-title {\r\n  text-decoration: underline;\r\n}\r\nbutton.accordion-card-header:hover .accordion-title:hover {\r\n  text-decoration: underline;\r\n}\r\n\r\nbutton.accordion-card-header:focus {\r\n  outline-offset: -2px;\r\n}\r\n\r\n.accordion-icon svg line {\r\n  stroke-width: 4px;  \r\n}\r\n\r\n.accordion-alpha .plus-minus {\r\n  width: 2.125rem;\r\n  height: 2.125rem;\r\n  border: none;\r\n  overflow: hidden;\r\n  margin-left: 1rem;\r\n  color: var(--primary-color, #064E66);\r\n  align-self: flex-start;\r\n  margin-top: 8px;\r\n}\r\n\r\n.accordion-alpha .plus-minus svg {\r\n  fill: var(--primary-color, #064E66);\r\n  width: 25px;\r\n  height: 25px;\r\n}\r\n\r\n.accordion-alpha-open cagov-plus .accordion-icon {\r\n  display: none !important;\r\n}\r\n.accordion-alpha-open cagov-minus .accordion-icon {\r\n  display: block !important;\r\n}\r\n\r\n@media only screen and (max-width: 767px) {\r\n  .accordion-alpha-open + .accordion-card-container {\r\n    height: 100% !important;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=index.css.map */\r\n";

  var html = "<div class=\"cagov-accordion-card\">\r\n  <button class=\"accordion-card-header accordion-alpha\" type=\"button\" aria-expanded=\"false\">\r\n    <div class=\"accordion-title\">\r\n      <slot name=\"heading\">Click to expand</slot>\r\n    </div>\r\n    <div class=\"plus-minus\">\r\n      <cagov-plus></cagov-plus>\r\n      <cagov-minus></cagov-minus>\r\n    </div>\r\n  </button>\r\n  <div class=\"accordion-card-container\" aria-hidden=\" true\" style=\"height: 0px;\">\r\n    <div class=\"card-body\">\r\n      <slot></slot>\r\n    </div>\r\n  </div>\r\n</div>";

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

  /**
   * Accordion web component that collapses and expands content inside itself on click.
   * 
   * @element cagov-accordion
   * 
   * @prop {class string} prog-enhanced - The element is open before any javascript executes so content can be read if an error occurs that prevents js execution. The prog-enhanced class is added to the element once javascript begins to execute. This triggers default collabsed state.
   * 
   * @fires click - Default value, will be defined by this.dataset.eventType.
   * 
   * @attr {string} [data-event-type=click] - dataset defined value for event type fired on click.
   * @attr {string} aria=expanded=true - set on the internal element .accordion-card-header. If this is true the accordion will be open before any user interaction.
   * 
   * @cssprop --primary-color - Default value of #1f2574, used for all colors of borders and fills
   * @cssprop --hover-color - Default value of #F9F9FA, used for background on hover
   * 
   */
  class CaGovAccordion extends window.HTMLElement {
    constructor() {
      super();

      let template = document.createElement('template');
      template.innerHTML = html;

      let style = document.createElement('style');
      style.append(styles);
      template.content.prepend(style);

      this.attachShadow({mode: "open"});
      this.shadowRoot.append(template.content.cloneNode(true));
    }

    connectedCallback() {
      this.expandTarget = this.shadowRoot.querySelector('.accordion-card-container');
      this.expandButton = this.shadowRoot.querySelector('.accordion-card-header');
      this.contentSlot = this.shadowRoot.querySelector('.card-body slot');

      if(this.expandButton) {
        this.expandButton.addEventListener('click', this.listen.bind(this));
      }
      this.activateButton = this.shadowRoot.querySelector('.accordion-card-header');
      this.eventType = this.dataset.eventType ? this.dataset.eventType : 'click';

      // Detect if accordion should open by default
      this.contentSlot.addEventListener('slotchange', (e) => {
        let expanded = this.activateButton.getAttribute('aria-expanded');

        if (expanded === "true") {
          this.triggerAccordionClick(); // Open the accordion.
          this.restoreTabStops();
        }
        else {
          this.removeTabStops();
        }
      });
    }

    removeTabStops() {
      let allLinks = this.querySelectorAll("a, button");
      allLinks.forEach(node => node.setAttribute('tabindex', '-1'));
    }

    restoreTabStops() {
      let allLinks = this.querySelectorAll("a, button");
      allLinks.forEach(node => node.removeAttribute("tabindex"));
    }

    listen() {
      if (!this.cardBodyHeight) {
        this.cardBodyHeight = this.shadowRoot.querySelector('.card-body').clientHeight + 24;
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
        cancelable: true
      });
      this.expandButton.dispatchEvent(event);
    }

    closeAccordion() {
      this.expandTarget.style.height = '0px';
      this.expandTarget.setAttribute('aria-hidden', 'true');
      this.shadowRoot.querySelector('.accordion-card-header').classList.remove('accordion-alpha-open');
      this.activateButton.setAttribute('aria-expanded', 'false');
      this.removeTabStops();
    }

    expandAccordion() {
      this.expandTarget.style.height = this.cardBodyHeight + 'px';
      this.expandTarget.setAttribute('aria-hidden', 'false');
      this.shadowRoot.querySelector('.accordion-card-header').classList.add('accordion-alpha-open');
      this.shadowRoot.querySelector('.accordion-card-container').classList.remove('collapsed');
      this.activateButton.setAttribute('aria-expanded', 'true');
      this.restoreTabStops();
    }

  }

  window.customElements.define('cagov-accordion', CaGovAccordion);

  var main = { CaGovAccordion, CaGovPlus, CaGovMinus };

  return main;

})));
