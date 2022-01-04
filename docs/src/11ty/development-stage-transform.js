module.exports = (html, outputPath) => {
  let result = html;

  // outputPath === false means serverless templates
  if (!outputPath || outputPath.endsWith('.html')) {
    // Render post-lists
    if (html.includes('cagov-post-list')) {
      result = html;
    }
  }

  return result;
};
