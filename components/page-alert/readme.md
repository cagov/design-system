# Content components >> Page alert >> Readme || 10

Page alert provides brief, important or time-sensitive information. Yellow background color is used to grab users attention and create sense of importance and urgency. Page alert box usually appears beneath the site navigation on the homepage. It can include a hyperlink, but not a button or image.

<img src="https://github.com/cagov/design-system/blob/page-alert/components/page-alert/img/page-alert.jpg?raw=true" alt="Page alert sample">


## Specs

| Property | Value |
| --- | --- |
| Machine name | ds-page-alert |
| JavaScript | true |
| SCSS | ./src/index.scss |

## Project installation

The instructions assume familiarity with [npm](https://npmjs.com) package management tool, modern JavaScript techniques, and [Sass](https://sass-lang.com/).

1. `npm i @cagov/[machine-name]`
2. Use `import`[¹](/footnotes/#footnote1) or `require` to include **JavaScript**.  
3. Include **SCSS** in your Sass compiler.
4. Add the **Sample markup** to your HTML.
1. Note that the `<cagov-page-alert>` tag must be inside the `<main>` tag.

### Custom element data endpoints

- **data-icon** (CAGov icon's class name goes here, CAGov icon library and its classes can be found here: https://template.webstandards.ca.gov/sample/icon-fonts.html)
- **data-message** (page alert's text and links go here)

### Other dependencies

Page alert is using [CAGov font library](https://template.webstandards.ca.gov/sample/icon-fonts.html). You can use any icon from CAGov font library for your page alert icon by simply adding icon class into data-icon endpoint.

## Sample markup

```html
<link rel="stylesheet" href="https://california.azureedge.net/cdt/CAWeb/combined-css/1.0.1/dist/cagov.css">

<main>
<cagov-page-alert data-icon="ca-gov-icon-bell" data-message="Notice: DCC is soliciting proposals for the Local Jurisdiction Assistance Grant Program. <a href=&quot;/about-us/grant-funding/local-jurisdiction-assistance-grant-program/&quot;>Learn more</a>."></cagov-page-alert>
</main>
```

## Custom element data endpoint

- data-icon (CAGov icon's class name goes here, CAGov icon library and its classes can be found here: https://template.webstandards.ca.gov/sample/icon-fonts.html)
- data-message (page alert's text and links go here)

## Expected variables

There are some colors that should be defined by the containing page. Here are the CSS variable names and their fallback values used when not defined:

- var(--cagov-highlight, #fec02f);

## Base-css classes used

class `visually-hidden` is used in the close button for the screen reader's text.

¹ To use `import`, files must be served from a [webserver](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/What_is_a_web_server) such as Apache, Nginx, or [http-server](https://www.npmjs.com/package/http-server). The `file://` protocol will cause CORS errors in some browsers.
