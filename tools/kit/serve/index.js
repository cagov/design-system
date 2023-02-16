import Koa from 'koa';
import serveStatic from 'koa-static';
import koaMount from 'koa-mount';
import websockify from 'koa-websocket';
import glob from 'glob';
import chalk from 'chalk';
import path from 'path';
import { createRouter } from './router.js';
import { createSocketRouter } from './watcher.js';

export const serve = (options) => {
  const { port, dirs } = options;

  // Initialize a websockets-enabled Koa app.
  const app = websockify(new Koa());

  // Initialize the websockets router. Add it to the Koa app.
  const socketRouter = createSocketRouter();
  app.ws.use(socketRouter.routes()).use(socketRouter.allowedMethods());

  // This is where Base CSS expects to find fonts.
  // Can't be helped here.
  const fontsDir = `${dirs.command}/templates/fonts`;
  app.use(koaMount('/fonts', serveStatic(fontsDir)));

  // Find all the "examples" folders.
  const examples = glob
    .sync(`${dirs.target}/**/examples`)
    .filter((exampleDir) => !exampleDir.includes('node_modules'))
    .map((exampleDir) => {
      // This route is how you'll access this folder via URL.
      const exampleRoute = exampleDir
        .replace(/examples$/g, '') // Remove "examples" from end of path
        .replace(dirs.target, '') // Remove any supplied dir from front of path
        .replace(/^\/+|\/+$/g, ''); // Remove slashes from front and back

      // Get the full, absolute file system path.
      const absoluteDir = path.resolve(exampleDir);

      // Get all the HTML files in this example folder.
      const exampleFiles = glob
        .sync(`${absoluteDir}/**/*.html`)
        .map((exampleFile) => {
          const fileStem = exampleFile.replace(exampleDir, '');
          const fileName = fileStem.replace(/^\/+/g, '');
          const fileRoute = `/${exampleRoute}/${fileName}`.replace('//', '/');
          return {
            fileName,
            fileRoute,
          };
        });

      // Get the name of the parent folder.
      const exampleName = absoluteDir
        .replace(/\/examples$/g, '') // Remove '/examples' from the end
        .replace(/^.+\//, ''); // Remove everything before final slash from front

      return {
        exampleDir,
        exampleRoute,
        exampleFiles,
        exampleName,
        absoluteDir,
      };
    });

  // Set up static file servers for each "examples" folder.
  // { defer: true } ensures we can process assets in subsequent middlewares.
  examples.forEach(({ exampleDir, exampleRoute }) => {
    app.use(
      koaMount(`/${exampleRoute}`, serveStatic(exampleDir, { defer: true })),
    );
  });

  // Create the router for our components.
  const router = createRouter(options, examples);

  // Start up the app!
  app.use(router.routes()).use(router.allowedMethods()).listen(port);

  const serveUrl = `http://localhost:${port}`;
  const digestUrl = `${serveUrl}/_meta/digest.html`;
  const servePath = dirs.target.replace(`${dirs.current}/`, '');

  console.log('Entering serve mode');
  console.log(`Serving from ${servePath}\n`);

  console.log(`Dev server started at ${chalk.underline(serveUrl)}`);
  console.log(`Components listed at ${chalk.underline(digestUrl)}\n`);
};
