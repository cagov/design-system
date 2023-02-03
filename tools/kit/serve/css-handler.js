import { promises as fs } from 'fs';
import sass from 'sass';
import url from 'url';

// Handle CSS and Sass.
export const cssHandler = async (ctx) => {
  const cssPath = ctx.state.filePath;
  const cssPromise = new Promise((resolve, reject) =>
    fs
      .readFile(cssPath, 'utf-8')
      .then((str) =>
        resolve({
          body: str,
          type: 'css',
        }),
      )
      .catch(() => reject()),
  );

  const sassPath = ctx.state.filePath.replace('.css', '.scss');
  const sassPromise = new Promise((resolve, reject) =>
    fs
      .readFile(sassPath, 'utf-8')
      .then(() =>
        sass.compileAsync(sassPath, {
          sourceMap: false,
          sourceMapIncludeSources: false,
          importers: [
            {
              findFileUrl: (u) => {
                if (!u.startsWith('~')) return null;
                return new URL(
                  `${url.pathToFileURL('node_modules')}/${u.substring(1)}`,
                );
              },
            },
          ],
        }),
      )
      .then((result) =>
        resolve({
          body: result.css,
          type: 'sass',
        }),
      )
      .catch(() => reject()),
  );

  await Promise.any([cssPromise, sassPromise])
    .then((css) => {
      if (css.type === 'sass') {
        ctx.state.filePath = sassPath;
      }
      ctx.body = css.body;
      ctx.type = 'text/css';
    })
    .catch(() => {
      ctx.body = 'Not found';
      ctx.status = 404;
    });
};
