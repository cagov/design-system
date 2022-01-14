var styles =
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
const style = document.createElement('style');
style.textContent = styles;
document.querySelector('head').appendChild(style);

export { CaGovAccordion };
