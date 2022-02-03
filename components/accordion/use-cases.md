# Accordion use cases

## Open/closed

### Starts closed

```js script
import './dist/index.js';
import { html } from 'lit-html';
```

```js story
export const demoOpen = () => html`
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
### Specify open to start opened

Add the attribute ```aria=expanded=true``` to the markup element with the class ```accordion-card-header``` to specify that the accordion should display as open initially so the internal contents will be visible.

```js story
export const demoClosed = () => html`
  <cagov-accordion>
    <div class="cagov-accordion-card">
      <button class="accordion-card-header accordion-alpha" type="button" aria-expanded="true">
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
## Used on

### covid19.ca.gov

### alpha.ca.gov

<img src="https://github.com/cagov/storybook-ca-gov/raw/main/packages/%40cagov/accordion/stories/accordion.png" />
