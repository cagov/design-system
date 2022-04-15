---
title: Visual design style guide
description: These recommended approaches make California Design System websites visually appealing, easy to use, and accessible.
---

<p class="text-lead">The visual design of the Design System is inspired by the <a href="/principles/">Design System principles</a>. Our recommended approaches will make your website visually appealing while still being easy to use and accessible. It includes guidelines that ensure your website is consistent with other websites using the Design System.</p>

## Our approach to visual design
1. **Accessible**</br>Visual design plays a critical role in ensuring a website is accessible. Always have sufficient contrast between text and backgrounds. Do not rely on color alone for visual communication.
2. **Economical**</br>Create focused and light-weight designs that avoid unnecessary decoration. This ensures services are delivered equitably across all devices and bandwidths.
3. **Readable**</br> Use highly legible fonts and organize information intuitively. This makes information clear and easy to read.
4. **Consistent**</br>Use visual elements to create familiarity and continuity across different state websites.
5. **Versatile**</br> While consistency is critical, we recognize that each website has its own needs. The Victims Compensation Board should have a different style of communication than the Arts Council.
6. **Official**</br>People use visual cues to determine if a website is trustworthy. Create designs that reinforce that a website is an official product of the government.
7. **Conversational**</br>Approachable and friendly designs help people feel welcomed. Use visual design (color, composition, graphics) to lower barriers between people and the state.


## Color

While the Design System sets some standard colors, you have freedom in creating a color palette for your site.

We’ve created recommendations on how to make an accessible color palette. We start by aligning with Web Content Accessibility Guideline (WCAG) 2.1 Level AA. It requires a color contrast ratio of at least:

- 4.5:1 for normal text
- 3:1 for large text
- 3:1 for graphics and user interface components

### Building an accessible color palette
We used the <a href="https://en.wikipedia.org/wiki/CIELAB_color_space" target="_blank">CIELAB</a> color system to create our color palette. It’s based on the human perception of color and lightness. CIELAB makes it easy to craft color palettes in line with accessibility guidelines for color contrast. These variations offer design flexibility while ensuring a consistent, visually pleasing, and accessible look.

The Design System has preset system-level colors and customizable site-level colors.

- System-level colors are named for how they’re used. For example, instead of <span class="text-bold">red</span>, we have <span class="text-bold">danger</span>. This helps everyone apply the same colors for things like alerts. People know when they see that color what kind of information they’re getting.
- Product-level colors allow teams to apply brand colors in a meaningful way. 

The CIELAB color system outputs 10 colors on a scale of 50-900 (50 being lightest and 900 being darkest). Simple websites may not need all these colors. But complex websites with data visualizations or illustrations may need a robust range. To start, we use a five-scale range of 100, 300, 500, 700, and 900 per base color.

### Site-level palette

Here’s an example of the color palette we use on the Design System website. It uses three base colors: one primary and two accent colors. Each color have range of 5 spectrum colors from lightest to darkest that should give web designers and developers enough flexibility.

<div class="grid-container">
  <div class="text-center p-t-3">
    <div class="bg-cagov-primary radius-round w-6 h-6 m-x-a"></div>
    <p class="font-size-1">Primary</p>
  </div>
  <div class="text-center p-t-3">
    <div class="bg-cagov-secondary radius-round w-6 h-6 m-x-a"></div>
      <p class="font-size-1">Accent 1</p>
  </div>
  <div class="text-center p-t-3">
    <div class="bg-cagov-highlight radius-round w-6 h-6 m-x-a"></div>
      <p class="font-size-1">Accent 2</p>
  </div>
</div>

#### Primary

