# Navigation components >> Skip to content >> Readme || 10

This is a CSS only module that bypasses header and main navigation links an goes directly to the main content of the Web page. It is a first interactive item in the Web page, which links to the beginning of the main content. Activating the link sets focus beyond the other content to the main content.

## Specs

| Property | Value |
| --- | --- |
| Machine name | ds-skip-to-content |
| JavaScript | false |
| SCSS | ./src/index.scss |
|  |  |

## Project installation

The instructions assume familiarity with [npm](https://npmjs.com) package management tool and [Sass](https://sass-lang.com/).

1. Include **SCSS** in your compiler.
2. Add the **Sample markup** from the component just after the opening body tag of your HTML.
3. Add  `id=”main-content"`to the HTML tag at the top of the main content of the page. 

## Sample markup

```html preview
<div id="skip-to-content"><a href="#main-content">Skip to Main Content</a></div>
```




