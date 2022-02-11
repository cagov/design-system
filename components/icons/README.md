# Icons

This document is a work in progress.

References [Version 5.6.1 of the CAGov Icon Library](https://california.azureedge.net/cdt/statetemplate/5.6.1/fonts/CaGov.svg)

There are several methods for icluding icons in your project.

## Method 1: Minimal sprite and javascript (Recommended)

1. Identify all the icons you will need for your project by id using the <a href="#icon-library">Icon library</a> below.

2. `npm install`

3. Run the command `npm run sprite -ids=[ids]` to generate a the sprite

   - `-ids` : A space-separated list of icon ids.

   - Example: `npm run sprite -ids=accessibility arrow-down left`

4. The generated sprite will be called `cagov-icon-subset.svg`.

5. Include the generated sprite and index.js in your project or page.

6. Place inline with `<cagov-icon data-icon="[id]"></cagov-icon>`

### Sample markup and demo

<html-preview>

```html preview
<cagov-icon data-icon="accessibility"></cagov-icon>
<cagov-icon data-icon="arrow-down"></cagov-icon>
<cagov-icon data-icon="left"></cagov-icon>
```

</html-preview>

## Method 2: Icon font and CSS.

1.`npm install icons`.

2. Reference the font file and compiled css in your project or page.

3. Place inline with `<span class="ca-gov-icon-[id]" aria-hidden="true"></span>`

### Sample markup and demo

<html-preview>

```html preview
<span class="ca-gov-icon-gear" aria-hidden="true"></span>
<span class="ca-gov-icon-drive" aria-hidden="true"></span>
<span class="ca-gov-icon-fire" aria-hidden="true"></span>
```

</html-preview>

Pros: Easy to use

Cons: Requires loading the entire 500 icon font

## Accessibility

Icons can be decorative or functional. Decorative icons should have aria-hidden=true. Functional icons should announce text to screen readers.

## Theming

## Icon library

Download individual svgs using the links below.

{% include 'layouts/icon-demo.njk' %}