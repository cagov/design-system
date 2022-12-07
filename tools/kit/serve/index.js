import Koa from 'koa';
import serveStatic from 'koa-static';
import koaMount from 'koa-mount';
import websockify from 'koa-websocket';
import path from 'path';
import url from 'url';
import { router } from './router.js';
import { socketRouter } from './watcher.js';

const thisDir = url.fileURLToPath(path.dirname(import.meta.url));
const fontsDir = `${thisDir}/templates/fonts`;

const app = websockify(new Koa());

app.ws.use(socketRouter.routes()).use(socketRouter.allowedMethods());

app
  .use(koaMount('/fonts', serveStatic(fontsDir)))
  .use(koaMount('/', serveStatic('examples', { defer: true })))
  .use(router.routes())
  .use(router.allowedMethods());

export const serve = (options) => {
  const { port = 3000 } = options;

  app.listen(port);
  console.log(`Dev server started: http://localhost:${port}`);
};
