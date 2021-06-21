# Was this page helpful

This custom element renders an on page form with buttons to reply Yes/No and a separate comment field.

It accepts a required attribute for the endpoint to POST data to if the user submits a comment: ```data-endpoint-url=""```

It also accepts optional strings for all the text so it can be used in multiple languages:

```
data-question
data-yes="Yes"
data-no="No"
data-comment-prompt="Additional comments:"
data-thanks-feedback="Thank you for your feedback!"
data-thanks-comments="Thank you for your comments!"
data-submit="Submit"
data-required-field="This field is required"
```

The Yes/No button interaction does not submit to the endpoint but triggers a separate custom event named ```ratedPage```. In our initial use case we listen for this event on the custom element from code outside this moduel and POST the value to google analytics.

<img src="https://raw.githubusercontent.com/cagov/Alpha/master/components/pagerating/is-this-page-useful.png" />


## Sample markup

```
<cwds-pagerating 
  data-endpoint-url="https://fa-go-alph-d-001.azurewebsites.net/WasHelpful"
>
</cwds-pagerating>
```
