const glob = require('glob');
const path = require('path');
const components = require('../docs/site/_data/components.json');
const defaults = require('../docs/site/_data/defaults.json');

const getComponentSlug = (article) =>
  article.page.filePathStem.match(/\/components\/(.+?)\/.+/)[1];

module.exports = {
  layout: 'component-page',
  tags: ['component'],
  eleventyComputed: {
    // componentSlug gets the folder name for the page's component.
    componentSlug: (article) => getComponentSlug(article),
    // Need to ensure the permalink is always lower-case, even though some docs are not.
    permalink: (article) =>
      `${article.page.filePathStem.toLowerCase()}/index.html`,
    // The `has` object checks to see if the component has various .md files.
    has: (article) => {
      const componentSlug = getComponentSlug(article);
      const pattern = `components/${componentSlug}/*.md`;
      const matches = glob
        .sync(pattern, { nocase: true })
        .map((file) => path.basename(file).toLowerCase());

      return {
        readme: matches.includes('readme.md'),
        'use-cases': matches.includes('use-cases.md'),
        changelog: matches.includes('changelog.md'),
      };
    },
    title: (article) => {
      const componentSlug = getComponentSlug(article);
      const component = components[componentSlug];
      const filename = article.page.fileSlug;
      let pagename = '';

      if (component) {
        pagename += `${component.name}: `;
      }

      if (filename.toLowerCase() === 'readme') {
        pagename += 'Readme';
      }
      if (filename.toLowerCase() === 'changelog') {
        pagename += 'Changelog';
      }
      if (filename.toLowerCase() === 'use-cases') {
        pagename += 'Use cases';
      }

      return pagename;
    },
    description: (article) => {
      const componentSlug = getComponentSlug(article);
      const component = components[componentSlug];

      if (component) {
        return component.blurb;
      }

      return defaults.page.description;
    },
  },
};
