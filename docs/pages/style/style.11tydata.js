module.exports = {
  eleventyComputed: {
    permalink: (article) => `/style/${article.page.fileSlug}/index.html`,
  },
};
