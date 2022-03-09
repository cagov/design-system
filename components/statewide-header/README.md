# Statewide header

The statewide header puts a standard header at the very top of your site. Having a common header tells people that the website is an official product of the State of California, which increases user trust.

It includes:

- The CA<span>.</span>gov logo, which links to https://www.ca.gov
- The text “Official website of the State of California” (on desktop) or “State of California” (on mobile)

## When and how to use it

The statewide footer is a required Design System component. Place it at the top of the website, above the department branding (site header) and all other content.

If you want to include a translation widget in the statewide header, [reach out through our Contact us page](/contact-us) to find out how you can do so.

### How not to use it

Do not add other elements to or change the statewide header. Use it only as designed.

Do not combine the statewide header with depatment name or logo, navigation, or information. This is contained in the site header.

## Demo and sample markup

```html preview
<div class="official-header">
  <div class="container">
    <div class="official-logo">
      <a class="cagov-logo" href="https://ca.gov" target="_blank">
        <svg
          aria-labelledby="cagov-logo--title"
          role="img"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          width="33px"
          height="24px"
          viewBox="0 0 44 34"
          style="enable-background:new 0 0 44 34;"
          xml:space="preserve"
        >
          <title id="cagov-logo--title">CA.gov Logo</title>
          <path
            class="ca"
            d="M27.4,14c0.1-0.4,0.4-1.5,0.9-3.2c0.1-0.5,0.4-1.3,0.9-2.7c0.5-1.4,0.9-2.5,1.2-3.3c-0.9,0.6-1.8,1.4-2.7,2.3 c-3.2,3.5-6.9,7.6-8.3,9.8c0.5-0.1,1.5-1.2,4.7-2.3C26.3,14,27.4,14,27.4,14L27.4,14z M26.9,16.2c-10.1,0-14.5,16.1-21.6,16.1 c-1.6,0-2.8-0.7-3.7-2.1c-0.6-0.9-0.8-2-0.8-3.1c0-2.9,1.4-6.7,4.2-11.1c2.4-3.8,4.9-6.9,7.5-9.2c2.3-2,4.2-3,5.9-3 c0.9,0,1.6,0.3,2.1,1C20.8,5.2,21,5.8,21,6.5c0,1.3-0.4,2.8-1.3,4.5c-0.8,1.5-1.7,2.8-2.9,3.9c-0.8,0.8-1.4,1.1-1.8,1.1 c-0.3,0-0.6-0.1-0.8-0.4c-0.2-0.2-0.3-0.4-0.3-0.7c0-0.5,0.4-1,1.2-1.6c1.2-0.9,2.1-1.8,2.8-2.9c1-1.5,1.5-2.8,1.5-3.8 c0-0.4-0.1-0.7-0.3-0.9c-0.2-0.2-0.5-0.3-0.8-0.3c-0.7,0-1.8,0.5-3.2,1.6c-1.6,1.2-3.2,2.9-5,5C8,14.8,6.3,17.4,5.2,20 c-1.2,2.7-1.8,5-1.8,6.9c0,0.9,0.3,1.7,0.8,2.3c0.6,0.7,1.3,1.1,2.1,1.1c3.2-0.1,7.2-7.4,8.4-9.1C27,4.3,27.9,4.3,29.8,2.5 c1.1-1,1.9-1.6,2.5-1.6c0.4,0,0.7,0.1,0.9,0.4c0.2,0.3,0.3,0.5,0.3,0.9c0,0.4-0.2,1-0.6,2c-0.7,1.7-1.3,3.5-1.9,5.4 c-0.5,1.7-0.9,3-1,3.9c0.2,0,0.4,0,0.5,0c0.4,0,0.7,0,1,0c0.8,0,1.2,0.3,1.2,0.9c0,0.3-0.1,0.5-0.3,0.8c-0.2,0.3-0.4,0.4-0.6,0.5 c-0.1,0-0.3,0-0.7,0c-0.8,0-1.4,0-1.7,0.1c-0.1,0.4-0.5,4.1-1.1,4.2C26.7,21.5,26.8,16.7,26.9,16.2L26.9,16.2z"
          />
          <g>
            <path class="gov" d="M16.8,27.2c0.4,0,0.8,0.2,1.1,0.5c0.3,0.3,0.5,0.7,0.5,1.1c0,0.4-0.2,0.8-0.5,1.1c-0.3,0.3-0.7,0.5-1.1,0.5 c-0.4,0-0.8-0.2-1.1-0.5c-0.3-0.3-0.5-0.7-0.5-1.1c0-0.4,0.2-0.8,0.5-1.1C16,27.4,16.4,27.2,16.8,27.2L16.8,27.2z" /> 
            <path class="gov" d="M26.7,22.9l-1.1,1.1c-0.7-0.8-1.5-1.1-2.5-1.1c-0.8,0-1.5,0.3-2.1,0.8c-0.6,0.6-0.8,1.2-0.8,2 c0,0.8,0.3,1.5,0.9,2.1c0.6,0.6,1.3,0.8,2.2,0.8c0.6,0,1-0.1,1.4-0.3c0.4-0.2,0.7-0.6,0.9-1.1h-2.4v-1.5h4.2l0,0.4 c0,0.7-0.2,1.4-0.6,2.1c-0.4,0.7-0.9,1.2-1.5,1.5c-0.6,0.3-1.3,0.5-2.1,0.5c-0.9,0-1.7-0.2-2.3-0.6c-0.7-0.4-1.2-0.9-1.6-1.6 c-0.4-0.7-0.6-1.5-0.6-2.3c0-1.1,0.4-2.1,1.1-2.9c0.9-1,2-1.5,3.4-1.5c0.7,0,1.4,0.1,2.1,0.4C25.7,22,26.2,22.4,26.7,22.9 L26.7,22.9z" />
            <path class="gov" d="M32.2,21.4c1.2,0,2.2,0.4,3.1,1.3c0.9,0.9,1.3,1.9,1.3,3.2c0,1.2-0.4,2.3-1.3,3.1c-0.8,0.9-1.9,1.3-3.1,1.3 c-1.3,0-2.3-0.4-3.2-1.3c-0.8-0.9-1.3-1.9-1.3-3.1c0-0.8,0.2-1.5,0.6-2.2c0.4-0.7,0.9-1.2,1.6-1.6C30.7,21.5,31.4,21.4,32.2,21.4 L32.2,21.4z M32.2,22.9c-0.8,0-1.4,0.3-2,0.8c-0.5,0.5-0.8,1.2-0.8,2.1c0,0.9,0.3,1.7,1,2.2c0.5,0.4,1.1,0.6,1.8,0.6 c0.8,0,1.4-0.3,1.9-0.8c0.5-0.6,0.8-1.2,0.8-2c0-0.8-0.3-1.5-0.8-2C33.6,23.2,33,22.9,32.2,22.9L32.2,22.9z" />
            <polygon class="gov" points="36.3,21.6 38,21.6 40.1,27.6 42.2,21.6 43.9,21.6 40.8,30 39.3,30 36.3,21.6" />
          </g>
        </svg>
      </a>
      <p class="official-tag">
        <span class="desktop-only">Official website of the</span> State of California
      </p>
    </div>
    <cagov-google-translate />
  </div>
</div>
```

