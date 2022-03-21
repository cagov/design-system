# Icons
Icons are visual cues that help people find key information and common actions. They visually describe what something does or how someone can interact with it. This reduces cognitive load by communicating meanings or actions simply and accurately. 
## When and how to use it
Use icons as visual indicators to make key actions or information easy to find. [Organize content strategically](https://designsystem.webstandards.ca.gov/style/content/organize-content-strategically/) before using icons. Choose an existing icon from [Version 5.6.1 of the CAGov icon library](https://california.azureedge.net/cdt/statetemplate/5.6.1/fonts/CaGov.svg) whenever possible. Use icons consistently to avoid confusion for readers and reduce cognitive load. Select an icon that is as closely tied to the specific information or action as possible. When its meaning is not commonly understood, pair it with a label or supporting text.

The Design System uses a standard set of icons for common actions. Several components incorporate icons automatically. This ensures consistency, and fewer steps for content designers. Some examples include:
- Expand icon in the [accordion](https://designsystem.webstandards.ca.gov/components/accordion/readme/) 
- Hamburger icon in the [site navigation](https://designsystem.webstandards.ca.gov/components/site-navigation/readme/) menu for mobile devices
- External and pdf link icons in the [link icon](https://designsystem.webstandards.ca.gov/components/link-icon/readme/) 
- Social media icons in the [site footer](https://designsystem.webstandards.ca.gov/components/site-footer/readme/)
- Up arrow icon in the [back to top button](https://designsystem.webstandards.ca.gov/components/back-to-top/readme/)

For a [page alert](https://designsystem.webstandards.ca.gov/components/page-alert/readme/), choose an icon that supports the tone of the alert.
### How not to use it
Do not use an icon:
- That does not relate to the meaning or action
- Without a label if it is not widely understood 
- For more than one function
- Where an image or graphic is more appropriate
- For decoration
- If it creates visual clutter (like using too many on a page)
- As a shortcut to guide visitors to important information without structuring content strategically

## Specs

| Property     | Value    |
| ------------ | -------- |
| Machine name | ds-icons |
| JavaScript   | yes      |

## Project installation

### Method 1

#### Minimal sprite and JavaScript

Recommended for projects that use 10 - 200 icons.

The instructions assume familiarity with [npm](https://npmjs.com) package management tool, modern JavaScript techniques, and [Sass](https://sass-lang.com/).

1. Identify all the icons you will need for your project by id using the <a href="#icon-library">Icon library</a> below.

2. `npm install @cagov/ds-icons`

3. Run the command `npm run dev:sprite-some -ids=[ids]` to generate a the sprite

   - `-ids` : A space-separated list of icon ids.

   - Example: `npm run dev:sprite-some -ids=gear arrow-down left`

4. The generated sprite will be called `cagovSomeIcons.svg`.

5. Include the generated sprite and index.js in your project or page.

6. Place individual icon inline with `<cagov-icon data-icon="[id]"></cagov-icon>`

### Demo and sample markup

<html-preview>

```html preview
<div
  style="display:grid; grid-template-columns: 1fr 1fr; grid-gap: 20px; text-align: center;"
>
  <!--Decorative-->
  <cagov-icon data-icon="arrow-down"></cagov-icon>
  <cagov-icon data-icon="drive"></cagov-icon>
  <!--Functional-->
  <cagov-icon data-icon="gear" data-sr="Settings"></cagov-icon>
  <cagov-icon data-icon="left" data-sr="Next Page"></cagov-icon>
</div>
```

</html-preview>

### Method 2

#### Direct download and include.

Recommended for projects that use 1-9 icons.

1. Identify the icon(s) you will need for your project by id using the <a href="#icon-library">Icon library</a> below.

2. Click the Download link.

3. Copy/paste or reference the icon in your project.

### Method 3

#### Icon font and CSS.

Recommended for projects where content authors need to be able to add any font inline using only HTML.

2. Copy the `src/fonts` folder to your web app.

3. Copy the `src/icon-font.css` file to your web app.

4. Include the CSS in your project or page. The CSS must be at the same directory level as the `fonts` folder.

5. Place individual icon in HTML using `<span class="ca-gov-icon-[id]" aria-hidden="true"></span>`

### Demo and sample markup

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

## Contributor/developer documentation

- [Icon Library Contributors Documentation](https://github.com/cagov/design-system/blob/main/components/icons/CONTRIBUTORS.md)

## Icon library

Download individual svgs using the links below.

{% include 'layouts/icon-library.njk' %}
