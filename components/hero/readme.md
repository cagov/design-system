# Hero component

This is a design for featuring important content at the top of a page. The layout uses a sidebar pattern with the text elements: header, description and call to action button on the left and an image on the right. On smaller screens the image appears above the text.

<img src="img/cannabis-hero.png">

## HTML

```
<div class="cagov-with-sidebar cagov-with-sidebar-left cagov-featured-section cagov-border">
  <div> <!-- intermediary wrapper -->
    <div class="cagov-stack cagov-p-2 cagov-featured-sidebar"><!-- sidebar -->
      <h2>Applying for a License</h2>
      <p>Learn about what is required to apply for a commercial cannabis license.</p>
      <a class="cagov-cta" href="/application/">Apply</a>
    </div>
    <div><!-- non-sidebar -->
      <img src="http://www.fillmurray.com/720/240" alt="Bill fill" class="cagov-featured-image" />
    </div>
  </div>
</div>
```

## Audits

Running the lighthouse audits against this HTML & CSS should produce no issues

<img src="img/cannabis-hero.png">

## Development

From the command line at the root of this project you can run:
```
npm run start
```
Which will start the web-dev server and will launch a new page linking to the components, click on hero to get the page created by ```preview.html```

### CSS

Sass compilation is run from the root of the project ```npm run sass:hero``` will create a plain css file from the scss file in this component css directory. This file inherits reusable css from /components/shared/css.

### Expected variables

There are some colors that should be defined by the containing page. 

- The ```background-color``` of the ```.cagov-cta``` has a default value but if the css variable is defined

Expected definition is:

```
:root {
  --primary-color: #33705B;
}
```