<div class="grid-container">
  <div class="text-center p-t-3">
    <div class="bg-primary-100 radius-round w-6 h-6 m-x-a"></div>
    <p class="font-size-1">--primary-100</p>
  </div>
  <div class="text-center p-t-3">
    <div class="bg-primary-300 radius-round w-6 h-6 m-x-a"></div>
      <p class="font-size-1">--primary-300</p>
  </div>
  <div class="text-center p-t-3">
    <div class="bg-primary-500 radius-round w-6 h-6 m-x-a"></div>
      <p class="font-size-1">--primary-500</p>
  </div>
  <div class="text-center p-t-3">
    <div class="bg-primary-700 radius-round w-6 h-6 m-x-a"></div>
      <p class="font-size-1">--primary-700</p>
  </div>
  <div class="text-center p-t-3">
    <div class="bg-primary-900 radius-round w-6 h-6 m-x-a"></div>
      <p class="font-size-1">--primary-900</p>
  </div>
</div>

#### Accent 1

<div class="grid-container">
  <div class="text-center p-t-3">
    <div class="bg-accent1-100 radius-round w-6 h-6 m-x-a"></div>
    <p class="font-size-1">--accent1-100</p>
  </div>
  <div class="text-center p-t-3">
    <div class="bg-accent1-300 radius-round w-6 h-6 m-x-a"></div>
      <p class="font-size-1">--accent1-300</p>
  </div>
  <div class="text-center p-t-3">
    <div class="bg-accent1-500 radius-round w-6 h-6 m-x-a"></div>
      <p class="font-size-1">--accent1-500</p>
  </div>
  <div class="text-center p-t-3">
    <div class="bg-accent1-700 radius-round w-6 h-6 m-x-a"></div>
      <p class="font-size-1">--accent1-700</p>
  </div>
  <div class="text-center p-t-3">
    <div class="bg-accent1-900 radius-round w-6 h-6 m-x-a"></div>
      <p class="font-size-1">--accent1-900</p>
  </div>
</div>


#### Accent 2

<div class="grid-container">
  <div class="text-center p-t-3">
    <div class="bg-accent2-100 radius-round w-6 h-6 m-x-a"></div>
    <p class="font-size-1">--accent2-100</p>
  </div>
  <div class="text-center p-t-3">
    <div class="bg-accent2-300 radius-round w-6 h-6 m-x-a"></div>
      <p class="font-size-1">--accent2-300</p>
  </div>
  <div class="text-center p-t-3">
    <div class="bg-accent2-500 radius-round w-6 h-6 m-x-a"></div>
      <p class="font-size-1">--accent2-500</p>
  </div>
  <div class="text-center p-t-3">
    <div class="bg-accent2-700 radius-round w-6 h-6 m-x-a"></div>
      <p class="font-size-1">--accent2-700</p>
  </div>
  <div class="text-center p-t-3">
    <div class="bg-accent2-900 radius-round w-6 h-6 m-x-a"></div>
      <p class="font-size-1">--accent2-900</p>
  </div>
</div>


### System-level palette
System-level palette consist of four main system status colors spectrums, such as success, danger, warning, and info. System-level palette is consistent in all Design System color schemes. 
#### Success
<div class="grid-container">
  <div class="text-center p-t-3">
    <div class="bg-success-100 radius-round w-6 h-6 m-x-a"></div>
    <p class="font-size-1">--success-100</p>
  </div>
  <div class="text-center p-t-3">
    <div class="bg-success-300 radius-round w-6 h-6 m-x-a"></div>
      <p class="font-size-1">--success-300</p>
  </div>
  <div class="text-center p-t-3">
    <div class="bg-success-500 radius-round w-6 h-6 m-x-a"></div>
      <p class="font-size-1">--success-500</p>
  </div>
  <div class="text-center p-t-3">
    <div class="bg-success-700 radius-round w-6 h-6 m-x-a"></div>
      <p class="font-size-1">--success-700</p>
  </div>
  <div class="text-center p-t-3">
    <div class="bg-success-900 radius-round w-6 h-6 m-x-a"></div>
      <p class="font-size-1">--success-900</p>
  </div>
</div>

