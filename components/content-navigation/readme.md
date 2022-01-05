# Navigation components >> Page navigation >> Readme || 10

The content navigation component creates a set of anchor links based on the h2 headers available in the page and writes this list of links as its custom element contents.


<img src="https://raw.githubusercontent.com/cagov/design-system/main/components/content-navigation/content-navigation-screenshot.png" alt="content navigation component screenhsot"  />


## Specs

| Property | Value |
| --- | --- |
| Machine name | ds-content-navigation |
| JavaScript | true |
| SCSS | ./src/index.scss |

## Project installation

The instructions assume familiarity with [npm](https://npmjs.com) package management tool, modern JavaScript techniques, and [Sass](https://sass-lang.com/).

1. `npm i @cagov/[machine-name]`
2. Use `import`[¹](/footnotes/#footnote1) or `require` to include **JavaScript**.  
3. Include **SCSS** in your Sass compiler.
4. Add the **Sample markup** to your HTML.

## Sample markup

```html preview
<cagov-content-navigation 
  data-selector="main" 
  data-type="wordpress" 
  data-label="On this page"
>
</cagov-content-navigation>
```

## Data attributes

The following data attributes are used:

- data-selector: The query selector value to use to limit the search for headers to link
- data-type: If wordpress is provided here the component will wait for the DOMContentLoaded event before assembling list of headers
- data-label: The header value written above the list of links

## Contributor/developer documenation

Run: ```npm run start``` at the repository root to preview elements. This will launch local server with links to component demo pages.

The documentation is generated using the <a href="https://github.com/webcomponents/custom-elements-manifest">custom elements manifest schema</a> draft standard <a href="https://github.com/runem/web-component-analyzer">analyzer</a> command. Here is an example run outside the accordion directory:


```html preview
wca analyze src --format json --outFile custom-elements.json
```

## CSS variables

- var(--gray-200, #ededef)