import styles from './styles.module.css';
import html from './card.template.html';

import { CaGovPlus } from '@cagov/ds-plus';
import { CaGovMinus } from '@cagov/ds-minus';

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

    this.attachShadow({mode: "open"})
    this.shadowRoot.append(template.content.cloneNode(true));

    if (this.hasAttribute('expanded')) {
      this.shadowRoot.querySelector('.accordion-card-header').setAttribute('aria-expanded', 'true');
    }
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
    })
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
    this.removeAttribute('expanded', '');
    this.removeTabStops();
  }

  expandAccordion() {
    this.expandTarget.style.height = this.cardBodyHeight + 'px';
    this.expandTarget.setAttribute('aria-hidden', 'false');
    this.shadowRoot.querySelector('.accordion-card-header').classList.add('accordion-alpha-open');
    this.shadowRoot.querySelector('.accordion-card-container').classList.remove('collapsed');
    this.activateButton.setAttribute('aria-expanded', 'true');
    this.setAttribute('expanded', '');
    this.restoreTabStops();
  }

}

window.customElements.define('cagov-accordion', CaGovAccordion);

export default { CaGovAccordion, CaGovPlus, CaGovMinus }
