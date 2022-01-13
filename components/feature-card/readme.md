
# Feature card

The feature card is a space to highlight content on the homepage. It always includes:

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

The feature card highlights an action you want people to take or important or recent information. It is the first thing a visitor sees. Use this to catch their attention and highlight the top task or need.

We recommend always using a feature card on your homepage. Place it at the top of the homepage so it appears below the statewide header, site header, and site navigation. The only other thing that may appear above the feature card is a page alert.

Include a concise title, description, image, and one button. Choose an image that’s in harmony with your brand identity, mission, and tone. The minimum image size is 776 x 517 pixels. For best results, use images with this aspect ratio.

### How not to use it

Do not use more than one feature card on your homepage.

Do not use the feature card to make an image carousel. Carousels frustrate people more than they help them and do not meet accessibility standards.

Do not put a lot of content in your feature card. Too much content is hard to read. It will also lengthen the feature card and cause awkward whitespace.

## Specs

| Property | Value |
| --- | --- |
| Machine name | ds-feature-card |
| JavaScript | no |
| SCSS | ./src/index.scss |

## Project installation

The instructions assume familiarity with [npm](https://npmjs.com) package management tool and [Sass](https://sass-lang.com/).

1. Include **SCSS** in your compiler.
2. Add the **Sample markup** from the component to your HTML.
1. Modify with your own text, alt text, and image.

## CSS variables

The following [CSS variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) are used in this component

- `--primary-color`

All CSS variables define their own fallback value so you do not have to use additional CSS unless you want to change them. You may define your own value for the variable by adding your own style rules. Here is an example defining the global hex value for a CSS variable named “—primary-color”:

```css
:root {
  --primary-color: #064E66;
}
```

## Accessibility

### Review items specific to the feature card accessibility

- Make sure that feature card image has `alt` attribute with text describing the image.
- make sure that feature card CTA link button has have solid, 2px outline that is using `—-highlight-color` variable on focused state.

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

This is an HTML- and CSS-only component. JavaScript is not required. It uses [CSS variables](https://developer.mozilla.org/en-US/docs/Web/CSS/var()#syntax) to inherit design token values. Token definitions are not required because these style rules provide fallback values.

## Content Model

This component uses the following data attributes. We provide this information to help with integrating the component into backend publishing systems or identifying content that may require translation.

| Name | Attribute name | Data type | Field type | Selector | Additional info |
| --- | --- | --- | --- | --- | --- |
| Title | title | string | Plain text | h2 |  |
| Description | body | string | Plain text | p |  |
| Image | mediaURL | string | Plain text | img.cagov-featured-image[src] | 750x500  pixel maximum width and height are supported. |
| Image caption | mediaAlt | string | Plain text | img.cagov-featured-image[alt] |  |
| Button label | buttontext | string | Plain text | a |  |
| Button url | buttonurl | string | Plain text | .wp-block-button a[href] |  |


## Contributor/developer documentation

From the command line at the root of this project you can run:
```
npm run start
```
Which will start the web-dev server and will launch a new page linking to the components, click on hero to get the page created by ```preview.html```
