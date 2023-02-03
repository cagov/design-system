import nunjucks from 'nunjucks';
import { promises as fs } from 'fs';

export const createHtmlHandler = (options) => {
  const { dirs } = options;

  const templatesDir = `${dirs.command}/templates`;
  nunjucks.configure(templatesDir, {
    autoescape: true,
  });

  return async (ctx) => {
    const {
      state: { filePath },
      query: { noJS, noCSS, noBASE },
    } = ctx;

    const jsEnabled = !(noJS === '' || noJS === 'true');
    const cssEnabled = !(noCSS === '' || noCSS === 'true');
    const baseEnabled = !(noBASE === '' || noBASE === 'true');

    // If the path ends with .raw.html, pass. Don't template it.
    if (ctx.path.endsWith('.raw.html')) {
      return;
    }

    const renderAttributes = {};

    // Load the given HTML file.
    await fs
      .readFile(filePath, 'utf-8')
      .catch(() => {
        // If file not found, we'll supply our own "not found" HTML.
        ctx.status = 404;
        return `<p>File not found: ${filePath}</p>`;
      })
      .then((str) => {
        // Prepare the HTML for nunjucks.
        renderAttributes.content = nunjucks.compile(str);
      });

    const componentPathIndex = filePath.indexOf('/examples');
    const componentPath = filePath.substring(0, componentPathIndex);

    if (jsEnabled) {
      await fs
        .access(`${componentPath}/src/index.js`)
        .then(() => {
          renderAttributes.packageJS = true;
        })
        .catch(() => false);
    }

    if (cssEnabled) {
      await Promise.any([
        fs.access(`${componentPath}/src/index.css`),
        fs.access(`${componentPath}/src/index.scss`),
      ])
        .then(() => {
          renderAttributes.packageCSS = true;
        })
        .catch(() => false);
    }

    renderAttributes.baseCSS = baseEnabled;

    // Render the HTML file into the template.
    const body = nunjucks.render('layout.njk', renderAttributes);

    // Return the result.
    ctx.body = body;
  };
};
