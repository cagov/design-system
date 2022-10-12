var styles =
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
