import Router from '@koa/router';
import { htmlHandler } from './html-handler.js';
import { cssHandler } from './css-handler.js';
import { jsHandler } from './js-handler.js';

export const createRouter = (options, serveDir, examples) => {
  const { dirs } = options;

  const router = new Router();

  // Append index.html to directory requests.
  const indexRoutes = examples.flatMap((example) => [
    `/${example.exampleRoute}`,
    `/${example.exampleRoute}/`,
    `/${example.exampleRoute}/(.*)/`,
  ]);
  router.get(['/', '/(.*)/', ...indexRoutes], (ctx) => {
    const index =
      ctx.path.slice(-1) === '/'
        ? `${ctx.path}index.html`
        : `${ctx.path}/index.html`;
    ctx.redirect(index);
  });

  router.get(['/_src/(.*)', '/(.*)/_src/(.*)'], async (ctx, next) => {
    ctx.state.filePath = `${dirs.target}${ctx.path.replace('/_src/', '/src/')}`;
    await next();
  });

  router.get(['/_dist/(.*)', '/(.*)/_dist/(.*)'], async (ctx, next) => {
    ctx.state.filePath = `${dirs.target}${ctx.path.replace('/_dist/', '/dist/')}`;
    await next();
  });

  router.get(['/_templates/(.*)', '/(.*)/_templates/(.*)'], async (ctx, next) => {
    const templateFile = ctx.path.substring(ctx.path.indexOf('_templates/') + 11);
    ctx.state.filePath = `${dirs.command}/templates/${templateFile}`;
    await next();
  });

  examples.forEach((example) => {
    if (example.exampleRoute) {
      router.get(`/${example.exampleRoute}/(.*)`, async (ctx, next) => {
        if (!ctx.state.filePath) {
          const exampleFile = ctx.path.replace(`/${example.exampleRoute}/`, '');
          ctx.state.filePath = `${example.absoluteDir}/${exampleFile}`;
        }
        await next();
      });
    }
  });

  // Find the file for each request.
  router.get([`/(.*)`], async (ctx, next) => {
    // Otherwise, point to the examples folder.
    if (!ctx.state.filePath) {
      ctx.state.filePath = `${dirs.target}/examples${ctx.path}`;
    }

    // Defer to next middleware.
    await next();

    if (ctx.status !== 404) {
      console.log(`Served: ${ctx.path} => ${ctx.state.filePath}`);
    } else {
      console.log(`Not found: ${ctx.path} => ${ctx.state.filePath}`);
    }
  });

  // Handle templated HTML.
  router.get('/(.*).html', htmlHandler);

  // Handle CSS and Sass.
  router.get('/(.*).css', cssHandler);

  // Handle JS.
  router.get('/(.*).js', jsHandler);

  return router;
};
