import Router from '@koa/router';
import path from 'path';
import url from 'url';
import { htmlHandler } from './html-handler.js';
import { cssHandler } from './css-handler.js';
import { jsHandler } from './js-handler.js';

const thisDir = url.fileURLToPath(path.dirname(import.meta.url));
const templatesDir = `${thisDir}/templates`;

export const router = new Router();

// Append index.html to directory requests.
router.get(['/', '/(.*)/'], (ctx) => {
  ctx.redirect(`${ctx.path}index.html`);
  ctx.status = 301;
});

// Find the file for each request.
router.get('/(.*)', async (ctx, next) => {
  let filePath;

  // Redefine the file path for special package-related paths.
  ['src', 'dist'].forEach((prefix) => {
    if (ctx.path.startsWith(`/_${prefix}/`)) {
      filePath = ctx.path.replace(`/_${prefix}/`, `${prefix}/`);
    }
  });

  // Redefine the file path for special template-related paths.
  if (ctx.path.startsWith(`/_templates/`)) {
    filePath = ctx.path.replace(`/_templates/`, `${templatesDir}/`);
  }

  // Otherwise, point to the examples folder.
  if (!filePath) {
    filePath = `examples${ctx.path}`;
  }

  // Pass the filePath to subsequent middlewares.
  ctx.state.filePath = filePath;

  // Defer to next middleware.
  await next();

  if (ctx.status !== 404) {
    console.log(`Served: ${ctx.path} => ${ctx.state.filePath}`);
  } else {
    console.log(`Not found: ${ctx.path} => ${ctx.state.filePath}`)
  }
});

// Handle templated HTML.
router.get('/(.*).html', htmlHandler);

// Handle CSS and Sass.
router.get('/(.*).css', cssHandler);

// Handle JS.
router.get('/(.*).js', jsHandler);