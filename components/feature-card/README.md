# Feature card

The feature card highlights an action you want people to take or important information on the homepage. It is the first thing a visitor sees. It always includes:

- Title
- Brief description
- Image
- An optional image caption
- Button

The feature card spans the full width of the screen on desktop and mobile. On mobile, the feature card will stack in this order:

- Image
- Image caption
- Title
- Description
- Button

## When and how to use it

Use the feature card to catch visitors' attention and highlight the top task or need.

We recommend always using a feature card on your homepage. Place it at the top of the homepage so it appears below the statewide header, site header, and site navigation. The only other thing that may appear above the feature card is a page alert.

Include a concise title, description, image, and one button. Choose an image that’s in harmony with your brand identity, mission, and tone. The minimum image size is 776 x 517 pixels. For best results, use images with this aspect ratio.

### How not to use it

Do not use more than one feature card on your homepage.

Do not use the feature card to make an image carousel. Carousels frustrate people more than they help them and do not meet accessibility standards.

Do not put a lot of content in your feature card. Too much content is hard to read. It will also lengthen the feature card and cause awkward whitespace.

## Demo and sample markup

<html-preview>

```html preview
<div
  class="wp-block-ca-design-system-hero cagov-with-sidebar cagov-with-sidebar-left cagov-featured-section cagov-bkgrd-gry cagov-block wp-block-cagov-hero"
>
  <div>
    <div class="cagov-stack cagov-p-2 cagov-featured-sidebar">
      <h1>We’re making changes to better serve you</h1>
      <div class="cagov-hero-body-content">
        <p>
          California has merged the three state cannabis authorities into
          a&nbsp;single,&nbsp;new Department of Cannabis Control.
        </p>

        <div class="wp-block-button">
          <a
            class="wp-block-button__link"
            href="https://cannabis.ca.gov/about-us/consolidation/"
            >Learn more</a
          >
        </div>
      </div>
    </div>
    <div>
      <img
        class="cagov-featured-image"
        src="https://cannabis.ca.gov/wp-content/uploads/sites/2/2021/06/cannabis-buds-hero-1024x683.jpg"
        alt=""
        width="1024"
        height="683"
      />
    </div>
  </div>
</div>
```

</html-preview>

## Specs

| Property     | Value            |
| ------------ | ---------------- |
| Machine name | ds-feature-card  |
| JavaScript   | no               |
| SCSS         | ./src/index.scss |

## Project installation

The instructions assume familiarity with [npm](https://npmjs.com) package management tool and [Sass](https://sass-lang.com/).

1. Include **SCSS** in your compiler.
2. Add the **sample markup** from the component to your HTML.
3. Modify with your own text, alt text, and image.

## CSS variables

The following [CSS variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) are used in this component:

- `--primary-color`

All CSS variables define their own fallback value so you do not have to use additional CSS unless you want to change them. You may define your own value for the variable by adding your own style rules. Here is an example defining the global hex value for a CSS variable named “--primary-color”:

```css
:root {
  --primary-color: #064e66;
}
```

## Accessibility

### Component-specific accessibility review

- Make sure that feature card image has `alt` attribute with text describing the image.
- Make sure that feature card CTA link button has solid, 2px outline that uses `--highlight-color` variable on focused state.

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

| Name          | Attribute name | Data type | Field type | Selector                      | Additional info                                       |
| ------------- | -------------- | --------- | ---------- | ----------------------------- | ----------------------------------------------------- |
| Title         | title          | string    | Plain text | h2                            |                                                       |
| Description   | body           | string    | Plain text | p                             |                                                       |
| Image         | mediaURL       | string    | Plain text | img.cagov-featured-image[src] | 750x500 pixel maximum width and height are supported. |
| Image caption | mediaAlt       | string    | Plain text | img.cagov-featured-image[alt] |                                                       |
| Button label  | buttontext     | string    | Plain text | a                             |                                                       |
| Button url    | buttonurl      | string    | Plain text | .wp-block-button a[href]      |                                                       |

## Contributor/developer documentation

- [Component information](https://github.com/cagov/design-system/blob/main/components/README.md)

- [Component README template](https://www.notion.so/odi-engineering/Component-documentation-template-2da3975cc0954174ace43004d151451c)

- [Unit tests](https://github.com/cagov/design-system/blob/main/components/UNIT-TESTS.md)