#### Danger
<div class="grid-container">
  <div class="text-center p-t-3">
    <div class="bg-danger-100 radius-round w-6 h-6 m-x-a"></div>
    <p class="font-size-1">--danger-100</p>
  </div>
  <div class="text-center p-t-3">
    <div class="bg-danger-300 radius-round w-6 h-6 m-x-a"></div>
      <p class="font-size-1">--danger-300</p>
  </div>
  <div class="text-center p-t-3">
    <div class="bg-danger-500 radius-round w-6 h-6 m-x-a"></div>
      <p class="font-size-1">--danger-500</p>
  </div>
  <div class="text-center p-t-3">
    <div class="bg-danger-700 radius-round w-6 h-6 m-x-a"></div>
      <p class="font-size-1">--danger-700</p>
  </div>
  <div class="text-center p-t-3">
    <div class="bg-danger-900 radius-round w-6 h-6 m-x-a"></div>
      <p class="font-size-1">--danger-900</p>
  </div>
</div>


#### Warning
<div class="grid-container">
  <div class="text-center p-t-3">
    <div class="bg-warning-100 radius-round w-6 h-6 m-x-a"></div>
    <p class="font-size-1">--warning-100</p>
  </div>
  <div class="text-center p-t-3">
    <div class="bg-warning-300 radius-round w-6 h-6 m-x-a"></div>
      <p class="font-size-1">--warning-300</p>
  </div>
  <div class="text-center p-t-3">
    <div class="bg-warning-500 radius-round w-6 h-6 m-x-a"></div>
      <p class="font-size-1">--warning-500</p>
  </div>
  <div class="text-center p-t-3">
    <div class="bg-warning-700 radius-round w-6 h-6 m-x-a"></div>
      <p class="font-size-1">--warning-700</p>
  </div>
  <div class="text-center p-t-3">
    <div class="bg-warning-900 radius-round w-6 h-6 m-x-a"></div>
      <p class="font-size-1">--warning-900</p>
  </div>
</div>


#### Info
<div class="grid-container">
  <div class="text-center p-t-3">
    <div class="bg-info-100 radius-round w-6 h-6 m-x-a"></div>
    <p class="font-size-1">--info-100</p>
  </div>
  <div class="text-center p-t-3">
    <div class="bg-info-300 radius-round w-6 h-6 m-x-a"></div>
      <p class="font-size-1">--info-300</p>
  </div>
  <div class="text-center p-t-3">
    <div class="bg-info-500 radius-round w-6 h-6 m-x-a"></div>
      <p class="font-size-1">--info-500</p>
  </div>
  <div class="text-center p-t-3">
    <div class="bg-info-700 radius-round w-6 h-6 m-x-a"></div>
      <p class="font-size-1">--info-700</p>
  </div>
  <div class="text-center p-t-3">
    <div class="bg-info-900 radius-round w-6 h-6 m-x-a"></div>
      <p class="font-size-1">--info-900</p>
  </div>
</div>

#### Grayscale
In our grayscale pallete we have included 10 spectrum colors for more design flexibility. 
<div class="grid-container">
  <div class="text-center p-t-3">
    <div class="bg-white-color radius-round w-6 h-6 m-x-a border-1 border-gray-600"></div>
    <p class="font-size-1">--white</p>
  </div>
    <div class="text-center p-t-3">
    <div class="bg-gray-50 radius-round w-6 h-6 m-x-a border-1 border-gray-600"></div>
      <p class="font-size-1">--gray-50</p>
  </div>
  <div class="text-center p-t-3">
    <div class="bg-gray-100 radius-round w-6 h-6 m-x-a border-1 border-gray-600"></div>
      <p class="font-size-1">--gray-100</p>
  </div>
  <div class="text-center p-t-3">
    <div class="bg-gray-200 radius-round w-6 h-6 m-x-a border-1 border-gray-600"></div>
      <p class="font-size-1">--gray-200</p>
  </div>
  <div class="text-center p-t-3">
    <div class="bg-gray-300 radius-round w-6 h-6 m-x-a border-1 border-gray-600"></div>
      <p class="font-size-1">--gray-300</p>
  </div>
  <div class="text-center p-t-3">
    <div class="bg-gray-400 radius-round w-6 h-6 m-x-a"></div>
    <p class="font-size-1">--gray-400</p>
  </div>

