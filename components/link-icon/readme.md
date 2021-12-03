# Link icon component

- PDF icon: The pdf icon is the letters PDF surrounded by a box outline. It indicates that the link opens a PDF. PDF link should not appear in combination with any other link icon.
- External link: this component can also add an external-link icon next to a link that goes outside current website. It lets people know they will leave the site when that link is opened. However, if link is already link to pdf file the external link icon (or any other icon) will not be displayed.


## PDF link icon

This can be important for mobile users, who may not want to use up their data plan allowance opening PDFs.

It’s also important for those who use screen readers, as it will announce “This is a PDF file” before they click the link.

If a link is both external and a PDF, only the PDF icon will appear. It’s more important to tell people they’re going to a PDF than it is to tell them that it’s not hosted on the same site.

##  External link icon
This component adds an icon next to a link that goes outside your website. It lets people know they will leave the site when that link is opened.

![Screen Shot 2021-11-30 at 12 56 47 PM](https://user-images.githubusercontent.com/31669748/144338964-a374ffb2-7d45-42a6-9487-49fe856a5208.png)


## NPM install

npm install @cagov/ds-link-icon


## HTML

```
<a href="link.pdf">This is pdf link.</a>
<a href="https://google.com">This is an external link.</a>

```

### Expected variables

There are some colors that should be defined by the containing page. Here are the CSS variable names and their fallback values used when not defined:


- var(--primary-color, #e1e0e3)
- var(--primary-dark-color, #003484)

### Exceptions

There are cases when external link icon is not needed or messing the existing design. Here are the cases when external link icon is disabled:

```
.cagov-card, // card-grid component links
.wp-block-button__link, // buttons inside of design system hero banner
.footer-social-links a, // social icons links
img ~, // links that are using images
svg ~, // links that are using SVG icons
.pdf-link-icon ~ // links to PDF files

```
