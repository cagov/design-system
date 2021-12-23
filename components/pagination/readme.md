# Navigation components >> Pagination >> Readme || 10

This custom element renders a set of links to page through sets of items.

It accepts attributes for the number of pages and current page. These are watched for changes and the component re-renders if these attributes change

```
data-current-page="5"
data-total-pages="99"
```

It also accepts optional strings for all the text so it can be used in multiple languages:

```
data-previous="Previous"
data-next="Next"
data-page="Page"
```

The component triggers custom events on page clicks. Subscribe to events on this element to watch for clicks. The following event format is sent on click:

```
new CustomEvent("paginationClick", {
  detail: this.currentPage - 1,
})
```

## Demo

```js script
import './dist/index.js';
import { html } from 'lit-html';
```

```js story
export const demo = () => html`
  <cagov-pagination data-current-page="5" data-total-pages="99"></cagov-pagination>`;
```

## Sample markup

```
<cagov-pagination data-current-page="5" data-total-pages="99"></cagov-pagination>
```

## Install

Install the package into your production dependencies from npm:

```bash
npm i @cagov/ds-pagination
```

## Include javascript

Include the package in your javascript bundle:

```js
import @cagov/ds-pagination
```


## Sample markup

Include this markup where you want the pagination element to appear

```
<cagov-pagination data-current-page="5" data-total-pages="99"></cagov-pagination>
```