# Accordion

This Custom Element recreates the bootstrap accordion component functionality without the jquery dependency.

It is designed for use on https://covid19.ca.gov.

<img src="https://github.com/cagov/storybook-ca-gov/raw/main/packages/%40cagov/accordion/stories/accordion.png" />

```html preview
<script type="module" src="/builds/accordion-esm.js"></script>
```

# Demo

```html preview
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

## Specs

| Property | Value |
| --- | --- |
| Machine name | ds-accordion  |
| JavaScript | true |
| Sass  | ./src/index.scss |

## Project installation

The instructions assume familiarity with [npm](https://npmjs.com) package management tool, modern JavaScript techniques, and [Sass](https://sass-lang.com/).

1. `npm i @cagov/[machine-name]`
2. Use `import`[¹](/footnotes/#footnote1) or `require` to include **JavaScript**.  
3. Include **SCSS** in your Sass compiler.
4. Add the **Sample markup** to your HTML.

## Contributor/developer documentation

Run: ```npm run start``` to preview elements. This will launch local server with links to component demo pages.

The documentation is generated using the <a href="https://github.com/webcomponents/custom-elements-manifest">custom elements manifest schema</a> draft standard <a href="https://github.com/runem/web-component-analyzer">analyzer</a> command. Here is an example run outside the accordion directory:

```
wca analyze accordion --format json --outFile accordion/custom-elements.json
```

Then the <a href="https://github.com/web-padawan/api-viewer-element">api viewer element</a> references the generated custom-elements.json and builds a live preview playground with docs.