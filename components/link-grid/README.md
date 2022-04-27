# Link grid

The link grid organizes links that function as calls to action (CTAs) or highlight topics. It guides people to important services and topics. The grid can also be used by content creators to lead users to specific content.

When viewed on a computer, the grid is a maximum of 3 links wide. On mobile devices, this grid collapses into a single column.

## When and how to use it

Use the link grid to highlight the top things people need. Organize the links in a way that makes sense for people’s primary needs.

The link grid is typically used on the homepage of a site so visitors can find and get to useful content quickly.

Only use the link grid if you have two or more links to add to it.

### How not to use it

Avoid using more than 9 links. The link grid is intended to highlight the most important content. The recommended maximum grid size is 3 rows by 3 columns.

Because the grid collapses into one column on mobile, large grids may occupy several screens. This can hide lower links.

## Demo and sample markup

<html-preview>

```html preview
<div class="cagov-grid">
  <a href="#" class="no-deco cagov-card">
    <span class="card-text">Link 1</span>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      enable-background="new 0 0 24 24"
      height="24px"
      viewBox="0 0 24 24"
      width="24px"
    >
      <g>
        <path d="M0,0h24v24H0V0z" fill="none" />
      </g>
      <g>
        <polygon points="6.23,20.23 8,22 18,12 8,2 6.23,3.77 14.46,12" />
      </g>
    </svg>
  </a>
  <a href="#" class="no-deco cagov-card">
    <span class="card-text">Link 2, showing what longer text looks like</span>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      enable-background="new 0 0 24 24"
      height="24px"
      viewBox="0 0 24 24"
      width="24px"
    >
      <g>
        <path d="M0,0h24v24H0V0z" fill="none" />
      </g>
      <g>
        <polygon points="6.23,20.23 8,22 18,12 8,2 6.23,3.77 14.46,12" />
      </g>
    </svg>
  </a>
  <a href="#" class="no-deco cagov-card">
    <span class="card-text">Link 3</span>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      enable-background="new 0 0 24 24"
      height="24px"
      viewBox="0 0 24 24"
      width="24px"
    >
      <g>
        <path d="M0,0h24v24H0V0z" fill="none" />
      </g>
      <g>
        <polygon points="6.23,20.23 8,22 18,12 8,2 6.23,3.77 14.46,12" />
      </g>
    </svg>
  </a>
</div>
```

</html-preview>

## Specs

| Property     | Value            |
| ------------ | ---------------- |
| Machine name | ds-link-grid     |
| JavaScript   | no               |
| SCSS         | ./src/index.scss |

## Project installation

The instructions assume familiarity with [npm](https://npmjs.com) package management tool and [Sass](https://sass-lang.com/).

1. Include **SCSS** in your compiler.
2. Add the **sample markup** from the component to your HTML.
3. Modify the **sample markup** with your URLs and card text as needed. Refer to the [Content model section](#content-model) for notes on mapping your data to the **sample markup**.

## CSS variables

The following [CSS variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) are used in this component:

- `--primary-700`
- `--accent2-500`
- `--gray-100`
- `--gray-300`
- `--border-1`
- `--border-5`
- `--radius-2`
- `--s-1`
- `--s-2`
- `--s-3`
- `--font-size-5`
- `--font-lineheight-3`



All CSS variables define their own fallback value so you do not have to use additional CSS unless you want to change them. You may define your own value for the variable by adding your own style rules. Here is an example defining the global hex value for a CSS variable named “--primary-700”:

```css
:root {
  --primary-700: #165ac2;
}
```

## Accessibility

### Component-specific accessibility review

- Make sure that the button has solid, 2px outline that uses `--highlight-color` variable on focused state.
- Make sure that the svg arrow inside of each link has `aria-hidden=”true”` attribute.

### Standard accessibility review

As a component in Alpha status, this component must pass the following accessibility reviews every time a new version is published:

- Tested with the [axe](https://www.deque.com/axe/) accessibility tool and passes all automated [WCAG](https://www.w3.org/TR/WCAG21/) Level AA checks
- Reviewed with the [VoiceOver](https://www.apple.com/voiceover/info/guide/_1121.html) screen reader on desktop
- Verified keyboard navigation and that all actionable elements of the component are reachable via keyboard commands only
- Reviewed component layout on a variety of screen sizes

## Progressive enhancement

This is an HTML- and CSS-only component. JavaScript is not required. It uses [CSS variables](<https://developer.mozilla.org/en-US/docs/Web/CSS/var()#syntax>) to inherit design token values. Token definitions are not required because these style rules provide fallback values.

<a name="content-model"></a>

## Content model

This component uses the following data attributes. We provide this information to help with integrating the component into backend publishing systems or identifying content that may require translation.

| Name  | Attribute name | Data type | Field type | Selector           |
| ----- | -------------- | --------- | ---------- | ------------------ |
| Title | title          | string    | Plain text | .card-text         |
| Url   | url            | string    | URL        | a.cagov-card[href] |

## Contributor/developer documentation

- [Component information](https://github.com/cagov/design-system/blob/main/components/README.md)

- [Component README template](https://www.notion.so/odi-engineering/Component-documentation-template-2da3975cc0954174ace43004d151451c)

- [Unit tests](https://github.com/cagov/design-system/blob/main/components/UNIT-TESTS.md)
