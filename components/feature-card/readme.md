# Hero component

This is a design for featuring important content at the top of a page. The layout uses a sidebar pattern with the text elements: header, description and call to action button on the left and an image on the right. On smaller screens the image appears above the text.

<img src="img/cannabis-hero.png">

## HTML

```
<div class="wp-block-ca-design-system-hero cagov-with-sidebar cagov-with-sidebar-left cagov-featured-section cagov-bkgrd-gry cagov-block wp-block-cagov-hero">
  <div>
    <div class="cagov-stack cagov-p-2 cagov-featured-sidebar">
      <h2>We’re making changes to better serve you</h2>
      <div class="cagov-hero-body-content">
        <p>California has merged the three state cannabis authorities into a&nbsp;single,&nbsp;new Department of Cannabis Control.</p>

        <div class="wp-block-button">
          <a class="wp-block-button__link" href="https://cannabis.ca.gov/about-us/consolidation/">Learn more</a>
        </div>
      </div>
    </div>
    <div><img loading="lazy" class="cagov-featured-image" src="https://cannabis.ca.gov/wp-content/uploads/sites/2/2021/06/cannabis-buds-hero-1024x683.jpg" alt="" width="1024" height="683"></div>
  </div>
</div>
```

## Audits

Running the lighthouse audits against this HTML & CSS should produce no issues

<img src="img/hero-audit.png">

## Development

From the command line at the root of this project you can run:
```
npm run start
```
Which will start the web-dev server and will launch a new page linking to the components, click on hero to get the page created by ```preview.html```

### Expected variables

There are some colors that should be defined by the containing page. 

- The ```background-color``` of the CTA has a default value but if the css variable is defined

Expected definition is:

```
:root {
  --primary-color: #33705B;
}
```