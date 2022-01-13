const defaults = require('./defaults.json');

// Note that several metadata properties need to be in EleventyComputed.
// See ./eleventyComputed.js.
module.exports = {
  site_name: defaults.site.name,
  social_image_width: defaults.page.social_image_width,
  social_image_height: defaults.page.social_image_height,
  social_image_alt_text: defaults.page.social_image_alt_text,
};
