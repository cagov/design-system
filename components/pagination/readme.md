# Navigation components >> Pagination >> Readme || 10

This custom element renders a set of links to page through sets of items.


## Demo

```js script
import './dist/index.js';
import { html } from 'lit-html';
```

```js story
export const demo = () => html`
  <cagov-pagination data-current-page="5" data-total-pages="99"></cagov-pagination>`;
```

## Specs

| Property | Value |
| --- | --- |
| Machine name | ds-pagination |
| JavaScript | true |
| SCSS | ./src/scss/index.scss |

## Project installation

The instructions assume familiarity with [npm](https://npmjs.com) package management tool, modern JavaScript techniques, and [Sass](https://sass-lang.com/).

1. `npm i @cagov/[machine-name]`
2. Use `import`¹ or `require` to include **JavaScript**.  
3. Include **SCSS** in your Sass compiler.
4. Add the **Sample markup** to your HTML.
1. If directly importing, be sure to reference the js file at  `./dist/index.js`

¹ To use `import`, files must be served from a [webserver](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/What_is_a_web_server) such as Apache, Nginx, or [http-server](https://www.npmjs.com/package/http-server). The `file://` protocol will cause CORS errors in some browsers.

## Sample markup

```html
<cagov-pagination data-current-page="5" data-total-pages="99"></cagov-pagination>
```

## Data attributes
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

## Event registration
The component triggers custom events on page clicks. Subscribe to events on this element to watch for clicks. The following event format is sent on click:

```
new CustomEvent("paginationClick", {
  detail: this.currentPage - 1,
})
```
