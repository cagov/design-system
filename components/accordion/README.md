# Content components >> Accordion >> Readme || 10

The accordion element allows for sections of text to be collapsed or expanded on click.

## Accessibility

The clickable element in the accordion is a standard button. Content inside the accordion is prevented from being focused on unless the accordion has been opened, then any elements inside the content are allowed to be focused normally so they can be reached via tabbing.

## Progressive enhancement

This component will default to open so if no script on the page executes the visitor will not be blocked from viewing content. Once the javascript executes the accordion collapses to the desired state. 

```js script
import './dist/index.js';
import { html } from 'lit-html';
```

```js story
export const demo = () => html`
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
          <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf
            moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
            Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda
            shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea
            proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim
            aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
        </div>
      </div>
    </div>
  </cagov-accordion>`;
```

## Install

Install the package into your production dependencies from npm:

```bash
npm i @cagov/accordion
```

## Include

Import into your javascript bundle:

```js
import @cagov/accordion
```

## Sample markup

Include the markup in your page content

```html
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
        <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf
          moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
          Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda
          shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea
          proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim
          aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
      </div>
    </div>
  </div>
</cagov-accordion>
```

## Custom elements manifest

The custom elements manifest documentation is generated using the <a href="https://github.com/webcomponents/custom-elements-manifest">custom elements manifest schema</a> draft standard <a href="https://github.com/runem/web-component-analyzer">analyzer</a> command. Here is an example run outside the accordion directory:

```
wca analyze accordion --format json --outFile accordion/custom-elements.json
```
