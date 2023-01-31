import nunjucks from 'nunjucks';
import { promises as fs, readFileSync, existsSync } from 'fs';

export const createHtmlHandler = (options) => {
  const { dirs } = options;

  const templatesDir = `${dirs.command}/templates`;

  const nunjucksEnv = new nunjucks.Environment({ autoescape: true });
  const layoutStr = readFileSync(`${templatesDir}/layout.njk`, 'utf-8');
  const layout = nunjucks.compile(layoutStr, nunjucksEnv);

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
      .readFile(filePath)
      .then((buf) => buf.toString())
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
      const jsFileExists = existsSync(`${componentPath}/src/index.js`);
      if (jsFileExists) {
        renderAttributes.packageJS = true;
      }
    }

    if (cssEnabled) {
      const cssFileExists = existsSync(`${componentPath}/src/index.css`);
      const sassFileExists = existsSync(`${componentPath}/src/index.scss`);
      if (cssFileExists || sassFileExists) {
        renderAttributes.packageCSS = true;
      }
    }

    renderAttributes.baseCSS = baseEnabled;

    // Render the HTML file into the template.
    const body = layout.render(renderAttributes);

    // Return the result.
    ctx.body = body;
  };
};
