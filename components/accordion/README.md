# Accordion

Accordions are expandable sections of content. Each section contains a heading (H2 or H3), a plus button (+), and more body text when opened.

Accordions hide information unless someone opens them. This requires an extra action, which means readers have to do extra work to get this information. People cannot scan for information that’s in an accordion.

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

When possible, keep content scannable by putting it in body content and not hidden in an accordion.

## Specs

| Property | Value |
| --- | --- |
| Machine name | ds-accordion  |
| JavaScript | yes |
| Sass  | ./src/index.scss |

## Project installation

The instructions assume familiarity with [npm](https://npmjs.com) package management tool, modern JavaScript techniques, and [Sass](https://sass-lang.com/).

1. `npm i @cagov/[machine-name]`
2. Use `import`[¹](/footnotes/#footnote1) or `require` to include the component’s ***JavaScript****  in your page or compiler.
3. Include **SCSS** in your Sass compiler.
4. Add the **Sample markup** to your HTML.
5. Refer to the Content model section for notes on mapping your data to the **Sample markup**.



## CSS variables

The following [CSS variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) are used in this component

- `--primary-color`
- `—hover-color`

All CSS variables define their own fallback value so you do not have to use additional CSS unless you want to change them. You may define your own value for the variable by adding your own style rules. Here is an example defining the global hex value for a CSS variable named “—primary-color”:

```css
:root {
  --primary-color: #064E66;
}
```


## Accessibility

The clickable element in the accordion is a standard button. 

- People cannot focus on the content inside the accordion unless they open the accordion.
- Once open, any elements in the content can be focused on normally and reached via tabbing.

### Standard accessibility review

Components in Alpha status must pass the following accessibility reviews every time a new version is published:

- Tested with the `[axe](https://www.deque.com/axe/)` accessibility tool and passes all automated [WCAG](https://www.w3.org/TR/WCAG21/) Level AA checks
- Reviewed with the [VoiceOver](https://www.apple.com/voiceover/info/guide/_1121.html) screen reader on desktop
- Verified keyboard navigation and that all actionable elements of the component are reachable via keyboard commands only
- Reviewed component layout on a variety of screen sizes

Components in Beta status must pass the following accessibility reviews every time a new version is published:

- Tested with the `[axe](https://www.deque.com/axe/)` accessibility tool and passes all automated [WCAG](https://www.w3.org/TR/WCAG21/) Level AA checks
- Reviewed with the VoiceOver screen reader on desktop
- Reviewed with the [TalkBack](https://support.google.com/accessibility/android/answer/6283677?hl=en) screen reader on mobile.
- Verified keyboard navigation and that all actionable elements of the component are reachable via keyboard commands only
- Reviewed component layout on a variety of screen sizes
- Reviewed component display using content in English, Spanish, Simplified Chinese, German, and Arabic (using right to left display (RTL))

## Progressive enhancement

This component defaults to open. If no script on the page executes, the visitor will not be blocked from viewing content. Once the JavaScript executes, the accordion collapses to the desired state by default. If you want the accordion to be open instead of closed when the page loads, add the attribute `aria-expanded="true"`.

This component uses a [custom element](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements) defined in JavaScript in addition to HTML and CSS. Edge, Firefox, Safari, and Chrome support custom elements. If the JavaScript for this component is not delivered or supported the component falls back to plain HTML. It uses [CSS variables](https://developer.mozilla.org/en-US/docs/Web/CSS/var()#syntax) to inherit design token values. Token definitions are not required because these style rules provide fallback values.

## Content model

This component uses the following data attributes. We provide this information to help with integrating the component into backend publishing systems or identifying content that may require translation.

| Name | Attribute name | Data type | Field type | Selector |
| --- | --- | --- | --- | --- |
| Title | title | string | Rich text | .accordion-title |
| Body | body | string | Rich text | .card-body |

## Contributor/developer documentation

Run: ```npm run start``` to preview elements. This will launch local server with links to component demo pages.

The documentation is generated using the <a href="https://github.com/webcomponents/custom-elements-manifest">custom elements manifest schema</a> draft standard <a href="https://github.com/runem/web-component-analyzer">analyzer</a> command. Here is an example run outside the accordion directory:

```
wca analyze accordion --format json --outFile accordion/custom-elements.json
```

Then the <a href="https://github.com/web-padawan/api-viewer-element">api viewer element</a> references the generated custom-elements.json and builds a live preview playground with docs.