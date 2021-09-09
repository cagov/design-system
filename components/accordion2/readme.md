# Accordion2

Welcome to the accordion2 component. This custom element is based on the original accordion custom element. Much has changed. Here's the list of revisions.

* Now uses the Shadow DOM.
* Encapsulates/isolates component styles from the main document. (CSS custom properties still cross the border.)
* Incorporates `<template>` and `<slot>` elements to *reflect* content.
* Includes other design-system dependencies in one single accordion package (ds-plus and ds-minus).

## Previous markup

```
<cagov-accordion>
  <div class="cagov-accordion-card">
    <button class="accordion-card-header accordion-alpha" type="button" aria-expanded="false">
      <div class="accordion-title">Lorem ipsum</div>
      <div class="plus-minus">
        <cagov-plus>
          <div class="accordion-icon" aria-hidden="true">
            <svg viewbox="0 0 25 25">
              <title>Plus</title>
              <line x1="6" y1="12.5" x2="19" y2="12.5" fill="none" stroke="currentColor" stroke-width="6" stroke-linecap="round" vector-effect="non-scaling-stroke" />
              <line y1="6" x1="12.5" y2="19" x2="12.5" fill="none" stroke="currentColor" stroke-width="6" stroke-linecap="round" vector-effect="non-scaling-stroke" />
            </svg>
          </div>
        </cagov-plus>
        <cagov-minus>
          <div class="accordion-icon" aria-hidden="true">
            <svg viewbox="0 0 25 25">
              <title>Minus</title>
              <line x1="6" y1="12.5" x2="19" y2="12.5"  fill="none" stroke="currentColor" stroke-width="6" stroke-linecap="round" vector-effect="non-scaling-stroke" />
            </svg>
          </div>
        </cagov-minus>
      </div>
    </button>
    <div class="accordion-card-container" aria-hidden=" true" style="height: 0px;">
      <div class="card-body">
        <p>Test content here.</p>
        <ul>
          <li>Any content...</li>
          <li>...will work.</li>
        </ul>
      </div>
    </div>
  </div>
</cagov-accordion>
```

## New markup 

```
<cagov-accordion>
  <h2 slot="heading">Lorem ipsum</h2>
  <p>Test content here.</p>
  <ul>
    <li>Any content...</li>
    <li>...will work.</li>
  </ul>
</cagov-accordion>
```

Add an `expanded` attribute to auto-open the accordion.

```
<cagov-accordion expanded>
  <h3 slot="heading">Expanded Lorem ipsum</h3>
  <p>More test content.</p>
</cagov-accordion>
```

## Pros

* Greatly simplifies the component's markup for usage by outside developers. I think this markup meets or even exceeds the simplicity of common competition, like Bootstrap.
* Accepts any heading tag (`h1`, `h2`, `h3`, etc.) in the `heading` slot. The compenent user can maintain proper document heading hierarchy by using whichever heading tag fits.
* Protects the component's internal styles and execution from the host document.
* Content can still be fully styled by the component user, without messing with the Shadow DOM.
* Potentially easier to distribute code updates. Component users may not need to update their markup if it's just content.
* The Rollup can output to different JS formats. We could provide modules to modern developers, while still providing RequireJS-style code to legacy apps that may not have a front-end JS build system. 

## Cons

* This represents a huge breaking change. We'd probably need to do a lot of work across sites, tools, and content.
* The Shadow DOM is weird. Styling it can be weird. We may not like it. We may need to train each other on how it works. (The component user wouldn't need to worry about any of this, just us as component developers.)
* The component's styles are totally jettisoned if the custom element does not initialize. (The component user's content styles would still work in this scenario.)

## Progressive enhancement

This is a significantly different approach to progressive enhancement. 

The old markup preserves as much of the component's HTML and styles as possible when the custom element fails to load, because we're including that mechanical markup in usage. This means the component will still look more-or-less the same without JS. 

The new markup does not include the component's mechanical HTML and styles in usage. It's only applied by the custom element. The component user only supplies content. So if the custom element doesn't load, there's nothing to fall back on except simplified, semantic HTML content. 

I do prefer this new approach. It keeps our content clean. It presents interesting opportunities for future inclusive features, such as "Reader" or "Print" modes. But the new approach may be in conflict with expectations and preferences regarding how the page looks when JS fails, or possible FOUC. We might need some discussion around this.