</div>


<div class="grid-container">

  <div class="text-center p-t-3">
    <div class="bg-gray-500 radius-round w-6 h-6 m-x-a"></div>
    <p class="font-size-1">--gray-500</p>
  </div>

  <div class="text-center p-t-3">
    <div class="bg-gray-600 radius-round w-6 h-6 m-x-a"></div>
      <p class="font-size-1">--gray-600</p>
  </div>
  <div class="text-center p-t-3">
    <div class="bg-gray-700 radius-round w-6 h-6 m-x-a"></div>
      <p class="font-size-1">--gray-700</p>
  </div>
  <div class="text-center p-t-3">
    <div class="bg-gray-800 radius-round w-6 h-6 m-x-a"></div>
    <p class="font-size-1">--gray-800</p>
  </div>
  <div class="text-center p-t-3">
    <div class="bg-gray-900 radius-round w-6 h-6 m-x-a"></div>
      <p class="font-size-1">--gray-900</p>
  </div>
  <div class="text-center p-t-3">
    <div class="bg-black radius-round w-6 h-6 m-x-a"></div>
      <p class="font-size-1">--black</p>
  </div>
</div>


### Customizing colors

If you use custom colors to match your branding, CIELAB may not exactly match your brand’s hex codes. Their colors are their best match for those colors and emotional tone. We encourage you to use CIELAB to ensure your site’s colors meet  accessibility standards.

### Build your accessible color palette

There are a few tools that can help you build color palettes based on colors you provide.

- The Design System team uses <a href="https://accessiblepalette.com/">Accessible Palette</a> by Wildbit Labs to build our color palettes.
- <a href="https://tailwind.ink/">Tailwind Ink</a>
- CIELAB offers their own color <a href="https://cielab.io/">palette maker</a>.


## Typography

### Public Sans

<div class="font-demo">
  <div style="font-size: 6.75rem;">Aa</div>
  <p>A B C D E F G H I J K L M N O P Q R S T U V W X Y Z</p>
  <p>a b c d e f g h i j k l m n o p q r s t u v w x y z</p>
  <p>0 1 2 3 4 5 6 7 8 9</p>
</div>

