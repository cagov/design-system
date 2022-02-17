# Icons

This document is a work in progress.

References [Version 5.6.1 of the CAGov Icon Library](https://california.azureedge.net/cdt/statetemplate/5.6.1/fonts/CaGov.svg)

There are several methods for icluding icons in your project.

## Method 1

### Minimal sprite and JavaScript (Recommended)

1. Identify all the icons you will need for your project by id using the <a href="#icon-library">Icon library</a> below.

2. `npm install`

3. Run the command `npm run sprite -ids=[ids]` to generate a the sprite

   - `-ids` : A space-separated list of icon ids.

   - Example: `npm run sprite -ids=gear arrow-down left`

4. The generated sprite will be called `cagov-icon-subset.svg`.

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

### Icon font and CSS.

1.`npm install icons`.

2. Make sure `fonts` folder is accessible to your web app or copy to a new location.

3. Reference the compiled CSS in your project or page. Note the file paths in the CSS.

4. Place individual icon inline with `<span class="ca-gov-icon-[id]" aria-hidden="true"></span>`

### Sample markup and demo

<html-preview>

```html preview
<span class="ca-gov-icon-accessibility" aria-hidden="true"></span>
<span class="ca-gov-icon-drive" aria-hidden="true"></span>
<span class="ca-gov-icon-ferry" aria-hidden="true"></span>
<span class="ca-gov-icon-van" aria-hidden="true"></span>
```

</html-preview>

Pros: Easy to use

Cons: Requires loading the entire 500 icon font

<!-- If the title is simply `Accessibility`, the display of the accessibility icon breaks. -->

## Accessibility recommendations

These icons are decorative by default and use the `aria-hidden` attribute. Associated text can be made available to screen readers using [Method 1](#method-1) and the attribute pattern `data-sr="My descriptive text."`

## Theming

## Icon library

Download individual svgs using the links below.

{% include 'layouts/icon-demo.njk' %}
