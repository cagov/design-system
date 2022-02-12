# Contributors

## Generate the files

- `npm run build`: Builds the mega sprite and individual SVGs from the hosted icon font. You should only have to run this when new versions of the font are released.
  Check the version in the `get-font` script.

## About fonts

- Currently the fonts in the fonts folder and icon-font.scss and are hard coded. Ideally we'd create a script so they can be downloaded from source if need be.

## Manage the website demo

- `npm run demo`: Create the demo template at `/docs/site/_includes/layouts/icon-demo.njk`.

- SVGs are transfered to the destination site via `/.eleventy.js`

- demo.css is included at `docs/src/css/sass/index.scss` npm run site:build to update.

- Components is index.js JS is included at docs/src/css/sass/index.scss import '../../../components/icons/src/index.js';
