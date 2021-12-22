# Navigation components >> Back to top button >> Readme || 10

When users get at the bottom of a really long page, they often will need to get back to the top. Back to top button will take the user to the top of the page when clicked on. Custom element code can be placed inside the footer tag or right before the closing main tag.

## HTML

```
<cagov-back-to-top data-hide-after="7000" data-label="Back to top">
</cagov-back-to-top>

```

### Expected variables

There are some colors that should be defined by the containing page. Here are the CSS variable names and their fallback values used when not defined:

- var(--gray-100, #f9f9fa)
- var(--primary-color, #004abc)
- var(--primary-dark-color, #003484)
- var(--highlight-color, #fec02f)
- var(--small-text, 0.875rem)
- var(--white, #fff)


