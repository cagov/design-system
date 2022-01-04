# Structural components >> Site footer >> Readme || 10

This CSS only module contains the styles required to create agency footer. This component is usually placed on top of statewide footer and consists of three major parts: site logo, secondary links and social media links. Site logo is optional. Agency footer is using svg icons for most common social media platforms such as facebook, twitter, instagram, youtube, GitHub. Also, for the contacts link there is mail svg icon.


<img src="https://files.covid19.ca.gov/img/site-footer.jpg" />

## Specs

| Property | Value |
| --- | --- |
| Machine name | ds-agency-footer |
| JavaScript | false |
| SCSS | ./src/index.scss |

## Project installation

The instructions assume familiarity with [npm](https://npmjs.com) package management tool and [Sass](https://sass-lang.com/).

1. Include **SCSS** in your compiler.
2. Add the **Sample markup** from the component to your HTML.
3. Place your own site links within the `<div class="footer-secondary-links">` element. Your social media links go within `<div class="footer-social-links">`.


## CSS variables

There are some colors that should be defined by the containing page. Here are the CSS variable names and their fallback values used when not defined:

- var(--w-lg, 1176px);
- var(--gray-100, #f9f9fa);
- var(--primary-color, #064e66);
- var(--primary-dark-color, #1e1569);
- var(--highlight-color, #fec02f);

