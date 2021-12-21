module.exports = {
  layout: "page",
  eleventyComputed: {
    permalink: article => `/${article.page.fileSlug}/index.html`
  }
};