# Content navigation

The content navigation component creates a set of anchor links based on the h2 headers available in the page and writes this list of links as its custom element contents.


<img src="https://raw.githubusercontent.com/cagov/design-system/main/components/content-navigation/content-navigation-screenshot.png" alt="content navigation component screenhsot"  />


## Sample markup

```
<cagov-content-navigation 
  data-selector="main" 
  data-type="wordpress" 
  data-label="On this page"
>
</cagov-content-navigation>
```

### Attributes

The following data attributes are used:

- data-selector: The query selector value to use to limit the search for headers to link
- data-type: If wordpress is provided here the component will wait for the DOMContentLoaded event before assembling list of headers
- data-label: The header value written above the list of links

## Docs

Run: ```npm run start``` at the repository root to preview elements. This will launch local server with links to component demo pages.

The documentation is generated using the <a href="https://github.com/webcomponents/custom-elements-manifest">custom elements manifest schema</a> draft standard <a href="https://github.com/runem/web-component-analyzer">analyzer</a> command. Here is an example run outside the accordion directory:

```
wca analyze src --format json --outFile custom-elements.json
```

## CSS Variables

- var(--gray-200, #ededef)