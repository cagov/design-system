# Visual components >> Link icon >> Readme || 10

- PDF icon: The pdf icon is the letters PDF surrounded by a box outline. It indicates that the link opens a PDF. PDF link should not appear in combination with any other link icon.
- External link: this component can also add an external-link icon next to a link that goes outside current website. It lets people know they will leave the site when that link is opened. However, if link is already link to pdf file the external link icon (or any other icon) will not be displayed.


## PDF link icon

This can be important for mobile users, who may not want to use up their data plan allowance opening PDFs.

It’s also important for those who use screen readers, as it will announce “This is a PDF file” before they click the link.

If a link is both external and a PDF, only the PDF icon will appear. It’s more important to tell people they’re going to a PDF than it is to tell them that it’s not hosted on the same site.

## External link icon
This component adds an icon next to a link that goes outside your website. It lets people know they will leave the site when that link is opened.

![Screen Shot 2021-11-30 at 12 56 47 PM](https://user-images.githubusercontent.com/31669748/144338964-a374ffb2-7d45-42a6-9487-49fe856a5208.png)


## Specs

| Property | Value |
| --- | --- |
| Machine name | ds-link-icon |
| JavaScript | true |
| SCSS | ./src/index.scss |

## Project installation

The instructions assume familiarity with [npm](https://npmjs.com) package management tool, modern JavaScript techniques, and [Sass](https://sass-lang.com/).

1. `npm i @cagov/[machine-name]`
2. Use `import`[¹](/footnotes/#footnote1) or `require` to include **JavaScript**.  
3. Include **SCSS** in your Sass compiler.
4. Add the **Sample markup** to your HTML.
1. Note that the `<a>` tags must be inside the `<main>` tag and external link to icons are required.

### Other dependencies

Page alert is using [CAGov font library](https://template.webstandards.ca.gov/sample/icon-fonts.html). You can use any icon from CAGov font library for your page alert icon by simply adding icon class into data-icon endpoint.

## Sample HTML

```html
<link *rel*="stylesheet" *href*="https://california.azureedge.net/cdt/CAWeb/combined-css/1.0.1/dist/cagov.css">

<main>
	<a href="link.pdf">This is pdf link.</a>
	<a href="https://google.com">This is an external link.</a>
</main>
```

## CSS variables

There are some colors that should be defined by the containing page. Here are the CSS variable names and their fallback values used when not defined:

- var(--primary-color, #e1e0e3)
- var(--primary-dark-color, #003484)

## Exceptions

There are cases when external link icon is not needed or messing the existing design. Here are the cases when external link icon is disabled:

```scss
.cagov-card, // card-grid component links
.wp-block-button__link, // buttons inside of design system hero banner
.footer-social-links a, // social icons links
img ~, // links that are using images
svg ~, // links that are using SVG icons
.pdf-link-icon ~ // links to PDF files 
```
