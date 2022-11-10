import Koa from 'koa';
import serveStatic from "koa-static"; 
import websockify from 'koa-websocket';
import { router } from './router.js';
import { socketRouter } from './watcher.js';

const app = websockify(new Koa());

app.ws
  .use(socketRouter.routes())
  .use(socketRouter.allowedMethods());

app
  .use(serveStatic('examples', { defer: true }))
  .use(router.routes())
  .use(router.allowedMethods())

export const serve = (options) => {
  const { port = 3000 } = options;

  app.listen(port);
  console.log(`Dev server started: http://localhost:${port}`);
}
