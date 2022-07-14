# Contributors

## Development

- `npm run dev:sprite-some`: A utility command for developers to create sprite with a subset of icons. Use a space-separated list to pass icon ids.

- `npm run dev:clear-cache`: Regenerates all the assets related to icons and cleares the website design cache.

- `npm run dev:library`: Regenerates the icon library.

- `npm run dev:sprite`: Regenerates the sprite from individual svgs. You should only have to run this when new versions of the font are released.

- `npm run dev:font-sass`: Pipe sass file to design system website.


## Design system icon library management

- The icon library is written to `/docs/site/_includes/layouts/icon-library.njk`.

- SVGs and font files are transfered via pass through at `/.eleventy.js`

- `icon-library.scss` is included at `docs/src/css/sass/index.scss`

- Component's JS is included at `/docs/src/js/sass/index.js`';
