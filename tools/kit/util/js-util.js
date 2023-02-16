import { promises as fs } from 'fs';
import esbuild from 'esbuild';
import chalk from 'chalk';
import { FileReadError } from './file-util.js';

export class EsbuildError extends Error {
  constructor(message) {
    super(message);
    this.name = 'EsbuildError';
  }
}

/**
 * Builds and bundles JavaScript via esbuild.
 *
 * @param {*} filePath The .js path to the JavaScript file on the system.
 */
export const buildJavascript = (filePath, reportMissing = false) =>
  new Promise((resolve, reject) =>
    fs
      .readFile(filePath, 'utf-8')
      .catch((err) => {
        if (reportMissing) {
          console.log(`${chalk.bgGray('No JavaScript found, skipping')}\n`);
        }
        throw new FileReadError(err.message, err.code, err.path);
      })
      .then(() =>
        esbuild.build({
          entryPoints: [filePath],
          bundle: true,
          format: 'esm',
          write: false,
          logLevel: 'silent',
          loader: {
            '.css': 'text',
            '.html': 'text',
          },
        }),
      )
      .then((result) => {
        const js = result.outputFiles[0].text;

        resolve({
          body: js,
          type: 'esm',
          path: filePath,
        });
      })
      .catch(async (err) => {
        if (err.name === 'FileReadError') {
          reject(err);
        } else {
          const warnings = await esbuild.formatMessages(err.warnings, {
            kind: 'warning',
            color: true,
          });

          const errors = await esbuild.formatMessages(err.errors, {
            kind: 'error',
            color: true,
          });

          console.log(`\n${chalk.bgRed('** JavaScript Errors **')}\n`);
          console.log([...errors, ...warnings].join('\n'));

          const esbuildErr = new EsbuildError(err);
          reject(esbuildErr);
        }
      }),
  );
