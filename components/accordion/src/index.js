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
 * @cssprop --primary-700 - Default value of #165ac2, used for all colors of borders and fills
 * @cssprop --primary-900 - Default value of #003588, used for background on hover
 *
 */
export class CaGovAccordion extends window.HTMLElement {
  constructor() {
    super();

    if (!document.querySelector('#cagov-accordion-styles')) {
      const style = document.createElement('style');
      style.id = 'cagov-accordion-styles';
      style.textContent = styles;
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
