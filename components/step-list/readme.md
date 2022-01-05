# Content components >> Step list >> Readme || 10

This CSS only module contains the styles required to create the list of steps in the following graphic:

<img src="https://raw.githubusercontent.com/cagov/design-system/main/components/step-list/img/step-list-screenshot.png" />

## Specs

| Property | Value |
| --- | --- |
| Machine name | ds-step-list |
| JavaScript | false |
| SCSS | ./src/index.scss |

## Project installation

The instructions assume familiarity with [npm](https://npmjs.com) package management tool and [Sass](https://sass-lang.com/).

1. Include **SCSS** in your compiler.
2. Add the **Sample markup** from the component to your HTML.
1. Adjust text as needed.

## Sample markup

```html
<ol class="cagov-step-list">
  <li><strong>Complete local permitting processes</strong><br><span class="has-inline-color cagov-step-list-content">Many cities
      and counties have rules and permitting for cannabis businesses. Some do not allow cannabis businesses. Make sure
      you set up your business in an area that allows commercial cannabis activity. Complete any permitting requirements
      your city or county requires before you apply for a state cannabis license.</span></li>
  <li><strong>Understand the state regulations for cannabis businesses</strong><br><span
      class="has-inline-color cagov-step-list-content">The Department of Cannabis Control (DCC) has <a
        href="https://cannabis.ca.gov/resources/laws-and-regulations/" data-type="page" data-id="713">requirements</a>
      for standard operating procedures, training employees and how facilities must be set up. Make sure you understand
      and can meet these rules.</span></li>
  <li><strong>Gather your application information and documents</strong><br><span
      class="has-inline-color cagov-step-list-content">DCC has <a
        href="https://cannabis.ca.gov/applicants/application-resources/" data-type="page" data-id="698">resources</a> to
      help you create the documents you need during the license process. If you have questions about the requirements,
      email the <a href="mailto:licensing@cannabis.ca.gov"
        onmousedown="_gaq.push(['_trackEvent', 'Email Clicks', 'Click', 'licensing@cannabis.ca.gov', 0, 0]); _gaq.push(['b._trackEvent', 'Email Clicks', 'Click', 'licensing@cannabis.ca.gov', 0, 0]);">DCC
        licensing team</a>.</span></li>
</ol>
```

## CSS variables

There are some colors that should be defined by the containing page. Here are the CSS variable names and their fallback values used when not defined:

- var(--secondary-color, #fec02f)
