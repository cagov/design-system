# Page alert

The page alert gives people important and sometimes time-sensitive information that they need to read, before anything else. It goes beneath the site navigation on any page.

The page alert is a yellow band that extends across the width of the page. It includes:

- An icon, selected from a list of options
- A text field, which includes the ability to link to other pages
- A close icon (an X in a circle) that allows people to remove the alert

## When and how to use it

Use page alerts sparingly. They alarm people and distract from other content.

Be concise with your page alert content. Use a link to send people to a page with the details.

Only use one page alert on a page. Make sure the alert is relevant to the page it is on. Only duplicate the alert on other pages if it applies to those pages.

Use page alerts to tell people about:

- Services that are down
- Open application periods
- Approaching deadlines
- Planned or unplanned maintenance

Choose an icon that supports the tone of your alert.

### How not to use it

Do not put page alerts on every page on your site. If people see page alerts too often, they will start to ignore them and not read page alert content.

Do not put more than one page alert on a page.

Do not use page alerts to simply highlight important content. They are for information that is new, critical, and temporary.

## Demo and sample markup

```html preview reset
<cagov-page-alert
  data-icon="ca-gov-icon-bell"
  data-message='Notice: DCC is soliciting proposals for the Local Jurisdiction Assistance Grant Program. <a href="#">Learn more</a>.'
></cagov-page-alert>
```

## Specs

| Property     | Value            |
| ------------ | ---------------- |
| Machine name | ds-page-alert    |
| JavaScript   | yes              |
| SCSS         | ./src/index.scss |

## Project installation

The instructions assume familiarity with [npm](https://npmjs.com) package management tool, modern JavaScript techniques, and [Sass](https://sass-lang.com/).

1. `npm i @cagov/ds-page-alert`
2. Use `import`[¹](/footnotes/#footnote1) or `require` to include the component’s **JavaScript** in your page or compiler.
4. Add the **sample markup** to your HTML.
5. Refer to the [Content model section](#content-model) for notes on mapping your data to the **sample markup**.

## CSS variables

The following [CSS variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) are used in this component:

- `--cagov-highlight`

All CSS variables define their own fallback value so you do not have to use additional CSS unless you want to change them. You may define your own value for the variable by adding your own style rules. Here is an example defining the global hex value for a CSS variable named “--primary-color”:

```css
:root {
  --primary-color: #064e66;
}
```

### Other dependencies

This component uses icons from the [CAGov font library](https://template.webstandards.ca.gov/sample/icon-fonts.html). Include the font library in your project to ensure the icons appear.

## Accessibility

### Component-specific accessibility review

- If you are using svg icon at the beginning of the page alert text make sure it has `aria-hidden=”true”` attribute, so screen readers ignore it.
- Make sure that close button has `aria-label="Close page alert”` so screen reader users would understand the purpose of the button.
- When page alert is dismissed make sure that button has `aria-hidden=”true”` attribute, so the users would not tab to it.
- Make sure that page alert links and buttons have solid, 2px outline that uses `--highlight-color` variable on focused state.

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

| Name    | Attribute name | Data type | Field type                                 |
| ------- | -------------- | --------- | ------------------------------------------ |
| Icon    | data-icon      | string    | Plain text, Any CaGov font, by class name. |
| Message | data-message   | string    | Rich text                                  |

## Contributor/developer documentation

- [Component information](https://github.com/cagov/design-system/blob/main/components/README.md)

- [Component README template](https://www.notion.so/odi-engineering/Component-documentation-template-2da3975cc0954174ace43004d151451c)

- [Unit tests](https://github.com/cagov/design-system/blob/main/components/UNIT-TESTS.md)
