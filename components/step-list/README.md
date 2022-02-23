# Step list

The step list is a numbered list. It has:

- A number for each item in the list, enclosed in a circle
- Lines connecting all the circled numbers
- A title for each step
- Detail for each step
  - You can use hyperlinks in the detail space
  - You cannot use bullet points in the detail space

State processes can be complicated and opaque. The step list shows all the steps in a process. The step list makes these processes visible, even when some steps do not require people to act.

## When and how to use it

Use the step list when you need more than one sentence to explain the steps in a process.

Introduce the step list with a heading so people know what process the step list describes. You can add a paragraph block between the heading and the step list, but this is optional.

The step list emphasizes important processes. Use it sparingly on your website. If you have a process where most steps can be explained in one sentence, use a regular numbered list instead.

### How not to use it

Do not use the step list to create a list of items that are not ordered. Use bullet points instead.

## Demo and sample markup

<html-preview>

```html preview
<ol class="cagov-step-list">
  <li>
    <strong>Complete local permitting processes</strong>
    <br />
    <span class="has-inline-color cagov-step-list-content">
      Many cities and counties have rules and permitting for cannabis
      businesses. Some do not allow cannabis businesses. Make sure you set up
      your business in an area that allows commercial cannabis activity.
      Complete any permitting requirements your city or county requires before
      you apply for a state cannabis license.
    </span>
  </li>
  <li>
    <strong>Understand the state regulations for cannabis businesses</strong>
    <br />
    <span class="has-inline-color cagov-step-list-content">
      The Department of Cannabis Control (DCC) has requirements
      for standard operating procedures, training employees and how facilities
      must be set up. Make sure you understand and can meet these rules.
    </span>
  </li>
  <li>
    <strong>Gather your application information and documents</strong>
    <br />
    <span class="has-inline-color cagov-step-list-content">
      DCC has resources to help you create the documents you need during the 
      license process. If you have questions about the requirements, email the
      <a href="#">DCC licensing team</a>.
    </span>
  </li>
</ol>
```

</html-preview>

## Specs

| Property     | Value            |
| ------------ | ---------------- |
| Machine name | ds-step-list     |
| JavaScript   | no               |
| SCSS         | ./src/index.scss |

## Project installation

The instructions assume familiarity with [npm](https://npmjs.com) package management tool and [Sass](https://sass-lang.com/).

1. Include **SCSS** in your compiler.
2. Add the **sample markup** from the component to your HTML.
3. Adjust text as needed.

## CSS variables

The following [CSS variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) are used in this component:

- `--highlight-color`

All CSS variables define their own fallback value so you do not have to use additional CSS unless you want to change them. You may define your own value for the variable by adding your own style rules. Here is an example defining the global hex value for a CSS variable named “--primary-color”:

```css
:root {
  --primary-color: #064e66;
}
```

## Accessibility

### Standard accessibility review

As a component in Alpha status, this component must pass the following accessibility reviews every time a new version is published:

- Tested with the [axe](https://www.deque.com/axe/) accessibility tool and passes all automated [WCAG](https://www.w3.org/TR/WCAG21/) Level AA checks
- Reviewed with the [VoiceOver](https://www.apple.com/voiceover/info/guide/_1121.html) screen reader on desktop
- Verified keyboard navigation and that all actionable elements of the component are reachable via keyboard commands only
- Reviewed component layout on a variety of screen sizes

## Progressive enhancement

This is an HTML- and CSS-only component. JavaScript is not required. It uses [CSS variables](<https://developer.mozilla.org/en-US/docs/Web/CSS/var()#syntax>) to inherit design token values. Token definitions are not required because these style rules provide fallback values.

## Content model

This component uses the `ol.cagov-step-list` class. It will work on `ul` elements, but would not be semantically correct. Use `ol` with this component.
