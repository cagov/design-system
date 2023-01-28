import Router from '@koa/router';
import { htmlHandler } from './html-handler.js';
import { cssHandler } from './css-handler.js';
import { jsHandler } from './js-handler.js';

export const createRouter = (options, examples) => {
  const { dirs } = options;

  const router = new Router();

  /* 
    We'll perform initial redirects up-front. 
  */

  // Collect index.html routes for each "examples" folder.
  const indexRoutes = examples.flatMap(({ exampleRoute }) => [
    `/${exampleRoute}`,
    `/${exampleRoute}/`,
    `/${exampleRoute}/(.*)/`,
  ]);

  // Redirect to corresponding index.html files.
  router.get(['/', '/(.*)/', ...indexRoutes], (ctx) => {
    const index =
      ctx.path.slice(-1) === '/'
        ? `${ctx.path}index.html`
        : `${ctx.path}/index.html`;

    ctx.redirect(index);
  });

  /* 
    Next, we'll match URL routes to corresponding paths on the file system. 
    Each of these routes simply finds the filePath.
    Then the filePath is passed to the next Koa middleware for processing.
  */

  // Collect a list of special folders used within components.
  const magicFolders = ['src', 'dist'];

  // Set up the router to handle special folders for the component.
  // This will allow us to use the component's 'src' folder, etc.
  magicFolders.forEach((folder) => {
    // Note the underscores appended to the routes.
    const magicRoutes = [`/_${folder}/(.*)`, `/(.*)/_${folder}/(.*)`];

    router.get(magicRoutes, async (ctx, next) => {
      const magicPath = ctx.path.replace(`/_${folder}/`, `/${folder}/`);
      ctx.state.filePath = `${dirs.target}${magicPath}`;
      await next();
    });
  });

  // Collect routes for this tool's template folder.
  const templateRoutes = ['/_templates/(.*)', '/(.*)/_templates/(.*)'];

  // Set up the router to load internal templates from this tool.
  // This allows components to load files from the "templates" folder here.
  router.get(templateRoutes, async (ctx, next) => {
    const indexAfterTemplates = ctx.path.indexOf('_templates/') + 11;
    const templateFile = ctx.path.substring(indexAfterTemplates);

    ctx.state.filePath = `${dirs.command}/templates/${templateFile}`;

    await next();
  });

  // Set up the router to load files from each "examples" folder.
  examples.forEach((example) => {
    const { exampleRoute, absoluteDir } = example;

    const koaRoute = exampleRoute ? `/${exampleRoute}/(.*)` : '/(.*)';

    router.get(koaRoute, async (ctx, next) => {
      const exampleFile = exampleRoute
        ? ctx.path.replace(`/${exampleRoute}`, '')
        : ctx.path;

      if (!ctx.state.filePath) {
        ctx.state.filePath = `${absoluteDir}${exampleFile}`;
      }

      await next();
    });
  });

  /*
    Forgive this brief intermission while we set up logging.
  */

  // Set up the router to perform the following actions against all requests.
  router.get([`/(.*)`], async (ctx, next) => {
    // Defer to next middleware.
    await next();

    // After all asset middlewares are complete below, log the request.
    if (ctx.status !== 404) {
      console.log(`Served: ${ctx.path} => ${ctx.state.filePath}`);
    } else {
      console.log(`Not found: ${ctx.path} => ${ctx.state.filePath}`);
    }
  });

  /* 
    Now that we have a filePath, we can process assets below. 
  */

  // Handle templated HTML.
  router.get('/(.*).html', htmlHandler);

  // Handle CSS and Sass.
  router.get('/(.*).css', cssHandler);

  // Handle JS.
  router.get('/(.*).js', jsHandler);

  // Return the router for consumption by a Koa app.
  return router;
};