## Specs

| Property     | Value               |
| ------------ | ------------------- |
| Machine name | ds-statewide-header |
| JavaScript   | no                  |
| SCSS         | ./src/index.scss    |

## Project installation

The instructions assume familiarity with [npm](https://npmjs.com) package management tool and [Sass](https://sass-lang.com/).

1. Include **SCSS** in your compiler.
2. Add the **sample markup** from the component to your HTML.

## CSS variables

The following [CSS variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) are used in this component:

- `--primary-color`
- `--primary-dark-color`
- `--secondary-color`
- `--gray-200`
- `--gray-100`

All CSS variables define their own fallback value so you do not have to use additional CSS unless you want to change them. You may define your own value for the variable by adding your own style rules. Here is an example defining the global hex value for a CSS variable named “--primary-color”:

```css
:root {
  --primary-color: #064e66;
}
```

## Accessibility

### Component-specific accessibility review

- Make sure that statewide header’s links have solid, 2px outline that uses `—-highlight-color` variable on focused state.
- Make sure that cagov-logo link has `title` or `aria-label` attribute in it, so screen readers users would understand what is that link about.
- Make sure that svg icon inside of the cagov-logo has `aria-hidden=”true”` attribute, so it is hidden from assistive technologies.

### Standard accessibility review

As a component in Alpha status, this component must pass the following accessibility reviews every time a new version is published:

- Tested with the [axe](https://www.deque.com/axe/) accessibility tool and passes all automated [WCAG](https://www.w3.org/TR/WCAG21/) Level AA checks
- Reviewed with the [VoiceOver](https://www.apple.com/voiceover/info/guide/_1121.html) screen reader on desktop
- Verified keyboard navigation and that all actionable elements of the component are reachable via keyboard commands only
- Reviewed component layout on a variety of screen sizes

## Progressive enhancement

This is an HTML- and CSS-only component. JavaScript is not required. It uses [CSS variables](<https://developer.mozilla.org/en-US/docs/Web/CSS/var()#syntax>) to inherit design token values. Token definitions are not required because these style rules provide fallback values.

## Content model

Use this component as-is. It is fixed and includes all necessary content.

The official tag is a string that may require that you verify that it translates successfully.
