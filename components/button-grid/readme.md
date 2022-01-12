# Content components >> Link grid >> Readme || 10

The card grid depends on individual cards and lays them out in a grid

<img src="img/card-grid.png">

## Specs

| Property | Value |
| --- | --- |
| Machine name | ds-button-grid |
| JavaScript | false |
| SCSS | ./src/index.scss |

## Project installation

The instructions assume familiarity with [npm](https://npmjs.com) package management tool and [Sass](https://sass-lang.com/).

1. Include **SCSS** in your compiler.
2. Add the **Sample markup** from the component to your HTML.

3. Modify the **Sample markup** with your URLs and card text as needed.  

## Sample markup

```
<div class="cagov-grid">
  <a href="linkurl" class="no-deco cagov-card">
    <h3>card title here</h3>
    <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24"
      width="24px">
      <g>
        <path d="M0,0h24v24H0V0z" fill="none" />
      </g>
      <g>
        <polygon points="6.23,20.23 8,22 18,12 8,2 6.23,3.77 14.46,12" />
      </g>
    </svg>
  </a>
  <!-- ... design expects 3 cards usually -->
</div>
```

## Audits

Running the lighthouse audits against this HTML & CSS should produce no issues

<img src="img/grid-audit.png">

## Contributor/Developer documentation

From the command line at the root of this project you can run:
```
npm run start
```
Which will start the web-dev server and will launch a new page linking to the components, click on hero to get the page created by ```preview.html```

### CSS variables

There are some colors that should be defined by the containing page. 

- The header text color, bottom border color and fill  of the svg use a default value but if the css variable is defined

Expected definition is:

```
:root {
  --primary-color: #33705B;
  --gray-100: #f9f9fa;
  --gray-200: #ededef;
}
```