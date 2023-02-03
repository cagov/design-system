import nunjucks from 'nunjucks';

export const createDigestHandler = (options, examples) => {
  const { dirs } = options;

  const templatesDir = `${dirs.command}/templates`;
  nunjucks.configure(templatesDir, {
    autoescape: true,
  });

  return async (ctx) => {
    // Render the HTML file into the template.
    const body = nunjucks.render('digest.njk', { examples });

    // Return the result.
    ctx.body = body;
  };
};
