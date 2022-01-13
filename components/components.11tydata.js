const glob = require('glob');
const path = require('path');
const components = require('../docs/site/_data/components.json');
const defaults = require('../docs/site/_data/defaults.json');

const getComponentSlug = (article) =>
  article.page.filePathStem.match(/\/components\/(.+?)\/.+/)[1];

const normalizePagename = (basename) => {
  if (basename.toLowerCase() === 'readme') {
    return 'Readme';
  }
  if (basename.toLowerCase() === 'changelog') {
    return 'Changelog';
  }
  if (basename.toLowerCase() === 'use-cases') {
    return 'Use cases';
  }
  return basename;
};

module.exports = {
  layout: 'component-page',
  tags: ['component'],
  metadata: {
    social_image_width: 200,
    social_image_height: 150,
  },
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

      pagename += normalizePagename(filename);
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
    metadata: {
      social_image_path: (article) => {
        const componentSlug = getComponentSlug(article);
        const component = components[componentSlug];

        if (component) {
          return component.icon;
        }

        return defaults.page.social_image_path;
      },
      social_image_alt_text: (article) => {
        const componentSlug = getComponentSlug(article);
        const component = components[componentSlug];

        if (component) {
          return `Illustration of the ${component.name} component`;
        }

        return defaults.page.social_image_alt_text;
      },
    },
  },
};
