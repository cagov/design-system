import { existsSync } from 'fs';
import esbuild from 'esbuild';

// Handle JS.
export const jsHandler = async (ctx) => {
  let js;

  // Build and bundle up the JS via esbuild.
  const jsFileExists = existsSync(ctx.state.filePath);
  if (jsFileExists) {
    const result = esbuild.buildSync({
      entryPoints: [ctx.state.filePath],
      bundle: true,
      format: 'esm',
      write: false,
      loader: { 
        '.css': 'text',
        '.html': 'text'
      }
    });

    js = result.outputFiles[0].text;
  }

  // Deliver.
  if (js) {
    ctx.body = js;
    ctx.type = "text/javascript";
  } else {
    ctx.body = "Not found";
    ctx.status = 404;
  }
};