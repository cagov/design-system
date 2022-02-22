const glob = require('glob');
const path = require('path');
const components = require('../docs/site/_data/editable/components.json');
const defaults = require('../docs/site/_data/editable/defaults.json');

module.exports = {
  layout: 'component-page',
  tags: ['component'],
  metadata: {
    social_image_width: 1200,
    social_image_height: 630,
  },
  eleventyComputed: {
    // This component's folder name, or slug.
    componentSlug: (article) =>
      article.page.filePathStem.match(/\/components\/(.+?)\/.+/)[1],
    // This component's content data for the 11ty site.
    component: (article) => components[article.componentSlug],
    // This component's title.
    title: (article) => article.component.name,
    // This component's description.
    description: (article) => article.component.description,
    // Need to ensure the permalink is always lower-case, even though some docs are not.
    permalink: (article) =>
      `${article.page.filePathStem.toLowerCase()}/index.html`,
    // The `has` object checks to see if this component has various .md files.
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
    metadata: {
      page_title: (article) =>
        `${article.component.title} | ${defaults.site.name}`,
      social_image_path: (article) => article.component.icon,
      social_image_alt_text: (article) =>
        `Illustration of the ${article.component.name} component`,
    },
  },
};
