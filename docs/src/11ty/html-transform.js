const cheerio = require('cheerio');

module.exports = (html, outputPath) => {
  const isHtml = !outputPath || outputPath.endsWith('.html');
  const isComponent = outputPath.includes('/components/');
  const isNotGallery = !outputPath.includes('/components/index.html');

  let result = html;

  // On component pages:
  if (isHtml && isComponent && isNotGallery) {
    const $ = cheerio.load(result);

    // Remove the second H1 from the page.
    // This H1 is coming from the top of the component's markdown file(s).
    // We don't need it on the site because we render our own H1.
    $('h1').each((i, el) => {
      if (i === 1) {
        $(el).remove();
      }
    });

    result = $.html();
  }

  return result;
};
