/**
 * Minus web component, inlines an svg minus symbol so it can be styled dynamically
 *
 * @element cagov-minus
 *
 */
export class CaGovMinus extends window.HTMLElement {
  connectedCallback() {
    this.innerHTML = `<div class="accordion-icon" aria-hidden="true">
        <svg viewbox="0 0 25 25">
            <title>Minus</title>
            <line x1="6" y1="12.5" x2="19" y2="12.5"  fill="none" stroke="currentColor" stroke-width="6" stroke-linecap="round" vector-effect="non-scaling-stroke" />
        </svg>
      </div>`;
  }
}
window.customElements.define('cagov-minus', CaGovMinus);
