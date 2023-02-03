import esbuild from 'esbuild';

// Handle JS.
export const jsHandler = async (ctx) => {
  // Build and bundle up the JS via esbuild.
  await esbuild
    .build({
      entryPoints: [ctx.state.filePath],
      bundle: true,
      format: 'esm',
      write: false,
      loader: {
        '.css': 'text',
        '.html': 'text',
      },
    })
    .then((result) => {
      const js = result.outputFiles[0].text;
      ctx.body = js;
      ctx.type = 'text/javascript';
    })
    .catch(() => {
      ctx.body = 'Not found';
      ctx.status = 404;
    });
};
