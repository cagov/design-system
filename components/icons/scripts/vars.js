const vars = {
  // External.
  cagovUrl:
    'https://california.azureedge.net/cdt/statetemplate/5.6.1/fonts/CaGov.svg',

  // This component.
  componentDir: 'dist',
  componentDirFonts: 'src/fonts/', // If changed, update .eleventy.js
  componentFontAll: 'src/fonts/CaGov.svg',
  componentFileSome: 'cagovSomeIcons.svg',
  componentFileAll: 'dist/allIcons.svg',

  componentSubdir: 'dist/svg',
  componentTextLabel: 'Download',
  componentPatternEach: 'dist/svg/*.svg',

  // DS Website.
  siteDir: '/cagov-icons-svg/', // If changed, update .eleventy.js
  siteFileTemplate: '../../docs/site/_includes/layouts/icon-library.njk',
};

export default vars;
