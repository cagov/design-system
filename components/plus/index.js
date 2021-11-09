/**
 * Plus web component, inlines an svg plus symbol so it can be styled dynamically
 *
 * @element cagov-plus
 *
 */
export class CaGovPlus extends window.HTMLElement {
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
