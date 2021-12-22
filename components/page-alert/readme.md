# Content components >> Page alert >> Readme || 10

Page alert provides brief, important or time-sensitive information. Yellow background color is used to grab users attention and create sense of importance and urgency. Page alert box usually appears beneath the site navigation on the homepage. It can include a hyperlink, but not a button or image.

<img src="https://github.com/cagov/design-system/blob/page-alert/components/page-alert/img/page-alert.jpg?raw=true" alt="Page alert sample">


## NPM install

npm install @cagov/ds-page-alert


## HTML

```
<cagov-page-alert data-icon="ca-gov-icon-bell" data-message="Notice: DCC is soliciting proposals for the Local Jurisdiction Assistance Grant Program. <a href=&quot;/about-us/grant-funding/local-jurisdiction-assistance-grant-program/&quot;>Learn more</a>."></cagov-page-alert>

```

## Custom element data endpoint

- data-icon (CAGov icon's class name goes here, CAGov icon library and its classes can be found here: https://template.webstandards.ca.gov/sample/icon-fonts.html)
- data-message (page alert's text and links go here)


## Expected variables

There are some colors that should be defined by the containing page. Here are the CSS variable names and their fallback values used when not defined:


- var(--cagov-highlight, #fec02f);


## Base-css classes used

class `visually-hidden` is used in the close button for the screen reader's text.


## Other Dependencies

Page alert is using CAGov font library: https://template.webstandards.ca.gov/sample/icon-fonts.html. You can use any icon from CAGov font library for your page alert icon by simply adding icon class into data-icon endpoint.