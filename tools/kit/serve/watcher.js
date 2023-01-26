import Router from '@koa/router';
import chokidar from 'chokidar';
import events from 'events';

/**
 * This is the watcher. It watches the component's files for changes.
 *
 * When a change is detected (by chokidar), the server sends a signal to
 * the browser to reload the page. This signal is sent via Websockets.
 *
 * The export is a Koa router, which should be installed in the Koa app.
 */
export const createSocketRouter = () => {
  const socketRouter = new Router();

  const eventEmitter = new events.EventEmitter();
  
  // Watches for file changes.
  const watcher = chokidar.watch('.', {
    ignored: '**/node_modules/**',
    ignoreInitial: true,
  });
  
  // Emits file change events.
  const notifyFile = (verb, filePath) => {
    console.log(`File ${verb}: ${filePath}. Reloading browser.`);
    eventEmitter.emit('file_changed');
  };
  
  // Performs the following actions on file changes.
  watcher
    .on('add', (filePath) => notifyFile('added', filePath))
    .on('change', (filePath) => notifyFile('changed', filePath))
    .on('unlink', (filePath) => notifyFile('removed', filePath));
  
  // Websockets server.
  socketRouter.get('/', async (ctx) => {
    ctx.websocket.send('connected');
  
    // Tell the browser to reload whenever a file changes.
    eventEmitter.once('file_changed', () => {
      ctx.websocket.send('reload');
    });
  });

  return socketRouter;
}