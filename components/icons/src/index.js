export class CAGovIcon extends window.HTMLElement {
  connectedCallback() {
    this.icon = this.dataset.icon;
    this.template();
  }

  template() {
    console.log(this.icon);
    this.innerHTML = `<svg aria-hidden="true"><use href="#${this.icon}"/><svg>`;
  }
}
window.customElements.define('cagov-icon', CAGovIcon);
