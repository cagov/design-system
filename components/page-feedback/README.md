# Page feedback

The page feedback component lets people react to specific pages on your website. It puts the question, "Did you find this page useful?" above the department footer on every page. It has buttons to reply **Yes** or **No**, followed by a comment field.

The page feedback component is intended to:

- Let people point out bugs or out-of-date content
- Inform iterations to content pages
- Determine hierarchy and priority of information
- Identify themes in user sentiment
- Pinpoint missing or confusing content
- Identify specific spikes in feedback related to events

Page feedback responses are collected in a Google Analytics report. It does not collect information about the people who submit feedback.

## When and how to use it

When you install the page feedback component, it's automatically added to every page on your site.

Monitor the information you receive through page feedback so you know user sentiment and can catch problems early.

We're still working on data services that supports the page feedback component. If you're interested in using page feedback, [reach out through the Contact us page](/contact-us). We'd like to hear more about your needs as we work on these services.

### How not to use it

Do not use the page feedback component on pages that are part of a transactional process flow. This can distract people from finishing their task.

## Demo and sample markup

<html-preview>

```html preview
<cagov-page-feedback data-endpoint-url="https://fa-go-feedback-001.azurewebsites.net/sendfeedback"></cagov-page-feedback>
```

</html-preview>

## Specs

| Property     | Value                |
| ------------ | -------------------- |
| Machine name | ds-feedback          |
| JavaScript   | yes                  |
| SCSS         | ./src/css/index.scss |

## Project installation

The instructions assume familiarity with [npm](https://npmjs.com) package management tool, modern JavaScript techniques, and [Sass](https://sass-lang.com/).

1. `npm i @cagov/ds-page-feedback`
2. Use `import`[¹](/footnotes/#footnote1) or `require` to include the component’s **JavaScript** in your page or compiler.
3. Add the **sample markup** to your HTML.
4. Refer to the [Content model section](#content-model) for notes on mapping your data to the **sample markup**.

### Other information

- The page feedback component requires the `data-endpoint-url=""` attribute for the endpoint to POST data to if the user submits a comment.
- The component also accepts optional text strings to support multiple languages.
- If you use the endpoint from the markup, data will be collected in a central Office of Digital Innovation (ODI) database and can be retrieved via API or Google Data Studio dashboard.
- The endpoint URL for any state website is supplied by ODI and can be obtained upon request.
- If you want to use this frontend component with your own backend service you can supply your own endpoint and the page feedback web component will POST the following fields on submit: `comment`, `helpful`, `url`, `userAgent`
- The component will send Google Analytics events when the initial Yes/No buttons are clicked and will submit the full form response including the comment, whether they clicked that the page was helpful or not and their user agent.

## CSS variables

The following [CSS variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) are used in this component:

- `--w-lg`
- `--s-1`
- `--s-2`
- `--border-1`
- `--border-2`
- `--radius-2`
- `--font-size-2`
- `--font-weight-6`
- `--font-lineheight-3`
- `--white`
- `--gray-200`
- `--accent2-500`
- `--primary-900`


All CSS variables define their own fallback value so you do not have to use additional CSS unless you want to change them. You may define your own value for the variable by adding your own style rules. Here is an example defining the global hex value for a CSS variable named “--primary-700”:

```css
:root {
  --primary-700: #165ac2;
}
```

## Accessibility

### Component-specific accessibility review

- Make sure that add feedback `textarea` has `id` attribute that is referenced in its label’s `for` attribute.
- Make sure that page feedback buttons and input fields have solid, 2px outline that uses `--accent2-500` variable on focused state.

### Standard accessibility review

As a component in Alpha status, this component must pass the following accessibility reviews every time a new version is published:

- Tested with the [axe](https://www.deque.com/axe/) accessibility tool and passes all automated [WCAG](https://www.w3.org/TR/WCAG21/) Level AA checks
- Reviewed with the [VoiceOver](https://www.apple.com/voiceover/info/guide/_1121.html) screen reader on desktop
- Verified keyboard navigation and that all actionable elements of the component are reachable via keyboard commands only
- Reviewed component layout on a variety of screen sizes

## Progressive enhancement

This component uses a [custom element](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements) defined in JavaScript in addition to HTML and CSS. Edge, Firefox, Safari, and Chrome support custom elements. If the JavaScript for this component is not delivered or supported, the component will not display. This is the desired behavior because this component is not critical for site interaction. It uses [CSS variables](<https://developer.mozilla.org/en-US/docs/Web/CSS/var()#syntax>) to inherit design token values. Token definitions are not required because these style rules provide fallback values.

<a name="content-model"></a>

## Content model

This component uses the following data attributes. We provide this information to help with integrating the component into backend publishing systems or identifying content that may require translation.

| Name                        | Attribute name             | Data type | Field type | Description                                                               |
| --------------------------- | -------------------------- | --------- | ---------- | ------------------------------------------------------------------------- |
| Endpoint URL                | data-endpoint-url          | string    | URL        | Required field. Endpoint used to POST data if the user submits a comment. |
| Question label              | data-question              | string    | Plain text | Did you find what you were looking for?                                   |
| Yes label                   | data-yes                   | string    | Plain text | Yes                                                                       |
| No label                    | data-no                    | string    | Plain text | No                                                                        |
| Comment prompt              | data-commentPrompt         | string    | Plain text | What was the problem?                                                     |
| Positive comment prompt     | data-positiveCommentPrompt | string    | Plain text | Great! What were you looking for today?                                   |
| Thanks for feedback message | data-thanksFeedback        | string    | Plain text | Thank you for your feedback!                                              |
| Thanks for comments message | data-thanksComments        | string    | Plain text | Thank you for your comments!                                              |
| Submit button label         | data-submit                | string    | Plain text | Submit                                                                    |
| Required field label        | data-requiredField         | string    | Plain text | This field is required                                                    |
| Comment prompt label        | data-anythingToAdd         | string    | Plain text | If you have anything to add                                               |
| Additional feedback label   | data-anyOtherFeedback      | string    | Plain text | If you have any other feedback about this website                         |

Values that this component will post:

| Name                | POST attribute name | Data type | Field type | Value                |
| ------------------- | ------------------- | --------- | ---------- | -------------------- |
| URL                 | url                 | string    | URL        | window.location.href |
| If page was helpful | helpful             | string    | Plain text | this.wasHelpful      |
| Feedback comments   | comments            | string    | Plain text | feedback.value       |
| User Agent          | userAgent           | string    | Plain text | navigator.userAgent  |

## Contributor/developer documentation

- [Component information](https://github.com/cagov/design-system/blob/main/components/README.md)

- [Component README template](https://www.notion.so/odi-engineering/Component-documentation-template-2da3975cc0954174ace43004d151451c)

- [Unit tests](https://github.com/cagov/design-system/blob/main/components/UNIT-TESTS.md)
