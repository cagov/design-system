# Accordion

Accordions are expandable sections of content. Each section contains a summary element, and more body text when opened.

Accordions keep pages looking clean by hiding information that most people do not need to see.

## When and how to use it

Use accordions to hide content most readers do not need.

Headings can be a:

- Word or phrase
- Sentence
- Question

Write headings that are brief and descriptive.

Only use accordions when:

- A small group of people needs the information
- People only need certain information (like selecting one of several license types)
- Providing notes or disclaimers

### How not to use it

Do not use accordions:

- If more than a third of your readers need the information in the accordion
- To make a page look shorter
- Inside other accordions

Accordions hide information unless someone opens them. This requires an extra action, which means readers have to do extra work to get this information. If most people need to see the content, put it in body content so people can scan for it.

## Demo and sample markup

<html-preview>

```html preview
<cagov-accordion>
  <details>
    <summary>Title 1</summary>
    <div class="accordion-body">
      <p>A couple links are included inside this accordion to demonstrate that when the accordion is closed they are automatically not in the keyboard focus order but when the accordion opens they become the next available elements in the keyboard navigation sequence after the accordion's summary element.</p>
      <p><a href="#nowhere1">Link 1</a></p>
      <p><a href="#nowhere2">Link 2</a></p>
    </div>
  </details>
</cagov-accordion>
<cagov-accordion>
  <details>
    <summary>Title 2 multiline lorem ipsum is useful because it has a more-or-less normal distribution of letters</summary>
    <div class="accordion-body">
      <ul>
        <li>Anim pariatur cliche reprehenderit</li>
        <li>moon officia aute, non cupidatat</li>
      </ul>
    </div>
  </details>
</cagov-accordion>
<cagov-accordion>
  <details>
    <summary>Title 3 lorem ipsum dolor sit amet</summary>
    <div class="accordion-body">
      <p>moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.</p>
      <p>Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda</p>
    </div>
  </details>
</cagov-accordion>
```

</html-preview>

## Specs

| Property     | Value            |
| ------------ | ---------------- |
| Machine name | ds-accordion     |
| JavaScript   | yes              |
| Sass         | ./src/index.scss |

## Project installation

The instructions assume familiarity with [npm](https://npmjs.com) package management tool, modern JavaScript techniques, and [Sass](https://sass-lang.com/).

1. `npm i @cagov/ds-accordion`
2. Use `import`[¹](/footnotes/#footnote1) or `require` to include the component’s **JavaScript** in your page or compiler.
3. Add the **sample markup** to your HTML.
4. Refer to the [Content model section](#content-model) for notes on mapping your data to the **sample markup**.

### CDN installation

We recommend using a build system and bundling your JavaScript for faster performance. If you do not use a build system, you can include the code from our CDN with a script tag.

```html
<script type="module" src="https://cdn.designsystem.webstandards.ca.gov/components/ds-accordion/v2.0.3/dist/index.js"></script>
```

## CSS variables

The following [CSS variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) are used in this component:

- `--primary-700`
- `--primary-900`

All CSS variables define their own fallback value, so you do not have to use additional CSS unless you want to change them. You may define your own value for the variable by adding your own style rules. Here is an example defining the global hex value for a CSS variable named “--primary-700”:

```css
:root {
  --primary-700: #165ac2;
}
```

## Accessibility

### Component-specific accessibility review

The clickable element in the accordion is a standard button.

- People cannot focus on the content inside the accordion unless they open the accordion.
- Once open, any elements in the content can be focused on normally and reached via tabbing.

### Standard accessibility review

As a component in Alpha status, this component must pass the following accessibility reviews every time a new version is published:

- Tested with the [axe](https://www.deque.com/axe/) accessibility tool and passes all automated [WCAG](https://www.w3.org/TR/WCAG21/) Level AA checks
- Reviewed with the [VoiceOver](https://www.apple.com/voiceover/info/guide/_1121.html) screen reader on desktop
- Verified keyboard navigation and that all actionable elements of the component are reachable via keyboard commands only
- Reviewed component layout on a variety of screen sizes

## Progressive enhancement

This component relies on the browser's built in details and summary elements which provide an expanding/collapsing behavior supported solely by the browser. This default behavior is augmented by javascript in a custom element which applies a height animation to the expansion/collapse. Additional styling is used based on the :defined selector which is only true once the custom element's javascript has been understood by the browser. This removes the default caret icon and provides a plus/minus open closed indicator instead.

If you want the accordion to be open instead of closed when the page loads, add the attribute `open` to the details element. It is not necessary to provide a value to the attribute: `<details open>` is sufficient.

If js does not execute the animation, height restrictions, overflow hiding, default arrow hiding and plus/minus icons will not be applied. The user should see plain default summary behavior with rotating triangle.

This component uses a [custom element](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements) defined in JavaScript in addition to HTML and CSS. Edge, Firefox, Safari, and Chrome support custom elements. If the JavaScript for this component is not delivered or supported the component falls back to plain HTML. It uses [CSS variables](<https://developer.mozilla.org/en-US/docs/Web/CSS/var()#syntax>) to inherit design token values. Token definitions are not required because these style rules provide fallback values.

<a name="content-model"></a>

## Content model

This component uses the following data attributes. We provide this information to help with integrating the component into backend publishing systems or identifying content that may require translation.

| Name  | Attribute name | Data type | Field type | Selector         |
| ----- | -------------- | --------- | ---------- | ---------------- |
| Title | title          | string    | Rich text  | summary          |
| Body  | body           | string    | Rich text  | .accordion-body  |

## Contributor/developer documentation

- [Component information](https://github.com/cagov/design-system/blob/main/components/README.md)

- [Component README template](https://www.notion.so/odi-engineering/Component-documentation-template-2da3975cc0954174ace43004d151451c)

- [Unit tests](https://github.com/cagov/design-system/blob/main/components/UNIT-TESTS.md)
