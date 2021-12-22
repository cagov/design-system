# Structural components >> Page feedback >> Readme || 10

This custom element renders a question that defaults to: "Did you find this page useful?" on page with buttons to reply Yes/No and a separate comment field.

It accepts a required attribute for the endpoint to POST data to if the user submits a comment: ```data-endpoint-url=""```

It also accepts optional strings for all the text so it can be used in multiple languages:

```
data-question="Did you find what you were looking for?"
data-yes="Yes"
data-no="No"
data-comment-prompt="Additional comments:"
data-thanks-feedback="Thank you for your feedback!"
data-thanks-comments="Thank you for your comments!"
data-submit="Submit"
data-required-field="This field is required"
```

The Yes/No button interaction does not submit to the endpoint but triggers a separate custom event named ```ratedPage```. In our initial use case we listen for this event on the custom element from code outside this moduel and POST the value to google analytics.

## Demo

```js script
import './dist/index.js';
import { html } from 'lit-html';
```


```js story
export const demo = () => html`
  <cagov-feedback 
  data-endpoint-url="my-endpoint-url"
>
</cagov-feedback>`;
```

## Sample markup

```
<cagov-feedback 
  data-endpoint-url="my-endpoint-url"
>
</cagov-feedback>
```

## Install

Install the package into your production dependencies from npm:

```bash
npm i @cagov/ds-feedback
```

## Include javascript

Include the package in your javascript bundle:

```js
import @cagov/ds-feedback
```

## Sample markup

```
<cagov-feedback 
  data-endpoint-url="my-endpoint-url"
>
</cagov-feedback>
```