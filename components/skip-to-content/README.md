# Skip to content

The skip to content component is an accessibility feature required on every page. It allows people to jump to the main content below the statewide header and the navigation.

Skip to content is used by people who tab through navigation or use screen readers. It does not appear for other users.

## When and how to use it

Always use skip to content.

### How not to use it

Do not modify skip to content when you install it.

## Demo and sample markup

```html preview
<!-- Sample markup begins here. -->
<div id="skip-to-content">
  <a href="#body-content-demo">Skip to content</a>
</div>
<!-- Sample markup ends here. -->

<!-- The following mark-up is strictly for demonstration purposes. -->
<p>To preview this accessibility feature, try the following.</p>
  
<ol>
  <li>Click on the above "Demo and sample markup" heading.</li>
  <li>Press the tab button on your keyboard.</li>
  <li>The "Skip to content" link should appear at the top of this preview.</li>
  <li>Click it.</li>
</ol>

<div id="body-content-demo">
  <p>The page will scroll to this paragraph.</p>
</div>
```

## Specs

| Property     | Value              |
| ------------ | ------------------ |
| Machine name | ds-skip-to-content |
| JavaScript   | no                 |
| SCSS         | ./src/index.scss   |

## Project installation

The instructions assume familiarity with [npm](https://npmjs.com) package management tool and [Sass](https://sass-lang.com/).

1. Include **SCSS** in your compiler.
2. Add the markup from the component's `template.html` file just after the opening body tag of your HTML.
3. Add `id="body-content"`to the HTML tag at the top of the main content of the page.

## Accessibility

### Component-specific accessibility review

- Make sure the skip to the content link is the first item to appear on focus when you tab through a webpage and has solid, 2px outline that uses `--highlight-color` variable.
- Make sure that skip to content id reference `href=”#body-content”` is matching actual `id` attribute in main content div.

### Standard accessibility review

As a component in Alpha status, this component must pass the following accessibility reviews every time a new version is published:

- Tested with the [axe](https://www.deque.com/axe/) accessibility tool and passes all automated [WCAG](https://www.w3.org/TR/WCAG21/) Level AA checks
- Reviewed with the [VoiceOver](https://www.apple.com/voiceover/info/guide/_1121.html) screen reader on desktop
- Verified keyboard navigation and that all actionable elements of the component are reachable via keyboard commands only
- Reviewed component layout on a variety of screen sizes

## Progressive enhancement

This is an HTML- and CSS-only component. JavaScript is not required. It uses [CSS variables](<https://developer.mozilla.org/en-US/docs/Web/CSS/var()#syntax>) to inherit design token values. Token definitions are not required because these style rules provide fallback values.

## Content model

This component uses the following data attributes. We provide this information to help with integrating the component into backend publishing systems or identifying content that may require translation.

| Name  | Attribute name  | Data type | Field type | Selector                           | Default value   |
| ----- | --------------- | --------- | ---------- | ---------------------------------- | --------------- |
| Label | skip-to-content | string    | Plain text | #skip-to-content a#body-content | Skip to content |

## Contributor/developer documentation

- [Component information](https://github.com/cagov/design-system/blob/main/components/README.md)

- [Component README template](https://www.notion.so/odi-engineering/Component-documentation-template-2da3975cc0954174ace43004d151451c)

- [Unit tests](https://github.com/cagov/design-system/blob/main/components/UNIT-TESTS.md)
