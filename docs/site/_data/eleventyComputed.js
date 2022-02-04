const defaults = require('./editable/defaults.json');
const root = require('./root.js');

const buildURL = (path, domain) => {
  try {
    const u = new URL(path, domain);
    return u.href;
  } catch {
    return path;
  }
};

module.exports = {
  // Note that several metadata properties do not need to be in EleventyComputed.
  // See ./metadata.js for more.
  title: (article) => {
    if (
      'title' in article &&
      article.title !== '' &&
      article.title !== defaults.site.name
    ) {
      return `${article.title} | ${defaults.site.name}`;
    }
    return defaults.site.name;
  },
  metadata: {
    canonical_url: (article) => buildURL(article.permalink, root),
    page_description: (article) =>
      article.metadata?.page_description ||
      article?.description ||
      defaults.page.description,
    open_graph_description: (article) =>
      article.metadata?.open_graph_description ||
      article?.description ||
      defaults.page.description,
    open_graph_title: (article) =>
      article.metadata?.open_graph_title ||
      article?.title ||
      defaults.page.title,
    twitter_title: (article) =>
      article.metadata?.twitter_title || article?.title || defaults.page.title,
    keywords: (article) => {
      if (article?.keywords) {
        // Combine any article keywords with site default keywords.
        return `${defaults.site.keywords}, ${article.keywords}`;
      }
      return defaults.site.keywords;
    },
    social_image_url: (article) => {
      const path =
        article.metadata?.social_image_path || defaults.page.social_image_path;
      return buildURL(path, root);
    },
  },
};
