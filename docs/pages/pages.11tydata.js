module.exports = {
  layout: 'page',
  eleventyComputed: {
    permalink: (article) =>
      `${article.page.filePathStem.replace('/docs/pages', '')}/index.html`,
  },
};
