# Icons

References [Version 5.6.1 of the CAGov Icon Library](https://california.azureedge.net/cdt/statetemplate/5.6.1/fonts/CaGov.svg)

There are several methods for including icons in your project.

## Specs

| Property     | Value    |
| ------------ | -------- |
| Machine name | ds-icons |
| JavaScript   | yes      |

## Method 1

### Minimal sprite and JavaScript

Recommended for projects that use 10 - 200 icons.

The instructions assume familiarity with [npm](https://npmjs.com) package management tool, modern JavaScript techniques, and [Sass](https://sass-lang.com/).

1. Identify all the icons you will need for your project by id using the <a href="#icon-library">Icon library</a> below.

2. `npm install`

3. Run the command `npm run build:sprite-some -ids=[ids]` to generate a the sprite

   - `-ids` : A space-separated list of icon ids.

   - Example: `npm run build:sprite-some -ids=gear arrow-down left`

4. The generated sprite will be called `cagovSomeIcons.svg`.

5. Include the generated sprite and index.js in your project or page.

6. Place individual icon inline with `<cagov-icon data-icon="[id]"></cagov-icon>`

### Sample markup and demo

<html-preview>

```html preview
<!--Decorative-->
<cagov-icon data-icon="arrow-down"></cagov-icon>
<cagov-icon data-icon="drive"></cagov-icon>
<!--Functional-->
<cagov-icon data-icon="gear" data-sr="Settings"></cagov-icon>
<cagov-icon data-icon="left" data-sr="Next Page"></cagov-icon>
```

</html-preview>

## Method 2

### Direct download and include.

Recommended for projects that use 1-9 icons.

1. Identify the icon(s) you will need for your project by id using the <a href="#icon-library">Icon library</a> below.

2. Click the Download link.

3. Copy/paste or reference the icon in your project.

## Method 3

### Icon font and CSS.

Recommended for projects where modifying HTML and Javascript is challenging.

2. Copy the `src/fonts` folder to your web app.

3. Copy the `dist/icon-font.css` folder to your web app.

4. Include the CSS in your project or page. The CSS must be at the directory level as the `fonts` folder.

5. Place individual icon in HTML using `<span class="ca-gov-icon-[id]" aria-hidden="true"></span>`

### Sample markup and demo

<html-preview>

```html preview
<span class="ca-gov-icon-accessibility" aria-hidden="true"></span>
<span class="ca-gov-icon-drive" aria-hidden="true"></span>
<span class="ca-gov-icon-ferry" aria-hidden="true"></span>
<span class="ca-gov-icon-van" aria-hidden="true"></span>
```

</html-preview>

<!-- If the title is simply `Accessibility`, the display of the accessibility icon breaks. -->

## Accessibility recommendations

### Component-specific accessibility review

These icons are decorative by default and use the `aria-hidden` attribute. Associated text can be made available to screen readers using [Method 1](#method-1) and the attribute pattern `data-sr="My descriptive text."` When using Methods 2 and 3, be mindful of accessibility best practices.

### Standard accessibility review

As a component in Alpha status, this component must pass the following accessibility reviews every time a new version is published:

- Tested with the [axe](https://www.deque.com/axe/) accessibility tool and passes all automated [WCAG](https://www.w3.org/TR/WCAG21/) Level AA checks
- Reviewed with the [VoiceOver](https://www.apple.com/voiceover/info/guide/_1121.html) screen reader on desktop
- Verified keyboard navigation and that all actionable elements of the component are reachable via keyboard commands only
- Reviewed component layout on a variety of screen sizes

## Icon library

Download individual svgs using the links below.

{% include 'layouts/icon-demo.njk' %}
