# Structural components >> Page feedback >> Readme || 10

This custom element renders a question that defaults to: "Did you find this page useful?" on page with buttons to reply Yes/No and a separate comment field.


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

## Specs

| Property | Value |
| --- | --- |
| Machine name | ds-feedback |
| JavaScript | true  |
| SCSS | ./src/css/index.scss |

## Project installation

The instructions assume familiarity with [npm](https://npmjs.com) package management tool, modern JavaScript techniques, and [Sass](https://sass-lang.com/).

1. `npm i @cagov/[machine-name]`
2. Use `import`[¹](https://www.notion.so/Footnotes-02994454560b483db87e934be4c19037) or `require` to include **JavaScript**.  
3. Include **SCSS** in your Sass compiler.
4. Add the **Sample markup** to your HTML.

## Sample markup

```html
<cagov-feedback 
  data-endpoint-url="my-endpoint-url"
>
</cagov-feedback>
```

## Data attributes

Required

```
data-endpoint-url=
```


Optional

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

## Other information

- The page feedback component requires the `data-endpoint-url=""` attribute for the endpoint to POST data to if the user submits a comment.
- The component also accepts optional text strings to support multiple languages.
- If you use the endpoint from the markup, data will be collected in a central Office of Digital Innovation (ODI) database and can be retrieved via API or Google Data Studio dashboard.
- The endpoint URL for any state website is supplied by ODI and can be obtained upon request.
- If you want to use this frontend component with your own backend service you can supply your own endpoint and the page feedback web component will POST the following fields on submit: `comment`, `helpful`, `url`, `userAgent`
- The component will send Google Analytics events when the initial Yes/No buttons are clicked and will submit the full form response including the comment, whether they clicked that the page was helpful or not and their user agent.
