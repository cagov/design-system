import { html, nothing } from "lit-html";
import "./../src";

/**
 * Primary UI component for user interaction
 */
export const WebComponent = ({
  expanded = false,
  accordionLabel = "Accordion label",
  accordionContent = "Accordion content",
}) => {
  return html`
    <cagov-accordion>
      <div class="card">
        <button
          class="card-header accordion-alpha"
          type="button"
          aria-expanded="${expanded}"
        >
          <div class="accordion-title">
            <h4>${accordionLabel}</h4>
          </div>
          <div class="plus-minus">
            <cagov-plus></cagov-plus><cagov-minus></cagov-minus>
          </div>
        </button>
        <div
          class="card-container"
          aria-hidden="${!expanded}"
          style="height: 0px;"
        >
          <div class="card-body">${accordionContent}</div>
        </div>
      </div>
    </cagov-accordion>
  `;
};

export const MultipleWebComponent = ({
  accordions = [
    {
      accordionLabel: "Accordion1 label",
      accordionContent: "Accordion1 content",
      expanded: false,
    },
    {
      accordionLabel: "Accordion2 label",
      accordionContent: "Accordion2 content",
      expanded: true,
    },
    {
      accordionLabel: "Accordion3 label",
      accordionContent: "Accordion3 content",
      expanded: false,
    },
  ],
}) => {
  return html`
  <div class="header">
    <h2>Compare minimum wage across cities</h2>
    <p>These California cities and counties have their own minimum wage laws.</p>
  </div>
  ${accordions.map((item, i) => [
    html`<div>
      <cagov-accordion>
        <div class="card">
          <button
            class="card-header accordion-alpha"
            type="button"
            aria-expanded="${item.expanded}"
          >
            <div class="accordion-title">
              <h4>${item.accordionLabel}</h4>
            </div>
            <div class="plus-minus">
              <cagov-plus></cagov-plus><cagov-minus></cagov-minus>
            </div>
          </button>
          <div
            class="card-container"
            aria-hidden="${!item.expanded}"
            style="height: 0px;"
          >
            <div class="card-body">${item.accordionContent}</div>
          </div>
        </div>
      </cagov-accordion>
    </div>`,
    i < item.length - 1 ? "," : nothing,
  ])}`;
};

export const MultipleWebComponentLongPage = ({
  accordions = [
    {
      accordionLabel: "Accordion1 label",
      accordionContent: "Accordion1 content",
      expanded: false,
    },
    {
      accordionLabel: "Accordion2 label",
      accordionContent: "Accordion2 content",
      expanded: true,
    },
    {
      accordionLabel: "Accordion3 label",
      accordionContent: "Accordion3 content",
      expanded: false,
    },
  ],
}) => {
  return html`<main style="background:black;height:6000px">
  <div class="accordion-container" style="background:light-gray;height:3000px">${accordions.map((item, i) => [
    html`<div>
      <cagov-accordion>
        <div class="card">
          <button
            class="card-header accordion-alpha"
            type="button"
            aria-expanded="${item.expanded}"
          >
            <div class="accordion-title">
              <h4>${item.accordionLabel}</h4>
            </div>
            <div class="plus-minus">
              <cagov-plus></cagov-plus><cagov-minus></cagov-minus>
            </div>
          </button>
          <div
            class="card-container"
            aria-hidden="${!item.expanded}"
            style="height: 0px;"
          >
            <div class="card-body">${item.accordionContent}</div>
          </div>
        </div>
      </cagov-accordion>
    </div>`,
    i < item.length - 1 ? "," : nothing,
  ])}</div></main>`;
};
