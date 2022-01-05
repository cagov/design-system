const glob = require('glob');
const path = require('path');

module.exports = {
  layout: 'component-page',
  tags: ['component'],
  eleventyComputed: {
    // componentSlug gets the folder name for the page's component.
    componentSlug: (article) =>
      article.page.filePathStem.match(/\/components\/(.+?)\/.+/)[1],
    // Need to ensure the permalink is always lower-case, even though some docs are not.
    permalink: (article) =>
      `${article.page.filePathStem.toLowerCase()}/index.html`,
    // The `has` object checks to see if the component has various .md files.
    has: (article) => {
      const pattern = `components/${article.componentSlug}/*.md`;
      const matches = glob
        .sync(pattern, { nocase: true })
        .map((file) => path.basename(file).toLowerCase());
      return {
        readme: matches.includes('readme.md'),
        'use-cases': matches.includes('use-cases.md'),
        changelog: matches.includes('changelog.md'),
      };
    },
  },
};