The Design Systems uses [Public Sans](https://public-sans.digital.gov/), a strong, neutral typeface for interfaces, text, and headings, which was designed by the [United States Web Design System](https://designsystem.digital.gov/).

The base font size is 18px. Variable font sizes are used to improve readability on larger screens.

The line height is a ratio of 1.75 to the base font size. For each ascending level,  the ratio is decreased by ⅛. As a result, larger headings have smaller line-height ratios which improves readability.

<span class="cagov-table">
    <table width="100%">
      <tr>
        <th>Text Content</th><th>Properties</th>
      </tr>
      <tr>
        <td>Heading 1</td><td>Font size (Desktop): 2.9375rem + 0.1vw</br>Font size (Mobile): 2.625rem</br>Font weight: Bold</br>Line height: 1.25</td>
      </tr>
      <tr>
        <td>Heading 2</td><td>Font size (Desktop): 2.3175rem + 0.1vw</br>Font size (Mobile): 2.0625rem</br>Font weight: Bold</br>Line height: 1.375</td>
      </tr>
      <tr>
        <td>Heading 3</td><td>Font size (Desktop): 1.8125rem + 0.1vw</br>Font size (Mobile): 1.625rem</br>Font weight: Bold</br>Line height: 1.5</td>
      </tr>
      <tr>
        <td>Heading 4</td><td>Font size (Desktop): 1.4375rem + 0.1vw</br>Font size (Mobile): 1.25rem</br>Font weight: Bold</br>Line height: 1.625</td>
      </tr>
      <tr>
        <td>Heading 5</td><td>Font size (Desktop): 1.125rem + 0.1vw</br>Font size (Mobile): 1rem</br>Font weight: Bold</br>Line height: 1.75</td>
      </tr>
      <tr>
        <td>Paragraph</td><td>Font size (Desktop): 1.125rem + 0.1vw</br>Font size (Mobile): 1rem</br>Font weight: Normal</br>Line height: 1.75</td>
      </tr>
      <tr>
        <td>Paragraph large (for lead text)</td><td>Font size (Desktop): 1.4375rem + 0.1vw</br>Font size (Mobile): 1.25rem</br>Font weight: Normal</br>Line height: 1.625</td>
      </tr>
      <tr>
        <td>Paragraph small (for captions)</td><td>Font size (Desktop): 0.875rem + 0.1vw</br>Font size (Mobile): 0.875rem</br>Font weight: Normal</br>Line height: 1.875</td>
      </tr>
    </table>
</span>


## Buttons
We use Design System's buttons styles for actions in forms, surveys, dialogs and other call to action sections.
### Primary buttons
Primary buttons are using theme's primary color in their background or as border outline. Use class <code>btn-primary</code> for primary color background variation and `btn-primary-outline` for primary color outline variation. You can also add complimentary icon to it by using span with cagov icon font library class. Make sure you add `aria-hidden="true"` attribute to the icon span. 
<button class="btn-primary m-t-2 m-r-2">Primary</button> <a href="#" class="btn-primary-outline m-t-2">Primary outline <span class="ca-gov-icon-gear" aria-hidden="true"></span></a>


### Disabled buttons
Disabled button is using class <code>btn-disabled</code>. Disabled buttons should include the <code>aria-disabled="true"</code> attribute to indicate the state of the element to assistive technologies. Also, to be safe, add a <code>tabindex="-1"</code> attribute to your disabled button.
<button class="btn-disabled m-t-2 m-r-2" aria-disabled="true" tabindex="-1">Disabled</button> <a href="#" class="btn-disabled-outline m-t-2" aria-disabled="true" tabindex="-1">Disabled link <span class="ca-gov-icon-gear" aria-hidden="true"></span></a>


### Action buttons
We use action buttons in our call to action sections to guide users towards some goal. Action button consist of two span elements: action button title and action button text. Action button can be created by adding class `btn-action-primary` to a link or button element. Also, make sure you add span with class `btn-action-title` and add your link title text into it. For the links short description text add span with class `btn-action-text`.
<a href="#" class="btn-action-primary m-t-2"><span class="btn-action-title">Some link</span><span class="btn-action-text">Some description text</span></a>
<a href="#" class="btn-action-primary m-t-2"><span class="btn-action-title">Some link</span></a>
## Imagery

We use photos and illustrations for visualizing information. We follow these guidelines:
- Do not use images as unnecessary decoration.
- Use an aspect ratio of 3:2 for all images. The exception is if the proportions of the subject of the image have significance. For example, an image of a driver’s license or an image of an application form. 
- Use alt text whenever adding images. Alt text makes websites more accessible and helps with search engine optimization. Read more about writing alt text in [Harvard University's digital accessibility guidelines](https://accessibility.huit.harvard.edu/describe-content-images).

We currently use [icons from the State Web Template](https://template.webstandards.ca.gov/sample/icon-fonts.html). We are working on making them available through the Design System.

## Accessibility

We develop visual design that’s accessible and inclusive of all Californians. We aim to meet the W3C Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standards to comply with the requirements of Section 508. In practice, this means:
- Ensure sufficient color contrast between text and its background.
- Do not use color as the only visual means of conveying information.
- Provide visual focus indication for keyboard navigation.
- Do not make people hover their cursor to find things.
- Establish clear visual hierarchy by designing recognizable headings and creating descriptive labels for forms and navigation.
- Use a highly legible font like Public Sans in appropriate font size, line height, and line length that allow for comfortable reading and comprehension.
- Use icons purposefully as visual cues to connect to information or ideas. 
- Give visual feedback that’s easy to identify and understand. 
- Create responsive design.

