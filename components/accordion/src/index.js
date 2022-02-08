import styles from './css/index.css';

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
 * @cssprop --primary-color - Default value of #1f2574, used for all colors of borders and fills
 * @cssprop --hover-color - Default value of #F9F9FA, used for background on hover
 *
 */
export class CaGovAccordion extends window.HTMLElement {
  connectedCallback() {
    this.summaryEl = this.querySelector('summary');
    // trigger the opening and closing height change animation on summary click
    this.summaryEl.addEventListener('click', this.listen.bind(this));
    this.summaryEl.insertAdjacentHTML(
      'beforeend',
      `<div class="cagov-open-indicator" aria-hidden="true" />`,
    );
    this.closedHeight = "3.1rem";
    if(this.dataset.cssHeight) {
      this.closedHeight = this.dataset.cssHeight;
    }

    this.detailsEl = this.querySelector('details');
    this.bodyEl = this.querySelector('.accordion-body');
    // apply initial height
    if (this.detailsEl.hasAttribute('open')) {
      // if open get scrollHeight
      this.detailsEl.style.height = `${parseInt(
        this.bodyEl.scrollHeight + 48,
        10,
      )}px`;
    } else {
      // else apply 3.1rem
      this.detailsEl.style.height = this.closedHeight;
    }
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
          this.bodyEl.scrollHeight + 48,
          10,
        )}px`;
      });
    }
  }
}
window.customElements.define('cagov-accordion', CaGovAccordion);

const style = document.createElement('style');
style.textContent = styles;
document.querySelector('head').appendChild(style);
