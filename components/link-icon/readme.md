# Link icon

The link icon adds an icon next to links that go:

- Outside your website (an external link)
- To a PDF

The external link icon is a box with an arrow pointing to the upper-right corner.

The PDF icon is the letters _PDF_ surrounded by a box outline.

These icons tell people they are leaving the current website in some way.

In the case of PDF links, this can be important for people on mobile devices. They may not want to open a PDF for various reasons (use up their data, do not want to download a file, etc.). It’s also important for those who use screen readers, as it will announce, “This is a PDF file.”

If a link is both external and a PDF, only the PDF icon will appear. It’s more important to tell people they’re going to a PDF than it is to tell them that it’s not hosted on the same site.

## When and how to use it

This is a default component when using the Design System. Use it whenever you implement the Design System as it addresses some accessibility issues.

Once an engineer has installed this feature, content creators do not need to take separate action to apply either link icon.

### How not to use it

Do not modify the link icon when you install it.

## Demo and sample markup

<html-preview>

```html preview
<link
  rel="stylesheet"
  href="https://california.azureedge.net/cdt/CAWeb/combined-css/1.0.1/dist/cagov.css"
/>
<a href="link.pdf">This is pdf link.</a>
<a href="https://google.com">This is an external link.</a>
```

</html-preview>

## Specs

| Property     | Value            |
| ------------ | ---------------- |
| Machine name | ds-link-icon     |
| JavaScript   | yes              |
| SCSS         | ./src/index.scss |

## Project installation

The instructions assume familiarity with [npm](https://npmjs.com) package management tool, modern JavaScript techniques, and [Sass](https://sass-lang.com/).

1. `npm i @cagov/[machine-name]`
2. Use `import`[¹](/footnotes/#footnote1) or `require` to include the component’s **\*JavaScript\*\*** in your page or compiler.
3. Include **SCSS** in your Sass compiler.
4. Add the **Sample markup** to your HTML.
5. Refer to the Content model section for notes on mapping your data to the **Sample markup**.
6. Note that the `<a>` tags must be inside the `<main>` tag and external link to icons are required.

### Other dependencies

This component uses icons from the [CAGov font library](https://template.webstandards.ca.gov/sample/icon-fonts.html). Include the font library in your project to ensure the icons appear.

## CSS variables

The following [CSS variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) are used in this component:

- `--primary-color`
- `--primary-dark-color`

All CSS variables define their own fallback value so you do not have to use additional CSS unless you want to change them. You may define your own value for the variable by adding your own style rules. Here is an example defining the global hex value for a CSS variable named “—primary-color”:

```css
:root {
  --primary-color: #064e66;
}
```

## CSS exceptions

There are cases when external link icon is not needed or messing the existing design. Here are the cases when external link icon is disabled:

```scss
.cagov-card, // card-grid component links
.wp-block-button__link, // buttons inside of design system hero banner
.footer-social-links a, // social icons links
img ~, // links that are using images
svg ~, // links that are using SVG icons
.pdf-link-icon ~ // links to PDF files
```

## Accessibility

### Review items specific to the link icon accessibility

- Make sure that link icon span has `aria-hidden="true”` attribute.

### Standard accessibility review

Components in Alpha status must pass the following accessibility reviews every time a new version is published:

- Tested with the `[axe](https://www.deque.com/axe/)` accessibility tool and passes all automated [WCAG](https://www.w3.org/TR/WCAG21/) Level AA checks
- Reviewed with the [VoiceOver](https://www.apple.com/voiceover/info/guide/_1121.html) screen reader on desktop
- Verified keyboard navigation and that all actionable elements of the component are reachable via keyboard commands only
- Reviewed component layout on a variety of screen sizes

Components in Beta status must pass the following accessibility reviews every time a new version is published:

- Tested with the `[axe](https://www.deque.com/axe/)` accessibility tool and passes all automated [WCAG](https://www.w3.org/TR/WCAG21/) Level AA checks
- Reviewed with the VoiceOver screen reader on desktop
- Reviewed with the [TalkBack](https://support.google.com/accessibility/android/answer/6283677?hl=en) screen reader on mobile
- Verified keyboard navigation and that all actionable elements of the component are reachable via keyboard commands only
- Reviewed component layout on a variety of screen sizes
- Reviewed component display using content in English, Spanish, Simplified Chinese, German, and Arabic (using right to left display (RTL))

## Progressive enhancement

This component uses a [custom element](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements) defined in JavaScript in addition to HTML and CSS. Edge, Firefox, Safari, and Chrome support custom elements. If the JavaScript for this component is not delivered or supported, the component will not display. This is the desired behavior because this component is not critical for site interaction. It uses [CSS variables](<https://developer.mozilla.org/en-US/docs/Web/CSS/var()#syntax>) to inherit design token values. Token definitions are not required because these style rules provide fallback values.

## Content model

Requires a `main` tag and activates on `a` tags. Automatically detects links and appends necessary icons to them.
