import Koa from 'koa';
import serveStatic from 'koa-static';
import koaMount from 'koa-mount';
import websockify from 'koa-websocket';
import glob from 'glob';
import { createRouter } from './router.js';
import { createSocketRouter } from './watcher.js';

export const serve = (options) => {
  const { 
    port = 3000,
    dir
  } = options;

  console.log(options)

  const fontsDir = `${options.dirs.command}/templates/fonts`;
  const serveDir = dir ? `${dir}/` : '';

  const app = websockify(new Koa());

  const socketRouter = createSocketRouter();

  app.ws
    .use(socketRouter.routes())
    .use(socketRouter.allowedMethods());

  app.use(koaMount('/fonts', serveStatic(fontsDir)));

  const exampleDirs = glob
    .sync(`${serveDir}**/examples`)
    .filter((exampleDir) => !exampleDir.includes('node_modules'));

  exampleDirs.forEach((exampleDir) => {
    const exampleRoute = exampleDir
      .replace(/examples$/g, '') // Remove "examples" from end of path
      .replace(serveDir, '') // Remove any supplied dir from front of path.
      .replace(/^\/+|\/+$/g, ''); // Remove slashes from front and back

    app.use(koaMount(`/${exampleRoute}`, serveStatic(exampleDir, { defer: true })));
  });

  const packageFiles = glob.sync(`${serveDir}**/package.json`);

  const components = packageFiles.map((packageFile) => {
    const packageDir = packageFile
      .replace('package.json', '') // Remove package.json to expose directory
      .replace(/\/+$/g, ''); // Remove slashes from back

    const packageRoute = packageDir
      .replace(serveDir, '') // Remove any supplied dir from front of path
      .replace(/^\/+|\/+$/g, ''); // Remove slashes from front and back

    return {
      dir: packageDir,
      route: packageRoute
    };
  });

  const router = createRouter(options, components);

  app
    .use(router.routes())
    .use(router.allowedMethods())
    .listen(port);
  
  console.log(`Dev server started: http://localhost:${port}`);
};
