import path from 'path';
import { fileURLToPath } from 'url';
import { createRequire } from 'module';

// fs.
const require = createRequire(import.meta.url);
const fs = require('fs');
// end fs.

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const vars = {
  // External.
  cagovUrl:
    'https://california.azureedge.net/cdt/statetemplate/5.6.2/fonts/CaGov.svg',
  stateTemplateIconsDir:
    '../../../node_modules/cagov-template-v6/images/icons/',
  stateTemplateFontsDir: '../../../node_modules/cagov-template-v6/fonts/',

  // This component.
  componentDir: 'dist',
  componentDirFonts: 'src/fonts/', // If changed, update .eleventy.js
  componentFontAll: 'src/fonts/CaGov.svg',
  componentFileSome: 'cagovSomeIcons.svg',
  componentFileAll: 'dist/allIcons.svg',

  componentSubdir: 'dist/svg',

  // These are 5.6.2 icons that don't render correctly.
  excludedIcons: [
    'audience',
    'cellphone-touch',
    'delete',
    'envelope-checklist',
    'mobile-graduate',
    'mobile-textbook',
    'share-Instagram',
    'share-instagram',
    'spartan-helmet',
    'textbook',
    'user-headphone',
    'user-laptop',
    'users-check-mark',
  ],

  // DS Website.
  siteDir: '/cagov-icons-svg/', // If changed, update .eleventy.js
  siteFileTemplate: '../../docs/site/_includes/layouts/icon-library.njk',
};

export { vars, __dirname, fs };
