# Page navigation

Page navigation lists and links to the level 2 headings (H2) of a webpage. It is placed at the top of the page on the left. People can select a link to go directly to that section. The links are introduced by the text **On this page** by default. The page navigation does not show if there are zero or one H2’s on the page.

Page navigation makes it easy to see what’s on a page. It allows people to scan a page and know if they’re in the right place.

## When and how to use it

Use this component on pages with two or more H2’s. You’ll probably use page navigation on most of your pages.

### How not to use it

Do not use this component to replace or duplicate site navigation.

## Specs

| Property | Value |
| --- | --- |
| Machine name | ds-content-navigation |
| JavaScript | yes |
| SCSS | ./src/index.scss |

## Project installation

The instructions assume familiarity with [npm](https://npmjs.com) package management tool, modern JavaScript techniques, and [Sass](https://sass-lang.com/).

1. `npm i @cagov/[machine-name]`
2. Use `import`[¹](/footnotes/#footnote1) or `require` to include the component’s ***JavaScript****  in your page or compiler.
3. Include **SCSS** in your Sass compiler.
4. Add the **Sample markup** to your HTML.
5. Refer to the Content model section for notes on mapping your data to the **Sample markup**.

## CSS variables

The following [CSS variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) are used in this component

- `--gray-300`

All CSS variables define their own fallback value so you do not have to use additional CSS unless you want to change them. You may define your own value for the variable by adding your own style rules. Here is an example defining the global hex value for a CSS variable named “—primary-color”:

```css
:root {
  --primary-color: #064E66;
}
```

## Accessibility

### Review items specific to the page navigation accessibility

- Make sure that content navigation component is using a navigation landmark (enclosed into `nav` tag) and has ARIA label (has `aria-labelledby` attribute).
- Make sure that content menu’s visual heading (which is usually “On this page”) has `id` attribute that is referenced in nav’s `aria-labelledby` attribute.
- Ensure that menu items are keyboard operable and focus is never hidden from users.
- Make sure that each nav item has solid, 2px outline that is using `—-highlight-color` variable on focused state.

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

This component uses a [custom element](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements) defined in JavaScript in addition to HTML and CSS. Edge, Firefox, Safari, and Chrome support custom elements. If the JavaScript for this component is not delivered or supported, the component will not display. This is the desired behavior because this component is not critical for site interaction. It uses [CSS variables](https://developer.mozilla.org/en-US/docs/Web/CSS/var()#syntax) to inherit design token values. Token definitions are not required because these style rules provide fallback values.

## Content model

This component uses the following data attributes. We provide this information to help with integrating the component into backend publishing systems or identifying content that may require translation.

| Name | Attribute name | Description | Data type | Field type | Default |
| --- | --- | --- | --- | --- | --- |
| Label | data-label | Label for the page index | string | Plain text | “On this page” |
| Selector | data-selector | HTML selector to parse to locate H2 elements | string | Plain text | main |
| Editor type | data-type | Editor | string | Plain text | wordpress (currenly only supports WordPress) |
- Index is auto-generated by JavaScript using H2 elements found within the `data-selector`.

## Contributor/developer documenation

Run: ```npm run start``` at the repository root to preview elements. This will launch local server with links to component demo pages.

The documentation is generated using the <a href="https://github.com/webcomponents/custom-elements-manifest">custom elements manifest schema</a> draft standard <a href="https://github.com/runem/web-component-analyzer">analyzer</a> command. Here is an example run outside the accordion directory:


```html preview
wca analyze src --format json --outFile custom-elements.json
```
