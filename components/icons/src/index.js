export class CAGovIcon extends window.HTMLElement {
  connectedCallback() {
    this.icon = this.dataset.icon;
    this.sr = this.dataset.sr;
    this.template();
  }

  template() {
    // Create svg.
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');

    if (this.sr) {
      // Functional.
      const title = document.createElement('title');
      title.textContent = this.sr;
      svg.append(title);
      svg.setAttribute('role', 'img');
    } else {
      // Decorative.
      svg.setAttribute('aria-hidden', 'true');
    }

    // Create use element.
    const use = document.createElementNS('http://www.w3.org/2000/svg', 'use');
    use.setAttributeNS(
      'http://www.w3.org/1999/xlink',
      'xlink:href',
      `#${this.icon}`,
    );

    // Append svg and use.
    svg.append(use);
    this.appendChild(svg);
  }
}
window.customElements.define('cagov-icon', CAGovIcon);
