import Router from '@koa/router';
import { htmlHandler } from './html-handler.js';
import { cssHandler } from './css-handler.js';
import { jsHandler } from './js-handler.js';

export const createRouter = (options, components) => {
  const { dirs } = options;

  const router = new Router();

  // Append index.html to directory requests.
  const indexRoutes = components.flatMap((component) => [
    `/${component.route}`,
    `/${component.route}/`,
    `/${component.route}/(.*)/`,
  ]);
  router.get(['/', '/(.*)/', ...indexRoutes], (ctx) => {
    const index =
      ctx.path.slice(-1) === '/'
        ? `${ctx.path}index.html`
        : `${ctx.path}/index.html`;
    ctx.redirect(index);
  });

  // Find the file for each request.
  const fileRoutes = components.map((component) => `/${component.route}/(.*)`);
  router.get([`/(.*)`, ...fileRoutes], async (ctx, next) => {
    let filePath;

    components.forEach((component) => {
      // Redefine the file path for special package-related paths.
      ['src', 'dist'].forEach((prefix) => {
        if (ctx.path.startsWith(`/${component.route}/_${prefix}/`)) {
          filePath = ctx.path.replace(
            `/${component.route}/_${prefix}/`,
            `${component.dir}/${prefix}/`,
          );
        }
      });
      // Redefine the file path for special template-related paths.
      if (ctx.path.startsWith(`/${component.route}/_templates/`)) {
        filePath = ctx.path.replace(
          `/${component.route}/_templates/`,
          `${dirs.command}/templates/`,
        );
      }
      // Otherwise, point to the examples folder.
      if (!filePath) {
        filePath = `${component.dir}/examples${ctx.path.replace(
          `/${component.route}`,
          '',
        )}`;
      }
    });

    // Redefine the file path for special package-related paths.
    ['src', 'dist'].forEach((prefix) => {
      if (ctx.path.startsWith(`/_${prefix}/`)) {
        filePath = ctx.path.replace(`/_${prefix}/`, `${prefix}/`);
      }
    });

    // Redefine the file path for special template-related paths.
    if (ctx.path.startsWith(`/_templates/`)) {
      filePath = ctx.path.replace(`/_templates/`, `${dirs.command}/templates/`);
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
