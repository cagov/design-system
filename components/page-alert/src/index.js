/**
 * Page Alert web component
 * Supported endpoints: Wordpress v2
 */
class CAGovPageAlert extends window.HTMLElement {
  connectedCallback() {
    this.message = this.dataset.message || '';
    this.icon = this.dataset.icon || '';

    this.template({ message: this.message, icon: this.icon });
    document
      .querySelector('cagov-page-alert .close-button')
      .addEventListener('click', () => {
        document.querySelector('.cagov-page-alert').setAttribute("aria-hidden", "true");
        document.querySelector('cagov-page-alert .close-button').setAttribute("tabindex", "-1");
        document.querySelector('cagov-page-alert').style.display = 'none';

      });
  }

  template(data) {
    if (data !== undefined && data !== null && data.content !== null) {
      this.innerHTML = `<div class="cagov-page-alert cagov-stack"><div class="icon" aria-hidden="true"><span class="${this.icon}"></span></div>
        <div class="body">${this.message}</div>
        <button class="close-button"><span class="ca-gov-icon-close-line" aria-hidden="true"></span><span class="visually-hidden">Dismiss page alert</span></button></div>`;
    }

    return null;
  }
}

if (customElements.get('cagov-page-alert') === undefined) {
  window.customElements.define('cagov-page-alert', CAGovPageAlert);
}
