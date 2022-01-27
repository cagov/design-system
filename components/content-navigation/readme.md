# Page navigation

Page navigation lists and links to the level 2 headings (H2) of a webpage. It is placed at the top of the page on the left. People can select a link to go directly to that section. The links are introduced by the text **On this page** by default. The page navigation does not show if there are zero or one H2’s on the page.

Page navigation makes it easy to see what’s on a page. It allows people to scan a page and know if they’re in the right place.

## When and how to use it

Use this component on pages with two or more H2’s. You’ll probably use page navigation on most of your pages.

### How not to use it

Do not use this component to replace or duplicate site navigation.

## Demo and sample markup

<html-preview>

```html preview
<cagov-content-navigation data-selector=".main" data-type="wordpress" data-label="On this page"></cagov-content-navigation>

<div class="main">
  <h2>First heading</h2>
  <h2>Second heading</h2>
  <h2>Third heading</h2>
</div>
```

</html-preview>

## Specs

| Property     | Value                 |
| ------------ | --------------------- |
| Machine name | ds-content-navigation |
| JavaScript   | yes                   |
| SCSS         | ./src/index.scss      |

## Project installation

The instructions assume familiarity with [npm](https://npmjs.com) package management tool, modern JavaScript techniques, and [Sass](https://sass-lang.com/).

1. `npm i @cagov/ds-content-navigation`
2. Use `import`[¹](/footnotes/#footnote1) or `require` to include the component’s **JavaScript** in your page or compiler.
3. Add the **sample markup** to your HTML.
4. Refer to the [Content model section](#content-model) for notes on mapping your data to the **sample markup**.

## CSS variables

The following [CSS variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) are used in this component:

- `--gray-300`

All CSS variables define their own fallback value so you do not have to use additional CSS unless you want to change them. You may define your own value for the variable by adding your own style rules. Here is an example defining the global hex value for a CSS variable named “--primary-color”:

```css
:root {
  --primary-color: #064e66;
}
```

## Accessibility

### Component-specific accessibility review

- Make sure that this component uses a navigation landmark (enclosed into `nav` tag) and has ARIA label (has `aria-labelledby` attribute).
- Make sure that this components’s visual heading (which is usually “On this page”) has `id` attribute that is referenced in nav’s `aria-labelledby` attribute.
- Ensure that navigation items are keyboard operable and focus is never hidden from users.
- Make sure that each navigation item has solid, 2px outline that uses `--highlight-color` variable on focused state.

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

| Name        | Attribute name | Description                                  | Data type | Field type | Default                                      |
| ----------- | -------------- | -------------------------------------------- | --------- | ---------- | -------------------------------------------- |
| Label       | data-label     | Label for the page index                     | string    | Plain text | “On this page”                               |
| Selector    | data-selector  | HTML selector to parse to locate H2 elements | string    | Plain text | main                                         |
| Editor type | data-type      | Editor                                       | string    | Plain text | wordpress (currenly only supports WordPress) |

- Index is auto-generated by JavaScript using H2 elements found within the `data-selector`.

## Contributor/developer documenation

Run: `npm run start` at the repository root to preview elements. This will launch local server with links to component demo pages.

The documentation is generated using the <a href="https://github.com/webcomponents/custom-elements-manifest">custom elements manifest schema</a> draft standard <a href="https://github.com/runem/web-component-analyzer">analyzer</a> command. Here is an example run outside the accordion directory:

```html preview
wca analyze src --format json --outFile custom-elements.json
```
