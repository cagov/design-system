# Page feedback

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

<img src="https://raw.githubusercontent.com/cagov/design-system/main/components/feedback/is-this-page-useful.png" />


## Sample markup

```
<cagov-feedback 
  data-endpoint-url="my-endpoint-url"
>
</cagov-feedback>
```


## Docs

Run: ```npm run start``` at the repository root to preview elements. This will launch local server with links to component demo pages.

The documentation is generated using the <a href="https://github.com/webcomponents/custom-elements-manifest">custom elements manifest schema</a> draft standard <a href="https://github.com/runem/web-component-analyzer">analyzer</a> command. Here is an example run outside the accordion directory:

```
wca analyze src --format json --outFile custom-elements.json
```

Then the <a href="https://github.com/web-padawan/api-viewer-element">api viewer element</a> references the generated custom-elements.json and builds a live preview playground with docs.