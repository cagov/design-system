# Accordion2

Welcome to the accordion2 component. This custom element is based on the original accordion custom element. Much has changed. Here's the list of revisions.

* Now uses the Shadow DOM.
* Encapsulates/isolates component styles from the main document. (CSS custom properties still cross the border.)
* Incorporates `<template>` and `<slot>` elements to *reflect* content.

## Previous markup

```
<cagov-accordion>
  <div class="cagov-accordion-card">
    <button class="accordion-card-header accordion-alpha" type="button" aria-expanded="false">
      <div class="accordion-title">Lorem ipsum</div>
      <div class="plus-minus">
        <cagov-plus></cagov-plus>
        <cagov-minus></cagov-minus>
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
  <h2 slot="heading">Expanded Lorem ipsum</h2>
  <p>More test content.</p>
</cagov-accordion>
```

## Pros

* Greatly simplifies the component's markup for usage by outside developers. I think this markup meets or even exceeds common competition, like Bootstrap.
* Accepts any heading tag (`h1`, `h2`, `h3`, etc.) in the `heading` slot. The compenent user can maintain proper document heading hierarchy by using whichever heading tag fits.
* Protects the component's internal styles and execution from the host document.
* Content can still be fully styled by the component user, without messing with the Shadow DOM.
* The Rollup can output to different JS formats. We could provide modules to modern developers, while still providing RequireJS-style code to legacy apps that may not have a front-end JS build system. 

## Cons

* This represents a huge breaking change. We'd probably need to do a lot of work across sites, tools, and content.
* The Shadow DOM is weird. Styling it can be weird. We may not like it. We may need to train each other on how it works. (The component user wouldn't need to worry about any of this, just us as component developers.)
* The component's styles are totally jettisoned if the custom element does not initialize. (The component user's content styles would still work in this scenario.)

## Progressive enhancement

This is a significantly different approach to progressive enhancement. 

The old markup preserves as much of the component's HTML and styles as possible when the custom element fails to load, because we're including that markup in usage. This means the component will still look more-or-less the same without JS. 

The new markup does not include the component's mechanical HTML and styles in usage. It's only applied by the custom element. The component user only supplies content. So if the custom element doesn't load, there's nothing to fall back on except simplified, semantic HTML content. 

I do prefer this new approach. It keeps our content clean. It makes usage easy. It makes component updates easier. It presents interesting opportunities for future inclusive features, such as "Reader" or "Print" modes. But the new approach may be in conflict with expectations and preferences regarding how the page looks when JS fails, or possible FOUC. We might need some discussion around this.