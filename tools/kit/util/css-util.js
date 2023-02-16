import { promises as fs } from 'fs';
import sass from 'sass';
import chalk from 'chalk';
import url from 'url';
import { FileReadError } from './file-util.js';

export class CssError extends Error {
  constructor(message) {
    super(message);
    this.name = 'CssError';
  }
}

/**
 * Builds CSS and Sass files from the supplied filePath.
 *
 * The filePath should always have a suffix of .css.
 * If there's a .scss file instead, it'll automatically get picked up. Just use .css.
 * This design comes from serve-mode incoming HTTP requests, which are all .css.
 *
 * @param {*} filePath The normalized .css path to the CSS/SCSS file on the system.
 */
export const buildCss = (filePath, reportMissing = false) => {
  let cssFound;
  const cssPath = filePath;
  const cssPromise = new Promise((resolve, reject) =>
    fs
      .readFile(cssPath, 'utf-8')
      .catch((err) => {
        throw new FileReadError(err.message, err.code, err.path);
      })
      .then((str) => {
        cssFound = true;

        resolve({
          body: str,
          type: 'css',
          path: cssPath,
        });
      })
      .catch((err) => {
        if (err.name === 'FileReadError') {
          if (err.code === 'ENOENT') {
            cssFound = false;
          } else {
            console.log(err.message);
          }
          reject(err);
        } else {
          cssFound = true;
          console.log(`\n${chalk.bgRed('** CSS Errors **')}\n`);
          console.log(err);
          console.log('\n');
          reject(new CssError(err));
        }
      }),
  );

  let sassFound;
  const sassPath = cssPath.replace('.css', '.scss');
  const sassPromise = new Promise((resolve, reject) =>
    fs
      .readFile(sassPath, 'utf-8')
      .catch((err) => {
        throw new FileReadError(err.message, err.code, err.path);
      })
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
      .then((result) => {
        sassFound = true;

        resolve({
          body: result.css,
          type: 'sass',
          path: sassPath,
        });
      })
      .catch((err) => {
        if (err.name === 'FileReadError') {
          if (err.code === 'ENOENT') {
            sassFound = false;
          } else {
            console.log(err.message);
          }
          reject(err);
        } else {
          sassFound = true;
          console.log(`\n${chalk.bgRed('** Sass Errors **')}\n`);
          console.log(err.message);
          console.log('\n');
          reject(new CssError(err));
        }
      }),
  );

  return Promise.any([cssPromise, sassPromise]).catch((err) => {
    if (!cssFound && !sassFound) {
      if (reportMissing) {
        console.log(`${chalk.bgGray('No CSS or Sass found, skipping')}\n`);
      }
      throw new FileReadError('No CSS or Sass found');
    }
    throw err;
  });
};
