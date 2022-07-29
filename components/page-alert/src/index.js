/**
 * Page Alert web component
 * Supported endpoints: Wordpress v2
 */

import styles from './index.css';

console.log(styles);

class CAGovPageAlert extends window.HTMLElement {
  constructor() {
    super();

    if (!document.querySelector('#cagov-page-alert-styles')) {
      const style = document.createElement('style');
      style.id = 'cagov-page-alert-styles';
      style.textContent = styles;
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
