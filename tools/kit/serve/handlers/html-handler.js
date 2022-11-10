import nunjucks from 'nunjucks';
import { promises as fs, existsSync } from 'fs';
import path from 'path';
import url from 'url';

const thisDir = url.fileURLToPath(path.dirname(import.meta.url)); 

nunjucks.configure(thisDir, {
  autoescape: true
});

// Handle templated HTML.
export const htmlHandler = async (ctx) => {
  // If the path ends with .raw.html, pass. Don't template it.
  if (ctx.path.endsWith('.raw.html')) {
    return;
  }

  const renderAttributes = {};

  // Load the given HTML file.
  await fs.readFile(ctx.state.filePath)
    .then(buf => buf.toString())
    .catch(() => {
      // If file not found, we'll supply our own "not found" HTML.
      ctx.status = 404;
      return `<p>File not found: ${ctx.state.filePath}</p>`;
    })
    .then(str => { 
      // Prepare the HTML for nunjucks.
      renderAttributes.content = nunjucks.compile(str); 
    });

  const jsFileExists = existsSync('src/index.js');
  if (jsFileExists) {
    renderAttributes.packageJS = true;
  }

  const cssFileExists = existsSync('src/index.css') || existsSync('src/index.scss');
  if (cssFileExists) {
    renderAttributes.packageCSS = true;
  }

  // Render the HTML file into the template.
  const body = nunjucks.render('layout.njk', renderAttributes);

  // Return the result.
  ctx.body = body;
};