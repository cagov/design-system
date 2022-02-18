# Contributors

## Development

- `npm run build:sprite-some`: A utility command for developers to create sprite with a subset of icons.

- `npm run dev:clear-cache`: Regenerates all the assets needed related to icons and cleares the website design cache.

- `npm run dev:demo`: Regenerates the icon library.

- `npm run dev:icons`: Regenerates the icon set from the hosted CA.gov font. You should only have to run this when new versions of the font are released.

## About fonts

- Currently the fonts in the fonts folder and icon-font.scss and are hard coded. Ideally we'd create a script so they can be downloaded from source if need be.

## Design system icon library management

- The icon library is written to `/docs/site/_includes/layouts/icon-demo.njk`.

- SVGs and font files are transfered via pass through at `/.eleventy.js`

- `demo.scss` is included at `docs/src/css/sass/index.scss`

- Component's JS is included at `/docs/src/js/sass/index.js`';
