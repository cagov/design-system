const defaults = require('./defaults.json');

// Note that several metadata properties need to be in EleventyComputed.
// See ./eleventyComputed.js.
module.exports = {
  site_name: defaults.site.name,
  page_social_image_width: 500,
  page_social_image_height: 500,
  page_social_image_alt: 'California Design System',
};
