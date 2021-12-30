module.exports = {
  layout: 'component-page',
  tags: ['component'],
  eleventyComputed: {
    componentSlug: (article) =>
      article.page.filePathStem.match(/\/components\/(.+?)\/.+/)[1],
  },
};
