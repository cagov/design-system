


# Regulatory outline

The regulatory outline replicates the ordering of California government code. It is a list that automatically uses the following pattern:

(a)(b)(c)

    (1)(2)(3)

        (A)(B)(C)

            (i)(ii)(iii)

## When and how to use it

If possible, rewrite information from regulations or government code using plain language.

If you must put regulations or government code on your webpage, use the regulatory outline. It allows you to publish properly formatted regulations without using PDFs, which may not meet accessibility standards.

To use the regulatory outline, apply the `cagov-regulatory-outline` class to the list. You can also go into code editor view and apply `.cagov-regulatory-outline <ol>` to the tag. All child `<li>` and `<ol>` tags will inherit the appropriate list styles up to 4 levels deep.

### How not to use it

Do not use the regulatory outline for content that isn’t regulations or government code. Use bullet points or numbered lists for that. This allows people to more easily recognize when they’re not looking at government code.

## Specs

| Property | Value |
| --- | --- |
| Machine name | ds-regulatory-outline |
| JavaScript | no |
| SCSS | ./src/index.scss |

## Project installation

The instructions assume familiarity with [npm](https://npmjs.com) package management tool and [Sass](https://sass-lang.com/).

1. Include **SCSS** in your compiler.
2. Add the **Sample markup** from the component to your HTML.
1. You may need to adjust `margin-left` depending on your default font size.

## Progressive enhancement

This is an HTML- and CSS-only component. JavaScript is not required. It uses [CSS variables](https://developer.mozilla.org/en-US/docs/Web/CSS/var()#syntax) to inherit design token values. Token definitions are not required because these style rules provide fallback values.

## Content Model

This component requires `ol.cagov-regulatory-outline`. It will not work with `ul`.

## Contributor/Developer documenation

`npm run build` - Generate css from scss files.

`npm run test` - Run headless tests with [Open Web Componenents](https://open-wc.org/).

`npm run test:visual` Run headed tests with [Open Web Componenents](https://open-wc.org/).
