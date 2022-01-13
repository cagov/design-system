# Back to top button

The back to top button lets people go back to the top of a page without scrolling. This can be helpful on long pages. When selected, the back to top button takes you to the top of the page.

This can help people with mobility issues navigate the page more easily. It also helps people save time.

The back to top button is especially helpful for people using mobile devices. It decreases the swiping they have to do to get back to the top of a page.

The button disappears after 7 seconds. If someone scrolls again, it will reappear.

## When and how to use it

We recommend installing the back to top button by default. If a page is not long enough to require scrolling, the back to top button will not appear.

### How not to use it

This component has no extra guidance. Use the component as specified.

## Demo and sample markup

<html-preview>

```html preview
<cagov-back-to-top data-hide-after="7000" data-label="Back to top">
</cagov-back-to-top>
```

</html-preview>

## Specs

| Property     | Value            |
| ------------ | ---------------- |
| Machine name | ds-back-to-top   |
| JavaScript   | yes              |
| SCSS         | ./src/index.scss |

## Project installation

The instructions assume familiarity with [npm](https://npmjs.com) package management tool, modern JavaScript techniques, and [Sass](https://sass-lang.com/).

1. `npm i @cagov/[machine-name]`
2. Use `import`[¹](/footnotes/#footnote1) or `require` to include the component’s **\*JavaScript\*\*** in your page or compiler.
3. Include **SCSS** in your Sass compiler.
4. Add the **Sample markup** to your HTML.
5. Refer to the Content model section for notes on mapping your data to the **Sample markup**.

## CSS variables

The following [CSS variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) are used in this component

- `--primary-color`
- `--primary-dark-color`
- `—highlight-color`
- `--body-text`
- `—body-text-mobile`
- `—gray-100`

All CSS variables define their own fallback value so you do not have to use additional CSS unless you want to change them. You may define your own value for the variable by adding your own style rules. Here is an example defining the global hex value for a CSS variable named “—primary-color”:

```css
:root {
  --primary-color: #064e66;
}
```

## Accessibility

### Review items specific to the back-to-top button accessibility

- Make sure that arrow span has `aria-hidden=”true`” attribute.
- When button is not actually viewable make sure it has `aria-hidden=”true”` and `tabindex=”-1”` attributes. On the other hand, when button is actually visible make sure that those attribute are no longer there.
- Make sure that button has solid, 2px outline that is using `—-highlight-color` variable on focused state.

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

This component uses a [custom element](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements) defined in JavaScript in addition to HTML and CSS. Edge, Firefox, Safari, and Chrome support custom elements. If the JavaScript for this component is not delivered or supported, the component will not display. This is the desired behavior because this component is not critical for site interaction. It uses [CSS variables](<https://developer.mozilla.org/en-US/docs/Web/CSS/var()#syntax>) to inherit design token values. Token definitions are not required because these style rules provide fallback values.

## Content Model

This component uses the following data attributes. We provide this information to help with integrating the component into backend publishing systems or identifying content that may require translation.

| Name       | Attribute name  | Data type | Field type                              |
| ---------- | --------------- | --------- | --------------------------------------- |
| Label      | data-label      | string    | Plain text (default is “Back to top”)   |
| Hide after | data-hide-after | string    | Integer (milliseconds, default is 7000) |
